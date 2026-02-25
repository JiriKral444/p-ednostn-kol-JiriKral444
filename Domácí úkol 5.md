
Návrh algoritmu: Statistika jmen zaměstnanců (Domácí úkol 5)



1. Vstupní data (dtoIn)

    count: Požadovaný počet generovaných zaměstnanců (celé číslo).

    age: Objekt obsahující min a max pro věkové rozmezí.




2. Hlavní proces (Funkce main)

    Krok 1: Přijme konfigurační objekt dtoIn.

    Krok 2: Zavolá funkci generateEmployeeData pro vytvoření pole náhodných zaměstnanců.

    Krok 3: Vygenerované pole předá funkci getEmployeeChartContent k analýze.

    Krok 4: Vrátí výsledný objekt dtoOut.




3. Logika generování dat (generateEmployeeData)

    Inicializuje prázdné pole employees a pomocnou množinu usedDates pro zajištění unikátnosti.

    V cyklu běžícím count-krát provede:

        Náhodný výběr pohlaví (male/female).

        Výběr jména a příjmení z příslušných polí podle pohlaví.

          Výpočet data narození: Vygeneruje náhodný časový údaj v milisekundách odpovídající rozmezí min až max let.

        Zajištění unikátnosti: Pokud již ISO řetězec vygenerovaného data v usedDates existuje, generování pro daný záznam opakuje.

        Náhodně přiřadí hodnotu úvazku z možností [10, 20, 30, 40].

        Vloží objekt zaměstnance do pole.






4. Statistická analýza a transformace (getEmployeeChartContent)

    Agregace (O(n)): Jedním průchodem polem zaměstnanců inkrementuje počítadla jmen v pěti kategoriích:

        all: Všechna jména.

        male / female: Jména rozdělená poddle pohlaví.

        femalePartTime: Ženy s úvazkem 10, 20 nebo 30 hodin.

        maleFullTime: Muži s úvazkem 40 hodin.

    Transformace a řazení:

        Pro každou kategorii vytvoří mapu četnosti (names).

        Každou mapu převede na pole objektů { label, value } pro grafy (chartData).

        Klíčový krok: Všechny výstupy (objekty i pole) seřadí sestupně podle hodnoty value (četnosti).







5.  S truktura Výstupní data (dtoOut)

    Vrací objekt se dvěma hlavními atributy:

        names: Obsahuje 5 objektů s četností jmen (klíč = jméno, hodnota = počet).

        chartData: Obsahuje 5 polí připravených pro vizualizaci v grafech.














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