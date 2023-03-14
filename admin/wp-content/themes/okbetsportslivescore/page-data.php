<?php 
    /* Template Name: Data Template */ 
    
?>
    <main id="primary" class="site-main">

        <div class="container">
            
            <div class="col mt24">
                <?php 

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
                    echo $response;
                }
                curl_close($curl);
                ?>
            </div>
            </div>
            
        </div>

    </main><!-- #main -->
<?php  ?>