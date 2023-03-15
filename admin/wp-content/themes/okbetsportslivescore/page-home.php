<?php 
    /* Template Name: Home Template */ 

    $curl = curl_init();

    curl_setopt_array($curl, [
        CURLOPT_URL => "https://api.thesports.com/v1/basketball/match/diary?user=okseo&secret=939492fd2e49e5499683cf4d624ac4b4",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => [
            "Content-Type:application/json",
            "host: api.thesports.com",
            "X-Forwarded-For: 103.104.101.41"
        ],
    ]);
    
    $response = curl_exec($curl);
    $err = curl_error($curl);
    curl_close($curl);

    if ($err) {
        echo "cURL Error #:" . $err;
    } else {
        
        // $var = json_decode($response, true);
        // $keys = array_keys($var);

        // foreach ( $var[$keys[3]] as $key => $value ) {
        //     echo $key . " : " . $value[2]['logo'] . '<br />';
        // }
        
        
        $var = json_decode($response, true);
        $keys = array_keys($var);

        // First Tree
        for($i = 0; $i < count($var); $i++) {
            
            foreach ($var[$keys[1]] as $key => $val) {
                
                echo $key . ' : ' . $val . '<br /><br />';

                // 2nd Tree
                $kkeys = array_keys($var);

                for ( $c = 0; $c < count($keys); $c++ ) {
                    
                    foreach ($var[$keys[3]] as $kkey => $vval) {
                    
                        echo $kkey . '<br />';
                        if ( $kkey == 'stage') {
                            echo '0';
                        } else {
                            
                            $com = array_keys($vval);
                            foreach ( $vval[$com[$c]] as $ccom => $cval ) {
                            
                                echo $ccom . ' : ' . $cval . '<br />';
                            
                            }
                        }
                        echo '<br />';
                    }
                    echo '<br />';
                }
                
            }
            echo '<br />';
        
        }
        //echo $keys[1];
        
        // for($i = 0; $i < count($var); $i++) {

        //     /*
        //      * Main Tree
        //      */
        //     // echo '<pre>' . $keys[$i] . ' == main-array {<br></pre>';
        //     // echo $i . '<br />';    
            
        //     foreach($var[$keys[$i]] as $key => $value) {

        //         // echo $key . " : " . $value[$i][0] . "<br />";
        //         // echo $key . " : " . " --- [".$i."] name : " . $value[$i]['name'] . "<br />";   
        //         // echo $key . " : " . $value . "<br />";   
                
        //         $vals = array_keys($value);
        //         for ( $c = 0; $c < count( $vals ); $c++ ) {

        //             /*
        //              * 2nd Tree
        //              */
        //             // echo $vals[$c]. " = second-array {<br>";

        //             foreach ( $value as $val => $dval ) {
        //                 echo $val . ' = ' . $dval . '<br />';

        //                 /*
        //                 * 3rd Tree
        //                 */
        //                 foreach ( $value[$vals[$c]] as $val => $dval ) {
        //                     echo $val . ' = ' . $dval . '<br />';
        //                 }
        //             }

        //             echo '<pre>' . "}<br> </pre>";
        //         }
            
        //     }
        //     echo "}<br>";
        // }
    }

    //echo $response;
?>