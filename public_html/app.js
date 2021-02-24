// override components - copy component from src directory change it to object or compile *.vue to *.js
// more info about components you can find here : https://vuejs.org/v2/guide/index.html
// You can change anything! You have full control of components templates, events, data ... and so on!
//Elastigantt.component.components.EgMain.components.TopHeader = CustomHeader;

// just helper to get current dates
function getDate(hours) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const timeStamp = new Date(`${currentYear}-${currentMonth}-${currentDay} 00:00:00`).getTime();
    return new Date(timeStamp + hours * 60 * 60 * 1000);
  }
  
  const tasks = [
    {
      id: 1,
      label: 'Make some noise',
      user: '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
      start: getDate(-24 * 5),
      duration: 5 * 24 * 60 * 60,
      progress: 85,
      type: 'project'
    }, {
      id: 2,
      label: 'With great power comes great responsibility',
      user: '<a href="https://www.google.com/search?q=Peter+Parker" target="_blank" style="color:#0077c0;">Peter Parker</a>',
      parentId: 1,
      start: getDate(-24 * 4),
      duration: 4 * 24 * 60 * 60,
      progress: 50,
      type: 'milestone',
      style: {
        fill: '#1EBC61',
        stroke: '#0EAC51'
      },
      progressBarStyle: {
        bar: {
          fill: '#0EAC51'
        }
      }
    }, {
      id: 3,
      label: 'Courage is being scared to death, but saddling up anyway.',
      user: '<a href="https://www.google.com/search?q=John+Wayne" target="_blank" style="color:#0077c0;">John Wayne</a>',
      parentId: 2,
      start: getDate(-24 * 3),
      duration: 2 * 24 * 60 * 60,
      progress: 100,
      type: 'task'
    },
    /* ... */
  ];
  
  const options = {
    title: {
      label: 'Your project title as html (link or whatever...)',
      html: false,
      style: {
        'font-size': '20px',
        'vertical-align': 'middle',
        'font-weight': '400',
        'line-height': '35px',
        'padding-left': '22px',
        'letter-spacing': '1px'
      }
    },
    taskList: {
      columns: [
        {
          id: 1,
          label: 'ID',
          value: 'id',
          width: 40
        }, {
          id: 2,
          label: 'Description',
          value: 'label',
          width: 200,
          expander: true
        }, {
          id: 3,
          label: 'Assigned to',
          value: 'user',
          width: 130,
          html: true
        }, {
          id: 3,
          label: 'Start',
          value: (task) => task.startDate.format('YYYY-MM-DD'),
          width: 78
        }, {
          id: 4,
          label: 'Type',
          value: 'type',
          width: 68
        }, {
          id: 5,
          label: '%',
          value: 'progress',
          width: 35,
          styles: {
            label: {
              'text-align': 'center',
              'width': '100%'
            },
            value: {
              'text-align': 'center',
              'width': '100%'
            }
          }
        }
      ]
    },
    locale: {
      code: 'en',
      'Now': 'Now',
      'X-Scale': 'Zoom-X',
      'Y-Scale': 'Zoom-Y',
      'Task list width': 'Task list',
      'Before/After': 'Expand',
      'Display task list': 'Task list'
    },
    /*locale:{
      code:'pl'
      name: 'pl', // name String
      weekdays: 'Poniedziałek_Wtorek_Środa_Czwartek_Piątek_Sobota_Niedziela'.split('_'), // weekdays Array
      weekdaysShort: 'Pon_Wto_Śro_Czw_Pią_Sob_Nie'.split('_'), // OPTIONAL, short weekdays Array, use first three letters if not provided
      weekdaysMin: 'Pn_Wt_Śr_Cz_Pt_So_Ni'.split('_'), // OPTIONAL, min weekdays Array, use first two letters if not provided
      months: 'Styczeń_Luty_Marzec_Kwiecień_Maj_Czerwiec_Lipiec_Sierpień_Wrzesień_Październik_Listopad_Grudzień'.split('_'), // months Array
      monthsShort: 'Sty_Lut_Mar_Kwi_Maj_Cze_Lip_Sie_Wrz_Paź_Lis_Gru'.split('_'), // OPTIONAL, short months Array, use first three letters if not provided
      ordinal: n => `${n}`, // ordinal Function (number) => return number + output
      relativeTime: { // relative time format strings, keep %s %d as the same
        future: 'za %s', // e.g. in 2 hours, %s been replaced with 2hours
        past: '%s temu',
        s: 'kilka sekund',
        m: 'minutę',
        mm: '%d minut',
        h: 'godzinę',
        hh: '%d godzin', // e.g. 2 hours, %d been replaced with 2
        d: 'dzień',
        dd: '%d dni',
        M: 'miesiąc',
        MM: '%d miesięcy',
        y: 'rok',
        yy: '%d lat'
      }
    }*/
  };
  
  const elastigantt = Elastigantt.mount({
    el: '#app', // <- your container id
    tasks: tasks,
    options: options
  });
  // listen to events
  elastigantt.$on('elastigantt.tree.scroll',(ev)=>{
    console.log('scroll');
  });