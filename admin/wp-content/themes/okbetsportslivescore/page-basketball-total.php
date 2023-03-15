<?php 
    /* Template Name: Basketball Total Template */ 

    if (CurlData() == 'error' ) {

        echo "cURL Error #:" . $err;
    
    } else {
        
        $var = json_decode(CurlData(), true);
        $keys = array_keys($var);

        foreach ($var[$keys[1]] as $key => $val) {
            
            if ( $key == 'type' ) {
                
                echo '';

            } else {

                //echo $key . ' : ' . $val;
                echo $val;
            
            }
        }
    }

?>