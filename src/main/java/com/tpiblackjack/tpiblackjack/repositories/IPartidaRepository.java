package com.tpiblackjack.tpiblackjack.repositories;

import com.tpiblackjack.tpiblackjack.models.Partida;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPartidaRepository extends JpaRepository<Partida, Long> {
}
