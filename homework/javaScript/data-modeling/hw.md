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
Let's consider a specific example: a laptop. Suppose that you need to represent
a laptop in an application. What attributes are most important to include in our
data model?

As it turns out, the answer to that question depends heavily on what the
application will do and how it will be used. If the application is for selling
laptops, we might be pick the following attributes.

  > A Laptop has...
  > - a sale price
  > - a brand name
  > - an amount of RAM, in GB
  > - a disc size, in GB
  > - a processor speed, in GHz
  > - a monitor size, in inches
  >
  > e.g.

  ```js
  var laptop = {
    salePrice: 1000,
    brand: 'Lenovo',
    RAM: 8,
    disc: 60,
    processor: 2.5,
    monitorSize: 12
  }
  ```

However, if the application will be used for _manufacturing laptops_,
things like sale price suddenly become much less relevant; instead, a laptop in
that kind of app might have information about materials costs, % completion,
or the factory and assembly line on which the laptop was built.

Take a look at each of the app descriptions below. For each description,
create a rough data model for the app by listing at least two relevant
entities/abstractions (e.g. Laptop, above) that the app might use, and giving
them each several properties that make sense for that use case.
Please also give a short explanation (1 - 2 sentences) of why these choices make
sense for the use case of the app.

### 1. To-Do List

This app will be an app for tracking and managing tasks. Not only will it keep
track of whether tasks have been completed, it will also keep track of
how long each task took to complete. Tasks can be grouped into 'projects' to
keep them organized.

A task would have to be the starting point.  Each task would need a name, date completed, and length of time it took to comple.
A project would need a name, a category, and list of tasks.

var task = {
  name: dishes,
  dateCompleted: tuesday,
  timeByHours: 1
};

var project{
  proName: "House Cleaning"
  category: "Kitchen"
  listTasks: ["dishes", "moppping", "wipe counters"]
}

### 2. Photo Sharing App

In this app, users can upload photos to their accounts and share them with others. These photos can be grouped into albums.

You should break this up into two objects.  The account should be the overhead larger object. This is should include a name, when you became a memeber, number of albums, and friends.  The other object should be album which should include name of the album, how many photos,category, and date of creation.

var account = {
  name: Jerry,
  memberSince: 'April 2017',
  numberOfAlbums: 3
  friends: ["Rick", "Steven", "Jill"]
}
var album = {
  nameOfAlbum: 'Spring Break'
  amountOfPhotos: 5,
  category: 'beach selfies',
  dateCreated: 'May 2017',
  listOfPhotos: [photo1, photo2, photo3, photo4, photo5]
}

### 3. Home Automation Manager

This app will be a tool for managing a home automation system; it will keep
track of the time and temperature of the house that it monitors, and use that
information to turn on and off different lights and adjust the thermostat up
and down.

you would need 3 objects here. First you would need the house object which would contain name of the house, what street it is on, time, and temperature defaults. Then you would need light object with brightness, and location in house. Then you would also need a thermostat object which should have location in house, and temperature level.

var house = {
  street: 'lucky street',
  name: 'house5',
  time: '9:15am',
  temperature: 72
}
var lights {
  brightness: 'bright',
  location: 'kitchen'
}
var thermostat = {
  location: 'living room',
  temperatureLevel: 'hot'
}

### 4. Sneaker Store

This app will allow customers to browse a list of products (sneakers, in this
case), add those products to a cart, and save that cart as a past order once the
purchase is complete.

For this you will need three objects. One will be products with keys such as name of the shoe, size, color, and style.  Then you'll need a cart object that will have number of items, name of item, and total price. Last you'll need a past order object and will have date of purchase, items purchased, and totalspent.

