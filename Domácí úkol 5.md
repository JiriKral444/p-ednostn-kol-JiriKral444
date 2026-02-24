Návrh algoritmu (Domácí úkol 5)

Tento algoritmus rozšiřuje předchozí generátor zaměstnanců o modul statistické analýzy křestních jmen v závislosti na pohlaví a pracovním úvazku.


1. Deklarace a inicializace

    Vstup (dtoIn): Objekt obsahující počet zaměstnanců (count) a rozsah věku (age.min, age.max).

    Výstup (dtoOut): Objekt obsahující mapy četnosti jmen a pole dat pro grafy.



2. Hlavní proces (Funkce main)

    Validace: Ověření, zda jsou vstupní data dtoIn korektní (čísla, logické rozsahy věku).

    Generování: Volání funkce generateEmployeeData s parametry z dtoIn.

    Analýza: Volání funkce getEmployeeChartContent s vygenerovaným seznamem zaměstnanců.

    Návrat: Funkce vrátí finální objekt dtoOut.



3. Funkce: generateEmployeeData (Logika generování)

Tato část zajišťuje vytvoření pole objektů představujících zaměstnance.

    Pro každého zaměstnance (iterace 0 až count):

        Náhodně urči pohlaví (male/female).

        Vyber náhodné jméno a příjmení z příslušné sady podle zvoleného pohlaví.

        Vypočítej náhodné datum narození (birthdate) tak, aby odpovídalo věkovému rozmezí min až max. Formátuj jako ISO řetězec.

        Přiřaď náhodný pracovní úvazek z hodnot: 10, 20, 30 nebo 40 hodin.

        Ulož objekt zaměstnance do pole.



4. Funkce: getEmployeeChartContent (Logika analýzy)

Tato část provádí agregaci dat do pěti sledovaných kategorií:

    Všichni zaměstnanci (all): Četnost jmen bez ohledu na věk či pohlaví.

    Ženy (female): Četnost jmen pouze u zaměstnanců s pohlavím "female".

    Muži (male): Četnost jmen pouze u zaměstnanců s pohlavím "male".

    Ženy na zkrácený úvazek (femalePartTime): Zaměstnanci s pohlavím "female" a úvazkem 10, 20 nebo 30 hodin týdně.

    Muži na plný úvazek (maleFullTime): Zaměstnanci s pohlavím "male" a úvazkem 40 hodin týdně.

Technický postup:

    Vytvoř prázdné objekty (mapy) pro každou kategorii.

    Procházej seznam zaměstnanců a pro každé jméno inkrementuj počítadlo v příslušných mapách, pokud zaměstnanec splňuje kritéria kategorie.

    Po dokončení průchodu transformuj tyto mapy (objekty) do polí objektů typu { label: jméno, value: počet } pro potřeby sekce chartData.



5. Struktura výsledných dat (dtoOut)

Výsledný objekt je rozdělen na dvě hlavní větve:

    names: Obsahuje klíče pro každou kategorii, kde hodnotou je objekt (např. {"Jan": 5}).

    chartData: Obsahuje stejné kategorie, ale data jsou uložena v poli pro snadné vykreslení grafů (např. [{label: "Jan", value: 5}]).






*******************************************************************************************************************

Algoritmus zpracování dat přehed-- Generování a Analýzu.,,

Fáze	                    Činnost	                                    Klíčové kroky
1. Příprava	                Vstup (dtoIn)	                            Definice počtu osob (count) a věkového rozmezí (min/max).
2. Generování	            Iterace (Smyčks)	                        Proběhne tolikrát, kolik je nastaveno v count.
	                        Určení pohlaví	                            Náhodný výběr (50/50) mezi "male" a "female".
	                        Výpočet věku	                            Vygenerování náhodného data narození v zadaném rozmezí.
	                        Přiřazení jména	                            Náhodný výběr jména a příjmení z polí podle zvoleného pohlaví.
	                        Pracovní úvazek	                            Náhodné přiřazení hodnoty (10, 20, 30 nebo 40h).
3. Analýza	                Třídění (Stats)	                            Procházení vygenerovaného seznamu a počítání výskytů jmen.
	                        Kategorizace	                            Rozdělení jmen do skupin (všichni, muži, ženy, ženy na part-time, muži na full-time).
4. Formátování	            Transformace	                            Převod objektů s počty (mapy) na pole objektů {label, value} pro grafy.
5. Výstup	                Finální JSON	                            Vrácení objektu obsahujícího surová statistická data i data připravená pro graf.

********************************************************************************************************************








Kontrolní seznam pro návrh algoritmu (List: Domácí úkol 5)

Oblast	                        Kontrolní bod	                                
Struktura funkcí	

                                Je popsáno volání funkce generateEmployeeData 
                                a následně getEmployeeChartContent uvnitř main?
	
Vstupní data	

                                Počítá algoritmus s dtoIn obsahujícím 
                                count a objekt age s min a max?
	
Kategorie (Ženy)	

                                Obsahuje algoritmus logiku pro filtraci
                                 žen na zkrácený úvazek (10, 20, 30h)?
	
Kategorie (Muži)	

                                Obsahuje algoritmus logiku pro 
                                filtraci mužů na plný úvazek (40h)?
	
Formát dat	

                                Je specifikováno, že birthdate musí být v 
                                ISO formátu a gender jen "male"/"female"?
	
Výstupní data	

                                Odpovídá popis struktuře dtoOut
                                 s klíči names a chartData?
	
Transformace	

                                Je vysvětleno, jak se z mapy četnosti (objektu) 
                                stanou data pro grafy (pole s label a value)?
	
Srozumitelnost	

                                Je algoritmus zapsán jasně a stručně (přehlednost)?