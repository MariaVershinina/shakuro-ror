module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> | ' +
    '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>; */',

    htmlhint: {
      build: {
        options: {
          'tag-pair': true,
          'tagname-lowercase': true,
          'attr-lowercase': true,
          'attr-value-double-quotes': true,
          'doctype-first': true,
          'spec-char-escape': true,
          'id-unique': true,
          'style-disabled': true
        },

        files: {
          src: ['*.html']
        }
      }
    },

    compass: {
      build: {
        options: {
          basePath: './',
          httpPath: '../',
          sassDir: 'src/sass',
          cssDir: 'css',
          imagesDir: 'src/img',
          generatedImagesDir: 'img/sprites',
          httpGeneratedImagesPath: '../img/sprites',
          javascriptsDir: 'js',
          relativeAssets: false,
          noLineComments: true
        }
      }
    },

    coffee: {
      glob_to_multiple: {
        expand: true,
        flatten: true,
        cwd: './src/coffee',
        src: ['*.coffee'],
        dest: './src/js',
        ext: '.js'
      }
    },

    autoprefixer: {
      build: {
        options: {

        },
        files: {
          'css/style.css': 'css/style.css',
          'css/style_cb.css': 'css/style_cb.css'
        }
      }
    },

    csso: {
      dynamic_mappings: {
        expand: true,
        cwd: 'css/',
        src: ['*.css'],
        dest: 'css/',
        ext: '.css',
      },
    },

    concat: {
      plugins: {
        options: {
          'separator': '  '
        },
        files: {
          'js/plugins.js': ['js/plugins/**/*.js']
        }
      },
      css : {
        options: {
          'separator': '      '
        },
        files: {
          'css/site.css': ['!css/site.css', '!css/site.min.css', 'css/vendor/*.css', 'css/style.css' ]
        }
      }
    },

    uglify: {
      my_target: {
        files: {
          'js/custom-index.min.js': [ 'src/js/modernizr.js',
                               'src/js/jquery-1.8.3.min.js',
                               'src/js/bowser.js',
                               'src/js/functions/mobile_menu_init.js',
                               'src/js/functions/mobile_nav_vertical_centered.js',
                               'src/js/functions/sticky_header_init.js',
                               'src/js/bootstrap.js',
                               'src/js/tooltip_init.js',
                               'src/js/pages/custom_index.js'],
          'js/index.min.js': [ 'src/js/modernizr.js',
                              'src/js/jquery-1.8.3.min.js',
                              'src/js/jquery.bxslider.min.js',
                              'src/js/bowser.js',
                              'src/js/functions/mobile_menu_init.js',
                              'src/js/functions/before_loading.js',
                              'src/js/blazy.js',
                              'src/js/functions/mouse.js',
                              'src/js/functions/mobile_nav_vertical_centered.js',
                              'src/js/functions/sticky_header_init.js',
                              'src/js/functions/validate_index_form.js',
                              'src/js/functions/touch_disable.js',
                              'src/js/functions/touch_enable.js',
                              'src/js/functions/scroll_to_form.js',
                              'src/js/functions/fullpage_init.js',
                              'src/js/jribbble.min.js',
                              'src/js/home_main_banner.js',
                              'src/js/functions/jribbble_init.js',
                              'src/js/pages/index.js',
                              'src/js/footer_btn_scroll.js',
                              'src/js/bootstrap.js',
                              'src/js/tooltip_init.js',
                              'src/js/lazy_load_init.js' ],
          'js/pay.min.js': [ 'src/js/modernizr.js',
                              'src/js/jquery-1.8.3.min.js',
                              'src/js/jquery.easing-1.3.js',
                              'src/js/jquery.bxslider.min.js',
                              'src/js/autoNumeric.js',
                              'src/js/jquery.maskx.js',
                              'src/js/blazy.js',
                              'src/js/bowser.js',
                              'src/js/functions/mobile_menu_init.js',
                              'src/js/functions/before_loading.js',
                              'src/js/sly.min.js',
                              'src/js/functions/mobile_nav_vertical_centered.js',
                              'src/js/functions/sticky_header_init.js',
                              'src/js/functions/touch_disable.js',
                              'src/js/functions/touch_enable.js',
                              'src/js/footer_btn_scroll.js',
                              'src/js/lazy_load_init.js',
                              'src/js/bootstrap.js',
                              'src/js/tooltip_init.js',
                              'src/js/payment_gen.js',
                              'src/js/pages/payment.js',
                              'src/js/payment_form.js'],
          'js/showcase.min.js': [ 'src/js/modernizr.js',
                                  'src/js/jquery-1.8.3.min.js',
                                  'src/js/jquery.fullPage.min.js',
                                  'src/js/bowser.js',
                                  'src/js/functions/mobile_menu_init.js',
                                  'src/js/functions/before_loading.js',
                                  'src/js/functions/mouse.js',
                                  'src/js/functions/mobile_nav_vertical_centered.js',
                                  'src/js/functions/sticky_header_init.js',
                                  'src/js/functions/touch_disable.js',
                                  'src/js/functions/touch_enable.js',
                                  'src/js/functions/fullpage_init.js',
                                  'src/js/bootstrap.js',
                                  'src/js/tooltip_init.js',
                                  'src/js/pages/showcase.js' ],
          'js/vulcun.min.js': [ 'src/js/modernizr.js',
                                'src/js/jquery-1.8.3.min.js',
                                'src/js/jquery.easing-1.3.js',
                                'src/js/jquery.bxslider.min.js',
                                'src/js/sly.min.js',
                                'src/js/functions/mobile_menu_init.js',
                                'src/js/functions/before_loading.js',
                                'src/js/functions/first_slide_height.js',
                                'src/js/functions/mobile_nav_vertical_centered.js',
                                'src/js/functions/sticky_header_init.js',
                                'src/js/functions/validate_index_form.js',
                                'src/js/functions/touch_disable.js',
                                'src/js/functions/touch_enable.js',
                                'src/js/functions/scroll_to_form.js',
                                'src/js/functions/b23_tablet_centered.js',
                                'src/js/functions/slider_init.js',
                                'src/js/functions/iPhonesFadeInEffect.js',
                                'src/js/bootstrap.js',
                                'src/js/tooltip_init.js',
                                'src/js/pages/vulcun.js',
                                'src/js/footer_btn_scroll.js' ],
          'js/cb.min.js': [ 'src/js/modernizr.js',
                            'src/js/jquery-1.8.3.min.js',
                            'src/js/jquery.easing-1.3.js',
                            'src/js/jquery.bxslider.min.js',
                            'src/js/bowser.js',
                            'src/js/functions/mobile_menu_init.js',
                            'src/js/functions/before_loading.js',
                            'src/js/functions/first_slide_height.js',
                            'src/js/functions/mobile_nav_vertical_centered.js',
                            'src/js/functions/sticky_header_init.js',
                            'src/js/functions/validate_index_form.js',
                            'src/js/functions/touch_disable.js',
                            'src/js/functions/touch_enable.js',
                            'src/js/functions/scroll_to_form.js',
                            'src/js/functions/b23_tablet_centered.js',
                            'src/js/bootstrap.js',
                            'src/js/tooltip_init.js',
                            'src/js/pages/cb.js',
                            'src/js/video_banner.js',
                            'src/js/footer_btn_scroll.js' ],
          'js/cgplus.min.js': [ 'src/js/modernizr.js',
                                'src/js/jquery-1.8.3.min.js',
                                'src/js/jquery.bxslider.min.js',
                                'src/js/bowser.js',
                                'src/js/functions/mobile_menu_init.js',
                                'src/js/functions/before_loading.js',
                                'src/js/functions/mouse.js',
                                'src/js/functions/mobile_nav_vertical_centered.js',
                                'src/js/functions/sticky_header_init.js',
                                'src/js/functions/validate_index_form.js',
                                'src/js/functions/touch_disable.js',
                                'src/js/functions/touch_enable.js',
                                'src/js/functions/scroll_to_form.js',
                                'src/js/bootstrap.js',
                                'src/js/tooltip_init.js',
                                'src/js/pages/cgplus.js',
                                'src/js/footer_btn_scroll.js' ],
          'js/mymovies.min.js': [ 'src/js/modernizr.js',
                                'src/js/jquery-1.8.3.min.js',
                                'src/js/jquery.easing-1.3.js',
                                'src/js/jquery.bxslider.min.js',
                                'src/js/sly.min.js',
                                'src/js/functions/mobile_menu_open.js',
                                'src/js/functions/mobile_menu_close.js',
                                'src/js/functions/mobile_menu_init.js',
                                'src/js/functions/mobile_menu_trigger.js',
                                'src/js/functions/before_loading.js',
                                'src/js/functions/first_slide_height.js',
                                'src/js/functions/mobile_nav_vertical_centered.js',
                                'src/js/functions/sticky_header_init.js',
                                'src/js/functions/validate_index_form.js',
                                'src/js/functions/touch_disable.js',
                                'src/js/functions/touch_enable.js',
                                'src/js/functions/scroll_to_form.js',
                                'src/js/functions/b23_tablet_centered.js',
                                'src/js/functions/slider_init.js',
                                'src/js/bootstrap.js',
                                'src/js/tooltip_init.js',
                                'src/js/pages/mymovies.js',
                                'src/js/footer_btn_scroll.js' ],
          'js/xmastree.min.js': [ 'src/js/modernizr.js',
                                'src/js/jquery-1.8.3.min.js',
                                'src/js/jquery.easing-1.3.js',
                                'src/js/jquery.bxslider.min.js',
                                'src/js/sly.min.js',
                                'src/js/functions/mobile_menu_init.js',
                                'src/js/functions/before_loading.js',
                                'src/js/functions/first_slide_height.js',
                                'src/js/functions/mobile_nav_vertical_centered.js',
                                'src/js/functions/sticky_header_init.js',
                                'src/js/functions/validate_index_form.js',
                                'src/js/functions/touch_disable.js',
                                'src/js/functions/touch_enable.js',
                                'src/js/functions/scroll_to_form.js',
                                'src/js/functions/b23_tablet_centered.js',
                                'src/js/functions/slider_init.js',
                                'src/js/functions/iPhonesFadeInEffect.js',
                                'src/js/bootstrap.js',
                                'src/js/tooltip_init.js',
                                'src/js/pages/vulcun.js',
                                'src/js/footer_btn_scroll.js' ],
          'js/society.min.js': [ 'src/js/modernizr.js',
                                'src/js/jquery-1.8.3.min.js',
                                'src/js/jquery.easing-1.3.js',
                                'src/js/jquery.bxslider.min.js',
                                'src/js/sly.min.js',
                                'src/js/functions/mobile_menu_init.js',
                                'src/js/functions/before_loading.js',
                                'src/js/functions/first_slide_height.js',
                                'src/js/functions/mobile_nav_vertical_centered.js',
                                'src/js/functions/sticky_header_init.js',
                                'src/js/functions/validate_index_form.js',
                                'src/js/functions/touch_disable.js',
                                'src/js/functions/touch_enable.js',
                                'src/js/functions/scroll_to_form.js',
                                'src/js/functions/b23_tablet_centered.js',
                                'src/js/functions/slider_init.js',
                                'src/js/functions/iPhonesFadeInEffect.js',
                                'src/js/bootstrap.js',
                                'src/js/tooltip_init.js',
                                'src/js/pages/society.js',
                                'src/js/footer_btn_scroll.js' ],
          'js/pay_static.min.js': [ 'src/js/modernizr.js',
                                'src/js/jquery-1.8.3.min.js',
                                'src/js/jquery.easing-1.3.js',
                                'src/js/jquery.bxslider.min.js',
                                'src/js/sly.min.js',
                                'src/js/blazy.js',
                                'src/js/functions/touch_disable.js',
                                'src/js/functions/touch_enable.js',
                                'src/js/prism.js',
                                'src/js/footer_btn_scroll.js',
                                'src/js/lazy_load_init.js',
                                'src/js/payments_static_init.js'],
          'js/organizeme.min.js': [ 'src/js/modernizr.js',
                                    'src/js/jquery-1.8.3.min.js',
                                    'src/js/jquery.easing-1.3.js',
                                    'src/js/jquery.bxslider.min.js',
                                    'src/js/bowser.js',
                                    'src/js/functions/mobile_menu_init.js',
                                    'src/js/functions/before_loading.js',
                                    'src/js/functions/first_slide_height.js',
                                    'src/js/functions/mobile_nav_vertical_centered.js',
                                    'src/js/functions/sticky_header_init.js',
                                    'src/js/functions/validate_index_form.js',
                                    'src/js/functions/touch_disable.js',
                                    'src/js/functions/touch_enable.js',
                                    'src/js/functions/scroll_to_form.js',
                                    'src/js/bootstrap.js',
                                    'src/js/tooltip_init.js',
                                    'src/js/pages/organizeme.js',
                                    'src/js/video_banner.js',
                                    'src/js/footer_btn_scroll.js' ],
          'js/404.min.js': ['src/js/modernizr.js',
                            'src/js/jquery-1.8.3.min.js'],
          'js/rubyonrails.min.js': ['src/js/modernizr.js',
                                    'src/js/jquery-1.8.3.min.js',
                                    'src/js/jquery.easing-1.3.js',
                                    'src/js/select2.min.js',
                                    'src/js/bowser.js',
                                    'src/js/functions/mobile_menu_init_aux.js',
                                    'src/js/functions/sticky_header_init.js',
                                    'src/js/functions/before_loading.js',
                                    'src/js/ror_hmb.js',
                                    'src/js/pages/ror.js'],
        }
      }
    },

    watch: {
      html: {
        files: ['*.html'],
        tasks: ['htmlhint']
      },
      coffee: {
        files: 'src/coffee/*.coffee',
        tasks: ['coffee']
      },
      css: {
        files: ['src/sass/**/*.sass', 'src/sass/**/*.scss'],
        tasks: ['compilecss']
      },
      uglify: {
        files: ['src/js/**/*.js'],
        tasks: ['uglify']
      },
      grunt: {
        files: ['gruntfile.js'],
        tasks: ['compilecss']
      }
    },

    connect: {
      build: {
        options: {
          port: 8000
        }
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['connect', 'watch']);

  grunt.registerTask('compilecss', ['compass', 'autoprefixer']);

  grunt.registerTask('compilejs', ['coffee']);

  grunt.registerTask('optimize', ['concat:plugins', 'concat:css', 'uglify', 'csso']);

};
