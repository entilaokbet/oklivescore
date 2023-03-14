<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package okbetsportslivescore
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">

    <div class="full-width-wrap sticky">
        <div class="container">

            <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'okbetsportslivescore' ); ?></a>

            <header id="masthead" class="site-header">
                <div class="col">
                    <div class="col-1">
                        <div class="site-branding">
                            <div class="custom-logo">
                                
                                <?php 
                                //the_custom_logo();
                                $custom_logo_id = get_theme_mod( 'custom_logo' );
                                $image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
                                
                                ?>
                                <img src="<?php echo $image[0]; ?>" class="" title="" alt="" width="79.2px" height="32px">
                            </div>
                            <?php
                                /*
                                if ( is_front_page() && is_home() ) :
                                    ?>
                                    <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
                                    <?php
                                else :
                                    ?>
                                    <p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
                                    <?php
                                endif;
                                $okbetsportslivescore_description = get_bloginfo( 'description', 'display' );
                                if ( $okbetsportslivescore_description || is_customize_preview() ) :
                                    ?>
                                    <p class="site-description"><?php echo $okbetsportslivescore_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></p> -->
                                    <?php 
                                endif; 
                                */
                            ?>
                        </div>
                    </div>
                    <!-- .site-branding -->

                    <div class="col-9">
                        <nav id="site-navigation" class="main-navigation">
                            <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false"><?php esc_html_e( 'Primary Menu', 'okbetsportslivescore' ); ?></button>

                            <div class="menu-main-menu-container">
                                <ul id="primary-menu" class="menu nav-menu">
                                    <li id="menu-item-18" class="home menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-18">
                                        <a href="/" aria-current="page"><img src="/wp-content/uploads/2023/02/akar-icons_home.png" title="Home" alt="Home"> Home</a>
                                    </li>
                                    
                                    <li id="menu-item-17" class="sports-news menu-item menu-item-type-post_type menu-item-object-page menu-item-17">
                                        <a href="/sports-news/"><img src="/wp-content/uploads/2023/02/ant-design_trophy-outlined.png" title="Sports News" alt="Sports News"> Sports News</a>
                                    </li>
                                    
                                    <li id="menu-item-16" class="bookmark menu-item menu-item-type-post_type menu-item-object-page menu-item-16">
                                        <a href="/bookmark/"><img src="/wp-content/uploads/2023/02/material-symbols_bookmark-1.png" title="Bookmark" alt="Bookmark"> Bookmark</a>
                                    </li>
                                </ul>
                            </div>

                            <?php
                            /*
                            wp_nav_menu(
                                array(
                                    'theme_location' => 'menu-1',
                                    'menu_id'        => 'primary-menu',
                                )
                            );
                            */
                            ?>
                        </nav><!-- #site-navigation -->
                        <div class="search">
                            <input type="text" name="search" value="" class="search-field" placeholder="Search">
                            <img src="/wp-content/uploads/2023/02/material-symbols_search.png" class="search-icon" title="Search" alt="Search">
                        </div>
                    </div>
                    
                    <div class="col-2">
                        <div class="account">
                            
                            <div class="inline circle">
                                <img src="/wp-content/uploads/2023/02/Profile.png" title="profile" alt="profile"> 
                            </div>

                            <div class="inline profile">
                                <?php
                                $current_user = wp_get_current_user(); 
                                //printf( __( 'User first name: %s', 'okbetsportslivescore' ), esc_html( $current_user->user_firstname ) ) . '<br />';
                                //printf( __( 'User last name: %s', 'okbetsportslivescore' ), esc_html( $current_user->user_lastname ) ) . '<br />';
                                printf( esc_html( $current_user->display_name ) );
                                ?>
                            </div>
                            <!--
                            <ul>
                                <li>Edit Profile</li>
                            </ul>
                            -->

                        </div>
                    </div>
                </div>
            </header><!-- #masthead -->
            
        </div>
    </div>

