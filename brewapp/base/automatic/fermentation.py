from automaticlogic import *
from brewapp import app
import time
from brewapp.base.util import *

@brewautomatic()
class SimpleFermentationLogic(Automatic):

    ## Define config paramter as array of dicts
    configparameter = [{"name":"overshoot","value":2}]

    state = False

    def run(self):
        while self.isRunning():
            currentTemp = self.getCurrentTemp() ## Current temperature
            targetTemp = self.getTargetTemp() ## Target Temperature
            ## Current Temp is below Target Temp ... switch heater on
            if(currentTemp > targetTemp and self.state == False):
                self.state = True
                self.switchHeaterON()
            ## Current Temp is equal or higher than Target Temp ... switch Heater off
            if(currentTemp <= targetTemp and self.state == True):
                self.state = False
                self.switchHeaterOFF()
            time.sleep(1)

        self.switchHeaterOFF()
        app.logger.info("Stop Automatic - Kettle Id: "+ str(self.kid))
