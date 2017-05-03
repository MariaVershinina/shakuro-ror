<?php
/**
 * The Header template for our theme
 *
 * @package Storey
 * @since 1.0
 */

$theme_options = get_theme_mod('zilla_theme_options');
?><!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->

<!-- A ThemeZilla design (http://www.themezilla.com) - Proudly powered by WordPress (http://wordpress.org) -->

<!-- BEGIN head -->
<head>
  <!-- Meta Tags -->
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="viewport" content="width=device-width" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <?php zilla_meta_head(); ?>
  <!-- Custom Font -->
  <link href="https://fonts.googleapis.com/css?family=Montserrat|Open+Sans" rel="stylesheet">
  <!-- Title -->
  <title><?php wp_title( '|', true, 'right' ); ?></title>

  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

  <?php wp_head(); ?>
  <?php zilla_head(); ?>
<!-- END head -->
</head>

<!-- BEGIN body -->
<body <?php body_class(); ?>>
<?php zilla_body_start(); ?>

  <header class="header">
    <div class="content">
      <div class="logo">
        <a class="site-logo" href="https://shakuro.com/index.html" target="_self">shakuro</a>
      </div>
      <nav>
        <ul>
          <li class="get-in-touch">
            <a class="scroll-to-form nav-btn" href="https://shakuro.com/about.html#contact-form">Request a&nbsp;quote</a>
          </li>
          <li>
            <a href="<?php echo home_url(); ?>" class="nav-link" title="Blog">Blog</a>
          </li>
          <li>
            <a href="https://shakuro.com/showcase.html" class="nav-link">showcase</a>
          </li>
          <li>
            <a href="https://shakuro.com/about.html" class="nav-link">about</a>
          </li>
        </ul>
      </nav>
      <div class="mobile-menu-button">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="close"></div>
      </div>
    </div>
  </header>

  <!-- BEGIN #container -->
  <div id="container" class="hfeed site">

    <?php
    if( is_home() || is_archive() || is_search() ){
      $post = get_post( get_option( 'page_for_posts' ) );
    }

    $header_image = '';
    $featured_id = '';

    // If the portfolio page has the same slug as the portfolio archive, show the featured image from the page.
    if (is_post_type_archive('portfolio') && zilla_portfolio_template_ID_query()) {
      $featured_id = zilla_portfolio_template_ID_query();
    } else if (isset($post->ID)) {
      $featured_id = $post->ID;
    }

    // Get the featured image data
    if ( isset( $featured_id ) && has_post_thumbnail( $featured_id ) ) {
      $header_image = zilla_get_thumb_data( $featured_id );
    }
    ?>

    <?php zilla_header_before(); ?>
    <!-- BEGIN #masthead .site-header -->
    <div id="masthead" class="site-header<?php echo $header_image ? ' has-image' : ''; ?>" role="banner">
    <?php zilla_header_start(); ?>
      <?php if ( $header_image ) { ?>
        <div class="site-header-bg-img">
          <?php zilla_post_thumbnail( $featured_id ); ?>
        </div>
      <?php } ?>
      <div class="header-area">
        <div class="inner clearfix">

          <?php zilla_nav_before(); ?>

        </div>
          <?php zilla_nav_after(); ?>

          <?php if( is_page_template( 'template-home.php' ) ){ ?>
            <div class="header-content <?php echo $header_image ? 'with-thumbnail' : 'no-thumbnail'; ?>">
              <?php if( have_posts() ) : while (have_posts()) : the_post(); ?>
                <div data-start="opacity:1;" data-top-bottom="opacity:0;">
                  <?php the_content(); ?>
                </div>
              <?php endwhile; endif; wp_reset_query(); ?>
            </div>
          <?php }
          else if( is_single() || is_page() || is_home() || is_post_type_archive('portfolio') ){
            ?>
            <div class="header-content <?php echo $header_image ? 'with-thumbnail' : 'no-thumbnail'; ?>">
              <div data-start="opacity:1;" data-100-top="opacity:0;">
                <h1 class="page-title"><?php echo get_the_title( $featured_id ); ?></h1>

                <?php
                $subtitle = get_post_meta( $featured_id, '_zilla_page_subtitle', true );
                if( $subtitle ){ ?>
                <p class="lead"><?php echo $subtitle; ?></p>
                <?php } ?>
                <?php if( is_singular( 'portfolio' ) ) { ?>
                <div class="entry-categories">
                  <ul>
                    <?php
                    $terms = get_the_terms( $post->ID, 'portfolio-type' );
                    if( !empty($terms) ) {
                      foreach( $terms as $term ) {
                        echo '<li><a href="'. get_term_link( $term ) .'">'. $term->name .'</a></li>';
                      }
                    }
                    ?>
                  </ul>
                </div>
                <?php } else if( is_singular( 'post') ) { ?>
                  <p class="lead"><?php
                    echo get_the_category_list(' ');
                    if(get_the_tag_list()) {
                      ?><?php echo get_the_tag_list(' ',' ','');
                    }?></p>
                <?php }
                  if( is_page_template( 'template-portfolio.php' ) || is_post_type_archive('portfolio') ){
                  $terms = get_terms( 'portfolio-type', array('hierarchical' => false) );
                  if( count($terms) ){
                    echo '<div class="entry-categories"><ul class="portfolio-type-nav">';
                    echo '<li><a href="#" data-filter="*" class="active">'. __( 'All', 'zilla' ) .'</a></li>';
                    foreach( $terms as $term ) {
                      $output = '<li><a href="'. get_term_link($term) .'" data-filter=".term-'. $term->slug .'">'. $term->name .'</a>';
                      echo $output .'</li>';
                    }
                    echo '</ul></div>';
                  }
                } ?>
              </div>
            </div>
          <?php }
          else if( is_archive() || is_search() && !is_post_type_archive('portfolio')){
            ?>
            <div class="header-content <?php echo $header_image ? 'with-thumbnail' : 'no-thumbnail'; ?>">
              <div data-start="opacity:1;" data-100-top="opacity:0;">
                <h1 class="page-title"><?php
                  if ( is_tax( 'portfolio-type' ) ) {
                    _e( 'Archives', 'zilla' );
                  } else {
                    _e( 'Blog', 'zilla' );
                  }
                ?></h1>
                <p class="lead archive-meta">
                <?php
                  $blog_url = get_permalink( $post->ID );
                  if ( is_tax( 'portfolio-type' ) ) {
                    _e( 'Portfolio Items Tagged', 'zilla' );
                    echo ' <a href="'. $blog_url .'" class="close"><span>&#215;</span> '. single_term_title( '', false ) .'</a>';
                  } else {
                    if( is_category() ) {
                      _e( 'Articles in Category', 'zilla' );
                      echo ' <a href="'. $blog_url .'" class="close"><span>&#215;</span> '. single_cat_title( '', false ) .'</a>';
                    } elseif( is_tag() ) {
                      _e( 'Articles Tagged', 'zilla' );
                      echo ' <a href="'. $blog_url .'" class="close"><span>&#215;</span> '. single_tag_title( '', false ) .'</a>';
                    } elseif( is_search() ) {
                      _e( 'Your Search Results for', 'zilla' );
                      echo ' <a href="'. $blog_url .'" class="close"><span>&#215;</span> '. get_search_query() .'</a>';
                    } elseif( is_author() ) {
                      _e( 'Articles by Author', 'zilla' );
                      echo ' <a href="'. $blog_url .'" class="close"><span>&#215;</span> '. get_the_author() .'</a>';
                    } else {
                      _e('Archives', 'zilla');
                    }
                  }
                ?>
                </p>
              </div>
            </div>
          <?php }

          else if( is_404() ) {
            ?>
            <div class="header-content <?php echo $header_image ? 'with-thumbnail' : 'no-thumbnail'; ?>">
              <div data-start="opacity:1;" data-100-top="opacity:0;">
                <h1 class="page-title"><?php _e('Error 404 ', 'zilla'); ?></h1>
              </div>
            </div>
          <?php } ?>
        </div>
      </div>
    <?php zilla_header_end(); ?>
    <!--END #masthead .site-header-->
    </div>
    <?php zilla_header_after(); ?>

    <div class="site-content-wrap">
      <div class="sub-nav-block">
        <div class="content">
          <div class="sub-nav-wrapper">
            <div class="cat-nav">
              <ul class="cat-nav-list">
                <?php wp_list_categories( array(
                  'depth'        => 1,
                  'orderby'      => 'name',
                  'hierarchical' => true,
                  'title_li'     => ''
                ) ); ?>
              </ul>
            </div>
            <div class="srch-field">
              <?php get_search_form(); ?>
            </div>
          </div>
        </div>
      </div>

      <!--BEGIN #content .site-content-->
      <div id="content" class="content">
      <?php zilla_content_start(); ?>
