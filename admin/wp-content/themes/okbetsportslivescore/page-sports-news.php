<?php 
    /* Template Name: Sports News Template */ 
    get_header();
?>
    <main id="primary" class="site-main">

        <div class="container">
            <h1>SPORTS NEWS API</h1>
            <div class="col mt24">
                <?php 
                /*
                    $get_data = callAPI('GET', 'https://api.thesports.com/v1/basketball/match/diary', false);
                    $response = json_decode($get_data, true);
                    $errors = $response['response']['errors'];
                    $data = $response['response']['data'][0];

                    //print_f($data);
                    foreach ( $data as $v ) {
                        echo $v;
                    }
                        
                $data = 'https://api.thesports.com/v1/basketball/match/diary?user=okseo&secret=939492fd2e49e5499683cf4d624ac4b4';
                header('Content-Type: application/json; charset=utf-8');
                echo json_encode($data);   

                $url = 'https://api.allsportdb.com/v3/calendar'; // path to your JSON file
                $data = file_get_contents($url); // put the contents of the file into a variable
                $characters = json_decode($data); // decode the JSON fee
                echo $characters[0]->week;

                foreach ($characters as $character) {
                    echo $character->week . ' Testr <br>';
                }*/

                /*
                $homepage = file_get_contents('https://api.thesports.com/v1/basketball/match/diary?user=okseo&secret=939492fd2e49e5499683cf4d624ac4b4');
                echo $homepage;
                echo "<br />|<br />";

                $url='https://api.thesports.com/v1/basketball/match/diary?user=okseo&secret=939492fd2e49e5499683cf4d624ac4b4';
                $curl = curl_init();
                curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'GET');
                curl_setopt_array($curl, array(
                        CURLOPT_URL => $url,
                        CURLOPT_RETURNTRANSFER => true,
                        CURLOPT_ENCODING => '',
                        CURLOPT_MAXREDIRS => 10,
                        CURLOPT_TIMEOUT => 1000,
                        CURLOPT_CONNECTTIMEOUT => 1000,
                        CURLOPT_FOLLOWLOCATION => true,
                        CURLOPT_POST=>true
                    )
                );
                $res=curl_exec( $curl );
                curl_close( $curl );

                printf('<pre>%s</pre>',print_r( $res, true ));

                ==========
                $curl = curl_init();

                curl_setopt_array($curl, [
                    CURLOPT_URL => "https://api-nba-v1.p.rapidapi.com/seasons",
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_FOLLOWLOCATION => true,
                    CURLOPT_ENCODING => "",
                    CURLOPT_MAXREDIRS => 10,
                    CURLOPT_TIMEOUT => 30,
                    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                    CURLOPT_CUSTOMREQUEST => "GET",
                    CURLOPT_HTTPHEADER => [
                        "X-RapidAPI-Host: api-nba-v1.p.rapidapi.com",
                        "X-RapidAPI-Key: b1c09ab1ddmsh86aab69631ab7e7p141cf3jsn54ace9f5a110"
                    ],
                ]);
                
                $response = curl_exec($curl);
                $err = curl_error($curl);
                
                curl_close($curl);
                
                if ($err) {
                    echo "cURL Error #:" . $err;
                } else {
                    echo $response;
                }  
                

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
                
                if ($err) {
                    echo "cURL Error #:" . $err;
                } else {
                    //echo $response;
                }
                curl_close($curl);
                

                $api_url = 'https://api.thesports.com/v1/basketball/match/diary?user=okseo&secret=939492fd2e49e5499683cf4d624ac4b4';
                $response = wp_remote_get( $api_url ); 
                
                // print_r($response); to make sure it includes body. 
                $body  = wp_remote_retrieve_body( $response ); 
                // you have a json response at this point. 
                // convert json response into an associative array. 
                $data = json_decode( $body, true ); 
                // loop through array to display data in desired structure. 
                foreach( $response as $key => $value ){ 
                    echo "{$key} => {$value} ";
                    print_r($response);
                }
                */
                $curl = curl_init();

                curl_setopt_array($curl, [
                    CURLOPT_URL => "https://jsonplaceholder.typicode.com/users",
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
                    //echo $response;
                    $var = json_decode($response, true);
                    echo $var;
                    // foreach( $var as $key => $value ){ 
                    //     //echo "{$key} => {$value} ";
                    //     echo "<br />";
                    //     //print_r($var);
                    //     echo $key . $value[0][1];
                    // }

                    $keys = array_keys($var);
                    foreach ( $var[$keys[3]] as $key => $value ) {
                        echo $key . " : " . $value;
                    }
                    

                    // for($i = 0; $i < count($var); $i++) {
                    //     echo $keys[$i] . " main-array {<br>";
                    //     foreach($var[$keys[$i]] as $key => $value) {
                    //         echo $key . " : " . $value['id'] . "<br />";
                    //         echo $key . " : " . $value[$i]['logo']. " --- [".$i."] name : " . $value[$i]['name'] . "<br />";
                            
                           
                    //     }
                    //     echo "}<br>";
                    // }

                }
                

                ?>


                <script type="text/javascript">
                    $(document).ready( function() {
                        //$('#api').load('https://api.thesports.com/v1/basketball/match/diary');
                        /*
                        var settings = {
                            'cache': false,
                            'dataType': "jsonp",
                            "async": true,
                            "crossDomain": true,
                            "url": "https://api.thesports.com/v1/basketball/match/diary?user=okseo&secret=939492fd2e49e5499683cf4d624ac4b4",
                            "method": "GET",
                            "headers": {
                                "accept": "application/json",
                                "Access-Control-Allow-Origin":"*"
                            }
                        }

                        $.ajax(settings).done(function (response) {
                            console.log(response);

                        });
                        
                        $.ajax({
                            url: 'https://api.thesports.com/v1/basketball/match/diary?user=okseo&secret=939492fd2e49e5499683cf4d624ac4b4', 
                            type: 'GET',
                            headers: 'Access-Control-Allow-Origin', // <-------- set this
                            dataType: 'jsonp', // // <-------- use JSONP
                            success: function(data){
                                console.log(data);
                            }
                        });
                        

                        $.ajax({
                            url: 'https://api.thesports.com/v1/basketball/match/diary?user=okseo&secret=939492fd2e49e5499683cf4d624ac4b4',
                            dataType: 'json',
                            type: 'post',
                            contentType: 'application/json',
                            data: JSON.stringify( { "competition": $('#competition').text() } ),
                            processData: false,
                            crossDomain: true,
                            headers: {
                            'Access-Control-Allow-Origin': '*'
                            },
                            success: function( data, textStatus, jQxhr ){
                                $('#api').html( JSON.stringify( data ) );
                            },
                            error: function( jqXhr, textStatus, errorThrown ){
                                console.log( errorThrown );
                            }
                        });*/
                    });
                
                </script>                
            </div>
            </div>
            
        </div>

    </main><!-- #main -->
<?php get_footer(); ?>