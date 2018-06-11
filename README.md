# MangaRock App's Rock miner script

## Introduction
A simple node script to demonstrate that the MangaRock application's rock system, in-app currency, is abusable by repeating an API request. Inside the app, the rocks are earnable by watching ads or completing tapjoy, ironSource offers. Watching an ad yields 1 to 2 rocks; 100 rocks are about $1. Using this script one can earn an unlimited amount of rocks. The script tells the MangaRock servers "I've just watched an ad, award me with rocks". The server, without any verification, does that. So, we could send 100 requests under a second and earn about 100-200 rocks. 

## How to run

1. Find out client id and session token of your mangarock app

  * Every network request from your authenticated mangarock app will include them, catch it using your own means. Possible options are wireshark, setting up a proxy server etc.
  * Client id is 40 characters long and is included in ```X-Parse-Application-Id``` header (Sample: ``` lpY0gkLg4LOtrTAtNT1L1vwC1llTWkr0F8wusC5i ```)
  * Session token is 34 characters long and is included in ```X-Parse-Session-Token``` header (Sample: ``` r:c165f59eaf8fb7ffa0f096ab600edd02 ```)
  
2. Clone this repository

```sh
$ git clone https://github.com/Enkhsanaa/mangarock-rock-miner
```

3. Update ```clientID``` and ```sessionToken``` variables in ```mangaRockMiner.js```

4. Install dependencies

```sh
$ cd mangarock-rock-miner
$ npm install
```

5. Run script

```sh
$ npm start
```


## Built With

* [NodeJS](https://nodejs.org/) - evented I/O for the backend
* [Request](https://github.com/request/request) - Simplified HTTP client


## Author

* **Enkhsanaa Natsagdorj** - *Initial work* - [Enkhsanaa](https://github.com/enkhsanaa)


## License

This project is licensed under the MIT License