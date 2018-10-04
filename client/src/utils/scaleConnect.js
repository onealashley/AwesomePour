import noble from "noble"
var fs=require('fs');

var scaleServiceUuid = 'c2:f9:f0:64:e9:41';


function nobleUpdate(cb) {
    noble.on('stateChange', function(state) {
        if (state === 'poweredOn') {
          console.log('scanning...');
          noble.startScanning();
        }
        else {
          noble.stopScanning();
        }
      })
      
      noble.on('discover', function(peripheral) {
          if (peripheral.id === scaleServiceUuid || peripheral.address === scaleServiceUuid) {
              noble.stopScanning();
              var batteryServiceUUID=peripheral.advertisement.serviceUuids[0];
              var weightServiceUUID=peripheral.advertisement.serviceUuids[2];
      
              peripheral.connect(function(error) {
                  var weightChar;
                  console.log('connected to peripheral: ' + peripheral.uuid);
                  peripheral.discoverServices([weightServiceUUID], function(error, services) {
                      var deviceInformationService = services[0];
                      console.log('discovered device information service');
      
                      deviceInformationService.discoverCharacteristics(null, function(error, characteristics) {
                          console.log("The error is: "+error);
                          console.log('discovered the following characteristics:');
                          for (var i in characteristics) {
                              
                              console.log('  ' + i + ' uuid: ' + characteristics[i].uuid);
                              console.log("charactoristics: " +characteristics);
                              weightChar=characteristics[0];
                              
      
                              weightChar.on('data', function(data, isNotification) {
                                  
                                  
                                  var weightReading=data.readUInt32LE(0);
                                  var weightValue=Math.fround((weightReading/10000)-5.4049163763)/2.8281373868;
                                  console.log("The weight is "+weightValue.toFixed(3)+"oz");
                                  cb && cb("The weight is "+weightValue.toFixed(3)+"oz");
                                  fs.appendFile("./dataFile", weightValue+"\n", function(err) {
                                      if(err) {
                                          return console.log(err);
                                      };
                                  });
                              });
              
                              // to enable notify
                              weightChar.subscribe(function(error) {
                                  console.log('weight notification on');
                          });
                          }
                      });
      
                      
                  });
              });
          }//if address closing bracket
      });// on.discover closing brackets
}

nobleUpdate();
export default nobleUpdate;


// import nobleUpdate from "./discoverAllChar";

// class App extends Component {
//     state = {
//         scaleValue: ""
//     }

//     componentDidMount() {
//         nobleUpdate(this.handleScaleUpdate)
//     }

//     handleScaleUpdate = newScaleValue => {
//         this.setState({ scaleValue: newScaleValue });
//     }

//     render() {
//         return (
//             <h1>{this.scaleValue}</h1>
//         )
//     }
// }