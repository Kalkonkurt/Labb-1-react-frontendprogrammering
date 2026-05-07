ProcrastiNot is a single page web application created with Typeacript and React and styled with Material UI.

I have used the open API [DummyJSON](https://dummyjson.com/docs/todos) for all todo-related requests.

GET - Fetches all todos on page load
POST - Creates a new todo via the Add Todo form
PUT - Updates a todo (mark as done/undone, edit text)
DELETE - Deletes a todo

It's a simple Todo page where you can view all todos separated if they are completed or not.

What you can do:
Mark them done and they will move to the done todos.
Edit and update an existing todo.
Delete a todo.
Add a todo at the navbar 'Add Todo' where you can submit a new todo with a form.
Sort by: all or a-z.

Vad innebär det att en webbplats är tillgänglig?

Den ska vara lätt att snabbt förstå syftet med den, att den ska vara lätt att navigera, text ska vara lättläst med kontrasterande bakgrund och tillräckligt stor textstorlek med responsiv design. Den bör även vara anpassad efter olika hjälpmedel, kunna navigeras med tab, följa god semantik och bilder ska ha attribut om de t.ex inte laddas in. Om sidan läses upp bör det vara enkelt att skippa t.ex. navbaren och hoppa direkt till contenten.

Varför är tillgänglighet viktig vid utveckling av webbapplikationer?

Det är viktigt eftersom att det numera är lag på att de behöver vara tillgängliga.
Det inkluderar betydligt många fler att kunna använda sidan, både funktionshindrare och tillfälligt funktionshindrade, gamla och unga men det underlättar även för de utan funktionsnesättning om sidan är lättnavigerad med tydlig struktur och kontraster.

God SEO förbättrar även träffar och ranking i olka sökmotorer.

En hemsida kan fungera som ansiktet utåt för ett företag, det är ett sätt att signalera att de är inkluderande, en svårnavigerad sida kan ge ett dåligt intryck bland användarna, det är ett sätt för företaget att kommunicera med sina användare.

Det är också billigare att göra en hemsida tillgänglig för första början än att behöva implementera det i efterhand.

Ge tre konkreta exempel på hur ni kan göra en React-applikation mer tillgänglig.

1. God semantik, använda rätt element för rätt innehåll istället för t.ex div så att skärmläsare förstår strukturen.

2. Responsiv design, layout, text eller bilder överlappar inte eller försvinner utan anpassar sig på olika skärmstorlekar och enheter även om man zoomar in eller ut.

3. Ha tillräckligt mycket färgkontrast, det går t.ex att dubbelkolla på nätet. Använd inte heller enbart färg för att förmedla en status eller annan infomration. det borde även inkludera en beskrivande text.
