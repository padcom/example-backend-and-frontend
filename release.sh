#!/bin/sh

mvn -B gitflow:release-start
mvn clean deploy -P release
mvn -B gitflow:release-finish
