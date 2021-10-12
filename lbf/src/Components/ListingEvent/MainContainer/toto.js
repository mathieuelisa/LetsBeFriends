{ dataComingEvents == null ? <><p>Tu n'as pas d'évènements à venir</p></> : 'Tata' }
 {(pastEvents && dataPastEvents.length > 0) ? 'Toto' : ""    }

                            {askings && askingList.participants ? 'Tutu' : "sbeul" }








                            { dataComingEvents == null ? <><p>Tu n'as pas d'évènements à venir</p></> : <>{comingSoonEvents && dataComingEvents?.map((event) => (
                                <EventCardMyEvents 
                                    key={event.id} 
                                    title={event.title}
                                    imgUrl={event.imgUrl}
                                    description={event.description}
                                    textConfig="profil__container-resultsForm-text"
                                    classNameCard={ (event.ownerId == infosUser.id) ? "profil__container-resultsForm--myEvent ": "profil__container-resultsForm"}
                                    eventDateStart={event.startingDate.slice(0,10)}
                                    eventHourStart={event.startingDate.slice(11,16)}
                                    eventDateEnd={event.endingDate.slice(0,10)}
                                    eventHourEnd={event.endingDate.slice(11,16)}
                                    placesLeft={event.placesLeft}
                                    image={ (event.ownerId == infosUser.id) ? Couronne : ""}
                                    imageConfiguration="profil__container-resultsForm-image"
                                />
                            ))
                        }</>}

                { (pastEvents && dataPastEvents.length) && dataPastEvents.map((event) => (
                                <EventCardMyEvents 
                                    key={event.id} 
                                    title={"Pasts events"}
                                    imgUrl={event.imgUrl}
                                    textConfig="profil__container-resultsForm-text"
                                    classNameCard="profil__container-resultsForm"
                                    eventDateStart={event.startingDate.slice(0,10)}
                                    eventHourStart={event.startingDate.slice(11,16)}
                                    eventDateEnd={event.endingDate.slice(0,10)}
                                    eventHourEnd={event.endingDate.slice(11,16)}
                                    placesLeft={event.placesleft}
                                />
                            ))
                        }

                {askings && askingList.participants.map((participant) => (
                        <ParticipateRequest 
                            key={participant.id} 
                            firstname={participant.firstname}
                            email={participant.email}
                            gender={participant.gender}
                            lastname={participant.lastname}
                            description={participant.description}
                            title={participant.title[0]}
                            imgUrl={participant.imgUrl}
                            classNameDescription="profil__container-resultsForm-description"
                            textConfig="profil__container-resultsForm-text"
                            classNameCard="profil__container-resultsForm"
                            classNameInfos="profil__container-resultsForm-displayInfos"
                        />
                        
                    ))
                }