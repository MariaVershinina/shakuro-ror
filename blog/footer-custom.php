<?php
/**
 * The template for showing our footer
 *
 * @package Storey
 * @since 1.0
 */
$theme_options = get_theme_mod('zilla_theme_options');
?>

      <?php zilla_content_end(); ?>
      <!-- END #content .site-content-->
      </div>
    </div>

    <?php zilla_footer_before(); ?>
    <!-- BEGIN #footer -->
    <footer class="footer">
      <div class="content">
        <div class="footer-top-part">
          <div class="footer-logo">
            <a class="footer-site-logo" href="https://shakuro.com/index.html" target="_self">shakuro</a>
          </div>
          <div class="footer-nav">
            <div class="footer-nav-row">
              <div class="footer-nav-row-wrapper">
                <span class="footer-nav-title">Extras</span>
                <ul class="footer-nav-list">
                  <li class="footer-nav-item">
                    <a href="javascript:void(0)" class="footer-nav-link footer-nav-link--disable" title="Coming soon" data-original-title="Coming soon" data-placement="bottom" data-toggle="tooltip">ROR Development</a>
                  </li>
                  <li class="footer-nav-item">
                    <a href="<?php echo home_url(); ?>" class="footer-nav-link" title="Blog">Blog</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="footer-nav-row">
              <div class="footer-nav-row-wrapper">
                <span class="footer-nav-title">Where we are</span>
                <ul class="footer-nav-list">
                  <li class="footer-nav-item">
                    <p class="footer-nav-txt">2035 Sunset Lake Rd #2, Newark, 19702, Delaware, USA</p>
                    <p class="footer-nav-txt">2/6 Tramvaynaya st. 350000, Krasnodar, Russia</p>
                  </li>
                </ul>
              </div>
            </div>

            <div class="footer-nav-row">
              <div class="footer-nav-row-wrapper">
                <span class="footer-nav-title">Contact</span>
                <ul class="footer-nav-list">
                  <li class="footer-nav-item">
                    <a class="footer-nav-tel" href="tel:+16465200670">+1&nbsp;646&nbsp;520 0670</a>
                    <a class="footer-nav-email" href="mailto:hello@shakuro.com">hello@shakuro.com</a>
                    <ul class="footer-soc-list">
                      <li class="footer-soc-item">
                        <a href="https://twitter.com/shakuro" class="footer-soc-icon-tweeter footer-soc-link" title="Tweeter"></a>
                      </li>
                      <li class="footer-soc-item">
                        <a href="https://dribbble.com/shakuro" class="footer-soc-icon-dribbble footer-soc-link" title="Dribbble"></a>
                      </li>
                      <li class="footer-soc-item">
                        <a href="https://www.behance.net/shakuro" class="footer-soc-icon-behance footer-soc-link" title="Behance"></a>
                      </li>
                      <li class="footer-soc-item">
                        <a href="https://www.facebook.com/shakurocom/" class="footer-soc-icon-facebook footer-soc-link" title="Facebook"></a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-bottom-part">
          <div class="footer-copyright">
            <p class="footer-copyright-txt">&copy;&nbsp;2006&nbsp;&mdash; 2016 Shakuro</p>
          </div>
          <ul class="footer-partners-list">
            <li class="footer-partners-item">
              <span class="partner-clutch-icon"></span>
            </li>
            <li class="footer-partners-item">
              <span class="partner-microsoft-icon"></span>
            </li>
          </ul>
        </div>
      </div>
    </footer>

    <div id="fixed"></div>
    <div id="mobile-block">
      <div class="mobile-menu">
        <div class="content">
          <nav>
            <ul>
              <li>
                <a class="touch-enable" href="https://shakuro.com/about.html">About</a>
              </li>
              <li>
                <a class="touch-enable" href="https://shakuro.com/showcase.html">Showcase</a>
              </li>
              <li>
                <a class="touch-enable" href="<?php echo home_url(); ?>" title="Blog">Blog</a>
              </li>
              <li>
                <a class="get-in-touch-mobile touch-enable" href="https://shakuro.com/about.html#contact-form">Request a&nbsp;quote</a>
              </li>
            </ul>
          </nav>
          <div class="we-are-on">
            <div class="separator">
              <div>We&nbsp;are&nbsp;on</div>
            </div>
            <ul class="social-mobile">
              <li class="dribble">
                <a class="touch-enable" href="https://dribbble.com/shakuro">Dribbble</a>
              </li>
              <li class="behance">
                <a class="touch-enable" href="https://www.behance.net/shakuro">Behance</a>
              </li>
              <li class="facebook">
                <a class="touch-enable" href="https://www.facebook.com/shakurocom/">facebook</a>
              </li>
              <li class="twitter">
                <a class="touch-enable" href="https://twitter.com/shakuro">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <?php zilla_footer_after(); ?>

  <!-- END #container .hfeed .site -->
  </div>

  <!-- Theme Hook -->
  <?php wp_footer(); ?>
  <?php zilla_body_end(); ?>

  <!-- <?php echo 'Ran '. $wpdb->num_queries .' queries '. timer_stop(0, 2) .' seconds'; ?> -->
<!--END body-->
</body>
<!--END html-->
</html>
