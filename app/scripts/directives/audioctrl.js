'use strict';

xperiment.directive('audioCtrl', ['synth', function (synth){
	
	return{
		restrict: 'A',

		link: function(scope, elm, attr){

			//initialize
			scope.freq = 0;
			scope.q = 0;
			//Attaching events to the sliders
			var keyboard = document.getElementById('keyboard'),
			keys = keyboard.querySelectorAll('.key'),
			waveType = document.getElementById('wavetype'),
			filterF = document.getElementById('cutoff-freq'),
			filterQ = document.getElementById('filter-q');

			waveType.onchange = function(e){
				var wave = e.target.value;
				synth.oscillator.type = parseInt(wave);
			}

			filterF.onchange = function(e){
				scope.freq = synth.setFilterFrequency(e.target.value);
			}

			filterQ.onchange = function(e){
				scope.q = synth.setFilterQ(e.target.value);
			}
		}
	}
}])