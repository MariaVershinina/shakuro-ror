<?php
  require_once($_SERVER['DOCUMENT_ROOT'].'/lib/2checkout-php/lib/Twocheckout.php');

  define('PRIVATE_KEY', 'too private to commit on git');
  define('SELLER_ID', '102953008');
  define('SANDBOX', false);

  function echo_json($status, $response) {
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($response);
    die();
  }

  // function check_duplicate_transaction($params) {
  //   session_start();
  //   unset($params['token']);
  //
  //   if ($_SESSION['last_transaction'] == $params) {
  //     $response = ['message' => 'Payment already sent'];
  //     echo_json(400, $response);
  //   }
  //
  //   $_SESSION['last_transaction'] = $params;
  // }

  $params = json_decode(file_get_contents('php://input'), true);
//  check_duplicate_transaction($params);

  Twocheckout::privateKey(PRIVATE_KEY);
  Twocheckout::sellerId(SELLER_ID);
  Twocheckout::sandbox(SANDBOX);

  try {
    $billingAddr = array(
      'name' => $params['name'],
      'addrLine1' => $params['addrLine1'],
      'addrLine2' => $params['addrLine2'],
      'city' => $params['city'],
      'state' => $params['state'],
      'zipCode' => $params['zipCode'],
      'country' => $params['country'],
      'email' => $params['email'],
    );

    $auth = array(
      'currency' => 'USD',
      'token' => $params['token'],
      'total' => $params['total'],
      'merchantOrderId' => $params['paymentReference'],
      'billingAddr' => $billingAddr
    );

    $response = Twocheckout_Charge::auth($auth, 'array');
    echo_json(200, $response);
  } catch (Twocheckout_Error $e) {
    $response = ['message' => $e->getMessage()];
    echo_json(400, $response);
  }
?>
