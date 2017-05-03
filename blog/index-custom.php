<?php
/**
 * The main template file
 *
 * @package Storey
 * @since 1.0
 */
get_header(); ?>

  <!--BEGIN #primary .site-main-->
  <div id="primary" class="site-main clearfix" role="main">
  <?php if( have_posts() ) : ?>

    <?php while (have_posts()) : the_post(); ?>

      <?php get_template_part('content', get_post_format() ); ?>

    <?php endwhile; ?>

  <?php else : ?>

    <?php get_template_part('content', 'none'); ?>

  <?php endif; ?>

  <!--END #primary .site-main-->
  </div>

  <!-- END #content .site-content hack -->
  </div>
  <div>

<?php get_footer(); ?>
