const tank = new RadialGauge({
    renderTo: 'water-level',
    width: 400,
    height: 400,
    units: 'Litres',
    title: false,
    value: 0,
    minValue: 0,
    maxValue: 220,
    majorTicks: [
        '0','20','40','60','80','100','120','140','160','180','200','220'
    ],
    minorTicks: 2,
    strokeTicks: false,
    highlights: [
        { from: 0, to: 60, color: 'rgba(255,0,0,.3)' },
        // { from: 50, to: 100, color: 'rgba(255,255,0,.15)' },
        // { from: 100, to: 150, color: 'rgba(255,30,0,.25)' },
        // { from: 150, to: 200, color: 'rgba(255,0,225,.25)' },
        // { from: 200, to: 220, color: 'rgba(0,0,255,.25)' }
    ],
    colorPlate: '#222',
    colorMajorTicks: '#f5f5f5',
    colorMinorTicks: '#ddd',
    colorTitle: '#fff',
    colorUnits: '#ccc',
    colorNumbers: '#eee',
    colorNeedle: 'rgba(240, 128, 128, 1)',
    colorNeedleEnd: 'rgba(255, 160, 122, .9)',
    valueBox: false,
    animationRule: 'bounce',
    animationDuration: 500
});

const rate = new RadialGauge({
    renderTo: 'rate',
    width: 400,
    height: 400,
    units: 'l/h',
    title: false,
    value: 0,
    minValue: 0,
    maxValue: 100,
    majorTicks: [
        '0','10','20','30','40','50','60','70','80','90','100'
    ],
    minorTicks: 2,
    strokeTicks: false,
    highlights: [
        { from: 70, to: 100, color: 'rgba(255,0,0,.3)' },
        // { from: 50, to: 100, color: 'rgba(255,255,0,.15)' },
        // { from: 100, to: 150, color: 'rgba(255,30,0,.25)' },
        // { from: 150, to: 200, color: 'rgba(255,0,225,.25)' },
        // { from: 200, to: 220, color: 'rgba(0,0,255,.25)' }
    ],
    colorPlate: '#222',
    colorMajorTicks: '#f5f5f5',
    colorMinorTicks: '#ddd',
    colorTitle: '#fff',
    colorUnits: '#ccc',
    colorNumbers: '#eee',
    colorNeedle: 'rgba(240, 128, 128, 1)',
    colorNeedleEnd: 'rgba(255, 160, 122, .9)',
    valueBox: false,
    animationRule: 'bounce',
    animationDuration: 500
});

tank.draw();
rate.draw();