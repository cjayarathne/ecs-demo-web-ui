FROM java:7
WORKDIR /ecs-demo-web-ui/complete

RUN curl -O http://repo.spring.io/release/org/springframework/boot/spring-boot-cli/1.1.4.RELEASE/spring-boot-cli-1.1.4.RELEASE-bin.tar.gz

RUN tar -xvf *.gz

RUN rm -rf *.gz

ENV SPRING_HOME /ecs-demo-web-ui/complete/spring-1.1.4.RELEASE

ENV PATH $SPRING_HOME/bin:$PATH

# Pull project
RUN git clone https://github.com/cjayarathne/ecs-demo-web-ui.git
ADD app.groovy  /ecs-demo-web-ui/complete/app.groovy
ADD public /ecs-demo-web-ui/complete/public

CMD ["spring", "run","app.groovy"]
EXPOSE 8080