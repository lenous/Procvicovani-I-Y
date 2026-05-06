const YI_WORDS = {
  easy: {
    y: [
      'ryba','ryby','rybka','rybník','rybář','rybina','rybí','rybíz','rys','rysí',
      'rysovat','rychle','rychlý','rychlost','rychlík','rypadlo','rypák','rytec','rytmus','rytmický',
      'kytka','kytice','kytara','kyselý','kyselo','kyslík','kyprý','kypět','kyvadlo','kynout',
      'chyba','chybět','chytrý','chytat','chystat','chytrost','hyena','hymna','hybatel','tygr',
      'tykat','tyč','tyčka','dynamo','dynamit','nymfa','nylon','typ','typický','typovat'
    ],
    ý: [
      'rýč','rýma','rýže','rýha','rýpat','rýt','rýhovat','rýžový','dým','dýně',
      'dýka','dýchat','dýchání','dýchnout','hýbat','hýčkat','chýše','chýlit','kývat','kýbl',
      'kýla','kýchat','kýchání','kýchnout','týden','týdne','týkat','tým','týmový','týž',
      'nýt','nýtovat','nýtek','sýr','pýcha','pýřit','výheň','výška','výšivka','výborný'
    ],
    i: [
      'šipka','šikovný','šikulka','šiška','široký','šidit','šifra','šimrat','žito','žirafa',
      'židle','žihadlo','život','živý','cibule','cihla','citron','cinkat','činka','čichat',
      'čistota','čistý','jiskra','jiný','jitro','jizva','jitrnice','ticho','tisíc','nit',
      'nic','nikdo','divadlo','děti','hodiny','list','lilek','pivo','pilka','sirka',
      'silnice','zima','zimní','figura','film','firma','fix','fialka','mince','miska'
    ],
    í: [
      'číst','číslovka','číslo','cíl','cítit','cín','číše','říct','říká','řízek',
      'řídit','říše','říjen','šíp','šípek','šít','šířit','šíře','žíla','žízeň',
      'žít','žínka','jídlo','jídelna','jízda','jít','jíme','nízký','díra','díl',
      'dívat','tím','nítka','síla','síť','vítr','víla','víno','zítra','získat'
    ]
  },

  medium: {
    y: [
      'myš','myška','myši','mysl','myslet','myšlenka','myslivec','myslivna','mytí','myčka',
      'mydlit','mylný','omyl','průmysl','průmyslový','hmyz','hmyzí','zamykat','odmykat','smyk',
      'smyčka','byt','bydlet','bydlit','bydliště','obyvatel','obyvák','nábytek','obyčej','obyčejný',
      'dobytek','dobytkář','pobyt','příbytek','zbytek','zbylý','bylina','byliny','bystrý','bystřina',
      'kobylka','kobyla','lyže','lyžař','lyžovat','lysý','lysina','slyšet','slyšitelný','polykat',
      'plyn','plynout','plynový','plyšák','pytel','pytlík','pytlák','pysk','pyšný','pyšnit',
      'pyl','pylový','opylit','opylovat','kopyto','třpyt','třpytka','syn','synek','synovec',
      'sytý','sytost','sypat','nasypat','vysypat','sypký','syrový','sysel','syčet','sychravý',
      'usychat','vysoký','vysoká','vysoko','vybrat','vydra','vyhnat','vykat','zvyk','zvykat',
      'vyrobit','vyučit','vychovat','vyplatit','jazyk','jazykový','brzy','fyzika','fyzik','fyzický'
    ],
    ý: [
      'mýt','mýdlo','mýdlový','mýtina','mýtné','být','býti','bývalý','býk','býčí',
      'lýko','lýtko','lýtkový','mlýn','mlýnek','mlýnský','blýskat','blýskavý','plynulý','plyšový',
      'pýcha','pýřit','pýr','pýrový','sýr','sýrový','sýrař','sýrárna','sýkora','sýček',
      'výr','výří','výlet','výuka','výsledek','výtah','výloha','výrobek','výhled','výhra',
      'výbor','výzva','výklad','výkres','výběr','výborný','nabýt','dobýt','ubýt','zbýt',
      'pobýt','přibýt','třpytivý','vymýtit','vysýchat','vysýchání','význam','výživný','výroba','výroční'
    ],
    i: [
      'mince','miska','miminko','milý','milovat','minule','minuta','mistr','bicikl','bizon',
      'bitva','biskup','bilance','bibliotéka','blikot','blikat','blikání','lichý','licho','lilek',
      'linie','lisovat','liška','pilot','pivo','pila','pilník','piškot','pisatel','piják',
      'pivovar','pivnice','pivoňka','pijavice','pihy','piknik','silnice','sirka','sirotek','sirup',
      'situace','sito','sitko','signál','silueta','sifon','šikana','šifra','vidět','vina',
      'vidle','vidlička','viset','viklat','vibrace','vinice','vinař','zima','zimní','zisk',
      'zip','zinek','ziskový','zimostráz','figura','figurína','filmový','filtr','finále','finta',
      'firma','fixace','fialový','fialka','fikus','limonáda','limetka','listina','listopad','libovolný'
    ],
    í: [
      'míč','mísa','míra','mír','mírný','mířit','místo','místní','místnost','mít',
      'bít','bílý','bílá','bílé','bílek','bída','bílit','lípa','lístek','lískový',
      'líčit','líčení','líný','líheň','líbat','líbivý','písek','písečný','píseň','písnička',
      'písmeno','písemný','písař','pískat','pískoviště','pít','síla','sítko','síťka','sídlo',
      'sídliště','síň','síra','sípat','vidím','vítr','víla','víno','vínový','vítěz',
      'vítat','víkend','víra','vířit','zítra','zírat','zívačka','zídka','zítřejší','fík',
      'fíkový','fíkovník','fígl','fíha','fyzík','finální','filípek','sítina','píšťalka','místenka'
    ]
  },

  hard: {
    y: [
      'bystrozraký','bystře','bystrá','bystrost','bylinkář','bylinkový','bydlení','bydlíme','bydleli','obyvací',
      'obyvatelka','obyvatelstvo','neobyčejný','obyčejně','dobyvatel','dobyvatelský','dobyl','nabyvatel','nabytý','pobytný',
      'pobytem','ubytovna','ubytovat','zbyla','zbylo','zbytečný','lyžařský','lyžařka','lyžování','lysinka',
      'lysohlávka','lyžařský','lysý','mlynářský','mlynářův','slyšení','slyšel','slyším','slyšíme','neslyšný',
      'polykání','polykal','polyká','zalykat','vzlykat','plynárna','plynoměr','plynule','plysový','mydlina',
      'myjeme','myji','umyvadlo','umytý','umytí','mylnost','mylný','omylem','pomyslet','vymyslet',
      'vymyšlený','výmysl','průmyslník','hmyzožravý','zamyslet','zamyšlený','zamykání','smykáček','smyknout','pytlovina',
      'pytlácký','pyskatý','pyšně','pyžamo','opylovač','opylení','kopytník','kopytko','třpytivý','třpytit',
      'sypký','sypání','nasypaný','vysypaný','zásyp','přesypat','syrovátka','dosyta','syslí','sykot',
      'vysychat','vysychání','vyučování','vychovat','vychovaný','vycházet','vybraný','vyběhnout','vyhrát','vysledovat',
      'vysavač','vystavit','vyrobit','vyletět','vyletěl','vykonat','vymluvit','vyzvat','vyzývat','jazykolam',
      'jazykový','jazykově','brzy','fyzikální','fyzikář','fyzicky','fyzikářka','ryzost','ryzí','ryzího'
    ],
    ý: [
      'býček','býčího','bývalá','bývalé','bývali','bývalka','obyčejný','býložravec','bystrým','bystrých',
      'lýčený','lýkový','lýtkový','lysým','lyžařský','mlýnský','slyšitelný','plynový','plyšový','mýtnice',
      'mýtný','mýtický','umýt','vymýt','omývat','omývatelný','pomýlený','průmyslový','hlemýžď','pyšný',
      'pyšný','zapýřit','čepýřit','třpytivý','sýrařský','sýrová','sýrové','sýček','sýkorka','výří',
      'výletní','výuční','výukový','výškový','výborně','výherní','výstavní','výtvarný','výrobní','výroční',
      'významný','výživný','výběrový','výmluvný','výkonný','výhodný','výsadba','výpravný','výstražný','výzkumný',
      'nazývat','ozývat','vyzývat','vyzývavý','vzývat','vzývání','přezývka','jazýček','brzký','ryzý'
    ],
    i: [
      'bičík','bicykl','biftek','biskvit','biologie','bibliografie','bitevní','bílina','bílkovina','biloba',
      'bilancovat','blizoučko','blikot','bludiště','limonádový','limetkový','libozvučný','lichoběžník','lilkový','lineární',
      'listina','listopadový','lisovat','liščí','lidový','pianista','pianino','pitomý','pidit','piliny',
      'pilníček','piškotový','pištět','pisatelka','písničkový','pisklavý','pivovarský','pivnice','pivoňkový','pijavice',
      'pihovatý','piknikový','signální','silueta','silný','sirotčinec','sirupový','sitina','situační','sifon',
      'sifonový','šifrovat','viditelný','viditelně','vidlice','vidličkový','visutý','visačka','vinutý','viklat',
      'vibrační','vinice','vinařství','zima','zimnice','zimostráz','ziskový','zipový','zimní','žirafí',
      'fikusový','figurální','filmový','filharmonie','filtrační','finalista','fialový','fintit','firmička','fixační',
      'fiskální','cibulový','citronový','cizokrajný','cizinecký','čiperný','šikovnost','životopis','živitel','jiskřička'
    ],
    í: [
      'bídně','bídák','bílkový','bíložlutý','bít se','bíti se','bílený','bělící','líbání','líbeznost',
      'lístkový','lískovec','lípař','límeček','líčitelný','míčový','mírový','mírnost','mířidlo','místopis',
      'místostarosta','mítink','písemka','písemnictví','pískař','pískomil','píšťalový','pítko','přípis','připít',
      'síťovina','síťový','sídelní','sídlištní','sírový','sílař','sítina','síňový','větřík','větrník',
      'vílí','vínice','vínový','vítězný','vítězka','vítač','víkendový','vířivý','získaný','získávání',
      'zíravý','zítřek','zítřejšek','zídkový','fíková','fíkovník','fíglík','fíha','filípek','finální',
      'fínský','fírový','šípkový','šířka','říční','říkadlo','řízený','číselník','čítanka','čítárna',
      'žíznivý','žíravý','živí','jídelní','jídelníček','jízdní','jíl','nížina','nízko','dílna'
    ]
  }
};

