<head>
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i|Palanquin+Dark:600&display=swap" rel="stylesheet">
    <style type="text/css"> 
        body { 
            margin:0;
            padding:0;
        } 
          
        .mailbody { 
            width:500px;
            height:500px;
            background-color:#FFFFFF;
            font-family: 'Palanquin Dark', sans-serif; 
        }

        p {
            font: 300 16px/1.8 'Palanquin Dark', sans-serif;
        }
          
        .logo { 
            height:100px;
            background-color:#1C1A1B;
            padding:5px;
        }
        .main-logo{
            height:100%;
        }
        .text-body{
            padding:5px;
        }
        .tg  {border-collapse:collapse;border-spacing:0;border-color:#ccc;}
        .tg td{padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#fff;}
        .tg th{font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#ccc;color:#333;background-color:#f0f0f0;}
        .tg .tg-0w8i{font-size:100%;text-align:left;vertical-align:top}
        .tg .tg-0lax{text-align:left;vertical-align:top}
    </style>
    
</head> 
<div class="mailbody">
    <div class="logo">
        <img class="main-logo" src="img/logo-mobo.png">
    </div>
    <div class="text-body">
        <h1>Bedankt voor uw bestelling!</h1>

        <p>Beste <?= $_POST['name'] ?>, </p>
        <p>Hartelijk bedankt voor uw bestelling! Hieronder ziet uw de factuur: </p>

        <h3>Factuurnummer: 20200601</h3>
        <table class="tg">
            <tr>
                <th class="tg-0w8i">Omschrijving</th>
                <th class="tg-0lax">Aantal</th>
                <th class="tg-0lax">Bedrag</th>
            </tr>
            <tr>
                <td class="tg-0lax">Mobo dynamo</td>
                <td class="tg-0lax">1</td>
                <td class="tg-0lax">€60,-</td>
            </tr>
        </table>

        <h3>Gegevens</h3>
        
        <?= $_POST['name'] ?> <br/>
        <?= $_POST['email'] ?> <br/>
        <?= $_POST['adress'] .' '.$_POST['number'] ?> <br/>
        <?= $_POST['zipcode'] ?> <br/>
        <?= $_POST['city'] ?> <br/>

        <p>Wij verzoeken u vriendelijk om het bedrag over te maken naar rekeningnummer: NL91ABNA0417164300 met uw factuurnummer als kenmerk.</p> 
        
        <p>Zodra de factuur binnen is, zullen wij uw Mobo Dynamo zo snel mogelijk
        naar je opsturen!</p>

        <p>Met vriendelijke groet,</p>

        <br/>

        <p>Mobo team</p>
    </div>
</div>