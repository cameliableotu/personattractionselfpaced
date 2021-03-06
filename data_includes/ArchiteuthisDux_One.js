

var showProgressBar = true;

// Main shuffleSequence definition
var shuffleSequence = seq(
    'consent',
    'setcounter',
    'intro',
    'shared-intro',
    sepWith("timeoutSep", rshuffle(startsWith('ATTRAGREEROMANIAN'),startsWith('filler'))),
     'debrief');

// Using modified controller coded by Ethan Poole (Umass, 2017)
// Disallows use of mouse for responses.
var DS = 'EPDashedSentence';

//  Set the Prolific Academic Completion URL
var sendingResultsMessage = "Vă rugăm să aşteptaţi. Răspunsurile dumneavoastră se trimit serverului."; 
var completionMessage = "Mulţumim pentru participare!"; 
var completionErrorMessage = "Eroare în trimiterea răspunsurilor dumneavoastră către server"; 

// Controller settings.
var defaults = [
    "QuestionAlt", {
      
        randomOrder: ['a','b','c','d'],
        presentHorizontally: true
},
"EPDashedSentence", {
    mode: 'self-paced reading',
    display: 'in place'
}
];

// Add breaks every 24 items
function modifyRunningOrder(ro)
{
    for (var i = 0; i < ro.length; ++i)
    {
        if (i % 24 == 1
            && i > 23
            && i < 250)
        {
            ro[i].push(new DynamicElement(
                "Message",
                {html: "<p>Vă rugăm să luaţi o mică pauză. Apăsaţi orice tastă când sunteţi gata să începeţi din nou.</p>", transfer: "keypress"},
            true));
            ro[i].push(new DynamicElement(
                "Separator",
                {transfer: 4000, normalMessage: "Atenţie! Primul fragment de propoziţie din acest set va apărea pe ecran în curând."},
            true));
        }
    }
    return ro;
}

// Items array.
var items = [

["consent", "Form", {consentRequired: true, html: {include: "consent.html"}}],
 ["setcounter", "__SetCounter__", { }],
["intro", "Form", {consentRequired: true, html: {include: "intro.html"}}],
["debrief", "Form", {consentRequired: true, html: {include: "debrief.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro1.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro2.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro3.html"}}],


['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Vă rugăm să citiți cu atenție."}, DS, {s: "Această propoziţie e menită să vă obişnuiască cu stilul de lectură."}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Vă rugăm să citiți cu atenție."}, DS, {s: "Această propoziţie este un pic mai complicată decȃt propoziţia pe care aţi citit-o mai înainte."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Cum vi s-a părut?"],
                           ["p", "Citiți cu atenție, avȃnd grijă să înțelegeți fiecare cuvȃnt. Hai să mai exersăm un pic."]
                         ]}],

['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Vă rugăm să citiți cu atenție."}, DS, {s: "La bal, prinţul a valsat frumos şi a zȃmbit prinţesei."},"QuestionAlt", {q: "Cine a zȃmbit?", as: ['Prinţul','Prinţesa','Regele','Regina']}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Vă rugăm să citiți cu atenție."}, DS, {s: "Iepurii au alergat mult aseară."}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Vă rugăm să citiți cu atenție."}, DS, {s: "Miruna a stat toată noaptea cu fiul ei."},"QuestionAlt", {q: "Cine a stat toată noaptea cu fiul ei?", as: ['Miruna','Marina', 'Maria','Mara']}],
['shared-intro', Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Vă rugăm să citiți cu atenție."}, DS, {s: "Barista a pregătit un latte fără niciun chef şi nici măcar nu a făcut vreun design."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Bun, gata cu exersatul! Apăsaţi orice tastă când sunteţi gata să începeţi."]
                        ]}],

['shared-intro',"Separator",{transfer: 4000, normalMessage: "Atenţie! Prima propoziţie din acest set va apărea pe ecran în curând."}],

["timeoutSep", Separator, { transfer: 1500, normalMessage: "+", errorMessage: "Vă rugăm să citiți cu atenție."}],

//// Shared experimental items + fillers

