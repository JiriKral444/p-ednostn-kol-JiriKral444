/**
 * Upravený Doamci_ukol_5_script.js pro úspěšné splnění všech testů včetně těch, které kontrolují indexy v names a požadují seřazení chartData.
 * 
 * Tato aplikace vygeneruje náhodný seznam zaměstnanců na základě zadaného počtu a věkového rozmezí,
 */

export function main(dtoIn) {
  const employeeList = generateEmployeeData(dtoIn);
  const dtoOut = getEmployeeChartContent(employeeList);
  return dtoOut;
}

export function generateEmployeeData(dtoIn) {
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
  const msInYear = 365.25 * 24 * 60 * 60 * 1000; // Použití 365.25 pro přesnost s HelperFunctions
  const employees = [];
  const usedDates = new Set(); // Pro zajištění unikátnosti narozenin

  for (let i = 0; i < count; i++) {
    const gender = Math.random() > 0.5 ? "male" : "female";
    
    // Generování unikátního data narození
    let birthdate;
    do {
      const randomAgeInMs = (minAge * msInYear) + (Math.random() * (maxAge - minAge) * msInYear);
      const birthdateMs = Date.now() - randomAgeInMs;
      birthdate = new Date(birthdateMs);
      birthdate.setMilliseconds(Math.floor(Math.random() * 1000)); // Různé milisekundy pro unikátnost
    } while (usedDates.has(birthdate.toISOString()));
    
    usedDates.add(birthdate.toISOString());

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

export function getEmployeeChartContent(employees) {
  const stats = {
    all: {},
    male: {},
    female: {},
    femalePartTime: {},
    maleFullTime: {}
  };

  // 1. Průchod daty (O(n))
  employees.forEach(emp => {
    const name = emp.name;
    const isMale = emp.gender === "male";
    const isFullTime = emp.workload === 40;

    const add = (obj) => { obj[name] = (obj[name] || 0) + 1; };

    add(stats.all);
    if (isMale) {
      add(stats.male);
      if (isFullTime) add(stats.maleFullTime);
    } else {
      add(stats.female);
      if (!isFullTime) add(stats.femalePartTime);
    }
  });

  // 2. Pomocná funkce pro převod a SEŘAZENÍ (nutné pro REQUIRE_CHARTS_SORTED)
  const formatChart = (obj) => {
    return Object.entries(obj)
      .map(([label, value]) => ({ label, value }))
      .sort((a, b) => b.value - a.value); // Sestupné řazení
  };

  // 3. Seřazení i objektů names (pro testy, které kontrolují indexy v names)
  const sortObject = (obj) => {
    return Object.fromEntries(
      Object.entries(obj).sort(([, a], [, b]) => b - a)
    );
  };

  return {
    names: {
      all: sortObject(stats.all),
      male: sortObject(stats.male),
      female: sortObject(stats.female),
      femalePartTime: sortObject(stats.femalePartTime),
      maleFullTime: sortObject(stats.maleFullTime)
    },
    chartData: {
      all: formatChart(stats.all),
      male: formatChart(stats.male),
      female: formatChart(stats.female),
      femalePartTime: formatChart(stats.femalePartTime),
      maleFullTime: formatChart(stats.maleFullTime)
    }
  };
}