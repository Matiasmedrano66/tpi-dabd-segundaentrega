package com.tpiblackjack.tpiblackjack.services;

import com.tpiblackjack.tpiblackjack.models.Partida;
import com.tpiblackjack.tpiblackjack.repositories.IPartidaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PartidaService implements IPartidaService{

    @Autowired
    private IPartidaRepository _partidaRepo;


    @Override
    public void savePartida(Partida partida) {
        _partidaRepo.save(partida);
    }

    @Override
    public Partida findById(Long id) {
        return _partidaRepo.findById(id).orElse(null);
    }

    @Override
    public void updatePartida(Partida partida) {
        _partidaRepo.save(partida);
    }

}
