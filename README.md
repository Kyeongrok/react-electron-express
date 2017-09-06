#제품 가격 정보 크롤러

## 요구사항
다음 5개 사이트
[digitec](https://www.interdiscount.ch/idshop/eneCategory/de/detail.jsf?&No=128&erecs_limit=0&ene_dnr=&ene_udp=true)
, [interdiscount](https://www.interdiscount.ch/idshop/eneCategory/de/detail.jsf?&No=128&erecs_limit=0&ene_dnr=&ene_udp=true)
, [melectronics](http://www.melectronics.ch/c/de/TV_%26_Audio/Fernseher/)
, [mediamarkt](https://vision.mediamarkt.ch/de/fernseher/idk7qvmngjwg)
, [conforama](http://www.conforama.ch/rayon3_high-tech_tv--video---home-cinema_televisions-led_10051_10601_-16_42073_42119_42110)
의 날짜, 시간, 가격, 세일가격(있으면), 제품명을 추출해서 각 사이트의 버튼을 누르면 데이터가 웹 페이지에 출력되게 한다.

### 개발 하는 방법
* alt + f11에서 build menu가 나온다.
* dev - 개발용 electron + server를 띄움
* server - 서버만 실행한다

### 크롤링 하는 방법

1.digitec
<pre>
300개 콜 한다.
</pre>

2.interdiscount
<pre>
1페이지 ~ n페이지의 response가 없을때까지 call한다.
11개 기준
페이지당 8개 제품인것으로 보인다.
</pre>

3.melectronics

4.mediamarkt

5.conforama

