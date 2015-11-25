FROM java:7

RUN curl -O http://repo.spring.io/release/org/springframework/boot/spring-boot-cli/1.1.4.RELEASE/spring-boot-cli-1.1.4.RELEASE-bin.tar.gz 

RUN tar -xvf *.gz

RUN rm -rf *.gz

ENV SPRING_HOME /data/spring-1.1.4.RELEASE

ENV PATH $SPRING_HOME/bin:$PATH

EXPOSE 8080
CMD ["spring", "run", "app.groovy"]