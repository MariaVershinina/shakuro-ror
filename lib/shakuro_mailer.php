<?php
class ShakuroMailer extends PHPMailer {
  public function __construct() {
    parent::__construct();
    $this->IsSMTP();
    $this->SMTPDebug = 0;
    $this->SMTPAuth  = true;
    $this->Host      = "ssl://smtp.gmail.com";
    $this->Port      = 465;
    $this->Username  = "collabok@shakuro.com";
    $this->Password  = "murzilka";
  }
}
?>