const LEVEL_ORDER = ['easy', 'medium', 'hard'];

function createQuestionBank() {
  const bank = {};
  LEVEL_ORDER.forEach((level, levelIndex) => {
    const merged = LEVEL_ORDER
      .slice(0, levelIndex + 1)
      .flatMap(name => Object.entries(YI_WORDS[name]).flatMap(([answer, words]) => {
        return words.map(word => toQuestion(name, answer, word));
      }));
    bank[level] = dedupeQuestions(merged, level);
  });
  return bank;
}

function toQuestion(level, answer, word) {
  return {
    id: `${level}-${answer}-${slug(word)}`,
    type: 'yi',
    word,
    blank: blankWord(word, answer),
    answer,
    hint: `Správně se píše „${word}“.`
  };
}

function blankWord(word, answer) {
  const index = word.indexOf(answer);
  if (index < 0) return word.replace(/[yýií]/, '_');
  return word.slice(0, index) + '_' + word.slice(index + answer.length);
}

function dedupeQuestions(questions, level) {
  const seen = new Set();
  const out = [];
  questions.forEach((question, index) => {
    const key = question.word.toLocaleLowerCase('cs-CZ') + '|' + question.answer;
    if (seen.has(key)) return;
    seen.add(key);
    out.push({ ...question, id: `${level}-${index}-${slug(question.word)}` });
  });
  return out;
}

function slug(word) {
  return word
    .toLocaleLowerCase('cs-CZ')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
