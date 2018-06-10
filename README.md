# MangaRock App's Rock miner script

## How to run

1. Find out your client id of mangarock app

  * Every network request from your authenticated mangarock app will include your client id, catch it using your own means. Possible options are wireshark, setting up a proxy server etc.
  * Client id is 40 characters long and is included in ```X-Parse-Application-Id``` header
  
2. Update ```clientID``` variable in ```mangaRockMiner.js``` with your client id
3. Clone this repository, and install dependencies
```sh
$ git clone https://github.com/Enkhsanaa/mangarock-rock-miner
$ cd mangarock-rock-miner
$ npm install
```
4. Run script
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
