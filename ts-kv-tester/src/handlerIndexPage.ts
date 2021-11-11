export async function handleRequestForIndexPage(request: Request): Promise<Response> {
    //let datetime: Date = new Date(); 
    let datetimeraw = new Date();
    const fmtd_dt_local: string = new Intl.DateTimeFormat('en-XX', { timeZone: request.cf?.timezone, dateStyle: 'full', timeStyle: 'long' }).format(datetimeraw)
    //
    let lat: string  = "";
    let lng: string  = "";
    if (Number(request.cf?.latitude) < 0)
    {
        lat = (Number(request.cf?.latitude) * -1).toFixed(2).toString() + " S"
    }
    else    
    {
        lat = (Number(request.cf?.latitude)).toFixed(2).toString() + " N"
    }
    if (Number(request.cf?.longitude) < 0)
    {
        lng = (Number(request.cf?.longitude) * -1).toFixed().toString() + " W"
    }
    else    
    {
        lng = (Number(request.cf?.longitude)).toFixed().toString() + " E"
    }
    const html : string = `<!doctype html>
    <html lang="en">
      <head>
      <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css" integrity="sha384-qF/QmIAj5ZaYFAeQcrQ6bfVMAh4zZlrGwTPY7T/M+iTTLJqJBJjwwnsE5Y0mV7QK" crossorigin="anonymous">

        <title>Cloudflare Worker Tester</title>
      </head>
      <body>
        <div class="container">
		<!-- navbar start -->
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
		  <a class="navbar-brand" href="#">Navbar</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		  </button>

		  <div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
			  <li class="nav-item active">
				<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="#">Link</a>
			  </li>
			  <li class="nav-item dropdown">
				<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				  Dropdown
				</a>
				<div class="dropdown-menu" aria-labelledby="navbarDropdown">
				  <a class="dropdown-item" href="#">Action</a>
				  <a class="dropdown-item" href="#">Another action</a>
				  <div class="dropdown-divider"></div>
				  <a class="dropdown-item" href="#">Something else here</a>
				</div>
			  </li>
			</ul>
		  </div>
		</nav>
		<!-- navbar end -->
		<br />
		<div>
			<h1>Cloudflare Worker Tester - v9</h1>
			<p>This markup was generated by a Cloudflare Worker.</p>
			<p>The request method was : ${request.method}.</p>
			<p>The path was : ${request.url}.</p>
            <p>The date/time was ${fmtd_dt_local}</p>
            <p>Long/Lat of requesting user-agent ${lat} , ${lng} </p>
		</div>
        </div>
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      </body>
    </html>`;
    return new Response(html, {
        headers: {
            "content-type": "text/html;charset=UTF-8",
        },
    });
}
