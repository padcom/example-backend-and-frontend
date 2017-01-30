#!/bin/sh

mvn -B gitflow:release-start
mvn clean deploy
mvn -B gitflow:release-finish
