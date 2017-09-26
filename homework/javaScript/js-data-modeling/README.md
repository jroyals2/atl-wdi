[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider an app we want to make, called Senior Paws. Senior Paws is an app for dog sitters taking care of old dogs, where you can track the dog's information, like its name, favorite treat, medication, and its owners. What attributes are most important to include in our data model?

![image](data_modeling.png)


### Directions

Data Modeling Round 2! Take a look at each of the app descriptions below. For each description:
  1. Create a data model for the app by listing at least two relevant
entities/abstractions (e.g. Senior Paws app, above) that the app might use, and list properties that make sense for that use case. You *don't* have to list all of them.
  1. Create Javascript objects of those entities and assign what data type the _value_ of those properties should be
  1. Give an example of a relationship of the model. Keep in mind, not _everything_ has to be connected to _everything_.

### 1. Ultra E-mail App

This app provides easy access to all your e-mail service providers in one app. The app will let you select one of your email addresses and view your e-mails for that address.

1. User      ||  Email Accounts   |||   Emails
   ID             Name                  Subject
   Name           Type                  when sent
   Age            Emails                category
   email accts    

2. const user = {
  ID: number,
  name: string,
  age: number,
  email accounts: [];
}
const emailAccounts {
  name: string,
  type: string,
  emails: []
}
const emails = {
  subject: string,
  sent: number,
  category
}

3.  const bob = 
{
  ID: 1234,
  name: Bob,
  age: 29,
  email accounts: [{
    name: yahoo,
    type: main,
    emails: [{
      subject: youAreFired,
      sent: 09232017,
      category: bad
    }]
    name: gmail,
    type: junk,
    emails: [{
      subject: ad,
      sent: 09122016,
      category: weird
    }]
  }];
}

### 2. Radio on the Internet app

This app hosts a ton of radio stations, each featuring their own playlists of songs. The radio stations can be listed by genre or popularity.

1.
USER  |||   RADIO STATION  |||  SONGS
name        name                name  
age         category            category
radio st    playlists           length
            popularity

2. 
const user = {
  name: string,
  age: number,
  radioStation: []
}

const radioStation = 
{
  name: string,
  category: string,
  playlists: string,
  popularity: number
}
const songs = {
  name: string,
  category: string,
  length: number
}

3.

const bob = {
  name: bob,
  age: 29,
  radioStation: [
    const rock = 
{
  name: Sweet,
  category: rock,
  playlists: [70s, 80s, 90s],
  popularity: 1000
  songs: [{
    name: sweet Child,
    category: rock,
    length 500
  }]
}
  ]
}
### 3. Rock Concert App

This app will be a tool for managing all of your favorite bands' concerts; it will keep track of their tour dates, ticket purchasing, and next recommended show.

1.

User   |||   Concerts   |||   Bands ||| 
name         name             name
age          location         members
recomConcert bands            tour dates
             ticket price

2.

const user = 
{
  name: string,
  age: number,
  recomConcerts: [];
}
const concerts = 
{
  name: string,
  location: string,
  ticket price: number,
  bands: []
}
const bands = 
{
  name: string,
  members: [],
  tourDates: []
}

3. This one is a bit weird the flow is more relational than a NoSql flow but for NoSql purposes this makes most sense

user Bob ={
  name: bob,
  age: 29,
  recomConcerts: [{
    name: RockOut,
    location: Atlanta,
    ticketPrice: 100,
    bands: [{
      name: RAWR,
      members: [Frank, Billy, Maui]
      tourDates: [Atlants, Orlando, Salt Lake City]
    }]
  }]
}


### 4. Coffee To-Go App

This app will allow customers to browse a list of coffeeshops nearby, order drinks off of their menu, add those drinks to a shopping cart, and save that cart as a past order once the purchase is complete.


1.

Customer    |||    CoffeeShops    |||    Menu   |||    Cart
Name               Name                  Items         Inventory
Age:               Location             prices          amount owed
cart               menu                                           
favorite shops

2.
const customer = {
  name: string,
  age: number,
  cart: [],
  favoriteShops: []
}

const cofffeeShops = {
  name: string,
  location: string,
  menu: []
}
const menu = {
  items: [],
  prices: []
}
const cart = {
  inventory = [],
  amount owed: number,
  paid: boolean
}

3.
const Bill {
  name: Bill,
  age: 29,
  cart: [{
    inventory: [Starbucks.latte, Starbucks.espresso],
    amountOwed: 10,
    paid: false
  }]
  favoriteShops: [{
    name: Starbucks,
    location: Atlanta,
    menu: [{
      items:[latte, espresso],
      prices: [4, 5]
    }]
  }]
}
 

### 5. Team Tracker App

This app shows you all the latest stats from your favorite sports teams. You can view individual player stats and full team stats.

1.  
USER      |||       TEAMS         |||       PLAYERS  ||  Stats 
name              name                      name        passing
age               location                  age         rushing
favTeams          stats                     stats       receiving
                  players

2. 
const user = {
  name: string,
  age: number,
  favTeams: []
}
const teams ={
  name: string,
  location: string,
  stats: [],
  players: []
}
const players = {
  name: string,
  age: number,
  stats: []
}
const stats = {
  passing: number,
  rushing: number,
  receiving: number
}
3. 
user Bob {
  name: Bob,
  age: 29,
  favTeams: [{
    name: Falcons,
    location: Atlanta,
    stats: [{
      passing: 2000,
      rushing: 3000,
    }]
    players: [{
      name: Matt Ryan,
      age: 32,
      stats: [{
        passing: 2500,
        rushing: 50
      }]
    }]
  }]
}


### Final Thoughts:

Q. When you were creating relationships between the models, what were some thoughts or questions you had to help guide a connection between them?

You really just have to step back and think about how everything interacts with everything.  The more you can put down relational wise the better you can understand how to format your data.  Without these steps it would make bringing data into the database confusing and also would lead to having to adjust placements of the data within the base several times. 

### Reading and Videos for Tomorrow
Now that you've had some practice really thinking about the data design of an app, we're going to learn about MongoDB, a no-SQL database. Starting tomorrow, our Express apps will be talking to the Mongo database through Mongoose. Since we're covering a LOT of ground tomorrow, take some time to introduce yourself to concepts and lingo surrounding MongoDB and Mongoose. You will _not_ have to memorize the technical details here.

- [MongoDB's Ridiculously Cheery Promo video: 2mins video](https://www.youtube.com/watch?v=CvIr-2lMLsk)
- [The Good and Bad of MongoDB: 30mins video](https://www.youtube.com/watch?v=hWxnRi_WXtg)
- [What is Mongoose? 2 min Video](https://www.youtube.com/watch?v=swWRUvluSkE)
- [Official Mongoose Website](http://mongoosejs.com/index.html)
- [Official Mongoose Docs](http://mongoosejs.com/docs/index.html)

## Submitting Your Work

  When you're ready to submit your work,

  1. Add, commit, and push your code.
  2. Add your Github link to Schoology along with your name and you comfort level with the homework.
