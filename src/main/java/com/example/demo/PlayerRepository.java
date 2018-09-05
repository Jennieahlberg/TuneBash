package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player,Integer> {
    List<Player> getAllByGameId(int gameid);
    List<Player> getAllByAnswer(String answer);

}
