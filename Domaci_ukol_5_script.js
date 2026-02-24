/**
 * Zadani domácího úkolu 05 - Statistika jmen zaměstnanců
 * 
 * Tento skript generuje seznam zaměstnanců s náhodnými jmény, pohlavím, datem narození a pracovním úvazkem.
 * 
 * --soubor-popis ukolu--
 * BSDE 2025 Summer Zadání domácí úkol _ homework assignment 05.pdf
 * 
 * *************************************************************************************************************************************
 * 
 * Hlavní funkce (main) - vstupní bod programu
 * @param {{ count: number, age: { min: number, max: number } }} dtoIn
 * @returns {Object} dtoOut se statistikami jmeny
 */
function main(dtoIn) {
  // 1. Generování dat (využívá logiku z úkolu 03)
  const employeeList = generateEmployeeData(dtoIn);

  // 2. Zpracování statistik jmen
  const dtoOut = getEmployeeChartContent(employeeList);

  return dtoOut;
}

/**
 * Funkce prro generování seznamu zaměstnanců
 * 
 */
function generateEmployeeData(dtoIn) {
  const { count, age } = dtoIn;
  const { min: minAge, max: maxAge } = age;

  const names = {
    male: ["Jan", "Petr", "Pavel", "Tomáš", "Jiří", "Martin", "Lukáš", "Michal", "Ondřej", "Jakub", "Filip", "Adam", "Josef"],
    female: ["Jana", "Eva", "Anna", "Tereza", "Kateřina", "Lucie", "Adéla", "Veronika", "Nikola", "Eliška", "Kristýna", "Karolína", "Aneta", "Jiřina"]
  };

  const surnames = {
    male: ["Novák", "Svoboda", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý", "Horák", "Němec", "Marek", "Pospíšil", "Jelínek"],
    female: ["Nováková", "Svobodová", "Dvořáková", "Černá", "Procházková", "Kučerová", "Veselá", "Horáková", "Němcová", "Marková", "Pospíšilová", "Jelínková"]
  };

  const workloads = [10, 20, 30, 40];
  const msInYear = 365.2425 * 24 * 60 * 60 * 1000;
  const employees = [];

  for (let i = 0; i < count; i++) {
    const gender = Math.random() > 0.5 ? "male" : "female";
    const now = new Date();
    const randomTime = now.getTime() - (minAge * msInYear + Math.random() * (maxAge - minAge) * msInYear);
    const birthdate = new Date(randomTime);
    birthdate.setUTCHours(0, 0, 0, 0);

    employees.push({
      gender: gender,
      birthdate: birthdate.toISOString(),
      name: names[gender][Math.floor(Math.random() * names[gender].length)],
      surname: surnames[gender][Math.floor(Math.random() * surnames[gender].length)],
      workload: workloads[Math.floor(Math.random() * workloads.length)]
    });
  }
  return employees;
}

/**
 * Funkce pro zjištění četnosti jmen dle kategorií
 * @param {Array} employees Seznam zaměstnanců
 * @returns {Object} Strukturovaná statistika (dtoOut)
 */
function getEmployeeChartContent(employees) {
  // Inicializace strukturt pro počítání (mapy)
  const stats = {
    all: {},
    male: {},
    female: {},
    femalePartTime: {},
    maleFullTime: {}
  };

  employees.forEach(emp => {
    const name = emp.name;
    const isMale = emp.gender === "male";
    const isFullTime = emp.workload === 40;
    const isPartTime = [10, 20, 30].includes(emp.workload);

    // Pomocná funkce pro inkrementaci v objektu
    const add = (obj) => { obj[name] = (obj[name] || 0) + 1; };

    add(stats.all); [cite: 9]
    if (isMale) {
      add(stats.male); [cite: 11]
      if (isFullTime) add(stats.maleFullTime); [cite: 13]
    } else {
      add(stats.female); [cite: 10]
      if (isPartTime) add(stats.femalePartTime); [cite: 12]
    }
  });

  // Převod mapss na pole objektů (chartData)
  const formatChart = (obj) => Object.entries(obj).map(([label, value]) => ({ label, value }));

  return {
    names: {
      all: stats.all,
      male: stats.male,
      female: stats.female,
      femalePartTime: stats.femalePartTime,
      maleFullTime: stats.maleFullTime
    },
    chartData: {
      all: formatChart(stats.all),
      male: formatChart(stats.male),
      female: formatChart(stats.female),
      femalePartTime: formatChart(stats.femalePartTime),
      maleFullTime: formatChart(stats.maleFullTime)
    }
  }; [cite: 31, 39]
}

// TESTt
const dtoIn = { count: 50, age: { min: 19, max: 35 } }; [cite: 20]
console.log(JSON.stringify(main(dtoIn), null, 2));