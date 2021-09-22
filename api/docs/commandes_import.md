Commandes:
```
sqitch deploy &&
psql -U postgres -d lbf -f ./data/importFakeData.sql && 
psql -U postgres -d lbf -f ./data/dummyData/importUser.sql && 
psql -U postgres -d lbf -f ./data/dummyData/importEvent.sql && 
psql -U postgres -d lbf -f ./data/dummyData/importEventHasTag.sql && 
psql -U postgres -d lbf -f ./data/dummyData/importUserLearnLanguage.sql && 
psql -U postgres -d lbf -f ./data/dummyData/importUserSpeakLanguage.sql && 
psql -U postgres -d lbf -f ./data/dummyData/importUserParticipateEvent.sql
```

Pour lancer la commande sans copier coller dans le terminal:
```bash
createdb lbf
dbinit
```

Le ``dbInit`` est effectué grace à la dépendance shelljs