package com.example.tests;

import com.thoughtworks.selenium.*;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;
import java.util.regex.Pattern;

public class Funktsionaalsus {
	private Selenium selenium;

	@Before
	public void setUp() throws Exception {
		selenium = new DefaultSelenium("localhost", 4444, "*chrome", "http://127.0.0.1:8888/evalimine.html?gwt.codesvr=127.0.0.1:9999#/esileht");
		selenium.start();
	}

	@Test
	public void testFunktsionaalsus() throws Exception {
		selenium.open("/");
		assertEquals("T‰helepanu! Antud rakendus ei ole mıeldud kasutamiseks reaalsetel valimistel.", selenium.getText("css=p"));
		assertEquals("Rakenduses realiseeritud e-valimiste n‰ide on realiseeritud tehnoloogiate praktiseerimise eesm‰rgil ning ei ole mıeldud reaalsete e-valimiste korraldamiseks. \n Kokkulangevused reaalse e-valimiste protsessiga on juhuslikud.", selenium.getText("css=#jalus > p"));
		selenium.click("link=Kandidaadid");
		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if (selenium.isElementPresent("css=#kandidaadid > h3")) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}

		selenium.click("id=candSearch");
		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if (selenium.isElementPresent("css=#candHeading > h3")) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}

		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if (selenium.isElementPresent("xpath=(//button[@type='button'])[7]")) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}

		selenium.select("id=areas", "label=Tallinna Kesklinna, Lasnam‰e ja Pirita linnaosa");
		selenium.click("id=candSearch");
		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if ("Isikukood".equals(selenium.getTable("css=table.candidateTable.0.2"))) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}

		assertEquals("PU", selenium.getText("//div[@id='list']/table/tbody/tr[2]/td[5]"));
		selenium.select("id=areas", "label=--Palun vali oma valimisringkond--");
		selenium.select("id=partyID", "label=Sinised");
		selenium.click("id=candSearch");
		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if ("Piirkond".equals(selenium.getTable("css=table.candidateTable.0.2"))) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}

		assertEquals("Tallinna Mustam‰e ja Nımme linnaosa", selenium.getText("//div[@id='list']/table/tbody/tr[2]/td[3]"));
		selenium.select("id=partyID", "label=--Palun vali oma erakond--");
		selenium.type("id=searcharea", "nime");
		selenium.click("id=candSearch");
		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if ("Erakonna nimi".equals(selenium.getTable("css=table.candidateTable.0.4"))) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}

		assertEquals("Sinised", selenium.getText("//div[@id='list']/table/tbody/tr[2]/td[5]"));
		selenium.type("id=searcharea", "");
		selenium.select("id=areas", "label=Tartu linn");
		selenium.select("id=partyID", "label=Punased");
		selenium.click("id=candSearch");
		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if ("Isikukood".equals(selenium.getTable("css=table.candidateTable.0.2"))) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}

		assertEquals("39393939393", selenium.getText("//div[@id='list']/table/tbody/tr[2]/td[3]"));
		selenium.select("id=partyID", "label=--Palun vali oma erakond--");
		selenium.type("id=searcharea", "Masso");
		selenium.click("id=candSearch");
		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if ("Erakonna nimi".equals(selenium.getTable("css=table.candidateTable.0.3"))) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}

		assertEquals("PU", selenium.getText("//div[@id='list']/table/tbody/tr[2]/td[5]"));
		selenium.select("id=areas", "label=--Palun vali oma valimisringkond--");
		selenium.select("id=partyID", "label=Punased");
		selenium.click("id=candSearch");
		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if ("Piirkond".equals(selenium.getTable("css=table.candidateTable.0.2"))) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}

		assertEquals("Tartu linn", selenium.getText("//div[@id='list']/table/tbody/tr[2]/td[3]"));
		selenium.select("id=areas", "label=Tartu linn");
		selenium.click("id=candSearch");
		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if ("Info".equals(selenium.getTable("css=table.candidateTable.1.3"))) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}

		assertEquals("Info", selenium.getText("css=button.button"));
		selenium.click("css=button.button");
		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if ("Kandidaadi info".equals(selenium.getText("css=#candHeading > h3"))) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}

		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if ("Isiku (isiku)kood".equals(selenium.getTable("css=table.candidateInfo.0.0"))) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}

		assertEquals("36", selenium.getText("//div[@id='list']/table/tbody/tr[13]/td"));
		selenium.click("link=KKK");
		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if ("Korduma kippuvad k¸simused".equals(selenium.getText("css=#kkk > h1"))) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}

		assertEquals("Hetkel on vıimalik kasutada ainult Google Chrome'i ja Mozilla Firefoxi uusimaid versioone.", selenium.getText("css=#kkk > ul > li"));
		selenium.click("link=Statistika");
		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if ("Erakond".equals(selenium.getTable("id=sorting.0.0"))) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}

		assertEquals("0", selenium.getText("//table[@id='sorting']/tbody/tr/td[2]"));
		selenium.click("link=Statistika piirkonna lıikes");
		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if (selenium.isElementPresent("id=areaStatForm")) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}

		selenium.click("id=areaSearch");
		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if (selenium.isElementPresent("id=areaStatistics")) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}

		assertEquals("Vali mıni piirkond", selenium.getText("id=areaStatistics"));
		selenium.select("id=areaId", "label=Tallinna Kesklinna, Lasnam‰e ja Pirita linnaosa");
		selenium.click("id=areaSearch");
		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if ("Erakond".equals(selenium.getTable("css=#areaStatistics > #sorting.0.0"))) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}

		assertEquals("Punased", selenium.getText("css=#areaStatistics > #sorting > tbody > tr > td"));
		selenium.click("link=Statistika parteide lıikes");
		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if ("H‰‰lte jagunemine parteide lıikes".equals(selenium.getText("css=#statistika-parteiSisu > h1"))) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}

		selenium.refresh();
		selenium.waitForPageToLoad("30000");
		selenium.click("link=Statistika kandidaatide lıikes");
		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if (selenium.isElementPresent("css=#kandidaadistat > canvas")) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}

		assertTrue(selenium.isElementPresent("css=#kandidaadistat > canvas"));
		selenium.click("link=Minu andmed");
		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if ("Minu andmed".equals(selenium.getText("css=#andmed > h1"))) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}

		assertEquals("Andmete n‰gemiseks vıi salvestamiseks peate olema sisse logitud", selenium.getText("id=logisisse"));
		selenium.click("link=Sisene");
		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if (selenium.isElementPresent("css=#sisene > h1")) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}

		assertEquals("", selenium.getText("css=#auth-loggedout > img"));
		selenium.click("link=Esileht");
		for (int second = 0;; second++) {
			if (second >= 60) fail("timeout");
			try { if ("Valimised ja e-h‰‰letamine".equals(selenium.getText("css=h1"))) break; } catch (Exception e) {}
			Thread.sleep(1000);
		}

	}

	@After
	public void tearDown() throws Exception {
		selenium.stop();
	}
}
