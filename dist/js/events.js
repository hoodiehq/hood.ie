
/* global $, console */

'use strict';

$(function() {
  var mySpreadsheet = 'https://docs.google.com/spreadsheets/d/1FlA0XjoVIEsvgRdUFRx4__eBI7zloRI7StBB0xLQ8hw/edit?usp=sharing#gid=0';
  var testData = {"version":"0.6","reqId":"0","status":"ok","sig":"23136760","table":{"cols":[{"id":"A","label":"date","type":"date","pattern":"dd/MM/yyyy"},{"id":"B","label":"location","type":"string"},{"id":"C","label":"type","type":"string"},{"id":"D","label":"name","type":"string"},{"id":"E","label":"description","type":"string"},{"id":"F","label":"video","type":"string"},{"id":"G","label":"slides","type":"string"},{"id":"H","label":"link","type":"string"},{"id":"I","label":"promote","type":"string"},{"id":"J","label":"language","type":"string"},{"id":"K","label":"","type":"string"},{"id":"L","label":"","type":"string"},{"id":"M","label":"","type":"string"},{"id":"N","label":"","type":"string"},{"id":"O","label":"","type":"string"},{"id":"P","label":"","type":"string"},{"id":"Q","label":"","type":"string"},{"id":"R","label":"","type":"string"},{"id":"S","label":"","type":"string"},{"id":"T","label":"","type":"string"},{"id":"U","label":"","type":"string"},{"id":"V","label":"","type":"string"},{"id":"W","label":"","type":"string"},{"id":"X","label":"","type":"string"},{"id":"Y","label":"","type":"string"},{"id":"Z","label":"","type":"string"},{"id":"AA","label":"","type":"string"}],"rows":[{"c":[{"v":new Date(2014,11,15),"f":"15/12/2014"},{"v":"Cambridge, MA, USA"},{"v":"conference"},{"v":"BackboneConf"},{"v":"Gregot is going"},null,null,{"v":"http://backboneconf.com/"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,10,17),"f":"17/11/2014"},{"v":"Budapest, Hungary"},{"v":"conference"},{"v":"ApacheCon"},{"v":"Jan will be there"},null,null,{"v":"http://apacheconeu2014.sched.org/"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,10,7),"f":"07/11/2014"},{"v":"Brighton, UK"},{"v":"conference"},{"v":"FullFrontal"},{"v":"Caolan will implement something like jsbin using hoodie making the most of the offline first stuff\nmy plan is to live code an example app interspersed with slides that say what\u0027s going on and why"},null,null,{"v":"http://2014.full-frontal.org/"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,9,25),"f":"25/10/2014"},{"v":"Salzburg, Austria"},{"v":"conference"},{"v":"BarCamp Salzburg"},{"v":"Ola and Lena will be holding a Hoodie-Workshop"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,9,17),"f":"17/10/2014"},{"v":"Oxford, UK"},{"v":"conference"},{"v":"All Your Base"},{"v":"Ola spoka about Databases and Hoodie"},null,null,{"v":"http://allyourbaseconf.com/2014/"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,9,8),"f":"08/10/2014"},{"v":"Ghent, Belgium"},{"v":"conference"},{"v":"ArrrrCamp"},{"v":"This is bigger than us: Building a future for Open Source"},null,null,{"v":"http://2014.arrrrcamp.be/"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,9,8),"f":"08/10/2014"},{"v":"Amsterdam, Netherlands"},{"v":"conference"},{"v":"Fronteers 2014"},{"v":"Hoodie\u0027s Alex went to Amsterdam to speak about Offline First (Web) Apps"},null,{"v":"https://speakerdeck.com/espylaub/offline-first-web-apps-fronteers-2014"},{"v":"https://fronteers.nl/congres/2014/speakers"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,8,27),"f":"27/09/2014"},{"v":"Istanbul, Turkey"},{"v":"conference"},{"v":"JSIst"},{"v":"Lena spoke"},null,null,{"v":"http://jsist.org/#join-the-fun"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,8,13),"f":"13/09/2014"},{"v":"Berlin, Germany"},{"v":"conference"},{"v":"JS Conf EU"},{"v":"Lena on Open Source Culture"},null,null,{"v":"http://2014.jsconf.eu"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,7,23),"f":"23/08/2014"},{"v":"Bonn, Germany"},{"v":"conference"},{"v":"FrOSCon"},{"v":"Ola and Lena give a Hoodie intro"},null,null,{"v":"http://www.froscon.de/startseite/"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,7,14),"f":"14/08/2014"},{"v":"Edinburgh, UK"},{"v":"conference"},{"v":"EdinburghJS"},{"v":"Lewis gives a Hoodie Intro"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,6,26),"f":"26/07/2014"},{"v":"Bern, Switzerland"},{"v":"conference"},{"v":"SwissJeese"},{"v":"Gregor gives a Hoodie intro"},null,null,{"v":"http://www.swissjeese.com/"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,6,4),"f":"04/07/2014"},{"v":"Brighton, UK\n"},{"v":"conference"},{"v":"IndieTechSummit"},{"v":"Jan, Caolan, Lewis, Lena on Hoodie + OS Culture"},null,null,{"v":"http://indietech.org/summit/"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,5,27),"f":"27/06/2014"},{"v":"Szczecin, Poland"},{"v":"meetup"},{"v":"Meetup Szczecin"},{"v":"Lena on Hoodie / noBackend"},null,{"v":"https://speakerdeck.com/ffffux/one-million-cheesecakes-an-introduction-to-hoodie"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,5,17),"f":"17/06/2014"},{"v":"Cologne, Germany"},{"v":"conference"},{"v":"Cologne JS"},{"v":"Gregor and Ola on why Hoodie / nobackend / OF"},null,null,{"v":"http://colognejs.de/"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,5,10),"f":"10/06/2014"},{"v":"Salzburg, Austria"},{"v":"meetup"},{"v":"Meetup in Salzburg"},{"v":"Stefan on Hoodie + Offline First"},null,{"v":"https://speakerdeck.com/boennemann/hoodie-dot-js-introduction-salzburg-web-dev-meetup"},{"v":"http://www.meetup.com/salzburgwebdev/events/176014522/"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,5,7),"f":"07/06/2014"},{"v":"Hamburg, Germany"},{"v":"hackathon"},{"v":"Hamburg Hackathon"},{"v":"Ola, Lena, Jens + Hendrik - Hackathon"},null,null,{"v":"http://hamburg-hackathon.de/hackathon/"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,5,2),"f":"02/06/2014"},{"v":"Nottingham, UK"},{"v":"conference"},{"v":"Tech Nottingham"},{"v":"Caolan on Offline First"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,4,21),"f":"21/05/2014"},{"v":"Düsseldorf, Germany"},{"v":"conference"},{"v":"Decentralize Camp"},{"v":"Alex on decentralisation of the web"},null,{"v":"https://speakerdeck.com/espylaub/on-decentralisation"},{"v":"http://decentralizecamp.com/"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,4,19),"f":"19/05/2014"},{"v":"Düsseldorf, Germany"},{"v":"conference"},{"v":"Beyond Tellerrand"},{"v":"Ola on Offline First"},{"v":"http://vimeo.com/103221949"},{"v":"https://speakerdeck.com/zoepage/say-hello-to-offline-first"},{"v":"http://2014.beyondtellerrand.com/"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,4,14),"f":"14/05/2014"},{"v":"Dortmund, Germany"},{"v":"meetup"},{"v":"Learners Meetup"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,4,10),"f":"10/05/2014"},{"v":"Linz, Austria"},{"v":"conference"},{"v":"Codefront"},{"v":"Ola and Lena each gave one talk: Hoodie, non-coders"},null,{"v":"https://docs.google.com/presentation/d/1Lrm3HZvw8jRSs2J0KZ5RMxofMyRECJRzVYMwZKNM6Cw/edit?usp=sharing"},{"v":"codefront.io"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,4,7),"f":"07/05/2014"},{"v":"Manchester, UK"},{"v":"conference"},{"v":"Manchester JS"},{"v":"Caolan and Lewis on Hoodie + attracting contributors"},null,null,{"v":"https://www.eventbrite.co.uk/e/sheffieldjs-invades-mancjs-tickets-11414373699"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,4,2),"f":"02/05/2014"},{"v":"Melbourne, Australia"},{"v":"conference"},{"v":"Webdirections Code"},{"v":"Alex on Offline First"},{"v":"https://www.youtube.com/watch?v=dPz_5-MEvcg"},{"v":"https://speakerdeck.com/espylaub/offline-first-web-apps"},{"v":"http://www.webdirections.org/"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,3,26),"f":"26/04/2014"},{"v":"Hamburg, Germany"},{"v":"conference"},{"v":"JS Unconf HH"},{"v":"Robin Böhm and Ola showed off hoodie with angular in production."},null,null,{"v":"http://2014.jsunconf.eu/"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,3,26),"f":"26/04/2014"},{"v":"Brazil\n"},{"v":"conference"},{"v":"JS Conf Brazil"},{"v":"Gregor went to Brazil and spoke about Hoodie and Offline First"},null,{"v":"https://speakerdeck.com/espylaub/offline-first-web-apps"},{"v":"http://2014.jsconfbr.org/"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,3,23),"f":"23/04/2014"},{"v":"Sheffield, UK"},{"v":"meetup"},{"v":"SheffieldJS"},{"v":"Lewis on Hoodie + attracting contributors"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,3,11),"f":"11/04/2014"},{"v":"Bielefeld, Germany"},{"v":"conference"},{"v":"Webmontag Bielefeld"},{"v":"Ola will be giving a Hoodie Intro"},null,null,{"v":"https://m.facebook.com/events/280417918824602/"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,3,11),"f":"11/04/2014"},{"v":"Berlin, Germany\n"},{"v":"meetup"},{"v":"up.front"},{"v":"Lena on non-coders in Open Source"},null,null,{"v":"up.front.ug"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,3,10),"f":"10/04/2014"},{"v":"Melbourne, Australia"},{"v":"conference"},{"v":"JS Conf AU"},{"v":"Alex about the state of the tech industry"},null,null,{"v":"http://jsconf.com.au"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2014,2,26),"f":"26/03/2014"},{"v":"Karlsruhe, Germany"},{"v":"meetup"},{"v":"Karlsruhe JS"},{"v":"Ola and Gregor demo Hoodie"},{"v":"https://www.youtube.com/watch?v=0EYJ5yAmoNM"},{"v":"https://speakerdeck.com/gr2m/wtf-is-hoodie"},{"v":"http://karlsruhejs.org/"},null,{"v":"de"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[{"v":new Date(2013,10,19),"f":"19/11/2013"},null,{"v":"podcast"},{"v":"Working Draft 145"},{"v":"Alex on Decentralisation and Hoodie"},null,null,{"v":"http://workingdraft.de/145/"},null,{"v":"de"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]},{"c":[null,null,{"v":"podcast"},{"v":"Changelog 111"},{"v":"Andrew and Adam talk with Caolan McMahon from Hoodie to talk about very fast web development where you can build complete web apps in days, without having to worry about backends, databases or servers (with Hoodie). We discuss noBackend and the idea behind offline first."},null,null,{"v":"http://thechangelog.com/111/"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"v":null}]}]}};

  var onSpreadsheet = function(hash){
    var el = '<ul class="futureEvents">';
    var today = Date.now();
    var areWeInThePastYet = false;
    hash.table.rows.forEach(function(row){
        if(date){
            if(date.getTime() < today && !areWeInThePastYet){
                areWeInThePastYet = true;
                el += '</ul>';
                el += '<div class="tenseSeparator">Check out these past events:</div>';
                el += '<ul class="pastEvents">';
            }
            el += '<li data-type="'+type+'">';
            el += '<h2>'+name+'</h1>';
            el += '<time>'+date.getDate()+'.'+(date.getMonth()+1)+'.'+date.getFullYear()+'</time>';
            el += '<span class="location">'+location+'</span>';
            el += '<p class="description">'+description+'</p>';
            if(video || slides || link){
                el += '<ul class="links">';
                el += video ? '<li><a href="'+video+'">Video</a></li>' : '';
                el += slides ? '<li><a href="'+slides+'">Slides</a></li>' : '';
                el += link ? '<li><a href="'+link+'">More information</a></li>' : '';
                el += '</ul>';
            }
            el += '</li>';
        }
    });
    el += '</ul>';
    $('#eventsList').append(el);
  };

  var renderFilters = function (types) {
    var output = '<div id="filters">';
    types.forEach(function(type){
        output += '<label class="filter-label" for="'+type+'">';
        output += '<input type="checkbox" name="type" value="'+type+'" id="'+type+'" checked>';
        output += type.charAt(0).toUpperCase() + type.slice(1);
        output += '</label> ';
    });
    output += '</div>';
    $('#eventsList').append(output);
    $('#filters input').iCheck({
        checkboxClass: 'icheckbox_flat-lilac',
        radioClass: 'iradio_flat-lilac'
    });
    $('#filters input').on('ifChanged', function(e){
        $('#filters input').each(function(index, element){
            var type = $(element).val();
            if($(element).prop('checked')){
                $('#eventsList [data-type='+type+']').removeClass('hidden');
            } else {
                $('#eventsList [data-type='+type+']').addClass('hidden');
            }
        });
    });
  }

  var getEventItemHTMLString = function(item){
    var output = '';
    if(item.date){
        output += '<li class="events-list-item" data-type="'+item.type+'">';
        output += '<h3>'+item.name+'</h3>';
        output += '<span class="subline">'+item.type+'</span>';
        output += '<time>'+item.date.getDate()+'.'+(item.date.getMonth()+1)+'.'+item.date.getFullYear()+'</time>';
        output += ' — <span class="location">'+item.location+'</span>';
        output += '<p class="description">'+item.description+'</p>';
        if(item.video || item.slides || item.link){
            output += '<ul class="links">';
            output += item.video ? '<li class="links-list-item"><a class="links-list-link" href="'+item.video+'">Video</a></li>' : '';
            output += item.slides ? '<li class="links-list-item"><a class="links-list-link" href="'+item.slides+'">Slides</a></li>' : '';
            output += item.link ? '<li class="links-list-item"><a class="links-list-link" href="'+item.link+'">More information</a></li>' : '';
            output += '</ul>';
        }
        output += '</li>';
    }
    return output;
  }

  var renderFutureEvents = function (events) {
    var output = '<div class="futureEvents">';
    output += '<h2>Future Events</h2>';
    if(events.length === 0){
        output += '<div class="noEvents">';
        output += '  <h3>No events planned</h3>';
        output += '  <p>Sorry, there don\'t seem to be any Hoodie-related events on the horizon. You could <a href="https://twitter.com/hoodiehq">follow Hoodie on Twitter</a> to stay up to date, if you like.</p>';
        output += '</div>';
    } else {
        output += '<ul class="events">';
        events.forEach(function(e){
            output += getEventItemHTMLString(e);
        });
        output += '</ul>';
    }
    output += '<div class="twitterCTA"><a class="twitterCTA-link" href="https://twitter.com/hoodiehq">Follow Hoodie on Twitter</a> to get notified of upcoming events!</div>';
    output += '</div>';
    $('#eventsList').append(output);
  };

  var renderPastEvents = function (events) {
    var output = '<div class="pastEvents">';
    output += '<h2>Past Events</h2>';
    output += '<ul class="events">';
    events.forEach(function(e){
        output += getEventItemHTMLString(e);
    });
    output += '</ul>';
    output += '</div>';
    $('#eventsList').append(output);
  };

  var parseSpreadsheet = function (hash) {
    var futureEvents = [];
    var pastEvents = [];
    var today = Date.now();
    var types = [];
    hash.table.rows.forEach(function(row){
        var eventItem = {};
        var eventData = row.c;
        eventItem.date = eventData[0] ? eventData[0].v : undefined;
        eventItem.location = eventData[1] ? eventData[1].v : undefined;
        eventItem.type = eventData[2] ? eventData[2].v : undefined;
        eventItem.name = eventData[3] ? eventData[3].v : undefined;
        eventItem.description = eventData[4] ? eventData[4].v : undefined;
        eventItem.video = eventData[5] ? eventData[5].v : undefined;
        eventItem.slides = eventData[6] ? eventData[6].v : undefined;
        eventItem.link = eventData[7] ? eventData[7].v : undefined;
        eventItem.promote = eventData[8] ? eventData[8].v : undefined;
        eventItem.language = eventData[9] ? eventData[9].v : undefined;
        if(eventItem.date && eventItem.date.getTime() > today){
            futureEvents.push(eventItem);
        } else {
            pastEvents.push(eventItem);
        }
        if(eventItem.type && types.indexOf(eventItem.type) === -1){
            types.push(eventItem.type);
        }
    });
    futureEvents.reverse();
    $('.loader').remove();
    renderFilters(types);
    renderFutureEvents(futureEvents);
    renderPastEvents(pastEvents);
  };


  $('#eventsList').sheetrock({
    url: mySpreadsheet,
    sql: 'select * order by A desc',
    dataHandler: parseSpreadsheet
  });

});
