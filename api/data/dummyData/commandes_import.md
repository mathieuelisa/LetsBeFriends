'''
sqitch deploy &&
psql -U postgres -d lbf -f ./data/importFakeData.sql && 
psql -U postgres -d lbf -f ./data/dummyData/importUser.sql && 
psql -U postgres -d lbf -f ./data/dummyData/importEvent.sql && 
psql -U postgres -d lbf -f ./data/dummyData/importEventHasTag.sql && 
psql -U postgres -d lbf -f ./data/dummyData/importUserLearnLanguage.sql && 
psql -U postgres -d lbf -f ./data/dummyData/importUserSpeakLanguage.sql && 
psql -U postgres -d lbf -f ./data/dummyData/importUserParticipateEvent.sql
'''

psql -U postgres -d Test -f ./data/importFakeData.sql && 
psql -U postgres -d Test -f ./data/dummyData/importUser.sql && 
psql -U postgres -d Test -f ./data/dummyData/importEvent.sql && 
psql -U postgres -d Test -f ./data/dummyData/importEventHasTag.sql && 
psql -U postgres -d Test -f ./data/dummyData/importUserLearnLanguage.sql && 
psql -U postgres -d Test -f ./data/dummyData/importUserSpeakLanguage.sql && 
psql -U postgres -d Test -f ./data/dummyData/importUserParticipateEvent.sql