# stock-symbol-app

This App is built using VueJs, Vue Router, Materialize CSS, Material Icons, Axios, and Highcharts. 

This is a simple to use app which shows the history of stocks based on a User's entry of any Stock Symbol.
First, you are greeted with a welcome page and then you can clickly navigate to the Stocks History section.

The UserName is "Admin" and the password is "password". P.S. I would never use this as a password for my accounts, LOL!!

Once you login, the Top Navigation Bar should show more buttons, including the Logout button. When you click Logout, you will be brought back to the Login PAge and the navigation buttons will be hidden again.

The main section of the App i.e. the Stock History by Symbols has a form which accepts Stock Symbols and after making an API Call to fetch the history, Highcharts will beautifully render it + it's all of the features. 
** The important thing here is that the Graph shows a Legend at the bottom and you can hide/show or toggle the lines/series that you want to see.

For instance, the Volume graph will always be in Millions, as least most of the time, in that case, the other graphs will really low values will shrink and won't be visible. So, my recommendation would be to click on the Volume button in the Graph Legend and it will hide automatically. 

Lastly, I wanted to implement the footer but it needed some heigh adjustments and I ran out of time to finish that so I have left it for now. I will pick-up where I have left and continue sometime in future.

I spent about 16-18 hours in Total to Learn Vue and Complete this Project.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