[["ATTRAGREEROMANIAN-matchheadsg",1],DS, {s:"Cartea de lângă noi mereu avem un farmec aparte." },"QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cartea","Eu","Cărţile","Noi"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",1],DS, {s:"Cartea de lângă voi mereu aveţi un farmec aparte."}, "QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as:["Cartea","Tu","Cărţile","Voi"]}],
[["ATTRAGREEROMANIAN-matchheadpl",1],DS, {s:"Cartea de lângă ei mereu au un farmec aparte."}, "QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cartea","El","Cărţile","Ei"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",1],DS, {s:"Cărţile de lângă noi mereu avem un farmec aparte."}, "QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cartea","Eu","Cărţile","Noi"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",1],DS, {s:"Cărţile de lângă voi mereu aveţi un farmec aparte."}, "QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cartea","Tu","Cărţile","Voi"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",1],DS, {s:"Cărţile de lângă ei mereu avem un farmec aparte."}, "QuestionAlt", {q: "Cine/ Ce are un farmec aparte?", as: ["Cartea","El","Cărţile","Ei"]}],
[["ATTRAGREEROMANIAN-matchheadsg",2],DS, {s:"Vioara de lângă cântăreaţă mereu au arcuş maro deschis."},"QuestionAlt", {q: "Cine/ce are arcuș maro deschis?", as: ["Vioara","Eu","Viorile","Noi"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",2],DS, {s:"Vioara de lângă cântăreţe mereu au arcuş maro deschis."}, "QuestionAlt", {q: "Cine/ce are arcuș maro deschis?", as: ["Vioara","Cântăreața","Viorile","Cântărețele"]}],
[["ATTRAGREEROMANIAN-matchheadpl",2],DS, {s:"Viorile de lângă cântăreţe mereu au arcuş maro deschis."}, "QuestionAlt", {q: "Cine/ce are arcuș maro deschis?", as: ["Vioara","Cântăreața","Viorile","Cântărețele"]}],
[["ATTRAGREEROMANIAN-matchheadpl",2],DS, {s:"Viorile de lângă cântăreţe mereu au arcuş maro deschis."}, "QuestionAlt", {q: "Cine/ce are arcuș maro deschis?", as: ["Vioara","Cântăreața","Viorile","Cântărețele"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",2],DS, {s:" Viorile de lângă cântăreaţă mereu au arcuş maro deschis."},"QuestionAlt", {q: "Cine/ce are arcuș maro deschis?", as: ["Vioara","Cântăreața","Viorile","Cântărețele"]}],
[["ATTRAGREEROMANIAN-matchheadpl",2],DS, {s:"Viorile de lângă cântăreţe mereu au arcuş maro deschis."}, "QuestionAlt", {q: "Cine/ce are arcuș maro deschis?", as: ["Vioara","Cântăreața","Viorile","Cântărețele"]}],
[["ATTRAGREEROMANIAN-matchheadsg",3],DS, {s:"Rochia de lângă croitoreasă uneori au dantelă roz delicată. "},"QuestionAlt", {q: "Cine/ce are dantelă roz delicată?", as: ["Rochia","Croitoreasa","Rochiile","Croitoresele"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",3],DS, {s:"Rochia de lângă croitorese uneori au dantelă roz delicată."}, "QuestionAlt", {q: "Cine/ce au dantelă roz delicată?", as: ["Rochia","Croitoreasa","Rochiile","Croitoresele"]}],
[["ATTRAGREEROMANIAN-matchheadpl",3],DS, {s:"Rochiile de lângă croitorese uneori au dantelă roz delicată."},  "QuestionAlt", {q: "Cine/ce au dantelă roz delicată?", as: ["Rochia","Croitoreasa","Rochiile","Croitoresele"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",3],DS, {s:" Rochiile de lângă croitoreasă uneori au dantelă roz delicată."},  "QuestionAlt", {q: "Cine/ce au dantelă roz delicată?", as: ["Rochia","Croitoreasa","Rochiile","Croitoresele"]}],
[["ATTRAGREEROMANIAN-matchheadsg",4],DS, {s:"Dulceaţa de lângă gospodină uneori au zahăr brun fin."},"QuestionAlt", {q: "Cine/ce are zahăr brun fin?", as: ["Dulceața","Gospodina", "Dulcețurile","Gospodinele"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",4],DS, {s:"Dulceaţa de lângă gospodine uneori au zahăr brun fin."},"QuestionAlt", {q: "Cine/ce are zahăr brun fin?", as: ["Dulceața","Gospodina", "Dulcețurile","Gospodinele"]}],
[["ATTRAGREEROMANIAN-matchheadpl",4],DS, {s:"Dulceţurile de lângă gospodine uneori au zahăr brun fin."},"QuestionAlt", {q: "Cine/ce are zahăr brun fin?", as: ["Dulceața","Gospodina", "Dulcețurile","Gospodinele"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",4],DS, {s:"Dulceţurile de lângă gospodină uneori au zahăr brun fin."},"QuestionAlt", {q: "Cine/ce are zahăr brun fin?", as: ["Dulceața","Gospodina", "Dulcețurile","Gospodinele"]}],


[["ATTRAGREEROMANIAN-matchheadsg",5],DS, {s:"Pisica de lângă fată adesea au mişcări unduitoare elegante."},"QuestionAlt", {q: "Cine are mişcări unduitoare elegante?", as: ["Pisica","Fata","Pisicile","Fetele"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",5],DS, {s:"Pisica de lângă fete adesea au mişcări unduitoare elegante."},"QuestionAlt", {q: "Cine are mişcări unduitoare elegante?", as: ["Pisica","Fata","Pisicile","Fetele"]}],
[["ATTRAGREEROMANIAN-matchheadpl",5],DS, {s:"Pisicile de lângă fete adesea au mişcări unduitoare elegante."},"QuestionAlt", {q: "Cine are mişcări unduitoare elegante?", as: ["Pisica","Fata","Pisicile","Fetele"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",5],DS, {s:"Pisicile de lângă fată adesea au mişcări unduitoare elegante."},"QuestionAlt", {q: "Cine are mişcări unduitoare elegante?", as: ["Pisica","Fata","Pisicile","Fetele"]}],
[["ATTRAGREEROMANIAN-matchheadsg",6],DS, {s:"Învăţătoarea de lângă elevă adesea au succes răsunător la ore."},"QuestionAlt", {q: "Cine are succes răsunător la ore?", as: ["Învățătoarea","Eleva", "Învățătoarele","Elevele"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",6],DS, {s:"Învăţătoarea de lângă eleve adesea au succes răsunător la ore."},"QuestionAlt", {q: "Cine are succes răsunător la ore?", as: ["Învățătoarea","Eleva", "Învățătoarele","Elevele"]}],
[["ATTRAGREEROMANIAN-matchheadpl",6],DS, {s:"Învăţătoarele de lângă eleve adesea au succes răsunător la ore."},"QuestionAlt", {q: "Cine are succes răsunător la ore?", as: ["Învățătoarea","Eleva", "Învățătoarele","Elevele"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",6],DS, {s:"Învăţătoarele de lângă elevă adesea au succes răsunător la ore."},"QuestionAlt", {q: "Cine are succes răsunător la ore?", as: ["Învățătoarea","Eleva", "Învățătoarele","Elevele"]}],
[["ATTRAGREEROMANIAN-matchheadsg",7],DS, {s:"Vânzătoarea de lângă contabilă  mereu au mulţi bani de hârtie."},"QuestionAlt", {q: "Cine are mulţi bani de hârtie?", as: ["Vânzătoarea","Contabila","Vânzătoarele","Contabilele"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",7],DS, {s:"Vânzătoarea de lângă contabile mereu au mulţi bani de hârtie."}, "QuestionAlt", {q: "Cine are mulţi bani de hârtie?", as: ["Vânzătoarea","Contabila","Vânzătoarele","Contabilele"]}],
[["ATTRAGREEROMANIAN-matchheadpl",7],DS, {s:"Vânzătoarele de lângă contabile mereu au mulţi bani de hârtie."},"QuestionAlt", {q: "Cine are mulţi bani de hârtie?", as: ["Vânzătoarea","Contabila","Vânzătoarele","Contabilele"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",7],DS, {s:"Vânzătoarele de lângă contabilă mereu au mulţi bani de hârtie."},"QuestionAlt", {q: "Cine are mulţi bani de hârtie?", as: ["Vânzătoarea","Contabila","Vânzătoarele","Contabilele"]}],
[["ATTRAGREEROMANIAN-matchheadsg",8],DS, {s:"Oaia de lângă ţărancă adesea au lapte foarte bun."},"QuestionAlt", {q: "Cine are lapte foarte bun?", as: ["Oaia","Ţăranca","Oile","Ţărăncile"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",8],DS, {s:"Oaia de lângă ţărănci adesea au lapte foarte bun."},"QuestionAlt", {q: "Cine are lapte foarte bun?", as: ["Oaia","Ţăranca","Oile","Ţărăncile"]}],
[["ATTRAGREEROMANIAN-matchheadpl",8],DS, {s:"Oile de lângă ţărănci adesea au lapte foarte bun."},"QuestionAlt", {q: "Cine are lapte foarte bun?", as: ["Oaia","Ţăranca","Oile","Ţărăncile"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",8],DS, {s:"Oile de lângă ţărancă adesea au lapte foarte bun."},"QuestionAlt", {q: "Cine are lapte foarte bun?", as: ["Oaia","Ţăranca","Oile","Ţărăncile"]}],

[["ATTRAGREEROMANIAN-matchheadsg",9],DS, {s:"Cuţitul de lângă organism uneori au viruşi letali numeroşi."},"QuestionAlt", {q: "Cine/ce are viruşi letali numeroşi?", as: ["Cuţitul","Organismul","Cuţitele","Organismele"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",9],DS, {s:"Cuţitul de lângă organisme uneori au viruşi letali numeroşi."},"QuestionAlt", {q: "Cine/ce are viruşi letali numeroşi?", as: ["Cuţitul","Organismul","Cuţitele","Organismele"]}],
[["ATTRAGREEROMANIAN-matchheadpl",9],DS, {s:" Cuţitele de lângă organisme uneori au viruşi letali numeroşi."},"QuestionAlt", {q: "Cine/ce are viruşi letali numeroşi?", as:["Cuţitul","Organismul","Cuţitele","Organismele"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",9],DS, {s:" Cuţitele de lângă organism uneori au viruşi letali numeroşi."},"QuestionAlt", {q: "Cine/ce are viruşi letali numeroşi?", as: ["Cuţitul","Organismul","Cuţitele","Organismele"]}],
[["ATTRAGREEROMANIAN-matchheadsg",10],DS, {s:"Tabloul de lângă animal uneori au vizitatori preşcolari curioşi."},"QuestionAlt", {q: "Cine/ce are vizitatori preşcolari curioşi? ", as: ["Tabloul","Animalul","Tablourile","Animalele"]}],   
[["ATTRAGREEROMANIAN-mismatchheadsg",10],DS, {s:"Tabloul de lângă animale uneori au vizitatori preşcolari curioşi."},"QuestionAlt", {q: "Cine/ce are vizitatori preşcolari curioşi?", as: ["Tabloul","Animalul","Tablourile","Animalele"]}],     
[["ATTRAGREEROMANIAN-matchheadpl",10],DS, {s:"Tablourile de lângă animale uneori au vizitatori preşcolari curioşi."},"QuestionAlt", {q: "Cine/ce are vizitatori preşcolari curioşi?", as: ["Tabloul","Animalul","Tablourile","Animalele"]}],    
[["ATTRAGREEROMANIAN-mismatchheadpl",10],DS, {s:"Tablourile de lângă animal uneori au vizitatori preşcolari curioşi."},"QuestionAlt", {q: "Cine/ce are vizitatori preşcolari curioşi?", as: ["Tabloul","Animalul","Tablourile","Animalele"]}], 
[["ATTRAGREEROMANIAN-matchheadsg",11],DS, {s:"Nisipul de lângă crustaceu adesea au calciu organic granular."}, "QuestionAlt", {q: "Cine/ce are calciu organic granular?", as: ["Nisipul","Crustaceul","Nisipurile","Crustaceele"]}],  
[["ATTRAGREEROMANIAN-mismatchheadsg",11],DS, {s:"Nisipul de lângă crustacee adesea au calciu organic granular."}, "QuestionAlt", {q: "Cine/ce are calciu organic granular?", as: ["Nisipul","Crustaceul","Nisipurile","Crustaceele"]}], 
[["ATTRAGREEROMANIAN-matchheadpl",11],DS, {s:"Nisipurile de lângă crustacee adesea au calciu."}, "QuestionAlt", {q: "Cine/ce are calciu organic granular?", as: ["Nisipul","Crustaceul","Nisipurile","Crustaceele"]}], 
[["ATTRAGREEROMANIAN-mismatchheadpl",11],DS, {s:"Nisipurile de lângă crustaceu adesea are calciu."}, "QuestionAlt", {q: "Cine/ce are calciu organic granular?", as: ["Nisipul","Crustaceul","Nisipurile","Crustaceele"]}],   
[["ATTRAGREEROMANIAN-matchheadsg",12],DS, {s:"Piureul de lângă macrou mereu au piper roşu măcinat."},"QuestionAlt", {q: "Cine/ce are piper roşu măcinat?", as: ["Piureul","Macroul","Piureurile","Macrourile"]}],   
[["ATTRAGREEROMANIAN-mismatchheadsg",12],DS, {s:"Piureul de lângă macrouri mereu au piper roşu măcinat."},"QuestionAlt", {q: "Cine/ce are piper roşu măcinat?", as: ["Piureul","Macroul","Piureurile","Macrourile"]}], 
[["ATTRAGREEROMANIAN-matchheadpl",12],DS, {s:"Piureurile de lângă macrouri mereu au piper roşu măcinat."},"QuestionAlt", {q: "Cine/ce are piper roşu măcinat?", as: ["Piureul","Macroul","Piureurile","Macrourile"]}],   
[["ATTRAGREEROMANIAN-mismatchheadpl",12],DS, {s:"Piureurile de lângă macrou mereu au piper roşu măcinat."},"QuestionAlt", {q: "Cine/ce are piper roşu măcinat?", as: ["Piureul","Macroul","Piureurile","Macrourile"]}],  


[["ATTRAGREEROMANIAN-matchheadsg",13],DS, {s:"Sufletul de lângă trup mereu au aripi de înger diafane."},"QuestionAlt", {q: "Cine/ce are aripi de înger diafane?", as: ["Sufletul","Trupul","Sufletele","Trupurile"]}],     
[["ATTRAGREEROMANIAN-mismatchheadsg",13],DS, {s:"Sufletul de lângă trupuri mereu au aripi de înger diafane."},"QuestionAlt", {q: "Cine/ce are aripi de înger diafane?", as:["Sufletul","Trupul","Sufletele","Trupurile"]}],  
[["ATTRAGREEROMANIAN-matchheadpl",13],DS, {s:"Sufletele de lângă trupuri mereu au aripi de înger diafane."}, "QuestionAlt", {q: "Cine/ce are aripi de înger diafane?", as: ["Sufletul","Trupul","Sufletele","Trupurile"]}],      
[["ATTRAGREEROMANIAN-mismatchheadpl",13],DS, {s:"Sufletele de lângă trup mereu au aripi de înger diafane."}, "QuestionAlt", {q: "Cine/ce are aripi de înger diafane?", as: ["Sufletul","Trupul","Sufletele","Trupurile"]}],  
[["ATTRAGREEROMANIAN-matchheadsg",14],DS, {s:"Mamiferul de lângă nevertebrat uneori au banane verzi necoapte."}, "QuestionAlt", {q: "Cine/ce are banane verzi necoapte?", as: ["Mamiferul","Nevertebratul","Mamiferele","Nevertebratele"]}],   
[["ATTRAGREEROMANIAN-mismatchheadsg",14],DS, {s:"Mamiferul de lângă nevertebrate uneori au banane verzi necoapte."},"QuestionAlt", {q: "Cine/ce are banane verzi necoapte?", as: ["Mamiferul","Nevertebratul","Mamiferele","Nevertebratele"]}],      
[["ATTRAGREEROMANIAN-matchheadpl",14],DS, {s:"Mamiferele de lângă nevertebrate uneori au banane verzi necoapte."},"QuestionAlt", {q: "Cine/ce are banane verzi necoapte?", as: ["Mamiferul","Nevertebratul","Mamiferele","Nevertebratele"]}],     
[["ATTRAGREEROMANIAN-mismatchheadpl",14],DS, {s:"Mamiferele de lângă nevertebrat uneori au banane verzi necoapte."}, "QuestionAlt", {q: "Cine/ce are banane verzi necoapte?", as: ["Mamiferul","Nevertebratul","Mamiferele","Nevertebratele"]}],  
[["ATTRAGREEROMANIAN-matchheadsg",15],DS, {s:"Macroul de lângă vertebrat adesea au icre rozalii pufoase."}, "QuestionAlt", {q: "Cine/ce are icre rozalii pufoase?", as: ["Macroul","Vertebratul","Macrourile","Vertebratele"]}],   
[["ATTRAGREEROMANIAN-mismatchheadsg",15],DS, {s:"Macroul de lângă vertebrate adesea au icre rozalii pufoase."},"QuestionAlt", {q: "Cine/ce are icre rozalii pufoase?", as: ["Macroul","Vertebratul","Macrourile","Vertebratele"]}],  
[["ATTRAGREEROMANIAN-matchheadpl",15],DS, {s:"Macrourile de lângă vertebrate adesea au icre rozalii pufoase."}, "QuestionAlt", {q: "Cine/ce are icre rozalii pufoase?", as: ["Macroul","Vertebratul","Macrourile","Vertebratele"]}],   
[["ATTRAGREEROMANIAN-mismatchheadpl",15],DS, {s:"Macrourile de lângă vertebrat adesea au icre rozalii pufoase."},"QuestionAlt", {q: "Cine/ce are icre rozalii pufoase?", as: ["Macroul","Vertebratul","Macrourile","Vertebratele"]}],    
[["ATTRAGREEROMANIAN-matchheadsg",16],DS, {s:"Animalul de lângă mamifer uneori au un entuziasm contagios."},"QuestionAlt", {q: "Cine/ce are un entuziasm contagios?", as: ["Animalul","Mamiferul","Animalele","Mamiferele"]}],    
[["ATTRAGREEROMANIAN-mismatchheadsg",16],DS, {s:"Animalul de lângă mamifere uneori au un entuziasm contagios."},"QuestionAlt", {q: "Cine/ce are un entuziasm contagios?", as:["Animalul","Mamiferul","Animalele","Mamiferele"]}],       
[["ATTRAGREEROMANIAN-matchheadpl",16],DS, {s:"Animalele de lângă mamifere uneori au un entuziasm contagios."},"QuestionAlt", {q: "Cine/ce are un entuziasm contagios?", as: ["Animalul","Mamiferul","Animalele","Mamiferele"]}],    
[["ATTRAGREEROMANIAN-mismatchheadpl",16],DS, {s:"Animalele de lângă mamifer uneori au un entuziasm contagios."},"QuestionAlt", {q: "Cine/ce are un entuziasm contagios?", as: ["Animalul","Mamiferul","Animalele","Mamiferele"]}],   


[["ATTRAGREEROMANIAN-matchheadsg",17],DS, {s:"Câinele de lângă copil adesea au o energie debordantă."},"QuestionAlt", {q: "Cine/ce are o energie debordantă?", as: ["Câinele","Copilul","Câinii","Copiii"]}],    
[["ATTRAGREEROMANIAN-mismatchheadsg",17],DS, {s:"Câinele de lângă copii adesea au o energie debordantă."},"QuestionAlt", {q: "Cine/ce are o energie debordantă?", as: ["Câinele","Copilul","Câinii","Copiii"]}],  
[["ATTRAGREEROMANIAN-matchheadpl",17],DS, {s:"Câinii de lângă copii adesea au o energie debordantă."},"QuestionAlt", {q: "Cine/ce are o energie debordantă?", as: ["Câinele","Copilul","Câinii","Copiii"]}],    
[["ATTRAGREEROMANIAN-mismatchheadpl",17],DS, {s:" Câinii de lângă copil adesea au o energie debordantă."},"QuestionAlt", {q: "Cine/ce are o energie debordantă?", as: ["Câinele","Copilul","Câinii","Copiii"]}],   
[["ATTRAGREEROMANIAN-matchheadsg",18],DS, {s:"Doctorul de lângă pacient uneori au multă răbdare de fier."},"QuestionAlt", {q: "Cine/ce are multă răbdare de fier?", as: ["Doctorul","Pacientul","Doctorii","Pacienţii"]}],   
[["ATTRAGREEROMANIAN-mismatchheadsg",18],DS, {s:"Doctorul de lângă pacienţi uneori au multă răbdare de fier."},"QuestionAlt", {q: "Cine/ce are multă răbdare de fier?", as: ["Doctorul","Pacientul","Doctorii","Pacienţii"]}],    
[["ATTRAGREEROMANIAN-matchheadpl",18],DS, {s:"Doctorii de lângă pacienţi uneori au multă răbdare de fier."},"QuestionAlt", {q: "Cine/ce are multă răbdare de fier?", as: ["Doctorul","Pacientul","Doctorii","Pacienţii"]}],  
[["ATTRAGREEROMANIAN-mismatchheadpl",18],DS, {s:"Doctorii de lângă pacient uneori au multă răbdare de fier."},"QuestionAlt", {q: "Cine/ce are multă răbdare de fier?", as: ["Doctorul","Pacientul","Doctorii","Pacienţii"]}],    
[["ATTRAGREEROMANIAN-matchheadsg",19],DS, {s:"Preotul de lângă călugăr mereu au multă înţelepciune bătrânească."},"QuestionAlt", {q: "Cine/ce are multă înţelepciune bătrânească?", as: ["Preotul","Călugărul","Preoţii","Călugării"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",19],DS, {s:"Preotul de lângă călugări mereu au multă înţelepciune bătrânească."},"QuestionAlt", {q: "Cine/ce are multă înţelepciune bătrânească?", as: ["Preotul","Călugărul","Preoţii","Călugării"]}],
[["ATTRAGREEROMANIAN-matchheadpl",19],DS, {s:"Preoţii de lângă călugări mereu au multă înţelepciune bătrânească."},"QuestionAlt", {q: "Cine/ce are multă înţelepciune bătrânească?", as: ["Preotul","Călugărul","Preoţii","Călugării"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",19],DS, {s:"Preoţii de lângă călugăr mereu au multă înţelepciune bătrânească."},"QuestionAlt", {q: "Cine/ce are multă înţelepciune bătrânească?", as: ["Preotul","Călugărul","Preoţii","Călugării"]}],
[["ATTRAGREEROMANIAN-matchheadsg",20],DS, {s:"Profesorul de lângă student uneori au numeroase realizări mari."},"QuestionAlt", {q: "Cine/ce are numeroase realizări mari?", as: ["Profesorul","Studentul","Profesorii","Studenţii"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",20],DS, {s:"Profesorul de lângă studenţi uneori au numeroase realizări mari."}, "QuestionAlt", {q: "Cine/ce are numeroase realizări mari?", as: ["Profesorul","Studentul","Profesorii","Studenţii"]}], 
[["ATTRAGREEROMANIAN-matchheadpl",20],DS, {s:"Profesorii de lângă studenţi uneori au numeroase realizări mari."},"QuestionAlt", {q: "Cine/ce are numeroase realizări mari?", as: ["Profesorul","Studentul","Profesorii","Studenţii"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",20],DS, {s:" Profesorii de lângă student uneori au numeroase realizări mari."},"QuestionAlt", {q: "Cine/ce are numeroase realizări mari?", as: ["Profesorul","Studentul","Profesorii","Studenţii"]}],
[["ATTRAGREEROMANIAN-matchheadsg",21],DS, {s:"Cârnatul de lângă hangiu mereu au sare grunjoasă multă."},"QuestionAlt", {q: "Cine/ce are sare grunjoasă multă ?", as: ["Cârnatul","Hangiul", "Cârnaţii","Hangiii"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",21],DS, {s:"Cârnatul de lângă hangii mereu au sare grunjoasă multă."},"QuestionAlt", {q: "Cine/ce are sare grunjoasă multă?", as: ["Cârnatul","Hangiul", "Cârnaţii","Hangiii"]}],
[["ATTRAGREEROMANIAN-matchheadpl",21],DS, {s:"Cârnaţii de lângă hangii mereu au sare grunjoasă multă."},"QuestionAlt", {q: "Cine/ce are sare grunjoasă multă?", as:["Cârnatul","Hangiul", "Cârnaţii","Hangiii"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",21],DS, {s:"Cârnaţii de lângă hangiu mereu au sare grunjoasă multă."},"QuestionAlt", {q: "Cine/ce are sare grunjoasă multă?", as:["Cârnatul","Hangiul", "Cârnaţii","Hangiii"]}],
[["ATTRAGREEROMANIAN-matchheadsg",22],DS, {s:"Buşteanul de lângă erou mereu au rezistenţă de invidiat."},"QuestionAlt", {q: "Cine/ce are rezistenţă de invidiat?", as: ["Buşteanul","Eroul", "Buştenii", "Eroii"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",22],DS, {s:"Buşteanul de lângă eroi mereu au rezistenţă de invidiat."},"QuestionAlt", {q: "Cine/ce are rezistenţă de invidiat?", as: ["Buşteanul","Eroul", "Buştenii", "Eroii"]}],
[["ATTRAGREEROMANIAN-matchheadpl",22],DS, {s:"Buştenii de lângă eroi mereu au rezistenţă de invidiat."},"QuestionAlt", {q: "Cine/ce are rezistenţă de invidiat?", as: ["Buşteanul","Eroul", "Buştenii", "Eroii"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",22],DS, {s:"Buştenii de lângă erou mereu au rezistenţă de invidiat."},"QuestionAlt", {q: "Cine/ce are rezistenţă de invidiat?", as: ["Buşteanul","Eroul", "Buştenii", "Eroii"]}],
[["ATTRAGREEROMANIAN-matchheadsg",23],DS, {s:"Nasturele de lângă croitor adesea au aţă albastră groasă."},"QuestionAlt", {q: "Cine/ce are aţă albastră groasă?", as: ["Nasturele","Croitorul","Nasturii","Croitorii"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",23],DS, {s:"Nasturele de lângă croitori adesea au aţă albastră groasă."},"QuestionAlt", {q: "Cine/ce are aţă albastră groasă?", as: ["Nasturele","Croitorul","Nasturii","Croitorii"]}],
[["ATTRAGREEROMANIAN-matchheadpl",23],DS, {s:"Nasturii de lângă croitori adesea  au aţă albastră groasă."},"QuestionAlt", {q: "Cine/ce are aţă albastră groasă?", as: ["Nasturele","Croitorul","Nasturii","Croitorii"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",23],DS, {s:"Nasturii de lângă croitor adesea au aţă albastră groasă."},"QuestionAlt", {q: "Cine/ce are aţă albastră groasă?", as: ["Nasturele","Croitorul","Nasturii","Croitorii"]}],
[["ATTRAGREEROMANIAN-matchheadsg",24],DS, {s:"Sacul de lângă contabil adesea au multe bancnote verzi."},"QuestionAlt", {q: "Cine/ce are multe bancnote verzi?", as: ["Sacul","Contabilul","Sacii","Contabilii"]}],
[["ATTRAGREEROMANIAN-mismatchheadsg",24],DS, {s:"Sacul de lângă contabili adesea au multe bancnote verzi."}, "QuestionAlt", {q: "Cine/ce are multe bancnote verzi?", as: ["Sacul","Contabilul","Sacii","Contabilii"]}],
[["ATTRAGREEROMANIAN-matchheadpl",24],DS, {s:"Sacii de lângă contabili adesea au multe bancnote verzi."},"QuestionAlt", {q: "Cine/ce are multe bancnote verzi?", as: ["Sacul","Contabilul","Sacii","Contabilii"]}],
[["ATTRAGREEROMANIAN-mismatchheadpl",24],DS, {s:"Sacii de lângă contabil adesea au multe bancnote verzi."},"QuestionAlt", {q: "Cine/ce are multe bancnote verzi?", as: ["Sacul","Contabilul","Sacii","Contabilii"]}],

[["filler-twonounspluralcorrectchoice",25],DS, {s:"Fata pe care domnii o iubesc este frumoasă."}, "QuestionAlt", {q: "Cine iubeşte?", as: ["Fata","Domnul","Fetele", "Domnii" ]}],
[["filler-twonounspluralcorrectchoice",26],DS, {s:"Cartea pe care fetele o citesc este interesantă. "},"QuestionAlt", {q: "Cine citeşte?", as: ["Fata","Cartea", "Fetele","Cărţile"]}],
[["filler-twonounspluralcorrectchoice",27],DS, {s:"Pinguinul pe care copiii îl privesc este Apolodor."}],
[["filler-twonounspluralcorrectchoice",28],DS, {s:"Pisica pe care băieţii o lovesc este birmaneză. "}],
[["filler-twonounspluralcorrectchoice",29],DS, {s:"Veveriţa pe care bărbaţii o prind este maro. "}],
[["filler-twonounspluralcorrectchoice",30],DS, {s:"Lumina pe care oamenii o văd este verde. "}],
[["filler-twonounspluralcorrectchoice",31],DS, {s:"Casa pe care contabilii o construiesc este imensă. "}],
[["filler-twonounspluralcorrectchoice",32],DS, {s:"Mingea pe care sportivii o aleg este mare. "}],
[["filler-twonounspluralcorrectchoice",33],DS, {s:"Vinul pe care bucătarii îl beau este roşu."}],
[["filler-twonounspluralcorrectchoice",34],DS, {s:"Câinele pe care doctorii îl hrănesc este bolnav."}],
[["filler-twonounspluralcorrectchoice",35], DS, {s:"Poemul pe care tinerii îl spun este emoţionant."}],
[["filler-twonounspluralcorrectchoice",36],DS, {s:"Omul pe care animalele îl îndrăgesc este blând. "}]

,
 [["filler-twonounssingularcorrectchoice",37],DS, {s:"Vinurile pe care domnul le iubeşte sunt seci."}],
[["filler-twonounssingularcorrectchoice",38],DS, {s:"Scrisorile pe care fata le citeşte sunt lungi."}],
[["filler-twonounssingularcorrectchoice",39],DS, {s:"Girafele pe care copilul le priveşte sunt înalte."},"QuestionAlt", {q: "Cine priveşte?", as: ["Copilul","Girafa", "Copiii", "Girafele"]}],
[["filler-twonounssingularcorrectchoice",40],DS, {s:"Motanii pe care bunicul îi adăposteşte sunt tigraţi."},"QuestionAlt", {q: "Cine adăposteşte?", as: ["Bunicul","Motanul", "Bunicii", "Motanii"]}],
[["filler-twonounssingularcorrectchoice",41],DS, {s:"Şerpii pe care bărbatul îi striveşte sunt veninoşi."}],
[["filler-twonounssingularcorrectchoice",42],DS, {s:"Stelele pe care înţeleptul le urmăreşte sunt strălucitoare."}],
[["filler-twonounssingularcorrectchoice",43],DS, {s:"Barurile pe care pictorul le construieşte sunt artistice."}],
[["filler-twonounssingularcorrectchoice",44],DS, {s:"Păsările pe care colecţionarul le vede sunt impresionante."}],
[["filler-twonounssingularcorrectchoice",45],DS, {s:"Sucurile pe care chelnerul le bea sunt dulci."}],
[["filler-twonounssingularcorrectchoice",46],DS, {s:"Pisicile pe care doamna le îngrijeşte sunt slabe."}],
[["filler-twonounssingularcorrectchoice",47],DS, {s:"Cuvintele pe care preotul le rosteşte sunt înţelepte."}],
[["filler-twonounssingularcorrectchoice",48],DS, {s:"Câinii pe care pisica îi urăşte sunt răi."}]
,
 [["filler-coordination",49],DS, {s:"Femeia şi copilul beau mult suc."}],
[["filler-coordination",50],DS, {s:"Doctorul şi bolnavul plâng mult din cauza bolii."},"QuestionAlt", {q: "Cine plânge?", as: ["Doctorul","Bolnavul", "Doctorul şi bolnavul","Doctorul şi pacientul"]}],
[["filler-coordination",51],DS, {s:"Vulpoiul şi vulpea sar în aer foarte rapid."}],
[["filler-coordination",52],DS, {s:"Găina şi puiul ciugulesc firimituri adesea."},"QuestionAlt", {q: "Cine ciuguleşte?", as: ["Găina","Puiul","Găina şi puiul","Cocoşul şi puiul"]}],
[["filler-coordination",53],DS, {s:"Paharul şi sticla cad de pe birou uneori."}],
[["filler-coordination",54],DS, {s:"Oboseala şi plictisul ucid iubirea adesea."}],
[["filler-coordination",55],DS, {s:"Iubirea şi prietenia susţin moralul întotdeauna."}],
[["filler-coordination",56],DS, {s:"Căţelul şi pisica dorm după cină adesea."}],
 [["filler-coordination",57],DS, {s:"Cafeaua şi ceaiul au efecte laxative."}],
[["filler-coordination",58],DS, {s:"Trandafirul şi zambila miros foarte frumos."}],
[["filler-coordination",59],DS, {s:"Cartea şi caietul sunt pe masă mereu."}],
[["filler-coordination",60],DS, {s:"Papagalul şi băiatul vorbesc foarte mult unul cu altul."}]
,
[["filler-semanticchoice",61],DS, {s:"Lampa de lângă cartea verde se aprinde uşor."}],
[["filler-semanticchoice",62],DS, {s:"Fetiţa de lângă camera albastră dansează."}],
[["filler-semanticchoice",63],DS, {s:"Iepuraşul de lângă scaunul roşu doarme."}],
[["filler-semanticchoice",64],DS, {s:"Pasărea de lângă masa neagră cântă bine."}],
[["filler-semanticchoice",65],DS, {s:"Măgarul de lângă căţelul maro rage adesea. "},"QuestionAlt", {q: "Cine rage adesea?", as: ["Măgarul","Căţelul maro","Măgarii","Căţeii maro", ]}],
[["filler-semanticchoice",66],DS, {s:"Papucii de lângă copiii bolnavi alunecă uşor."}],
[["filler-semanticchoice",67],DS, {s:"Hainele de lângă femeile zâmbăreţe cad mereu."}],
[["filler-semanticchoice",68],DS, {s:"Albinele de lângă portocalele stricate bȃzȃie prea tare."}],
[["filler-semanticchoice",69],DS, {s:"Râul de lângă pădurea frumoasă curge adesea vara."}],
[["filler-semanticchoice",70],DS, {s:"Urşii de lângă prinţesele minunate hibernează."},"QuestionAlt", {q: "Cine hibernează?", as: ["Ursul", "Prinţesa minunate", "Urşii","Prinţesele minunate"]}],
[["filler-semanticchoice",71],DS, {s:"Florile de lângă sticlele albastre se ofilesc mereu."}],
[["filler-semanticchoice",72],DS, {s:"Calculatoarele de lângă copiii năzdrăvani se strică uneori."}],

[["filler-onenounplagreement",73], DS, {s:"Iepuraşii fricoşi se ascund de oameni adesea."}, "QuestionAlt", {q: "Cine se ascunde de oameni adesea?", as: ["Iepuraşul fricos","Leul fricos","Iepuraşii fricoşi","Leii fricoşi"]}],
[["filler-onenounplagreement",74], DS, {s:"Cutremurele mari distrug locuinţe tot timpul."}],
[["filler-onenounplagreement",75], DS, {s:"Grădinile japoneze au trandafiri adesea."}],
[["filler-onenounplagreement",76], DS, {s:"Fetele seducătoare atrag admiratori adesea."},"QuestionAlt", {q: "Cine atrage admiratori adesea?", as: ["Fata seducătoare ","Femeia seducătoare","Fetele seducătoare ","Femeile seducătoare"]}],
[["filler-onenounplagreement",77], DS, {s:"Muzicienii creativi compun melodii deosebite."}],
[["filler-onenounplagreement",78], DS, {s:"Rănile sufleteşti dor foarte tare."}],
[["filler-onenounplagreement",79], DS, {s:"Paharele colorate conţin suc de portocale."}],
[["filler-onenounplagreement",80], DS, {s:"Hamsterii curioşi apar în bucătărie adesea."}],
[["filler-onenounplagreement",81], DS, {s:"Elevii cuminţi doresc note mari."}],
[["filler-onenounplagreement",82], DS, {s:"Parfumurile franţuzeşti miros incredibil de frumos."}],
[["filler-onenounplagreement",83], DS, {s:"Bunicii iubitori dau multe cadouri nepoţilor lor."}],
[["filler-onenounplagreement",84], DS, {s:"Cheile verzi deschid multe uşi."}],

[["filler-onenounsgagreement",85],DS, {s:"Fata şatenă se ascunde de prieteni adesea."}],
[["filler-onenounsgagreement",86],DS, {s:"Pisica năzdrăvană sparge vase tot timpul."},"QuestionAlt", {q: "Cine sparge vase tot timpul?", as: ["Pisica năzdrăvană","Pisica simpatică", "Pisicile năzdrăvană","Pisicile simpatice"]}],
[["filler-onenounsgagreement",87],DS, {s:"Caietul negru are pagini albe."}],
[["filler-onenounsgagreement",88],DS, {s:"Magnetul maro atrage metale adesea."}],
[["filler-onenounsgagreement",89],DS, {s:"Pixul albastru scrie foarte bine."}],
[["filler-onenounsgagreement",90],DS, {s:"Iepurele alb sare cu mare agilitate."}],
[["filler-onenounsgagreement",91],DS, {s:"Studentul harnic munceşte foarte mult."}],
[["filler-onenounsgagreement",92],DS, {s:"Femeia misterioasă dispare în străinătate adesea."}],
[["filler-onenounsgagreement",93],DS, {s:"Poetul talentat vorbeşte foarte frumos."}],
[["filler-onenounsgagreement",94],DS, {s:"Mâncarea gustoasă miroase foarte bine."},"QuestionAlt", {q: "Ce miroase foarte bine?", as: ["Mâncarea gustoasă","Zambila roz", "Mâncarurile gustoase","Zambilele roz",]}],
[["filler-onenounsgagreement",95],DS, {s:"Cursul masteral cuprinde multe informaţii."}],
[["filler-onenounsgagreement",96],DS, {s:"Bagajul mare conţine haine de iarnă."}]
];
