// File: gexfData.js
const gexfXML = `<gexf><?xml version='1.0' encoding='utf-8'?>
<gexf xmlns="http://www.gexf.net/1.2draft" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.gexf.net/1.2draft http://www.gexf.net/1.2draft/gexf.xsd" version="1.2">
<meta lastmodifieddate="2023-06-29">
  <creator>NetworkX 2.6.3</creator>
</meta>
<graph defaultedgetype="undirected" mode="static" name="">
  <nodes>
    <node id="cause-internal" label="cause-internal" />
    <node id="love" label="love" />
    <node id="anticipation" label="anticipation" />
    <node id="joy" label="joy" />
    <node id="anger" label="anger" />
    <node id="cause-character" label="cause-character" />
    <node id="surprise" label="surprise" />
    <node id="cause-event" label="cause-event" />
    <node id="sadness" label="sadness" />
    <node id="grief" label="grief" />
    <node id="disgust" label="disgust" />
    <node id="awe" label="awe" />
    <node id="envy" label="envy" />
    <node id="acceptance" label="acceptance" />
    <node id="contempt" label="contempt" />
    <node id="admiration" label="admiration" />
    <node id="fear" label="fear" />
    <node id="distraction" label="distraction" />
    <node id="shame" label="shame" />
    <node id="remorse" label="remorse" />
    <node id="terror" label="terror" />
    <node id="rage" label="rage" />
    <node id="ecstasy" label="ecstasy" />
    <node id="despair" label="despair" />
    <node id="amazement" label="amazement" />
    <node id="apprehension" label="apprehension" />
    <node id="hope" label="hope" />
    <node id="pride" label="pride" />
    <node id="serenity" label="serenity" />
    <node id="annoyance" label="annoyance" />
    <node id="trust" label="trust" />
    <node id="vigilance" label="vigilance" />
  </nodes>
  <edges>
    <edge source="cause-internal" target="love" id="0" />
    <edge source="cause-internal" target="anticipation" id="1" />
    <edge source="cause-internal" target="joy" id="2" />
    <edge source="cause-internal" target="anger" id="3" />
    <edge source="cause-internal" target="surprise" id="4" />
    <edge source="cause-internal" target="grief" id="5" />
    <edge source="cause-internal" target="sadness" id="6" />
    <edge source="cause-internal" target="disgust" id="7" />
    <edge source="cause-internal" target="awe" id="8" />
    <edge source="cause-internal" target="envy" id="9" />
    <edge source="cause-internal" target="acceptance" id="10" />
    <edge source="cause-internal" target="contempt" id="11" />
    <edge source="cause-internal" target="admiration" id="12" />
    <edge source="cause-internal" target="fear" id="13" />
    <edge source="cause-internal" target="distraction" id="14" />
    <edge source="cause-internal" target="shame" id="15" />
    <edge source="cause-internal" target="remorse" id="16" />
    <edge source="cause-internal" target="terror" id="17" />
    <edge source="cause-internal" target="rage" id="18" />
    <edge source="cause-internal" target="ecstasy" id="19" />
    <edge source="cause-internal" target="amazement" id="20" />
    <edge source="cause-internal" target="apprehension" id="21" />
    <edge source="cause-internal" target="hope" id="22" />
    <edge source="cause-internal" target="pride" id="23" />
    <edge source="cause-internal" target="serenity" id="24" />
    <edge source="cause-internal" target="despair" id="25" />
    <edge source="cause-internal" target="annoyance" id="26" />
    <edge source="cause-internal" target="trust" id="27" />
    <edge source="cause-internal" target="vigilance" id="28" />
    <edge source="love" target="cause-character" id="29" />
    <edge source="love" target="envy" id="30" />
    <edge source="love" target="surprise" id="31" />
    <edge source="love" target="sadness" id="32" />
    <edge source="love" target="disgust" id="33" />
    <edge source="love" target="joy" id="34" />
    <edge source="love" target="grief" id="35" />
    <edge source="love" target="awe" id="36" />
    <edge source="love" target="anticipation" id="37" />
    <edge source="love" target="anger" id="38" />
    <edge source="love" target="distraction" id="39" />
    <edge source="love" target="shame" id="40" />
    <edge source="love" target="acceptance" id="41" />
    <edge source="love" target="contempt" id="42" />
    <edge source="love" target="fear" id="43" />
    <edge source="love" target="admiration" id="44" />
    <edge source="love" target="cause-event" id="45" />
    <edge source="love" target="terror" id="46" />
    <edge source="love" target="rage" id="47" />
    <edge source="love" target="ecstasy" id="48" />
    <edge source="love" target="remorse" id="49" />
    <edge source="love" target="despair" id="50" />
    <edge source="love" target="vigilance" id="51" />
    <edge source="love" target="trust" id="52" />
    <edge source="love" target="serenity" id="53" />
    <edge source="anticipation" target="envy" id="54" />
    <edge source="anticipation" target="surprise" id="55" />
    <edge source="anticipation" target="sadness" id="56" />
    <edge source="anticipation" target="disgust" id="57" />
    <edge source="anticipation" target="joy" id="58" />
    <edge source="anticipation" target="grief" id="59" />
    <edge source="anticipation" target="awe" id="60" />
    <edge source="anticipation" target="anger" id="61" />
    <edge source="anticipation" target="cause-event" id="62" />
    <edge source="anticipation" target="terror" id="63" />
    <edge source="anticipation" target="rage" id="64" />
    <edge source="anticipation" target="ecstasy" id="65" />
    <edge source="anticipation" target="fear" id="66" />
    <edge source="anticipation" target="remorse" id="67" />
    <edge source="anticipation" target="pride" id="68" />
    <edge source="anticipation" target="despair" id="69" />
    <edge source="anticipation" target="amazement" id="70" />
    <edge source="anticipation" target="hope" id="71" />
    <edge source="anticipation" target="apprehension" id="72" />
    <edge source="anticipation" target="cause-character" id="73" />
    <edge source="anticipation" target="serenity" id="74" />
    <edge source="anticipation" target="annoyance" id="75" />
    <edge source="anticipation" target="contempt" id="76" />
    <edge source="anticipation" target="vigilance" id="77" />
    <edge source="anticipation" target="trust" id="78" />
    <edge source="joy" target="envy" id="79" />
    <edge source="joy" target="surprise" id="80" />
    <edge source="joy" target="sadness" id="81" />
    <edge source="joy" target="disgust" id="82" />
    <edge source="joy" target="grief" id="83" />
    <edge source="joy" target="awe" id="84" />
    <edge source="joy" target="anger" id="85" />
    <edge source="joy" target="cause-character" id="86" />
    <edge source="joy" target="distraction" id="87" />
    <edge source="joy" target="shame" id="88" />
    <edge source="joy" target="acceptance" id="89" />
    <edge source="joy" target="contempt" id="90" />
    <edge source="joy" target="fear" id="91" />
    <edge source="joy" target="admiration" id="92" />
    <edge source="joy" target="cause-event" id="93" />
    <edge source="joy" target="terror" id="94" />
    <edge source="joy" target="rage" id="95" />
    <edge source="joy" target="ecstasy" id="96" />
    <edge source="joy" target="remorse" id="97" />
    <edge source="joy" target="pride" id="98" />
    <edge source="joy" target="despair" id="99" />
    <edge source="joy" target="amazement" id="100" />
    <edge source="joy" target="hope" id="101" />
    <edge source="joy" target="apprehension" id="102" />
    <edge source="joy" target="annoyance" id="103" />
    <edge source="joy" target="serenity" id="104" />
    <edge source="joy" target="vigilance" id="105" />
    <edge source="joy" target="trust" id="106" />
    <edge source="anger" target="envy" id="107" />
    <edge source="anger" target="surprise" id="108" />
    <edge source="anger" target="sadness" id="109" />
    <edge source="anger" target="disgust" id="110" />
    <edge source="anger" target="grief" id="111" />
    <edge source="anger" target="awe" id="112" />
    <edge source="anger" target="distraction" id="113" />
    <edge source="anger" target="shame" id="114" />
    <edge source="anger" target="acceptance" id="115" />
    <edge source="anger" target="contempt" id="116" />
    <edge source="anger" target="fear" id="117" />
    <edge source="anger" target="admiration" id="118" />
    <edge source="anger" target="cause-event" id="119" />
    <edge source="anger" target="terror" id="120" />
    <edge source="anger" target="rage" id="121" />
    <edge source="anger" target="ecstasy" id="122" />
    <edge source="anger" target="remorse" id="123" />
    <edge source="anger" target="cause-character" id="124" />
    <edge source="anger" target="pride" id="125" />
    <edge source="anger" target="despair" id="126" />
    <edge source="anger" target="amazement" id="127" />
    <edge source="anger" target="hope" id="128" />
    <edge source="anger" target="apprehension" id="129" />
    <edge source="anger" target="vigilance" id="130" />
    <edge source="anger" target="trust" id="131" />
    <edge source="anger" target="serenity" id="132" />
    <edge source="cause-character" target="surprise" id="133" />
    <edge source="cause-character" target="sadness" id="134" />
    <edge source="cause-character" target="amazement" id="135" />
    <edge source="cause-character" target="apprehension" id="136" />
    <edge source="cause-character" target="contempt" id="137" />
    <edge source="cause-character" target="admiration" id="138" />
    <edge source="cause-character" target="remorse" id="139" />
    <edge source="cause-character" target="fear" id="140" />
    <edge source="cause-character" target="despair" id="141" />
    <edge source="cause-character" target="trust" id="142" />
    <edge source="cause-character" target="vigilance" id="143" />
    <edge source="cause-character" target="awe" id="144" />
    <edge source="cause-character" target="disgust" id="145" />
    <edge source="surprise" target="envy" id="146" />
    <edge source="surprise" target="sadness" id="147" />
    <edge source="surprise" target="disgust" id="148" />
    <edge source="surprise" target="grief" id="149" />
    <edge source="surprise" target="awe" id="150" />
    <edge source="surprise" target="distraction" id="151" />
    <edge source="surprise" target="shame" id="152" />
    <edge source="surprise" target="acceptance" id="153" />
    <edge source="surprise" target="contempt" id="154" />
    <edge source="surprise" target="fear" id="155" />
    <edge source="surprise" target="admiration" id="156" />
    <edge source="surprise" target="cause-event" id="157" />
    <edge source="surprise" target="terror" id="158" />
    <edge source="surprise" target="rage" id="159" />
    <edge source="surprise" target="ecstasy" id="160" />
    <edge source="surprise" target="remorse" id="161" />
    <edge source="surprise" target="pride" id="162" />
    <edge source="surprise" target="despair" id="163" />
    <edge source="surprise" target="amazement" id="164" />
    <edge source="surprise" target="hope" id="165" />
    <edge source="surprise" target="apprehension" id="166" />
    <edge source="surprise" target="serenity" id="167" />
    <edge source="surprise" target="annoyance" id="168" />
    <edge source="surprise" target="vigilance" id="169" />
    <edge source="surprise" target="trust" id="170" />
    <edge source="cause-event" target="sadness" id="171" />
    <edge source="cause-event" target="fear" id="172" />
    <edge source="cause-event" target="cause-event" id="173" />
    <edge source="cause-event" target="terror" id="174" />
    <edge source="cause-event" target="rage" id="175" />
    <edge source="cause-event" target="ecstasy" id="176" />
    <edge source="cause-event" target="remorse" id="177" />
    <edge source="cause-event" target="despair" id="178" />
    <edge source="cause-event" target="grief" id="179" />
    <edge source="sadness" target="envy" id="180" />
    <edge source="sadness" target="disgust" id="181" />
    <edge source="sadness" target="grief" id="182" />
    <edge source="sadness" target="awe" id="183" />
    <edge source="sadness" target="contempt" id="184" />
    <edge source="sadness" target="fear" id="185" />
    <edge source="sadness" target="admiration" id="186" />
    <edge source="sadness" target="remorse" id="187" />
    <edge source="sadness" target="despair" id="188" />
    <edge source="sadness" target="annoyance" id="189" />
    <edge source="sadness" target="amazement" id="190" />
    <edge source="sadness" target="serenity" id="191" />
    <edge source="sadness" target="apprehension" id="192" />
    <edge source="sadness" target="vigilance" id="193" />
    <edge source="sadness" target="trust" id="194" />
    <edge source="grief" target="envy" id="195" />
    <edge source="grief" target="disgust" id="196" />
    <edge source="grief" target="awe" id="197" />
    <edge source="grief" target="despair" id="198" />
    <edge source="grief" target="vigilance" id="199" />
    <edge source="grief" target="trust" id="200" />
    <edge source="grief" target="fear" id="201" />
    <edge source="grief" target="contempt" id="202" />
    <edge source="grief" target="serenity" id="203" />
    <edge source="disgust" target="envy" id="204" />
    <edge source="disgust" target="awe" id="205" />
    <edge source="disgust" target="distraction" id="206" />
    <edge source="disgust" target="shame" id="207" />
    <edge source="disgust" target="acceptance" id="208" />
    <edge source="disgust" target="contempt" id="209" />
    <edge source="disgust" target="fear" id="210" />
    <edge source="disgust" target="admiration" id="211" />
    <edge source="disgust" target="despair" id="212" />
    <edge source="disgust" target="vigilance" id="213" />
    <edge source="disgust" target="trust" id="214" />
    <edge source="disgust" target="serenity" id="215" />
    <edge source="awe" target="envy" id="216" />
    <edge source="awe" target="contempt" id="217" />
    <edge source="awe" target="fear" id="218" />
    <edge source="awe" target="admiration" id="219" />
    <edge source="awe" target="remorse" id="220" />
    <edge source="awe" target="despair" id="221" />
    <edge source="awe" target="vigilance" id="222" />
    <edge source="awe" target="trust" id="223" />
    <edge source="awe" target="serenity" id="224" />
    <edge source="acceptance" target="distraction" id="225" />
    <edge source="acceptance" target="shame" id="226" />
    <edge source="acceptance" target="contempt" id="227" />
    <edge source="acceptance" target="fear" id="228" />
    <edge source="acceptance" target="admiration" id="229" />
    <edge source="contempt" target="distraction" id="230" />
    <edge source="contempt" target="shame" id="231" />
    <edge source="contempt" target="fear" id="232" />
    <edge source="contempt" target="admiration" id="233" />
    <edge source="contempt" target="remorse" id="234" />
    <edge source="contempt" target="despair" id="235" />
    <edge source="contempt" target="annoyance" id="236" />
    <edge source="contempt" target="amazement" id="237" />
    <edge source="contempt" target="serenity" id="238" />
    <edge source="contempt" target="apprehension" id="239" />
    <edge source="contempt" target="vigilance" id="240" />
    <edge source="contempt" target="trust" id="241" />
    <edge source="admiration" target="distraction" id="242" />
    <edge source="admiration" target="shame" id="243" />
    <edge source="admiration" target="fear" id="244" />
    <edge source="admiration" target="remorse" id="245" />
    <edge source="fear" target="distraction" id="246" />
    <edge source="fear" target="shame" id="247" />
    <edge source="fear" target="terror" id="248" />
    <edge source="fear" target="rage" id="249" />
    <edge source="fear" target="ecstasy" id="250" />
    <edge source="fear" target="remorse" id="251" />
    <edge source="fear" target="pride" id="252" />
    <edge source="fear" target="despair" id="253" />
    <edge source="fear" target="amazement" id="254" />
    <edge source="fear" target="hope" id="255" />
    <edge source="fear" target="apprehension" id="256" />
    <edge source="fear" target="serenity" id="257" />
    <edge source="fear" target="annoyance" id="258" />
    <edge source="fear" target="vigilance" id="259" />
    <edge source="fear" target="trust" id="260" />
    <edge source="distraction" target="shame" id="261" />
    <edge source="remorse" target="terror" id="262" />
    <edge source="remorse" target="rage" id="263" />
    <edge source="remorse" target="ecstasy" id="264" />
    <edge source="terror" target="rage" id="265" />
    <edge source="terror" target="ecstasy" id="266" />
    <edge source="terror" target="serenity" id="267" />
    <edge source="terror" target="apprehension" id="268" />
    <edge source="rage" target="ecstasy" id="269" />
    <edge source="despair" target="pride" id="270" />
    <edge source="despair" target="amazement" id="271" />
    <edge source="despair" target="hope" id="272" />
    <edge source="despair" target="apprehension" id="273" />
    <edge source="despair" target="annoyance" id="274" />
    <edge source="despair" target="serenity" id="275" />
    <edge source="despair" target="vigilance" id="276" />
    <edge source="despair" target="trust" id="277" />
    <edge source="amazement" target="pride" id="278" />
    <edge source="amazement" target="hope" id="279" />
    <edge source="amazement" target="apprehension" id="280" />
    <edge source="amazement" target="annoyance" id="281" />
    <edge source="amazement" target="serenity" id="282" />
    <edge source="apprehension" target="pride" id="283" />
    <edge source="apprehension" target="hope" id="284" />
    <edge source="apprehension" target="serenity" id="285" />
    <edge source="apprehension" target="annoyance" id="286" />
    <edge source="hope" target="pride" id="287" />
    <edge source="serenity" target="annoyance" id="288" />
    <edge source="serenity" target="vigilance" id="289" />
    <edge source="serenity" target="trust" id="290" />
    <edge source="trust" target="vigilance" id="291" />
  </edges>
</graph>
  </gexf>`;

export default gexfXML;
