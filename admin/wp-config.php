<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'oklivescore' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '~%g=t2z[k9]w>^4b}eXAY~78OhriPgZ]s]r^xf7cSp/ehe:ggQCl_`k,1b1pf}db' );
define( 'SECURE_AUTH_KEY',  't`d/T<hg#L2n{.8X0.?.}m41JJnjo`0yA0lVbn[!(AM[YsJ c]Q+0T}@Q+.yvdC ' );
define( 'LOGGED_IN_KEY',    'o3IyqVTQwi}+DK,B?Pr5$YraU:9.Zq72ns>.2NN-M010{>$&t@}o~c=F*01h;l6g' );
define( 'NONCE_KEY',        'c;MY8Z(bXb5Qe/9f/HD,4?JrIF,wU6`1v]J|S(M0J:pF3rFU[@s}D/Myxj_D:j2T' );
define( 'AUTH_SALT',        'Sp8@~nia;E.N2>+hp;#3(>zIaiK`NS=Z+Eg}cd,s E<*3-wc+j%LCGwEu?tQ&xeE' );
define( 'SECURE_AUTH_SALT', '-i3[ZYRqQ5PhttF5;:rT<r3#OzkC)vW9._Tg`#;&5Q^,`XuzT U/mFbZ-(/eKv]0' );
define( 'LOGGED_IN_SALT',   '#,P3n~,Snc)v!K8YBTKOS1i?Oc/wU:IO2F6C?n7|C5qEbK0Q](eFOAVs>lu=<30o' );
define( 'NONCE_SALT',       'M/1e#&t^v8Z]E)b]0B[ZD}L[bgA]S{=xEg7R=CU=!ZY Ge+yNAqID~X;PTb#PW@B' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
