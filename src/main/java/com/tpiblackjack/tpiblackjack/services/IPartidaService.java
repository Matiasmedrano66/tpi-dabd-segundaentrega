package com.tpiblackjack.tpiblackjack.services;

import com.tpiblackjack.tpiblackjack.models.Partida;

public interface IPartidaService {

    void savePartida(Partida partida);

    Partida findById(Long id);

    void updatePartida(Partida partida);
}