var products = {
  name: 'rainbows',
  size: 10,
  color: 'brown'
  style: ' I hate shoes'
}
var cart = {
  numberOfItems: 4,
  totaltPrice: 50,
  nameOfItem: ['item1', item2', item3', item4']
}
var pastOrder = {
  dateOfOrder: 'November 1, 2010',
  itemsPurchased: ['item1', item2],
  amountSpent: 560
}

## Representing Abstractions in Code

Once you've chosen the abstractions that your app will use, the next step is to
figure out how to actually represent those abstractions in code. The same
abstraction can often be represented in multiple different ways, and there may
be trade-offs in speed and simplicity that come from using one representation
vs another.

### 5. Subway System

Suppose that you're building an app that tells travelers how many stops they
need to travel to get from one station to another. Two abstractions that you
decide to use to model your application's data are Stations and Rail Lines, with
the following properties:

A Station has:
-   a name
-   a description

A Rail Line has:
-   a name
-   a set of stations that it hits

The team has decided to represent these abstractions in the following way.

```js
// Station
var exampleStation = {
  name: 'Downtown Crossing',
  description: "Downtown Crossing is a shopping district that is a small part of downtown Boston, Massachusetts, located due east of Boston Common and west of the Financial District..."
};

// Rail Line
var exampleLine = {
  name: 'Green Line',
  northStation: {
    name: 'North Station',
    description: "North Station is a major transportation hub located at Causeway and Nashua Streets in Boston, Massachusetts, United States...."
  },
  haymarket: {
    name: 'Haymarket',
    description: "Haymarket is an MBTA subway station serving the Green and Orange lines, located at the corner of Congress and New Sudbury streets in downtown Boston, Massachusetts...."
  },
  governmentCenter: {
    name: 'Government Center',
    description: "Government Center is an area in downtown Boston, centered on City Hall Plaza. Formerly the site of Scollay Square, it is now the location of Boston City Hall..."
  }
};

// Stop and line descriptions from Wikipedia (https://en.wikipedia.org)
```

What are some advantages and disadvantages of choosing these representations? Please give at least one example of each.

The advantages are that it is very simple to find each station on the line. EX. station.name ... However, it doesn't cover nearly enough information especially the how many stops it takes.  You also need a desination location and you are here style starting point followed by a count method. EX. 
start: 'North Station',
end: 'Hay Market',
howManyStops: some function(){ counting stops};

### 6. Doctor Appointment App

Consider an app for helping patients and doctors schedule appointments.

A Patient has:
-   a given name
-   a surname
-   a date of birth

A Doctor has:
-   a given name
-   a surname
-   a specialty
-   an address

An Appointment has:
-   a date
-   a time

The team has not yet decided how to represent the relationship between doctors,
patients, and appointments, so they've put together two different
alternatives.

#### Option 1

```js
var examplePatient = {
  givenName: 'John',
  surname: 'Doe',
  dateOfBirth: '1992-11-03'
};
var exampleAppointment = {
  date: '2016-12-15',
  time: '13:00',
  patient: {
    givenName: 'Jane',
    surname: 'Doe',
    dateOfBirth: '1980-06-13'
  }
};
var exampleDoctor = {
  givenName: 'Alphonse',
  surname: 'Cula',
  specialty: 'phlebotomy',
  appointments: [
    {
      date: '2015-10-31',
      time: '00:00',
      patient: {
        givenName: 'Lucy',
        surname: 'Westenra',
        dateOfBirth: '1976-06-06'
      }
    },
    {
      date: '2016-10-31',
      time: '00:00',
      patient: {
        givenName: 'Mina',
        surname: 'Murray',
        dateOfBirth: '1989-09-09'
      }
    }
  ]
};
```

#### Option 2

```js
var exampleDoctor = {
  givenName: 'John',
  surname: 'Dorian',
  specialty: 'internal medicine'
};
var examplePatient = {
  givenName: 'Jordan',
  surname: 'Sullivan',
  dateOfBirth: '1978-12-01'
};
var exampleAppointment = {
  date: '2009-04-15',
  time: '19:00',
  doctor: {
    givenName: 'Jan',
    surname: 'Itor',
    specialty: 'psychology'
  },
  patient: {
    givenName: 'Ladinia',
    surname: 'Williams',
    dateOfBirth: '1980-01-01',
  }
}
```

What are some relative advantages and disadvantages of each representation?
Under what circumstances might one representation be a better choice than the
other? Are there any circumstances in which the other representation might be
the better choice?

Starting with A. I feel like the organization is more set up for the doctors.  This would clearly give doctors a list of patients for the day. However, anyone else who wanted to see a list of just doctors might get a bunch of info not needed. This would be useful if the doctors did not always have appointments.
B. Seems more Calender friendly. Anyone could access the appointment with ease and see the doctor and patient occupied in those appointments.  However, it might be more difficult to find info searching through the doctor or patient names.  
This would be usful if they had a general listing of appointments.

## Tying It Together

### 7. Tic-Tac-Toe

You've been tasked with building an in-browser tic-tac-toe game.

a.  What are some possible entities that your application might use to model its
    data? Please pick at least two, with at least two properties apiece.

  >  you would need players with a name, age, and avatar. Also you need a game object with some player using x's and some players using o's.

b.  How might those entities be represented in JavaScript code?

  > var player = {
    name: 'Ryan'
    age: 16,
    avatar: 
  }
  var game = { 
    playerX: player.name[0]
    playerY: player.name[1]
  }

c.  Justify your choices in a) and b). Why these entities? Why these
    representations?

  > You need to define a user, and then you would have to define who is on what side.
