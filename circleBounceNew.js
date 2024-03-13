/************************ 
 * Circlebouncenew *
 ************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2023.2.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'circleBounceNew';  // from the Builder filename that created this script
let expInfo = {
    '': '',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'fill',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(PIS1RoutineBegin());
flowScheduler.add(PIS1RoutineEachFrame());
flowScheduler.add(PIS1RoutineEnd());
flowScheduler.add(PIS2RoutineBegin());
flowScheduler.add(PIS2RoutineEachFrame());
flowScheduler.add(PIS2RoutineEnd());
flowScheduler.add(PIS3RoutineBegin());
flowScheduler.add(PIS3RoutineEachFrame());
flowScheduler.add(PIS3RoutineEnd());
flowScheduler.add(ConsentRoutineBegin());
flowScheduler.add(ConsentRoutineEachFrame());
flowScheduler.add(ConsentRoutineEnd());
flowScheduler.add(Instructions_2RoutineBegin());
flowScheduler.add(Instructions_2RoutineEachFrame());
flowScheduler.add(Instructions_2RoutineEnd());
flowScheduler.add(Instruction_AnimationRoutineBegin());
flowScheduler.add(Instruction_AnimationRoutineEachFrame());
flowScheduler.add(Instruction_AnimationRoutineEnd());
flowScheduler.add(Line0RoutineBegin());
flowScheduler.add(Line0RoutineEachFrame());
flowScheduler.add(Line0RoutineEnd());
flowScheduler.add(Halo_01RoutineBegin());
flowScheduler.add(Halo_01RoutineEachFrame());
flowScheduler.add(Halo_01RoutineEnd());
flowScheduler.add(Halo_02RoutineBegin());
flowScheduler.add(Halo_02RoutineEachFrame());
flowScheduler.add(Halo_02RoutineEnd());
flowScheduler.add(Halo_03RoutineBegin());
flowScheduler.add(Halo_03RoutineEachFrame());
flowScheduler.add(Halo_03RoutineEnd());
flowScheduler.add(Instructions2RoutineBegin());
flowScheduler.add(Instructions2RoutineEachFrame());
flowScheduler.add(Instructions2RoutineEnd());
const PractLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(PractLoopBegin(PractLoopScheduler));
flowScheduler.add(PractLoopScheduler);
flowScheduler.add(PractLoopEnd);






flowScheduler.add(StartRoutineBegin());
flowScheduler.add(StartRoutineEachFrame());
flowScheduler.add(StartRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);











const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);










flowScheduler.add(Halo_3RoutineBegin());
flowScheduler.add(Halo_3RoutineEachFrame());
flowScheduler.add(Halo_3RoutineEnd());
flowScheduler.add(DebriefRoutineBegin());
flowScheduler.add(DebriefRoutineEachFrame());
flowScheduler.add(DebriefRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'Book5.xlsx', 'path': 'Book5.xlsx'},
    {'name': 'Book5.xlsx', 'path': 'Book5.xlsx'},
    {'name': 'OneDot.xlsx', 'path': 'OneDot.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2023.2.3';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var PIS1Clock;
var text_10;
var mouse_4;
var PIS2Clock;
var text_16;
var mouse_13;
var PIS3Clock;
var text_17;
var mouse_19;
var ConsentClock;
var text_18;
var key_resp;
var Instructions_2Clock;
var radius;
var text_8;
var mouse_12;
var Instruction_AnimationClock;
var mouse_11;
var Line0Clock;
var mouse_15;
var text_12;
var Halo_01Clock;
var mouse_16;
var text_13;
var Halo_02Clock;
var mouse_17;
var text_14;
var Halo_03Clock;
var mouse_18;
var text_15;
var text_19;
var Instructions2Clock;
var white;
var grey;
var yellow;
var green;
var black;
var red;
var transparent;
var win;
var text_7;
var mouse_10;
var RotationClock;
var Progress;
var bar;
var Condition;
var barground;
var barfor;
var mouse;
var LineClock;
var mouse_7;
var text;
var Halo_1Clock;
var mouse_2;
var text_2;
var Halo_2Clock;
var mouse_3;
var text_3;
var Halo_3Clock;
var mouse_6;
var text_4;
var StartClock;
var mouse_9;
var text_6;
var MaskClock;
var defineVars;
var circlePositions;
var dotRadius;
var l1;
var lR;
var l3;
var l5;
var Line;
var mouse_5;
var DebriefClock;
var mouse_14;
var text_9;
var text_11;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "PIS1"
  PIS1Clock = new util.Clock();
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: 'Participant Information Sheet\n\nWhat is the study about?\nWe invite you to participate in a research project about the visual processing of grouped objects. We are interested in the way different groupings affect the way we track composite movement.   \n\nDo I have to take part?\nThis information sheet has been written to help you decide if you would like to take part. It is up to you and you alone whether you wish to take part. If you do decide to take part, you will be free to withdraw at any time by pressing the escape key with no negative consequences.\n\nWhat would I be required to do?\nThe task involves viewing short clips of moving objects and after each clip indicating where you would expect an object to collide with a barrier. There are example trials and visual instructions, and the setup detailed there remains the same throughout the task. \n\nInformed consent\nIt is important that you can give your informed consent before taking part in this study. Feel free to ask questions about the research by contacting the researchers before you provide your consent.\n\nWhat information about me or recordings of me (‘my data’) will you be collecting?\nOnly your age and the position of the clicks you place to indicate where you expect stimuli to collide with a barrier will be recorded. This data will be anonymous which means that that no-one, including the researchers, could use any reasonably available means to identify you from the data. \n\nClick to continue to the next page.\n \n1/3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_4 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_4.mouseClock = new util.Clock();
  // Initialize components for Routine "PIS2"
  PIS2Clock = new util.Clock();
  text_16 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_16',
    text: 'Participant Information Sheet\n\nHow will my data be stored and who will have access to it? \nThe data will be stored in OneDrive file to be accessible only by the participating researchers.\n\nHow will my data be used and in what form will it be shared further?\nThe data will be analysed as part of the research study. It may then be published in my dissertation which will be finalised by April 2023. \n\n\nWhen will my data be destroyed?\nThe data will be retained until I have fully completed my dissertation (including grading), and then destroyed. \n\nWill my participation be confidential?\nYes, we will use an anonymous recruitment policy in Pavlovia so your participation is not known to anyone. \n\nUse of your personal data for research and your data protection rights \nThe University of St Andrews (the ‘Data Controller’) is bound by the UK 2018 Data Protection Act and the General Data Protection Regulation (GDPR), which require a lawful basis for all processing of personal data (in this case it is the ‘performance of a task carried out in the public interest’ – namely, for research purposes) and an additional lawful basis for processing personal data containing special characteristics (in this case it is ‘public interest research’). You have a range of rights under data protection legislation. For more information on data protection legislation and your rights visit https://www.st-andrews.ac.uk/terms/data-protection/rights/. For any queries, email dataprot@st-andrews.ac.uk.\n\nClick to continue.\n\n2/3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_13 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_13.mouseClock = new util.Clock();
  // Initialize components for Routine "PIS3"
  PIS3Clock = new util.Clock();
  text_17 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_17',
    text: 'Participant Information Sheet\n\nWithdrawing your data\nOnce data is collected it cannot be deleted because we will not know which data is yours. You can still withdraw from the experiment at any time by pressing the escape key or closing the browser. \n\nEthics review\nThis experiment was granted ethical approval by the University of St Andrews Teaching and Research Ethics Committee. \n\nWhat should I do if I have concerns about this study?\nIn the first instance, you are encouraged to raise your concerns with the researcher. However, if you do not feel comfortable doing so, then you should contact Dr Justin Ales or the School Ethics Contact (contact details below). A full outline of the procedures governed by the University Teaching and Research Ethics Committee is available at https://www.st-andrews.ac.uk/research/integrity-ethics/humans/ethical-guidance/complaints/.\n\nContact details\nFeel free to ask addition questions using the following contact information.\n\nResearcher: Jan Thiel – jmt28@st-andrews.ac.uk\nSupervisor: Dr Justin Ales – jma23@st-andrews.ac.uk \nSchool ethics contact: psyethics@st-andrews.ac.uk \n\nClick to continue to the consent form.\n\n3/3',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  mouse_19 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_19.mouseClock = new util.Clock();
  // Initialize components for Routine "Consent"
  ConsentClock = new util.Clock();
  text_18 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_18',
    text: "Consent Form\n\nThe University of St Andrews attaches high priority to the ethical conduct of research.  We therefore ask you to consider the following points before signing this form. Pressing the 'y'-key confirms that you are willing to participate in this study, however, it does not commit you to anything you do not wish to do and you are free to withdraw your participation at any time by pressing the 'escape'-key twice. \n\nOnly press the 'y'-key if you understand and agree with the following statements:\n\no I understand the contents of the Participant Information Sheet \n\no I have been given the opportunity to ask questions about the study and have had them answered satisfactorily.\n\no I understand that my participation is entirely voluntary and that I can withdraw from the study at any time without giving an explanation and with no disbenefit. \n\no I understand who will have access to my data, how it will be stored, in what form it will be shared, and what will happen to it at the end of the study. \n\no I understand that once the experiment is over my data cannot be withdrawn because it has been anonymised.\n\no I agree to take part in the above study\n\nPress the 'y'-key if you understand and agree to start the experiment or press the 'escape'-key to exit.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.025,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Instructions_2"
  Instructions_2Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_10
  radius = 0.375;
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: 'Welcome to this experiment! \n\nOn the next screen, a black dot will appear \nthat moves through the white circle.\nYour job is to remember the trajectory of this dot. \nYou will be asked to predict the path of the dot, assuming that it keeps its momentum on leaving the circle.\n\nClick to continue!\n',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0], height: 0.02,  wrapWidth: 0.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: -1.0 
  });
  
  mouse_12 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_12.mouseClock = new util.Clock();
  // Initialize components for Routine "Instruction_Animation"
  Instruction_AnimationClock = new util.Clock();
  mouse_11 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_11.mouseClock = new util.Clock();
  // Initialize components for Routine "Line0"
  Line0Clock = new util.Clock();
  mouse_15 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_15.mouseClock = new util.Clock();
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: 'Where did the dot cross the black line?',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, (0.8 * radius)], height: 0.02,  wrapWidth: 0.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Halo_01"
  Halo_01Clock = new util.Clock();
  mouse_16 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_16.mouseClock = new util.Clock();
  text_13 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_13',
    text: 'Where did the dot leave the circle',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (0.2 * radius)], height: 0.02,  wrapWidth: 0.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Halo_02"
  Halo_02Clock = new util.Clock();
  mouse_17 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_17.mouseClock = new util.Clock();
  text_14 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_14',
    text: 'Assuming that the dot continues\nits trajectory after leaving the circle, \nwhere would the dot have \ncrossed the line of this ring?',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, (0.3 * radius)], height: 0.02,  wrapWidth: 0.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Halo_03"
  Halo_03Clock = new util.Clock();
  mouse_18 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_18.mouseClock = new util.Clock();
  text_15 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_15',
    text: 'Assuming that the dot continues \nits trajectory after leaving the circle, \nwhere would the dot have \ncrossed the line of the second ring?',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, (0.3 * radius)], height: 0.02,  wrapWidth: 0.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: -2.0 
  });
  
  text_19 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_19',
    text: 'During the experiment, clicking on this screen\nwill immediatly cause moving dots to appear! ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, ((- 0.1) * radius)], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Instructions2"
  Instructions2Clock = new util.Clock();
  // Run 'Begin Experiment' code from code_11
  white = new util.Color([1, 1, 1]);
  grey = new util.Color([.2, .2, .2]);
  yellow = new util.Color([1, 1, 0]);
  green = new util.Color([-1, 0, -1]);
  black = new util.Color([-1, -1, -1]);
  red = new util.Color([1, 0, 0]);
  transparent = null
  
  win=psychoJS.window 
  
  console.log('Welcome to the experiment');
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'Please read these instructions carefully,\nas otherwise it is easy to get confused!\n\nIn the following practice trials there will be\nmore than one dot to see. \nYou only need to focus on the first one. \n\nAll questions refer to the dot that was \nthe first to cross the circle lines. \n\nSometimes it might be a very close call which dot is the first, in that case pick any dot to follow.\n\nClick to continue!',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0], height: 0.02,  wrapWidth: 0.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: -1.0 
  });
  
  mouse_10 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_10.mouseClock = new util.Clock();
  // Initialize components for Routine "Rotation"
  RotationClock = new util.Clock();
  // Run 'Begin Experiment' code from code
  //var dx;
  //var dy;
  //var _pj;
  //var blueDotAngle;
  //var t1;
  //var t2;
  //var t_now;
  //var frameCount;
  //var frameCountPrevious;
  
  Math.floor();
  //radius = 0.375;
  psychoJS.window.setColor(black);
  Progress = 0;
  //bar = new visual.Progress({"win": psychoJS.window, "pos": [0.5, 0.45], "size": [0.2, 0.1]});
  bar = new visual.Progress({"win": psychoJS.window, "pos": [0, 0], "size": [0.2, 0.1], "backColor": green});
  bar.opacity = 0;
  //bar.autoDraw = true;
  Condition = 0;
  barground = new visual.Rect({"win": psychoJS.window, "pos": [0.65, 0.45], "size": [0.2, 0.1], "lineColor": white, "fillColor": null, "lineWidth": 5});
  barfor = new visual.Rect({"win": psychoJS.window, "pos": [0.61, 0.45], "size": [0.16, 0.08], "fillColor": white});
  barfor.opacity = 0;
  barground.opacity = 0;
  barground.autoDraw = true;
  barfor.autoDraw = true;
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "Line"
  LineClock = new util.Clock();
  mouse_7 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_7.mouseClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Where did the first dot cross the black line?',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, (0.8 * radius)], height: 0.02,  wrapWidth: 0.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Halo_1"
  Halo_1Clock = new util.Clock();
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Where did the first dot leave the circle\n',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, (0.8 * radius)], height: 0.02,  wrapWidth: 0.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Halo_2"
  Halo_2Clock = new util.Clock();
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Where would the first dot have \ncrossed the line of this ring?',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, (0.8 * radius)], height: 0.02,  wrapWidth: 0.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Halo_3"
  Halo_3Clock = new util.Clock();
  mouse_6 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_6.mouseClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Where would the first dot have \ncrossed the line of the second ring?',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, (0.8 * radius)], height: 0.02,  wrapWidth: 0.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Start"
  StartClock = new util.Clock();
  mouse_9 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_9.mouseClock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Those were the practice trials. \nClick to start the experiment!',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, 0], height: 0.02,  wrapWidth: 0.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('black'),  opacity: 1.0,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Mask"
  MaskClock = new util.Clock();
  // Run 'Begin Experiment' code from code_3
  //var initializationClock = new util.Clock();
  defineVars = true;
  //circlePositions = [-0.03333333333333333, -0.06666666666666667,-0.1,-0.13333333333333333,-0.16666666666666666,-0.2];
  circlePositions = []
  //radius = 0.4;
  dotRadius = (0.015 / 2);
  l1 = new visual.Polygon({"win": psychoJS.window, "units": psychoJS.window.units, "lineWidth": 15/2, "lineColor": white, "fillColor": black, "edges": 99, "radius": (1.25*radius)});
  //"radius": (1.25 * radius)
  lR = new visual.Polygon({"win": psychoJS.window, "units": psychoJS.window.units, "radius": radius, "edges": 99, "lineColor": black, "fillColor": black});
  l3 = new visual.Polygon({"win": psychoJS.window, "units": psychoJS.window.units, "radius": (0.9775 * radius), "edges": 99, "lineWidth": 15/2, "lineColor": white, "fillColor": black});
  l5 = new visual.Polygon({"win": psychoJS.window, "units": psychoJS.window.units, "radius": (0.7 * radius), "edges": 99, "lineColor": black, "fillColor": white});
  Line = new visual.Polygon({"win": psychoJS.window, "units": psychoJS.window.units, "radius": (0.7 * radius), "edges": 99, "lineWidth": 15/2, "lineColor": null, "fillColor": null});
  //Line.setFillColor(null);
  //Line.setLineColor(null); //this is just to see if the line mouse works
  
  //circle_1 = new visual.Polygon({"win": psychoJS.window, "radius": (0.015 / 2), "edges": 99, "lineColor": red, "fillColor": red});
  //circle0 = new visual.Polygon({"win": psychoJS.window, "radius": (0.015 / 2), "edges": 99, "lineColor": red, "fillColor": red});
  
  
  mouse_5 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_5.mouseClock = new util.Clock();
  // Initialize components for Routine "Debrief"
  DebriefClock = new util.Clock();
  mouse_14 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_14.mouseClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'In this experiment we wanted to investigate why it looks like the dots are moving in curves even though they are all moving in straight lines. \nFeel free to contract jmt28@st-andrews.ac.uk if you have questions or are interested in the results of this study. ',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, (0.9 * radius)], height: 0.02,  wrapWidth: 0.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: 'Thank you for participating!\nClick to exit the experiment',
    font: 'Open Sans',
    units: 'height', 
    pos: [0, ((- 0.8) * radius)], height: 0.02,  wrapWidth: 0.5, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: 1.0,
    depth: -3.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var PIS1Components;
function PIS1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PIS1' ---
    t = 0;
    PIS1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('PIS1.started', globalClock.getTime());
    // setup some python lists for storing info about the mouse_4
    // current position of the mouse:
    mouse_4.x = [];
    mouse_4.y = [];
    mouse_4.leftButton = [];
    mouse_4.midButton = [];
    mouse_4.rightButton = [];
    mouse_4.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    PIS1Components = [];
    PIS1Components.push(text_10);
    PIS1Components.push(mouse_4);
    
    for (const thisComponent of PIS1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function PIS1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PIS1' ---
    // get current time
    t = PIS1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_10* updates
    if (t >= 0.0 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }
    
    // *mouse_4* updates
    if (t >= 0.0 && mouse_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_4.tStart = t;  // (not accounting for frame time here)
      mouse_4.frameNStart = frameN;  // exact frame index
      
      mouse_4.status = PsychoJS.Status.STARTED;
      mouse_4.mouseClock.reset();
      prevButtonState = mouse_4.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_4.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_4.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_4.getPos();
          mouse_4.x.push(_mouseXYs[0]);
          mouse_4.y.push(_mouseXYs[1]);
          mouse_4.leftButton.push(_mouseButtons[0]);
          mouse_4.midButton.push(_mouseButtons[1]);
          mouse_4.rightButton.push(_mouseButtons[2]);
          mouse_4.time.push(mouse_4.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PIS1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PIS1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PIS1' ---
    for (const thisComponent of PIS1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('PIS1.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_4.x) {  psychoJS.experiment.addData('mouse_4.x', mouse_4.x[0])};
    if (mouse_4.y) {  psychoJS.experiment.addData('mouse_4.y', mouse_4.y[0])};
    if (mouse_4.leftButton) {  psychoJS.experiment.addData('mouse_4.leftButton', mouse_4.leftButton[0])};
    if (mouse_4.midButton) {  psychoJS.experiment.addData('mouse_4.midButton', mouse_4.midButton[0])};
    if (mouse_4.rightButton) {  psychoJS.experiment.addData('mouse_4.rightButton', mouse_4.rightButton[0])};
    if (mouse_4.time) {  psychoJS.experiment.addData('mouse_4.time', mouse_4.time[0])};
    
    // the Routine "PIS1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var PIS2Components;
function PIS2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PIS2' ---
    t = 0;
    PIS2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('PIS2.started', globalClock.getTime());
    // setup some python lists for storing info about the mouse_13
    // current position of the mouse:
    mouse_13.x = [];
    mouse_13.y = [];
    mouse_13.leftButton = [];
    mouse_13.midButton = [];
    mouse_13.rightButton = [];
    mouse_13.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    PIS2Components = [];
    PIS2Components.push(text_16);
    PIS2Components.push(mouse_13);
    
    for (const thisComponent of PIS2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PIS2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PIS2' ---
    // get current time
    t = PIS2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_16* updates
    if (t >= 0.0 && text_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_16.tStart = t;  // (not accounting for frame time here)
      text_16.frameNStart = frameN;  // exact frame index
      
      text_16.setAutoDraw(true);
    }
    
    // *mouse_13* updates
    if (t >= 0.0 && mouse_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_13.tStart = t;  // (not accounting for frame time here)
      mouse_13.frameNStart = frameN;  // exact frame index
      
      mouse_13.status = PsychoJS.Status.STARTED;
      mouse_13.mouseClock.reset();
      prevButtonState = mouse_13.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_13.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_13.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_13.getPos();
          mouse_13.x.push(_mouseXYs[0]);
          mouse_13.y.push(_mouseXYs[1]);
          mouse_13.leftButton.push(_mouseButtons[0]);
          mouse_13.midButton.push(_mouseButtons[1]);
          mouse_13.rightButton.push(_mouseButtons[2]);
          mouse_13.time.push(mouse_13.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PIS2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PIS2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PIS2' ---
    for (const thisComponent of PIS2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('PIS2.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_13.x) {  psychoJS.experiment.addData('mouse_13.x', mouse_13.x[0])};
    if (mouse_13.y) {  psychoJS.experiment.addData('mouse_13.y', mouse_13.y[0])};
    if (mouse_13.leftButton) {  psychoJS.experiment.addData('mouse_13.leftButton', mouse_13.leftButton[0])};
    if (mouse_13.midButton) {  psychoJS.experiment.addData('mouse_13.midButton', mouse_13.midButton[0])};
    if (mouse_13.rightButton) {  psychoJS.experiment.addData('mouse_13.rightButton', mouse_13.rightButton[0])};
    if (mouse_13.time) {  psychoJS.experiment.addData('mouse_13.time', mouse_13.time[0])};
    
    // the Routine "PIS2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var PIS3Components;
function PIS3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'PIS3' ---
    t = 0;
    PIS3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('PIS3.started', globalClock.getTime());
    // setup some python lists for storing info about the mouse_19
    // current position of the mouse:
    mouse_19.x = [];
    mouse_19.y = [];
    mouse_19.leftButton = [];
    mouse_19.midButton = [];
    mouse_19.rightButton = [];
    mouse_19.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    PIS3Components = [];
    PIS3Components.push(text_17);
    PIS3Components.push(mouse_19);
    
    for (const thisComponent of PIS3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function PIS3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'PIS3' ---
    // get current time
    t = PIS3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_17* updates
    if (t >= 0.0 && text_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_17.tStart = t;  // (not accounting for frame time here)
      text_17.frameNStart = frameN;  // exact frame index
      
      text_17.setAutoDraw(true);
    }
    
    // *mouse_19* updates
    if (t >= 0.0 && mouse_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_19.tStart = t;  // (not accounting for frame time here)
      mouse_19.frameNStart = frameN;  // exact frame index
      
      mouse_19.status = PsychoJS.Status.STARTED;
      mouse_19.mouseClock.reset();
      prevButtonState = mouse_19.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_19.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_19.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_19.getPos();
          mouse_19.x.push(_mouseXYs[0]);
          mouse_19.y.push(_mouseXYs[1]);
          mouse_19.leftButton.push(_mouseButtons[0]);
          mouse_19.midButton.push(_mouseButtons[1]);
          mouse_19.rightButton.push(_mouseButtons[2]);
          mouse_19.time.push(mouse_19.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PIS3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PIS3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'PIS3' ---
    for (const thisComponent of PIS3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('PIS3.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_19.x) {  psychoJS.experiment.addData('mouse_19.x', mouse_19.x[0])};
    if (mouse_19.y) {  psychoJS.experiment.addData('mouse_19.y', mouse_19.y[0])};
    if (mouse_19.leftButton) {  psychoJS.experiment.addData('mouse_19.leftButton', mouse_19.leftButton[0])};
    if (mouse_19.midButton) {  psychoJS.experiment.addData('mouse_19.midButton', mouse_19.midButton[0])};
    if (mouse_19.rightButton) {  psychoJS.experiment.addData('mouse_19.rightButton', mouse_19.rightButton[0])};
    if (mouse_19.time) {  psychoJS.experiment.addData('mouse_19.time', mouse_19.time[0])};
    
    // the Routine "PIS3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_allKeys;
var ConsentComponents;
function ConsentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Consent' ---
    t = 0;
    ConsentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Consent.started', globalClock.getTime());
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    ConsentComponents = [];
    ConsentComponents.push(text_18);
    ConsentComponents.push(key_resp);
    
    for (const thisComponent of ConsentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ConsentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Consent' ---
    // get current time
    t = ConsentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_18* updates
    if (t >= 0.0 && text_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_18.tStart = t;  // (not accounting for frame time here)
      text_18.frameNStart = frameN;  // exact frame index
      
      text_18.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['y'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ConsentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ConsentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Consent' ---
    for (const thisComponent of ConsentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Consent.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Consent" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var mouse_angle;
var circle1;
var cum;
var fullRotation;
var prev;
var Instructions_2Components;
function Instructions_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions_2' ---
    t = 0;
    Instructions_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions_2.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_10
    mouse_angle = 0;
    //let mouse = new visual.Mouse({win: psychoJS.window,});
    circle1 = new visual.Polygon({"win": psychoJS.window, "radius": (0.015 / 2), "edges": 99, "fillColor": red, "lineColor": red});
    circle1.opacity = 1;
    l5.autoDraw = true;
    circle1.autoDraw = false;
    Condition = 1;
    
    //changeStim = new visual.TextStim({"win": psychoJS.window, "color": black, "height": 0.035});
    //changeStim.autoDraw = true;
    cum = 0;
    fullRotation = 0
    prev = 0.01
    // setup some python lists for storing info about the mouse_12
    // current position of the mouse:
    mouse_12.x = [];
    mouse_12.y = [];
    mouse_12.leftButton = [];
    mouse_12.midButton = [];
    mouse_12.rightButton = [];
    mouse_12.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Instructions_2Components = [];
    Instructions_2Components.push(text_8);
    Instructions_2Components.push(mouse_12);
    
    for (const thisComponent of Instructions_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var position;
var xposition;
var yposition;
function Instructions_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions_2' ---
    // get current time
    t = Instructions_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_10
    //change = (- util.sum(mouse.getRel()));
    //mouse_angle += (3 * change);
    position = mouse.getPos()
    mouse_angle = Math.atan2(position[1], position[0])
    xposition = (0.7*radius * Math.cos(mouse_angle));
    yposition = (0.7*radius * Math.sin(mouse_angle));
    circle1.pos = [xposition, yposition];
    //if (Math.sign(change) === 0) {cum = 0};
    
    // Check if the signs of change and prev are different
    //if (change * prev < 0) {
        //cum = 0;
    //}
    //cum += change;
    //changeStim.text = cum;
    //console.log(cum);
    //if ((Math.abs(cum) >= 2)) {
        //fullRotation += 1;
        //cum = 0;
    //}
    //if ((change * prev) !== 0) {
        //prev = change;
    //}
    //if ((fullRotation >= 2)) {
        //continueRoutine = false;
    //};
    
    // *text_8* updates
    if (t >= 0.0 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    // *mouse_12* updates
    if (t >= 0.0 && mouse_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_12.tStart = t;  // (not accounting for frame time here)
      mouse_12.frameNStart = frameN;  // exact frame index
      
      mouse_12.status = PsychoJS.Status.STARTED;
      mouse_12.mouseClock.reset();
      prevButtonState = mouse_12.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_12.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_12.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_12.getPos();
          mouse_12.x.push(_mouseXYs[0]);
          mouse_12.y.push(_mouseXYs[1]);
          mouse_12.leftButton.push(_mouseButtons[0]);
          mouse_12.midButton.push(_mouseButtons[1]);
          mouse_12.rightButton.push(_mouseButtons[2]);
          mouse_12.time.push(mouse_12.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions_2' ---
    for (const thisComponent of Instructions_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instructions_2.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_10
    circle1.autoDraw = false;
    
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_12.x) {  psychoJS.experiment.addData('mouse_12.x', mouse_12.x[0])};
    if (mouse_12.y) {  psychoJS.experiment.addData('mouse_12.y', mouse_12.y[0])};
    if (mouse_12.leftButton) {  psychoJS.experiment.addData('mouse_12.leftButton', mouse_12.leftButton[0])};
    if (mouse_12.midButton) {  psychoJS.experiment.addData('mouse_12.midButton', mouse_12.midButton[0])};
    if (mouse_12.rightButton) {  psychoJS.experiment.addData('mouse_12.rightButton', mouse_12.rightButton[0])};
    if (mouse_12.time) {  psychoJS.experiment.addData('mouse_12.time', mouse_12.time[0])};
    
    // the Routine "Instructions_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var averageCircle;
var rotationSpeed;
var angle;
var Instruction_AnimationComponents;
function Instruction_AnimationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instruction_Animation' ---
    t = 0;
    Instruction_AnimationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instruction_Animation.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_9
    l5.autoDraw = true;
    averageCircle = new visual.Polygon({"win": psychoJS.window, "radius": dotRadius, "edges": 99, "fillColor": black, "lineColor": black});
    averageCircle.autoDraw = true;
    rotationSpeed = 0.1;
    angle = (Math.PI / 3);
    
    // setup some python lists for storing info about the mouse_11
    // current position of the mouse:
    mouse_11.x = [];
    mouse_11.y = [];
    mouse_11.leftButton = [];
    mouse_11.midButton = [];
    mouse_11.rightButton = [];
    mouse_11.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Instruction_AnimationComponents = [];
    Instruction_AnimationComponents.push(mouse_11);
    
    for (const thisComponent of Instruction_AnimationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var avgX;
var avgY;
var frameRemains;
function Instruction_AnimationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instruction_Animation' ---
    // get current time
    t = Instruction_AnimationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_9
    avgX = (radius * Math.cos(angle));
    avgY = ((radius * Math.sin(angle)) - 0.28);
    angle += (rotationSpeed / 5);
    averageCircle.pos = [avgX, avgY];
    
    // *mouse_11* updates
    if (t >= 0.0 && mouse_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_11.tStart = t;  // (not accounting for frame time here)
      mouse_11.frameNStart = frameN;  // exact frame index
      
      mouse_11.status = PsychoJS.Status.STARTED;
      mouse_11.mouseClock.reset();
      prevButtonState = mouse_11.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mouse_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mouse_11.status = PsychoJS.Status.FINISHED;
        }
    if (mouse_11.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_11.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_11.getPos();
          mouse_11.x.push(_mouseXYs[0]);
          mouse_11.y.push(_mouseXYs[1]);
          mouse_11.leftButton.push(_mouseButtons[0]);
          mouse_11.midButton.push(_mouseButtons[1]);
          mouse_11.rightButton.push(_mouseButtons[2]);
          mouse_11.time.push(mouse_11.mouseClock.getTime());
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instruction_AnimationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instruction_AnimationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instruction_Animation' ---
    for (const thisComponent of Instruction_AnimationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instruction_Animation.stopped', globalClock.getTime());
    l5.autoDraw = false;
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_11.x', mouse_11.x);
    psychoJS.experiment.addData('mouse_11.y', mouse_11.y);
    psychoJS.experiment.addData('mouse_11.leftButton', mouse_11.leftButton);
    psychoJS.experiment.addData('mouse_11.midButton', mouse_11.midButton);
    psychoJS.experiment.addData('mouse_11.rightButton', mouse_11.rightButton);
    psychoJS.experiment.addData('mouse_11.time', mouse_11.time);
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var start;
var end;
var circle0;
var Line0Components;
function Line0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Line0' ---
    t = 0;
    Line0Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Line0.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_14
    mouse_angle = ((0 + ((2.5 * Math.PI) / 15)) + Math.PI);
    
    start = [((0.7 * radius) * Math.cos((0 + ((2.5 * Math.PI) / 15)))), ((0.7 * radius) * Math.sin((0 + ((2.5 * Math.PI) / 15))))];
    end = [((0.7 * radius) * Math.cos(((0 + ((2.5 * Math.PI) / 15)) + Math.PI))), ((0.7 * radius) * Math.sin(((0 + ((2.5 * Math.PI) / 15)) + Math.PI)))];
    Line.pos = start;
    l5.autoDraw = true;
    Line.autoDraw = true;
    circle0 = new visual.Polygon({"win": psychoJS.window, "radius": (0.015 / 2), "edges": 99, "fillColor": red, "lineColor": red});
    circle0.opacity = 1;
    //circle0.autoDraw = true;
    
    console.log('start=', start)
    // setup some python lists for storing info about the mouse_15
    // current position of the mouse:
    mouse_15.x = [];
    mouse_15.y = [];
    mouse_15.leftButton = [];
    mouse_15.midButton = [];
    mouse_15.rightButton = [];
    mouse_15.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Line0Components = [];
    Line0Components.push(mouse_15);
    Line0Components.push(text_12);
    
    for (const thisComponent of Line0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Line0RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Line0' ---
    // get current time
    t = Line0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_14
    //change = (- util.sum(mouse_15.getRel()));
    //mouse_angle += (3 * change);
    position = mouse.getPos()
    mouse_angle = Math.atan2((position[1]-start[1]), (position[0]-start[0]))
    xposition = ((0.7*radius) * Math.cos(mouse_angle)) + start[0];
    yposition = ((0.7*radius) * Math.sin(mouse_angle)) + start[1];
    circle0.pos = [xposition, yposition];
    circle0.draw()
    // *mouse_15* updates
    if (t >= 0.0 && mouse_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_15.tStart = t;  // (not accounting for frame time here)
      mouse_15.frameNStart = frameN;  // exact frame index
      
      mouse_15.status = PsychoJS.Status.STARTED;
      mouse_15.mouseClock.reset();
      prevButtonState = mouse_15.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_15.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_15.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_15.getPos();
          mouse_15.x.push(_mouseXYs[0]);
          mouse_15.y.push(_mouseXYs[1]);
          mouse_15.leftButton.push(_mouseButtons[0]);
          mouse_15.midButton.push(_mouseButtons[1]);
          mouse_15.rightButton.push(_mouseButtons[2]);
          mouse_15.time.push(mouse_15.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_12* updates
    if (t >= 0.0 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Line0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Line0RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Line0' ---
    for (const thisComponent of Line0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Line0.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_14
    l5.autoDraw = false;
    Line.autoDraw = false;
    circle0.autoDraw = false;
    
    psychoJS.experiment.addData('Demo c0 x position:', circle0.pos[0]);
    psychoJS.experiment.addData('Demo c0 y position:', circle0.pos[1])
     
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_15.x) {  psychoJS.experiment.addData('mouse_15.x', mouse_15.x[0])};
    if (mouse_15.y) {  psychoJS.experiment.addData('mouse_15.y', mouse_15.y[0])};
    if (mouse_15.leftButton) {  psychoJS.experiment.addData('mouse_15.leftButton', mouse_15.leftButton[0])};
    if (mouse_15.midButton) {  psychoJS.experiment.addData('mouse_15.midButton', mouse_15.midButton[0])};
    if (mouse_15.rightButton) {  psychoJS.experiment.addData('mouse_15.rightButton', mouse_15.rightButton[0])};
    if (mouse_15.time) {  psychoJS.experiment.addData('mouse_15.time', mouse_15.time[0])};
    
    // the Routine "Line0" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Halo_01Components;
function Halo_01RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Halo_01' ---
    t = 0;
    Halo_01Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Halo_01.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_15
    mouse_angle = ((0 + ((2.5 * Math.PI) / 15)) + Math.PI);
    //mouse = new psychoJS.eventManager.Mouse({"win": psychoJS.window});
    
    circle1 = new visual.Polygon({"win": psychoJS.window, "radius": (0.015 / 2), "edges": 99, "fillColor": red, "lineColor": red});
    circle1.opacity = 1;
    l5.autoDraw = true;
    circle0.autoDraw = true;
    //circle1.autoDraw = true;
    
    // setup some python lists for storing info about the mouse_16
    // current position of the mouse:
    mouse_16.x = [];
    mouse_16.y = [];
    mouse_16.leftButton = [];
    mouse_16.midButton = [];
    mouse_16.rightButton = [];
    mouse_16.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Halo_01Components = [];
    Halo_01Components.push(mouse_16);
    Halo_01Components.push(text_13);
    
    for (const thisComponent of Halo_01Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Halo_01RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Halo_01' ---
    // get current time
    t = Halo_01Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_15
    //change = (- util.sum(mouse.getRel()));
    //mouse_angle += (3 * change);
    position = mouse.getPos()
    mouse_angle = Math.atan2(position[1], position[0])
    xposition = ((0.7*radius) * Math.cos(mouse_angle));
    yposition = ((0.7*radius) * Math.sin(mouse_angle));
    circle1.pos = [xposition, yposition];
    circle1.draw()
    
    // *mouse_16* updates
    if (t >= 0.0 && mouse_16.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_16.tStart = t;  // (not accounting for frame time here)
      mouse_16.frameNStart = frameN;  // exact frame index
      
      mouse_16.status = PsychoJS.Status.STARTED;
      mouse_16.mouseClock.reset();
      prevButtonState = mouse_16.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_16.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_16.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_16.getPos();
          mouse_16.x.push(_mouseXYs[0]);
          mouse_16.y.push(_mouseXYs[1]);
          mouse_16.leftButton.push(_mouseButtons[0]);
          mouse_16.midButton.push(_mouseButtons[1]);
          mouse_16.rightButton.push(_mouseButtons[2]);
          mouse_16.time.push(mouse_16.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_13* updates
    if (t >= 0.0 && text_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_13.tStart = t;  // (not accounting for frame time here)
      text_13.frameNStart = frameN;  // exact frame index
      
      text_13.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Halo_01Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Halo_01RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Halo_01' ---
    for (const thisComponent of Halo_01Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Halo_01.stopped', globalClock.getTime());
    l5.autoDraw = false;
    circle0.autoDraw = false;
    circle1.autoDraw = false;
    
    psychoJS.experiment.addData('Demo c1 x position:', circle1.pos[0]);
    psychoJS.experiment.addData('Demo c1 y position:', circle1.pos[1])
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_16.x) {  psychoJS.experiment.addData('mouse_16.x', mouse_16.x[0])};
    if (mouse_16.y) {  psychoJS.experiment.addData('mouse_16.y', mouse_16.y[0])};
    if (mouse_16.leftButton) {  psychoJS.experiment.addData('mouse_16.leftButton', mouse_16.leftButton[0])};
    if (mouse_16.midButton) {  psychoJS.experiment.addData('mouse_16.midButton', mouse_16.midButton[0])};
    if (mouse_16.rightButton) {  psychoJS.experiment.addData('mouse_16.rightButton', mouse_16.rightButton[0])};
    if (mouse_16.time) {  psychoJS.experiment.addData('mouse_16.time', mouse_16.time[0])};
    
    // the Routine "Halo_01" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var circle2;
var Halo_02Components;
function Halo_02RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Halo_02' ---
    t = 0;
    Halo_02Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Halo_02.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_16
    mouse_angle = ((0 + ((2.5 * Math.PI) / 15)) + (0.9 * Math.PI));
    circle2 = new visual.Polygon({"win": psychoJS.window, "radius": (0.015 / 2), "edges": 99, "fillColor": red, "lineColor": red});
    circle2.opacity = 1;
    l3.autoDraw = true;
    l5.autoDraw = true;
    circle0.autoDraw = true;
    circle1.autoDraw = true;
    //circle2.autoDraw = true;
    
    // setup some python lists for storing info about the mouse_17
    // current position of the mouse:
    mouse_17.x = [];
    mouse_17.y = [];
    mouse_17.leftButton = [];
    mouse_17.midButton = [];
    mouse_17.rightButton = [];
    mouse_17.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Halo_02Components = [];
    Halo_02Components.push(mouse_17);
    Halo_02Components.push(text_14);
    
    for (const thisComponent of Halo_02Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Halo_02RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Halo_02' ---
    // get current time
    t = Halo_02Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_16
    //l3.draw();
    //l5.draw();
    //change = (- util.sum(mouse.getRel()));
    //mouse_angle += (3 * change);
    position = mouse.getPos()
    mouse_angle = Math.atan2(position[1], position[0])
    xposition = ((0.9775 * radius) * Math.cos(mouse_angle));
    yposition = ((0.9775 * radius) * Math.sin(mouse_angle));
    circle2.pos = [xposition, yposition];
    circle2.draw()
    
    // *mouse_17* updates
    if (t >= 0.0 && mouse_17.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_17.tStart = t;  // (not accounting for frame time here)
      mouse_17.frameNStart = frameN;  // exact frame index
      
      mouse_17.status = PsychoJS.Status.STARTED;
      mouse_17.mouseClock.reset();
      prevButtonState = mouse_17.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_17.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_17.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_17.getPos();
          mouse_17.x.push(_mouseXYs[0]);
          mouse_17.y.push(_mouseXYs[1]);
          mouse_17.leftButton.push(_mouseButtons[0]);
          mouse_17.midButton.push(_mouseButtons[1]);
          mouse_17.rightButton.push(_mouseButtons[2]);
          mouse_17.time.push(mouse_17.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_14* updates
    if (t >= 0.0 && text_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_14.tStart = t;  // (not accounting for frame time here)
      text_14.frameNStart = frameN;  // exact frame index
      
      text_14.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Halo_02Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Halo_02RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Halo_02' ---
    for (const thisComponent of Halo_02Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Halo_02.stopped', globalClock.getTime());
    l3.autoDraw = false;
    l5.autoDraw = false;
    circle0.autoDraw = false;
    circle1.autoDraw = false;
    circle2.autoDraw = false;
    psychoJS.experiment.addData('Demo c2 x position:', circle2.pos[0]);
    psychoJS.experiment.addData('Demo c2 y position:', circle2.pos[1])
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_17.x) {  psychoJS.experiment.addData('mouse_17.x', mouse_17.x[0])};
    if (mouse_17.y) {  psychoJS.experiment.addData('mouse_17.y', mouse_17.y[0])};
    if (mouse_17.leftButton) {  psychoJS.experiment.addData('mouse_17.leftButton', mouse_17.leftButton[0])};
    if (mouse_17.midButton) {  psychoJS.experiment.addData('mouse_17.midButton', mouse_17.midButton[0])};
    if (mouse_17.rightButton) {  psychoJS.experiment.addData('mouse_17.rightButton', mouse_17.rightButton[0])};
    if (mouse_17.time) {  psychoJS.experiment.addData('mouse_17.time', mouse_17.time[0])};
    
    // the Routine "Halo_02" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var circle3;
var Halo_03Components;
function Halo_03RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Halo_03' ---
    t = 0;
    Halo_03Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Halo_03.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_17
    mouse_angle = ((0 + ((2.5 * Math.PI) / 15)) + Math.PI);
    circle3 = new visual.Polygon({"win": psychoJS.window, "radius": (0.015 / 2), "edges": 99, "fillColor": red, "lineColor": red});
    circle3.opacity = 1;
    l1.autoDraw = true;
    l3.autoDraw = true;
    l5.autoDraw = true;
    circle0.autoDraw = true;
    circle1.autoDraw = true;
    circle2.autoDraw = true;
    //circle3.autoDraw = true;
    
    // setup some python lists for storing info about the mouse_18
    // current position of the mouse:
    mouse_18.x = [];
    mouse_18.y = [];
    mouse_18.leftButton = [];
    mouse_18.midButton = [];
    mouse_18.rightButton = [];
    mouse_18.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Halo_03Components = [];
    Halo_03Components.push(mouse_18);
    Halo_03Components.push(text_15);
    Halo_03Components.push(text_19);
    
    for (const thisComponent of Halo_03Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Halo_03RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Halo_03' ---
    // get current time
    t = Halo_03Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_17
    //l1.draw();
    //l3.draw();
    //l5.draw();
    //change = (- util.sum(mouse.getRel()));
    //mouse_angle += (3 * change);
    position = mouse.getPos()
    mouse_angle = Math.atan2(position[1], position[0])
    xposition = ((1.25 * radius) * Math.cos(mouse_angle));
    yposition = ((1.25 * radius) * Math.sin(mouse_angle));
    circle3.pos = [xposition, yposition];
    circle3.draw()
    
    // *mouse_18* updates
    if (t >= 0.0 && mouse_18.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_18.tStart = t;  // (not accounting for frame time here)
      mouse_18.frameNStart = frameN;  // exact frame index
      
      mouse_18.status = PsychoJS.Status.STARTED;
      mouse_18.mouseClock.reset();
      prevButtonState = mouse_18.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_18.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_18.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_18.getPos();
          mouse_18.x.push(_mouseXYs[0]);
          mouse_18.y.push(_mouseXYs[1]);
          mouse_18.leftButton.push(_mouseButtons[0]);
          mouse_18.midButton.push(_mouseButtons[1]);
          mouse_18.rightButton.push(_mouseButtons[2]);
          mouse_18.time.push(mouse_18.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_15* updates
    if (t >= 0.0 && text_15.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_15.tStart = t;  // (not accounting for frame time here)
      text_15.frameNStart = frameN;  // exact frame index
      
      text_15.setAutoDraw(true);
    }
    
    
    // *text_19* updates
    if (t >= 0.0 && text_19.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_19.tStart = t;  // (not accounting for frame time here)
      text_19.frameNStart = frameN;  // exact frame index
      
      text_19.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Halo_03Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _pj;
function Halo_03RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Halo_03' ---
    for (const thisComponent of Halo_03Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Halo_03.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_17
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    l1.autoDraw = false;
    l3.autoDraw = false;
    l5.autoDraw = false;
    l5.lineColor = "white";
    Line.autoDraw = false;
    circle1.autoDraw = false;
    circle0.autoDraw = false;
    circle2.autoDraw = false;
    circle3.autoDraw = false;
    averageCircle.autDraw = false
    psychoJS.experiment.addData('Demo c3 x position:', circle3.pos[0]);
    psychoJS.experiment.addData('Demo c3 y position:', circle3.pos[1])
    
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_18.x) {  psychoJS.experiment.addData('mouse_18.x', mouse_18.x[0])};
    if (mouse_18.y) {  psychoJS.experiment.addData('mouse_18.y', mouse_18.y[0])};
    if (mouse_18.leftButton) {  psychoJS.experiment.addData('mouse_18.leftButton', mouse_18.leftButton[0])};
    if (mouse_18.midButton) {  psychoJS.experiment.addData('mouse_18.midButton', mouse_18.midButton[0])};
    if (mouse_18.rightButton) {  psychoJS.experiment.addData('mouse_18.rightButton', mouse_18.rightButton[0])};
    if (mouse_18.time) {  psychoJS.experiment.addData('mouse_18.time', mouse_18.time[0])};
    
    // the Routine "Halo_03" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Practice;
var Instructions2Components;
function Instructions2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Instructions2' ---
    t = 0;
    Instructions2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Instructions2.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_11
    l5.autoDraw = true;
    Practice = true;
    Condition = 0;
    
    
    console.log('Welcome to the experiment');
    // setup some python lists for storing info about the mouse_10
    // current position of the mouse:
    mouse_10.x = [];
    mouse_10.y = [];
    mouse_10.leftButton = [];
    mouse_10.midButton = [];
    mouse_10.rightButton = [];
    mouse_10.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Instructions2Components = [];
    Instructions2Components.push(text_7);
    Instructions2Components.push(mouse_10);
    
    for (const thisComponent of Instructions2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Instructions2' ---
    // get current time
    t = Instructions2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    // *mouse_10* updates
    if (t >= 0.0 && mouse_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_10.tStart = t;  // (not accounting for frame time here)
      mouse_10.frameNStart = frameN;  // exact frame index
      
      mouse_10.status = PsychoJS.Status.STARTED;
      mouse_10.mouseClock.reset();
      prevButtonState = mouse_10.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_10.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_10.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_10.getPos();
          mouse_10.x.push(_mouseXYs[0]);
          mouse_10.y.push(_mouseXYs[1]);
          mouse_10.leftButton.push(_mouseButtons[0]);
          mouse_10.midButton.push(_mouseButtons[1]);
          mouse_10.rightButton.push(_mouseButtons[2]);
          mouse_10.time.push(mouse_10.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Instructions2' ---
    for (const thisComponent of Instructions2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Instructions2.stopped', globalClock.getTime());
    l5.autoDraw = false
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_10.x) {  psychoJS.experiment.addData('mouse_10.x', mouse_10.x[0])};
    if (mouse_10.y) {  psychoJS.experiment.addData('mouse_10.y', mouse_10.y[0])};
    if (mouse_10.leftButton) {  psychoJS.experiment.addData('mouse_10.leftButton', mouse_10.leftButton[0])};
    if (mouse_10.midButton) {  psychoJS.experiment.addData('mouse_10.midButton', mouse_10.midButton[0])};
    if (mouse_10.rightButton) {  psychoJS.experiment.addData('mouse_10.rightButton', mouse_10.rightButton[0])};
    if (mouse_10.time) {  psychoJS.experiment.addData('mouse_10.time', mouse_10.time[0])};
    
    // the Routine "Instructions2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Pract;
function PractLoopBegin(PractLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Pract = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'Book5.xlsx', '0, 1, 2'),
      seed: undefined, name: 'Pract'
    });
    psychoJS.experiment.addLoop(Pract); // add the loop to the experiment
    currentLoop = Pract;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPract of Pract) {
      snapshot = Pract.getSnapshot();
      PractLoopScheduler.add(importConditions(snapshot));
      PractLoopScheduler.add(RotationRoutineBegin(snapshot));
      PractLoopScheduler.add(RotationRoutineEachFrame());
      PractLoopScheduler.add(RotationRoutineEnd(snapshot));
      PractLoopScheduler.add(LineRoutineBegin(snapshot));
      PractLoopScheduler.add(LineRoutineEachFrame());
      PractLoopScheduler.add(LineRoutineEnd(snapshot));
      PractLoopScheduler.add(Halo_1RoutineBegin(snapshot));
      PractLoopScheduler.add(Halo_1RoutineEachFrame());
      PractLoopScheduler.add(Halo_1RoutineEnd(snapshot));
      PractLoopScheduler.add(Halo_2RoutineBegin(snapshot));
      PractLoopScheduler.add(Halo_2RoutineEachFrame());
      PractLoopScheduler.add(Halo_2RoutineEnd(snapshot));
      PractLoopScheduler.add(Halo_3RoutineBegin(snapshot));
      PractLoopScheduler.add(Halo_3RoutineEachFrame());
      PractLoopScheduler.add(Halo_3RoutineEnd(snapshot));
      PractLoopScheduler.add(PractLoopEndIteration(PractLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function PractLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Pract);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function PractLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 4, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Book5.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(RotationRoutineBegin(snapshot));
      trialsLoopScheduler.add(RotationRoutineEachFrame());
      trialsLoopScheduler.add(RotationRoutineEnd(snapshot));
      trialsLoopScheduler.add(LineRoutineBegin(snapshot));
      trialsLoopScheduler.add(LineRoutineEachFrame());
      trialsLoopScheduler.add(LineRoutineEnd(snapshot));
      trialsLoopScheduler.add(Halo_1RoutineBegin(snapshot));
      trialsLoopScheduler.add(Halo_1RoutineEachFrame());
      trialsLoopScheduler.add(Halo_1RoutineEnd(snapshot));
      trialsLoopScheduler.add(Halo_2RoutineBegin(snapshot));
      trialsLoopScheduler.add(Halo_2RoutineEachFrame());
      trialsLoopScheduler.add(Halo_2RoutineEnd(snapshot));
      trialsLoopScheduler.add(Halo_3RoutineBegin(snapshot));
      trialsLoopScheduler.add(Halo_3RoutineEachFrame());
      trialsLoopScheduler.add(Halo_3RoutineEnd(snapshot));
      trialsLoopScheduler.add(MaskRoutineBegin(snapshot));
      trialsLoopScheduler.add(MaskRoutineEachFrame());
      trialsLoopScheduler.add(MaskRoutineEnd(snapshot));
      trialsLoopScheduler.add(LineRoutineBegin(snapshot));
      trialsLoopScheduler.add(LineRoutineEachFrame());
      trialsLoopScheduler.add(LineRoutineEnd(snapshot));
      trialsLoopScheduler.add(Halo_1RoutineBegin(snapshot));
      trialsLoopScheduler.add(Halo_1RoutineEachFrame());
      trialsLoopScheduler.add(Halo_1RoutineEnd(snapshot));
      trialsLoopScheduler.add(Halo_2RoutineBegin(snapshot));
      trialsLoopScheduler.add(Halo_2RoutineEachFrame());
      trialsLoopScheduler.add(Halo_2RoutineEnd(snapshot));
      trialsLoopScheduler.add(Halo_3RoutineBegin(snapshot));
      trialsLoopScheduler.add(Halo_3RoutineEachFrame());
      trialsLoopScheduler.add(Halo_3RoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'OneDot.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial_2 of trials_2) {
      snapshot = trials_2.getSnapshot();
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(RotationRoutineBegin(snapshot));
      trials_2LoopScheduler.add(RotationRoutineEachFrame());
      trials_2LoopScheduler.add(RotationRoutineEnd(snapshot));
      trials_2LoopScheduler.add(LineRoutineBegin(snapshot));
      trials_2LoopScheduler.add(LineRoutineEachFrame());
      trials_2LoopScheduler.add(LineRoutineEnd(snapshot));
      trials_2LoopScheduler.add(Halo_1RoutineBegin(snapshot));
      trials_2LoopScheduler.add(Halo_1RoutineEachFrame());
      trials_2LoopScheduler.add(Halo_1RoutineEnd(snapshot));
      trials_2LoopScheduler.add(Halo_2RoutineBegin(snapshot));
      trials_2LoopScheduler.add(Halo_2RoutineEachFrame());
      trials_2LoopScheduler.add(Halo_2RoutineEnd(snapshot));
      trials_2LoopScheduler.add(Halo_3RoutineBegin(snapshot));
      trials_2LoopScheduler.add(Halo_3RoutineEachFrame());
      trials_2LoopScheduler.add(Halo_3RoutineEnd(snapshot));
      trials_2LoopScheduler.add(MaskRoutineBegin(snapshot));
      trials_2LoopScheduler.add(MaskRoutineEachFrame());
      trials_2LoopScheduler.add(MaskRoutineEnd(snapshot));
      trials_2LoopScheduler.add(LineRoutineBegin(snapshot));
      trials_2LoopScheduler.add(LineRoutineEachFrame());
      trials_2LoopScheduler.add(LineRoutineEnd(snapshot));
      trials_2LoopScheduler.add(Halo_1RoutineBegin(snapshot));
      trials_2LoopScheduler.add(Halo_1RoutineEachFrame());
      trials_2LoopScheduler.add(Halo_1RoutineEnd(snapshot));
      trials_2LoopScheduler.add(Halo_2RoutineBegin(snapshot));
      trials_2LoopScheduler.add(Halo_2RoutineEachFrame());
      trials_2LoopScheduler.add(Halo_2RoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var oscillationSpeed;
var minDist;
var blueDotPositions;
var circleCount;
var bluecirclePosition;
var circles;
var started;
var ended;
var frameCount;
var d;
var xpro;
var ypro;
var RotationComponents;
function RotationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Rotation' ---
    t = 0;
    RotationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Rotation.started', globalClock.getTime());
    // Run 'Begin Routine' code from code
    var dx;
    var dy;
    var _pj;
    var blueDotAngle;
    var t1;
    var t2;
    var t_now;
    var frameCount;
    var frameCountPrevious;
    var t_previous;
    
    
    //rotationSpeed = (0.1 / nr);
    //if (nr === 1) {rotationSpeed = 0.02};//{rotationSpeed = 0.026};
    //if (nr === 2) {rotationSpeed = 0.04};//{rotationSpeed = 0.04};
    rotationSpeed = 0.028
    //console.log('R', nr);
    oscillationSpeed = (rotationSpeed * 2);
    minDist = (17.5 / 250);
    blueDotPositions = [];
    angle = s;
    //circleCount = c;
    circleCount = c;
    
    bluecirclePosition = (- 0.6);
    circles = [];
    averageCircle.opacity = 0;
    started = false;
    ended = false;
    l5.autoDraw = true;
    bar.autoDraw = true;
    for (var i, _pj_c = 0, _pj_a = util.range(circleCount), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        circles.push(new visual.Polygon({"win": psychoJS.window, "radius": dotRadius, "edges": v, "fillColor": black, "lineColor": black}));
        circles[i].autoDraw = true;
    }
    frameCount = 0;
    d = (180 / Math.PI);
    //barground.opacity = 1;
    //barfor.opacity = 1;
    if ((Practice !== true)) {
        Progress += 1;}
        barground.opacity = 1;
        barfor.opacity = 1;
    xpro = barfor.pos[0];
    ypro = barfor.pos[1];
    barfor.pos = [xpro+(Progress*0.0016 / 48), ypro];
    barfor.size = [(Progress*0.16 / 48), 0.08];
    //}
    Condition = 2;
    console.log('l:', l, 's:', s, 'q:', q, 'cR:', c)
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    RotationComponents = [];
    RotationComponents.push(mouse);
    
    for (const thisComponent of RotationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var t1;
var t_previous;
var frameCountPrevious;
var t_now;
var frameDifferenceFrac;
var frameDelta;
var rotation;
var oscillation;
var num_rotations;
var vecX;
var vecY;
var oscX;
var oscY;
var blueDotPos;
var dist;
function RotationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Rotation' ---
    // get current time
    t = RotationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code
    var dx;
    var dy;
    //var _pj;
    var blueDotAngle;
    //var t1;
    var t2;
    
    //var t_now;
    //var frameCount;
    //var frameCountPrevious;
    
    if (started === false) {
                console.log('t1 =',RotationClock.getTime());
                t1 = RotationClock.getTime();
                t_previous = t1;
                frameCountPrevious=0;
                started = true};
    //function _pj_snippets(container) {
        //function in_es6(left, right) {
            //if (((right instanceof Array) || ((typeof right) === "string"))) {
                //return (right.indexOf(left) > (- 1));
            //} else {
                //if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    //return right.has(left);
                //} else {
                    //return (left in right);
                //}
            //}
        //}
        //container["in_es6"] = in_es6;
        //return container;
    //}
    //_pj = {};
    //_pj_snippets(_pj);
    
    t_now = RotationClock.getTime();
    //console.log('t_now =',t_now);
    //console.log('t1 =',t1);
    
    frameCount = Math.round((t_now-t1)*60);
    
    frameDifferenceFrac = (t_now-t_previous)*60;
    frameDelta = frameCount-frameCountPrevious;
    //console.log('frameDelta =',frameDelta);
    //console.log('frameDifferenceFrac =',frameDifferenceFrac);
    
    rotation = (frameCount * rotationSpeed);
    oscillation = (0.5 * (1 - Math.cos((frameCount * oscillationSpeed))));
    avgX = ((radius / 2) * Math.cos(angle));
    avgY = ((radius / 2) * Math.sin(angle));
    angle += rotationSpeed;
    num_rotations = ((angle - s) / (2 * Math.PI));
    vecX = (avgX - (minDist * Math.cos(Math.atan2(avgY, avgX))));
    vecY = (avgY - (minDist * Math.sin(Math.atan2(avgY, avgX))));
    oscX = (avgX + ((vecX - avgX) * oscillation));
    oscY = (avgY + ((vecY - avgY) * oscillation));
    averageCircle.pos = [avgX, avgY];
    blueDotPos = [oscX, oscY];
    blueDotPositions.push(blueDotPos);
    dist = Math.sqrt((Math.pow((oscX - 0), 2) + Math.pow((oscY - 0), 2)));
    if ((l > 0)) {
        avgX = ((radius * Math.cos((s - (Math.PI / 2)))) + (bluecirclePosition * Math.cos((s - (Math.PI / 2)))));
        avgY = ((radius * Math.sin((s - (Math.PI / 2)))) + (bluecirclePosition * Math.sin((s - (Math.PI / 2)))));
        bluecirclePosition += (rotationSpeed / 5);
        avgY += minDist;
        oscX = avgX;
        oscY = avgY;
        dist = Math.sqrt((Math.pow((oscX - 0.14), 2) + Math.pow((oscY - 0), 2)));
    }
    
    function map(value, inMin, inMax, outMin, outMax) {
        return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
    
    for (var i, _pj_c = 0, _pj_a = util.range(circleCount), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        var tangle = map(i, 0, circleCount, s, Math.PI / q + s);
        if ((num_rotations >= 0.5)) {
            if (ended === false) {
                t2 = RotationClock.getTime();
                console.log('R time taken:', t2, t1)
                ended = true};
            circles[i].autoDraw = false;
            continueRoutine = false;
        } else {
            var dotPos = [Math.cos(tangle - rotation) * dist, Math.sin(tangle - rotation) * dist];
            dotPos[0] += oscX;
            dotPos[1] += oscY;
            circles[i].pos = dotPos;
            dx = (blueDotPos[0] - dotPos[0]);
            dy = (blueDotPos[1] - dotPos[1]);
            blueDotAngle = (Math.atan2(dy, dx) - (Math.PI / 2));
            //circles[i].ori = ((blueDotAngle * d) * r);
            circles[i].draw();
        }
    }
    //if (_pj.in_es6("escape", psychoJS.eventManager.getKeys())) {
        //continueRoutine = false;
    //}
    //frameCount += 1;
    t_previous = t_now;
    frameCountPrevious = frameCount;
    
    
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RotationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RotationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Rotation' ---
    for (const thisComponent of RotationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Rotation.stopped', globalClock.getTime());
    // Run 'End Routine' code from code
    l5.autoDraw = false;
    bar.autoDraw = false;
    
    for (var i, _pj_c = 0, _pj_a = util.range(circleCount), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        circles[i].autoDraw = false;
    }
    
    var angles = (function () {
        var _pj_a = [], _pj_b = util.range(circleCount);
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var i = _pj_b[_pj_c];
            _pj_a.push(((((((i / circleCount) * 0.5) * Math.PI) / q) + s) - Math.PI));
        }
        return _pj_a;
    })();
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    
    // the Routine "Rotation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var s2;
var LineComponents;
function LineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Line' ---
    t = 0;
    LineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Line.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_7
    s2 = (s + (Condition * Math.PI));
    if (Condition === 1 && l === 1) {s2 -= Math.PI}
    mouse_angle = ((s2 + ((2.5 * Math.PI) / 15)) + Math.PI);
    
    start = [((0.7 * radius) * Math.cos((s2 + ((2.5 * Math.PI) / 15)))), ((0.7 * radius) * Math.sin((s2 + ((2.5 * Math.PI) / 15))))];
    end = [((0.7 * radius) * Math.cos(((s2 + ((2.5 * Math.PI) / 15)) + Math.PI))), ((0.7 * radius) * Math.sin(((s2 + ((2.5 * Math.PI) / 15)) + Math.PI)))];
    Line.pos = start;
    l5.autoDraw = true;
    Line.autoDraw = true;
    bar.autoDraw = true;
    circle0 = new visual.Polygon({"win": psychoJS.window, "radius": (0.015 / 2), "edges": 99, "fillColor": red, "lineColor": red});
    circle0.opacity = 1;
    //circle0.autoDraw = true;
    
    console.log('start=', start)
    // setup some python lists for storing info about the mouse_7
    // current position of the mouse:
    mouse_7.x = [];
    mouse_7.y = [];
    mouse_7.leftButton = [];
    mouse_7.midButton = [];
    mouse_7.rightButton = [];
    mouse_7.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    LineComponents = [];
    LineComponents.push(mouse_7);
    LineComponents.push(text);
    
    for (const thisComponent of LineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function LineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Line' ---
    // get current time
    t = LineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_7
    //change = (- util.sum(mouse.getRel()));
    //mouse_angle += (3 * change);
    position = mouse.getPos()
    mouse_angle = Math.atan2((position[1]-start[1]), (position[0]-start[0]))
    xposition = ((0.7*radius) * Math.cos(mouse_angle)) + start[0];
    yposition = ((0.7*radius) * Math.sin(mouse_angle)) + start[1];
    circle0.pos = [xposition, yposition];
    circle0.draw()
    
    // *mouse_7* updates
    if (t >= 0.0 && mouse_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_7.tStart = t;  // (not accounting for frame time here)
      mouse_7.frameNStart = frameN;  // exact frame index
      
      mouse_7.status = PsychoJS.Status.STARTED;
      mouse_7.mouseClock.reset();
      prevButtonState = mouse_7.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_7.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_7.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_7.getPos();
          mouse_7.x.push(_mouseXYs[0]);
          mouse_7.y.push(_mouseXYs[1]);
          mouse_7.leftButton.push(_mouseButtons[0]);
          mouse_7.midButton.push(_mouseButtons[1]);
          mouse_7.rightButton.push(_mouseButtons[2]);
          mouse_7.time.push(mouse_7.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of LineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function LineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Line' ---
    for (const thisComponent of LineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Line.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_7
    bar.autoDraw = false;
    l5.autoDraw = false;
    Line.autoDraw = false;
    circle0.autoDraw = false;
    if (practice === true) {
    psychoJS.experiment.addData('Practice c0 x position:', circle0.pos[0]);
    psychoJS.experiment.addData('Practice c0 y position:', circle0.pos[1])
    }
    if (condition === 1) {
    psychoJS.experiment.addData('Mask c0 x position:', circle0.pos[0]);
    psychoJS.experiment.addData('Mask c0 y position:', circle0.pos[1])
    }
    if (condition === 2) {
    psychoJS.experiment.addData('Rotation c0 x position:', circle0.pos[0]);
    psychoJS.experiment.addData('Rotation c0 y position:', circle0.pos[1])
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_7.x) {  psychoJS.experiment.addData('mouse_7.x', mouse_7.x[0])};
    if (mouse_7.y) {  psychoJS.experiment.addData('mouse_7.y', mouse_7.y[0])};
    if (mouse_7.leftButton) {  psychoJS.experiment.addData('mouse_7.leftButton', mouse_7.leftButton[0])};
    if (mouse_7.midButton) {  psychoJS.experiment.addData('mouse_7.midButton', mouse_7.midButton[0])};
    if (mouse_7.rightButton) {  psychoJS.experiment.addData('mouse_7.rightButton', mouse_7.rightButton[0])};
    if (mouse_7.time) {  psychoJS.experiment.addData('mouse_7.time', mouse_7.time[0])};
    
    // the Routine "Line" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Halo_1Components;
function Halo_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Halo_1' ---
    t = 0;
    Halo_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Halo_1.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_4
    var s2;
    var mouse_angle
    
    s2 = (s + (Condition * Math.PI));
    mouse_angle = ((s2 + ((2.5 * Math.PI) / 15)) + Math.PI);
    //mouse = new psychoJS.eventManager.Mouse({"win": psychoJS.window});
    l5.autoDraw = true;
    bar.autoDraw = true;
    circle0.autoDraw = true;
    
    circle1 = new visual.Polygon({"win": psychoJS.window, "radius": (0.015 / 2), "edges": 99, "fillColor": red, "lineColor": red});
    circle1.opacity = 1;
    //circle1.autoDraw = true;
    
    // setup some python lists for storing info about the mouse_2
    // current position of the mouse:
    mouse_2.x = [];
    mouse_2.y = [];
    mouse_2.leftButton = [];
    mouse_2.midButton = [];
    mouse_2.rightButton = [];
    mouse_2.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Halo_1Components = [];
    Halo_1Components.push(mouse_2);
    Halo_1Components.push(text_2);
    
    for (const thisComponent of Halo_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Halo_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Halo_1' ---
    // get current time
    t = Halo_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_4
    var xposition;
    var yposition;
    var change;
    //change = (- util.sum(mouse.getRel()));
    //mouse_angle += (3 * change);
    position = mouse.getPos()
    mouse_angle = Math.atan2(position[1], position[0])
    xposition = ((0.7*radius) * Math.cos(mouse_angle));
    yposition = ((0.7*radius) * Math.sin(mouse_angle));
    circle1.pos = [xposition, yposition];
    circle1.draw()
    
    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_2.getPos();
          mouse_2.x.push(_mouseXYs[0]);
          mouse_2.y.push(_mouseXYs[1]);
          mouse_2.leftButton.push(_mouseButtons[0]);
          mouse_2.midButton.push(_mouseButtons[1]);
          mouse_2.rightButton.push(_mouseButtons[2]);
          mouse_2.time.push(mouse_2.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Halo_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Halo_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Halo_1' ---
    for (const thisComponent of Halo_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Halo_1.stopped', globalClock.getTime());
    bar.autoDraw = false;
    l5.autoDraw = false;
    circle0.autoDraw = false;
    circle1.autoDraw = false;
    if (practice === true) {
    psychoJS.experiment.addData('Practice c1 x position:', circle1.pos[0]);
    psychoJS.experiment.addData('Practice c1 y position:', circle1.pos[1])
    }
    
    if (condition === 1) {
    psychoJS.experiment.addData('Mask c1 x position:', circle1.pos[0]);
    psychoJS.experiment.addData('Mask c1 y position:', circle1.pos[1])
    }
    if (condition === 2) {
    psychoJS.experiment.addData('Rotation c1 x position:', circle1.pos[0]);
    psychoJS.experiment.addData('Rotation c1 y position:', circle1.pos[1])
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_2.x) {  psychoJS.experiment.addData('mouse_2.x', mouse_2.x[0])};
    if (mouse_2.y) {  psychoJS.experiment.addData('mouse_2.y', mouse_2.y[0])};
    if (mouse_2.leftButton) {  psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton[0])};
    if (mouse_2.midButton) {  psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton[0])};
    if (mouse_2.rightButton) {  psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton[0])};
    if (mouse_2.time) {  psychoJS.experiment.addData('mouse_2.time', mouse_2.time[0])};
    
    // the Routine "Halo_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Halo_2Components;
function Halo_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Halo_2' ---
    t = 0;
    Halo_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Halo_2.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_5
    var s2;
    var mouse_angle;
    s2 = (s + (Condition * Math.PI));
    mouse_angle = ((s2 + ((2.5 * Math.PI) / 15)) + (0.9 * Math.PI));
    circle2 = new visual.Polygon({"win": psychoJS.window, "radius": (0.015 / 2), "edges": 99, "fillColor": red, "lineColor": red});
    circle2.opacity = 1;
    l3.autoDraw = true;
    l5.autoDraw = true;
    bar.autoDraw = true;
    circle0.autoDraw = true;
    circle1.autoDraw = true;
    //circle2.autoDraw = true;
    
    // setup some python lists for storing info about the mouse_3
    // current position of the mouse:
    mouse_3.x = [];
    mouse_3.y = [];
    mouse_3.leftButton = [];
    mouse_3.midButton = [];
    mouse_3.rightButton = [];
    mouse_3.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Halo_2Components = [];
    Halo_2Components.push(mouse_3);
    Halo_2Components.push(text_3);
    
    for (const thisComponent of Halo_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Halo_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Halo_2' ---
    // get current time
    t = Halo_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_5
    var change;
    var xposition;
    var yposition;
    //change = (- util.sum(mouse.getRel()));
    //mouse_angle += (3 * change);
    position = mouse.getPos()
    mouse_angle = Math.atan2(position[1], position[0])
    xposition = ((0.9775 * radius) * Math.cos(mouse_angle));
    yposition = ((0.9775 * radius) * Math.sin(mouse_angle));
    circle2.pos = [xposition, yposition];
    circle2.draw()
    
    // *mouse_3* updates
    if (t >= 0.0 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_3.tStart = t;  // (not accounting for frame time here)
      mouse_3.frameNStart = frameN;  // exact frame index
      
      mouse_3.status = PsychoJS.Status.STARTED;
      mouse_3.mouseClock.reset();
      prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_3.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_3.getPos();
          mouse_3.x.push(_mouseXYs[0]);
          mouse_3.y.push(_mouseXYs[1]);
          mouse_3.leftButton.push(_mouseButtons[0]);
          mouse_3.midButton.push(_mouseButtons[1]);
          mouse_3.rightButton.push(_mouseButtons[2]);
          mouse_3.time.push(mouse_3.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Halo_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Halo_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Halo_2' ---
    for (const thisComponent of Halo_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Halo_2.stopped', globalClock.getTime());
    bar.autoDraw = false;
    l5.autoDraw = false;
    l3.autoDraw = false;
    circle0.autoDraw = false;
    circle1.autoDraw = false;
    circle2.autoDraw = false;
    if (practice === true) {
    psychoJS.experiment.addData('Practice c2 x position:', circle2.pos[0]);
    psychoJS.experiment.addData('Practice c2 y position:', circle2.pos[1])
    }
    
    if (condition === 1) {
    psychoJS.experiment.addData('Mask c2 x position:', circle2.pos[0]);
    psychoJS.experiment.addData('Mask c2 y position:', circle2.pos[1])
    }
    if (condition === 2) {
    psychoJS.experiment.addData('Rotation c2 x position:', circle2.pos[0]);
    psychoJS.experiment.addData('Rotation c2 y position:', circle2.pos[1])
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_3.x) {  psychoJS.experiment.addData('mouse_3.x', mouse_3.x[0])};
    if (mouse_3.y) {  psychoJS.experiment.addData('mouse_3.y', mouse_3.y[0])};
    if (mouse_3.leftButton) {  psychoJS.experiment.addData('mouse_3.leftButton', mouse_3.leftButton[0])};
    if (mouse_3.midButton) {  psychoJS.experiment.addData('mouse_3.midButton', mouse_3.midButton[0])};
    if (mouse_3.rightButton) {  psychoJS.experiment.addData('mouse_3.rightButton', mouse_3.rightButton[0])};
    if (mouse_3.time) {  psychoJS.experiment.addData('mouse_3.time', mouse_3.time[0])};
    
    // the Routine "Halo_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Halo_3Components;
function Halo_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Halo_3' ---
    t = 0;
    Halo_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Halo_3.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_6
    var s2;
    var mouse_angle
    s2 = (s + (Condition * Math.PI));
    mouse_angle = ((s2 + ((2.5 * Math.PI) / 15)) + Math.PI);
    circle3 = new visual.Polygon({"win": psychoJS.window, "radius": (0.015 / 2), "edges": 99, "fillColor": red, "lineColor": red});
    circle3.opacity = 1;
    l1.autoDraw = true;
    l3.autoDraw = true;
    l5.autoDraw = true;
    bar.autoDraw = true;
    circle0.autoDraw = true;
    circle1.autoDraw = true;
    circle2.autoDraw = true;
    //circle3.autoDraw = true;
    
    // setup some python lists for storing info about the mouse_6
    // current position of the mouse:
    mouse_6.x = [];
    mouse_6.y = [];
    mouse_6.leftButton = [];
    mouse_6.midButton = [];
    mouse_6.rightButton = [];
    mouse_6.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    Halo_3Components = [];
    Halo_3Components.push(mouse_6);
    Halo_3Components.push(text_4);
    
    for (const thisComponent of Halo_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Halo_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Halo_3' ---
    // get current time
    t = Halo_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_6
    
    var change;
    var xposition;
    var yposition;
    //change = (- util.sum(mouse.getRel()));
    //mouse_angle += (3 * change);
    position = mouse.getPos()
    mouse_angle = Math.atan2(position[1], position[0])
    xposition = ((1.25 * radius) * Math.cos(mouse_angle));
    yposition = ((1.25 * radius) * Math.sin(mouse_angle));
    circle3.pos = [xposition, yposition];
    circle3.draw()
    
    // *mouse_6* updates
    if (t >= 0.0 && mouse_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_6.tStart = t;  // (not accounting for frame time here)
      mouse_6.frameNStart = frameN;  // exact frame index
      
      mouse_6.status = PsychoJS.Status.STARTED;
      mouse_6.mouseClock.reset();
      prevButtonState = mouse_6.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_6.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_6.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_6.getPos();
          mouse_6.x.push(_mouseXYs[0]);
          mouse_6.y.push(_mouseXYs[1]);
          mouse_6.leftButton.push(_mouseButtons[0]);
          mouse_6.midButton.push(_mouseButtons[1]);
          mouse_6.rightButton.push(_mouseButtons[2]);
          mouse_6.time.push(mouse_6.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Halo_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Halo_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Halo_3' ---
    for (const thisComponent of Halo_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Halo_3.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_6
    console.log('managed to start End Routine of Halo_3');
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    l1.autoDraw = false;
    l3.autoDraw = false;
    l5.autoDraw = false;
    bar.autoDraw = false;
    Line.autoDraw = false;
    circle0.autoDraw = false;
    circle1.autoDraw = false;
    circle2.autoDraw = false;
    circle3.autoDraw = false;
    
    if (practice === true) {
    psychoJS.experiment.addData('Practice c3 x position:', circle3.pos[0]);
    psychoJS.experiment.addData('Practice c3 y position:', circle3.pos[1])
    }
    if (condition === 1) {
    psychoJS.experiment.addData('Mask c3 x position:', circle3.pos[0]);
    psychoJS.experiment.addData('Mask c3 y position:', circle3.pos[1])
    }
    if (condition === 2) {
    psychoJS.experiment.addData('Rotation c3 x position:', circle3.pos[0]);
    psychoJS.experiment.addData('Rotation c3 y position:', circle3.pos[1])
    }
    
    //for (var i, _pj_c = 0, _pj_a = util.range(c), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        //i = _pj_a[_pj_c];
        //circles[i].autoDraw = false;
    //}
    for (var circle, _pj_c = 0, _pj_a = circles, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        circle = _pj_a[_pj_c];
        circle.autoDraw = false;
    }
    
    console.log('managed to end Halo_3');
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_6.x) {  psychoJS.experiment.addData('mouse_6.x', mouse_6.x[0])};
    if (mouse_6.y) {  psychoJS.experiment.addData('mouse_6.y', mouse_6.y[0])};
    if (mouse_6.leftButton) {  psychoJS.experiment.addData('mouse_6.leftButton', mouse_6.leftButton[0])};
    if (mouse_6.midButton) {  psychoJS.experiment.addData('mouse_6.midButton', mouse_6.midButton[0])};
    if (mouse_6.rightButton) {  psychoJS.experiment.addData('mouse_6.rightButton', mouse_6.rightButton[0])};
    if (mouse_6.time) {  psychoJS.experiment.addData('mouse_6.time', mouse_6.time[0])};
    
    // the Routine "Halo_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var StartComponents;
function StartRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Start' ---
    t = 0;
    StartClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Start.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_13
    Practice = false;
    l5.autoDraw = true;
    
    // setup some python lists for storing info about the mouse_9
    // current position of the mouse:
    mouse_9.x = [];
    mouse_9.y = [];
    mouse_9.leftButton = [];
    mouse_9.midButton = [];
    mouse_9.rightButton = [];
    mouse_9.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    StartComponents = [];
    StartComponents.push(mouse_9);
    StartComponents.push(text_6);
    
    for (const thisComponent of StartComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function StartRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Start' ---
    // get current time
    t = StartClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *mouse_9* updates
    if (t >= 0.0 && mouse_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_9.tStart = t;  // (not accounting for frame time here)
      mouse_9.frameNStart = frameN;  // exact frame index
      
      mouse_9.status = PsychoJS.Status.STARTED;
      mouse_9.mouseClock.reset();
      prevButtonState = mouse_9.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_9.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_9.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_9.getPos();
          mouse_9.x.push(_mouseXYs[0]);
          mouse_9.y.push(_mouseXYs[1]);
          mouse_9.leftButton.push(_mouseButtons[0]);
          mouse_9.midButton.push(_mouseButtons[1]);
          mouse_9.rightButton.push(_mouseButtons[2]);
          mouse_9.time.push(mouse_9.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of StartComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function StartRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Start' ---
    for (const thisComponent of StartComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Start.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_9.x) {  psychoJS.experiment.addData('mouse_9.x', mouse_9.x[0])};
    if (mouse_9.y) {  psychoJS.experiment.addData('mouse_9.y', mouse_9.y[0])};
    if (mouse_9.leftButton) {  psychoJS.experiment.addData('mouse_9.leftButton', mouse_9.leftButton[0])};
    if (mouse_9.midButton) {  psychoJS.experiment.addData('mouse_9.midButton', mouse_9.midButton[0])};
    if (mouse_9.rightButton) {  psychoJS.experiment.addData('mouse_9.rightButton', mouse_9.rightButton[0])};
    if (mouse_9.time) {  psychoJS.experiment.addData('mouse_9.time', mouse_9.time[0])};
    
    // the Routine "Start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Mstarted;
var Mended;
var iterationS;
var startDelay;
var bounces;
var dif_trajectory;
var continueCondition;
var MaskComponents;
function MaskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Mask' ---
    t = 0;
    MaskClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Mask.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_3
    var t1;
    var t2;
    var t_now;
    var frameCount;
    var frameCountPrevious;
    var t_previous;
    //initializationClock.reset();
    var circles = [];
    var bounces = [];
    //var circlePositions = [];
    var circleDirections = [];
    var angles = [];
    rotationSpeed = 0.002
    //console.log('M', nm);
    //if (nm === 1) {rotationSpeed = 0.0015}
    //if (nm === 2) {rotationSpeed = 0.0025}//{rotationSpeed = 0.0022}
    Mstarted = false
    Mended = false
    //rotationSpeed = (0.0035 * nm);
    var circleCount;
    
    circleCount = c;
        
    iterationS = 4;
    
    startDelay = ((radius / circleCount) / 2);
    
    circles = [];
    bounces = [];
    //var circlePositions = (function () {
        //var _pj_a = [], _pj_b = util.range(circleCount);
        //for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            //var i = _pj_b[_pj_c];
            //console.log('i:', i);  // Add this line
            //console.log('startDelay:', startDelay);  // Add this line
            //_pj_a.push(((- (i + 1)) * startDelay));
        //}
        //return _pj_a;
    //})();
    //circlePositions = [-0.03333333333333333, -0.06666666666666667,-0.1,-0.13333333333333333,-0.16666666666666666,-0.2]
    
    l5.autoDraw = true;
    bar.autoDraw = true;
    dif_trajectory = [];
    for (var iDot, _pj_c = 0, _pj_a = util.range(circleCount), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        iDot = _pj_a[_pj_c];
        circles.push(new visual.Polygon({"win": psychoJS.window, "units": psychoJS.window.units, "radius": dotRadius, "edges": v, "lineWidth": (1.0 / 2), "lineColor": black, "fillColor": black}));
        circles[iDot].opacity = 1;
        //circles[iDot].autoDraw = true;
    }
    var angles = (function () {
        var _pj_a = [], _pj_b = util.range(circleCount);
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var i = _pj_b[_pj_c];
            _pj_a.push(((((((i / circleCount) * 0.5) * Math.PI) / q) + s) - Math.PI));
        }
        return _pj_a;
    })();
    
    
    
    //let circleDirections = new Array(circleCount).fill(1);
    
    
    
    //averageCircle = visual.Polygon(win, radius = dotRadius, edges = 99, fillColor='black', lineColor='black')
    
    if (((Practice === false))) {
        Progress += 1;}
    xpro = barfor.pos[0];
    ypro = barfor.pos[1];
    barfor.pos = [xpro+(Progress*0.0016 / 48), ypro];
    barfor.size = [(Progress*0.16 / 48), 0.08];
    //}
    Condition = 1;
    console.log('l:', l, 's:', s, 'q:', q, 'cM:', c, 'circleCount:', circleCount, 'length of circles:', circles.length)
    continueCondition = true;
    // setup some python lists for storing info about the mouse_5
    // current position of the mouse:
    mouse_5.x = [];
    mouse_5.y = [];
    mouse_5.leftButton = [];
    mouse_5.midButton = [];
    mouse_5.rightButton = [];
    mouse_5.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    MaskComponents = [];
    MaskComponents.push(mouse_5);
    
    for (const thisComponent of MaskComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var z;
var circleDirections;
var bouncess;
var angles;
function MaskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Mask' ---
    // get current time
    t = MaskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_3
    var _pj;
    var x;
    var y; 
    var t1;
    var t2;
    var z;
    circleCount = c 
    
    if (Mstarted === false) {
                //console.log('t1 =', RotationClock.getTime(), 'cM', cM, 'length of circles:', circles.length);
                t1 = RotationClock.getTime();
                t_previous = t1;
                frameCountPrevious=0;
                Mstarted = true};
                
    t_now = RotationClock.getTime();
    //console.log('t_now =',t_now);
    //console.log('t1 =',t1);
    frameCount = Math.round((t_now-t1)*60);
    frameDifferenceFrac = (t_now-t_previous)*60;
    frameDelta = frameCount-frameCountPrevious;  
    z = Math.sqrt(t_now)
    if (defineVars) {
    var angless = (function () {
        var _pj_a = [], _pj_b = util.range(circleCount);
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var i = _pj_b[_pj_c];
            _pj_a.push(((((((i / circleCount) * 0.5) * (Math.PI+(1.5*l*z))) / q) + s) - Math.PI));
        }
        return _pj_a;
    })();
    var circlePositionss = (function () {
        var _pj_a = [], _pj_b = util.range(circleCount);
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var i = _pj_b[_pj_c];
            _pj_a.push(((- (i + 1)) * startDelay));
        }
        return _pj_a;
    })();
    circleDirections = new Array(c).fill(1);
    bouncess = 0;
    bounces = bouncess
    angles = angless
    circlePositions = circlePositionss
    
    
    defineVars = false;
    }
    //console.log('Inside define Vars: t1 =', RotationClock.getTime(), 'cM', cM, 'length of circles:', circles.length);
    //circles = circless 
    //console.log(circlePositions, angles)
    //_pj = {};
    //_pj_snippets(_pj);
    //console.log('Outside define Vars: t1 =', RotationClock.getTime(), 'cM', cM, 'length of circles:', circles.length);
    for (var _, _pj_c = 0, _pj_a = util.range(Number.parseInt(iterationS)), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        _ = _pj_a[_pj_c];
        for (var i, _pj_f = 0, _pj_d = util.range(circleCount), _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
            i = _pj_d[_pj_f];
            //console.log(i, ':opacity', 'cM', cM, 'length of circles:', circles.length);
            x = ((radius * Math.cos(angles[i]+l*z)) + (circlePositions[i] * Math.cos(angles[i]+l*z)));
            //console.log(circles[0].pos, circlePositions[0], angles[0], circleDirection[0])
            //x = ((radius * Math.cos(angles[0])) + (circlePositions[0] * Math.cos(angles[0])));
            y = ((radius * Math.sin(angles[i]+l*z)) + (circlePositions[i] * Math.sin(angles[i]+l*z)));
            circles[i].pos = [x, y];
            circlePositions[i] += (circleDirections[i] * rotationSpeed);
            
            if ((Math.sqrt((Math.pow(x, 2) + Math.pow(y, 2))) > (radius - 0.005))) {
                circleDirections[i] *= (- 1);
                bounces += 1;
                if ((circleDirections[i] === (- 1))) {
                    circlePositions[i] = ((- dotRadius) / Math.sqrt(2));
                } else {
                    circlePositions[i] = ((- 0.8) + (dotRadius / Math.sqrt(2)));
                }
            }
            for (var iDot = 0; iDot < c; iDot++) {
                circles[iDot].opacity = 0;
                }
            //}
            if ((bounces > (0.5 * circleCount))) {
                if (Mstarted === false) {
                //console.log('t1 =',MaskClock.getTime());
                t1 = MaskClock.getTime();
                Mstarted = true};
                for (var iDot, _pj_i = 0, _pj_g = util.range(c), _pj_h = _pj_g.length; (_pj_i < _pj_h); _pj_i += 1) {
                    iDot = _pj_g[_pj_i];
                    if ((circles[iDot].opacity === 0)) {
                        circles[iDot].opacity = 1;
                    }
                }
            }
            if ((bounces >= (1.5 * circleCount))) {
                if (Mended === false) {
                t2 = MaskClock.getTime();
                //console.log('M time taken:', t2, t1)
                Mended = true};
                for (var iDot, _pj_i = 0, _pj_g = util.range(circleCount), _pj_h = _pj_g.length; (_pj_i < _pj_h); _pj_i += 1) {
                    iDot = _pj_g[_pj_i];
                    circles[iDot].opacity = 0;
                    circles[iDot].autoDraw = false;
                    continueRoutine = false;
                }
            }
        circles[i].draw();
        }
    }
    t_previous = t_now;
    frameCountPrevious = frameCount
    
    
    // *mouse_5* updates
    if (t >= 0.0 && mouse_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_5.tStart = t;  // (not accounting for frame time here)
      mouse_5.frameNStart = frameN;  // exact frame index
      
      mouse_5.status = PsychoJS.Status.STARTED;
      mouse_5.mouseClock.reset();
      prevButtonState = mouse_5.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_5.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_5.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_5.getPos();
          mouse_5.x.push(_mouseXYs[0]);
          mouse_5.y.push(_mouseXYs[1]);
          mouse_5.leftButton.push(_mouseButtons[0]);
          mouse_5.midButton.push(_mouseButtons[1]);
          mouse_5.rightButton.push(_mouseButtons[2]);
          mouse_5.time.push(mouse_5.mouseClock.getTime());
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of MaskComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function MaskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Mask' ---
    for (const thisComponent of MaskComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Mask.stopped', globalClock.getTime());
    // Run 'End Routine' code from code_3
    console.log('managed to end each frame tab of Mask')
    defineVars = true;
    bar.autoDraw = false;
    continueCondition = false;
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_5.x', mouse_5.x);
    psychoJS.experiment.addData('mouse_5.y', mouse_5.y);
    psychoJS.experiment.addData('mouse_5.leftButton', mouse_5.leftButton);
    psychoJS.experiment.addData('mouse_5.midButton', mouse_5.midButton);
    psychoJS.experiment.addData('mouse_5.rightButton', mouse_5.rightButton);
    psychoJS.experiment.addData('mouse_5.time', mouse_5.time);
    
    // the Routine "Mask" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var iterations;
var DebriefComponents;
function DebriefRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Debrief' ---
    t = 0;
    DebriefClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('Debrief.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_12
    rotationSpeed = (0.001);
    circleCount = 6;
    iterations = 4;
    startDelay = ((radius / circleCount) / 2);
    circles = [];
    bounces = [];
    l5.autoDraw = true;
    dif_trajectory = [];
    
    barfor.pos = barground.pos
    barfor.size = [(0.16), 0.08];
    
    for (var iDot, _pj_c = 0, _pj_a = util.range(circleCount), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        iDot = _pj_a[_pj_c];
        circles.push(new visual.Polygon({"win": psychoJS.window, "radius": dotRadius, "edges": 99, "lineWidth": (1.0 / 2), "lineColor": black, "fillColor": black}));
        circles[iDot].autoDraw = true;
        circles[iDot].opacity = 0;
    }
    circles[0].opacity = 1;
    circlePositions = function () {
        var _pj_a = [], _pj_b = util.range(circleCount);
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var i = _pj_b[_pj_c];
            _pj_a.push(((- (i + 1)) * startDelay));
        }
        return _pj_a;
    }
    .call(this);
    circleDirections = ([1] * circleCount);
    angle = function () {
        var _pj_a = [], _pj_b = util.range(circleCount);
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var i = _pj_b[_pj_c];
            _pj_a.push((((((i / circleCount) * 0.5) * Math.PI) / 3) + s));
        }
        return _pj_a;
    }
    .call(this);
    
    // setup some python lists for storing info about the mouse_14
    // current position of the mouse:
    mouse_14.x = [];
    mouse_14.y = [];
    mouse_14.leftButton = [];
    mouse_14.midButton = [];
    mouse_14.rightButton = [];
    mouse_14.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    DebriefComponents = [];
    DebriefComponents.push(mouse_14);
    DebriefComponents.push(text_9);
    DebriefComponents.push(text_11);
    
    for (const thisComponent of DebriefComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function DebriefRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Debrief' ---
    // get current time
    t = DebriefClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from code_12
    var _pj;
    var x;
    var y; 
    if (defineVars) {
    var angless = (function () {
        var _pj_a = [], _pj_b = util.range(circleCount);
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var i = _pj_b[_pj_c];
            _pj_a.push(((((((i / circleCount) * 0.5) * Math.PI) / q) + s) - Math.PI));
        }
        return _pj_a;
    })();
    var circlePositionss = (function () {
        var _pj_a = [], _pj_b = util.range(circleCount);
        for (var _pj_c = 0, _pj_d = _pj_b.length; (_pj_c < _pj_d); _pj_c += 1) {
            var i = _pj_b[_pj_c];
            console.log('i:', i);  // Add this line
            console.log('startDelay:', startDelay);  // Add this line
            _pj_a.push(((- (i + 1)) * startDelay));
        }
        return _pj_a;
    })();
    circleDirections = new Array(circleCount).fill(1);
    bouncess = 0;
    bounces = bouncess
    angles = angless
    circlePositions = circlePositionss
    defineVars = false;
    }
    for (var _, _pj_c = 0, _pj_a = util.range(Number.parseInt(iterations)), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        _ = _pj_a[_pj_c];
        for (var i, _pj_f = 0, _pj_d = util.range(circleCount), _pj_e = _pj_d.length; (_pj_f < _pj_e); _pj_f += 1) {
            i = _pj_d[_pj_f];
            x = ((radius * Math.cos(angles[i])) + (circlePositions[i] * Math.cos(angles[i])));
            y = ((radius * Math.sin(angles[i])) + (circlePositions[i] * Math.sin(angles[i])));
            circles[i].pos = [x, y];
            circlePositions[i] += (circleDirections[i] * rotationSpeed);
            if ((Math.sqrt((Math.pow(x, 2) + Math.pow(y, 2))) > (radius - 0.005))) {
                circleDirections[i] *= (- 1);
                bounces += 1;
                if ((circleDirections[i] === (- 1))) {
                    circlePositions[i] = ((- dotRadius) / Math.sqrt(2));
                } else {
                    circlePositions[i] = ((- 0.8) + (dotRadius / Math.sqrt(2)));
                }
            }
            if ((bounces <= (0.5 * circleCount))) {
                for (var iDot, _pj_i = 0, _pj_g = util.range(circleCount), _pj_h = _pj_g.length; (_pj_i < _pj_h); _pj_i += 1) {
                    iDot = _pj_g[_pj_i];
                    circles[i].opacity = 0;
                    circles[0].opacity = 1;
                }
            }
        circles[i].draw();
        }
    }
    var k = (bounces / circleCount);
    if (Number.isInteger(k) && 0 < k && k < 8) {
        circles[parseInt(k)-1].opacity = 1;
    }
    if ((bounces >= (circleCount * 5.5))) {
        bounces = 0;
    }
    circles[0].draw()
    console.log(k)
    
    // *mouse_14* updates
    if (t >= 0.0 && mouse_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_14.tStart = t;  // (not accounting for frame time here)
      mouse_14.frameNStart = frameN;  // exact frame index
      
      mouse_14.status = PsychoJS.Status.STARTED;
      mouse_14.mouseClock.reset();
      prevButtonState = mouse_14.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_14.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_14.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_14.getPos();
          mouse_14.x.push(_mouseXYs[0]);
          mouse_14.y.push(_mouseXYs[1]);
          mouse_14.leftButton.push(_mouseButtons[0]);
          mouse_14.midButton.push(_mouseButtons[1]);
          mouse_14.rightButton.push(_mouseButtons[2]);
          mouse_14.time.push(mouse_14.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }
    
    
    // *text_11* updates
    if (t >= 0.0 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of DebriefComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function DebriefRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Debrief' ---
    for (const thisComponent of DebriefComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('Debrief.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouse_14.x) {  psychoJS.experiment.addData('mouse_14.x', mouse_14.x[0])};
    if (mouse_14.y) {  psychoJS.experiment.addData('mouse_14.y', mouse_14.y[0])};
    if (mouse_14.leftButton) {  psychoJS.experiment.addData('mouse_14.leftButton', mouse_14.leftButton[0])};
    if (mouse_14.midButton) {  psychoJS.experiment.addData('mouse_14.midButton', mouse_14.midButton[0])};
    if (mouse_14.rightButton) {  psychoJS.experiment.addData('mouse_14.rightButton', mouse_14.rightButton[0])};
    if (mouse_14.time) {  psychoJS.experiment.addData('mouse_14.time', mouse_14.time[0])};
    
    // the Routine "Debrief" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
