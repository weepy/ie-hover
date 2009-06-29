IE HOVER
========

Bringing :hover to MSIE !

A simple hover plugin for jQuery providing native support for :hover in IE (normally this is only working for <a> tags)

How it works
-----

* that parses the stylesheets for :hover
* replaces CSS rules that match :hover with corresponding rules with .iehover
* it then automatically setups up jQuery hover events that add and remove the iehover class

Usage
----

* include 'jquery.iehover.js' in your page after 'jquery.js'
* $.fixIEHover() on the jQuery.ready event
* You can cause the same behaviour on non MSIE browsers by passing true in $.fixIEHover() 

Tested with IE6 and IE7

Author: Jonah Fox
Website: parkerfox.co.uk
License: MIT