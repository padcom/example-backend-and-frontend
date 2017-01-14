#!/bin/sh

#
# Forego: https://dl.equinox.io/ddollar/forego/stable
#

# Install springloaded to get automatic class reloading
mvn dependency:get -DgroupId=org.springframework -DartifactId=springloaded -Dversion=1.2.6.RELEASE

# Build the project
mvn install

# Run the project
forego start
