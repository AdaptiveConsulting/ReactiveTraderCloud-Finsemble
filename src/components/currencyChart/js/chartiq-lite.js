/**
 *	Version m-2016-12-01.4.1
 *	Generation date: 2020-01-23T22:35:54.912Z
 *	Client name: adaptive
 *	Package Type: Technical Analysis
 *	License type: annual
 *	Expiration date: "2020/08/30"
 *	Domain lock: ["127.0.0.1","localhost","adaptiveconsulting.github.io","demo-reactive-analytics.adaptivecluster.com"]
 *	iFrame lock: true
 *	Custom Bundle: "core files only"
 */

/* Copyright 2012-2020 by ChartIQ, Inc. */

/****************** DO NOT MAKE CHANGES TO THIS LIBRARY FILE!! ******************/
/* If you wish to overwrite default functionality, create a separate file with  */

/* a copy of the methods you are overwriting and load that file right after the */

/* library has been loaded, but before the chart engine is instantiated.        */
/* Directly modifying library files will prevent upgrades and the ability for   */
/* ChartIQ to support your solution.                                            */
/********************************************************************************/

/***************************************************************************/
/* Please note that manually changing the domain list or expiration dates  */
/*                                                                         */
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> WILL NOT <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< */
/*                                                                         */
/*   modify the library locking mechanism. Any changes must be requested   */
/*                          directly from chartIQ.                         */
/***************************************************************************/

;(function() {
	/* eslint-disable no-undef-init */
	var trialExpiration = undefined
	var licenseExpiration = '2020/08/30'
	var domains = [
		'127.0.0.1',
		'localhost',
		'adaptiveconsulting.github.io',
		'demo-reactive-analytics.adaptivecluster.com',
	]
	var filesystem = false
	var expiration

	if (trialExpiration) expiration = new Date(trialExpiration).getTime()
	else if (licenseExpiration) expiration = new Date(licenseExpiration).getTime()

	if (expiration) {
		var now = new Date().getTime()

		if (expiration <= now) {
			if (trialExpiration) alert('This license has expired!')
			console.error('This license has expired!')
		} else if (trialExpiration) {
			var diffDays = Math.round((expiration - now) / (1000 * 60 * 60 * 24))

			if (diffDays < 3) {
				alert('This trial license expires in ' + diffDays + ' days!')
				console.log('WARNING: This trial license expires in ' + diffDays + ' days!')
			}
		}
	}
	if (typeof document !== 'undefined') {
		if (filesystem === true && document.location.protocol == 'file:') {
			return // valid environment, skip domain check
		}
		if (domains && domains.length > 0) {
			var href = document.location.href
			var found = false

			for (var i = 0; i < domains.length; i++) {
				if (href.indexOf(domains[i]) > -1) {
					found = true
					break
				}
			}

			if (!found) {
				alert('ERROR: Not licensed for domain ' + href)
				console.error('ERROR: Not licensed for domain ' + href)
			}
		}
	}
})()
//-------------------------------------------------------------------------------------------
// Copyright 2012-2019 by ChartIQ, Inc.
// All rights reserved
//-------------------------------------------------------------------------------------------
;(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory)
	} else if (typeof exports === 'object') {
		module.exports = factory()
	} else {
		factory(root)
	}
})(this, function(_exports) {
	/* eslint-disable no-extra-parens */
	/* eslint-disable */ /* jshint ignore:start */ /* ignore jslint start */
	Y3TT(Z3TT())
	V3b7(L3b7())
	function L3b7() {
		var c13 = 2
		for (; c13 !== 3; ) {
			switch (c13) {
				case 1:
					return globalThis
					break
				case 2:
					c13 = typeof globalThis === 'object' ? 1 : 5
					break
				case 4:
					return globalThis
					break
				case 5:
					try {
						var H13 = 2
						for (; H13 !== 9; ) {
							switch (H13) {
								case 3:
									delete Object.prototype.fC5qQ
									H13 = 9
									break
								case 5:
									H13 = typeof globalThis === 'undefined' ? 4 : 3
									break
								case 4:
									window.globalThis = window
									H13 = 3
									break
								case 2:
									Object.defineProperty(Object.prototype, 'fC5qQ', {
										get: function() {
											return this
										},
										configurable: true,
									})
									fC5qQ.globalThis = fC5qQ
									H13 = 5
									break
							}
						}
					} catch (x13) {
						window.globalThis = window
					}
					c13 = 4
					break
			}
		}
	}
	F144.C9b = function() {
		return typeof F144.K9b.L9b === 'function'
			? F144.K9b.L9b.apply(F144.K9b, arguments)
			: F144.K9b.L9b
	}
	function Z3TT() {
		var s9J = 2
		for (; s9J !== 3; ) {
			switch (s9J) {
				case 5:
					try {
						var N9J = 2
						for (; N9J !== 9; ) {
							switch (N9J) {
								case 3:
									delete Object.prototype.KqQBy
									N9J = 9
									break
								case 5:
									N9J = typeof globalThis === 'undefined' ? 4 : 3
									break
								case 2:
									Object.defineProperty(Object.prototype, 'KqQBy', {
										get: function() {
											return this
										},
										configurable: true,
									})
									KqQBy.globalThis = KqQBy
									N9J = 5
									break
								case 4:
									window.globalThis = window
									N9J = 3
									break
							}
						}
					} catch (i6J) {
						window.globalThis = window
					}
					return globalThis
					break
				case 1:
					return globalThis
					break
				case 2:
					s9J = typeof globalThis === 'object' ? 1 : 5
					break
			}
		}
	}
	F144.P5a = function() {
		return typeof F144.k5a.c5Z === 'function'
			? F144.k5a.c5Z.apply(F144.k5a, arguments)
			: F144.k5a.c5Z
	}
	function V3b7() {
		function k13() {
			var x5a = 2
			for (; x5a !== 7; ) {
				switch (x5a) {
					case 2:
						var a13 = [arguments]
						a13[8] = 'ineProperty'
						a13[4] = ''
						a13[4] = 'ef'
						a13[7] = 'd'
						a13[1] = 7
						try {
							var F5a = 2
							for (; F5a !== 9; ) {
								switch (F5a) {
									case 3:
										try {
											var q5a = 2
											for (; q5a !== 3; ) {
												switch (q5a) {
													case 4:
														a13[0][0].Object[a13[9]](a13[6], a13[0][4], a13[5])
														q5a = 3
														break
													case 2:
														a13[9] = a13[7]
														a13[9] += a13[4]
														a13[9] += a13[8]
														q5a = 4
														break
												}
											}
										} catch (m13) {
											a13[6][a13[0][4]] = a13[5].value
										}
										F5a = 9
										break
									case 2:
										a13[5] = {}
										a13[2] = (1, a13[0][1])(a13[0][0])
										a13[6] = [a13[1], a13[2].prototype][a13[0][3]]
										a13[5].value = a13[6][a13[0][2]]
										F5a = 3
										break
								}
							}
						} catch (l13) {}
						x5a = 7
						break
				}
			}
		}
		function w13() {
			var h13 = 2
			for (; h13 !== 5; ) {
				switch (h13) {
					case 2:
						var y13 = [arguments]
						return y13[0][0].String
						break
				}
			}
		}
		var s13 = 2
		for (; s13 !== 10; ) {
			switch (s13) {
				case 11:
					F13(w13, 'charCodeAt', v13[7], v13[4])
					s13 = 10
					break
				case 12:
					var F13 = function() {
						var Y13 = 2
						for (; Y13 !== 5; ) {
							switch (Y13) {
								case 2:
									var g13 = [arguments]
									k13(v13[0][0], g13[0][0], g13[0][1], g13[0][2], g13[0][3])
									Y13 = 5
									break
							}
						}
					}
					s13 = 11
					break
				case 9:
					v13[9] = 'P'
					v13[7] = 9
					v13[7] = 1
					v13[4] = v13[9]
					v13[4] += v13[5]
					v13[4] += v13[6]
					s13 = 12
					break
				case 2:
					var v13 = [arguments]
					v13[6] = ''
					v13[6] = '7'
					v13[5] = ''
					v13[5] = '3b'
					s13 = 9
					break
			}
		}
	}
	F144.E9J = function() {
		return typeof F144.q9J.F9d === 'function'
			? F144.q9J.F9d.apply(F144.q9J, arguments)
			: F144.q9J.F9d
	}
	F144.K9b = (function(G9b) {
		return {
			L9b: function() {
				var J9b,
					l9b = arguments
				switch (G9b) {
					case 29:
						J9b = l9b[1] * l9b[3] - l9b[2] + -l9b[0]
						break
					case 32:
						J9b = (l9b[2] * l9b[3] + l9b[0]) / l9b[4] - l9b[1]
						break
					case 14:
						J9b = l9b[4] - l9b[2] + l9b[3] + l9b[0] + l9b[1]
						break
					case 7:
						J9b = l9b[1] + l9b[0]
						break
					case 47:
						J9b = l9b[1] + (l9b[0] | l9b[2])
						break
					case 43:
						J9b = -l9b[1] - l9b[2] + l9b[0]
						break
					case 41:
						J9b = l9b[1] - l9b[2] + -l9b[0]
						break
					case 34:
						J9b = ((l9b[3] * l9b[1]) / l9b[0]) * l9b[2]
						break
					case 49:
						J9b = l9b[1] == l9b[0]
						break
					case 13:
						J9b = (l9b[1] + l9b[2]) * l9b[3] - l9b[0]
						break
					case 22:
						J9b = l9b[0] + l9b[1] / l9b[2]
						break
					case 36:
						J9b = l9b[1] + l9b[2] + l9b[0]
						break
					case 21:
						J9b = l9b[0] + (l9b[1] / l9b[2]) * l9b[3]
						break
					case 46:
						J9b = l9b[6] - ((l9b[2] - l9b[0]) * (l9b[3] - l9b[5])) / (l9b[1] - l9b[4])
						break
					case 1:
						J9b = l9b[0] - l9b[1] + l9b[2] + l9b[4] + -l9b[3]
						break
					case 16:
						J9b = l9b[0] / l9b[1] - l9b[2]
						break
					case 20:
						J9b = l9b[2] + l9b[0] + l9b[3] + l9b[1]
						break
					case 40:
						J9b = ((l9b[3] * l9b[1]) / l9b[2] / l9b[0]) * l9b[4]
						break
					case 26:
						J9b = ((l9b[3] - l9b[1]) * l9b[2]) / l9b[0]
						break
					case 9:
						J9b = l9b[0] >> l9b[1]
						break
					case 5:
						J9b = l9b[0] / l9b[1]
						break
					case 30:
						J9b = (((l9b[2] + l9b[1]) * l9b[4] + l9b[0]) * l9b[3]) / l9b[5]
						break
					case 23:
						J9b = l9b[1] ^ l9b[0]
						break
					case 45:
						J9b = l9b[2] - l9b[1] * l9b[0]
						break
					case 37:
						J9b = l9b[0] * l9b[2] * l9b[3] - l9b[1]
						break
					case 2:
						J9b = l9b[1] | l9b[0]
						break
					case 12:
						J9b = l9b[3] * l9b[1] - l9b[2] + l9b[0]
						break
					case 4:
						J9b = (l9b[1] - l9b[0]) * (l9b[7] - l9b[4]) - (l9b[2] - l9b[3]) * (l9b[6] - l9b[5])
						break
					case 27:
						J9b = ((l9b[0] * l9b[1]) / l9b[3]) * l9b[4] - l9b[2]
						break
					case 39:
						J9b = l9b[3] - l9b[2] + -l9b[1] + -l9b[0]
						break
					case 17:
						J9b = ((l9b[0] + l9b[2]) * l9b[3]) / l9b[1]
						break
					case 8:
						J9b = l9b[2] + l9b[3] * (l9b[1] - l9b[0])
						break
					case 28:
						J9b = ((l9b[1] - l9b[0]) * l9b[2]) / l9b[3] - l9b[4]
						break
					case 19:
						J9b = (l9b[0] * l9b[1]) / l9b[2]
						break
					case 38:
						J9b = l9b[1] * l9b[0] - l9b[2] + -l9b[3] + l9b[4]
						break
					case 42:
						J9b = l9b[1] * -l9b[0]
						break
					case 31:
						J9b = (l9b[3] - l9b[0]) * l9b[2] - l9b[1]
						break
					case 48:
						J9b = l9b[0] % l9b[1]
						break
					case 18:
						J9b = l9b[1] - l9b[0] + l9b[2]
						break
					case 35:
						J9b = (l9b[3] - l9b[4]) * l9b[1] - l9b[2] + -l9b[0]
						break
					case 11:
						J9b = l9b[0] - l9b[3] + l9b[2] + l9b[1]
						break
					case 6:
						J9b = l9b[0] - l9b[1]
						break
					case 44:
						J9b = l9b[0] + l9b[2] * l9b[1]
						break
					case 25:
						J9b = (l9b[2] * l9b[0]) / l9b[4] - l9b[1] + l9b[3]
						break
					case 33:
						J9b = ((-l9b[0] - l9b[2]) * l9b[3]) / -l9b[1]
						break
					case 0:
						J9b = l9b[0] & l9b[1]
						break
					case 3:
						J9b = l9b[0] << l9b[1]
						break
					case 15:
						J9b = ((l9b[3] / l9b[4] - l9b[1]) * l9b[0]) / l9b[2]
						break
					case 10:
						J9b = l9b[1] * l9b[2] - l9b[0]
						break
					case 24:
						J9b = l9b[1] * l9b[0]
						break
				}
				return J9b
			},
			P9b: function(s9b) {
				G9b = s9b
			},
		}
	})()
	F144.f5a = function() {
		return typeof F144.k5a.c5Z === 'function'
			? F144.k5a.c5Z.apply(F144.k5a, arguments)
			: F144.k5a.c5Z
	}
	F144.U9b = function() {
		return typeof F144.K9b.L9b === 'function'
			? F144.K9b.L9b.apply(F144.K9b, arguments)
			: F144.K9b.L9b
	}
	F144.n9b = function() {
		return typeof F144.K9b.P9b === 'function'
			? F144.K9b.P9b.apply(F144.K9b, arguments)
			: F144.K9b.P9b
	}
	function Y3TT() {
		function M6J() {
			var P9J = 2
			for (; P9J !== 6; ) {
				switch (P9J) {
					case 2:
						var u9J = [arguments]
						u9J[4] = ''
						u9J[4] = 'operty'
						u9J[7] = ''
						u9J[7] = ''
						u9J[7] = 'efinePr'
						u9J[1] = 'd'
						P9J = 7
						break
					case 7:
						try {
							var d9J = 2
							for (; d9J !== 9; ) {
								switch (d9J) {
									case 3:
										try {
											var g9J = 2
											for (; g9J !== 3; ) {
												switch (g9J) {
													case 2:
														u9J[5] = u9J[1]
														u9J[5] += u9J[7]
														u9J[5] += u9J[4]
														u9J[0][0].Object[u9J[5]](u9J[6], u9J[0][4], u9J[9])
														g9J = 3
														break
												}
											}
										} catch (d6J) {
											u9J[6][u9J[0][4]] = u9J[9].value
										}
										d9J = 9
										break
									case 2:
										u9J[9] = {}
										u9J[2] = (1, u9J[0][1])(u9J[0][0])
										u9J[6] = [u9J[2], u9J[2].prototype][u9J[0][3]]
										u9J[9].value = u9J[6][u9J[0][2]]
										d9J = 3
										break
								}
							}
						} catch (g6J) {}
						P9J = 6
						break
				}
			}
		}
		function h6J() {
			var e9J = 2
			for (; e9J !== 5; ) {
				switch (e9J) {
					case 2:
						var L9J = [arguments]
						return L9J[0][0].Function
						break
				}
			}
		}
		function V6J() {
			var t9J = 2
			for (; t9J !== 5; ) {
				switch (t9J) {
					case 2:
						var k9J = [arguments]
						return k9J[0][0]
						break
				}
			}
		}
		var x9J = 2
		for (; x9J !== 71; ) {
			switch (x9J) {
				case 53:
					U9J[25] += U9J[33]
					U9J[84] = U9J[76]
					U9J[84] += U9J[69]
					U9J[84] += U9J[5]
					x9J = 49
					break
				case 38:
					U9J[80] += U9J[90]
					U9J[80] += U9J[19]
					U9J[25] = U9J[81]
					U9J[25] += U9J[91]
					x9J = 53
					break
				case 45:
					U9J[73] += U9J[3]
					U9J[73] += U9J[4]
					U9J[96] = U9J[1]
					U9J[96] += U9J[19]
					x9J = 62
					break
				case 75:
					I6J(V6J, U9J[73], U9J[29], U9J[20])
					x9J = 74
					break
				case 6:
					U9J[4] = 't'
					U9J[7] = 'opt'
					U9J[8] = ''
					U9J[8] = '_'
					x9J = 11
					break
				case 23:
					U9J[81] = 'p'
					U9J[40] = ''
					U9J[40] = 'K'
					U9J[19] = ''
					x9J = 34
					break
				case 62:
					U9J[96] += U9J[19]
					U9J[15] = U9J[9]
					U9J[15] += U9J[7]
					U9J[15] += U9J[6]
					U9J[44] = U9J[4]
					U9J[44] += U9J[90]
					U9J[44] += U9J[19]
					x9J = 55
					break
				case 76:
					I6J(V6J, U9J[15], U9J[29], U9J[96])
					x9J = 75
					break
				case 49:
					U9J[20] = U9J[2]
					U9J[20] += U9J[91]
					U9J[20] += U9J[33]
					U9J[73] = U9J[8]
					x9J = 45
					break
				case 29:
					U9J[24] = 8
					U9J[24] = 1
					U9J[29] = 3
					U9J[29] = 0
					x9J = 42
					break
				case 74:
					I6J(V6J, U9J[84], U9J[29], U9J[25])
					x9J = 73
					break
				case 72:
					I6J(h6J, 'apply', U9J[24], U9J[31])
					x9J = 71
					break
				case 77:
					I6J(w6J, 'test', U9J[24], U9J[44])
					x9J = 76
					break
				case 3:
					U9J[1] = 'G3'
					U9J[4] = ''
					U9J[4] = ''
					U9J[9] = '__'
					x9J = 6
					break
				case 27:
					U9J[33] = 'TT'
					U9J[91] = ''
					U9J[91] = '3'
					U9J[81] = ''
					x9J = 23
					break
				case 34:
					U9J[19] = 'T'
					U9J[90] = '3T'
					U9J[37] = ''
					U9J[37] = ''
					U9J[37] = 'P'
					x9J = 29
					break
				case 42:
					U9J[31] = U9J[37]
					U9J[31] += U9J[90]
					U9J[31] += U9J[19]
					U9J[80] = U9J[40]
					x9J = 38
					break
				case 55:
					var I6J = function() {
						var b9J = 2
						for (; b9J !== 5; ) {
							switch (b9J) {
								case 2:
									var r9J = [arguments]
									M6J(U9J[0][0], r9J[0][0], r9J[0][1], r9J[0][2], r9J[0][3])
									b9J = 5
									break
							}
						}
					}
					x9J = 77
					break
				case 73:
					I6J(Y6J, 'push', U9J[24], U9J[80])
					x9J = 72
					break
				case 18:
					U9J[76] = '__r'
					U9J[69] = 'e'
					U9J[33] = ''
					U9J[33] = ''
					x9J = 27
					break
				case 2:
					var U9J = [arguments]
					U9J[6] = ''
					U9J[6] = 'imize'
					U9J[1] = ''
					x9J = 3
					break
				case 11:
					U9J[2] = 'o'
					U9J[3] = '_abstrac'
					U9J[5] = ''
					U9J[5] = 'sidual'
					x9J = 18
					break
			}
		}
		function w6J() {
			var A9J = 2
			for (; A9J !== 5; ) {
				switch (A9J) {
					case 2:
						var O9J = [arguments]
						return O9J[0][0].RegExp
						break
				}
			}
		}
		function Y6J() {
			var y9J = 2
			for (; y9J !== 5; ) {
				switch (y9J) {
					case 2:
						var v9J = [arguments]
						return v9J[0][0].Array
						break
				}
			}
		}
	}
	function F144() {}
	F144.C9J = function() {
		return typeof F144.q9J.F9d === 'function'
			? F144.q9J.F9d.apply(F144.q9J, arguments)
			: F144.q9J.F9d
	}
	F144.q9J = (function() {
		var S9J = 2
		for (; S9J !== 9; ) {
			switch (S9J) {
				case 2:
					var c9J = [arguments]
					c9J[1] = undefined
					c9J[5] = {}
					c9J[5].F9d = function() {
						var D9J = 2
						for (; D9J !== 90; ) {
							switch (D9J) {
								case 56:
									o9J[92] = o9J[9][o9J[87]]
									try {
										o9J[80] = o9J[92][o9J[77]]() ? o9J[74] : o9J[79]
									} catch (v9d) {
										o9J[80] = o9J[79]
									}
									D9J = 77
									break
								case 14:
									o9J[8].s9i = ['N9i']
									o9J[8].Q9i = function() {
										var i9d = typeof G3TT === 'function'
										return i9d
									}
									o9J[2] = o9J[8]
									D9J = 11
									break
								case 69:
									D9J = (function() {
										var n9J = 2
										for (; n9J !== 22; ) {
											switch (n9J) {
												case 5:
													return
													break
												case 10:
													n9J = G9J[9][o9J[56]] === o9J[74] ? 20 : 19
													break
												case 4:
													G9J[1] = {}
													G9J[5] = []
													G9J[4] = 0
													n9J = 8
													break
												case 25:
													G9J[2] = true
													n9J = 24
													break
												case 16:
													n9J = G9J[4] < G9J[5].length ? 15 : 23
													break
												case 18:
													G9J[2] = false
													n9J = 17
													break
												case 19:
													G9J[4]++
													n9J = 7
													break
												case 6:
													G9J[9] = G9J[0][0][G9J[4]]
													n9J = 14
													break
												case 11:
													G9J[1][G9J[9][o9J[89]]].t += true
													n9J = 10
													break
												case 20:
													G9J[1][G9J[9][o9J[89]]].h += true
													n9J = 19
													break
												case 23:
													return G9J[2]
													break
												case 12:
													G9J[5].K3TT(G9J[9][o9J[89]])
													n9J = 11
													break
												case 1:
													n9J = G9J[0][0].length === 0 ? 5 : 4
													break
												case 2:
													var G9J = [arguments]
													n9J = 1
													break
												case 14:
													n9J = typeof G9J[1][G9J[9][o9J[89]]] === 'undefined' ? 13 : 11
													break
												case 13:
													G9J[1][G9J[9][o9J[89]]] = function() {
														var l9J = 2
														for (; l9J !== 9; ) {
															switch (l9J) {
																case 5:
																	z9J[5].h = 0
																	z9J[5].t = 0
																	return z9J[5]
																	break
																case 2:
																	var z9J = [arguments]
																	z9J[5] = {}
																	l9J = 5
																	break
															}
														}
													}.P3TT(this, arguments)
													n9J = 12
													break
												case 17:
													G9J[4] = 0
													n9J = 16
													break
												case 15:
													G9J[8] = G9J[5][G9J[4]]
													G9J[6] = G9J[1][G9J[8]].h / G9J[1][G9J[8]].t
													n9J = 26
													break
												case 7:
													n9J = G9J[4] < G9J[0][0].length ? 6 : 18
													break
												case 26:
													n9J = G9J[6] >= 0.5 ? 25 : 24
													break
												case 24:
													G9J[4]++
													n9J = 16
													break
												case 8:
													G9J[4] = 0
													n9J = 7
													break
											}
										}
									})(o9J[16])
										? 68
										: 67
									break
								case 59:
									o9J[89] = 'C9i'
									D9J = 58
									break
								case 70:
									o9J[87]++
									D9J = 57
									break
								case 58:
									o9J[87] = 0
									D9J = 57
									break
								case 40:
									o9J[94] = o9J[39]
									o9J[86] = {}
									o9J[86].s9i = ['N9i']
									o9J[86].Q9i = function() {
										var A9d = false
										var a9d = []
										try {
											for (var k9d in console) a9d.K3TT(k9d)
											A9d = a9d.length === 0
										} catch (b9d) {}
										var R9d = A9d
										return R9d
									}
									o9J[85] = o9J[86]
									D9J = 54
									break
								case 57:
									D9J = o9J[87] < o9J[9].length ? 56 : 69
									break
								case 33:
									o9J[22].s9i = ['N9i']
									o9J[22].Q9i = function() {
										var p9d = typeof p3TT === 'function'
										return p9d
									}
									o9J[51] = o9J[22]
									o9J[82] = {}
									D9J = 29
									break
								case 45:
									o9J[9].K3TT(o9J[94])
									o9J[16] = []
									o9J[74] = 'd9i'
									D9J = 63
									break
								case 29:
									o9J[82].s9i = ['U9i']
									o9J[82].Q9i = function() {
										var K9d = function() {
											return [] + 'a'.concat('a')
										}
										var m9d = !/\x5b\u005d/.t3TT(K9d + []) && /\u0061\x61/.t3TT(K9d + [])
										return m9d
									}
									D9J = 44
									break
								case 68:
									D9J = 3 ? 68 : 67
									break
								case 76:
									D9J = o9J[95] < o9J[92][o9J[81]].length ? 75 : 70
									break
								case 71:
									o9J[95]++
									D9J = 76
									break
								case 77:
									o9J[95] = 0
									D9J = 76
									break
								case 48:
									o9J[9].K3TT(o9J[68])
									o9J[9].K3TT(o9J[85])
									o9J[9].K3TT(o9J[1])
									D9J = 45
									break
								case 67:
									c9J[1] = 12
									return 8
									break
								case 54:
									o9J[9].K3TT(o9J[5])
									o9J[9].K3TT(o9J[67])
									o9J[9].K3TT(o9J[37])
									o9J[9].K3TT(o9J[2])
									o9J[9].K3TT(o9J[3])
									o9J[9].K3TT(o9J[51])
									D9J = 48
									break
								case 16:
									o9J[4].Q9i = function() {
										var q9d = function() {
											return 'aaa'.includes('a')
										}
										var t9d = /\u0074\u0072\u0075\u0065/.t3TT(q9d + [])
										return t9d
									}
									o9J[3] = o9J[4]
									o9J[84] = {}
									o9J[84].s9i = ['U9i']
									o9J[84].Q9i = function() {
										var G9d = function() {
											return 'a'.codePointAt(0)
										}
										var j9d = /\x39\x37/.t3TT(G9d + [])
										return j9d
									}
									D9J = 24
									break
								case 44:
									o9J[37] = o9J[82]
									o9J[39] = {}
									o9J[39].s9i = ['U9i']
									o9J[39].Q9i = function() {
										var P9d = function() {
											return 'X'.toLocaleLowerCase()
										}
										var M9d = /\u0078/.t3TT(P9d + [])
										return M9d
									}
									D9J = 40
									break
								case 75:
									o9J[27] = {}
									o9J[27][o9J[89]] = o9J[92][o9J[81]][o9J[95]]
									o9J[27][o9J[56]] = o9J[80]
									o9J[16].K3TT(o9J[27])
									D9J = 71
									break
								case 20:
									o9J[7].Q9i = function() {
										var y9d = function() {
											return 'aaaa|a'.substr(0, 3)
										}
										var D9d = !/\x7c/.t3TT(y9d + [])
										return D9d
									}
									o9J[5] = o9J[7]
									o9J[4] = {}
									o9J[4].s9i = ['U9i']
									D9J = 16
									break
								case 5:
									return 24
									break
								case 24:
									o9J[68] = o9J[84]
									o9J[57] = {}
									o9J[57].s9i = ['N9i']
									o9J[57].Q9i = function() {
										var o9d = typeof o3TT === 'function'
										return o9d
									}
									D9J = 35
									break
								case 11:
									o9J[7] = {}
									o9J[7].s9i = ['U9i']
									D9J = 20
									break
								case 1:
									D9J = c9J[1] ? 5 : 4
									break
								case 4:
									o9J[9] = []
									o9J[6] = {}
									o9J[6].s9i = ['U9i']
									o9J[6].Q9i = function() {
										var s9d = function() {
											return atob('PQ==')
										}
										var n9d = !/\u0061\u0074\u006f\u0062/.t3TT(s9d + [])
										return n9d
									}
									o9J[1] = o9J[6]
									o9J[8] = {}
									D9J = 14
									break
								case 63:
									o9J[79] = 'M9i'
									o9J[81] = 's9i'
									o9J[56] = 'u9i'
									o9J[77] = 'Q9i'
									D9J = 59
									break
								case 2:
									var o9J = [arguments]
									D9J = 1
									break
								case 35:
									o9J[67] = o9J[57]
									o9J[22] = {}
									D9J = 33
									break
							}
						}
					}
					return c9J[5]
					break
			}
		}
	})()
	F144.k5a = (function() {
		var v5Z = function(e5Z, Y5Z) {
				var A5Z = Y5Z & 0xffff
				var E5Z = Y5Z - A5Z
				return (((E5Z * e5Z) | 0) + ((A5Z * e5Z) | 0)) | 0
			},
			P5Z = function(L5Z, j5Z, F5Z) {
				var d5Z = 0xcc9e2d51,
					O5Z = 0x1b873593
				var V5Z = F5Z
				var b5Z = j5Z & ~0x3
				for (var U5Z = 0; U5Z < b5Z; U5Z += 4) {
					var W5Z =
						(L5Z.P3b7(U5Z) & 0xff) |
						((L5Z.P3b7(U5Z + 1) & 0xff) << 8) |
						((L5Z.P3b7(U5Z + 2) & 0xff) << 16) |
						((L5Z.P3b7(U5Z + 3) & 0xff) << 24)
					W5Z = v5Z(W5Z, d5Z)
					W5Z = ((W5Z & 0x1ffff) << 15) | (W5Z >>> 17)
					W5Z = v5Z(W5Z, O5Z)
					V5Z ^= W5Z
					V5Z = ((V5Z & 0x7ffff) << 13) | (V5Z >>> 19)
					V5Z = (V5Z * 5 + 0xe6546b64) | 0
				}
				W5Z = 0
				switch (j5Z % 4) {
					case 3:
						W5Z = (L5Z.P3b7(b5Z + 2) & 0xff) << 16
					case 2:
						W5Z |= (L5Z.P3b7(b5Z + 1) & 0xff) << 8
					case 1:
						W5Z |= L5Z.P3b7(b5Z) & 0xff
						W5Z = v5Z(W5Z, d5Z)
						W5Z = ((W5Z & 0x1ffff) << 15) | (W5Z >>> 17)
						W5Z = v5Z(W5Z, O5Z)
						V5Z ^= W5Z
				}
				V5Z ^= j5Z
				V5Z ^= V5Z >>> 16
				V5Z = v5Z(V5Z, 0x85ebca6b)
				V5Z ^= V5Z >>> 13
				V5Z = v5Z(V5Z, 0xc2b2ae35)
				V5Z ^= V5Z >>> 16
				return V5Z
			}
		return { c5Z: P5Z }
	})()
	F144.F9b = function() {
		return typeof F144.K9b.P9b === 'function'
			? F144.K9b.P9b.apply(F144.K9b, arguments)
			: F144.K9b.P9b
	}
	var __js_core_core_
	F144.E9J()
	__js_core_core_ = function(X9J, F9J) {
		var N9b = F144
		var L4a, d4a, P4a, R3a, B9J, p9J, j9J
		L4a = 'D'
		L4a += 'e'
		L4a += 'c'
		d4a = 'J'
		d4a += 'u'
		d4a += 'n'
		P4a = 'F'
		P4a += 'e'
		P4a += 'b'
		R3a = 'u'
		R3a += 'ndefin'
		R3a += 'ed'
		B9J = X9J.CIQ
		p9J = X9J.$$
		j9J = X9J.$$$
		B9J.getETDateTime = function() {
			var q9a, C9a, w9a, m9J
			q9a = 1950202047
			C9a = 1590525668
			w9a = +'2'
			for (var k9a = 1; N9b.P5a(k9a.toString(), k9a.toString().length, +'7204') !== q9a; k9a++) {
				N9b.C9J()
				w9a += +'2'
			}
			if (N9b.f5a(w9a.toString(), w9a.toString().length, 40663) !== C9a) {
				N9b.C9J()
			}
			m9J = new Date()
			return B9J.convertTimeZone(
				new Date(m9J.getTime() + m9J.getTimezoneOffset() * 60000),
				'UTC',
				'America/New_York',
			)
		}
		B9J.fromET = function(K9J) {
			var a9J, f9J, R9J, W9J
			N9b.C9J()
			a9J = new Date()
			f9J = 4
			if (
				a9J.getMonth() < 2 ||
				(a9J.getMonth() == 2 && a9J.getDate() < ('11' ^ 0)) ||
				a9J.getMonth() > 10 || (a9J.getMonth() == 10 && a9J.getDate() >= 4)
			) {
				f9J = 5
			}
			R9J = K9J.getTime() + 3600000 * f9J
			W9J = new Date(R9J)
			return W9J
		}
		B9J.convertFutureMonth = function(I4J) {
			var f3a, i4J, d3a
			f3a = '1'
			f3a += '1'
			i4J = I4J.toString()
			if (i4J.length <= 0 || i4J.length > 2) {
				return ''
			}
			switch (i4J) {
				case (7770, 270.15) <= (4618, 969.11)
					? (9880, 7500) != 3093
						? '1'
						: ('M', !!{})
					: (307.47, !{}):
					return (5030, 5540) !== 8380
						? 'F'
						: 71.77 >= (572.7, 6375)
						? 698.93
						: +'296.17' == (3821, 8260)
						? 9.12e3
						: ('l', 0x133a)
				case (217.63, 948) !== 8222
					? 2144 < (764.41, 649.21)
						? !0
						: 6694 >= (151.07, 2918)
						? '2'
						: (+'9.97e+3', 'm')
					: 0x9af:
					return 'G'
				case '3':
					return 'H'
				case '4':
					return +'661.33' == (1685, 5420)
						? (0x65b, '0x1638' & 2147483647)
						: (3780, '6370' << 2125717856) <= 5356
						? 448.95
						: 'J'
				case (153.58, 1500) != 5321 ? '5' : ('X', !!1):
					return 'K'
				case +'72.33' !== 926.38 ? '6' : (638.29, 's'):
					return 'M'
				case (7350, 707.56) < 9290
					? (6887, 534.87) < (5130, +'9020')
						? 3260 != (635.81, 93.89)
							? '7'
							: '0x2130' >> 2064752640
						: (5.49e3, '6.52e+3' * 1)
					: (0x2271, !![]):
					return 'N'
				case 3477 == (529.14, 5925) ? ![] : '8':
					return 'Q'
				case '9':
					return 5940 == (+'2590', 9456) ? 'H' : '7480' * 1 >= (355.85, 90.1) ? 'U' : +'0x1a85'
				case '10':
					return (8850, 8864) < 4279
						? 'k'
						: ('7626' ^ 0, 3358) !== ('5238' * 1, 8352)
						? 9951 >= (173, 934.38)
							? 'V'
							: !!'1'
						: ('0x1f0f' | 3585, 0x139)
				case f3a:
					return (9, +'8970') > +'2600' ? (6100 != 894 ? 'X' : 0x156b) : (536.47, !'')
				case '12':
					return 'Z'
				case (367, 9000) > (6670, 7860) ? 'F' : ('D', 177.85):
					return (423, 1438) > (1530, 862.89)
						? '1'
						: 2110 !== ('6790' ^ 0, 2180)
						? (379.76, 9570) >= +'4460'
							? 0x2428
							: !0
						: 'O'
				case (7990, 5490) != (4600, +'3990')
					? 'G'
					: (3370, 472.59) < (4011, 334.99)
					? ('0xdc9' ^ 0, 'B')
					: ('6.90e+3' - 0, '374.56' - 0):
					return '2'
				case 'H':
					return (4898, +'861') === '3220' << 1030117472 ? (!1, !!{}) : '3'
				case (9790, +'156') === '2476' - 0 ? 'k' : 'J':
					return '4'
				case '882' * 1 === 9020 ? 0x1678 : 'K':
					return '5'
				case 915.25 <= (214, +'7310') ? 'M' : +'0x251c':
					return '6'
				case '705.07' - 0 != '2726' * 1 ? 'N' : ('8.57e+2' | 280, 'F'):
					return 231 < 835.39 ? '7' : (7760, 4816) < 3558 ? ('J', !'') : (!1, !!'')
				case (+'9057', 511.47) != 3459
					? 892.5 <= (549.31, +'798.6')
						? (432, 686) > (957, 3222)
							? (0x1f5c, !!1)
							: 0x15ea
						: 'Q'
					: ('A', 0x4d6):
					return '8'
				case 'U':
					return (+'2607', 571) != 594 ? '9' : 460.56
				case 'V':
					return '10'
				case (+'6109', 3307) >= ('579.67' * 1, 636.7) ? 'X' : !!1:
					d3a = '1'
					d3a += '1'
					return d3a
				case 184.16 > 5220 ? !!1 : 'Z':
					return '12'
			}
			N9b.E9J()
			return i4J
		}
		B9J.money = function(w4J, H4J, V4J) {
			if (!V4J) {
				V4J =
					1159 <= 8524 ? ((649.6, 429.02) <= ('8090' & 2147483647, 3069) ? '$' : 970.45) : 712.18
			}
			if (V4J.length == 3) {
				V4J += ('659' | 656) >= 1610 ? 0x137e : ' '
			}
			if (!H4J && H4J !== 0) {
				H4J = 2
			}
			N9b.E9J()
			return V4J + B9J.commas((Math.round(w4J * 10000) / 10000).toFixed(H4J))
		}
		B9J.convertCurrencyCode = function(M4J) {
			var T3a, E3a, i3a, b3a, u3a, Y4J, h4J
			T3a = 'S'
			T3a += '$'
			E3a = 'F'
			E3a += 't'
			i3a = 'K'
			i3a += '\u010d'
			b3a = 'C'
			b3a += 'N¥'
			u3a = 'R'
			u3a += '$'
			Y4J = {
				JPY: 9242 > '386.45' * 1 ? (909 > 3690 ? 0x137f : '¥') : 0x1f1f,
				USD: 6050 <= 876.72 ? 'Q' : '$',
				AUD: 'A$',
				BRL: u3a,
				CAD: 'CA$',
				CNY: b3a,
				CZK: i3a,
				DKK: 'kr',
				EUR: '€',
				GBP: 3880 === 504.14 ? ((5636, +'9171') > (891, 3270) ? +'9.43e+3' : ('g', 5.04e3)) : '£',
				HKD: 'HK$',
				HUF: E3a,
				ILS:
					(955, 711.55) >= (+'2919', '214.54' - 0)
						? +'982.23' < 8580
							? '₪'
							: 222 !== 5410
							? 0xfb9
							: 'b'
						: !![],
				INR:
					('7900' ^ 0, '11.63' * 1) != 1240
						? (9.4, +'2394') == 1200
							? (0x1299, '0x12' << 740761952)
							: '₹'
						: 0x6e8,
				KRW: 3610 > '35.58' * 1 ? '₩' : 'm',
				MXN: 'MX$',
				NOK: 'kr',
				NZD: 'NZ$',
				PLN: 'zł',
				RUB: 'руб',
				SAR:
					('8660' ^ 0) == (450.15, 605.66)
						? (9.05e3, 454.4)
						: (7799, 988.51) !== 796
						? '﷼'
						: (384.32, 5700) < (845.14, '612' ^ 0)
						? 'O'
						: 810.57,
				SEK: 'kr',
				SGD: T3a,
				THB: '฿',
				TRY:
					(4955, 3638) > 3021
						? (5665, 7380) > 222.92
							? (757.77, 121) === (759.18, '885.99' - 0)
								? ('d', 'j')
								: '₺'
							: ('s', 4.06e3)
						: 'P',
				TWD: 'NT$',
				VND: 2418 !== (924.04, 7130) ? ((5345, 9608) == (3650, +'261') ? 'P' : '₫') : 'H',
				XAF: 'FCFA',
				XCD: 'EC$',
				XOF: 'CFA',
				XPF: 'CFPF',
				ZAR: 'R',
			}
			h4J = Y4J[M4J]
			N9b.E9J()
			if (h4J) {
				return h4J
			} else {
				return M4J
			}
		}
		B9J.commas = function(J4J) {
			var M9a, t9a, G9a
			M9a = 1175623373
			t9a = -2002948543
			G9a = 2
			for (var V9a = 1; N9b.P5a(V9a.toString(), V9a.toString().length, 90863) !== M9a; V9a++) {
				N9b.E9J()
				G9a += +'2'
			}
			if (N9b.P5a(G9a.toString(), G9a.toString().length, '5964' >> 607249216) !== t9a) {
				N9b.E9J()
			}
			return J4J.toString().replace(
				/\B(?=(\d{3})+(?!\d))/g,
				(8150, +'6960') == (+'8070', 7378)
					? (0x23e8, 7.44e3)
					: (12.4, 7230) == 5830
					? 3760 > 4189
						? ('B', 0x1bfe)
						: (7.22e3, !!0)
					: ',',
			)
		}
		B9J.alert = function(U4J) {
			alert(U4J)
		}
		B9J.withinElement = function(O4J, k4J, L4J) {
			var r4J
			N9b.E9J()
			r4J = O4J.getBoundingClientRect()
			if (k4J <= r4J.left) {
				return !{}
			}
			if (L4J <= r4J.top) {
				return ![]
			}
			if (k4J >= r4J.left + O4J.offsetWidth) {
				return !'1'
			}
			if (L4J >= r4J.top + O4J.offsetHeight) {
				return !1
			}
			return !!{}
		}
		B9J.safeMouseOut = function(u4J, v4J) {
			var I3a
			I3a = 'mo'
			I3a += 'us'
			I3a += 'eou'
			I3a += 't'
			N9b.E9J()
			function s4J(N4J, x4J) {
				return function(b4J) {
					if (typeof b4J.pageX == 'undefined') {
						b4J.pageX = b4J.clientX
						b4J.pageY = b4J.clientY
					}
					if (B9J.withinElement(N4J, b4J.pageX, b4J.pageY)) {
						return
					}
					N9b.C9J()
					N4J.stxMouseOver = ![]
					x4J(b4J)
				}
			}
			u4J.addEventListener(I3a, s4J(u4J, v4J))
		}
		B9J.safeMouseOver = function(A4J, t4J) {
			var J3a
			J3a = 'm'
			J3a += 'ouseover'
			function e4J(P4J, d4J) {
				N9b.E9J()
				return function(g4J) {
					if (typeof g4J.pageX == 'undefined') {
						g4J.pageX = g4J.clientX
						g4J.pageY = g4J.clientY
					}
					N9b.C9J()
					if (B9J.withinElement(P4J, g4J.pageX, g4J.pageY)) {
						if (P4J.stxMouseOver) {
							return
						}
						P4J.stxMouseOver = !!{}
						d4J(g4J)
					}
				}
			}
			N9b.E9J()
			A4J.addEventListener(J3a, e4J(A4J, t4J))
		}
		B9J.installTapEvent = function(o4J, y4J) {
			var c4J
			c4J = function(G4J) {
				var z3a, z4J
				z3a = 'stxta'
				z3a += 'p'
				z4J = document.createEvent('Event')
				z4J.initEvent(z3a, !!1, !!'1')
				N9b.E9J()
				if (typeof G4J.pageX == 'undefined') {
					G4J.pageX = G4J.clientX
					G4J.pageY = G4J.clientY
				}
				z4J.pageX = G4J.pageX
				z4J.pageY = G4J.pageY
				G4J.target.dispatchEvent(z4J)
				if (y4J && y4J.stopPropagation) {
					G4J.stopPropagation()
				}
			}
			N9b.E9J()
			B9J.safeClickTouch(o4J, c4J, y4J)
		}
		B9J.safeClickTouch = function(S4J, j4J, D4J) {
			var O3a, T4J, D9a, o9a, S9a, q4J, E4J, C4J, l4J, n4J, B4J, m3a, t3a, M3a, h6a, K6a, x3a
			O3a = 'po'
			O3a += 'i'
			O3a += 'nt'
			O3a += 'erup'
			if (!D4J) {
				D4J = {}
			}
			if (!D4J.allowMultiple) {
				B9J.clearSafeClickTouches(S4J)
			}
			function Z4J(a4J) {
				return function(f4J) {
					N9b.C9J()
					if (a4J) {
						f4J.target.stxPressed = { time: new Date().getTime(), x: f4J.clientX, y: f4J.clientY }
					} else if (f4J.target.stxPressed) {
						if (
							Math.pow(f4J.target.stxPressed.x - f4J.clientX, +'2') +
								Math.pow(f4J.target.stxPressed.y - f4J.clientY, 2) >
							16
						) {
							f4J.target.stxPressed = null
						}
					}
				}
			}
			if (D4J.preventUnderlayClick !== !!0) {
				D4J.preventUnderlayClick = !!{}
			}
			if (D4J.absorbDownEvent !== !{}) {
				D4J.absorbDownEvent = !![]
			}
			D4J.allowAnotherDevice = 0
			D4J.registeredClick = !!''
			T4J = S4J.safeClickTouchEvents
			if (!T4J) {
				N9b.n9b(0)
				D9a = N9b.C9b('712679220', 2147483647)
				o9a = -95079818
				S9a = +'2'
				for (var Z9a = 1; N9b.f5a(Z9a.toString(), Z9a.toString().length, 77716) !== D9a; Z9a++) {
					T4J = S4J.safeClickTouchEvents = []
					S9a += 2
				}
				if (N9b.P5a(S9a.toString(), S9a.toString().length, 85621) !== o9a) {
					T4J = S4J.safeClickTouchEvents = []
				}
				T4J = S4J.safeClickTouchEvents = []
			}
			q4J = Q4J('mouseup', D4J)
			E4J = Q4J('touchend', D4J)
			C4J = Q4J(O3a, D4J)
			l4J = function(R4J) {
				N9b.E9J()
				R4J.stopPropagation()
			}
			n4J = {}
			N9b.E9J()
			if (B9J.safeClickTouchEvent) {
				B4J = Q4J(B9J.safeClickTouchEvent, D4J)
				S4J.addEventListener(B9J.safeClickTouchEvent, B4J)
				n4J[B9J.safeClickTouchEvent] = B4J
				T4J.push(n4J)
			} else if ('onpointerup' in document) {
				S4J.addEventListener('pointerdown', Z4J(!0))
				S4J.addEventListener('pointermove', Z4J())
				S4J.addEventListener('pointerup', C4J)
				n4J.pointerup = C4J
				if (D4J.absorbDownEvent) {
					S4J.addEventListener('pointerdown', l4J)
					n4J.pointerdown = l4J
				}
				T4J.push(n4J)
			} else {
				m3a = 'touchen'
				m3a += 'd'
				S4J.addEventListener('mousedown', Z4J(!![]))
				S4J.addEventListener('mousemove', Z4J())
				S4J.addEventListener('touchstart', Z4J(!!1))
				S4J.addEventListener('touchmove', Z4J())
				S4J.addEventListener('mouseup', q4J)
				S4J.addEventListener(m3a, E4J)
				n4J.mouseup = q4J
				n4J.touchend = E4J
				if (D4J.absorbDownEvent) {
					t3a = 'tou'
					t3a += 'c'
					t3a += 'hsta'
					t3a += 'rt'
					M3a = 'm'
					M3a += 'ous'
					M3a += 'edo'
					M3a += 'wn'
					S4J.addEventListener(M3a, l4J)
					n4J.mousedown = l4J
					S4J.addEventListener(t3a, l4J)
					n4J.touchstart = l4J
				}
				h6a = -154812918
				K6a = -+'2135128899'
				x3a = 2
				for (var k3a = 1; N9b.f5a(k3a.toString(), k3a.toString().length, 74318) !== h6a; k3a++) {
					T4J.push(n4J)
					x3a += 2
				}
				if (N9b.f5a(x3a.toString(), x3a.toString().length, '76936' & 2147483647) !== K6a) {
					T4J.push(n4J)
				}
			}
			function Q4J(p4J, X4J) {
				N9b.C9J()
				return function(F4J) {
					var m4J
					if (!B9J.safeClickTouchEvent) {
						if (!F4J.target.stxPressed) {
							return
						}
						m4J = F4J.target.stxPressed.time
						F4J.target.stxPressed = null
						if (m4J + 1000 < new Date().getTime()) {
							return
						}
					}
					if (X4J.safety && X4J.safety.recentlyDragged) {
						return
					}
					if (!F4J) {
						F4J = event
					}
					if ((F4J.which && F4J.which >= 2) || (F4J.button && F4J.button >= 2)) {
						return
					}
					if (X4J.preventUnderlayClick) {
						F4J.preventDefault()
					} else {
						if (X4J.lastType != p4J && Date.now() < X4J.allowAnotherDevice) {
							return
						}
						X4J.lastType = p4J
						N9b.n9b(1)
						var a4a = N9b.C9b(1006, 4, 16, 33, 15)
						X4J.allowAnotherDevice = Date.now() + a4a
					}
					j4J(F4J)
				}
			}
		}
		B9J.clearSafeClickTouches = function(i7J) {
			var W4J, I7J, H7J
			W4J = i7J.safeClickTouchEvents
			if (!W4J) {
				return
			}
			N9b.E9J()
			for (var K4J = 0; K4J < W4J.length; K4J++) {
				I7J = W4J[K4J]
				for (var V7J in I7J) {
					H7J = I7J[V7J]
					i7J.removeEventListener(V7J, H7J)
				}
			}
			i7J.safeClickTouchEvents = null
		}
		B9J.safeDrag = function(r7J, k7J, U7J, O7J) {
			var Z3a, B3a, S3a, G5a, U5a, V5a, L7J, w7J, h7J, M7J, Y7J
			Z3a = 'touch'
			Z3a += 'start'
			B3a = 'to'
			B3a += 'uchstart'
			S3a = 'm'
			S3a += 'ou'
			S3a += 'sed'
			S3a += 'own'
			N9b.E9J()
			G5a = -713490889
			U5a = -1301414500
			V5a = 2
			for (var o5a = 1; N9b.f5a(o5a.toString(), o5a.toString().length, 80357) !== G5a; o5a++) {
				L7J = 657
				w7J = !![]
				N9b.n9b(2)
				V5a += N9b.C9b(2, '2')
			}
			if (N9b.f5a(V5a.toString(), V5a.toString().length, 35206) !== U5a) {
				L7J = 100
				w7J = !{}
			}
			h7J = 0
			N9b.F9b(0)
			M7J = N9b.C9b('0', 2147483647)
			Y7J = { recentlyDragged: ![] }
			r7J.addEventListener('mousedown', J7J(S3a))
			r7J.addEventListener('pointerdown', J7J('pointerdown'))
			function J7J(v7J) {
				var G3a, u7J
				G3a = 'touche'
				function N7J(b7J) {
					var R5a, h5a, K5a
					if (b7J.touches) {
						if (b7J.touches.length >= 1) {
							return b7J.touches[0].pageY
						} else if (b7J.changedTouches && b7J.changedTouches.length >= 1) {
							R5a = 2139529389
							h5a = -306904621
							K5a = 2
							for (
								var F9a = 1;
								N9b.P5a(F9a.toString(), F9a.toString().length, 55563) !== R5a;
								F9a++
							) {
								return b7J.changedTouches[2].pageY
							}
							if (N9b.P5a(K5a.toString(), K5a.toString().length, 31503) !== h5a) {
								return b7J.changedTouches[0].pageY
							}
						}
					}
					if (typeof b7J.pageY == 'undefined') {
						return b7J.clientY
					}
					N9b.C9J()
					return b7J.pageY
				}
				G3a += 'nd'
				function s7J(x7J) {
					var D3a
					D3a = 'u'
					D3a += 'ndefine'
					D3a += 'd'
					N9b.E9J()
					if (x7J.touches) {
						if (x7J.touches.length >= 1) {
							return x7J.touches[0].pageX
						} else if (x7J.changedTouches && x7J.changedTouches.length >= 1) {
							return x7J.changedTouches[0].pageX
						}
					}
					if (typeof x7J.pageX == D3a) {
						return x7J.clientX
					}
					return x7J.pageX
				}
				u7J = {
					mousedown: { move: 'mousemove', up: 'mouseup' },
					pointerdown: { move: 'pointermove', up: 'pointerup' },
					touchstart: { move: 'touchmove', up: G3a },
				}
				return function(A7J) {
					var t7J
					if (w7J) {
						return
					}
					w7J = !!'1'
					B9J.ChartEngine.ignoreTouch = !![]
					t7J = function(e7J) {
						if (e7J && e7J.preventDefault) {
							e7J.preventDefault()
						}
						Y7J.recentlyDragged = !!{}
						e7J.displacementX = s7J(e7J) - h7J
						N9b.E9J()
						e7J.displacementY = N7J(e7J) - M7J
						U7J(e7J)
					}
					if (U7J) {
						document.body.addEventListener(u7J[v7J].move, t7J)
					}
					document.body.addEventListener(u7J[v7J].up, function(P7J) {
						B9J.ChartEngine.ignoreTouch = ![]
						if (U7J) {
							document.body.removeEventListener(u7J[v7J].move, t7J)
						}
						document.body.removeEventListener(u7J[v7J].up, arguments.callee)
						P7J.displacementX = s7J(P7J) - h7J
						P7J.displacementY = N7J(P7J) - M7J
						if (O7J) {
							O7J(P7J)
						}
						N9b.C9J()
						setTimeout(
							(function(d7J) {
								N9b.C9J()
								return function() {
									N9b.C9J()
									d7J.recentlyDragged = !{}
								}
							})(Y7J),
							+'50',
						)
					})
					setTimeout(function() {
						N9b.C9J()
						w7J = !{}
					}, L7J)
					h7J = s7J(A7J)
					M7J = N7J(A7J)
					if (k7J) {
						k7J(A7J)
					}
				}
			}
			r7J.addEventListener(B3a, J7J(Z3a))
			return Y7J
		}
		if (B9J.isSurface) {
			B9J.gesture = new MSGesture()
			B9J.gesture.target = document.body
			B9J.gesturePointerId = null
		}
		B9J.inputKeyEvents = function(g7J, y7J) {
			N9b.E9J()
			g7J.addEventListener(
				'keyup',
				function(o7J) {
					var c7J
					c7J = window.event ? event.keyCode : o7J.keyCode
					N9b.E9J()
					switch (c7J) {
						case 13:
							y7J()
							break
						case 27:
							g7J.value = ''
							break
						default:
							break
					}
				},
				![],
			)
		}
		B9J.fixScreen = function() {
			N9b.E9J()
			N9b.F9b(3)
			window.scrollTo(0, N9b.U9b('0', 856447904))
		}
		B9J.setCaretPosition = function(G7J, S7J) {
			var z7J, b5a, i5a, N5a, A3a, y3a, j3a
			G7J.style.zIndex = 5000
			N9b.E9J()
			if (G7J.setSelectionRange) {
				B9J.focus(G7J)
				try {
					G7J.setSelectionRange(S7J, S7J)
				} catch (D7J) {}
			} else if (G7J.createTextRange) {
				z7J = G7J.createTextRange()
				z7J.collapse(!![])
				b5a = -1337155831
				i5a = 1685145145
				N5a = 2
				for (var E5a = 1; N9b.f5a(E5a.toString(), E5a.toString().length, 29748) !== b5a; E5a++) {
					A3a = 'char'
					A3a += 'a'
					A3a += 'cte'
					A3a += 'r'
					z7J.moveEnd(A3a, S7J)
					z7J.moveStart('character', S7J)
					z7J.select()
					N5a += 2
				}
				if (N9b.f5a(N5a.toString(), N5a.toString().length, 34300) !== i5a) {
					y3a = 'c'
					y3a += 'har'
					y3a += 'acte'
					y3a += 'r'
					j3a = 'c'
					j3a += 'har'
					j3a += 'a'
					j3a += 'cter'
					z7J.moveEnd(j3a, S7J)
					z7J.moveStart(y3a, S7J)
					z7J.select()
				}
			}
		}
		B9J.setValueIfNotActive = function(n7J, l7J) {
			if (document.activeElement == n7J) {
				return
			}
			N9b.C9J()
			n7J.value = l7J
		}
		B9J.hideKeyboard = function(T7J) {
			var Z7J
			N9b.E9J()
			Z7J = document.activeElement
			if (Z7J.tagName == 'INPUT' || Z7J.tagName == 'TEXTAREA') {
				Z7J.blur()
				window.focus()
				if (T7J) {
					if (T7J === document.body || document.body.contains(T7J)) {
						T7J.focus()
					}
				}
			}
		}
		B9J.boxIntersects = function(j7J, E7J, C7J, B7J, q7J, X7J, p7J, F7J, m7J) {
			var Q7J
			Q7J = B9J.linesIntersect
			if (Q7J(j7J, C7J, E7J, E7J, q7J, p7J, X7J, F7J, m7J)) {
				return !![]
			} else if (Q7J(j7J, C7J, B7J, B7J, q7J, p7J, X7J, F7J, m7J)) {
				return !!1
			} else if (Q7J(j7J, j7J, E7J, B7J, q7J, p7J, X7J, F7J, m7J)) {
				return !![]
			} else if (Q7J(C7J, C7J, E7J, B7J, q7J, p7J, X7J, F7J, m7J)) {
				return !!1
			}
			return !'1'
		}
		B9J.linesIntersect = function(V8J, J8J, W7J, Y8J, i8J, M8J, R7J, h8J, f7J) {
			var s3a, X3a, K7J, H8J, w8J, a7J, I8J, j5a, v5a, g5a
			s3a = 'ver'
			s3a += 'tic'
			s3a += 'a'
			s3a += 'l'
			X3a = 'segme'
			X3a += 'nt'
			N9b.n9b(4)
			K7J = N9b.C9b(R7J, h8J, M8J, i8J, V8J, W7J, Y8J, J8J)
			N9b.n9b(4)
			H8J = N9b.C9b(i8J, M8J, h8J, R7J, R7J, i8J, V8J, W7J)
			N9b.n9b(4)
			w8J = N9b.C9b(V8J, J8J, Y8J, W7J, R7J, i8J, V8J, W7J)
			if (K7J === 0) {
				if (H8J === 0 && w8J === 0) {
					return !![]
				}
				return !1
			}
			N9b.n9b(5)
			a7J = N9b.U9b(H8J, K7J)
			N9b.E9J()
			N9b.n9b(5)
			I8J = N9b.C9b(w8J, K7J)
			if (f7J == X3a) {
				if (a7J >= 0 && a7J <= +'1' && I8J >= 0 && I8J <= 1) {
					return !![]
				}
			} else if (f7J == 'line' || f7J == 'horizontal' || f7J == s3a) {
				if (a7J >= 0 && a7J <= +'1') {
					return !![]
				}
			} else if (f7J == 'ray') {
				if (a7J >= 0 && a7J <= '1' >> 579452288 && I8J >= +'0') {
					N9b.F9b(6)
					j5a = N9b.C9b('629010445', 0)
					v5a = -801473668
					g5a = 2
					for (var X5a = 1; N9b.f5a(X5a.toString(), X5a.toString().length, 92488) !== j5a; X5a++) {
						return !{}
					}
					if (N9b.P5a(g5a.toString(), g5a.toString().length, 70748) !== v5a) {
						return !0
					}
				}
			}
			return !'1'
		}
		B9J.yIntersection = function(O8J, A8J) {
			var L8J, b8J, r8J, u8J, U8J, v8J, k8J, s8J, N8J, t8J, I6a, J6a, e6a, e8J, x8J
			L8J = O8J.x0
			b8J = O8J.x1
			r8J = A8J
			u8J = A8J
			U8J = O8J.y0
			v8J = O8J.y1
			k8J = +'0'
			s8J = 10000
			N9b.F9b(4)
			N8J = N9b.U9b(k8J, s8J, u8J, r8J, L8J, U8J, v8J, b8J)
			N9b.F9b(4)
			t8J = N9b.C9b(r8J, u8J, s8J, k8J, k8J, r8J, L8J, U8J)
			N9b.C9J()
			if (N8J === 0) {
				return null
			}
			I6a = 1505750661
			J6a = 1055663158
			e6a = 2
			for (var O6a = 1; N9b.f5a(O6a.toString(), O6a.toString().length, 91539) !== I6a; O6a++) {
				N9b.F9b(6)
				e8J = N9b.C9b(t8J, N8J)
				N9b.F9b(6)
				e6a += N9b.C9b('2', 0)
			}
			if (N9b.P5a(e6a.toString(), e6a.toString().length, 5931) !== J6a) {
				N9b.n9b(7)
				e8J = N9b.U9b(N8J, t8J)
			}
			N9b.F9b(5)
			e8J = N9b.C9b(t8J, N8J)
			N9b.n9b(8)
			x8J = N9b.C9b(U8J, v8J, U8J, e8J)
			return x8J
		}
		B9J.xIntersection = function(g8J, D8J) {
			var P8J, o8J, d8J, G8J, c8J, l8J, y8J, z8J, S8J, T8J, Z8J, n8J
			P8J = g8J.x0
			o8J = g8J.x1
			d8J = 0
			N9b.n9b(9)
			G8J = N9b.U9b('10000', 932352576)
			c8J = g8J.y0
			l8J = g8J.y1
			y8J = D8J
			z8J = D8J
			N9b.F9b(4)
			S8J = N9b.C9b(y8J, z8J, G8J, d8J, P8J, c8J, l8J, o8J)
			N9b.n9b(4)
			T8J = N9b.U9b(d8J, G8J, z8J, y8J, y8J, d8J, P8J, c8J)
			if (S8J === +'0') {
				return null
			}
			N9b.F9b(5)
			Z8J = N9b.C9b(T8J, S8J)
			N9b.n9b(8)
			n8J = N9b.C9b(P8J, o8J, P8J, Z8J)
			N9b.E9J()
			return n8J
		}
		B9J.intersectLineLineX = function(Q8J, X8J, p8J, a8J, q8J, C8J, E8J, F8J) {
			var m8J, B8J, j8J
			N9b.n9b(4)
			m8J = N9b.U9b(q8J, C8J, F8J, E8J, E8J, q8J, Q8J, p8J)
			N9b.C9J()
			N9b.n9b(4)
			B8J = N9b.U9b(E8J, F8J, C8J, q8J, Q8J, p8J, a8J, X8J)
			N9b.F9b(5)
			j8J = N9b.C9b(m8J, B8J)
			N9b.F9b(8)
			return N9b.C9b(Q8J, X8J, Q8J, j8J)
		}
		B9J.intersectLineLineY = function(V5J, M5J, f8J, i5J, R8J, K8J, W8J, w5J) {
			var h5J, I5J, c6a, H6a, s6a, H5J
			N9b.F9b(4)
			h5J = N9b.U9b(R8J, K8J, w5J, W8J, W8J, R8J, V5J, f8J)
			N9b.n9b(4)
			I5J = N9b.C9b(W8J, w5J, K8J, R8J, V5J, f8J, i5J, M5J)
			c6a = -641653005
			H6a = 1640775205
			s6a = +'2'
			for (var R6a = 1; N9b.P5a(R6a.toString(), R6a.toString().length, 54480) !== c6a; R6a++) {
				N9b.n9b(5)
				H5J = N9b.C9b(h5J, I5J)
				s6a += 2
			}
			if (N9b.f5a(s6a.toString(), s6a.toString().length, +'93850') !== H6a) {
				N9b.F9b(6)
				H5J = N9b.U9b(h5J, I5J)
			}
			N9b.n9b(8)
			return N9b.C9b(f8J, i5J, f8J, H5J)
		}
		B9J.privateBrowsingAlert = ![]
		B9J.localStorage = typeof localStorage !== R3a ? localStorage : {}
		B9J.localStorageSetItem = function(Y5J, J5J) {
			try {
				B9J.localStorage.setItem(Y5J, J5J)
			} catch (U5J) {
				var K3a
				if (!B9J.privateBrowsingAlert) {
					K3a = 'No storage space available.  Possible causes '
					K3a += 'include browser being in Pr'
					K3a += 'ivate Browsing mode, or maximum storage space has'
					K3a += ' been reached.'
					B9J.alert(K3a)
					B9J.privateBrowsingAlert = !!{}
				}
			}
		}
		B9J.loadUI = function(L5J, O5J) {
			var r5J, k5J
			r5J = document.createElement('iframe')
			k5J = function() {
				var u5J, x4a, N5J, v5J, x5J
				u5J = null
				try {
					u5J = r5J.contentDocument || r5J.contentWindow.document
				} catch (b5J) {
					return O5J(b5J)
				}
				N9b.C9J()
				if (u5J && !u5J.title) {
					x4a = 'd'
					x4a += 'i'
					x4a += 'v'
					N5J = u5J.body.innerHTML
					v5J = document.createElement(x4a)
					document.body.removeChild(r5J)
					B9J.innerHTML(v5J, N5J)
					for (var s5J = 0; s5J < v5J.children.length; s5J++) {
						x5J = v5J.children[s5J].cloneNode(!!'1')
						document.body.appendChild(x5J)
					}
					O5J(null)
				} else {
					O5J(new Error('iFrame not found or document has a title'))
				}
			}
			r5J.src = L5J + '?' + B9J.uniqueID()
			r5J.hidden = !!1
			r5J.addEventListener('load', k5J, !'1')
			document.body.appendChild(r5J)
		}
		B9J.loadScript = function(P5J, e5J) {
			var A5J, t5J, d5J
			if (!B9J.loadedScripts) {
				B9J.loadedScripts = {}
			}
			N9b.C9J()
			if (B9J.loadedScripts[P5J]) {
				if (e5J) {
					e5J()
				}
				return
			}
			A5J = document.createElement('SCRIPT')
			A5J.async = !![]
			A5J.onload = function() {
				B9J.loadedScripts[P5J] = !!'1'
				if (e5J) {
					e5J()
				}
			}
			if (typeof isIE8 != 'undefined') {
				A5J.onreadystatechange = function() {
					var F4a
					F4a = 'l'
					F4a += 'oad'
					F4a += 'e'
					F4a += 'd'
					N9b.C9J()
					if (A5J.readyState == F4a) {
						B9J.loadedScripts[P5J] = !!1
						if (e5J) {
							setTimeout(e5J, 0)
						}
					}
				}
			}
			t5J = P5J
			if (
				t5J.indexOf(
					(4593, 2060) == (+'752.77', 7160)
						? (2.34e3, !!1)
						: (4190, 973.11) === 444.49
						? ('719.2' - 0, 1003) <= '742.18' * 1
							? ('8.04e+3' - 0, 793.85)
							: ('T', 6.76e3)
						: '?',
				) == -1
			) {
				N9b.n9b(10)
				var c4a = N9b.C9b(371910, 4, 94668)
				N9b.F9b(11)
				var H4a = N9b.U9b(54060, 8, 16, 50904)
				N9b.n9b(12)
				var s4a = N9b.C9b(19, 17, 48897, 3054)
				N9b.n9b(13)
				var b7a = N9b.U9b(21752, 1104, 2, 20)
				N9b.F9b(14)
				var E7a = N9b.C9b(18, 11, 28, 17, 927)
				t5J =
					t5J +
					(c4a === (+'7680', 488.23)
						? (H4a, '0x31b' ^ 0)
						: (s4a, 3350) <= 5140
						? '?'
						: (2660, 649.06) === b7a
						? E7a
						: ('785.45' - 0, !![])) +
					Date.now()
			} else {
				t5J = t5J + '&' + Date.now()
			}
			A5J.src = t5J
			d5J = document.getElementsByTagName('script')[+'0']
			d5J.parentNode.insertBefore(A5J, d5J.nextSibling)
		}
		B9J.loadStylesheet = function(G5J, o5J) {
			var q4a, g5J, y5J, c5J
			q4a = 'text'
			q4a += '/c'
			q4a += 'ss'
			g5J = document.createElement('link')
			g5J.rel = 'stylesheet'
			g5J.type = q4a
			g5J.media = 'screen'
			N9b.E9J()
			N9b.n9b(15)
			var z7a = N9b.C9b(6895, 4, 66, 172, 10)
			N9b.F9b(16)
			var M7a = N9b.U9b(52870, 2, 23325)
			N9b.F9b(17)
			var G7a = N9b.U9b(1683, 1699, 16, 1690)
			N9b.n9b(18)
			var D7a = N9b.C9b(17964, 26940, 4)
			N9b.F9b(19)
			var B7a = N9b.C9b(707, 4240, 707)
			N9b.F9b(20)
			var Z7a = N9b.C9b(16, 7898, 417, 17)
			N9b.n9b(6)
			var A7a = N9b.U9b(42228, 39882)
			g5J.href =
				G5J +
				((z7a, '5484' * 1) > M7a
					? '?'
					: 605.15 >= (2274, G7a)
					? (315, 586.24)
					: (501.06, 742.89) < (D7a, B7a)
					? (!!{}, Z7a)
					: A7a) +
				Date.now()
			g5J.onload = function() {
				if (o5J) {
					o5J()
				}
			}
			y5J = document.getElementsByTagName('link')
			c5J = y5J[y5J.length - 1]
			c5J.parentNode.insertBefore(g5J, c5J.nextSibling)
		}
		B9J.loadWidget = function(z5J, S5J) {
			N9b.E9J()
			N9b.F9b(7)
			B9J.loadStylesheet(N9b.C9b('.css', z5J), function() {
				N9b.E9J()
				N9b.n9b(7)
				B9J.loadUI(N9b.U9b('.html', z5J), function(D5J) {
					var C4a
					N9b.C9J()
					if (D5J) {
						S5J(D5J)
					} else {
						C4a = '.'
						C4a += 'js'
						N9b.n9b(7)
						B9J.loadScript(N9b.U9b(C4a, z5J), S5J)
					}
				})
			})
		}
		B9J.fillTransparentCanvas = function(n5J, T5J, Z5J, Q5J) {
			var w4a, l5J
			w4a = 'd'
			w4a += 'estinati'
			w4a += 'on-o'
			w4a += 'ver'
			l5J = n5J.globalCompositeOperation
			n5J.globalCompositeOperation = w4a
			n5J.fillStyle = T5J
			n5J.fillRect(0, 0, Z5J, Q5J)
			n5J.globalCompositeOperation = l5J
		}
		B9J.tickedRect = function(q5J, E5J, B5J, X5J, j5J, p5J, F5J, m5J) {
			var C5J
			B9J.rect(q5J, E5J, B5J, X5J, j5J, p5J, F5J, m5J)
			C5J = Math.round(B5J + j5J / 2) + ('0.5' - 0)
			q5J.beginPath()
			N9b.n9b(6)
			q5J.moveTo(N9b.C9b(E5J, 2), C5J)
			q5J.lineTo(E5J, C5J)
			q5J.stroke()
			q5J.closePath()
		}
		B9J.roundRect = function(a5J, f5J, R5J, M0u, r0u, W5J, s0u, U0u, L0u) {
			var W6a, k6a, f6a, k0u, V0u, i0u, J0u, K5J, u0u, w0u, v0u
			if (typeof U0u == 'undefined') {
				U0u = !''
			}
			if (typeof W5J === 'undefined') {
				W6a = -1308869155
				k6a = -2060855000
				f6a = 2
				for (var d6a = +'1'; N9b.P5a(d6a.toString(), d6a.toString().length, 78396) !== W6a; d6a++) {
					W5J = 2
					f6a += 2
				}
				if (N9b.P5a(f6a.toString(), f6a.toString().length, 9190) !== k6a) {
					W5J = 2
				}
				W5J = 5
				if (M0u < 0) {
					W5J = -5
				}
			}
			k0u = M0u < 0 ? W5J * -1 : W5J
			if (W5J && !L0u) {
				N9b.F9b(6)
				f5J = N9b.U9b(f5J, 1)
			}
			N9b.n9b(7)
			V0u = N9b.U9b(W5J, f5J)
			N9b.n9b(7)
			i0u = N9b.U9b(M0u, f5J)
			N9b.F9b(7)
			J0u = N9b.U9b(k0u, R5J)
			N9b.n9b(7)
			K5J = N9b.C9b(r0u, R5J)
			N9b.n9b(6)
			u0u = N9b.U9b(i0u, W5J)
			N9b.F9b(6)
			w0u = N9b.U9b(K5J, k0u)
			a5J.beginPath()
			a5J.moveTo(V0u, R5J)
			N9b.E9J()
			a5J.lineTo(u0u, R5J)
			a5J.quadraticCurveTo(i0u, R5J, i0u, J0u)
			a5J.lineTo(i0u, w0u)
			a5J.quadraticCurveTo(i0u, K5J, u0u, K5J)
			a5J.lineTo(V0u, K5J)
			if (L0u == 'flush') {
				a5J.lineTo(f5J, K5J)
				a5J.lineTo(f5J, R5J)
			}
			if (L0u == 'arrow') {
				N9b.F9b(6)
				a5J.quadraticCurveTo(f5J, K5J, N9b.C9b(f5J, W5J), w0u)
				v0u = M0u < 0 ? 1 : -1
				N9b.F9b(21)
				a5J.lineTo(N9b.C9b(f5J, r0u, 2, v0u), N9b.U9b(R5J, r0u, 2, N9b.n9b(22)))
				N9b.n9b(6)
				a5J.lineTo(N9b.U9b(f5J, W5J), J0u)
				a5J.quadraticCurveTo(f5J, R5J, V0u, R5J)
			} else {
				a5J.quadraticCurveTo(f5J, K5J, f5J, w0u)
				a5J.lineTo(f5J, J0u)
				a5J.quadraticCurveTo(f5J, R5J, V0u, R5J)
			}
			a5J.closePath()
			if (U0u) {
				a5J.stroke()
			}
			if (s0u) {
				a5J.fill()
			}
		}
		B9J.roundRectArrow = function(N0u, b0u, A0u, t0u, e0u, P0u, d0u, y0u) {
			N9b.E9J()
			B9J.roundRect(N0u, b0u, A0u, t0u, e0u, P0u, d0u, y0u, 'arrow')
		}
		B9J.semiRoundRect = function(c0u, o0u, G0u, z0u, S0u, D0u, n0u, l0u) {
			N9b.C9J()
			B9J.roundRect(c0u, o0u, G0u, z0u, S0u, D0u, n0u, l0u, 'flush')
		}
		B9J.rect = function(Z0u, Q0u, q0u, C0u, B0u, m0u, j0u, F0u) {
			N9b.C9J()
			B9J.roundRect(Z0u, Q0u, q0u, C0u, B0u, 0, j0u, F0u)
		}
		B9J.noop = function(a0u, f0u, W0u, i2u, I2u, V2u, H2u, w2u) {}
		N9b.C9J()
		B9J.getLines = function(k2u, u2u, L2u) {
			var U2u, Y2u, h2u, r2u, O2u, J2u
			U2u = u2u.split(
				+'622.3' < +'111.05'
					? (0x1242, 'z')
					: (9530, 421.67) < (3160, 448.32)
					? ' '
					: (759, 7575) < (2403, 2766)
					? (2.25e3, 'n')
					: 'm',
			)
			Y2u = []
			h2u = ''
			r2u = 0
			O2u = !{}
			for (var M2u = 0; M2u < U2u.length; M2u++) {
				J2u = U2u[M2u]
				r2u = k2u.measureText(h2u + J2u).width
				if (r2u < L2u) {
					if (O2u) {
						h2u +=
							('8612' & 2147483647) == (7810, 8290)
								? !1
								: (284, +'1540') < (4091, 295.19)
								? ('c', 0x18ff)
								: +'159' <= (6191, +'8280')
								? ' '
								: (!!'1', !!'1')
					}
					O2u = !!'1'
					h2u += J2u
				} else {
					Y2u.push(h2u)
					h2u = J2u
				}
				if (M2u === U2u.length - ('1' >> 1024074272)) {
					Y2u.push(h2u)
					break
				}
			}
			return Y2u
		}
		B9J.readablePeriodicity = function(v2u) {
			var s2u, N2u, i6a, N6a, Q6a, e9a, z9a, O9a, W4a
			s2u = v2u.layout.periodicity
			N2u = v2u.layout.interval
			if (typeof v2u.layout.interval == 'number' && v2u.layout.timeUnit) {
				s2u = v2u.layout.interval * v2u.layout.periodicity
				N2u = v2u.layout.timeUnit
			} else if (typeof v2u.layout.interval == 'number' && !v2u.layout.timeUnit) {
				s2u = v2u.layout.interval * v2u.layout.periodicity
				i6a = -2064177755
				N6a = 1632990510
				Q6a = 2
				for (var T6a = 1; N9b.P5a(T6a.toString(), T6a.toString().length, 91541) !== i6a; T6a++) {
					N2u = ''
					Q6a += 2
				}
				if (N9b.f5a(Q6a.toString(), Q6a.toString().length, '92005' & 2147483647) !== N6a) {
					N2u = ''
				}
				N2u = 'minute'
			}
			if (s2u % 60 === 0 && N2u == 'minute') {
				s2u /= 60
				N9b.F9b(0)
				e9a = -N9b.U9b('1548119707', 2147483647)
				z9a = +'1385106732'
				O9a = +'2'
				for (var l9a = 1; N9b.f5a(l9a.toString(), l9a.toString().length, 16571) !== e9a; l9a++) {
					N2u = ''
					O9a += +'2'
				}
				if (N9b.P5a(O9a.toString(), O9a.toString().length, 58345) !== z9a) {
					W4a = 'hou'
					W4a += 'r'
					N2u = W4a
				}
			}
			return s2u + ' ' + v2u.translateIf(N2u.capitalize())
		}
		B9J.translatableTextNode = function(A2u, x2u, t2u) {
			var f4a, e2u, b2u
			if (A2u.translationCallback) {
				f4a = 'ori'
				f4a += 'gin'
				f4a += 'al'
				e2u = A2u.translationCallback(x2u)
				b2u = document.createElement('translate')
				b2u.setAttribute(f4a, x2u)
				b2u.innerHTML = A2u.translationCallback(x2u, t2u)
				return b2u
			} else {
				return document.createTextNode(x2u)
			}
		}
		B9J.clearCanvas = function(P2u, g2u) {
			var d2u, U6a, V6a, D6a, y2u
			P2u.isDirty = ![]
			d2u = P2u.context
			N9b.E9J()
			d2u.clearRect(0, +'0', P2u.width, P2u.height)
			if (B9J.isAndroid && !B9J.is_chrome) {
				if (B9J.ChartEngine.useOldAndroidClear && g2u) {
					U6a = -+'1314572066'
					V6a = -849300313
					N9b.F9b(23)
					D6a = N9b.U9b(0, '2')
					for (var S6a = 1; N9b.f5a(S6a.toString(), S6a.toString().length, 77908) !== U6a; S6a++) {
						d2u.fillStyle = g2u.containerColor
						D6a += 2
					}
					if (N9b.f5a(D6a.toString(), D6a.toString().length, '45584' & 2147483647) !== V6a) {
						d2u.fillStyle = g2u.containerColor
					}
					d2u.fillStyle = g2u.containerColor
					d2u.fillRect(0, 0, P2u.width, P2u.height)
					N9b.F9b(6)
					d2u.clearRect(N9b.C9b('0', 0), 0, P2u.width, P2u.height)
				}
				y2u = P2u.width
				N9b.n9b(24)
				P2u.width = N9b.C9b(1, '1')
				P2u.width = y2u
			}
		}
		B9J.monthLetters = [
			682.12 < (1798, 3760)
				? 1600 === +'238.34'
					? ('N', !{})
					: 833.16 > 2682
					? (!'1', 0x141b)
					: 'J'
				: ![],
			'F',
			'M',
			(1070, '7850' << 245756096) == 268 ? !!1 : (1570, 7700) == 7910 ? '0x1f28' - 0 : 'A',
			'M',
			'J',
			7610 <= (613.36, 696.22)
				? (169.19, 459.94)
				: (9206, 287.69) < (+'1195', 433.62)
				? 'J'
				: (1450, 3230) < (7912, '7850' ^ 0)
				? 1.65e3
				: (!![], 0xa32),
			(6320, +'5683') == ('2700' << 1475852672, 2056)
				? (+'800.43', !!1)
				: (3919, 533.91) > +'535'
				? 770.2 > 320.1
					? (0x9d2, 650.71)
					: (!'', !{})
				: 'A',
			'S',
			'O',
			6890 === 6710 ? (+'589.11', !!0) : 'N',
			'D',
		]
		B9J.monthAbv = ['Jan', P4a, 'Mar', 'Apr', 'May', d4a, 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', L4a]
		B9J.MILLISECOND = 1
		B9J.SECOND = 1000
		B9J.MINUTE = +'60' * B9J.SECOND
		B9J.HOUR = +'60' * B9J.MINUTE
		B9J.DAY = 24 * B9J.HOUR
		N9b.n9b(19)
		var a7a = N9b.U9b(21, 6, 18)
		B9J.WEEK = a7a * B9J.DAY
		N9b.n9b(6)
		var H7a = N9b.U9b(496, 465)
		B9J.MONTH = H7a * B9J.DAY
		N9b.F9b(10)
		var Y7a = N9b.U9b(2830, 9, 355)
		B9J.YEAR = Y7a * B9J.DAY
		B9J.DECADE = 10 * B9J.YEAR
		B9J.monthAsDisplay = function(o2u, G2u, c2u) {
			if (G2u) {
				if (c2u && c2u.monthLetters) {
					return c2u.monthLetters[o2u]
				}
				return B9J.monthLetters[o2u]
			} else {
				if (c2u && c2u.monthAbv) {
					return c2u.monthAbv[o2u]
				}
				return B9J.monthAbv[o2u]
			}
		}
		B9J.timeAsDisplay = function(z2u, Q2u, T2u) {
			var n2u, l2u, Z2u, D2u, S2u
			n2u = Q2u ? Q2u.internationalizer : null
			if (n2u) {
				if (T2u == B9J.SECOND) {
					return n2u.hourMinuteSecond.format(z2u)
				} else if (T2u == B9J.MILLISECOND) {
					N9b.F9b(25)
					var K7a = N9b.U9b(49647, 69950, 19, 2, 13)
					N9b.F9b(7)
					var F8a = N9b.U9b(20, 1200)
					N9b.n9b(26)
					var w8a = N9b.C9b(163, 3, 1482, 329)
					return (
						n2u.hourMinuteSecond.format(z2u) +
						(958.02 != (1444, K7a)
							? (+'6890', 4038) === F8a
								? (570.32, 9511) == (3830, +'7547')
									? '8.57e+3' ^ 0
									: (!!{}, '2.14e+3' ^ 0)
								: '.'
							: (![], w8a)) +
						z2u.getMilliseconds()
					)
				} else {
					return n2u.hourMinute.format(z2u)
				}
			} else {
				l2u = z2u.getMinutes()
				if (l2u < 10) {
					N9b.F9b(7)
					l2u = N9b.C9b(
						l2u,
						565.32 == (+'1952', 8700)
							? 7.55e3
							: 6108 != (444.28, 6670)
							? '0'
							: (3143, 7320) <= 267.19
							? 746.2
							: (0x1dc3, 9.21e3),
					)
				}
				Z2u = z2u.getHours() + ':' + l2u
				D2u = ''
				if (T2u <= B9J.SECOND) {
					D2u = z2u.getSeconds()
					if (D2u < 10) {
						N9b.n9b(7)
						D2u = N9b.U9b(
							D2u,
							6235 != (9616, 414)
								? (4901, 760.78) >= (+'4970', 1475)
									? 5440 != (891.92, 487)
										? !!{}
										: ('143.32' * 1, !![])
									: '0'
								: !{},
						)
					}
					N9b.F9b(7)
					Z2u += N9b.C9b(
						D2u,
						1445 !== (8767, 608)
							? 9540 >= (8720, 8881)
								? 7104 < (+'58.22', '2080' * 1)
									? 'h'
									: ':'
								: 0x142e
							: (552.34, 0x25b5),
					)
				}
				if (T2u == B9J.MILLISECOND) {
					S2u = z2u.getMilliseconds()
					if (S2u < 10) {
						N9b.n9b(7)
						S2u = N9b.C9b(S2u, '00')
					} else if (S2u < +'100') {
						N9b.n9b(7)
						S2u = N9b.C9b(S2u, '0')
					}
					N9b.F9b(7)
					Z2u += N9b.U9b(S2u, (6850, 9770) != (+'909.64', +'5812') ? '.' : 0xb5c)
				}
				return Z2u
			}
		}
		B9J.fixPrice = function(C2u) {
			var y9a, X9a, a9a, q2u
			if (!C2u && C2u !== ('0' | 0)) {
				y9a = -2106063987
				N9b.F9b(6)
				X9a = N9b.U9b('1175506964', 0)
				a9a = 2
				for (var H9a = 1; N9b.f5a(H9a.toString(), H9a.toString().length, 94277) !== y9a; H9a++) {
					return 1
				}
				if (N9b.P5a(a9a.toString(), a9a.toString().length, 98896) !== X9a) {
					return 1
				}
				return null
			}
			q2u = C2u.toFixed(10)
			for (var E2u = q2u.length - 1; E2u > ('1' | 1); E2u--) {
				if (
					q2u.charAt(E2u) !=
					((257.12, 7119) <= 913.56
						? +'407.75' !== 9340
							? (5408, 78.4) != 6031
								? '2.25e+3' | 2250
								: (0x199e, 148.89)
							: !0
						: '0')
				) {
					break
				}
			}
			N9b.n9b(0)
			q2u = q2u.substring(N9b.C9b('0', 2147483647), N9b.C9b(1, E2u, N9b.n9b(7)))
			return parseFloat(q2u)
		}
		B9J.condenseInt = function(B2u) {
			var S5a, B5a, Z5a
			if (B2u === null || typeof B2u == 'undefined') {
				return ''
			}
			if (B2u === Infinity || B2u === -Infinity) {
				return 'n/a'
			}
			N9b.C9J()
			if (B2u > +'0') {
				if (B2u > 1000000000000) {
					N9b.F9b(27)
					var W8a = N9b.C9b(12, 1091614374, 10916143746, 12, 11)
					N9b.n9b(28)
					var k8a = N9b.U9b(14, 43250, 9, 2, 185912)
					N9b.n9b(15)
					var P8a = N9b.U9b(11680, 7, 29, 344, 16)
					B2u =
						Math.round(B2u / 100000000000) / ('10' >> W8a) +
						(k8a !== 197.22
							? 6250 === P8a
								? (!!'', !{})
								: (278.16, 3960) > 316.7
								? 't'
								: (!0, 71.58)
							: (![], 458.0))
				} else if (B2u > 100000000000) {
					B2u = Math.round(B2u / +'1000000000') + 'b'
				} else if (B2u > 10000000000) {
					B2u = (Math.round(B2u / 100000000) / 10).toFixed(+'1') + 'b'
				} else if (B2u > 1000000000) {
					N9b.F9b(6)
					var p8a = N9b.C9b(16, 14)
					N9b.F9b(24)
					var n8a = N9b.U9b(1145, 4)
					N9b.F9b(19)
					var u8a = N9b.C9b(2682, 150, 149)
					N9b.n9b(7)
					var b8a = N9b.C9b(3, 42)
					N9b.n9b(6)
					var i8a = N9b.C9b(18, 17)
					N9b.n9b(18)
					var N8a = N9b.U9b(75583, 81861, 19)
					N9b.n9b(29)
					var E8a = N9b.U9b(6748, 2, 10, 6739)
					N9b.n9b(7)
					var T8a = N9b.C9b(2880, 412)
					N9b.n9b(30)
					var I8a = N9b.C9b(15, 12, 151456, 9466, 16, 2.423503e6)
					B2u =
						(Math.round(B2u / ('10000000' >> 623368928)) / 100).toFixed(p8a) +
						(n8a == 735.82
							? (!![], !!1)
							: (u8a, b8a) < ('841.22' * i8a, 508.4)
							? (N8a, '8600' << 360095328) === (E8a, T8a)
								? +'3.91e+3'
								: 'b'
							: I8a)
				} else if (B2u > +'100000000') {
					B2u = Math.round(B2u / ('1000000' << 998801664)) + (+'18.83' < 542.72 ? 'm' : 'I')
				} else if (B2u > +'10000000') {
					N9b.F9b(18)
					var e8a = N9b.C9b(16, 3909, 7)
					N9b.n9b(6)
					var z8a = N9b.U9b(84636, 75232)
					N9b.F9b(31)
					var O8a = N9b.U9b(3, 1278462, 20, 64386)
					N9b.F9b(16)
					var l8a = N9b.C9b(33048, 4, 4131)
					N9b.F9b(32)
					var M8a = N9b.C9b(15, 775, 768, 15, 3)
					N9b.F9b(18)
					var t8a = N9b.U9b(16, 9377, 19)
					B2u =
						(Math.round(B2u / 100000) / 10).toFixed(+'1') +
						((e8a, z8a) == (O8a, 602.74) ? (2731 > (l8a, M8a) ? 'o' : t8a) : 'm')
				} else if (B2u > 1000000) {
					N9b.n9b(5)
					var G8a = N9b.C9b(10, 5)
					N9b.F9b(7)
					var U8a = N9b.U9b(18, 9886)
					N9b.n9b(19)
					var V8a = N9b.U9b(9751, 9770, 9751)
					N9b.n9b(6)
					var D8a = N9b.U9b(20, 19)
					N9b.F9b(17)
					var o8a = N9b.C9b(524, 53, 6, 995)
					N9b.F9b(33)
					var S8a = N9b.U9b(10, 54, 8, 3)
					N9b.n9b(24)
					var B8a = N9b.C9b(20, 309)
					B2u =
						(Math.round(B2u / 10000) / 100).toFixed(G8a) +
						(U8a != V8a
							? ('0.23' * D8a, 66.08) >= 371.15
								? ('3220' - 0, o8a) > ('807' * S8a, '8500' ^ 0)
									? (!!{}, 's')
									: (B8a, +'282.54')
								: 'm'
							: 0x6e5)
				} else if (B2u > 100000) {
					N9b.F9b(34)
					var A8a = N9b.U9b(9, 2, 18, 250)
					N9b.n9b(18)
					var r8a = N9b.C9b(14, 5812, 27)
					N9b.n9b(11)
					var j8a = N9b.C9b(4100, 8, 22, 14)
					B2u =
						Math.round(B2u / A8a) +
						((438.23, r8a) >= 11.95 ? ((924.8, +'6416') < j8a ? 'o' : 'k') : 'H')
				} else if (B2u > ('10000' & 2147483647)) {
					N9b.n9b(6)
					var g8a = N9b.C9b(3601, 11)
					N9b.F9b(35)
					var y8a = N9b.C9b(26276, 18, 8, 1568, 20)
					N9b.F9b(36)
					var X8a = N9b.C9b(9, 585, 7594)
					B2u =
						(Math.round(B2u / 100) / 10).toFixed(1) +
						((g8a, y8a) === 643.51 ? 499.53 : (966.49, 859.05) < X8a ? 'k' : 639.48)
				} else if (B2u > 1000) {
					N9b.F9b(37)
					var a8a = N9b.C9b(3, 724, 22, 11)
					B2u = (Math.round(B2u / ('10' << 663513632)) / 100).toFixed(a8a) + 'k'
				} else {
					B2u = B2u.toFixed(0)
				}
			} else {
				if (B2u < -1000000000000) {
					N9b.F9b(18)
					var c8a = N9b.C9b(17, 25, 2)
					N9b.F9b(7)
					var H8a = N9b.U9b(3108, 283)
					N9b.n9b(12)
					var s8a = N9b.U9b(579, 38, 11, 2)
					N9b.F9b(6)
					var Y8a = N9b.U9b(2511, 11)
					B2u = Math.round(B2u / ('100000000000' - 0)) / c8a + (H8a >= (s8a, Y8a) ? 't' : ![])
				} else if (B2u < -1000000000) {
					N9b.n9b(38)
					var R8a = N9b.C9b(13, 99999988, 19, 1199999843, 18)
					N9b.n9b(18)
					var K8a = N9b.U9b(5, 8266, 19)
					N9b.F9b(6)
					var x2a = N9b.C9b(5273, 3)
					N9b.n9b(20)
					var F2a = N9b.U9b(14, 7695, 1287, 14)
					N9b.n9b(20)
					var q2a = N9b.U9b(10, 3, 338, 4049)
					N9b.F9b(5)
					var w2a = N9b.C9b(261, 3)
					N9b.F9b(39)
					var k2a = N9b.C9b(18296040293, 17, 10, 20125644352)
					B2u =
						Math.round(B2u / R8a) / 10 +
						(K8a <= (x2a, 850.93)
							? (F2a, q2a)
							: (7380, 681.59) !== ('3566' & 2147483647)
							? 'b'
							: (890.61, +'4735') >= w2a
							? (0x223c, '0x16e1' << k2a)
							: (2.22e3, +'1.06e+2'))
				} else if (B2u < -1000000) {
					N9b.F9b(40)
					var P2a = N9b.C9b(17, 1e5, 1.00009e5, 100009, 17)
					N9b.F9b(31)
					var d2a = N9b.C9b(7, 146, 13, 19)
					N9b.F9b(41)
					var L2a = N9b.U9b(41840, 50220, 10)
					N9b.F9b(6)
					var p2a = N9b.U9b(63580, 57800)
					B2u = Math.round(B2u / P2a) / d2a + (L2a >= ('459' & 2147483647) ? 'm' : p2a)
				} else if (B2u < -1000) {
					N9b.n9b(6)
					var n2a = N9b.C9b(103, 3)
					N9b.n9b(19)
					var u2a = N9b.U9b(24, 5, 12)
					B2u = Math.round(B2u / n2a) / u2a + 'k'
				} else {
					B2u = B2u.toFixed(0)
				}
			}
			S5a = -1746302537
			B5a = 531467126
			Z5a = 2
			for (var r5a = 1; N9b.f5a(r5a.toString(), r5a.toString().length, 58441) !== S5a; r5a++) {
				return B2u
			}
			if (N9b.f5a(Z5a.toString(), Z5a.toString().length, '3990' | 1028) !== B5a) {
				return B2u
			}
		}
		B9J.calculateTradingDecimalPlaces = function(I9u) {
			var a2u, j2u, m2u, X2u, p4a, R2u, F2u, K2u, i9u, f2u, W2u
			a2u = I9u.chart
			N9b.E9J()
			j2u = 2
			m2u = 50
			X2u = a2u.masterData
			if (X2u && X2u.length > m2u) {
				for (var p2u = '1' >> 1115237632; p2u < m2u; p2u++) {
					p4a = 'n'
					p4a += 'um'
					p4a += 'be'
					p4a += 'r'
					R2u = X2u.length - p2u
					if (R2u < +'0') {
						break
					}
					F2u = X2u[R2u]
					if (F2u.Close && typeof F2u.Close == p4a) {
						K2u = F2u.Close.toString()
						i9u = K2u.indexOf((813, 495.53) == (43, 8289) ? (![], 7.21e3) : '.')
						if (i9u != -1) {
							f2u = K2u.length - i9u - 1
							if (f2u > j2u) {
								j2u = f2u
							}
						}
					}
				}
			}
			W2u = a2u.yAxis.maxDecimalPlaces
			if (j2u > W2u) {
				j2u = W2u
			}
			return j2u
		}
		B9J.fillArea = function(U9u, w9u, r9u, M9u, k9u) {
			var n4a, V9u, O9u, Y9u, J9u, H9u, d5a, L5a, p5a
			n4a = 'au'
			n4a += 't'
			n4a += 'o'
			if (!w9u.length) {
				return
			}
			V9u = U9u.chart.context
			V9u.lineWidth = 0
			O9u = V9u.globalAlpha
			if (!M9u && M9u !== 0) {
				M9u = 0.2
			}
			V9u.globalAlpha = M9u
			if (r9u == n4a) {
				r9u = U9u.defaultColor
			}
			N9b.E9J()
			V9u.fillStyle = r9u
			Y9u = Number.MAX_VALUE
			N9b.F9b(42)
			J9u = N9b.U9b(1, Y9u)
			H9u = U9u.panels[k9u]
			if (H9u) {
				J9u = H9u.yAxis.top
				Y9u = H9u.yAxis.bottom
				V9u.save()
				V9u.beginPath()
				V9u.rect(H9u.left, J9u, H9u.width, Y9u - J9u)
				V9u.clip()
			}
			V9u.beginPath()
			V9u.moveTo(w9u[0][0], w9u[0][1])
			for (var h9u = 1; h9u < w9u.length; h9u++) {
				V9u.lineTo(w9u[h9u][+'0'], w9u[h9u][1])
			}
			V9u.closePath()
			V9u.fill()
			if (H9u) {
				V9u.restore()
			}
			d5a = 1840177239
			L5a = -1832447334
			p5a = 2
			for (var u5a = 1; N9b.f5a(u5a.toString(), u5a.toString().length, 3771) !== d5a; u5a++) {
				V9u.lineWidth = 3
				p5a += 2
			}
			if (N9b.f5a(p5a.toString(), p5a.toString().length, 61489) !== L5a) {
				V9u.lineWidth = 0
			}
			V9u.lineWidth = 1
			V9u.globalAlpha = O9u
		}
		B9J.prepareChannelFill = function(N9u, y9u, x9u) {
			var g9u, P9u, S9u, b9u, L9u, G9u, e9u, c9u, v9u, s9u, u9u, o9u, A9u, d9u, u4a, n9u, D9u
			g9u = N9u.panels[x9u.panelName]
			P9u = g9u.yAxis
			S9u = P9u.top
			function z9u(p9u, F9u, X9u, j9u) {
				var C9u, B9u
				C9u = F9u.cache[x9u[X9u]]
				N9b.E9J()
				if (!isNaN(C9u)) {
					if (p9u == 1) {
						B9u = l9u(x9u[X9u], C9u)
						if (B9u !== null) {
							j9u.push(B9u)
						}
						if (b9u) {
							j9u.push([e9u, B9u[1]])
						}
					}
					j9u.push([e9u, C9u])
				}
			}
			b9u = x9u.noSlopes
			L9u = N9u.layout.candleWidth
			N9b.F9b(43)
			var i2a = N9b.C9b(27, 17, 9)
			G9u = g9u.left - (b9u ? i2a : +'0.5') * L9u + N9u.micropixels - +'1'
			e9u = G9u
			c9u = g9u.name == N9u.chart.panel.name
			v9u = []
			s9u = []
			for (var t9u = 1; t9u <= y9u.length; t9u++) {
				N9b.F9b(6)
				u9u = y9u[N9b.C9b(t9u, 1)]
				if (!b9u && !v9u.length && u9u && u9u.candleWidth) {
					N9b.n9b(18)
					var N2a = N9b.C9b(20, 14, 8)
					L9u = (L9u + u9u.candleWidth) / N2a
				}
				e9u += L9u
				if (!u9u || !u9u.cache) {
					continue
				}
				if (u9u.candleWidth) {
					N9b.F9b(6)
					var Q2a = N9b.C9b(22, 20)
					L9u = u9u.candleWidth / Q2a
				} else {
					N9b.F9b(6)
					var E2a = N9b.U9b(11, 9)
					L9u = N9u.layout.candleWidth / E2a
				}
				if (t9u == y9u.length) {
					if (b9u) {
						N9b.F9b(44)
						o9u = N9b.U9b(e9u, L9u, 2)
						v9u.push([o9u, v9u[v9u.length - 1][1]])
						s9u.push([o9u, s9u[s9u.length - 1][1]])
					}
					break
				}
				A9u = y9u[t9u]
				if (b9u) {
					L9u += L9u
				} else if (A9u.candleWidth) {
					L9u += A9u.candleWidth / +'2'
				} else {
					N9b.F9b(6)
					var T2a = N9b.C9b(10, 8)
					L9u += N9u.layout.candleWidth / T2a
				}
				N9b.n9b(7)
				d9u = N9b.C9b(L9u, e9u)
				if (c9u && u9u.transform) {
					u9u = u9u.transform
				}
				if (!v9u.length) {
					u4a = 'top'
					u4a += 'Ban'
					u4a += 'd'
					z9u(t9u, u9u, u4a, v9u)
				}
				if (!s9u.length) {
					z9u(t9u, u9u, 'bottomBand', s9u)
				}
				if (c9u && A9u.transform) {
					A9u = A9u.transform
				}
				if (v9u.length) {
					if (b9u) {
						v9u.push([d9u, v9u[v9u.length - +'1'][1]])
					}
					v9u.push([d9u, A9u.cache[x9u.topBand]])
				}
				if (s9u.length) {
					if (b9u) {
						s9u.push([d9u, s9u[s9u.length - 1][1]])
					}
					s9u.push([d9u, A9u.cache[x9u.bottomBand]])
				}
			}
			n9u = v9u.concat(s9u.reverse())
			D9u = x9u.opacity
			B9J.fillArea(N9u, n9u, x9u.color, D9u, x9u.panelName)
			function l9u(q9u, E9u) {
				var Q9u, Z9u, T9u
				Q9u = N9u.chart.dataSet.length - N9u.chart.scroll
				if (b9u || Q9u <= 0) {
					return [0, E9u]
				} else if (Q9u > 0) {
					Z9u = N9u.chart.dataSet[Q9u]
					if (c9u && Z9u.transform) {
						Z9u = Z9u.transform
					}
					T9u = Z9u[q9u]
					T9u = P9u.semiLog ? N9u.pixelFromPrice(T9u, g9u) : (P9u.high - T9u) * P9u.multiplier + S9u
					if (!isNaN(T9u)) {
						return [G9u, T9u]
					}
				}
				return null
			}
		}
		B9J.preparePeakValleyFill = function(f9u, s8u, i8u) {
			var h8u,
				N8u,
				x8u,
				Q8u,
				K9u,
				d8u,
				I8u,
				r8u,
				J8u,
				G8u,
				z8u,
				Y8u,
				P8u,
				a9u,
				m9u,
				H8u,
				R9u,
				O8u,
				W9u,
				L8u,
				M8u,
				b8u,
				u8u,
				Z8u,
				g8u,
				l8u,
				D8u,
				B6a,
				Z6a,
				A6a,
				o8u,
				y8u,
				b4a,
				e8u
			h8u = f9u.panels[i8u.panelName]
			N8u = h8u.yAxis
			x8u = f9u.chart
			Q8u = N8u.top
			if (!i8u.threshold && i8u.threshold !== '0' >> 530738016) {
				return
			}
			K9u = f9u.layout.candleWidth
			d8u = h8u.name == x8u.panel.name
			I8u = i8u.band
			r8u = i8u.threshold
			J8u = i8u.direction
			G8u = x8u.dataSet
			z8u = G8u.length - x8u.scroll
			Y8u = h8u.left - +'0.5' * K9u + f9u.micropixels - 1
			P8u = Y8u
			if (d8u) {
				a9u = f9u.pixelFromPriceTransform(r8u, h8u)
			} else {
				a9u = f9u.pixelFromPrice(r8u, h8u)
			}
			m9u = []
			for (var V8u = 0; V8u < s8u.length; V8u++) {
				if (!V8u && s8u.length > 1) {
					continue
				}
				H8u = s8u[V8u]
				N9b.F9b(6)
				R9u = s8u[N9b.U9b(V8u, 1)]
				if (R9u && R9u.candleWidth) {
					K9u = (K9u + R9u.candleWidth) / +'2'
				} else {
					N9b.F9b(10)
					var J2a = N9b.C9b(208, 15, 14)
					K9u = (K9u + f9u.layout.candleWidth) / J2a
				}
				Y8u += K9u
				if (V8u && !R9u) {
					continue
				}
				if (R9u && R9u.candleWidth) {
					N9b.n9b(45)
					var e2a = N9b.C9b(18, 6, 110)
					K9u = R9u.candleWidth / e2a
				} else {
					K9u = f9u.layout.candleWidth / 2
				}
				if (!V8u) {
					R9u = H8u
				}
				if (H8u.cache && R9u.cache) {
					O8u = H8u.cache[I8u]
					W9u = R9u.cache[I8u]
					if (d8u) {
						if (H8u.transform) {
							O8u = f9u.pixelFromPrice(H8u.transform[I8u], h8u)
						}
						if (R9u.transform) {
							W9u = f9u.pixelFromPrice(R9u.transform[I8u], h8u)
						}
					}
				}
				if (typeof O8u == 'undefined' || typeof W9u == 'undefined') {
					O8u = f9u.pixelFromPrice(H8u[I8u], h8u)
					W9u = f9u.pixelFromPrice(R9u[I8u], h8u)
				}
				if (!m9u.length) {
					if (V8u <= 1) {
						if (z8u > 0) {
							L8u = G8u[z8u]
							if (d8u && L8u.transform) {
								L8u = L8u.transform
							}
							M8u = L8u[I8u]
							M8u = N8u.semiLog
								? f9u.pixelFromPrice(M8u, h8u)
								: (N8u.high - M8u) * N8u.multiplier + Q8u
							if (!isNaN(M8u)) {
								if (M8u >= a9u && W9u >= a9u) {
									m9u.push([P8u, J8u == +'1' ? a9u : M8u])
								} else if (M8u <= a9u && W9u <= a9u) {
									m9u.push([P8u, J8u == -1 ? a9u : M8u])
								} else {
									N9b.n9b(46)
									m9u.push([N9b.U9b(P8u, M8u, Y8u, a9u, W9u, W9u, Y8u), a9u])
								}
							}
						}
					}
					if (W9u && !isNaN(W9u)) {
						if ((R9u[I8u] >= r8u && J8u == 1) || (R9u[I8u] <= r8u && J8u == -1)) {
							m9u.push([Y8u, W9u])
						} else {
							m9u.push([Y8u, a9u])
						}
					}
				}
				if (H8u.candleWidth) {
					N9b.n9b(19)
					var O2a = N9b.C9b(15, 2, 15)
					K9u += H8u.candleWidth / O2a
				} else {
					K9u += f9u.layout.candleWidth / 2
				}
				if (V8u && m9u.length) {
					b8u = m9u[m9u.length - 1]
					N9b.F9b(7)
					u8u = N9b.U9b(K9u, Y8u)
					if (f9u.extendLastTick && V8u == s8u.length - 1) {
						N9b.n9b(5)
						u8u += N9b.U9b(K9u, 2)
					}
					Z8u = [b8u[0] + ((u8u - b8u['0' | 0]) * (a9u - W9u)) / (O8u - W9u), a9u]
					if ((H8u[I8u] > r8u && J8u == 1) || (H8u[I8u] < r8u && J8u == -1)) {
						if (b8u[+'1'] == a9u) {
							m9u.push(Z8u)
						}
						m9u.push([u8u, O8u])
					} else {
						if (b8u[1] != a9u) {
							m9u.push(Z8u)
						}
						m9u.push([u8u, a9u])
					}
				}
			}
			g8u = m9u.length
			N9b.C9J()
			if (!g8u) {
				return
			}
			if (i8u.edgeHighlight) {
				l8u = i8u.edgeParameters
				D8u = l8u.lineWidth
				if (D8u > 100) {
					B6a = 41599335
					Z6a = 949316227
					N9b.F9b(24)
					A6a = N9b.C9b(1, '2')
					for (var j6a = 1; N9b.f5a(j6a.toString(), j6a.toString().length, 75083) !== B6a; j6a++) {
						D8u = 7
						A6a += 2
					}
					if (N9b.P5a(A6a.toString(), A6a.toString().length, 92854) !== Z6a) {
						D8u = 1
					}
				}
				for (var t8u = 0; t8u < g8u - +'1'; t8u++) {
					o8u = m9u[t8u]
					N9b.F9b(7)
					y8u = m9u[N9b.U9b(1, t8u)]
					if (o8u[1] != a9u || y8u[1] != a9u) {
						b4a = 'seg'
						b4a += 'm'
						b4a += 'en'
						b4a += 't'
						f9u.plotLine(
							o8u[0],
							y8u[0],
							o8u['1' | 1],
							y8u['1' >> 1835784896],
							i8u.edgeHighlight,
							b4a,
							x8u.context,
							!!{},
							l8u,
						)
					}
				}
			}
			m9u.push([m9u[g8u - 1][0], a9u], [m9u[0][0], a9u])
			e8u = i8u.opacity
			if (!e8u && e8u !== 0) {
				e8u = 0.3
			}
			B9J.fillArea(f9u, m9u, i8u.color, e8u, i8u.panelName)
		}
		B9J.fillIntersecting = function(q8u, j8u, h1Y, w5T) {
			var O5T,
				a8u,
				b5T,
				g5T,
				n5T,
				l5T,
				C8u,
				k1Y,
				r1Y,
				Y1Y,
				p8u,
				W5T,
				i1Y,
				I1Y,
				V1Y,
				E5T,
				B5T,
				F5T,
				m5T,
				M1Y,
				J1Y,
				E8u,
				P5T,
				c5T,
				H1Y,
				s5T,
				w1Y,
				F8u,
				J5T,
				B8u,
				Q5T,
				f5T,
				O1Y,
				U1Y,
				L1Y,
				Q9a,
				E9a,
				T9a,
				a5a,
				c5a,
				H5a,
				y5T,
				f9a,
				P9a,
				d9a
			O5T = []
			a8u = q8u.panels[j8u.panel]
			if (!w5T.topAxis) {
				w5T.topAxis = a8u.yAxis
			}
			if (!w5T.bottomAxis) {
				w5T.bottomAxis = a8u.yAxis
			}
			b5T = w5T.topBand
			g5T = w5T.bottomBand
			n5T = w5T.topAxis
			l5T = w5T.bottomAxis
			C8u = q8u.chart.context
			k1Y = j8u.outputs[j8u.outputMap[b5T]]
			r1Y = j8u.outputs[j8u.outputMap[g5T]]
			Y1Y = q8u.chart.left
			q8u.startClip(j8u.panel)
			E8u = []
			for (p8u = 0; p8u < h1Y.length; p8u++) {
				if (!h1Y[p8u]) {
					E8u.push(null)
				} else {
					E8u.push(h1Y[p8u].transform ? h1Y[p8u].transform : h1Y[p8u])
				}
			}
			for (p8u = 0; p8u < E8u.length - 1; p8u++) {
				P5T = E8u[p8u]
				N9b.F9b(7)
				c5T = E8u[N9b.C9b(1, p8u)]
				if (!P5T || !c5T) {
					continue
				}
				if (a8u.name == q8u.chart.name) {
					if (P5T.transform) {
						P5T = P5T.transform
					}
					if (c5T.transform) {
						c5T = c5T.transform
					}
				}
				if (P5T[b5T] === null || isNaN(P5T[b5T])) {
					continue
				} else if (
					(P5T[b5T] >= P5T[g5T] && c5T[b5T] <= c5T[g5T]) ||
					(P5T[b5T] <= P5T[g5T] && c5T[b5T] >= c5T[g5T])
				) {
					I1Y = W5T = q8u.pixelFromBar(p8u)
					N9b.F9b(47)
					V1Y = i1Y = q8u.pixelFromBar(N9b.C9b('1', p8u, 0))
					E5T = q8u.pixelFromPrice(P5T[b5T], a8u, n5T)
					B5T = q8u.pixelFromPrice(c5T[b5T], a8u, n5T)
					F5T = q8u.pixelFromPrice(P5T[g5T], a8u, l5T)
					m5T = q8u.pixelFromPrice(c5T[g5T], a8u, l5T)
					M1Y = B9J.intersectLineLineX(W5T, i1Y, E5T, B5T, I1Y, V1Y, F5T, m5T)
					J1Y = B9J.intersectLineLineY(W5T, i1Y, E5T, B5T, I1Y, V1Y, F5T, m5T)
					H1Y = {}
					H1Y.x = M1Y
					H1Y.y = J1Y
					N9b.F9b(7)
					H1Y.tick = N9b.U9b(1, p8u)
					O5T.push(H1Y)
				}
			}
			s5T = []
			for (p8u = 0; w5T.fillFuture && j8u.futureA && p8u < j8u.futureA.length - +'1'; p8u++) {
				if (j8u.futureA[p8u] === null || isNaN(j8u.futureA[p8u])) {
				} else if (
					(j8u.futureA[p8u] > j8u.futureB[p8u] &&
						j8u.futureA[p8u + +'1'] < j8u.futureB[p8u + +'1']) ||
					(j8u.futureA[p8u] < j8u.futureB[p8u] && j8u.futureA[p8u + 1] > j8u.futureB[p8u + 1])
				) {
					I1Y = W5T = q8u.pixelFromBar(E8u.length + p8u)
					V1Y = i1Y = q8u.pixelFromBar(E8u.length + p8u + 1)
					E5T = q8u.pixelFromPrice(j8u.futureA[p8u], a8u, n5T)
					B5T = q8u.pixelFromPrice(j8u.futureA[p8u + 1], a8u, n5T)
					F5T = q8u.pixelFromPrice(j8u.futureB[p8u], a8u, l5T)
					m5T = q8u.pixelFromPrice(j8u.futureB[p8u + 1], a8u, l5T)
					M1Y = B9J.intersectLineLineX(W5T, i1Y, E5T, B5T, I1Y, V1Y, F5T, m5T)
					J1Y = B9J.intersectLineLineY(W5T, i1Y, E5T, B5T, I1Y, V1Y, F5T, m5T)
					w1Y = {}
					w1Y.x = M1Y
					w1Y.y = J1Y
					N9b.n9b(6)
					var M2a = N9b.U9b(14, 13)
					w1Y.tick = E8u.length + p8u + M2a
					s5T.push(w1Y)
				}
			}
			C8u.beginPath()
			Q5T = +'0'
			f5T = E8u.length
			if (O5T.length) {
				f5T = O5T[0].tick
			}
			while (Q5T <= f5T && !E8u[Q5T]) {
				Q5T++
			}
			O1Y = E8u[Q5T]
			U1Y = O1Y[b5T]
			L1Y = O1Y[g5T]
			if (Q5T <= f5T) {
				if (U1Y > L1Y) {
					C8u.fillStyle = k1Y
				} else {
					Q9a = -507725982
					E9a = 611161110
					T9a = 2
					for (
						var J9a = 1;
						N9b.f5a(J9a.toString(), J9a.toString().length, +'5503') !== Q9a;
						J9a++
					) {
						C8u.fillStyle = r1Y
						T9a += 2
					}
					if (N9b.f5a(T9a.toString(), T9a.toString().length, 81187) !== E9a) {
						C8u.fillStyle = r1Y
					}
				}
				C8u.moveTo(Y1Y, q8u.pixelFromPrice(U1Y, a8u, n5T))
				for (B8u = Q5T; B8u < f5T; B8u++) {
					C8u.lineTo(q8u.pixelFromBar(B8u), q8u.pixelFromPrice(E8u[B8u][b5T], a8u, n5T))
				}
				if (O5T[0]) {
					C8u.lineTo(O5T[0].x, O5T[+'0'].y)
				}
				for (J5T = f5T - 1; J5T >= Q5T; J5T--) {
					C8u.lineTo(q8u.pixelFromBar(J5T), q8u.pixelFromPrice(E8u[J5T][g5T], a8u, l5T))
				}
				C8u.lineTo(Y1Y, q8u.pixelFromPrice(L1Y, a8u, l5T))
				C8u.lineTo(Y1Y, q8u.pixelFromPrice(U1Y, a8u, n5T))
				C8u.fill()
			}
			for (F8u = +'0'; F8u < O5T.length; F8u++) {
				C8u.beginPath()
				C8u.moveTo(O5T[F8u].x, O5T[F8u].y)
				if (E8u[O5T[F8u].tick][b5T] > E8u[O5T[F8u].tick][g5T]) {
					C8u.fillStyle = k1Y
				} else {
					C8u.fillStyle = r1Y
				}
				if (F8u + 1 == O5T.length) {
					for (B8u = O5T[F8u].tick; B8u < E8u.length; B8u++) {
						C8u.lineTo(q8u.pixelFromBar(B8u), q8u.pixelFromPrice(E8u[B8u][b5T], a8u, n5T))
					}
					for (J5T = E8u.length - 1; J5T >= O5T[F8u].tick; J5T--) {
						C8u.lineTo(q8u.pixelFromBar(J5T), q8u.pixelFromPrice(E8u[J5T][g5T], a8u, l5T))
					}
				} else {
					for (B8u = O5T[F8u].tick; B8u < O5T[F8u + +'1'].tick; B8u++) {
						C8u.lineTo(q8u.pixelFromBar(B8u), q8u.pixelFromPrice(E8u[B8u][b5T], a8u, n5T))
					}
					C8u.lineTo(O5T[F8u + 1].x, O5T[F8u + 1].y)
					for (J5T = O5T[F8u + 1].tick - 1; J5T >= O5T[F8u].tick; J5T--) {
						C8u.lineTo(q8u.pixelFromBar(J5T), q8u.pixelFromPrice(E8u[J5T][g5T], a8u, l5T))
					}
				}
				C8u.fill()
			}
			if (w5T.fillFuture) {
				q8u.chart.context.beginPath()
				if (F8u >= 0 && E8u[E8u.length - 1]) {
					a5a = 93666751
					c5a = -2021420937
					H5a = 2
					for (var Y5a = 1; N9b.f5a(Y5a.toString(), Y5a.toString().length, 70944) !== a5a; Y5a++) {
						C8u.moveTo(
							q8u.pixelFromBar(E8u.length * 2),
							q8u.pixelFromPrice(E8u[E8u.length / 2][w5T.topBand], a8u, w5T.topAxis),
						)
						H5a += 2
					}
					if (N9b.f5a(H5a.toString(), H5a.toString().length, +'74068') !== c5a) {
						C8u.moveTo(
							q8u.pixelFromBar(E8u.length - 1),
							q8u.pixelFromPrice(E8u[E8u.length - 1][w5T.topBand], a8u, w5T.topAxis),
						)
					}
					if (!s5T.length) {
						y5T = E8u.length
						for (B8u = 0; B8u < j8u.futureA.length; B8u++) {
							C8u.lineTo(
								q8u.pixelFromBar(y5T),
								q8u.pixelFromPrice(j8u.futureA[B8u], a8u, w5T.topAxis),
							)
							y5T++
						}
						y5T--
						for (B8u = j8u.futureB.length - 1; B8u >= +'0'; B8u--) {
							C8u.lineTo(
								q8u.pixelFromBar(y5T),
								q8u.pixelFromPrice(j8u.futureB[B8u], a8u, w5T.bottomAxis),
							)
							y5T--
						}
						C8u.lineTo(
							q8u.pixelFromBar(E8u.length - 1),
							q8u.pixelFromPrice(E8u[E8u.length - 1][w5T.bottomBand], a8u, w5T.bottomAxis),
						)
						C8u.fill()
					} else {
						f9a = -2015411740
						P9a = 1502418292
						d9a = 2
						for (
							var p9a = 1;
							N9b.P5a(p9a.toString(), p9a.toString().length, 42939) !== f9a;
							p9a++
						) {
							y5T = E8u.length
							d9a += 2
						}
						if (N9b.P5a(d9a.toString(), d9a.toString().length, 41893) !== P9a) {
							y5T = E8u.length
						}
						for (B8u = 0; B8u < s5T[0].tick - E8u.length; B8u++) {
							C8u.lineTo(
								q8u.pixelFromBar(y5T),
								q8u.pixelFromPrice(j8u.futureA[B8u], a8u, w5T.topAxis),
							)
							y5T++
						}
						y5T--
						C8u.lineTo(s5T[0].x, s5T[0].y)
						for (B8u = s5T[0].tick - 1 - E8u.length; B8u >= '0' >> 1302835328; B8u--) {
							C8u.lineTo(
								q8u.pixelFromBar(y5T),
								q8u.pixelFromPrice(j8u.futureB[B8u], a8u, w5T.bottomAxis),
							)
							y5T--
						}
						C8u.lineTo(
							q8u.pixelFromBar(E8u.length - ('1' ^ 0)),
							q8u.pixelFromPrice(E8u[E8u.length - 1][w5T.bottomBand], a8u, w5T.bottomAxis),
						)
						C8u.fill()
					}
				}
				for (F8u = +'0'; F8u < s5T.length; F8u++) {
					C8u.beginPath()
					C8u.moveTo(s5T[F8u].x, s5T[F8u].y)
					if (j8u.futureA[s5T[F8u].tick - E8u.length] > j8u.futureB[s5T[F8u].tick - E8u.length]) {
						C8u.fillStyle = j8u.outputs[j8u.outputMap[w5T.topBand]]
					} else {
						C8u.fillStyle = j8u.outputs[j8u.outputMap[w5T.bottomBand]]
					}
					if (F8u + 2 > s5T.length) {
						for (B8u = s5T[F8u].tick; B8u < j8u.futureA.length + E8u.length; B8u++) {
							C8u.lineTo(
								q8u.pixelFromBar(B8u),
								q8u.pixelFromPrice(j8u.futureA[B8u - E8u.length], a8u, w5T.topAxis),
							)
						}
						for (J5T = j8u.futureA.length - 1; J5T >= s5T[F8u].tick - E8u.length; J5T--) {
							C8u.lineTo(
								q8u.pixelFromBar(J5T + E8u.length),
								q8u.pixelFromPrice(j8u.futureB[J5T], a8u, w5T.bottomAxis),
							)
						}
					} else {
						for (B8u = s5T[F8u].tick; B8u < s5T[F8u + 1].tick; B8u++) {
							C8u.lineTo(
								q8u.pixelFromBar(B8u),
								q8u.pixelFromPrice(j8u.futureA[B8u - E8u.length], a8u, w5T.topAxis),
							)
						}
						C8u.lineTo(s5T[F8u + ('1' << 1982676928)].x, s5T[F8u + 1].y)
						for (J5T = s5T[F8u + 1].tick - 1; J5T >= s5T[F8u].tick; J5T--) {
							C8u.lineTo(
								q8u.pixelFromBar(J5T),
								q8u.pixelFromPrice(j8u.futureB[J5T - E8u.length], a8u, w5T.bottomAxis),
							)
						}
					}
					C8u.fill()
				}
			}
			q8u.endClip()
		}
		B9J.drawLegendItem = function(b1Y, t1Y, A1Y, P1Y, N1Y) {
			var L6a, p6a, n6a, v1Y, s1Y, x1Y, e1Y, u1Y
			if (!N1Y) {
				L6a = 1116474076
				N9b.F9b(0)
				p6a = -N9b.C9b('458654079', 2147483647)
				n6a = 2
				for (
					var b6a = 1;
					N9b.f5a(b6a.toString(), b6a.toString().length, '75338' >> 895281024) !== L6a;
					b6a++
				) {
					N1Y = 1
					n6a += 2
				}
				if (N9b.P5a(n6a.toString(), n6a.toString().length, 31731) !== p6a) {
					N9b.n9b(23)
					N1Y = N9b.C9b(0, '9')
				}
			}
			N9b.n9b(0)
			v1Y = t1Y[N9b.C9b('0', 2147483647)]
			s1Y = t1Y[+'1']
			x1Y = 10
			e1Y = 10
			u1Y = b1Y.chart.context
			u1Y.globalAlpha = N1Y
			u1Y.fillStyle = P1Y
			u1Y.fillRect(v1Y, s1Y, x1Y, e1Y)
			u1Y.globalAlpha = 1
			N9b.n9b(7)
			v1Y += N9b.C9b(2, x1Y)
			u1Y.fillStyle = b1Y.defaultColor
			u1Y.fillText(A1Y, v1Y, s1Y)
			N9b.F9b(5)
			var t2a = N9b.U9b(90, 15)
			v1Y += u1Y.measureText(A1Y).width + t2a
			return [v1Y, s1Y]
		}
		B9J.drawLegend = function(d1Y, g1Y) {
			var D1Y,
				z1Y,
				q1Y,
				y1Y,
				c1Y,
				l1Y,
				O5a,
				m5a,
				l5a,
				o1Y,
				G1Y,
				T1Y,
				i4a,
				n1Y,
				n9a,
				u9a,
				b9a,
				Q1Y,
				Z1Y
			D1Y = g1Y.coordinates
			z1Y = d1Y.chart.context
			z1Y.textBaseline = 'top'
			q1Y = z1Y.font
			d1Y.canvasFont('stx-legend', z1Y)
			if (!D1Y) {
				D1Y = g1Y.chart.legend
			}
			y1Y = [D1Y.x, D1Y.y]
			c1Y = d1Y.defaultColor
			l1Y = d1Y.layout.chartType
			if (d1Y.chart.customChart && d1Y.chart.customChart.chartType) {
				O5a = 525640833
				m5a = 164458537
				l5a = 2
				for (var t5a = 1; N9b.P5a(t5a.toString(), t5a.toString().length, 21599) !== O5a; t5a++) {
					l1Y = d1Y.chart.customChart.chartType
					N9b.F9b(9)
					l5a += N9b.C9b('2', 1454460128)
				}
				if (N9b.P5a(l5a.toString(), l5a.toString().length, +'41291') !== m5a) {
					l1Y = d1Y.chart.customChart.chartType
				}
			}
			if (!g1Y.noBase) {
				if (d1Y.chart.baseLegendColors instanceof Array) {
					G1Y = d1Y.chart.baseLegendColors
					if (G1Y.length > 1) {
						T1Y = z1Y.createLinearGradient(y1Y[0], y1Y[1], y1Y[0] + 10, y1Y[1])
						for (o1Y = 0; o1Y < G1Y.length; o1Y++) {
							T1Y.addColorStop(o1Y / (G1Y.length - 1), G1Y[o1Y])
						}
						c1Y = T1Y
					} else if (G1Y.length > 0) {
						c1Y = G1Y[0]
					} else {
						c1Y = d1Y.getCanvasColor('stx_line_chart')
					}
				} else if (l1Y == 'mountain') {
					i4a = 'tran'
					i4a += 'spar'
					i4a += 'en'
					i4a += 't'
					o1Y = d1Y.canvasStyle('stx_mountain_chart')
					n1Y = o1Y.borderTopColor
					if (n1Y && n1Y != i4a) {
						c1Y = n1Y
					}
				} else {
					c1Y = null
				}
				if (c1Y) {
					N9b.n9b(24)
					n9a = N9b.U9b(1, '1287219186')
					u9a = +'1063702643'
					b9a = 2
					for (
						var N9a = 1;
						N9b.P5a(N9a.toString(), N9a.toString().length, +'63907') !== n9a;
						N9a++
					) {
						b9a += 2
					}
					if (N9b.P5a(b9a.toString(), b9a.toString().length, 58671) !== u9a) {
					}
					if (g1Y.chart.symbolDisplay) {
						Q1Y = g1Y.chart.symbolDisplay
					} else {
						Q1Y = g1Y.chart.symbol
					}
					y1Y = B9J.drawLegendItem(d1Y, y1Y, Q1Y, c1Y)
				}
			}
			for (var S1Y in g1Y.legendColorMap) {
				Z1Y = S1Y
				if (g1Y.legendColorMap[S1Y].display) {
					Z1Y = g1Y.legendColorMap[S1Y].display
				}
				y1Y = B9J.drawLegendItem(
					d1Y,
					y1Y,
					Z1Y,
					g1Y.legendColorMap[S1Y].color,
					g1Y.legendColorMap[S1Y].opacity,
				)
			}
			z1Y.font = q1Y
		}
		B9J.minMax = function(p1Y, F1Y) {
			var C1Y, B1Y, X1Y, E1Y
			C1Y = Number.MAX_VALUE
			B1Y = Number.MAX_VALUE * -('1' << 1387526336)
			for (var j1Y = 0; j1Y < p1Y.length; j1Y++) {
				X1Y = p1Y[j1Y]
				if (!X1Y) {
					continue
				}
				E1Y = X1Y[F1Y]
				if (!E1Y && E1Y !== 0) {
					continue
				}
				if (isNaN(E1Y)) {
					continue
				}
				C1Y = Math.min(C1Y, E1Y)
				B1Y = Math.max(B1Y, E1Y)
			}
			N9b.C9J()
			return [C1Y, B1Y]
		}
		B9J.destroy = function(W1Y, w0Y) {
			var K1Y, a1Y, H0Y, N4a
			K1Y = B9J.ChartEngine.registeredContainers
			for (var f1Y = +'0'; f1Y < K1Y.length; f1Y++) {
				if (K1Y[f1Y] == W1Y.chart.container) {
					K1Y.splice(f1Y, 1)
					break
				}
			}
			W1Y.styles = {}
			W1Y.destroy()
			W1Y = null
			B9J.ThemeManager.destroy()
			if (B9J.MenuManager) {
				B9J.MenuManager.destroy()
			}
			if (w0Y) {
				a1Y = j9J('.stx-wrapper').childNodes
				H0Y = j9J('.stx-wrapper').querySelectorAll(w0Y)
				for (var R1Y = 0; R1Y < H0Y.length; R1Y++) {
					if (H0Y[R1Y].parentNode == j9J('.stx-wrapper')) {
						N4a = 'stx-passo'
						N4a += 'ver'
						B9J.appendClassName(H0Y[R1Y], N4a)
					}
				}
				for (var m1Y = a1Y.length - 1; m1Y >= 0; m1Y--) {
					if (B9J.hasClassName(a1Y[m1Y], 'stx-passover')) {
						B9J.unappendClassName(a1Y[m1Y], 'stx-passover')
					} else {
						a1Y[m1Y].parentNode.removeChild(a1Y[m1Y])
					}
				}
			} else {
				j9J('.stx-wrapper').parentNode.removeChild(j9J('.stx-wrapper'))
			}
		}
		B9J.addMemberToMasterdata = function(l0Y, A0Y, g0Y, d0Y, C0Y, q0Y) {
			var U0Y, s0Y, h0Y, Y0Y
			if (!g0Y) {
				return
			}
			U0Y = 0
			s0Y = 0
			while (U0Y < l0Y.masterData.length && s0Y < g0Y.length) {
				h0Y = g0Y[s0Y]
				Y0Y = l0Y.masterData[U0Y]
				if (!h0Y.DT) {
					h0Y.DT = B9J.strToDateTime(h0Y.Date)
				}
				if (h0Y.DT.getTime() == Y0Y.DT.getTime()) {
					if (d0Y) {
						for (var J0Y = 0; J0Y < d0Y.length; J0Y++) {
							Y0Y[d0Y[J0Y]] = h0Y[d0Y[J0Y]]
						}
					} else if (C0Y) {
						Y0Y[A0Y] = h0Y
					} else if (q0Y) {
						Y0Y[A0Y] = h0Y[q0Y]
					} else if (l0Y.layout.adj && typeof h0Y.Adj_Close != 'undefined') {
						Y0Y[A0Y] = h0Y.Adj_Close
					} else {
						Y0Y[A0Y] = h0Y.Close
					}
					s0Y++
					U0Y++
					continue
				}
				if (h0Y.DT < Y0Y.DT) {
					s0Y++
				} else {
					U0Y++
				}
			}
		}
		B9J.ThemeHelper = function(I1d) {
			var I4a, T4a, E4a, Q4a, F0Y, i1d
			I4a = 'stx'
			I4a += '_c'
			I4a += 'andle_up'
			T4a = 'Candle/'
			T4a += 'B'
			T4a += 'ar'
			E4a = 'C'
			E4a += 'andle/B'
			E4a += 'ar'
			Q4a = 'stx_x'
			Q4a += 'a'
			Q4a += 'x'
			Q4a += 'is'
			this.params = I1d
			F0Y = I1d.stx
			i1d = '#FFFFFF'
			if (F0Y.chart.container) {
				i1d = getComputedStyle(F0Y.chart.container).backgroundColor
				if (B9J.isTransparent(i1d)) {
					i1d = F0Y.containerColor
				}
			}
			this.settings.chart.Background.color = B9J.hexToRgba(i1d)
			this.settings.chart['Grid Lines'].color = B9J.hexToRgba(F0Y.canvasStyle('stx_grid').color)
			this.settings.chart['Grid Dividers'].color = B9J.hexToRgba(
				F0Y.canvasStyle('stx_grid_dark').color,
			)
			this.settings.chart['Axis Text'].color = B9J.hexToRgba(F0Y.canvasStyle(Q4a).color)
			this.settings.chartTypes[E4a].up.color = B9J.hexToRgba(F0Y.canvasStyle('stx_candle_up').color)
			this.settings.chartTypes[T4a].down.color = B9J.hexToRgba(
				F0Y.canvasStyle('stx_candle_down').color,
			)
			this.settings.chartTypes['Candle/Bar'].up.wick = B9J.hexToRgba(
				F0Y.canvasStyle('stx_candle_shadow_up').color,
			)
			this.settings.chartTypes['Candle/Bar'].down.wick = B9J.hexToRgba(
				F0Y.canvasStyle('stx_candle_shadow_down').color,
			)
			this.settings.chartTypes['Candle/Bar'].up.border = B9J.hexToRgba(
				F0Y.canvasStyle('stx_candle_up').borderLeftColor,
			)
			this.settings.chartTypes['Candle/Bar'].down.border = B9J.hexToRgba(
				F0Y.canvasStyle('stx_candle_down').borderLeftColor,
			)
			if (B9J.isTransparent(F0Y.canvasStyle(I4a).borderLeftColor)) {
				this.settings.chartTypes['Candle/Bar'].up.border = null
			}
			if (B9J.isTransparent(F0Y.canvasStyle('stx_candle_down').borderLeftColor)) {
				this.settings.chartTypes['Candle/Bar'].down.border = null
			}
			this.settings.chartTypes.Line.color = B9J.hexToRgba(F0Y.canvasStyle('stx_line_chart').color)
			this.settings.chartTypes.Mountain.color = B9J.hexToRgba(
				F0Y.canvasStyle('stx_mountain_chart').backgroundColor,
			)
		}
		B9J.ThemeHelper.prototype.settings = {
			chart: {
				Background: { color: null },
				'Grid Lines': { color: null },
				'Grid Dividers': { color: null },
				'Axis Text': { color: null },
			},
			chartTypes: {
				'Candle/Bar': {
					up: { color: null, wick: null, border: null },
					down: { color: null, wick: null, border: null },
				},
				Line: { color: null },
				Mountain: { color: null },
			},
		}
		B9J.ThemeHelper.prototype.update = function() {
			var D4a, V4a, U4a, G4a, t4a, M4a, l4a, m4a, O4a, z4a, e4a, J4a, V1d, w1d
			D4a = 'stx_moun'
			D4a += 'tain'
			D4a += '_chart'
			V4a = 'bac'
			V4a += 'kgr'
			V4a += 'o'
			V4a += 'undColor'
			U4a = 'c'
			U4a += 'olor'
			G4a = 'stx_li'
			G4a += 'ne_c'
			G4a += 'ha'
			G4a += 'rt'
			function H1d(Y1d, J1d, U1d) {
				var h1d
				N9b.C9J()
				h1d = w1d[Y1d]
				for (var M1d in h1d) {
					V1d.setStyle(M1d, J1d, U1d)
				}
			}
			t4a = 'borderLeftCo'
			t4a += 'lor'
			M4a = 'C'
			M4a += 'and'
			M4a += 'le'
			M4a += '/Bar'
			l4a = 'st'
			l4a += 'x_candle_'
			l4a += 'd'
			l4a += 'own'
			m4a = 'c'
			m4a += 'o'
			m4a += 'lor'
			O4a = 'colo'
			O4a += 'r'
			z4a = 's'
			z4a += 'tx_x'
			z4a += 'a'
			z4a += 'xis'
			e4a = 'stx'
			e4a += '_grid_dar'
			e4a += 'k'
			J4a = 'st'
			J4a += 'x_g'
			J4a += 'rid'
			V1d = this.params.stx
			w1d = {
				stx_candle_up: {
					stx_candle_up: !!{},
					stx_bar_up: !!{},
					stx_hollow_candle_up: !'',
					stx_line_up: !'',
					stx_baseline_up: !'',
				},
				stx_candle_down: {
					stx_candle_down: !0,
					stx_bar_down: !!{},
					stx_hollow_candle_down: !0,
					stx_line_down: !!1,
					stx_baseline_down: !![],
				},
				stx_shadow_up: { stx_candle_shadow_up: !'' },
				stx_shadow_down: { stx_candle_shadow_down: !![] },
				stx_line_chart: { stx_bar_chart: !!{}, stx_line_chart: !!{} },
				stx_grid: { stx_grid: !!{}, stx_grid_border: !![] },
				stx_grid_dark: { stx_grid_dark: !![] },
				stx_xaxis: { stx_xaxis_dark: !!'1', stx_xaxis: !'', stx_yaxis: !![], stx_yaxis_dark: !!1 },
				stx_mountain_chart: { stx_mountain_chart: !0 },
				stx_market_session: { stx_market_session: !'' },
			}
			V1d.chart.container.style.backgroundColor = this.settings.chart.Background.color
			H1d(J4a, 'color', this.settings.chart['Grid Lines'].color)
			H1d(e4a, 'color', this.settings.chart['Grid Dividers'].color)
			H1d(z4a, O4a, this.settings.chart['Axis Text'].color)
			H1d('stx_candle_up', m4a, this.settings.chartTypes['Candle/Bar'].up.color)
			H1d(l4a, 'color', this.settings.chartTypes['Candle/Bar'].down.color)
			H1d('stx_shadow_up', 'color', this.settings.chartTypes['Candle/Bar'].up.wick)
			H1d('stx_shadow_down', 'color', this.settings.chartTypes[M4a].down.wick)
			V1d.setStyle(
				'stx_candle_up',
				'borderLeftColor',
				this.settings.chartTypes['Candle/Bar'].up.border,
			)
			V1d.setStyle('stx_candle_down', t4a, this.settings.chartTypes['Candle/Bar'].down.border)
			H1d(G4a, U4a, this.settings.chartTypes.Line.color)
			V1d.setStyle('stx_mountain_chart', 'borderTopColor', this.settings.chartTypes.Mountain.color)
			V1d.setStyle(
				'stx_mountain_chart',
				V4a,
				B9J.hexToRgba(this.settings.chartTypes.Mountain.color, 0.8),
			)
			V1d.setStyle(D4a, 'color', B9J.hexToRgba(this.settings.chartTypes.Mountain.color, 0.1))
			V1d.draw()
		}
		B9J.NameValueStore = function() {}
		B9J.NameValueStore.prototype.toJSONIfNecessary = function(r1d) {
			var O1d
			if (r1d.constructor == String) {
				return r1d
			}
			try {
				O1d = JSON.stringify(r1d)
				return O1d
			} catch (k1d) {
				var T5a, I5a, J5a
				T5a = -361064665
				I5a = 2040045453
				J5a = +'2'
				for (var z5a = 1; N9b.f5a(z5a.toString(), z5a.toString().length, 13944) !== T5a; z5a++) {
					N9b.F9b(5)
					console.log(N9b.C9b('', r1d))
					N9b.n9b(2)
					J5a += N9b.C9b(2, '2')
				}
				if (N9b.f5a(J5a.toString(), J5a.toString().length, +'41727') !== I5a) {
					N9b.n9b(48)
					console.log(N9b.U9b('', r1d))
				}
				N9b.n9b(7)
				console.log(N9b.U9b(r1d, 'Cannot convert to JSON: '))
				return null
			}
		}
		B9J.NameValueStore.prototype.fromJSONIfNecessary = function(L1d) {
			var u1d
			N9b.C9J()
			try {
				u1d = JSON.parse(L1d)
				return u1d
			} catch (v1d) {
				return L1d
			}
		}
		B9J.NameValueStore.prototype.get = function(N1d, x1d) {
			var s1d
			s1d = B9J.localStorage.getItem(N1d)
			N9b.E9J()
			x1d(null, this.fromJSONIfNecessary(s1d))
		}
		B9J.NameValueStore.prototype.set = function(A1d, t1d, b1d) {
			B9J.localStorage.setItem(A1d, this.toJSONIfNecessary(t1d))
			N9b.E9J()
			if (b1d) {
				b1d(null)
			}
		}
		B9J.NameValueStore.prototype.remove = function(P1d, e1d) {
			var v6a, g6a, y6a
			N9b.E9J()
			B9J.localStorage.removeItem(P1d)
			if (e1d) {
				v6a = 339373844
				g6a = -+'1170110605'
				y6a = 2
				for (var a6a = 1; N9b.P5a(a6a.toString(), a6a.toString().length, +'77377') !== v6a; a6a++) {
					e1d(null)
					y6a += 2
				}
				if (N9b.P5a(y6a.toString(), y6a.toString().length, 36803) !== g6a) {
					e1d(1)
				}
			}
		}
		B9J.Plotter = function() {
			this.seriesArray = []
			this.seriesMap = {}
		}
		B9J.Plotter.prototype = {
			Series: function(y1d, c1d, o1d, d1d, g1d) {
				this.name = y1d
				this.strokeOrFill = c1d
				this.color = o1d
				this.opacity = d1d
				this.width = g1d
				this.moves = []
				this.text = []
				if (!d1d || d1d > 1 || d1d < 0) {
					this.opacity = 1
				}
				if (!g1d || g1d > 25 || g1d < 1) {
					N9b.F9b(2)
					this.width = N9b.C9b(1, '1')
				}
			},
			newSeries: function(S1d, D1d, G1d, l1d, n1d) {
				var z1d
				if (G1d.constructor == String) {
					z1d = new this.Series(S1d, D1d, G1d, l1d, n1d)
				} else {
					z1d = new this.Series(S1d, D1d, G1d.color, G1d.opacity, n1d)
				}
				this.seriesArray.push(z1d)
				this.seriesMap[S1d] = z1d
			},
			moveTo: function(Z1d, Q1d, q1d) {
				var T1d
				T1d = this.seriesMap[Z1d]
				T1d.moves.push({ action: 'moveTo', x: Q1d, y: q1d })
			},
			lineTo: function(C1d, B1d, j1d) {
				var s9a, Y9a, R9a, E1d
				s9a = 1444631716
				Y9a = -1036293840
				R9a = 2
				for (var K9a = 1; N9b.P5a(K9a.toString(), K9a.toString().length, 10906) !== s9a; K9a++) {
					N9b.E9J()
					E1d = this.seriesMap[C1d]
					E1d.moves.push({ action: 'y', x: B1d, y: j1d })
					R9a += 2
				}
				if (N9b.f5a(R9a.toString(), R9a.toString().length, +'50943') !== Y9a) {
					N9b.E9J()
					E1d = this.seriesMap[C1d]
					E1d.moves.push({ action: 'lineTo', x: B1d, y: j1d })
				}
			},
			dashedLineTo: function(p1d, F1d, m1d, a1d) {
				var X1d
				N9b.E9J()
				X1d = this.seriesMap[p1d]
				X1d.moves.push({ action: 'dashedLineTo', x: F1d, y: m1d, pattern: a1d })
			},
			quadraticCurveTo: function(R1d, W1d, K1d, i0d, I0d) {
				var f1d
				f1d = this.seriesMap[R1d]
				f1d.moves.push({ action: 'quadraticCurveTo', x0: W1d, y0: K1d, x: i0d, y: I0d })
			},
			addText: function(H0d, w0d, h0d, M0d, Y0d, J0d, U0d) {
				var V0d
				V0d = this.seriesMap[H0d]
				V0d.text.push({ text: w0d, x: h0d, y: M0d, bg: Y0d })
			},
			drawText: function(O0d, v0d) {
				var r0d, u0d, k0d, s0d
				for (var L0d = 0; L0d < v0d.text.length; L0d++) {
					r0d = v0d.text[L0d]
					if (r0d.bg) {
						u0d = r0d.width ? r0d.width : O0d.measureText(r0d.text).width
						k0d = r0d.height ? r0d.height : 12
						s0d = O0d.fillStyle
						O0d.fillStyle = r0d.bg
						if (O0d.textAlign == 'right') {
							O0d.fillRect(r0d.x, r0d.y + k0d / 2, -u0d, -k0d)
						} else {
							O0d.fillRect(r0d.x, r0d.y + k0d / 2, u0d, k0d)
						}
						O0d.fillStyle = s0d
					}
					O0d.fillText(r0d.text, r0d.x, r0d.y)
				}
			},
			draw: function(N0d, P0d) {
				var e0d, y0d, c0d, g0d, d0d, o4a, b0d, x0d
				e0d = this
				y0d = N0d.lineWidth
				c0d = N0d.fillStyle
				g0d = N0d.strokeStyle
				d0d = N0d.globalAlpha
				for (var t0d = 0; t0d < this.seriesArray.length; t0d++) {
					o4a = 'fi'
					o4a += 'l'
					o4a += 'l'
					b0d = e0d.seriesArray[t0d]
					if (P0d && b0d.name != P0d) {
						continue
					}
					N0d.beginPath()
					N0d.lineWidth = b0d.width
					N0d.globalAlpha = b0d.opacity
					N0d.fillStyle = b0d.color
					N0d.strokeStyle = b0d.color
					for (var A0d = 0; A0d < b0d.moves.length; A0d++) {
						x0d = b0d.moves[A0d]
						if (x0d.action == 'quadraticCurveTo') {
							N0d[x0d.action](x0d.x0, x0d.y0, x0d.x, x0d.y)
						} else if (x0d.action == 'dashedLineTo') {
							N0d[x0d.action](b0d.moves[A0d - 1].x, b0d.moves[A0d - 1].y, x0d.x, x0d.y, x0d.pattern)
						} else {
							N0d[x0d.action](x0d.x, x0d.y)
						}
					}
					if (b0d.strokeOrFill == o4a) {
						N0d.fill()
					} else {
						N0d.stroke()
					}
					N0d.closePath()
					e0d.drawText(N0d, b0d)
					N0d.lineWidth = 1
				}
				N0d.lineWidth = y0d
				N0d.fillStyle = c0d
				N0d.strokeStyle = g0d
				N9b.E9J()
				N0d.globalAlpha = d0d
			},
		}
		B9J.EaseMachine = function(G0d, z0d, o0d, S0d) {
			var A9a, r9a, j9a
			this.fc = G0d
			N9b.E9J()
			N9b.F9b(23)
			A9a = -N9b.C9b(0, '1631591005')
			r9a = -654523571
			j9a = 2
			for (var g9a = 1; N9b.f5a(g9a.toString(), g9a.toString().length, 75242) !== A9a; g9a++) {
				this.ms = z0d
				j9a += 2
			}
			if (N9b.f5a(j9a.toString(), j9a.toString().length, 54350) !== r9a) {
				this.ms = z0d
			}
			this.ms = z0d
			if (o0d || o0d === 0) {
				this.reset(o0d, S0d)
			}
		}
		B9J.EaseMachine.prototype.reset = function(D0d, T0d) {
			var S4a, n0d
			S4a = 'ob'
			S4a += 'je'
			S4a += 'ct'
			n0d = this
			if (!D0d && D0d !== 0) {
				D0d = this.currentValues
			}
			this.hasCompleted = !!''
			this.running = !{}
			N9b.E9J()
			this.okayToRun = !!'1'
			N9b.F9b(49)
			this.useNameValuePairs = N9b.U9b(S4a, typeof T0d)
			this.startTime = Date.now()
			if (this.useNameValuePairs) {
				this.startValues = D0d
				this.endValues = T0d
			} else {
				this.startValues = { default: D0d }
				this.endValues = { default: T0d }
			}
			this.changeValues = {}
			this.currentValues = {}
			for (var l0d in n0d.startValues) {
				n0d.changeValues[l0d] = n0d.endValues[l0d] - n0d.startValues[l0d]
			}
		}
		B9J.EaseMachine.prototype.next = function() {
			var Z0d, Q0d
			Z0d = this
			Q0d = Date.now()
			if (Q0d >= this.startTime + this.ms) {
				Q0d = this.startTime + this.ms
				this.hasCompleted = !!1
				this.running = ![]
			}
			this.currentValues = {}
			for (var q0d in Z0d.changeValues) {
				Z0d.currentValues[q0d] = Z0d.fc(
					Q0d - Z0d.startTime,
					Z0d.startValues[q0d],
					Z0d.changeValues[q0d],
					Z0d.ms,
				)
			}
			if (!this.useNameValuePairs) {
				return this.currentValues['default']
			}
			return this.currentValues
		}
		B9J.EaseMachine.prototype.hasCompleted = ![]
		B9J.EaseMachine.prototype.run = function(X0d, B0d, C0d, p0d) {
			var E0d
			if (this.afid) {
				cancelAnimationFrame(this.afid)
			}
			function j0d() {
				var F0d
				E0d.afid = null
				if (!E0d.okayToRun) {
					return
				}
				F0d = E0d.next()
				X0d(F0d)
				if (E0d.hasCompleted) {
					return
				}
				E0d.afid = requestAnimationFrame(j0d)
			}
			this.running = !!1
			if (B0d || B0d === 0) {
				this.reset(B0d, C0d)
			} else if (C0d || C0d === +'0') {
				this.reset(this.currentValues, C0d)
			}
			N9b.C9J()
			E0d = this
			if (p0d) {
				this.afid = requestAnimationFrame(j0d)
			} else {
				j0d()
			}
		}
		B9J.EaseMachine.prototype.stop = function() {
			var B4a
			if (this.afid) {
				cancelAnimationFrame(this.afid)
			}
			this.afid = null
			this.okayToRun = !1
			this.running = !!0
			if (typeof this.useNameValuePairs == 'undefined') {
				return {}
			}
			if (!this.useNameValuePairs) {
				B4a = 'defaul'
				B4a += 't'
				return this.currentValues[B4a]
			}
			return this.currentValues
		}
		B9J.Renderer = function() {}
		B9J.Renderer.prototype.performCalculations = function() {}
		B9J.Renderer.prototype.draw = function() {}
		B9J.Renderer.prototype.construct = function(a0d) {
			var r4a, A4a, m0d, Z4a
			r4a = 'li'
			r4a += 'n'
			r4a += 'e'
			A4a = 'l'
			A4a += 'eg'
			A4a += 'acy'
			m0d = a0d.params ? a0d.params : {}
			if (!m0d.name) {
				m0d.name = B9J.uniqueID()
			}
			if (!m0d.heightPercentage) {
				m0d.heightPercentage = 0.7
			}
			if (!m0d.opacity) {
				m0d.opacity = 1
			}
			if (!m0d.type) {
				Z4a = 'l'
				Z4a += 'i'
				Z4a += 'n'
				Z4a += 'e'
				m0d.type = Z4a
			}
			if (m0d.type == A4a || m0d.type == r4a || m0d.type == 'mountain') {
				m0d.highlightable = !''
			}
			if (!m0d.panel) {
				m0d.panel = 'chart'
			}
			this.cb = a0d.callback
			this.params = m0d
			this.seriesParams = []
			this.caches = {}
			this.colors = {}
		}
		B9J.Renderer.prototype.attachSeries = function(R0d, W0d) {
			var v4a, j4a, f0d, m6a, l6a, M6a, y4a, g4a, x6a, F6a, q6a
			v4a = 'ob'
			v4a += 'j'
			v4a += 'ec'
			v4a += 't'
			j4a = 'au'
			j4a += 'to'
			if (!this.stx || !this.stx.chart.series[R0d]) {
				return this
			}
			f0d = {
				field: R0d,
				chartType: this.params.type,
				display: this.stx.chart.series[R0d].parameters.display,
				border_color_up: this.params.defaultBorders ? j4a : null,
				fill_color_up: this.stx.chart.series[R0d].parameters.color,
				opacity_up: this.params.opacity,
				border_color_down: this.params.defaultBorders ? 'auto' : null,
				fill_color_down: this.stx.chart.series[R0d].parameters.color,
				opacity_down: this.params.opacity,
				color: this.stx.chart.series[R0d].parameters.color,
			}
			if (typeof W0d == 'string') {
				f0d.color = f0d.fill_color_down = f0d.fill_color_up = W0d
			} else if (typeof W0d == v4a) {
				for (var K0d in W0d) {
					f0d[K0d] = W0d[K0d]
				}
				if (f0d.color) {
					if (!f0d.fill_color_up) {
						m6a = +'795862925'
						l6a = 1476693319
						M6a = +'2'
						for (
							var G6a = 1;
							N9b.P5a(G6a.toString(), G6a.toString().length, 33460) !== m6a;
							G6a++
						) {
							f0d.fill_color_up = f0d.color
							M6a += 2
						}
						if (N9b.P5a(M6a.toString(), M6a.toString().length, 9857) !== l6a) {
							f0d.fill_color_up = f0d.color
						}
						f0d.fill_color_up = f0d.color
					}
					if (!f0d.fill_color_down) {
						f0d.fill_color_down = f0d.color
					}
				}
			}
			this.removeSeries(R0d, !!'1').seriesParams.push(f0d)
			if (f0d.fill_color_up != f0d.fill_color_down) {
				y4a = ' '
				y4a += 'down'
				g4a = ' '
				g4a += 'u'
				g4a += 'p'
				N9b.n9b(7)
				this.colors[N9b.U9b(g4a, R0d)] = {
					color: f0d.fill_color_up,
					opacity: f0d.opacity_up,
					display: f0d.display ? f0d.display + ' up' : R0d + ' up',
				}
				N9b.F9b(7)
				this.colors[N9b.C9b(' dn', R0d)] = {
					color: f0d.fill_color_down,
					opacity: f0d.opacity_down,
					display: f0d.display ? f0d.display + ' down' : R0d + y4a,
				}
			} else {
				this.colors[R0d] = {
					color: f0d.fill_color_up,
					opacity: f0d.opacity_up,
					display: f0d.display ? f0d.display : R0d,
				}
			}
			if (this.params.yAxis) {
				this.stx.addYAxis(this.stx.panels[this.params.panel], this.params.yAxis)
			}
			x6a = 314566793
			F6a = -1700410333
			q6a = 2
			for (var w6a = +'1'; N9b.f5a(w6a.toString(), w6a.toString().length, 35106) !== x6a; w6a++) {
				return this
			}
			if (N9b.f5a(q6a.toString(), q6a.toString().length, 14368) !== F6a) {
				return this
			}
		}
		B9J.Renderer.prototype.removeSeries = function(i3d, Y3d) {
			var I3d, H3d, h3d
			I3d = this
			for (var V3d = 0; V3d < this.seriesParams.length; V3d++) {
				if (I3d.seriesParams[V3d].field == i3d) {
					I3d.seriesParams.splice(V3d, 1)
					break
				}
			}
			N9b.n9b(7)
			delete this.colors[N9b.U9b(' up', i3d)]
			N9b.n9b(7)
			delete this.colors[N9b.U9b(' dn', i3d)]
			delete this.colors[i3d]
			N9b.C9J()
			if (!Y3d) {
				if (!this.stx.chart.series[i3d] || !this.stx.chart.series[i3d].parameters.permanent) {
					H3d = ![]
					for (var M3d in I3d.stx.chart.seriesRenderers) {
						h3d = I3d.stx.chart.seriesRenderers[M3d]
						for (var w3d = 0; w3d < h3d.seriesParams.length; w3d++) {
							if (h3d.seriesParams[w3d].field == i3d) {
								H3d = !!{}
								break
							}
						}
						if (H3d) {
							break
						}
					}
					if (!H3d) {
						this.stx.deleteSeries(i3d, this.stx.chart)
					}
				}
			}
			this.stx.deleteYAxisIfUnused(this.stx.panels[this.params.panel], this.params.yAxis)
			return this
		}
		B9J.Renderer.prototype.removeAllSeries = function(k3d) {
			var O3d, J3d
			O3d = this
			if (k3d) {
				J3d = []
				for (var U3d = 0; U3d < this.seriesParams.length; U3d++) {
					J3d.push(O3d.seriesParams[U3d].field)
				}
				for (var r3d = 0; r3d < J3d.length; r3d++) {
					O3d.removeSeries(J3d[r3d])
				}
			}
			N9b.C9J()
			this.seriesParams = []
			this.colors = {}
			this.stx.deleteYAxisIfUnused(this.stx.panels[this.params.panel], this.params.yAxis)
			return this
		}
		B9J.Renderer.prototype.ready = function() {
			this.stx.createDataSet()
			N9b.C9J()
			this.stx.draw()
			return this
		}
		B9J.Renderer.Lines = function(L3d) {
			N9b.C9J()
			this.construct(L3d)
		}
		B9J.Renderer.Lines.ciqInheritsFrom(B9J.Renderer, !{})
		B9J.Renderer.Lines.prototype.performCalculations = function() {
			var b3d, u3d, v3d, A3d, x3d, s3d
			b3d = this
			u3d = this.params.yAxis
			v3d = this.stx
			N9b.E9J()
			if (u3d) {
				A3d = v3d.panels[this.params.panel]
				x3d = []
				for (var N3d = 0; N3d < this.seriesParams.length; N3d++) {
					x3d.push(b3d.seriesParams[N3d].field)
				}
				s3d = v3d.determineMinMax(v3d.chart.dataSegment, x3d, !!'', !!1)
				v3d.calculateYAxisRange(A3d, u3d, s3d[0], s3d[1])
				u3d.high = s3d[+'1']
				N9b.n9b(24)
				u3d.low = s3d[N9b.U9b(1, '0')]
			}
		}
		B9J.Renderer.Lines.prototype.draw = function() {
			var P3d, g3d, d3d, t3d, e3d, y3d
			P3d = this
			g3d = this.stx.panels[this.params.panel].chart
			N9b.E9J()
			d3d = {}
			e3d = this.seriesParams
			for (t3d = 0; t3d < e3d.length; t3d++) {
				if (g3d.series[e3d[t3d].field]) {
					y3d = B9J.clone(g3d.series[e3d[t3d].field].parameters)
					d3d[e3d[t3d].field] = {
						parameters: B9J.extend(B9J.extend(y3d, P3d.params), e3d[t3d]),
						yValueCache: P3d.caches[e3d[t3d].field],
						useChartLegend: P3d.params.type == 'legacy',
					}
				}
			}
			this.stx.drawSeries(g3d, d3d, this.params.yAxis)
			for (t3d in d3d) {
				P3d.caches[t3d] = d3d[t3d].yValueCache
			}
		}
		return X9J
	} /* ignore jslint end   */ /* ignore jslint start */ /* eslint-enable  */ /* jshint ignore:end   */ /* jshint ignore:start */

	/* eslint-disable */ z91q(G91q())
	A3yx(J3yx())
	o2ke.M68 = function() {
		return typeof o2ke.m68.d9r === 'function'
			? o2ke.m68.d9r.apply(o2ke.m68, arguments)
			: o2ke.m68.d9r
	}
	o2ke.m68 = (function() {
		var c9r = function(L9r, T9r) {
				var h9r = T9r & 0xffff
				var p9r = T9r - h9r
				return (((p9r * L9r) | 0) + ((h9r * L9r) | 0)) | 0
			},
			e9r = function(k9r, o9r, r9r) {
				var N9r = 0xcc9e2d51,
					x9r = 0x1b873593
				var a9r = r9r
				var v9r = o9r & ~0x3
				for (var C9r = 0; C9r < v9r; C9r += 4) {
					var S9r =
						(k9r.Q3yx(C9r) & 0xff) |
						((k9r.Q3yx(C9r + 1) & 0xff) << 8) |
						((k9r.Q3yx(C9r + 2) & 0xff) << 16) |
						((k9r.Q3yx(C9r + 3) & 0xff) << 24)
					S9r = c9r(S9r, N9r)
					S9r = ((S9r & 0x1ffff) << 15) | (S9r >>> 17)
					S9r = c9r(S9r, x9r)
					a9r ^= S9r
					a9r = ((a9r & 0x7ffff) << 13) | (a9r >>> 19)
					a9r = (a9r * 5 + 0xe6546b64) | 0
				}
				S9r = 0
				switch (o9r % 4) {
					case 3:
						S9r = (k9r.Q3yx(v9r + 2) & 0xff) << 16
					case 2:
						S9r |= (k9r.Q3yx(v9r + 1) & 0xff) << 8
					case 1:
						S9r |= k9r.Q3yx(v9r) & 0xff
						S9r = c9r(S9r, N9r)
						S9r = ((S9r & 0x1ffff) << 15) | (S9r >>> 17)
						S9r = c9r(S9r, x9r)
						a9r ^= S9r
				}
				a9r ^= o9r
				a9r ^= a9r >>> 16
				a9r = c9r(a9r, 0x85ebca6b)
				a9r ^= a9r >>> 13
				a9r = c9r(a9r, 0xc2b2ae35)
				a9r ^= a9r >>> 16
				return a9r
			}
		return { d9r: e9r }
	})()
	o2ke.a0w = function() {
		return typeof o2ke.S0w.j0w === 'function'
			? o2ke.S0w.j0w.apply(o2ke.S0w, arguments)
			: o2ke.S0w.j0w
	}
	o2ke.L2t = function() {
		return typeof o2ke.j2t.k99 === 'function'
			? o2ke.j2t.k99.apply(o2ke.j2t, arguments)
			: o2ke.j2t.k99
	}
	o2ke.B0w = function() {
		return typeof o2ke.S0w.j0w === 'function'
			? o2ke.S0w.j0w.apply(o2ke.S0w, arguments)
			: o2ke.S0w.j0w
	}
	o2ke.u0w = function() {
		return typeof o2ke.S0w.o0w === 'function'
			? o2ke.S0w.o0w.apply(o2ke.S0w, arguments)
			: o2ke.S0w.o0w
	}
	o2ke.S0w = (function(O0w) {
		return {
			o0w: function() {
				var e0w,
					M0w = arguments
				switch (O0w) {
					case 53:
						e0w = (M0w[0] - M0w[3]) / M0w[4] - M0w[1] + M0w[2]
						break
					case 26:
						e0w = ((M0w[4] * M0w[1] - M0w[0]) * M0w[3]) / M0w[2]
						break
					case 54:
						e0w = M0w[0] * -M0w[1]
						break
					case 57:
						e0w = (((-M0w[0] - M0w[1]) * -M0w[4]) / M0w[3]) * M0w[2]
						break
					case 34:
						e0w = ((M0w[0] + M0w[1]) * M0w[3]) / M0w[2]
						break
					case 39:
						e0w = (-(M0w[1] * M0w[2]) - M0w[3]) / M0w[0] + M0w[4]
						break
					case 48:
						e0w = M0w[0] * +M0w[1]
						break
					case 28:
						e0w = ((M0w[2] + M0w[1]) / M0w[0]) * M0w[3] - M0w[4]
						break
					case 25:
						e0w = M0w[0] * (M0w[3] - M0w[1]) - M0w[2]
						break
					case 33:
						e0w = (M0w[1] - M0w[0]) / M0w[2]
						break
					case 80:
						e0w = (((M0w[4] / M0w[1]) * M0w[2] - M0w[3]) * M0w[0]) / M0w[5]
						break
					case 1:
						e0w = M0w[0] ^ M0w[1]
						break
					case 30:
						e0w = (M0w[0] - M0w[3]) / M0w[1] + M0w[2]
						break
					case 36:
						e0w = M0w[2] - M0w[1] + -M0w[0]
						break
					case 44:
						e0w = ((-M0w[4] - M0w[0] + M0w[2]) * -M0w[3]) / M0w[1]
						break
					case 4:
						e0w = M0w[2] + M0w[0] + M0w[1]
						break
					case 32:
						e0w = (M0w[3] - M0w[1]) * M0w[0] - M0w[4] + M0w[2]
						break
					case 21:
						e0w = M0w[2] - (M0w[0] - M0w[1])
						break
					case 12:
						e0w = M0w[1] | M0w[0]
						break
					case 77:
						e0w = -M0w[1] - M0w[0] + -M0w[2] + M0w[3]
						break
					case 42:
						e0w = M0w[0] * (M0w[4] * M0w[2] + M0w[3]) - M0w[1]
						break
					case 59:
						e0w = M0w[1] - M0w[3] / M0w[2] + M0w[0]
						break
					case 6:
						e0w = M0w[1] - M0w[0]
						break
					case 20:
						e0w = M0w[1] - M0w[3] + -M0w[0] + M0w[2]
						break
					case 17:
						e0w = M0w[0] - M0w[1] + M0w[2]
						break
					case 69:
						e0w = (M0w[4] - M0w[0] + -M0w[3]) * M0w[2] - M0w[1]
						break
					case 66:
						e0w = -M0w[0]
						break
					case 13:
						e0w = M0w[2] * M0w[1] - M0w[0]
						break
					case 24:
						e0w = M0w[1] - M0w[0] + M0w[3] + M0w[2]
						break
					case 23:
						e0w = -(M0w[0] / -M0w[1])
						break
					case 71:
						e0w = M0w[3] / M0w[4] - M0w[1] + -M0w[0] + -M0w[2]
						break
					case 7:
						e0w = M0w[0] >> M0w[1]
						break
					case 68:
						e0w = M0w[3] - M0w[2] - (M0w[0] - M0w[1])
						break
					case 29:
						e0w = ((M0w[4] - M0w[0] + -M0w[1] + M0w[2]) * M0w[3]) / M0w[5]
						break
					case 0:
						e0w = M0w[5] * (M0w[2] * M0w[0] * M0w[1] + M0w[4]) + M0w[3]
						break
					case 38:
						e0w = M0w[2] + M0w[0] + M0w[3] + M0w[1]
						break
					case 45:
						e0w = M0w[0] + M0w[1] * M0w[2]
						break
					case 75:
						e0w = M0w[0] % M0w[1]
						break
					case 43:
						e0w = (-M0w[1] - M0w[0]) * M0w[3] + M0w[2]
						break
					case 73:
						e0w = M0w[1] * M0w[3] + M0w[2] + M0w[0]
						break
					case 19:
						e0w = M0w[1] * M0w[3] - M0w[2] + -M0w[0]
						break
					case 60:
						e0w = M0w[1] - (M0w[0] << M0w[2])
						break
					case 3:
						e0w = M0w[2] + M0w[1] / M0w[0]
						break
					case 67:
						e0w = M0w[0] * (M0w[3] - M0w[1]) * M0w[2] - M0w[4]
						break
					case 16:
						e0w = M0w[3] - M0w[2] + -M0w[0] + -M0w[1] + M0w[4]
						break
					case 46:
						e0w = ((M0w[1] * M0w[2]) / M0w[0] / M0w[4]) * M0w[3]
						break
					case 62:
						e0w = M0w[1] == M0w[0]
						break
					case 8:
						e0w = ((M0w[2] - M0w[4] + M0w[0]) * M0w[3]) / M0w[1]
						break
					case 52:
						e0w = (M0w[2] * M0w[0]) / M0w[1]
						break
					case 5:
						e0w = M0w[0] + M0w[1]
						break
					case 27:
						e0w = M0w[2] * (M0w[3] - M0w[4]) - M0w[1] + -M0w[0]
						break
					case 40:
						e0w = ((M0w[1] * M0w[3] + M0w[2]) * M0w[4]) / M0w[0]
						break
					case 9:
						e0w = ((M0w[1] - M0w[2]) * M0w[3]) / M0w[0]
						break
					case 56:
						e0w = (M0w[1] * M0w[4] - M0w[3] + M0w[0]) / M0w[2]
						break
					case 31:
						e0w = M0w[2] + M0w[4] + M0w[6] + M0w[3] + M0w[5] + M0w[1] + M0w[0]
						break
					case 10:
						e0w = M0w[1] * M0w[0]
						break
					case 2:
						e0w = M0w[1] & M0w[0]
						break
					case 74:
						e0w = M0w[2] * ((M0w[0] - M0w[4]) / M0w[3] + M0w[1])
						break
					case 51:
						e0w = ((M0w[1] * M0w[0]) / M0w[2]) * M0w[4] * M0w[3]
						break
					case 72:
						e0w = (M0w[1] - M0w[4] + M0w[2]) / M0w[3] + M0w[0]
						break
					case 18:
						e0w = M0w[0] < M0w[1]
						break
					case 37:
						e0w = M0w[0] / M0w[1]
						break
					case 11:
						e0w = M0w[1] << M0w[0]
						break
					case 70:
						e0w = (M0w[1] * M0w[2] + M0w[4]) * M0w[3] - M0w[0]
						break
					case 35:
						e0w = M0w[1] * (M0w[0] + M0w[2]) - M0w[3]
						break
					case 41:
						e0w = (M0w[3] + M0w[0] + M0w[1]) / M0w[2]
						break
					case 22:
						e0w = (M0w[3] - M0w[4] * M0w[0]) / M0w[2] + M0w[1]
						break
					case 61:
						e0w = ((-M0w[1] - M0w[4] + -M0w[0] + -M0w[3]) * -M0w[2]) / M0w[5]
						break
					case 78:
						e0w = M0w[2] * (-M0w[1] - M0w[3]) + M0w[0]
						break
					case 76:
						e0w = M0w[2] * M0w[1] * M0w[0] - M0w[3]
						break
					case 65:
						e0w = M0w[2] * -(M0w[0] ^ M0w[1])
						break
					case 55:
						e0w = M0w[2] - M0w[0] / M0w[1]
						break
					case 50:
						e0w = M0w[1] - M0w[2] * M0w[0]
						break
					case 15:
						e0w = M0w[0] / M0w[2] - M0w[1]
						break
					case 64:
						e0w = ((M0w[3] - M0w[1]) * -M0w[2]) / M0w[0]
						break
					case 47:
						e0w = M0w[1] * M0w[0] * M0w[3] - M0w[4] + M0w[2]
						break
					case 49:
						e0w = -(M0w[3] / M0w[1]) - M0w[0] + M0w[2]
						break
					case 79:
						e0w = M0w[1] * M0w[0] - M0w[3] + -M0w[2] + M0w[4]
						break
					case 58:
						e0w = M0w[0] - M0w[1] - M0w[2]
						break
					case 14:
						e0w = M0w[1] + +M0w[0]
						break
					case 63:
						e0w = -M0w[1] - M0w[0] + M0w[2]
						break
				}
				return e0w
			},
			j0w: function(Y0w) {
				O0w = Y0w
			},
		}
	})()
	o2ke.M2t = function() {
		return typeof o2ke.j2t.k99 === 'function'
			? o2ke.j2t.k99.apply(o2ke.j2t, arguments)
			: o2ke.j2t.k99
	}
	function o2ke() {}
	o2ke.j2t = (function() {
		var k3t = 2
		for (; k3t !== 9; ) {
			switch (k3t) {
				case 2:
					var H3t = [arguments]
					H3t[1] = undefined
					H3t[5] = {}
					H3t[5].k99 = function() {
						var v3t = 2
						for (; v3t !== 90; ) {
							switch (v3t) {
								case 56:
									S3t[92] = S3t[9][S3t[87]]
									try {
										S3t[80] = S3t[92][S3t[77]]() ? S3t[74] : S3t[79]
									} catch (E99) {
										S3t[80] = S3t[79]
									}
									v3t = 77
									break
								case 14:
									S3t[8].n2d = ['S2d']
									S3t[8].O2d = function() {
										var j99 = typeof M91q === 'function'
										return j99
									}
									S3t[2] = S3t[8]
									v3t = 11
									break
								case 69:
									v3t = (function() {
										var Q3t = 2
										for (; Q3t !== 22; ) {
											switch (Q3t) {
												case 5:
													return
													break
												case 10:
													Q3t = X3t[9][S3t[56]] === S3t[74] ? 20 : 19
													break
												case 4:
													X3t[1] = {}
													X3t[5] = []
													X3t[4] = 0
													Q3t = 8
													break
												case 25:
													X3t[2] = true
													Q3t = 24
													break
												case 16:
													Q3t = X3t[4] < X3t[5].length ? 15 : 23
													break
												case 18:
													X3t[2] = false
													Q3t = 17
													break
												case 19:
													X3t[4]++
													Q3t = 7
													break
												case 6:
													X3t[9] = X3t[0][0][X3t[4]]
													Q3t = 14
													break
												case 11:
													X3t[1][X3t[9][S3t[89]]].t += true
													Q3t = 10
													break
												case 20:
													X3t[1][X3t[9][S3t[89]]].h += true
													Q3t = 19
													break
												case 23:
													return X3t[2]
													break
												case 12:
													X3t[5].n91q(X3t[9][S3t[89]])
													Q3t = 11
													break
												case 1:
													Q3t = X3t[0][0].length === 0 ? 5 : 4
													break
												case 2:
													var X3t = [arguments]
													Q3t = 1
													break
												case 14:
													Q3t = typeof X3t[1][X3t[9][S3t[89]]] === 'undefined' ? 13 : 11
													break
												case 13:
													X3t[1][X3t[9][S3t[89]]] = function() {
														var Y3t = 2
														for (; Y3t !== 9; ) {
															switch (Y3t) {
																case 5:
																	N3t[5].h = 0
																	N3t[5].t = 0
																	return N3t[5]
																	break
																case 2:
																	var N3t = [arguments]
																	N3t[5] = {}
																	Y3t = 5
																	break
															}
														}
													}.s91q(this, arguments)
													Q3t = 12
													break
												case 17:
													X3t[4] = 0
													Q3t = 16
													break
												case 15:
													X3t[8] = X3t[5][X3t[4]]
													X3t[6] = X3t[1][X3t[8]].h / X3t[1][X3t[8]].t
													Q3t = 26
													break
												case 7:
													Q3t = X3t[4] < X3t[0][0].length ? 6 : 18
													break
												case 26:
													Q3t = X3t[6] >= 0.5 ? 25 : 24
													break
												case 24:
													X3t[4]++
													Q3t = 16
													break
												case 8:
													X3t[4] = 0
													Q3t = 7
													break
											}
										}
									})(S3t[16])
										? 68
										: 67
									break
								case 59:
									S3t[89] = 'w2d'
									v3t = 58
									break
								case 70:
									S3t[87]++
									v3t = 57
									break
								case 58:
									S3t[87] = 0
									v3t = 57
									break
								case 40:
									S3t[94] = S3t[39]
									S3t[86] = {}
									S3t[86].n2d = ['S2d']
									S3t[86].O2d = function() {
										var c99 = false
										var Q99 = []
										try {
											for (var t99 in console) Q99.n91q(t99)
											c99 = Q99.length === 0
										} catch (g99) {}
										var R99 = c99
										return R99
									}
									S3t[85] = S3t[86]
									v3t = 54
									break
								case 57:
									v3t = S3t[87] < S3t[9].length ? 56 : 69
									break
								case 33:
									S3t[22].n2d = ['S2d']
									S3t[22].O2d = function() {
										var N99 = typeof C91q === 'function'
										return N99
									}
									S3t[51] = S3t[22]
									S3t[82] = {}
									v3t = 29
									break
								case 45:
									S3t[9].n91q(S3t[94])
									S3t[16] = []
									S3t[74] = 'E2d'
									v3t = 63
									break
								case 29:
									S3t[82].n2d = ['b2d']
									S3t[82].O2d = function() {
										var K99 = function() {
											return [] + 'a'.concat('a')
										}
										var v99 = !/\x5b\u005d/.a91q(K99 + []) && /\u0061\x61/.a91q(K99 + [])
										return v99
									}
									v3t = 44
									break
								case 68:
									v3t = 3 ? 68 : 67
									break
								case 76:
									v3t = S3t[95] < S3t[92][S3t[81]].length ? 75 : 70
									break
								case 71:
									S3t[95]++
									v3t = 76
									break
								case 77:
									S3t[95] = 0
									v3t = 76
									break
								case 48:
									S3t[9].n91q(S3t[68])
									S3t[9].n91q(S3t[85])
									S3t[9].n91q(S3t[1])
									v3t = 45
									break
								case 67:
									H3t[1] = 12
									return 8
									break
								case 54:
									S3t[9].n91q(S3t[5])
									S3t[9].n91q(S3t[67])
									S3t[9].n91q(S3t[37])
									S3t[9].n91q(S3t[2])
									S3t[9].n91q(S3t[3])
									S3t[9].n91q(S3t[51])
									v3t = 48
									break
								case 16:
									S3t[4].O2d = function() {
										var u99 = function() {
											return 'aaa'.includes('a')
										}
										var z99 = /\u0074\u0072\u0075\u0065/.a91q(u99 + [])
										return z99
									}
									S3t[3] = S3t[4]
									S3t[84] = {}
									S3t[84].n2d = ['b2d']
									S3t[84].O2d = function() {
										var G99 = function() {
											return 'a'.codePointAt(0)
										}
										var S99 = /\x39\x37/.a91q(G99 + [])
										return S99
									}
									v3t = 24
									break
								case 44:
									S3t[37] = S3t[82]
									S3t[39] = {}
									S3t[39].n2d = ['b2d']
									S3t[39].O2d = function() {
										var d99 = function() {
											return 'X'.toLocaleLowerCase()
										}
										var o99 = /\u0078/.a91q(d99 + [])
										return o99
									}
									v3t = 40
									break
								case 75:
									S3t[27] = {}
									S3t[27][S3t[89]] = S3t[92][S3t[81]][S3t[95]]
									S3t[27][S3t[56]] = S3t[80]
									S3t[16].n91q(S3t[27])
									v3t = 71
									break
								case 20:
									S3t[7].O2d = function() {
										var V99 = function() {
											return 'aaaa|a'.substr(0, 3)
										}
										var D99 = !/\x7c/.a91q(V99 + [])
										return D99
									}
									S3t[5] = S3t[7]
									S3t[4] = {}
									S3t[4].n2d = ['b2d']
									v3t = 16
									break
								case 5:
									return 24
									break
								case 24:
									S3t[68] = S3t[84]
									S3t[57] = {}
									S3t[57].n2d = ['S2d']
									S3t[57].O2d = function() {
										var P99 = typeof H91q === 'function'
										return P99
									}
									v3t = 35
									break
								case 11:
									S3t[7] = {}
									S3t[7].n2d = ['b2d']
									v3t = 20
									break
								case 1:
									v3t = H3t[1] ? 5 : 4
									break
								case 4:
									S3t[9] = []
									S3t[6] = {}
									S3t[6].n2d = ['b2d']
									S3t[6].O2d = function() {
										var A99 = function() {
											return atob('PQ==')
										}
										var J99 = !/\u0061\u0074\u006f\u0062/.a91q(A99 + [])
										return J99
									}
									S3t[1] = S3t[6]
									S3t[8] = {}
									v3t = 14
									break
								case 63:
									S3t[79] = 'c2d'
									S3t[81] = 'n2d'
									S3t[56] = 'z2d'
									S3t[77] = 'O2d'
									v3t = 59
									break
								case 2:
									var S3t = [arguments]
									v3t = 1
									break
								case 35:
									S3t[67] = S3t[57]
									S3t[22] = {}
									v3t = 33
									break
							}
						}
					}
					return H3t[5]
					break
			}
		}
	})()
	function G91q() {
		var O3t = 2
		for (; O3t !== 3; ) {
			switch (O3t) {
				case 1:
					return globalThis
					break
				case 2:
					O3t = typeof globalThis === 'object' ? 1 : 5
					break
				case 5:
					try {
						var r3t = 2
						for (; r3t !== 9; ) {
							switch (r3t) {
								case 5:
									r3t = typeof globalThis === 'undefined' ? 4 : 3
									break
								case 4:
									window.globalThis = window
									r3t = 3
									break
								case 3:
									delete Object.prototype.KqQBy
									r3t = 9
									break
								case 2:
									Object.defineProperty(Object.prototype, 'KqQBy', {
										get: function() {
											return this
										},
										configurable: true,
									})
									KqQBy.globalThis = KqQBy
									r3t = 5
									break
							}
						}
					} catch (B0t) {
						window.globalThis = window
					}
					O3t = 4
					break
				case 4:
					return globalThis
					break
			}
		}
	}
	o2ke.W0w = function() {
		return typeof o2ke.S0w.o0w === 'function'
			? o2ke.S0w.o0w.apply(o2ke.S0w, arguments)
			: o2ke.S0w.o0w
	}
	function J3yx() {
		var d68 = 2
		for (; d68 !== 3; ) {
			switch (d68) {
				case 1:
					return globalThis
					break
				case 2:
					d68 = typeof globalThis === 'object' ? 1 : 5
					break
				case 4:
					return globalThis
					break
				case 5:
					try {
						var a68 = 2
						for (; a68 !== 9; ) {
							switch (a68) {
								case 3:
									delete Object.prototype.fC5qQ
									a68 = 9
									break
								case 5:
									a68 = typeof globalThis === 'undefined' ? 4 : 3
									break
								case 4:
									window.globalThis = window
									a68 = 3
									break
								case 2:
									Object.defineProperty(Object.prototype, 'fC5qQ', {
										get: function() {
											return this
										},
										configurable: true,
									})
									fC5qQ.globalThis = fC5qQ
									a68 = 5
									break
							}
						}
					} catch (e18) {
						window.globalThis = window
					}
					d68 = 4
					break
			}
		}
	}
	o2ke.U68 = function() {
		return typeof o2ke.m68.d9r === 'function'
			? o2ke.m68.d9r.apply(o2ke.m68, arguments)
			: o2ke.m68.d9r
	}
	function A3yx() {
		function q18() {
			var B68 = 2
			for (; B68 !== 7; ) {
				switch (B68) {
					case 2:
						var Y68 = [arguments]
						Y68[8] = 'ineProperty'
						Y68[4] = ''
						Y68[4] = 'ef'
						Y68[7] = 'd'
						Y68[1] = 7
						try {
							var g68 = 2
							for (; g68 !== 9; ) {
								switch (g68) {
									case 3:
										try {
											var j68 = 2
											for (; j68 !== 3; ) {
												switch (j68) {
													case 4:
														Y68[0][0].Object[Y68[9]](Y68[6], Y68[0][4], Y68[5])
														j68 = 3
														break
													case 2:
														Y68[9] = Y68[7]
														Y68[9] += Y68[4]
														Y68[9] += Y68[8]
														j68 = 4
														break
												}
											}
										} catch (X18) {
											Y68[6][Y68[0][4]] = Y68[5].value
										}
										g68 = 9
										break
									case 2:
										Y68[5] = {}
										Y68[2] = (1, Y68[0][1])(Y68[0][0])
										Y68[6] = [Y68[1], Y68[2].prototype][Y68[0][3]]
										Y68[5].value = Y68[6][Y68[0][2]]
										g68 = 3
										break
								}
							}
						} catch (Q18) {}
						B68 = 7
						break
				}
			}
		}
		function v18() {
			var J68 = 2
			for (; J68 !== 5; ) {
				switch (J68) {
					case 2:
						var t68 = [arguments]
						return t68[0][0].String
						break
				}
			}
		}
		var T68 = 2
		for (; T68 !== 10; ) {
			switch (T68) {
				case 11:
					O18(v18, 'charCodeAt', w68[7], w68[4])
					T68 = 10
					break
				case 12:
					var O18 = function() {
						var N68 = 2
						for (; N68 !== 5; ) {
							switch (N68) {
								case 2:
									var h68 = [arguments]
									q18(w68[0][0], h68[0][0], h68[0][1], h68[0][2], h68[0][3])
									N68 = 5
									break
							}
						}
					}
					T68 = 11
					break
				case 9:
					w68[9] = 'Q'
					w68[7] = 9
					w68[7] = 1
					w68[4] = w68[9]
					w68[4] += w68[5]
					w68[4] += w68[6]
					T68 = 12
					break
				case 2:
					var w68 = [arguments]
					w68[6] = ''
					w68[6] = 'x'
					w68[5] = ''
					w68[5] = '3y'
					T68 = 9
					break
			}
		}
	}
	function z91q() {
		function z0t() {
			var x3t = 2
			for (; x3t !== 5; ) {
				switch (x3t) {
					case 2:
						var G3t = [arguments]
						return G3t[0][0].Array
						break
				}
			}
		}
		function A0t() {
			var m3t = 2
			for (; m3t !== 5; ) {
				switch (m3t) {
					case 2:
						var V3t = [arguments]
						return V3t[0][0]
						break
				}
			}
		}
		var D3t = 2
		for (; D3t !== 67; ) {
			switch (D3t) {
				case 73:
					E0t(y0t, 'test', d3t[49], d3t[29])
					D3t = 72
					break
				case 71:
					E0t(A0t, d3t[79], d3t[75], d3t[81])
					D3t = 70
					break
				case 56:
					d3t[89] += d3t[1]
					d3t[89] += d3t[4]
					d3t[29] = d3t[5]
					d3t[29] += d3t[21]
					D3t = 75
					break
				case 72:
					E0t(A0t, d3t[89], d3t[75], d3t[42])
					D3t = 71
					break
				case 53:
					d3t[87] += d3t[21]
					d3t[87] += d3t[84]
					d3t[41] = d3t[39]
					d3t[41] += d3t[18]
					D3t = 49
					break
				case 39:
					d3t[75] = 0
					d3t[54] = d3t[15]
					d3t[54] += d3t[21]
					d3t[54] += d3t[84]
					d3t[87] = d3t[14]
					D3t = 53
					break
				case 64:
					d3t[81] += d3t[73]
					d3t[79] = d3t[8]
					d3t[79] += d3t[77]
					d3t[79] += d3t[2]
					D3t = 60
					break
				case 43:
					d3t[15] = 's'
					d3t[49] = 8
					d3t[49] = 1
					d3t[75] = 3
					D3t = 39
					break
				case 17:
					d3t[77] = '_abstrac'
					d3t[56] = ''
					d3t[56] = 'sidual'
					d3t[37] = '__r'
					d3t[47] = 'e'
					d3t[73] = ''
					d3t[73] = ''
					D3t = 23
					break
				case 69:
					E0t(z0t, 'push', d3t[49], d3t[87])
					D3t = 68
					break
				case 60:
					d3t[42] = d3t[9]
					d3t[42] += d3t[6]
					d3t[42] += d3t[84]
					d3t[89] = d3t[3]
					D3t = 56
					break
				case 68:
					E0t(g0t, 'apply', d3t[49], d3t[54])
					D3t = 67
					break
				case 3:
					d3t[1] = ''
					d3t[1] = 'opt'
					d3t[9] = ''
					d3t[9] = 'M9'
					D3t = 6
					break
				case 75:
					d3t[29] += d3t[84]
					D3t = 74
					break
				case 32:
					d3t[14] = 'n'
					d3t[84] = ''
					d3t[84] = 'q'
					d3t[21] = '91'
					d3t[15] = ''
					d3t[15] = ''
					D3t = 43
					break
				case 74:
					var E0t = function() {
						var J3t = 2
						for (; J3t !== 5; ) {
							switch (J3t) {
								case 2:
									var a3t = [arguments]
									c0t(d3t[0][0], a3t[0][0], a3t[0][1], a3t[0][2], a3t[0][3])
									J3t = 5
									break
							}
						}
					}
					D3t = 73
					break
				case 23:
					d3t[73] = '1q'
					d3t[18] = ''
					d3t[18] = '9'
					d3t[39] = ''
					d3t[39] = 'C'
					d3t[14] = ''
					D3t = 32
					break
				case 11:
					d3t[2] = 't'
					d3t[3] = '__'
					d3t[8] = ''
					d3t[8] = '_'
					d3t[7] = 'H'
					D3t = 17
					break
				case 49:
					d3t[41] += d3t[73]
					d3t[91] = d3t[37]
					d3t[91] += d3t[47]
					d3t[91] += d3t[56]
					d3t[81] = d3t[7]
					d3t[81] += d3t[18]
					D3t = 64
					break
				case 70:
					E0t(A0t, d3t[91], d3t[75], d3t[41])
					D3t = 69
					break
				case 2:
					var d3t = [arguments]
					d3t[5] = ''
					d3t[5] = ''
					d3t[5] = 'a'
					D3t = 3
					break
				case 6:
					d3t[4] = 'imize'
					d3t[2] = ''
					d3t[2] = ''
					d3t[6] = '1'
					D3t = 11
					break
			}
		}
		function g0t() {
			var Z3t = 2
			for (; Z3t !== 5; ) {
				switch (Z3t) {
					case 2:
						var n3t = [arguments]
						return n3t[0][0].Function
						break
				}
			}
		}
		function y0t() {
			var q3t = 2
			for (; q3t !== 5; ) {
				switch (q3t) {
					case 2:
						var C3t = [arguments]
						return C3t[0][0].RegExp
						break
				}
			}
		}
		function c0t() {
			var F3t = 2
			for (; F3t !== 6; ) {
				switch (F3t) {
					case 2:
						var P3t = [arguments]
						P3t[3] = ''
						P3t[3] = 'operty'
						P3t[1] = ''
						F3t = 3
						break
					case 3:
						P3t[1] = 'efinePr'
						P3t[2] = ''
						P3t[2] = 'd'
						try {
							var u3t = 2
							for (; u3t !== 9; ) {
								switch (u3t) {
									case 2:
										P3t[5] = {}
										P3t[7] = (1, P3t[0][1])(P3t[0][0])
										P3t[4] = [P3t[7], P3t[7].prototype][P3t[0][3]]
										u3t = 4
										break
									case 4:
										P3t[5].value = P3t[4][P3t[0][2]]
										try {
											var l3t = 2
											for (; l3t !== 3; ) {
												switch (l3t) {
													case 2:
														P3t[6] = P3t[2]
														P3t[6] += P3t[1]
														P3t[6] += P3t[3]
														P3t[0][0].Object[P3t[6]](P3t[4], P3t[0][4], P3t[5])
														l3t = 3
														break
												}
											}
										} catch (F0t) {
											P3t[4][P3t[0][4]] = P3t[5].value
										}
										u3t = 9
										break
								}
							}
						} catch (u0t) {}
						F3t = 6
						break
				}
			}
		}
	}
	var __js_core_engine_
	o2ke.M2t()
	__js_core_engine_ = function(W2t, p2t, b2t, s2t) {
		var m0w = o2ke
		var t5h, h5h, A28, Q28, X28, V28, C28, S28, Z28, r28, i2t, f2t, w2t, o2t, U2t
		t5h = '<div class="stx'
		t5h += '-ico-handle" style="display: none;"><span></span><'
		t5h += '/div> '
		h5h = '<div'
		h5h += ' class="stx_crossh'
		h5h += 'air stx_crosshair_x'
		h5h += '" style="display: none;"></div>'
		A28 = 's'
		A28 += 'ol'
		A28 += 'i'
		A28 += 'd'
		Q28 = 'a'
		Q28 += 'u'
		Q28 += 'to'
		X28 = 'a'
		X28 += 'uto'
		V28 = 'sol'
		V28 += 'i'
		V28 += 'd'
		C28 = 'a'
		C28 += 'u'
		C28 += 't'
		C28 += 'o'
		S28 = 's'
		S28 += 'oli'
		S28 += 'd'
		Z28 = 'au'
		Z28 += 'to'
		r28 = '#7D'
		r28 += 'A'
		r28 += '6F5'
		Math.easeOutCubic = function(t2t, T2t, B2t, E2t) {
			m0w.L2t()
			t2t /= E2t
			t2t--
			m0w.B0w(0)
			return m0w.u0w(t2t, t2t, t2t, T2t, 1, B2t)
		}
		i2t = W2t.CIQ
		f2t = W2t.$$
		w2t = W2t.$$$
		o2t = p2t.timezoneJS
		i2t.ChartEngine = function(A2t) {
			var p28, G28, I2t
			p28 = 'mo'
			p28 += 'n'
			p28 += 'th'
			G28 = 'o'
			G28 += 'h'
			G28 += 'lc'
			if (!A2t) {
				A2t = { container: null }
			}
			if (A2t.constructor == HTMLDivElement) {
				I2t = { container: A2t }
				A2t = I2t
			}
			this.markers = {}
			this.panels = {}
			this.overlays = {}
			this.charts = {}
			this.eventListeners = []
			this.animations = { zoom: new i2t.EaseMachine(Math.easeOutCubic, 400) }
			this.callbacks = {
				studyOverlayEdit: null,
				studyPanelEdit: null,
				tap: null,
				rightClick: null,
				longhold: null,
				move: null,
				layout: null,
				drawing: null,
				symbolChange: null,
				calculateTradingDecimalPlaces: i2t.calculateTradingDecimalPlaces,
			}
			this.controls = {}
			m0w.L2t()
			this.goneVertical = ![]
			this.pinchingScreen = ![]
			this.grabbingScreen = ![]
			this.grabStartX = +'0'
			this.grabStartY = 0
			this.grabStartScrollX = 0
			this.grabStartScrollY = +'0'
			this.swipe = {}
			this.yTolerance = 100
			m0w.a0w(1)
			this.minimumLeftBars = m0w.u0w('1', 0)
			this.grabStartCandleWidth = 0
			this.grabStartZoom = 0
			this.grabOverrideClick = !!''
			this.grabMode = ''
			this.vectorsShowing = !'1'
			this.mouseMode = !''
			this.reverseMouseWheel = !!0
			this.mouseWheelAcceleration = !!{}
			this.minimumCandleWidth = 1
			this.minimumZoomTicks = 9
			this.allowZoom = !!{}
			this.allowScroll = !!'1'
			this.allowSideswipe = !!{}
			this.anyHighlighted = !1
			this.accessoryTimer = null
			this.lastAccessoryUpdate = new Date().getTime()
			this.displayCrosshairs = !!{}
			this.hrPanel = null
			this.editingAnnotation = !!0
			this.openDialog = ''
			this.displayIconsUpDown = !!1
			this.displayIconsSolo = !![]
			this.displayIconsClose = !!'1'
			this.displayPanelResize = !![]
			this.markerDelay = 0
			this.manageTouchAndMouse = !''
			this.captureTouchEvents = !!'1'
			this.captureMouseWheelEvents = !![]
			this.touches = []
			this.changedTouched = []
			this.crosshairTick = null
			this.crosshairValue = null
			this.yaxisLabelStyle = 'roundRectArrow'
			this.axisBorders = null
			this.pt = { x1: -1, x2: -1, y1: -1, y2: -1 }
			this.moveA = -1
			this.moveB = -+'1'
			this.touchStartTime = -1
			this.gestureStartDistance = -1
			this.grabStartPeriodicity = 1
			this.grabEndPeriodicity = -1
			this.scrollEvent = null
			this.cmd = !1
			this.ctrl = !{}
			this.shift = !!''
			this.userPointerDown = !1
			this.cloneDrawing = ![]
			this.crosshairXOffset = -40
			this.crosshairYOffset = -+'40'
			this.displayInitialized = !!''
			this.extendLastTick = !1
			this.clicks = { s1MS: -1, e1MS: -1, s2MS: -1, e2MS: -1 }
			this.cancelTouchSingleClick = !!0
			this.layout = {
				interval: 'day',
				periodicity: 1,
				timeUnit: null,
				candleWidth: 8,
				volumeUnderlay: !{},
				adj: !!'1',
				crosshair: !!'',
				chartType: 'candle',
				extended: !1,
				marketSessions: {},
				aggregationType: G28,
				chartScale: 'linear',
				studies: {},
				panels: {},
			}
			this.preferences = {
				currentPriceLine: !!0,
				magnet: !1,
				horizontalCrosshairField: null,
				labels: !!1,
				whitespace: '50' ^ 0,
				zoomInSpeed: null,
				zoomOutSpeed: null,
			}
			this.streamParameters = {
				count: 0,
				maxWait: 1000,
				maxTicks: 100,
				timeout: -1,
				fillGaps: !![],
			}
			this.translationCallback = null
			this.locale = null
			this.dataZone = null
			this.displayZone = null
			this.timeZoneOffset = 0
			this.changeCallback = null
			this.masterData = null
			this.transformDataSetPre = null
			this.transformDataSetPost = null
			this.transformMasterDataQuote = null
			this.dataCallback = null
			this.dontRoll = !{}
			this.allowEquations = !!{}
			this.drawingObjects = []
			this.undoStamps = []
			this.cleanupGaps = !1
			this.maxDataSetSize = 20000
			this.resizeDetectMS = 1000
			this.xAxisAsFooter = !{}
			this.chart = new i2t.ChartEngine.Chart()
			this.chart.name = 'chart'
			this.chart.canvas = null
			this.chart.tempCanvas = null
			this.chart.container = A2t.container
			this.chart.market = new i2t.Market()
			this.candleWidthPercent = 0.65
			this.noWicksOnCandles = { rangebars: 1, renko: 1, linebreak: +'1' }
			this.fetchMaximumBars = { rangebars: 1, kagi: 1, renko: 1, linebreak: +'1', pandf: 1 }
			this.hasNTBAxis = {
				rangebars: '1' - 0,
				kagi: '1' * 1,
				renko: '1' >> 1476068128,
				linebreak: 1,
				pandf: 1,
			}
			this.autoPickCandleWidth = { turnOn: ![], candleWidth: 5 }
			this.staticRangePeriodicityMap = [
				{ rangeInMS: i2t.WEEK, periodicity: 1, interval: 5 },
				{ rangeInMS: i2t.MONTH, periodicity: 1, interval: +'30' },
				{ rangeInMS: i2t.DECADE, periodicity: 1, interval: 'day' },
				{ rangeInMS: i2t.DECADE * 5, periodicity: 1, interval: 'week' },
				{ rangeInMS: i2t.DECADE * 10, periodicity: 1, interval: p28 },
				{ rangeInMS: Number.MAX_VALUE, periodicity: 12, interval: 'month' },
			]
			this.dynamicRangePeriodicityMap = [
				{ interval: 1, rangeInMS: i2t.MINUTE },
				{ interval: 5, rangeInMS: i2t.MINUTE * 5 },
				{ interval: 30, rangeInMS: i2t.MINUTE * 30 },
				{ interval: 60, rangeInMS: i2t.MINUTE * 60 },
				{ interval: 'day', rangeInMS: i2t.DAY },
				{ interval: 'month', rangeInMS: i2t.MONTH },
				{ interval: 'year', rangeInMS: i2t.YEAR },
			]
			this.charts.chart = this.chart
			this.styles = {}
			this.currentVectorParameters = i2t.clone(i2t.ChartEngine.currentVectorParameters)
			i2t.extend(this, A2t)
			if (A2t.container) {
				this.registerHTMLElements()
				this.chart.width = this.chart.container.clientWidth - this.chart.yAxis.width
				this.setCandleWidth(this.layout.candleWidth, this.chart)
				this.chart.canvasHeight = this.chart.container.clientHeight
				if (i2t.useOldWheelLogic && !i2t.FireFoxWheelWorkaround) {
					if (i2t.isIE) {
						document.body.addEventListener('wheel', function(c2t) {
							var y2t, D28
							m0w.M2t()
							if (i2t.ChartEngine.insideChart) {
								c2t.preventDefault()
								for (var g2t = '0' * 1; g2t < i2t.ChartEngine.registeredContainers.length; g2t++) {
									y2t = i2t.ChartEngine.registeredContainers[g2t].stx
									if (
										i2t.ChartEngine.crosshairX >= y2t.left &&
										i2t.ChartEngine.crosshairX <= y2t.right &&
										i2t.ChartEngine.crosshairY >= y2t.top &&
										i2t.ChartEngine.crosshairY <= y2t.bottom
									) {
										D28 = 'onmouse'
										D28 += 'wheel'
										y2t.mouseWheel(c2t, D28)
									}
								}
							}
						})
					} else {
						document.body.addEventListener('wheel', function(z2t) {
							m0w.M2t()
							if (i2t.ChartEngine.insideChart) {
								z2t.preventDefault()
							}
						})
					}
					i2t.FireFoxWheelWorkaround = !!'1'
				}
			}
			this.construct()
		}
		i2t.ChartEngine.drawingLine = !{}
		i2t.ChartEngine.resizingPanel = null
		i2t.ChartEngine.vectorType = ''
		i2t.ChartEngine.crosshairX = 0
		i2t.ChartEngine.crosshairY = 0
		i2t.ChartEngine.insideChart = !1
		i2t.ChartEngine.overXAxis = ![]
		i2t.ChartEngine.overYAxis = ![]
		i2t.ChartEngine.currentColor = 'auto'
		i2t.ChartEngine.drawingTools = {}
		i2t.ChartEngine.useAnimation = !i2t.is_chrome
		i2t.ChartEngine.ipadMaxTicks = 1500
		i2t.ChartEngine.enableCaching = ![]
		i2t.ChartEngine.ignoreTouch = !{}
		i2t.ChartEngine.useOldAndroidClear = !!{}
		i2t.ChartEngine.currentVectorParameters = {
			vectorType: null,
			pattern: 'solid',
			lineWidth: 1,
			fillColor: r28,
			currentColor: 'auto',
			axisLabel: !!'1',
			fibonacci: {
				trend: { color: Z28, parameters: { pattern: S28, opacity: 0.25, lineWidth: 1 } },
				fibs: [
					{
						level: -0.618,
						color: 'auto',
						parameters: { pattern: 'solid', opacity: 0.25, lineWidth: 1 },
					},
					{
						level: -0.382,
						color: 'auto',
						parameters: { pattern: 'solid', opacity: '0.25' - 0, lineWidth: 1 },
					},
					{ level: 0, color: C28, parameters: { pattern: 'solid', lineWidth: 1 } },
					{
						level: 0.382,
						color: 'auto',
						parameters: { pattern: V28, opacity: 0.25, lineWidth: 1 },
					},
					{
						level: +'0.618',
						color: X28,
						parameters: { pattern: 'solid', opacity: 0.25, lineWidth: 1 },
					},
					{
						level: 0.5,
						color: 'auto',
						parameters: { pattern: 'solid', opacity: 0.25, lineWidth: 1 },
					},
					{ level: 1, color: Q28, parameters: { pattern: 'solid', lineWidth: 1 } },
					{
						level: 1.382,
						color: 'auto',
						parameters: { pattern: 'solid', opacity: 0.25, lineWidth: 1 },
					},
					{
						level: 1.618,
						color: 'auto',
						parameters: { pattern: 'solid', opacity: +'0.25', lineWidth: 1 },
					},
				],
				extendLeft: ![],
				printLevels: !0,
				printValues: !1,
				timezone: {
					color: 'auto',
					parameters: { pattern: A28, opacity: '0.25' - 0, lineWidth: 1 },
				},
			},
			annotation: { font: { style: null, size: null, weight: null, family: null } },
		}
		i2t.ChartEngine.defaultDisplayTimeZone = null
		i2t.ChartEngine.Chart = function() {
			this.xAxis = new i2t.ChartEngine.XAxis()
			this.yAxis = new i2t.ChartEngine.YAxis()
			this.symbolObject = { symbol: null }
			this.series = {}
			this.seriesRenderers = {}
			m0w.M2t()
			this.xaxis = []
		}
		i2t.ChartEngine.Chart.prototype.lockScroll = ![]
		i2t.ChartEngine.YAxis = function() {}
		i2t.ChartEngine.XAxis = function() {}
		i2t.ChartEngine.Panel = function(d2t, e2t) {
			m0w.M2t()
			if (e2t) {
				this.yAxis = e2t
			} else {
				this.yAxis = new i2t.ChartEngine.YAxis()
			}
			this.name = d2t
		}
		i2t.ChartEngine.YAxis.prototype = {
			high: null,
			low: null,
			shadow: null,
			logHigh: null,
			logLow: null,
			logShadow: null,
			multiplier: null,
			bottom: null,
			top: null,
			height: null,
			left: null,
			width: null,
		}
		i2t.ChartEngine.YAxis.prototype.maxDecimalPlaces = 5
		i2t.ChartEngine.YAxis.prototype.max = null
		i2t.ChartEngine.YAxis.prototype.min = null
		i2t.ChartEngine.YAxis.prototype.decimalPlaces = null
		i2t.ChartEngine.YAxis.prototype.idealTickSizePixels = null
		i2t.ChartEngine.YAxis.prototype.minimumPriceTick = null
		i2t.ChartEngine.YAxis.prototype.fractional = null
		i2t.ChartEngine.YAxis.prototype.displayBorder = !0
		i2t.ChartEngine.YAxis.prototype.displayGridLines = !![]
		i2t.ChartEngine.YAxis.prototype.noDraw = null
		i2t.ChartEngine.YAxis.prototype.drawCurrentPriceLabel = !!{}
		i2t.ChartEngine.YAxis.prototype.drawPriceLabels = !![]
		i2t.ChartEngine.YAxis.prototype.yaxisLabelStyle = null
		i2t.ChartEngine.YAxis.prototype.justifyRight = null
		i2t.ChartEngine.YAxis.prototype.textBackground = !!0
		i2t.ChartEngine.YAxis.prototype.priceFormatter = null
		i2t.ChartEngine.YAxis.prototype.bottomOffset = 0
		i2t.ChartEngine.YAxis.prototype.topOffset = 0
		i2t.ChartEngine.YAxis.prototype.initialMarginTop = 10
		i2t.ChartEngine.YAxis.prototype.initialMarginBottom = 10
		m0w.B0w(2)
		i2t.ChartEngine.YAxis.prototype.zoom = m0w.u0w(2147483647, '0')
		m0w.B0w(1)
		i2t.ChartEngine.YAxis.prototype.scroll = m0w.W0w('0', 0)
		i2t.ChartEngine.YAxis.prototype.width = 50
		i2t.ChartEngine.YAxis.prototype.textStyle = null
		i2t.ChartEngine.YAxis.prototype.position = null
		i2t.ChartEngine.YAxis.defaultShadowBreaks = [
			[1000, 2],
			[+'1', 4],
		]
		i2t.ChartEngine.YAxis.smallChartShadowBreaks = [
			[10, 2],
			[1, 4],
		]
		i2t.ChartEngine.YAxis.prototype.pretty = !!{}
		i2t.ChartEngine.YAxis.prototype.increments = [1, 2.5, 5]
		i2t.ChartEngine.YAxis.prototype.prettySemiLog = !!'1'
		i2t.ChartEngine.YAxis.prototype.shadowBreaks = i2t.ChartEngine.YAxis.defaultShadowBreaks
		i2t.ChartEngine.Panel.prototype = {
			name: null,
			display: null,
			chart: null,
			yAxis: null,
			shareChartXAxis: null,
			top: null,
			bottom: null,
			height: null,
			percent: null,
		}
		i2t.ChartEngine.XAxis.prototype = {
			formatter: null,
			adjustTimeZone: !!{},
			idealTickSizePixels: null,
			timeUnit: null,
			timeUnitMultiplier: null,
			axisType: null,
			displayBorder: !![],
			displayGridLines: !![],
			minimumLabelWidth: 50,
			futureTicks: !0,
			futureTicksInterval: 1,
		}
		i2t.ChartEngine.Chart.prototype = {
			symbol: null,
			symbolObject: { symbol: null },
			symbolDisplay: null,
			series: {},
			seriesRenderers: {},
			scroll: +'0',
			standStill: 0,
			maxTicks: 0,
			masterData: null,
			dataSet: null,
			scrubbed: null,
			dataSegment: null,
			baseline: {
				includeInDataSegment: !{},
				defaultLevel: null,
				userLevel: null,
				actualLevel: null,
			},
			xAxis: null,
			xaxis: [],
			xaxisFactor: 30,
			decimalPlaces: 2,
			roundit: +'100',
			legendRenderer: i2t.drawLegend,
			customChart: null,
			yaxisPaddingRight: null,
			yaxisPaddingLeft: null,
			tickCache: {},
			allowScrollPast: !0,
			hideDrawings: !'1',
			defaultChartStyleConfig: {},
		}
		i2t.ChartEngine.prototype.convertToDataZone = function(C2t) {
			var a2t
			if (this.dataZone) {
				a2t = i2t.convertTimeZone(C2t, null, this.dataZone)
				C2t = new Date(
					a2t.getFullYear(),
					a2t.getMonth(),
					a2t.getDate(),
					a2t.getHours(),
					a2t.getMinutes(),
					a2t.getSeconds(),
					a2t.getMilliseconds(),
				)
			}
			return C2t
		}
		i2t.ChartEngine.isDailyInterval = function(V2t) {
			var R28
			R28 = 'w'
			R28 += 'e'
			R28 += 'ek'
			m0w.M2t()
			if (V2t == 'day') {
				return !0
			}
			if (V2t == R28) {
				return !![]
			}
			if (V2t == 'month') {
				return !![]
			}
			return ![]
		}
		i2t.ChartEngine.chartShowsHighs = function(n2t) {
			var K28, b48, S48, E48
			K28 = 'b'
			K28 += 'aseline_delta'
			if (n2t == 'line') {
				return !!0
			}
			if (n2t == 'colored_line') {
				return !'1'
			}
			if (n2t == 'mountain') {
				return !'1'
			}
			m0w.M2t()
			if (n2t == 'colored_mountain') {
				b48 = 732626081
				S48 = 1682483946
				E48 = 2
				for (
					var V48 = +'1';
					m0w.U68(V48.toString(), V48.toString().length, +'10070') !== b48;
					V48++
				) {
					return !!''
				}
				if (m0w.U68(E48.toString(), E48.toString().length, 30681) !== S48) {
					return !!{}
				}
			}
			if (n2t == K28) {
				return !1
			}
			if (n2t == 'baseline_delta_mountain') {
				return ![]
			}
			return !0
		}
		i2t.ChartEngine.prototype.debug = function() {
			return
		}
		i2t.ChartEngine.prototype.fps = function() {
			var x5h, u5h, k5h, y5h, r2t, G2t, P2t, D2t
			x5h = 'Usi'
			x5h += 'n'
			x5h += 'g setTimeout'
			u5h = 'Using reques'
			u5h += 'tAnimationFrame'
			k5h = ' s'
			k5h += 'eco'
			k5h += 'n'
			k5h += 'ds.'
			y5h = 'Mea'
			y5h += 'suring settimeout for '
			r2t = new Date().getTime()
			function O2t() {
				var J2t
				J2t = new Date().getTime()
				m0w.M2t()
				if ((J2t - r2t) / 1000 > P2t) {
					m0w.a0w(3)
					console.log(m0w.W0w(P2t, G2t, 'FPS='))
					return
				}
				D2t.draw()
				G2t++
				if (i2t.ChartEngine.useAnimation) {
					requestAnimationFrame(O2t)
				} else {
					setTimeout(O2t, 0)
				}
			}
			G2t = 0
			P2t = 5
			D2t = this
			m0w.L2t()
			m0w.B0w(4)
			console.log(m0w.u0w(P2t, k5h, y5h))
			console.log(i2t.ChartEngine.useAnimation ? u5h : x5h)
			O2t()
		}
		W2t.STXChart = i2t.ChartEngine
		i2t.ChartEngine.DrawingDescriptor = {
			name: '',
			render: null,
			intersected: null,
			click: null,
			abort: null,
		}
		i2t.ChartEngine.prototype.prepend = function(F2t, Z2t) {
			var q2t, m2t, R88, W88, K88
			m0w.B0w(5)
			q2t = m0w.W0w('prepend', F2t)
			if (this instanceof i2t.ChartEngine) {
				R88 = 1545066117
				W88 = 1653356128
				K88 = 2
				for (
					var x28 = 1;
					m0w.U68(x28.toString(), x28.toString().length, '95289' | 13361) !== R88;
					x28++
				) {
					m2t = this.hasOwnProperty(q2t) ? this[q2t] : []
					K88 += 2
				}
				if (m0w.M68(K88.toString(), K88.toString().length, 24949) !== W88) {
					m2t = this.hasOwnProperty(q2t) ? this[q2t] : []
				}
				m2t = this.hasOwnProperty(q2t) ? this[q2t] : []
				this[q2t] = [Z2t].concat(m2t)
			} else {
				m2t = i2t.ChartEngine.prototype[q2t] || []
				i2t.ChartEngine.prototype[q2t] = [Z2t].concat(m2t)
			}
			m0w.M2t()
			return { method: q2t, func: Z2t }
		}
		i2t.ChartEngine.prototype.append = function(H2t, x2t) {
			var u2t, l2t
			m0w.a0w(5)
			u2t = m0w.u0w('append', H2t)
			if (this instanceof i2t.ChartEngine) {
				l2t = this.hasOwnProperty(u2t) ? this[u2t] : []
				this[u2t] = l2t.concat(x2t)
			} else {
				l2t = i2t.ChartEngine.prototype[u2t] || []
				i2t.ChartEngine.prototype[u2t] = l2t.concat(x2t)
			}
			m0w.L2t()
			return { method: u2t, func: x2t }
		}
		i2t.ChartEngine.prototype.removeInjection = function(N2t) {
			var f48, R48, W48, k2t, X2t, S2t
			f48 = -+'1023531336'
			R48 = 1656438710
			W48 = 2
			for (var y78 = 1; m0w.M68(y78.toString(), y78.toString().length, 22739) !== f48; y78++) {
				k2t = this
				X2t = N2t.method
				W48 += 2
			}
			if (m0w.M68(W48.toString(), W48.toString().length, 48897) !== R48) {
				k2t = this
				X2t = N2t.method
			}
			m0w.M2t()
			if (this instanceof i2t.ChartEngine) {
				if (!this[X2t]) {
					return
				}
				for (S2t = 0; S2t < this[X2t].length; S2t++) {
					if (k2t[X2t][S2t] == N2t.func) {
						k2t[X2t].splice(S2t, 1)
						return
					}
				}
			} else {
				if (!i2t.ChartEngine.prototype[X2t]) {
					return
				}
				for (S2t = 0; S2t < i2t.ChartEngine.prototype[X2t].length; S2t++) {
					if (i2t.ChartEngine.prototype[X2t][S2t] == N2t.func) {
						i2t.ChartEngine.prototype[X2t].splice(S2t, 1)
						return
					}
				}
			}
		}
		i2t.ChartEngine.prototype.remove = function(v2t) {
			var w5h
			m0w.M2t()
			if (this instanceof i2t.ChartEngine) {
				w5h = 'p'
				w5h += 'repen'
				w5h += 'd'
				m0w.B0w(5)
				delete this[m0w.W0w('append', v2t)]
				m0w.a0w(5)
				delete this[m0w.u0w(w5h, v2t)]
			} else {
				m0w.a0w(5)
				delete i2t.ChartEngine.prototype[m0w.W0w('append', v2t)]
				m0w.B0w(5)
				delete i2t.ChartEngine.prototype[m0w.W0w('prepend', v2t)]
			}
		}
		i2t.ChartEngine.registeredContainers = []
		i2t.ChartEngine.handleContextMenu = function(Q2t) {
			var R2t
			if (!Q2t) {
				Q2t = event
			}
			m0w.M2t()
			for (var Y2t = 0; Y2t < i2t.ChartEngine.registeredContainers.length; Y2t++) {
				R2t = i2t.ChartEngine.registeredContainers[Y2t].stx
				if (R2t) {
					if (R2t.anyHighlighted) {
						if (Q2t.preventDefault) {
							Q2t.preventDefault()
						}
						return !'1'
					}
				}
			}
		}
		i2t.ChartEngine.prototype.positionMarkers = function() {}
		U2t = function(K2t, M6t, j6t) {
			if (!window.splineWarning) {
				console.log('Warning: Cannot find implementation of splining.  Try loading splines.js')
			}
			m0w.L2t()
			window.splineWarning = 1
			for (var h2t = 2; h2t < K2t.length; h2t += +'2') {
				j6t.lineTo(K2t[h2t], K2t[h2t + ('1' - 0)])
			}
		}
		if (!W2t.plotSpline) {
			W2t.plotSpline = U2t
		}
		i2t.ChartEngine.prototype.plugins = {}
		i2t.ChartEngine.htmlControls = {
			annotationSave:
				'<span class="stx-btn stx_annotation_save" style="display: none;">save</span>',
			annotationCancel:
				'<span class="stx-btn stx_annotation_cancel" style="display: none; margin-left:10px;">cancel</span>',
			mSticky:
				'<div id="mSticky"> <span id="mStickyInterior"></span> <span id="mStickyRightClick" class=""><span class="overlayEdit stx-btn" style="display:none"><span>&nbsp;</span></span> <span id="overlayTrashCan" class="stx-btn" style="display:none"><span>&nbsp;</span></span> <span id="mouseDeleteInstructions"><span>(</span><span id="mouseDeleteText">right-click to delete</span><span id="mouseManageText">right-click to manage</span><span>)</span></span></span></div>',
			crossX: h5h,
			crossY: '<div class="stx_crosshair stx_crosshair_y" style="display: none;"></div>',
			chartControls:
				'<div class="stx_chart_controls" style="display: none; bottom: 22px;"><div id="chartSize"><span id="zoomOut" class="stx-zoom-out"></span><span id="zoomIn" class="stx-zoom-in"></span></div></div>',
			home: '<div id="home" class="stx_jump_today home" style="display:none"><span></span></div>',
			floatDate: '<div class="stx-float-date" style="visibility: hidden;"></div>',
			handleTemplate: t5h,
			iconsTemplate:
				'<div class="stx-panel-control"><div class="stx-panel-title"></div><div class="stx-btn-panel"><span class="stx-ico-up"></span></div><div class="stx-btn-panel"><span class="stx-ico-focus"></span></div><div class="stx-btn-panel"><span class="stx-ico-down"></span></div><div class="stx-btn-panel"><span class="stx-ico-edit"></span></div><div class="stx-btn-panel"><span class="stx-ico-close"></span></div></div>',
			baselineHandle: '<div class="stx-baseline-handle fa" style="display: none;"></div>',
		}
		i2t.ChartEngine.prototype.registerHTMLElements = function() {
			var w6t, f6t, Y5h, i6t, d5h, p6t, U6t, a5h, W6t, o6t
			w6t = this
			f6t = this.chart.container
			for (var L6t in i2t.ChartEngine.htmlControls) {
				Y5h = 'un'
				Y5h += 'd'
				Y5h += 'ef'
				Y5h += 'ined'
				if (typeof w6t.chart[L6t] == Y5h && typeof w6t.controls[L6t] == 'undefined') {
					if (!w6t.allowZoom && L6t == 'chartControls') {
						continue
					}
					m0w.B0w(5)
					i6t = w2t(
						m0w.W0w(441 == (3990, '161' * 1) ? (3157 > 965.04 ? (!!{}, 0x170f) : !{}) : '#', L6t),
						f6t,
					)
					if (i6t) {
						w6t.chart[L6t] = i6t
						w6t.controls[L6t] = i6t
					} else {
						d5h = 'D'
						d5h += 'I'
						d5h += 'V'
						p6t = i2t.ChartEngine.htmlControls[L6t]
						U6t = document.createElement(d5h)
						U6t.innerHTML = p6t
						i6t = U6t.firstChild
						f6t.appendChild(i6t)
						w6t.chart[L6t] = i6t
						w6t.controls[L6t] = i6t
						i6t.id = L6t
					}
				}
			}
			if (this.controls.chartControls) {
				a5h = '#zoo'
				a5h += 'mOu'
				a5h += 't'
				W6t = w2t('#zoomIn', this.controls.chartControls)
				o6t = w2t(a5h, this.controls.chartControls)
				i2t.safeClickTouch(
					W6t,
					(function(b6t) {
						return function(s6t) {
							b6t.zoomIn()
							m0w.L2t()
							s6t.stopPropagation()
						}
					})(this),
				)
				i2t.safeClickTouch(
					o6t,
					(function(t6t) {
						m0w.M2t()
						return function(T6t) {
							t6t.zoomOut()
							m0w.M2t()
							T6t.stopPropagation()
						}
					})(this),
				)
				if (!i2t.touchDevice) {
					W6t.onmouseover = (function(B6t) {
						m0w.M2t()
						return function(E6t) {
							B6t.modalBegin()
						}
					})(this)
					W6t.onmouseout = (function(A6t) {
						m0w.M2t()
						return function(I6t) {
							m0w.L2t()
							A6t.modalEnd()
						}
					})(this)
					o6t.onmouseover = (function(y6t) {
						return function(g6t) {
							m0w.M2t()
							y6t.modalBegin()
						}
					})(this)
					o6t.onmouseout = (function(c6t) {
						m0w.L2t()
						return function(z6t) {
							m0w.L2t()
							c6t.modalEnd()
						}
					})(this)
				}
			}
			if (this.controls.home) {
				i2t.safeClickTouch(
					this.controls.home,
					(function(e6t) {
						m0w.L2t()
						return function(d6t) {
							e6t.home({ animate: !!'1' })
							m0w.L2t()
							d6t.stopPropagation()
						}
					})(this),
				)
				if (!i2t.touchDevice) {
					this.controls.home.onmouseover = (function(a6t) {
						m0w.M2t()
						return function(C6t) {
							m0w.M2t()
							a6t.modalBegin()
						}
					})(this)
					this.controls.home.onmouseout = (function(V6t) {
						m0w.M2t()
						return function(n6t) {
							m0w.M2t()
							V6t.modalEnd()
						}
					})(this)
				}
			}
		}
		i2t.ChartEngine.prototype.cloneStyle = function(q6t) {
			var O6t, D6t, P6t, m6t, r6t, F6t, J6t, Z6t, M38, U38, e38
			function u6t(l6t) {
				m0w.M2t()
				return l6t[+'1'].toUpperCase()
			}
			O6t = {}
			D6t = !!0
			for (var G6t in q6t) {
				P6t = q6t[G6t]
				if (G6t == 'backgroundAttachment') {
					D6t = !![]
				}
				if (D6t) {
					if (P6t && P6t.constructor == String && isNaN(G6t)) {
						O6t[G6t] = P6t
					}
				} else if (!isNaN(G6t)) {
					m6t = q6t.getPropertyValue(P6t)
					if (m6t) {
						P6t = P6t.split(
							585.69 >= +'5150'
								? 653.35 > (+'4540', 206.8)
									? (380, 76.51) < (4530, 4010)
										? ('0x8ea' >> 1077091680, 994.8)
										: !1
									: (9.09e3, 5.23e3)
								: '-',
						)
						r6t = 0
						F6t = P6t.length
						J6t = P6t[0]
						while (++r6t < F6t) {
							m0w.B0w(6)
							var u6h = m0w.W0w(16, 17)
							J6t += P6t[r6t].charAt(0).toUpperCase() + P6t[r6t].slice(u6h)
						}
						O6t[J6t] = m6t
					}
				} else {
					Z6t = G6t.replace(i2t.camelCaseRegExp, u6t)
					O6t[Z6t] = P6t
				}
			}
			m0w.L2t()
			M38 = -1316688924
			U38 = -222980667
			m0w.a0w(7)
			e38 = m0w.W0w('2', 743072000)
			for (
				var s38 = 1;
				m0w.M68(s38.toString(), s38.toString().length, '42730' >> 853092608) !== M38;
				s38++
			) {
				return O6t
			}
			if (m0w.M68(e38.toString(), e38.toString().length, 36967) !== U38) {
				return O6t
			}
		}
		i2t.ChartEngine.prototype.canvasStyle = function(H6t) {
			var S6t, x6t, X6t
			S6t = this.styles[H6t]
			if (!S6t) {
				x6t = document.createElement('div')
				x6t.className = H6t
				this.container.appendChild(x6t)
				X6t = getComputedStyle(x6t)
				S6t = this.styles[H6t] = this.cloneStyle(X6t)
				this.container.removeChild(x6t)
				if (!X6t) {
					this.styles[H6t] = null
				}
			}
			return S6t
		}
		i2t.ChartEngine.prototype.colorOrStyle = function(N6t) {
			if (N6t.indexOf(+'5475' <= (1420, 2257) ? !!'' : '#') != -1) {
				return N6t
			}
			if (
				N6t.indexOf(
					2513 <= 114.53
						? (823.84, 2200) < (+'9730', 7159)
							? 2690 == 976.52
								? (0x166a, 7.4e3)
								: (1.7e3, '4.19e+3' >> 1965511776)
							: ('4.59e+3' | 4296, !'')
						: '(',
				) != -1
			) {
				return N6t
			}
			m0w.M2t()
			if (N6t == 'transparent') {
				return N6t
			}
			return this.canvasStyle(N6t)
		}
		i2t.ChartEngine.prototype.clearStyles = function() {
			m0w.L2t()
			this.styles = {}
		}
		i2t.ChartEngine.prototype.setStyle = function(k6t, v6t, Q6t) {
			if (!this.styles[k6t]) {
				this.canvasStyle(k6t)
			}
			if (!this.styles[k6t]) {
				this.styles[k6t] = {}
			}
			m0w.M2t()
			this.styles[k6t][i2t.makeCamelCase(v6t)] = Q6t
		}
		i2t.ChartEngine.prototype.canvasFont = function(R6t, h6t) {
			var Y6t, K6t, T5h
			if (!h6t) {
				h6t = this.chart.context
			}
			m0w.L2t()
			Y6t = this.canvasStyle(R6t)
			if (!Y6t) {
				return
			}
			m0w.a0w(4)
			var w6h = m0w.W0w(12, 2, 379)
			m0w.B0w(6)
			var h6h = m0w.W0w(113490, 122220)
			m0w.a0w(6)
			var t6h = m0w.W0w(21640, 27050)
			m0w.a0w(8)
			var a6h = m0w.u0w(11, 3657, 7321, 3670, 18)
			m0w.a0w(9)
			var T6h = m0w.W0w(99, 1191, 3, 695)
			m0w.a0w(10)
			var N6h = m0w.u0w(454, 5)
			K6t =
				Y6t.fontStyle +
				(w6h > +'6114' ? h6h : '980.79' - 0 >= t6h ? !!{} : ' ') +
				Y6t.fontWeight +
				((+'1690', 262.7) === +'1120'
					? (+'423.53', 1050) > (a6h, T6h)
						? !{}
						: (N6h, +'799.07')
					: ' ') +
				Y6t.fontSize +
				((14.3, 3890) <= 501.06 ? !!{} : ' ') +
				Y6t.fontFamily
			if (K6t.indexOf('undefined') == -1) {
				h6t.font = K6t
			} else {
				T5h = 'bad css '
				T5h += 'style for class '
				this.styles[R6t] = null
				m0w.B0w(5)
				console.log(m0w.W0w(T5h, R6t))
			}
		}
		i2t.ChartEngine.prototype.canvasColor = function(w9t, j9t) {
			var L9t, M9t, i9t
			if (!j9t) {
				j9t = this.chart.context
			}
			L9t = this.canvasStyle(w9t)
			if (!L9t) {
				return
			}
			M9t = L9t.color
			if (i2t.isTransparent(M9t)) {
				M9t = this.defaultColor
			}
			j9t.globalAlpha = 1
			j9t.fillStyle = M9t
			j9t.strokeStyle = M9t
			i9t = L9t.opacity
			if (typeof i9t != 'undefined') {
				j9t.globalAlpha = i9t
			}
		}
		i2t.ChartEngine.prototype.getCanvasFontSize = function(f9t) {
			var o9t, W9t, N5h
			o9t = this.canvasStyle(f9t)
			W9t = o9t.fontSize
			if (!W9t) {
				N5h = '1'
				N5h += '2'
				W9t = N5h
			}
			return parseInt(i2t.stripPX(W9t))
		}
		i2t.ChartEngine.prototype.getCanvasColor = function(p9t) {
			var U9t
			U9t = this.canvasStyle(p9t)
			return U9t.color
		}
		i2t.ChartEngine.hideDates = function() {
			m0w.L2t()
			return !!''
		}
		i2t.ChartEngine.prototype.runPrepend = function(E9t, A9t, T9t) {
			var J5h, s9t, b9t, B9t
			J5h = 'pr'
			J5h += 'ep'
			J5h += 'end'
			m0w.L2t()
			m0w.a0w(5)
			s9t = m0w.W0w(J5h, E9t)
			b9t = this.hasOwnProperty(s9t) ? this[s9t] : []
			b9t = b9t.concat(i2t.ChartEngine.prototype[s9t] || [])
			if (!b9t.length) {
				return !{}
			}
			if (!T9t) {
				T9t = this
			}
			for (var t9t = 0; t9t < b9t.length; t9t++) {
				B9t = b9t[t9t].apply(T9t, A9t)
				if (B9t) {
					return B9t
				}
			}
			return !1
		}
		i2t.ChartEngine.prototype.runAppend = function(e9t, d9t, c9t) {
			var B5h, y9t, I9t, z9t
			B5h = 'a'
			B5h += 'ppe'
			B5h += 'nd'
			m0w.a0w(5)
			y9t = m0w.u0w(B5h, e9t)
			I9t = this.hasOwnProperty(y9t) ? this[y9t] : []
			I9t = I9t.concat(i2t.ChartEngine.prototype[y9t] || [])
			if (!I9t.length) {
				return ![]
			}
			if (!c9t) {
				c9t = this
			}
			for (var g9t = '0' * 1; g9t < I9t.length; g9t++) {
				z9t = I9t[g9t].apply(c9t, d9t)
				if (z9t) {
					return z9t
				}
			}
			return !1
		}
		i2t.ChartEngine.registerDrawingTool = function(a9t, C9t) {
			m0w.L2t()
			i2t.ChartEngine.drawingTools[a9t] = C9t
		}
		i2t.ChartEngine.prototype.createBlock = function(P9t, G9t, O9t, n9t, r9t, V9t) {
			if (!V9t) {
				V9t = this.chart.context
			}
			if (typeof n9t == 'undefined') {
				return
			}
			m0w.M2t()
			this.canvasColor(r9t, V9t)
			V9t.fillRect(P9t, O9t, G9t, n9t)
			V9t.globalAlpha = 1
		}
		i2t.ChartEngine.prototype.changeOccurred = function(D9t) {
			var J9t, g5h
			if (this.currentlyImporting) {
				return
			}
			if (this.changeCallback) {
				this.changeCallback(this, D9t)
			}
			J9t = {
				stx: this,
				symbol: this.chart.symbol,
				symbolObject: this.chart.symbolObject,
				layout: this.layout,
				drawings: this.drawingObjects,
			}
			if (D9t == 'layout') {
				this.dispatch('layout', J9t)
			} else if (D9t == 'vector') {
				g5h = 'd'
				g5h += 'ra'
				g5h += 'w'
				g5h += 'ing'
				this.dispatch(g5h, J9t)
			}
		}
		i2t.ChartEngine.prototype.setChartType = function(q9t) {
			var k78, u78, x78, j5h
			this.layout.chartType = q9t
			this.chart.defaultChartStyleConfig = { type: q9t }
			if (this.displayInitialized) {
				this.draw()
			}
			k78 = 357381995
			u78 = -1809653206
			x78 = 2
			for (
				var h78 = '1' >> 977397312;
				m0w.M68(h78.toString(), h78.toString().length, 63373) !== k78;
				h78++
			) {
				j5h = 'l'
				j5h += 'ay'
				j5h += 'out'
				m0w.M2t()
				this.changeOccurred(j5h)
				x78 += 2
			}
			if (m0w.U68(x78.toString(), x78.toString().length, 69174) !== u78) {
				m0w.M2t()
				this.changeOccurred('')
			}
		}
		i2t.ChartEngine.prototype.setAggregationType = function(m9t) {
			var I5h
			I5h = 'la'
			I5h += 'yo'
			I5h += 'ut'
			this.layout.aggregationType = m9t
			m0w.M2t()
			if (this.chart.canvas) {
				this.createDataSet()
				this.draw()
			}
			this.changeOccurred(I5h)
		}
		i2t.ChartEngine.prototype.setChartScale = function(Z9t) {
			m0w.L2t()
			if (!Z9t) {
				Z9t = 'linear'
			}
			this.layout.chartScale = Z9t
			if (this.chart.canvas) {
				this.draw()
			}
			this.changeOccurred('layout')
		}
		i2t.ChartEngine.prototype.setAdjusted = function(F9t) {
			var F5h
			F5h = 'layo'
			F5h += 'u'
			F5h += 't'
			this.layout.adj = F9t
			if (this.chart.canvas) {
				this.createDataSet()
				this.draw()
			}
			this.changeOccurred(F5h)
		}
		i2t.ChartEngine.prototype.setVolumeUnderlay = function(u9t) {
			var l5h
			l5h = 'l'
			l5h += 'a'
			l5h += 'you'
			l5h += 't'
			this.layout.volumeUnderlay = u9t
			if (this.chart.canvas) {
				this.draw()
			}
			this.changeOccurred(l5h)
		}
		i2t.ChartEngine.prototype.serializeDrawings = function() {
			var H9t, x9t
			H9t = this
			m0w.M2t()
			x9t = []
			for (var l9t = 0; l9t < this.drawingObjects.length; l9t++) {
				x9t.push(H9t.drawingObjects[l9t].serialize())
			}
			return x9t
		}
		i2t.ChartEngine.prototype.abortDrawings = function() {
			var X9t
			X9t = this
			m0w.M2t()
			for (var S9t = 0; S9t < this.drawingObjects.length; S9t++) {
				X9t.drawingObjects[S9t].abort(!0)
			}
			this.drawingObjects = []
		}
		i2t.ChartEngine.prototype.reconstructDrawings = function(R9t) {
			var Q9t, N9t, k9t, Y9t
			Q9t = this
			m0w.L2t()
			if (!i2t.Drawing) {
				return
			}
			for (var v9t = 0; v9t < R9t.length; v9t++) {
				N9t = R9t[v9t]
				if (N9t.name == 'fibonacci') {
					N9t.name = 'retracement'
				}
				k9t = i2t.ChartEngine.drawingTools[N9t.name]
				if (!k9t) {
					if (i2t.Drawing[N9t.name]) {
						k9t = i2t.Drawing[N9t.name]
						i2t.ChartEngine.registerDrawingTool(N9t.name, k9t)
					}
				}
				if (k9t) {
					Y9t = new k9t()
					Y9t.reconstruct(Q9t, N9t)
					Q9t.drawingObjects.push(Y9t)
				}
			}
		}
		i2t.ChartEngine.prototype.clearDrawings = function(K9t) {
			var h9t
			h9t = i2t.shallowClone(this.drawingObjects)
			m0w.L2t()
			this.abortDrawings()
			if (K9t) {
				this.undoStamps = []
			} else {
				this.undoStamp(h9t, i2t.shallowClone(this.drawingObjects))
			}
			this.changeOccurred('vector')
			this.createDataSet()
			this.cancelTouchSingleClick = !![]
			STX.clearCanvas(this.chart.tempCanvas, this)
			this.draw()
			if (this.controls.mSticky) {
				this.controls.mSticky.style.display = 'none'
				this.controls.mSticky.children[0].innerHTML = ''
			}
		}
		i2t.ChartEngine.prototype.createDrawing = function(M4t, L4t) {
			var j4t
			if (!i2t.Drawing) {
				return
			}
			j4t = new i2t.Drawing[M4t]()
			j4t.reconstruct(this, L4t)
			this.drawingObjects.push(j4t)
			this.draw()
			return j4t
		}
		i2t.ChartEngine.prototype.removeDrawing = function(W4t) {
			var i4t
			i4t = this
			for (var w4t = 0; w4t < this.drawingObjects.length; w4t++) {
				if (i4t.drawingObjects[w4t] == W4t) {
					m0w.B0w(11)
					i4t.drawingObjects.splice(w4t, m0w.u0w(1925291680, '1'))
					i4t.changeOccurred('vector')
					i4t.draw()
					return
				}
			}
		}
		i2t.ChartEngine.prototype.dateFromTick = function(U4t, o4t, B4t) {
			var f4t, p4t, s4t, b4t, t4t, T4t
			if (!o4t) {
				o4t = this.chart
			}
			f4t = o4t.dataSet.length
			b4t = 0
			T4t = !'1'
			if (f4t === 0) {
				o4t.dataSet[0] = {}
				o4t.dataSet[0].DT = new Date()
				f4t = o4t.dataSet.length
				T4t = !!'1'
			}
			if (U4t < +'0') {
				s4t = this.standardMarketIterator(o4t.dataSet[0].DT)
				while (b4t > U4t) {
					p4t = s4t.previous()
					b4t -= 1
				}
			} else if (U4t >= f4t) {
				s4t = this.standardMarketIterator(o4t.dataSet[f4t - 1].DT)
				while (f4t - 1 + b4t < U4t) {
					p4t = s4t.next()
					b4t += 1
				}
			} else {
				p4t = o4t.dataSet[U4t].DT
			}
			if (B4t) {
				t4t = new Date(p4t.getTime())
			} else {
				t4t = i2t.yyyymmddhhmm(p4t)
			}
			if (T4t) {
				delete o4t.dataSet[0].DT
			}
			return t4t
		}
		i2t.ChartEngine.prototype.calculateYAxisMargins = function(E4t) {
			E4t.zoom = E4t.initialMarginTop + E4t.initialMarginBottom
			m0w.M2t()
			E4t.scroll = (E4t.initialMarginTop - E4t.initialMarginBottom) / +'2'
			if (E4t.zoom > E4t.height) {
				m0w.B0w(12)
				E4t.zoom = m0w.W0w(0, '0')
				E4t.scroll = 0
			}
		}
		i2t.ChartEngine.prototype.home = function(I4t) {
			var A4t, z4t, g4t, c4t, e4t, a4t, C4t, d4t, y4t, n4t
			A4t = this
			m0w.a0w(1)
			this.swipe.amplitude = m0w.u0w('0', 0)
			this.grabbingScreen = !'1'
			if (i2t.ChartEngine.insideChart) {
				i2t.unappendClassName(this.container, 'stx-drag-chart')
			}
			if (typeof I4t != 'object') {
				I4t = { maintainWhitespace: I4t }
			}
			if (typeof I4t.maintainWhitespace == 'undefined') {
				I4t.maintainWhitespace = !!{}
			}
			this.cancelTouchSingleClick = !!'1'
			if (!this.chart.dataSet || !this.chart.dataSet.length) {
				this.draw()
				return
			}
			this.micropixels = +'0'
			z4t = Math.floor(this.chart.width / this.layout.candleWidth)
			for (var V4t in A4t.charts) {
				g4t = A4t.charts[V4t]
				if (I4t.chart && I4t.chart != g4t) {
					continue
				}
				c4t = 0
				if (I4t.maintainWhitespace && A4t.preferences.whitespace >= 0) {
					c4t = A4t.preferences.whitespace
				}
				if (I4t.whitespace || I4t.whitespace === 0) {
					c4t = I4t.whitespace
				}
				e4t = !i2t.ChartEngine.chartShowsHighs(A4t.layout.chartType)
				if (
					A4t.yaxisLabelStyle == 'roundRectArrow' &&
					!(e4t && A4t.extendLastTick && A4t.chart.yaxisPaddingRight !== 0)
				) {
					a4t = +'3'
					m0w.B0w(13)
					var B6h = m0w.W0w(254, 16, 16)
					C4t = A4t.getCanvasFontSize('stx_yaxis') + a4t * B6h
					m0w.a0w(10)
					d4t = m0w.W0w(0.66, C4t)
					if (d4t > c4t) {
						c4t = d4t
					}
				}
				m0w.B0w(5)
				y4t = Math.min(m0w.W0w(z4t, 1), g4t.dataSet.length)
				if (A4t.chart.allowScrollPast) {
					m0w.B0w(14)
					y4t = m0w.W0w('1', z4t)
				}
				m0w.a0w(15)
				var g6h = m0w.W0w(14, 1, 7)
				A4t.micropixels = A4t.chart.width - (y4t - g6h) * A4t.layout.candleWidth - c4t
				if (e4t) {
					A4t.micropixels += A4t.layout.candleWidth / +'2'
				}
				while (this.micropixels > this.layout.candleWidth) {
					y4t++
					A4t.micropixels -= A4t.layout.candleWidth
				}
				while (this.micropixels < this.layout.candleWidth * -1) {
					y4t--
					A4t.micropixels += A4t.layout.candleWidth
				}
				if (I4t.animate) {
					n4t = A4t
					A4t.scrollTo(
						g4t,
						y4t,
						(function(P4t, G4t, O4t) {
							return function() {
								P4t.calculateYAxisMargins(G4t.panel.yAxis)
								G4t.scroll = O4t
								P4t.draw()
							}
						})(n4t, g4t, y4t),
					)
				} else {
					g4t.scroll = y4t
					A4t.calculateYAxisMargins(g4t.panel.yAxis)
				}
			}
			this.draw()
		}
		i2t.ChartEngine.prototype.isHome = function() {
			m0w.L2t()
			m0w.a0w(16)
			var j6h = m0w.W0w(16, 2, 15, 14, 20)
			m0w.a0w(17)
			var I6h = m0w.W0w(16, 18, 3)
			return (
				(this.chart.scroll - j6h) * this.layout.candleWidth + this.micropixels <=
				this.chart.width + I6h
			)
		}
		i2t.ChartEngine.prototype.tickFromDate = function(l4t, r4t, F4t, k4t) {
			var y38, k38, u38, D4t, m4t, q4t, Z4t, x4t, S4t, u4t, X4t, N4t, H4t
			if (!r4t) {
				r4t = this.chart
			}
			if (!r4t.dataSet || !r4t.dataSet.length) {
				return 0
			}
			if (!F4t) {
				y38 = -1881481332
				k38 = -1484901907
				u38 = 2
				for (var w38 = 1; m0w.U68(w38.toString(), w38.toString().length, 84174) !== y38; w38++) {
					F4t = 7
					u38 += 2
				}
				if (m0w.U68(u38.toString(), u38.toString().length, '94908' * 1) !== k38) {
					F4t = 7
				}
				F4t = 0
			}
			m0w.M2t()
			if (!r4t) {
				r4t = this.chart
			}
			D4t = l4t.constructor == Date ? l4t : i2t.strToDateTime(l4t)
			if (!i2t.ChartEngine.isDailyInterval(this.layout.interval)) {
				D4t.setMinutes(D4t.getMinutes() + F4t)
			}
			m4t = D4t.getTime()
			q4t = r4t.tickCache[m4t]
			if (q4t || q4t === '0' >> 1441565216) {
				return q4t
			}
			Z4t = r4t.dataSet[0].DT
			x4t = r4t.dataSet[r4t.dataSet.length - 1].DT
			if (D4t >= Z4t && D4t <= x4t) {
				for (var J4t = 0; J4t < r4t.dataSet.length; J4t++) {
					S4t = r4t.dataSet[J4t].DT
					if (S4t.getTime() == D4t.getTime()) {
						r4t.tickCache[m4t] = J4t
						return J4t
					}
					if (S4t > D4t) {
						r4t.tickCache[m4t] = k4t ? J4t : J4t - 1
						return r4t.tickCache[m4t]
					}
				}
			}
			m0w.B0w(18)
			u4t = m0w.W0w(D4t, Z4t)
			X4t = u4t ? Z4t : x4t
			N4t = this.standardMarketIterator(X4t)
			H4t = N4t.futureTick({ end: D4t })
			q4t = u4t ? H4t * -1 : r4t.dataSet.length - 1 + H4t
			r4t.tickCache[m4t] = q4t
			return q4t
		}
		i2t.ChartEngine.XAxisLabel = function(v4t, Q4t, Y4t) {
			var h28, t28, Y28
			this.hz = v4t
			m0w.M2t()
			h28 = 227637476
			t28 = -760959510
			Y28 = 2
			for (
				var J28 = '1' >> 987899136;
				m0w.M68(J28.toString(), J28.toString().length, '89294' ^ 0) !== h28;
				J28++
			) {
				this.grid = Q4t
				Y28 += 2
			}
			if (m0w.M68(Y28.toString(), Y28.toString().length, 65830) !== t28) {
				this.grid = Q4t
			}
			this.grid = Q4t
			this.text = Y4t
		}
		i2t.ChartEngine.prototype.createXAxis = function(h4t) {
			var K4t, R4t, j7t, j38, I38, F38
			if (h4t.dataSegment.length <= 0) {
				return null
			}
			if (i2t.ChartEngine.hideDates()) {
				return null
			}
			K4t = [h4t]
			R4t = this.runPrepend('createXAxis', K4t)
			if (R4t) {
				return R4t
			}
			j7t = this.layout.interval
			R4t = this.createTickXAxisWithDates(h4t)
			j38 = 595420153
			I38 = 195470769
			F38 = 2
			for (
				var m38 = 1;
				m0w.U68(m38.toString(), m38.toString().length, '48831' ^ 0) !== j38;
				m38++
			) {
				this.runAppend('createXAxis', K4t)
				F38 += 2
			}
			if (m0w.U68(F38.toString(), F38.toString().length, 3904) !== I38) {
				this.runAppend('', K4t)
			}
			return R4t
		}
		i2t.ChartEngine.prototype.adjustYAxisHeightOffset = function(L7t, M7t) {
			var m5h
			m5h = 'c'
			m5h += 'h'
			m5h += 'art'
			M7t.bottomOffset = 0
			if (!this.xaxisHeight && this.xaxisHeight !== +'0') {
				m0w.a0w(17)
				var F6h = m0w.u0w(1627453036, 7, 27)
				this.xaxisHeight = this.getCanvasFontSize('stx_xaxis') + ('4' << F6h)
				if (this.chart.xAxis.displayBorder || this.axisBorders) {
					this.xaxisHeight += +'3'
				}
			}
			if (this.xAxisAsFooter === !0 && L7t.bottom > this.chart.canvasHeight - this.xaxisHeight) {
				M7t.bottomOffset = this.xaxisHeight
			} else if (this.xAxisAsFooter !== !'' && L7t.name == m5h) {
				M7t.bottomOffset = this.xaxisHeight
			}
			M7t.bottom = L7t.bottom - M7t.bottomOffset
		}
		i2t.ChartEngine.prototype.plotYAxisGrid = function(w7t) {
			var M5h, i7t
			M5h = 'plotYAxi'
			M5h += 's'
			M5h += 'Gri'
			M5h += 'd'
			if (this.runPrepend('plotYAxisGrid', arguments)) {
				return
			}
			i7t = this.chart.context
			m0w.M2t()
			w7t.yAxis.yAxisPlotter.draw(i7t, 'grid')
			this.runAppend(M5h, arguments)
		}
		i2t.ChartEngine.prototype.plotYAxisText = function(b7t) {
			var U5h, o7t, p7t, O5h, f7t, W7t, e5h, s7t
			U5h = 'plotYAxisT'
			U5h += 'ext'
			o7t = this
			if (this.runPrepend(U5h, arguments)) {
				return
			}
			p7t = b7t.yaxisLHS.concat(b7t.yaxisRHS)
			m0w.L2t()
			for (var U7t = 0; U7t < p7t.length; U7t++) {
				O5h = 'te'
				O5h += 'xt'
				f7t = p7t[U7t]
				if (!f7t.yAxisPlotter) {
					continue
				}
				if (f7t.noDraw) {
					continue
				}
				o7t.canvasFont('stx_yaxis')
				o7t.canvasColor('stx_yaxis')
				W7t = o7t.chart.context
				W7t.textBaseline = 'middle'
				if (f7t.justifyRight) {
					W7t.textAlign = 'right'
				} else {
					e5h = 'l'
					e5h += 'e'
					e5h += 'f'
					e5h += 't'
					W7t.textAlign = e5h
				}
				s7t = o7t.getCanvasFontSize('stx_yaxis')
				f7t.yAxisPlotter.draw(W7t, O5h)
				W7t.textBaseline = 'alphabetic'
				W7t.textAlign = 'left'
			}
			this.runAppend('plotYAxisText', arguments)
		}
		i2t.ChartEngine.prototype.formatYAxisPrice = function(T7t, A7t, g7t, y7t) {
			var s5h, B7t, t7t, E7t, I7t
			s5h = 'un'
			s5h += 'd'
			s5h += 'efine'
			s5h += 'd'
			if (T7t === null || typeof T7t == s5h || isNaN(T7t)) {
				return ''
			}
			B7t = y7t ? y7t : A7t.yAxis
			t7t = g7t
			if (!t7t && t7t !== 0) {
				t7t = B7t.printDecimalPlaces
			}
			if (!t7t && t7t !== 0) {
				if (B7t.priceTick < 0.01) {
					t7t = 4
				} else if (B7t.priceTick < 0.1) {
					t7t = 2
				} else if (B7t.priceTick < 1) {
					t7t = 1
				} else {
					m0w.a0w(6)
					t7t = m0w.W0w(0, '0')
				}
			}
			if (A7t.name != A7t.chart.name) {
				if (B7t.priceTick > 100) {
					return i2t.condenseInt(T7t)
				}
			}
			E7t = this.internationalizer
			if (E7t) {
				I7t = E7t.priceFormatters.length
				if (t7t >= I7t) {
					m0w.B0w(6)
					t7t = m0w.u0w(1, I7t)
				}
				T7t = E7t.priceFormatters[t7t].format(T7t)
			} else {
				T7t = T7t.toFixed(t7t)
			}
			return T7t
		}
		i2t.ChartEngine.prototype.padOutPrice = function(z7t, e7t) {
			var a7t, c7t, d7t, C7t
			if (z7t !== 0 && (!z7t || typeof z7t == 'undefined')) {
				return ''
			}
			if (!e7t && e7t !== 0) {
				e7t = z7t
			}
			m0w.B0w(5)
			a7t = m0w.W0w('', e7t)
			m0w.B0w(19)
			var m6h = m0w.u0w(48781, 2712, 20, 19)
			m0w.B0w(20)
			var e6h = m0w.u0w(12, 10, 12, 9)
			c7t =
				a7t.substring(a7t.indexOf(356.07 != (+'8471', m6h) ? '.' : 453.77 <= 770.2 ? 'E' : 2.38e3))
					.length -
				'1' * e6h
			if (e7t >= 1000) {
				c7t = Math.max(c7t, 0)
			} else if (e7t < 2) {
				c7t = Math.max(c7t, 4)
			} else {
				c7t = Math.max(c7t, 2)
			}
			d7t = this.internationalizer
			if (d7t) {
				C7t = d7t.priceFormatters.length
				if (c7t >= C7t) {
					m0w.B0w(6)
					c7t = m0w.W0w(1, C7t)
				}
				z7t = d7t.priceFormatters[c7t].format(z7t)
			} else {
				z7t = z7t.toFixed(c7t)
			}
			return z7t
		}
		i2t.ChartEngine.prototype.formatPrice = function(V7t, P7t) {
			var v5h, t78, Y78, d78, n7t, G7t, O7t, q78, o78, z78, S88, E88, C88
			v5h = 'unde'
			v5h += 'fin'
			v5h += 'e'
			v5h += 'd'
			if (V7t !== 0 && (!V7t || typeof V7t == v5h)) {
				return ''
			}
			if (!P7t) {
				P7t = this.currentPanel
			}
			if (!P7t) {
				t78 = -+'424539704'
				Y78 = +'191480929'
				d78 = 2
				for (var T78 = +'1'; m0w.U68(T78.toString(), T78.toString().length, 41942) !== t78; T78++) {
					P7t = this.chart.panel
					d78 += 2
				}
				if (m0w.M68(d78.toString(), d78.toString().length, 88433) !== Y78) {
					P7t = this.chart.panel
				}
			}
			if (!P7t) {
				return V7t
			}
			n7t = P7t.decimalPlaces
			if (!n7t && n7t !== 0) {
				n7t = P7t.chart.decimalPlaces
			}
			if (!n7t && n7t !== 0) {
				return V7t
			}
			G7t = this.internationalizer
			if (G7t) {
				O7t = G7t.priceFormatters.length
				if (n7t >= O7t) {
					m0w.a0w(21)
					n7t = m0w.W0w('1', 0, O7t)
				}
				q78 = 1778563002
				o78 = -1296800220
				z78 = 2
				for (var p78 = 1; m0w.U68(p78.toString(), p78.toString().length, +'36734') !== q78; p78++) {
					V7t = G7t.priceFormatters[n7t].format(V7t)
					z78 += 2
				}
				if (m0w.M68(z78.toString(), z78.toString().length, +'17560') !== o78) {
					V7t = G7t.priceFormatters[n7t].format(V7t)
				}
			} else {
				S88 = 112777633
				E88 = 1656128157
				C88 = 2
				for (var X88 = 1; m0w.M68(X88.toString(), X88.toString().length, 19260) !== S88; X88++) {
					V7t = V7t.toFixed(n7t)
					C88 += +'2'
				}
				if (m0w.U68(C88.toString(), C88.toString().length, 26193) !== E88) {
					V7t = V7t.toFixed(n7t)
				}
			}
			return V7t
		}
		i2t.ChartEngine.prototype.createCrosshairs = function() {
			if (this.runPrepend('createCrosshairs', arguments)) {
				return
			}
			if (this.controls.crossX.onmousedown) {
				return
			}
			this.controls.crossY.onmousedown = function(r7t) {
				if (!r7t) {
					r7t = event
				}
				if (r7t.preventDefault) {
					r7t.preventDefault()
				}
				return !!0
			}
			this.controls.crossX.onmousedown = function(D7t) {
				if (!D7t) {
					D7t = event
				}
				if (D7t.preventDefault) {
					D7t.preventDefault()
				}
				return ![]
			}
			m0w.L2t()
			this.runAppend('createCrosshairs', arguments)
		}
		i2t.ChartEngine.prototype.determineMinMax = function(N7t, v7t, Y7t, Q7t, k7t) {
			var q7t, m7t, X7t, S7t, u7t, F7t, Z7t, J7t
			q7t = Number.MAX_VALUE * -+'1'
			m7t = Number.MAX_VALUE
			X7t = !{}
			S7t = N7t.length
			if (k7t) {
				S7t = k7t
			}
			for (var H7t = '0' ^ 0; H7t < S7t; H7t++) {
				u7t = N7t[H7t]
				if (!u7t) {
					continue
				}
				if (!Q7t) {
					if (u7t.transform) {
						X7t = !!1
						u7t = u7t.transform
					} else if (X7t) {
						continue
					}
				}
				F7t = 0
				for (var x7t = 0; x7t < v7t.length; x7t++) {
					Z7t = u7t[v7t[x7t]]
					if (!Z7t) {
						continue
					}
					if (typeof Z7t == 'number') {
						Z7t = [Z7t]
					}
					for (var l7t = 0; l7t < Z7t.length; l7t++) {
						J7t = Z7t[l7t]
						if (J7t || J7t === 0) {
							if (Y7t) {
								F7t += J7t
								if (F7t > q7t) {
									q7t = F7t
								}
								if (F7t < m7t) {
									m7t = F7t
								}
							} else {
								if (J7t > q7t) {
									q7t = J7t
								}
								if (J7t < m7t) {
									m7t = J7t
								}
							}
						}
					}
				}
			}
			if (q7t == Number.MAX_VALUE * -('1' >> 2034403200)) {
				q7t = +'0'
			}
			if (m7t == Number.MAX_VALUE) {
				m7t = +'0'
			}
			return [m7t, q7t]
		}
		i2t.ChartEngine.prototype.calculateYAxisRange = function(K7t, R7t, h7t, M8t) {
			var w8t, j8t, L8t, W8t, U8t, o8t, f8t, i8t
			if (h7t == Number.MAX_VALUE) {
				h7t = 0
				M8t = 0
			}
			w8t = K7t.height
			j8t = null
			L8t = null
			this.adjustYAxisHeightOffset(K7t, R7t)
			R7t.top = K7t.top
			R7t.height = R7t.bottom - R7t.top
			W8t = Math.round(Math.abs(w8t / 5))
			if (w8t - Math.abs(R7t.scroll) < W8t) {
				m0w.B0w(22)
				var s6h = m0w.W0w(11, 11, 16, 6, 18)
				m0w.a0w(6)
				var v6h = m0w.W0w(18, 19)
				R7t.scroll = (w8t - W8t) * (R7t.scroll < 0 ? s6h : v6h)
			}
			U8t = (M8t - h7t) / R7t.height
			if (h7t || h7t === 0) {
				if (M8t - h7t === 0) {
					m0w.a0w(10)
					j8t = m0w.u0w(2, M8t)
					L8t = 0
				} else {
					if ((this.layout.semiLog || this.layout.chartScale == 'log') && j8t) {
						o8t = Math.log(h7t) / Math.LN10
						f8t = Math.log(M8t) / Math.LN10
						j8t = Math.pow(10, f8t)
						L8t = Math.pow(10, o8t)
					} else {
						j8t = M8t
						L8t = h7t
					}
				}
				R7t.high = j8t
				R7t.low = L8t
			}
			if (R7t.max || R7t.max === 0) {
				R7t.high = R7t.max
			}
			if (R7t.min || R7t.min === +'0') {
				R7t.low = R7t.min
			}
			R7t.shadow = R7t.high - R7t.low
			if (K7t.chart.name === K7t.name && K7t.yAxis === R7t) {
				i8t = this.layout.semiLog || this.layout.chartScale == 'log'
				if (K7t.chart.isComparison) {
					i8t = !{}
				}
				if (R7t.semiLog != i8t) {
					this.clearPixelCache()
					R7t.semiLog = i8t
				}
			}
		}
		i2t.ChartEngine.prototype.renderYAxis = function(B8t) {
			var t8t, b8t, s8t, p8t, E8t, A8t, I8t, T8t
			t8t = this
			if (this.runPrepend('renderYAxis', arguments)) {
				return
			}
			b8t = B8t.panel
			m0w.L2t()
			s8t = b8t.yaxisRHS.concat(b8t.yaxisLHS)
			for (p8t = +'0'; p8t < s8t.length; p8t++) {
				E8t = s8t[p8t]
				A8t = null
				I8t = null
				if (b8t.yAxis === E8t) {
					A8t = B8t.lowValue
					I8t = B8t.highValue
				}
				t8t.calculateYAxisRange(b8t, E8t, A8t, I8t)
			}
			T8t = {}
			for (p8t = 0; p8t < s8t.length; p8t++) {
				T8t.yAxis = s8t[p8t]
				t8t.createYAxis(b8t, T8t)
				t8t.drawYAxis(b8t, T8t)
			}
			this.runAppend('renderYAxis', arguments)
		}
		i2t.ChartEngine.prototype.initializeDisplay = function(y8t) {
			var z8t, V8t, g8t, e8t, C8t, q5h, c8t, a8t, o5h
			if (this.runPrepend('initializeDisplay', arguments)) {
				return
			}
			z8t = []
			for (var d8t in y8t.series) {
				if (y8t.series[d8t].parameters.shareYAxis) {
					z8t.push(d8t)
				}
			}
			V8t = y8t.panel = this.panels[y8t.name]
			e8t = null
			C8t = Math.floor((y8t.width - this.micropixels) / this.layout.candleWidth)
			if (y8t.scroll > y8t.maxTicks && y8t.maxTicks > C8t + 1) {
				e8t = y8t.dataSegment.length - 1
			}
			if (!i2t.ChartEngine.chartShowsHighs(this.layout.chartType)) {
				q5h = 'baseli'
				q5h += 'ne_delta'
				z8t.push('Close', 'iqPrevClose')
				g8t = this.determineMinMax(y8t.dataSegment, z8t, null, null, e8t)
				if (this.layout.chartType == q5h) {
					c8t = y8t.baseline.actualLevel
					if (y8t.transformFunc) {
						c8t = y8t.transformFunc(this, y8t, c8t)
					}
					a8t = Math.max(c8t - g8t[0], g8t[1] - c8t)
					if (this.repositioningBaseline) {
						g8t = [y8t.lowValue, y8t.highValue]
					} else {
						m0w.B0w(6)
						g8t[0] = m0w.W0w(a8t, c8t)
						m0w.a0w(2)
						g8t[m0w.u0w(2147483647, '1')] = m0w.W0w(c8t, a8t, m0w.a0w(5))
					}
				}
			} else {
				o5h = 'L'
				o5h += 'o'
				o5h += 'w'
				z8t.push('Close', 'High', o5h, 'iqPrevClose')
				g8t = this.determineMinMax(y8t.dataSegment, z8t, null, null, e8t)
			}
			y8t.lowValue = g8t[0]
			y8t.highValue = g8t[1]
			this.runAppend('initializeDisplay', arguments)
		}
		i2t.ChartEngine.prototype.computePosition = function(G8t, n8t) {
			var P8t
			m0w.L2t()
			if (typeof n8t == 'undefined') {
				n8t = 0
			}
			P8t = G8t * this.layout.candleWidth + n8t + this.micropixels
			return P8t
		}
		i2t.ChartEngine.prototype.computeColor = function(O8t, r8t) {
			var G5h, z5h
			G5h = 'stx_ca'
			G5h += 'nd'
			G5h += 'le_sha'
			G5h += 'dow'
			if (O8t < r8t) {
				z5h = 'stx_candle_u'
				z5h += 'p'
				return z5h
			}
			if (O8t > r8t) {
				return 'stx_candle_down'
			}
			m0w.M2t()
			return G5h
		}
		i2t.ChartEngine.prototype.computeLength = function(q8t, m8t) {
			var D8t, J8t
			D8t = this.pixelFromPrice(q8t)
			J8t = this.pixelFromPrice(m8t)
			m0w.M2t()
			m0w.B0w(6)
			return m0w.u0w(D8t, J8t)
		}
		i2t.ChartEngine.prototype.setSeriesRenderer = function(Z8t) {
			var F8t
			m0w.M2t()
			F8t = Z8t.params
			if (this.chart.seriesRenderers[Z8t.params.name]) {
				return this.chart.seriesRenderers[Z8t.params.name]
			}
			if (F8t.yAxis) {
				this.addYAxis(this.panels[F8t.panel], F8t.yAxis)
			}
			Z8t.stx = this
			this.chart.seriesRenderers[Z8t.params.name] = Z8t
			return Z8t
		}
		i2t.ChartEngine.prototype.setMarket = function(H8t, u8t) {
			var l8t
			l8t = this
			if (!u8t) {
				u8t = this.chart
			}
			u8t.market = new i2t.Market(H8t)
			for (var x8t in l8t.layout.marketSessions) {
				u8t.market.disableSession(x8t, l8t.layout.marketSessions[x8t])
			}
		}
		i2t.ChartEngine.prototype.setMarketFactory = function(S8t) {
			this.marketFactory = S8t
		}
		i2t.ChartEngine.prototype.removeSeriesRenderer = function(N8t) {
			var X8t, k8t, Q8t, Y8t
			X8t = this
			for (var v8t in X8t.chart.seriesRenderers) {
				if (N8t.params.name === X8t.chart.seriesRenderers[v8t].params.name) {
					k8t = X8t.chart.seriesRenderers[N8t.params.name]
					Q8t = k8t.params.yAxis
					Y8t = X8t.panels[k8t.params.panel]
					delete X8t.chart.seriesRenderers[N8t.params.name]
					X8t.deleteYAxisIfUnused(Y8t, Q8t)
					return
				}
			}
		}
		i2t.ChartEngine.prototype.getSeriesRenderer = function(R8t) {
			return this.chart.seriesRenderers[R8t]
		}
		m0w.L2t()
		i2t.ChartEngine.prototype.startClip = function(K8t, i5t) {
			var h8t, L5t, j5t, M5t
			if (!K8t) {
				K8t = 'chart'
			}
			h8t = this.panels[K8t]
			L5t = h8t.yAxis
			this.chart.context.save()
			m0w.M2t()
			this.chart.context.beginPath()
			j5t = h8t.left
			M5t = h8t.width
			if (i5t) {
				j5t = 0
				M5t = this.width
			}
			this.chart.context.rect(j5t, h8t.top, M5t, L5t.height)
			this.chart.context.clip()
		}
		i2t.ChartEngine.prototype.endClip = function() {
			m0w.M2t()
			this.chart.context.restore()
		}
		i2t.ChartEngine.prototype.drawLineChart = function(w5t, U5t, b5t) {
			var W5t, o5t, f5t, X48, Q48, n48, p5t
			W5t = this.chart.context
			o5t = this.canvasStyle(U5t)
			if (o5t.width && parseInt(o5t.width, 10) <= 25) {
				W5t.lineWidth = Math.max(1, i2t.stripPX(o5t.width))
			} else {
				W5t.lineWidth = 1
			}
			this.canvasColor(U5t)
			f5t = { skipProjections: !'' }
			if (w5t.chart.tension) {
				f5t.tension = w5t.chart.tension
			}
			if (w5t.chart.lastTickOffset) {
				X48 = 259984269
				Q48 = 1186832984
				n48 = 2
				for (var A48 = +'1'; m0w.M68(A48.toString(), A48.toString().length, 91398) !== X48; A48++) {
					f5t.lastTickOffset = w5t.chart.lastTickOffset
					n48 += 2
				}
				if (m0w.U68(n48.toString(), n48.toString().length, 4016) !== Q48) {
					f5t.lastTickOffset = w5t.chart.lastTickOffset
				}
			}
			p5t = this.plotLineChart(w5t, w5t.chart.dataSegment, 'Close', f5t, b5t)
			m0w.B0w(11)
			W5t.lineWidth = m0w.u0w(1785648448, '1')
			return p5t
		}
		i2t.ChartEngine.prototype.updateFloatHRLabel = function(s5t) {
			var B5t, c5t, y5t, p5h, I5t, t5t, T5t, E5t, g5t
			B5t = this
			c5t = s5t.yaxisLHS.concat(s5t.yaxisRHS)
			y5t = this.crossYActualPos ? this.crossYActualPos : this.cy
			if (this.floatCanvas.isDirty) {
				i2t.clearCanvas(this.floatCanvas, this)
			}
			if (this.controls.crossX.style.display == 'none') {
				return
			}
			if (this.controls.crossY) {
				p5h = 'roundR'
				p5h += 'e'
				p5h += 'ctAr'
				p5h += 'row'
				I5t = s5t.width
				if (this.yaxisLabelStyle == p5h) {
					I5t -= 7
				}
				this.controls.crossY.style.left = s5t.left + 'px'
				m0w.B0w(5)
				this.controls.crossY.style.width = m0w.W0w(I5t, 'px')
			}
			for (var A5t = 0; A5t < c5t.length; A5t++) {
				t5t = c5t[A5t]
				T5t = B5t.valueFromPixel(y5t, s5t, t5t)
				if (isNaN(T5t)) {
					continue
				}
				if ((s5t.min || s5t.min === '0' - 0) && T5t < s5t.min) {
					continue
				}
				if ((s5t.max || s5t.max === 0) && T5t > s5t.max) {
					continue
				}
				E5t = null
				if (t5t !== s5t.chart.yAxis) {
					E5t = 0
					if (t5t.shadow < 1000) {
						E5t = 2
					}
					if (t5t.shadow < 5) {
						E5t = 4
					}
					if (t5t.decimalPlaces || t5t.decimalPlaces === +'0') {
						E5t = t5t.decimalPlaces
					}
				}
				if (t5t.priceFormatter) {
					T5t = t5t.priceFormatter(B5t, s5t, T5t, t5t)
				} else {
					T5t = B5t.formatYAxisPrice(T5t, s5t, E5t, t5t)
				}
				g5t = B5t.canvasStyle('stx-float-price')
				B5t.createYAxisLabel(
					s5t,
					T5t,
					y5t,
					g5t.backgroundColor,
					g5t.color,
					B5t.floatCanvas.context,
					t5t,
				)
				B5t.floatCanvas.isDirty = !!'1'
			}
		}
		i2t.ChartEngine.prototype.headsUpHR = function() {
			var O5t, d5t, D5t, z5t, V5t, a5t, C5t, n5t, P5t, J5t, r5t, G5t, e5t
			if (this.runPrepend('headsUpHR', arguments)) {
				return
			}
			O5t = this.currentPanel
			if (!O5t) {
				return
			}
			d5t = O5t.chart
			this.updateFloatHRLabel(O5t)
			if (this.controls.floatDate && !i2t.ChartEngine.hideDates()) {
				D5t = this.barFromPixel(this.cx)
				z5t = d5t.xaxis[D5t]
				if (z5t && z5t.DT) {
					if (d5t.xAxis.formatter) {
						this.controls.floatDate.innerHTML = d5t.xAxis.formatter(z5t.DT)
					} else if (this.internationalizer) {
						V5t = this.internationalizer.monthDay.format(z5t.DT)
						if (!i2t.ChartEngine.isDailyInterval(this.layout.interval)) {
							m0w.a0w(5)
							var G6h = m0w.u0w(2179, 6)
							m0w.a0w(23)
							var p6h = m0w.u0w(20, 20)
							m0w.B0w(5)
							var L6h = m0w.u0w(342, 5468)
							m0w.B0w(24)
							var D6h = m0w.W0w(12, 2885, 4, 17)
							m0w.B0w(10)
							var r6h = m0w.W0w(3030, 3)
							m0w.a0w(13)
							var H6h = m0w.u0w(177238, 46236, 4)
							V5t +=
								(('6115' & 2147483647) !== (G6h, '679.27' * p6h)
									? (L6h, D6h) == 1480
										? (r6h, !0)
										: ' '
									: H6h) + this.internationalizer.hourMinute.format(z5t.DT)
						} else {
							if (this.layout.interval == 'month') {
								V5t = this.internationalizer.yearMonth.format(z5t.DT)
							} else {
								V5t = this.internationalizer.yearMonthDay.format(z5t.DT)
							}
						}
						this.controls.floatDate.innerHTML = V5t
					} else {
						m0w.a0w(25)
						var Z6h = m0w.u0w(7, 2, 97, 16)
						a5t = z5t.DT.getMonth() + Z6h
						if (a5t < 10) {
							m0w.B0w(5)
							a5t = m0w.u0w(563.92 > (7314, 542.23) ? '0' : (!0, 'R'), a5t)
						}
						C5t = z5t.DT.getDate()
						if (C5t < 10) {
							m0w.B0w(5)
							C5t = m0w.u0w('0', C5t)
						}
						n5t = z5t.DT.getHours()
						if (n5t < 10) {
							m0w.B0w(5)
							n5t = m0w.W0w(
								3639 >= +'4930'
									? (332.19, +'89.23') == 7670
										? 7.53e3
										: (4790, 279.12) != 6640
										? 'E'
										: ('M', 0x401)
									: '0',
								n5t,
							)
						}
						P5t = z5t.DT.getMinutes()
						if (P5t < '10' * 1) {
							m0w.a0w(5)
							P5t = m0w.u0w(5357 > (+'4319', 9694) ? !!0 : '0', P5t)
						}
						if (i2t.ChartEngine.isDailyInterval(this.layout.interval)) {
							if (this.layout.interval == 'month') {
								m0w.a0w(13)
								var E6h = m0w.u0w(22650, 5658, 5)
								this.controls.floatDate.innerHTML =
									a5t +
									(7760 != (469.43, 1280)
										? '-'
										: (545, '3494' | 3366) >= +'6740'
										? ('N', +'399.56')
										: E6h >= 509.04
										? 'E'
										: 'm') +
									z5t.DT.getFullYear()
							} else {
								m0w.a0w(26)
								var C6h = m0w.W0w(4, 4025, 12071, 575, 3)
								m0w.a0w(27)
								var V6h = m0w.W0w(32950, 16, 5, 8252, 11)
								m0w.a0w(28)
								var n6h = m0w.W0w(2, 5, 34352, 18, 304919)
								m0w.a0w(29)
								var A6h = m0w.u0w(6, 14, 17, 2527, 2545, 2542)
								m0w.B0w(30)
								var f6h = m0w.W0w(3943, 3, 2639, 10)
								m0w.a0w(6)
								var W6h = m0w.W0w(12, 3712)
								this.controls.floatDate.innerHTML =
									a5t +
									(C6h == (V6h, 5283) ? (n6h === (2780, A6h) ? f6h : W6h) : '-') +
									C5t +
									'-' +
									z5t.DT.getFullYear()
							}
						} else {
							m0w.B0w(31)
							this.controls.floatDate.innerHTML = m0w.u0w(
								P5t,
								':',
								a5t,
								(+'1888', 985.24) <= (+'6570', 5190) ? ' ' : (412.83, 'G'),
								'/',
								n5t,
								C5t,
							)
							J5t =
								(d5t.xAxis.activeTimeUnit && d5t.xAxis.activeTimeUnit <= i2t.SECOND) ||
								this.layout.timeUnit == 'second'
							r5t =
								(d5t.xAxis.activeTimeUnit && d5t.xAxis.activeTimeUnit <= i2t.MILLISECOND) ||
								this.layout.timeUnit == 'millisecond'
							if (J5t || r5t) {
								G5t = z5t.DT.getSeconds()
								if (G5t < 10) {
									m0w.a0w(5)
									G5t = m0w.u0w(
										(999, 8275) > (824.44, 362.47)
											? (4020, 84) > (955.84, 2290)
												? 8.85e3
												: '0'
											: ('0x1429' * 1, 4.61e3),
										G5t,
									)
								}
								m0w.a0w(5)
								this.controls.floatDate.innerHTML += m0w.W0w(
									(279.22, '846.22' - 0) >= (5710, +'168.83')
										? (4520, 7140) >= (793.75, 863.37)
											? ':'
											: (+'9743', 9282) !== 9781
											? 'A'
											: (!0, 7.43e3)
										: (0xe42, ![]),
									G5t,
								)
								if (r5t) {
									e5t = z5t.DT.getMilliseconds()
									if (e5t < +'10') {
										m0w.a0w(5)
										e5t = m0w.u0w('0', e5t)
									}
									if (e5t < 100) {
										m0w.B0w(5)
										e5t = m0w.u0w(
											('397' >> 1590105408, 5270) < 647.04
												? 860.49
												: (1430, 263.38) >= 7030
												? 7.58e3
												: 7159 == (9950, 255)
												? 'N'
												: '0',
											e5t,
										)
									}
									m0w.B0w(5)
									this.controls.floatDate.innerHTML += m0w.W0w(
										+'388.16' >= 751.58
											? (1620, +'355.71') < (+'2610', 2249)
												? 4.78e3
												: ('1.10e+2' & 2147483647, ![])
											: ':',
										e5t,
									)
								}
							}
						}
					}
				} else if (z5t && z5t.index) {
					this.controls.floatDate.innerHTML = z5t.index
				} else {
					this.controls.floatDate.innerHTML = ''
				}
			}
			this.runAppend('headsUpHR', arguments)
		}
		i2t.ChartEngine.prototype.setCrosshairColors = function() {
			m0w.M2t()
			return
		}
		i2t.ChartEngine.prototype.magnetize = function() {
			var c5h,
				P5h,
				D5h,
				L5h,
				v5t,
				u5t,
				Z5t,
				Z5h,
				F5t,
				l5t,
				x5t,
				k5t,
				m5t,
				H5h,
				r5h,
				X5t,
				N5t,
				S5t,
				Q5t,
				Y5t,
				q5t,
				R5t
			c5h = 'magn'
			c5h += 'etize'
			P5h = 'proje'
			P5h += 'ction'
			D5h = 'c'
			D5h += 'a'
			D5h += 'llo'
			D5h += 'ut'
			L5h = 'mag'
			L5h += 'ne'
			L5h += 'tiz'
			L5h += 'e'
			v5t = this
			this.magnetizedPrice = null
			if (this.runPrepend(L5h, arguments)) {
				return
			}
			u5t = this.currentVectorParameters.vectorType
			m0w.M2t()
			if ((u5t == 'annotation' || u5t == D5h) && i2t.ChartEngine.drawingLine) {
				return
			}
			if (u5t == P5h) {
				return
			}
			if (u5t == 'freeform') {
				return
			}
			Z5t = this.currentPanel
			if (Z5t.name == Z5t.chart.name) {
				Z5h = '#FFF'
				Z5h += 'F'
				Z5h += 'F'
				Z5h += 'F'
				F5t = Z5t.chart
				l5t = this.tickFromPixel(i2t.ChartEngine.crosshairX - this.left, F5t)
				if (l5t > F5t.dataSet.length) {
					return
				}
				x5t = F5t.dataSet[l5t]
				if (!x5t) {
					return
				}
				k5t = this.valueFromPixel(this.cy, Z5t)
				this.magnetizedPrice = x5t.Close
				m5t = this.layout.chartType
				if (
					m5t == 'bar' ||
					m5t == 'candle' ||
					m5t == 'colored_bar' ||
					m5t == 'hollow_candle' ||
					m5t == 'volume_candle'
				) {
					H5h = 'Lo'
					H5h += 'w'
					r5h = 'H'
					r5h += 'i'
					r5h += 'g'
					r5h += 'h'
					X5t = ['Open', r5h, H5h, 'Close']
					N5t = 1000000000
					for (var H5t = 0; H5t < X5t.length; H5t++) {
						S5t = x5t[X5t[H5t]]
						if (Math.abs(k5t - S5t) < N5t) {
							m0w.a0w(6)
							N5t = Math.abs(m0w.W0w(S5t, k5t))
							v5t.magnetizedPrice = S5t
						}
					}
				}
				Q5t = this.pixelFromTick(l5t, F5t)
				Y5t = this.pixelFromPrice(this.magnetizedPrice, this.currentPanel)
				q5t = this.chart.tempCanvas.context
				q5t.beginPath()
				q5t.lineWidth = 1
				m0w.a0w(24)
				var y3h = m0w.u0w(100, 72, 18, 18)
				R5t = Math.max(this.layout.candleWidth, y3h) / 2
				m0w.B0w(7)
				q5t.arc(Q5t, Y5t, R5t, m0w.W0w('0', 774316896), 2 * Math.PI, ![])
				q5t.fillStyle = Z5h
				q5t.strokeStyle = '#000000'
				q5t.fill()
				q5t.stroke()
				q5t.closePath()
			}
			this.runAppend(c5h, arguments)
		}
		i2t.ChartEngine.prototype.positionCrosshairsAtPointer = function() {
			var h5t, K5t
			if (!this.currentPanel) {
				return
			}
			if (this.runPrepend('positionCrosshairsAtPointer', arguments)) {
				return
			}
			h5t = this.currentPanel.chart
			K5t = this.container.getBoundingClientRect()
			this.top = K5t.top
			m0w.M2t()
			this.left = K5t.left
			this.right = this.left + this.width
			this.bottom = this.top + this.height
			this.cy = this.crossYActualPos = this.backOutY(i2t.ChartEngine.crosshairY)
			this.cx = this.backOutX(i2t.ChartEngine.crosshairX)
			this.crosshairTick = this.tickFromPixel(this.cx, h5t)
			this.controls.crossX.style.left = this.pixelFromTick(this.crosshairTick, h5t) - 0.5 + 'px'
			this.controls.crossY.style.top = this.crossYActualPos + 'px'
			this.runAppend('positionCrosshairsAtPointer', arguments)
		}
		i2t.ChartEngine.prototype.doDisplayCrosshairs = function() {
			var j17, w17, W17, b17
			if (this.runPrepend('doDisplayCrosshairs', arguments)) {
				return
			}
			if (this.displayInitialized) {
				j17 = this.currentVectorParameters.vectorType
				if (!this.layout.crosshair && (j17 === '' || !j17)) {
					this.undisplayCrosshairs()
				} else if (i2t.Drawing && i2t.Drawing[j17] && new i2t.Drawing[j17]().dragToDraw) {
					this.undisplayCrosshairs()
				} else {
					w17 = this.controls
					W17 = w17.crossX
					b17 = w17.crossY
					if (W17.style.display !== '') {
						W17.style.display = ''
						b17.style.display = ''
						if (this.preferences.magnet && j17) {
							i2t.unappendClassName(this.container, 'stx-crosshair-on')
						} else {
							i2t.appendClassName(this.container, 'stx-crosshair-on')
						}
					}
					if (w17.floatDate && !i2t.ChartEngine.hideDates()) {
						w17.floatDate.style.visibility = ''
						if (this.currentPanel) {
							this.updateFloatHRLabel(this.currentPanel)
						}
					}
				}
			}
			this.runAppend('doDisplayCrosshairs', arguments)
		}
		i2t.ChartEngine.prototype.undisplayCrosshairs = function() {
			var E5h, S5h, t17, B17, A17, b5h, E17
			E5h = 'un'
			E5h += 'displayCrosshairs'
			S5h = 'stx'
			S5h += '-crosshair-on'
			if (this.runPrepend('undisplayCrosshairs', arguments)) {
				return
			}
			t17 = this.controls
			B17 = t17.crossX
			A17 = t17.crossY
			if (B17) {
				if (B17.style.display != 'none') {
					B17.style.display = 'none'
					A17.style.display = 'none'
				}
			}
			if (this.displayInitialized && t17.floatDate) {
				b5h = 'hi'
				b5h += 'dde'
				b5h += 'n'
				t17.floatDate.style.visibility = b5h
			}
			m0w.L2t()
			i2t.unappendClassName(this.container, S5h)
			E17 = this.floatCanvas
			if (E17 && E17.isDirty) {
				i2t.clearCanvas(E17, this)
			}
			this.runAppend(E5h, arguments)
		}
		i2t.ChartEngine.prototype.modalBegin = function() {
			this.openDialog = 'modal'
			this.undisplayCrosshairs()
		}
		i2t.ChartEngine.prototype.modalEnd = function() {
			this.cancelTouchSingleClick = !''
			this.openDialog = ''
			this.doDisplayCrosshairs()
		}
		i2t.ChartEngine.prototype.updateChartAccessories = function() {
			var g17, y17, C5h, z17, e17, c17
			if (this.accessoryTimer !== null) {
				clearTimeout(this.accessoryTimer)
			}
			if (!i2t.ChartEngine.drawingLine && i2t.touchDevice) {
				if (new Date().getTime() - this.lastAccessoryUpdate < 100) {
					this.accessoryTimer = setTimeout(
						(function(a17) {
							return function() {
								m0w.L2t()
								a17.updateChartAccessories()
							}
						})(this),
						10,
					)
					return
				}
			}
			if (!this.chart.dataSet) {
				return
			}
			if (this.runPrepend('updateChartAccessories', arguments)) {
				return
			}
			this.positionCrosshairsAtPointer()
			this.accessoryTimer = null
			this.lastAccessoryUpdate = new Date().getTime()
			g17 = this.controls.floatDate
			if (g17) {
				y17 = this.currentPanel
				if (!y17) {
					y17 = this.chart.panel
				}
				if (y17) {
					C5h = 'p'
					C5h += 'x'
					z17 = y17.chart
					e17 = this.xAxisAsFooter === !![] ? '0' | 0 : this.chart.canvasHeight - y17.chart.bottom
					m0w.B0w(32)
					var u3h = m0w.W0w(14, 7, 13, 17, 151)
					c17 = this.pixelFromTick(this.crosshairTick, z17) - g17.offsetWidth / u3h - 0.5
					if (c17 < 0) {
						c17 = 0
					}
					m0w.a0w(5)
					g17.style.left = m0w.W0w(c17, C5h)
					m0w.a0w(5)
					g17.style.bottom = m0w.u0w(e17, 'px')
				}
			}
			this.headsUpHR()
			this.runAppend('updateChartAccessories', arguments)
		}
		i2t.ChartEngine.prototype.mousemove = function(V17) {
			var C17
			C17 = V17 ? V17 : event
			i2t.ChartEngine.crosshairX = C17.clientX
			m0w.L2t()
			i2t.ChartEngine.crosshairY = C17.clientY
			if (this.runPrepend('mousemove', arguments)) {
				return
			}
			if (!this.displayInitialized) {
				return
			}
			if (this.openDialog !== '') {
				return
			}
			this.mousemoveinner(C17.clientX, C17.clientY)
			this.runAppend('mousemove', arguments)
		}
		i2t.ChartEngine.prototype.setResizeTimer = function(n17) {
			this.resizeDetectMS = n17
			function P17(G17) {
				m0w.L2t()
				return function() {
					if (!G17.chart.canvas) {
						return
					}
					m0w.M2t()
					if (!i2t.isAndroid) {
						if (
							G17.chart.canvas.height !=
								Math.floor(G17.devicePixelRatio * G17.chart.container.clientHeight) ||
							G17.chart.canvas.width !=
								Math.floor(G17.devicePixelRatio * G17.chart.container.clientWidth)
						) {
							G17.resizeChart()
							return
						}
					}
				}
			}
			m0w.L2t()
			if (n17) {
				if (this.resizeTimeout) {
					window.clearInterval(this.resizeTimeout)
				}
				this.resizeTimeout = window.setInterval(P17(this), n17)
			} else {
				if (this.resizeTimeout) {
					window.clearInterval(this.resizeTimeout)
				}
				this.resizeTimeout = null
			}
		}
		i2t.ChartEngine.prototype.whichYAxis = function(q17, D17) {
			var V5h, Z17, O17
			V5h = 'u'
			V5h += 'nde'
			V5h += 'fi'
			V5h += 'ned'
			if (typeof D17 === V5h) {
				D17 = this.cx
			}
			m0w.M2t()
			if (q17) {
				Z17 = q17.yaxisLHS.concat(q17.yaxisRHS)
				for (var J17 = 0; J17 < Z17.length; J17++) {
					O17 = Z17[J17]
					if (O17.left <= D17 && O17.left + O17.width >= D17) {
						return O17
					}
				}
			}
			return this.chart.panel.yAxis
		}
		i2t.ChartEngine.prototype.findHighlights = function(c07, I07) {
			var u17,
				Q17,
				N17,
				w07,
				k17,
				M07,
				j07,
				f07,
				y07,
				v17,
				U07,
				W07,
				g07,
				H17,
				l17,
				x17,
				E07,
				L07,
				S17,
				T07,
				B07,
				Y17,
				i07,
				t07,
				X5h
			u17 = this
			Q17 = 10
			if (c07) {
				Q17 = 30
			}
			N17 = this.cy
			w07 = this.cx
			if (!this.currentPanel) {
				return
			}
			if (this.activeDrawing) {
				return
			}
			k17 = this.currentPanel.chart
			this.anyHighlighted = !1
			if (this.preferences.magnet && !this.activeDrawing) {
				i2t.clearCanvas(this.chart.tempCanvas, this)
			}
			M07 = !1
			j07 = null
			f07 = ['', '', !!'1', null, 'drawing']
			y07 = {
				x0: this.tickFromPixel(w07 - Q17, k17),
				x1: this.tickFromPixel(w07 + Q17, k17),
				y0: this.valueFromPixelUntransform(N17 - Q17, this.currentPanel),
				y1: this.valueFromPixelUntransform(N17 + Q17, this.currentPanel),
			}
			for (var o07 = 0; o07 < this.drawingObjects.length; o07++) {
				v17 = u17.drawingObjects[o07]
				if (v17.permanent) {
					continue
				}
				U07 = v17.highlighted
				W07 = v17.panelName == u17.currentPanel.name
				v17.repositioner = v17.intersected(u17.crosshairTick, u17.crosshairValue, y07)
				W07 = W07 && v17.repositioner
				if (!I07 && W07) {
					if (U07) {
						j07 = v17
					} else if (U07 != v17.highlight(!!{})) {
						if (!j07) {
							j07 = v17
						}
						M07 = !!{}
					}
					u17.anyHighlighted = !![]
				} else {
					if (U07 != v17.highlight(!!0)) {
						M07 = !!{}
					}
				}
			}
			g07 = !!0
			for (H17 in u17.overlays) {
				l17 = u17.overlays[H17]
				l17.prev = l17.highlight
				l17.highlight = !{}
			}
			for (H17 in k17.seriesRenderers) {
				E07 = k17.seriesRenderers[H17]
				for (var p07 = 0; p07 < E07.seriesParams.length; p07++) {
					x17 = E07.seriesParams[p07]
					x17.prev = x17.highlight
					x17.highlight = !'1'
				}
			}
			if (!I07) {
				L07 = this.barFromPixel(w07)
				if (L07 < k17.dataSegment.length) {
					for (H17 in u17.overlays) {
						l17 = u17.overlays[H17]
						if (l17.panel != u17.currentPanel.name) {
							continue
						}
						if (l17.study.isHighlighted === !{}) {
							continue
						} else if (typeof l17.study.isHighlighted == 'function') {
							if (l17.study.isHighlighted(u17, w07, N17)) {
								l17.highlight = !!'1'
								u17.anyHighlighted = !0
							}
							continue
						}
						T07 = k17.dataSegment[L07]
						if (!T07) {
							continue
						}
						for (var A07 in u17.overlays[H17].outputMap) {
							B07 = T07[A07]
							m0w.B0w(2)
							S17 = m0w.W0w(2147483647, '0')
							if (u17.currentPanel.name == k17.name) {
								S17 = u17.pixelFromPriceTransform(B07, u17.currentPanel)
							} else {
								S17 = u17.pixelFromPrice(B07, u17.currentPanel)
							}
							if (N17 - Q17 < S17 && N17 + Q17 > S17) {
								l17.highlight = !0
								u17.anyHighlighted = !![]
								break
							}
						}
						if (l17.highlight) {
							break
						}
					}
					for (H17 in k17.seriesRenderers) {
						Y17 = k17.seriesRenderers[H17]
						if (!Y17.params.highlightable) {
							continue
						}
						for (var b07 = 0; b07 < Y17.seriesParams.length; b07++) {
							x17 = Y17.seriesParams[b07]
							S17 = Y17.caches[x17.field] && Y17.caches[x17.field][L07]
							if (!S17 && S17 !== 0) {
								continue
							}
							if (N17 - Q17 < S17 && N17 + Q17 > S17) {
								x17.highlight = !!{}
								u17.anyHighlighted = !!1
							} else if ((Y17.params.subtype == 'step' || x17.type == 'step') && L07 > 0) {
								i07 = Y17.caches[x17.field] && Y17.caches[x17.field][L07 - 1]
								if (((i07 || i07 === 0) && N17 > S17 && N17 < i07) || (N17 < S17 && N17 > i07)) {
									x17.highlight = !![]
									u17.anyHighlighted = !!{}
								}
							}
						}
					}
				}
			}
			for (H17 in u17.overlays) {
				l17 = u17.overlays[H17]
				if (l17.highlight) {
					u17.anyHighlighted = !!'1'
					f07 = [
						l17.inputs.display ? l17.inputs.display : l17.name,
						null,
						null,
						l17.permanent,
						'study',
					]
					j07 = null
				}
				if (l17.prev != l17.highlight) {
					M07 = !![]
				}
			}
			for (H17 in k17.seriesRenderers) {
				t07 = k17.seriesRenderers[H17]
				if (!t07.params.highlightable) {
					continue
				}
				for (var s07 = 0; s07 < t07.seriesParams.length; s07++) {
					x17 = t07.seriesParams[s07]
					if (x17.highlight) {
						X5h = 'ser'
						X5h += 'i'
						X5h += 'es'
						u17.anyHighlighted = !0
						f07 = [x17.display, x17.color, !{}, x17.permanent, X5h]
						j07 = null
					}
					if (x17.prev != x17.highlight) {
						M07 = !!{}
					}
				}
			}
			if (M07) {
				this.draw()
				this.displaySticky.apply(this, f07)
				this.clearMeasure()
				if (j07) {
					j07.measure()
				}
			}
			m0w.M2t()
			if (!this.anyHighlighted) {
				this.setMeasure()
			}
		}
		i2t.ChartEngine.prototype.positionSticky = function(z07) {
			var e07, d07
			m0w.L2t()
			e07 = Math.max(this.cy - z07.offsetHeight - +'60', +'0')
			d07 = Math.min(
				this.chart.canvasWidth - (this.cx - +'50'),
				this.chart.canvasWidth - z07.offsetWidth,
			)
			m0w.B0w(5)
			z07.style.top = m0w.W0w(e07, 'px')
			m0w.a0w(5)
			z07.style.right = m0w.W0w(d07, 'px')
		}
		i2t.ChartEngine.prototype.displaySticky = function(G07, O07, r07, J07, D07) {
			var n5h, Q5h, C07, a07, P07, n07, V07, i5h, G88, p88, L88, f5h, A5h, R5h, W38, K38, y48, W5h
			n5h = '#mouseDelete'
			n5h += 'Instructions'
			Q5h = '#ov'
			Q5h += 'e'
			Q5h += 'rlayTras'
			Q5h += 'hCan'
			C07 = this.controls.mSticky
			if (!C07) {
				return
			}
			m0w.M2t()
			a07 = w2t('#mStickyInterior', C07)
			if (!a07) {
				return
			}
			P07 = w2t(Q5h, C07)
			n07 = w2t('.overlayEdit', C07)
			V07 = w2t(n5h, C07)
			if (!r07 && !G07) {
				i5h = 'n'
				i5h += 'o'
				i5h += 'ne'
				a07.innerHTML = ''
				C07.style.display = i5h
				if (i2t.touchDevice) {
					if (P07) {
						P07.style.display = 'none'
					}
					if (n07) {
						n07.style.display = 'none'
					}
				} else if (!i2t.touchDevice) {
					if (V07) {
						G88 = 758980480
						p88 = -1577717810
						L88 = 2
						for (
							var P88 = +'1';
							m0w.U68(P88.toString(), P88.toString().length, 74989) !== G88;
							P88++
						) {
							V07.style.display = ''
							L88 += 2
						}
						if (m0w.U68(L88.toString(), L88.toString().length, '50883' - 0) !== p88) {
							V07.style.display = 'none'
						}
					}
				}
			} else {
				f5h = 'inli'
				f5h += 'ne'
				f5h += '-block'
				if (!G07) {
					G07 = ''
				}
				if (r07 && !G07) {
					a07.style.backgroundColor = ''
					a07.style.color = ''
					a07.style.display = 'none'
				} else if (O07) {
					a07.style.backgroundColor = O07
					a07.style.color = i2t.chooseForegroundColor(O07)
					a07.style.display = 'inline-block'
				} else {
					A5h = 'inline'
					A5h += '-'
					A5h += 'block'
					a07.style.backgroundColor = ''
					a07.style.color = ''
					a07.style.display = A5h
				}
				a07.innerHTML = G07
				if (D07) {
					m0w.B0w(5)
					w2t('#mStickyRightClick', C07).className = m0w.W0w('rightclick_', D07)
				}
				C07.style.display = f5h
				this.positionSticky(C07)
				if (J07) {
					if (P07) {
						R5h = 'no'
						R5h += 'ne'
						P07.style.display = R5h
					}
					if (n07) {
						n07.style.display = 'none'
					}
					if (V07) {
						V07.style.display = 'none'
					}
				} else if (i2t.touchDevice) {
					if (P07) {
						W38 = -679873858
						K38 = 1976071512
						y48 = 2
						for (
							var u48 = 1;
							m0w.U68(u48.toString(), u48.toString().length, 38724) !== W38;
							u48++
						) {
							P07.style.display = ''
							y48 += +'2'
						}
						if (m0w.M68(y48.toString(), y48.toString().length, '64673' << 513118496) !== K38) {
							P07.style.display = 'inline-block'
						}
					}
					if (n07) {
						n07.style.display = 'inline-block'
					}
					if (V07) {
						V07.style.display = 'none'
					}
				} else if (!i2t.touchDevice) {
					if (V07) {
						W5h = 'b'
						W5h += 'l'
						W5h += 'ock'
						V07.style.display = W5h
					}
				}
			}
		}
		i2t.ChartEngine.prototype.setMeasure = function(F07, x07, N07, X07, S07) {
			var u9h, q07, Z07, K5h, y9h, l07, m07, u07, H07, k9h
			u9h = 'se'
			u9h += 'tM'
			u9h += 'ea'
			u9h += 'sure'
			if (this.runPrepend('setMeasure', arguments)) {
				return
			}
			q07 = f2t('mMeasure')
			Z07 = ''
			if (!F07) {
				K5h = 'me'
				K5h += 'asureUn'
				K5h += 'l'
				K5h += 'it'
				if (q07 && q07.className != K5h) {
					q07.className = 'measureUnlit'
				}
				if (!this.anyHighlighted && this.currentVectorParameters.vectorType === '') {
					this.clearMeasure()
				}
			} else {
				y9h = 'B'
				y9h += 'a'
				y9h += 'r'
				y9h += 's'
				l07 = Math.round(Math.abs(F07 - x07) * this.chart.roundit) / this.chart.roundit
				if (this.internationalizer) {
					Z07 += this.internationalizer.numbers.format(l07)
				} else {
					Z07 += l07
				}
				m0w.B0w(33)
				m07 = m0w.W0w(F07, x07, F07)
				if (Math.abs(m07) > 0.1) {
					m0w.a0w(10)
					m07 = Math.round(m0w.W0w(100, m07))
				} else if (Math.abs(m07) > 0.01) {
					m0w.B0w(34)
					var x3h = m0w.u0w(992, 20, 253, 250)
					m07 = Math.round(m07 * x3h) / +'10'
				} else {
					m0w.a0w(35)
					var w3h = m0w.W0w(9986, 9, 16, 80018)
					m0w.B0w(36)
					var h3h = m0w.u0w(14, 2, 116)
					m07 = Math.round(m07 * w3h) / h3h
				}
				if (this.internationalizer) {
					m0w.a0w(37)
					m07 = this.internationalizer.percent.format(m0w.u0w(m07, 100))
				} else {
					m0w.B0w(5)
					m07 = m0w.W0w(
						m07,
						287.85 > (3643, 9234)
							? (2.23e3, 0x1be0)
							: 1453 == 4842
							? (128, 7902) <= 881.94
								? 8.55e3
								: !!{}
							: '%',
					)
				}
				m0w.a0w(4)
				Z07 += m0w.W0w(m07, ')', ' (')
				m0w.a0w(6)
				u07 = Math.abs(m0w.u0w(N07, X07))
				u07 = Math.round(u07) + 1
				H07 = this.translateIf(y9h)
				m0w.B0w(38)
				Z07 += m0w.W0w(
					u07,
					H07,
					(2927, 1414) < '605.56' - 0 ? 0x25b0 : ' ',
					(9930, 9840) === (1090, +'626')
						? 'T'
						: 8580 >= (+'4731', 1820)
						? (9740, 999.22) == (3338, '479.62' - 0)
							? 'L'
							: ' '
						: (924.74, 'D'),
				)
				if (q07) {
					if (q07.className != 'measureLit') {
						q07.className = 'measureLit'
					}
					q07.innerHTML = Z07
				}
			}
			if (this.activeDrawing) {
				return
			}
			q07 = this.controls.mSticky
			if (q07) {
				if (S07) {
					k9h = 'inl'
					k9h += 'ine-'
					k9h += 'b'
					k9h += 'lock'
					q07.style.display = 'inline-block'
					q07.children[0].style.display = k9h
					if (F07) {
						q07.children[0].innerHTML = Z07
					}
					this.positionSticky(q07)
				} else {
					q07.style.display = 'none'
					q07.children[0].innerHTML = ''
				}
			}
			m0w.L2t()
			this.runAppend(u9h, arguments)
		}
		i2t.ChartEngine.prototype.clearMeasure = function() {
			var k07, x9h
			m0w.L2t()
			k07 = f2t('mMeasure')
			if (k07) {
				x9h = 'meas'
				x9h += 'ureUnl'
				x9h += 'i'
				x9h += 't'
				if (k07.className != x9h) {
					k07.className = 'measureUnlit'
				}
				k07.innerHTML = ''
			}
		}
		i2t.ChartEngine.prototype.drawTemporaryPanel = function() {
			var Q07, v07
			Q07 = Math.round(i2t.ChartEngine.resizingPanel.right - 3) + +'0.5'
			i2t.clearCanvas(this.chart.tempCanvas, this)
			v07 = i2t.ChartEngine.crosshairY - this.top
			m0w.L2t()
			this.plotLine(
				i2t.ChartEngine.resizingPanel.left,
				Q07,
				v07,
				v07,
				this.canvasStyle('stx_panel_drag'),
				'segment',
				this.chart.tempCanvas.context,
				!!'',
				{},
			)
			m0w.B0w(39)
			var Y3h = m0w.W0w(7, 15, 19, 16, 45)
			i2t.ChartEngine.resizingPanel.handle.style.top =
				v07 - i2t.ChartEngine.resizingPanel.handle.offsetHeight / Y3h + 'px'
		}
		i2t.ChartEngine.prototype.setTrashCan = function() {
			var Y07, w9h
			if (i2t.touchDevice) {
				Y07 = this.controls.mSticky
				if (Y07) {
					w9h = 'no'
					w9h += 'ne'
					Y07.style.display = 'inline-block'
					Y07.children[0].style.display = w9h
					Y07.children[1].style.display = 'inline-block'
					if (Y07.children[2]) {
						Y07.children['2' & 2147483647].style.display = 'none'
					}
					Y07.style.top = this.backOutY(i2t.ChartEngine.crosshairY) - +'60' + 'px'
					m0w.a0w(40)
					var d3h = m0w.W0w(207, 5, 2, 41, 50)
					Y07.style.right =
						this.chart.canvasWidth - (this.backOutX(i2t.ChartEngine.crosshairX) - d3h) + 'px'
				}
			}
		}
		i2t.ChartEngine.prototype.pixelFromBar = function(h07, K07) {
			var R07
			if (!K07) {
				K07 = this.chart
			}
			R07 = +'0'
			if (
				this.chart.dataSegment &&
				this.chart.dataSegment[h07] &&
				this.chart.dataSegment[h07].leftOffset
			) {
				R07 = this.chart.dataSegment[h07].leftOffset
			} else {
				R07 = (h07 + +'0.5') * this.layout.candleWidth
			}
			m0w.B0w(17)
			var a3h = m0w.W0w(14, 15, 2)
			R07 = K07.panel.left + Math.floor(R07 + this.micropixels) - a3h
			return R07
		}
		i2t.ChartEngine.prototype.barFromPixel = function(B37, p37) {
			var W37, b37, T37, i37, U37, w37, M37, L37, o37, f37, t37, s37, E37
			if (!p37) {
				p37 = this.chart
			}
			W37 = this.chart.dataSegment
			b37 = this.micropixels
			T37 = this.layout.candleWidth
			if (this.layout.chartType == 'volume_candle' && W37) {
				i37 = B37 - p37.panel.left - b37
				U37 = 2
				M37 = W37.length
				m0w.a0w(37)
				L37 = Math.round(m0w.W0w(M37, U37))
				m0w.a0w(37)
				var N3h = m0w.u0w(15, 15)
				m0w.B0w(41)
				var J3h = m0w.W0w(20, 12, 26, 20)
				t37 = W37[M37 - 1].leftOffset + W37[M37 - N3h].candleWidth / J3h
				if (i37 > t37) {
					return M37 + Math.floor((B37 - t37 - p37.panel.left - b37) / T37)
				} else {
					for (var j37 = 1; j37 < M37; j37++) {
						U37 *= 2
						w37 = W37[L37]
						if (!w37) {
							break
						}
						o37 = w37.leftOffset
						m0w.a0w(37)
						var B3h = m0w.u0w(18, 9)
						f37 = w37.candleWidth / B3h
						m0w.B0w(6)
						s37 = m0w.W0w(f37, o37)
						m0w.a0w(5)
						E37 = m0w.W0w(o37, f37)
						if (L37 === 0 || (i37 >= s37 && i37 < E37)) {
							break
						} else if (i37 < s37) {
							L37 -= Math.max(1, Math.round(M37 / U37))
						} else {
							L37 += Math.max(1, Math.round(M37 / U37))
						}
						L37 = Math.max(0, Math.min(M37 - ('1' >> 1367495744), L37))
					}
					if (!W37[L37]) {
						for (j37 = '0' * 1; j37 < M37; j37++) {
							w37 = W37[j37]
							if (!w37) {
								continue
							}
							o37 = w37.leftOffset
							m0w.a0w(42)
							var g3h = m0w.u0w(9, 772, 12, 14, 6)
							f37 = w37.candleWidth / g3h
							if (i37 < o37 - f37) {
								m0w.B0w(6)
								return Math.max(0, m0w.W0w(1, j37))
							} else if (i37 < o37 + f37) {
								return j37
							} else if (i37 >= o37 + f37) {
								m0w.a0w(5)
								return m0w.W0w(j37, 1)
							}
						}
					}
				}
				return L37
			} else {
				return Math.floor((B37 - p37.panel.left - b37) / T37)
			}
		}
		i2t.ChartEngine.prototype.tickFromPixel = function(y37, A37) {
			var m88, M88, U88, I37
			if (!A37) {
				A37 = this.chart
			}
			m88 = -663659699
			M88 = 1449243669
			U88 = +'2'
			for (
				var O88 = '1' >> 1344485408;
				m0w.M68(O88.toString(), O88.toString().length, 84167) !== m88;
				O88++
			) {
				I37 = (A37.dataSet.length % A37.scroll) % 3
				m0w.B0w(1)
				U88 += m0w.u0w('2', 0)
			}
			if (m0w.M68(U88.toString(), U88.toString().length, 89083) !== M88) {
				I37 = A37.dataSet.length - A37.scroll + +'1'
			}
			if (this.layout.chartType == 'volume_candle') {
				I37 += this.barFromPixel(y37, A37)
			} else {
				I37 += Math.floor((y37 - A37.panel.left - this.micropixels) / this.layout.candleWidth)
			}
			return I37
		}
		i2t.ChartEngine.prototype.pixelFromTick = function(C37, z37) {
			var e37, d37, G37, c37, V37, a37, O37, g37, P37, n37
			if (!z37) {
				z37 = this.chart
			}
			e37 = z37.dataSegment
			d37 = z37.dataSet
			G37 = this.micropixels
			c37 = e37 ? e37.length : 0
			V37 = z37.panel
			a37 = z37.scroll
			m0w.a0w(33)
			var I3h = m0w.u0w(5, 10, 5)
			O37 = C37 - d37.length + a37 - I3h
			g37 = c37 ? e37[O37] : null
			if (g37 && g37.leftOffset) {
				return V37.left + Math.floor(g37.leftOffset + G37) - 1
			} else {
				P37 = 0
				n37 = 0
				g37 = c37 ? e37[c37 - 1] : null
				if (g37 && g37.leftOffset) {
					if (c37 < C37 - d37.length + a37) {
						P37 = g37.leftOffset - g37.candleWidth / 2
						n37 = c37
					}
				}
				m0w.a0w(43)
				var m3h = m0w.W0w(14, 7, 274, 13)
				return (
					P37 +
					V37.left +
					Math.floor((C37 - n37 - d37.length + a37 - +'0.5') * this.layout.candleWidth + G37) -
					m3h
				)
			}
		}
		i2t.ChartEngine.prototype.pixelFromDate = function(D37, r37) {
			m0w.L2t()
			return this.pixelFromTick(this.tickFromDate(D37, r37), r37)
		}
		i2t.ChartEngine.prototype.priceFromPixel = function(q37, m37, F37) {
			var l37, J37, Z37, u37
			if (!m37) {
				m37 = this.chart.panel
			}
			l37 = m37.chart
			J37 = F37 ? F37 : m37.yAxis
			q37 = J37.bottom - q37
			if (!J37.multiplier) {
				return null
			}
			Z37 = J37.low + q37 / J37.multiplier
			if (J37.semiLog) {
				u37 = J37.logLow + (q37 * J37.logShadow) / J37.height
				m0w.a0w(2)
				Z37 = Math.pow(m0w.W0w(2147483647, '10'), u37)
			}
			return Z37
		}
		i2t.ChartEngine.prototype.valueFromPixel = function(H37, x37, X37) {
			var S37
			if (!x37) {
				x37 = this.whichPanel(H37)
			}
			S37 = this.priceFromPixel(H37, x37, X37)
			return S37
		}
		i2t.ChartEngine.prototype.valueFromPixelUntransform = function(v37, N37, Q37) {
			var k37
			if (!N37) {
				N37 = this.whichPanel(v37)
			}
			if (!N37) {
				if (v37 <= 0) {
					N37 = this.panels[i2t.first(this.panels)]
				} else {
					N37 = this.panels[i2t.last(this.panels)]
				}
			}
			k37 = this.priceFromPixel(v37, N37, Q37)
			if (N37.chart.untransformFunc && N37.name == N37.chart.name) {
				k37 = N37.chart.untransformFunc(this, N37.chart, k37)
			}
			return k37
		}
		i2t.ChartEngine.prototype.pixelFromPriceTransform = function(R37, Y37, h37) {
			if (Y37.chart.transformFunc) {
				R37 = Y37.chart.transformFunc(this, Y37.chart, R37, h37)
			}
			return this.pixelFromPrice(R37, Y37, h37)
		}
		i2t.ChartEngine.prototype.pixelFromPrice = function(i27, M27, w27) {
			var K37, j27, W27, o27, L27
			if (!M27) {
				M27 = this.chart.panel
			}
			K37 = w27 ? w27 : M27.yAxis
			j27 = (K37.high - i27) * K37.multiplier
			if (K37.semiLog) {
				m0w.B0w(12)
				W27 = Math.max(i27, m0w.u0w(0, '0'))
				o27 = Math.log(W27) / Math.LN10
				L27 = K37.height
				j27 = L27 - (L27 * (o27 - K37.logLow)) / K37.logShadow
			}
			j27 += K37.top
			return j27
		}
		i2t.ChartEngine.prototype.pixelFromValueAdjusted = function(f27, t27, p27, b27) {
			var U27, s27
			if (this.layout.adj || !this.charts[f27.name]) {
				return this.pixelFromPriceTransform(p27, f27, b27)
			}
			m0w.M2t()
			U27 = Math.round(t27)
			if (U27 > 0 && U27 < f27.chart.dataSet.length && (s27 = f27.chart.dataSet[U27].ratio)) {
				m0w.a0w(10)
				return this.pixelFromPriceTransform(m0w.u0w(s27, p27), f27, b27)
			}
			return this.pixelFromPriceTransform(p27, f27, b27)
		}
		i2t.ChartEngine.prototype.adjustIfNecessary = function(T27, I27, B27) {
			var E27, A27
			if (this.layout.adj) {
				return B27
			}
			if (!T27 || !this.charts[T27.name]) {
				return B27
			}
			E27 = Math.round(I27)
			m0w.M2t()
			if (E27 > 0 && E27 < T27.chart.dataSet.length && (A27 = T27.chart.dataSet[E27].ratio)) {
				m0w.a0w(37)
				return m0w.W0w(B27, A27)
			}
			return B27
		}
		i2t.ChartEngine.prototype.setTransform = function(y27, g27, c27) {
			y27.transformFunc = g27
			y27.untransformFunc = c27
		}
		i2t.ChartEngine.prototype.unsetTransform = function(z27) {
			delete z27.transformFunc
			delete z27.untransformFunc
			for (var e27 = 0; e27 < z27.dataSet.length; e27++) {
				z27.dataSet[e27].transform = null
			}
		}
		i2t.ChartEngine.prototype.undo = function() {
			var h9h
			if (this.runPrepend('undo', arguments)) {
				return
			}
			if (this.activeDrawing) {
				h9h = 'stx'
				h9h += '_cross'
				h9h += 'hair_drawin'
				h9h += 'g'
				this.activeDrawing.abort()
				this.activeDrawing = null
				i2t.clearCanvas(this.chart.tempCanvas, this)
				this.draw()
				i2t.swapClassName(this.controls.crossX, 'stx_crosshair', h9h)
				i2t.swapClassName(this.controls.crossY, 'stx_crosshair', 'stx_crosshair_drawing')
				i2t.ChartEngine.drawingLine = ![]
			}
			this.runAppend('undo', arguments)
		}
		i2t.ChartEngine.prototype.undoStamp = function(d27, a27) {
			var t9h
			t9h = 'undo'
			t9h += 'St'
			t9h += 'amp'
			this.undoStamps.push(d27)
			this.dispatch(t9h, { before: d27, after: a27 })
		}
		i2t.ChartEngine.prototype.undoLast = function() {
			if (this.activeDrawing) {
				this.undo()
			} else {
				if (this.undoStamps.length) {
					this.drawingObjects = this.undoStamps.pop()
					this.changeOccurred('vector')
					this.draw()
				}
			}
		}
		i2t.ChartEngine.prototype.addDrawing = function(V27) {
			var C27
			C27 = i2t.shallowClone(this.drawingObjects)
			this.drawingObjects.push(V27)
			this.undoStamp(C27, i2t.shallowClone(this.drawingObjects))
		}
		i2t.ChartEngine.prototype.connectTheDots = function(l27, O27, L67, n27, X27, G27) {
			var Y9h,
				Q27,
				Y27,
				M67,
				j67,
				K78,
				y88,
				k88,
				P27,
				d9h,
				q27,
				D27,
				R27,
				N27,
				F27,
				u27,
				H27,
				S27,
				r27,
				x27,
				Z27,
				K27,
				h27,
				k27,
				v27
			Y9h = 'ob'
			Y9h += 'j'
			Y9h += 'ec'
			Y9h += 't'
			m0w.L2t()
			if (!G27) {
				G27 = {}
			}
			if (G27.pattern == 'none') {
				return
			}
			if (X27 === !!{}) {
				X27 = this.chart.panel
			}
			if (n27 === null || typeof n27 == 'undefined') {
				n27 = this.chart.context
			}
			if (l27.length < 4) {
				return
			}
			Q27 = +'0'
			Y27 = this.chart.canvasHeight
			M67 = 0
			j67 = this.chart.width
			if (X27) {
				Y27 = X27.yAxis.bottom
				Q27 = X27.yAxis.top
			}
			n27.lineWidth = 1.1
			if (typeof O27 == Y9h) {
				n27.strokeStyle = O27.color
				if (O27.opacity) {
					m0w.a0w(1)
					K78 = m0w.W0w('322707092', 0)
					y88 = -1568438673
					k88 = +'2'
					for (var x88 = 1; m0w.U68(x88.toString(), x88.toString().length, 61479) !== K78; x88++) {
						n27.globalAlpha = O27.opacity
						k88 += 2
					}
					if (m0w.M68(k88.toString(), k88.toString().length, 1577) !== y88) {
						n27.globalAlpha = O27.opacity
					}
				} else {
					n27.globalAlpha = 1
				}
				n27.lineWidth = parseInt(i2t.stripPX(O27.width))
			} else {
				if (!O27 || O27 == 'auto' || i2t.isTransparent(O27)) {
					n27.strokeStyle = this.defaultColor
				} else {
					n27.strokeStyle = O27
				}
			}
			if (G27.opacity) {
				n27.globalAlpha = G27.opacity
			}
			if (G27.lineWidth) {
				n27.lineWidth = G27.lineWidth
			}
			P27 = null
			if (G27.pattern) {
				d9h = 'da'
				d9h += 'sh'
				d9h += 'ed'
				P27 = G27.pattern
				if (P27 == 'solid') {
					P27 = null
				} else if (P27 == 'dotted') {
					P27 = [n27.lineWidth, n27.lineWidth]
				} else if (P27 == d9h) {
					m0w.B0w(44)
					var M3h = m0w.W0w(17, 27, 1, 5, 11)
					P27 = [n27.lineWidth * M3h, n27.lineWidth * ('5' & 2147483647)]
				}
			}
			n27.beginPath()
			for (var J27 = 0; J27 < l27.length - +'2'; J27 += '2' >> 670236576) {
				q27 = l27[J27]
				m0w.B0w(5)
				D27 = l27[m0w.W0w(J27, 1)]
				m0w.a0w(14)
				R27 = l27[m0w.u0w('2', J27)]
				m0w.a0w(14)
				N27 = l27[m0w.W0w('3', J27)]
				if (isNaN(q27) || isNaN(R27) || isNaN(D27) || isNaN(N27)) {
					return
				}
				F27 = 0.0
				u27 = 1.0
				m0w.a0w(6)
				H27 = m0w.W0w(q27, R27)
				m0w.a0w(6)
				S27 = m0w.u0w(D27, N27)
				for (var m27 = 0; m27 < 4; m27++) {
					if (m27 === 0) {
						r27 = -H27
						m0w.B0w(6)
						x27 = -m0w.u0w(q27, M67)
					}
					if (m27 == 1) {
						r27 = H27
						m0w.a0w(6)
						x27 = m0w.u0w(q27, j67)
					}
					if (m27 == 2) {
						r27 = -S27
						m0w.a0w(6)
						x27 = -m0w.W0w(D27, Q27)
					}
					if (m27 == '3' << 543897728) {
						r27 = S27
						m0w.a0w(6)
						x27 = m0w.W0w(D27, Y27)
					}
					m0w.B0w(37)
					Z27 = m0w.u0w(x27, r27)
					if ((N27 || N27 === 0) && r27 === 0 && x27 < 0) {
						return !!0
					}
					if (r27 < 0) {
						if (Z27 > u27) {
							return ![]
						} else if (Z27 > F27) {
							F27 = Z27
						}
					} else if (r27 > 0) {
						if (Z27 < F27) {
							return !!''
						} else if (Z27 < u27) {
							u27 = Z27
						}
					}
				}
				m0w.B0w(45)
				K27 = m0w.W0w(q27, F27, H27)
				m0w.B0w(45)
				h27 = m0w.W0w(D27, F27, S27)
				m0w.B0w(45)
				k27 = m0w.W0w(q27, u27, H27)
				m0w.a0w(45)
				v27 = m0w.W0w(D27, u27, S27)
				try {
					if (P27) {
						n27.dashedLineTo(K27, h27, k27, v27, P27)
					} else {
						n27.moveTo(K27, h27)
						n27.lineTo(k27, v27)
					}
				} catch (i67) {}
			}
			n27.stroke()
			n27.closePath()
			n27.globalAlpha = 1
			n27.lineWidth = 1
		}
		i2t.ChartEngine.prototype.plotSpline = function(U67, b67, o67, s67, w67, p67, f67) {
			var a9h, W67, T9h, o68, z68, G68
			a9h = 'n'
			a9h += 'one'
			if (!f67) {
				f67 = {}
			}
			if (f67.pattern == a9h) {
				return
			}
			if (p67 === !!'1') {
				p67 = this.chart.panel
			}
			if (w67 === null || typeof w67 == 'undefined') {
				w67 = this.chart.context
			}
			w67.save()
			w67.lineWidth = 1.1
			if (typeof o67 == 'object') {
				w67.strokeStyle = o67.color
				if (o67.opacity) {
					w67.globalAlpha = o67.opacity
				} else {
					w67.globalAlpha = 1
				}
				w67.lineWidth = parseInt(i2t.stripPX(o67.width))
			} else {
				if (!o67 || o67 == 'auto' || i2t.isTransparent(o67)) {
					w67.strokeStyle = this.defaultColor
				} else {
					w67.strokeStyle = o67
				}
			}
			if (f67.opacity) {
				w67.globalAlpha = f67.opacity
			}
			if (f67.lineWidth) {
				w67.lineWidth = f67.lineWidth
			}
			W67 = null
			if (f67.pattern) {
				T9h = 'd'
				T9h += 'a'
				T9h += 'sh'
				T9h += 'ed'
				o68 = -1994711609
				z68 = -1749776173
				G68 = 2
				for (var L68 = 1; m0w.U68(L68.toString(), L68.toString().length, 43116) !== o68; L68++) {
					W67 = f67.pattern
					G68 += 2
				}
				if (m0w.M68(G68.toString(), G68.toString().length, 99776) !== z68) {
					W67 = f67.pattern
				}
				if (W67 == 'solid') {
					W67 = null
				} else if (W67 == 'dotted') {
					W67 = [w67.lineWidth, w67.lineWidth]
				} else if (W67 == T9h) {
					m0w.B0w(17)
					var U3h = m0w.u0w(18, 14, 1)
					m0w.B0w(46)
					var e3h = m0w.W0w(143, 11, 75, 13, 15)
					W67 = [w67.lineWidth * U3h, w67.lineWidth * e3h]
				}
			}
			if (W67 && w67.setLineDash) {
				w67.setLineDash(W67)
				w67.lineDashOffset = 0
			}
			w67.beginPath()
			w67.moveTo(U67['0' * 1], U67[1])
			plotSpline(U67, b67, w67)
			w67.stroke()
			w67.closePath()
			w67.restore()
		}
		i2t.ChartEngine.prototype.drawingClick = function(B67, y67, g67) {
			var T67, t67, E67, A67, I67, B9h, J9h, N9h
			if (!i2t.Drawing) {
				return
			}
			if (!this.activeDrawing) {
				if (!B67) {
					return
				}
				T67 = this.currentVectorParameters.vectorType
				t67 = i2t.ChartEngine.drawingTools[T67]
				if (!t67) {
					if (i2t.Drawing[T67]) {
						t67 = i2t.Drawing[T67]
						i2t.ChartEngine.registerDrawingTool(T67, t67)
					}
				}
				if (t67) {
					this.activeDrawing = new t67()
					this.activeDrawing.construct(this, B67)
					if (!this.charts[B67.name]) {
						if (this.activeDrawing.chartsOnly) {
							this.activeDrawing = null
							return
						}
					}
				}
			}
			if (this.activeDrawing) {
				if (this.userPointerDown && !this.activeDrawing.dragToDraw) {
					if (!i2t.ChartEngine.drawingLine) {
						this.activeDrawing = null
					}
					return
				}
				E67 = this.tickFromPixel(y67, B67.chart)
				A67 = this.panels[this.activeDrawing.panelName]
				I67 = this.adjustIfNecessary(A67, E67, this.valueFromPixelUntransform(g67, A67))
				if (this.preferences.magnet && this.magnetizedPrice) {
					I67 = this.adjustIfNecessary(A67, E67, this.magnetizedPrice)
				}
				if (this.activeDrawing.click(this.chart.tempCanvas.context, E67, I67)) {
					if (this.activeDrawing) {
						B9h = 'stx_crosshair_draw'
						B9h += 'ing'
						J9h = 'stx_'
						J9h += 'cr'
						J9h += 'ossh'
						J9h += 'air'
						N9h = 'vec'
						N9h += 'tor'
						i2t.ChartEngine.drawingLine = !{}
						i2t.clearCanvas(this.chart.tempCanvas, this)
						this.addDrawing(this.activeDrawing)
						this.activeDrawing = null
						this.adjustDrawings()
						this.draw()
						this.changeOccurred(N9h)
						i2t.swapClassName(this.controls.crossX, J9h, 'stx_crosshair_drawing')
						i2t.swapClassName(this.controls.crossY, 'stx_crosshair', B9h)
					}
				} else {
					this.changeOccurred('drawing')
					i2t.ChartEngine.drawingLine = !0
					i2t.swapClassName(this.controls.crossX, 'stx_crosshair_drawing', 'stx_crosshair')
					i2t.swapClassName(this.controls.crossY, 'stx_crosshair_drawing', 'stx_crosshair')
				}
				return !!1
			}
			return !!''
		}
		i2t.ChartEngine.prototype.whichPanel = function(e67) {
			var z67, c67
			z67 = this
			for (var d67 in z67.panels) {
				c67 = z67.panels[d67]
				if (c67.hidden) {
					continue
				}
				if (e67 > c67.top && e67 < c67.bottom) {
					return c67
				}
			}
			return null
		}
		i2t.ChartEngine.prototype.mouseup = function(a67) {
			var n67, g9h, C67, V67
			if (this.runPrepend('mouseup', arguments)) {
				return
			}
			this.swipe.end = !''
			this.cancelLongHold = !![]
			m0w.M2t()
			if (this.repositioningDrawing) {
				if (!this.currentVectorParameters.vectorType || Date.now() - this.mouseTimer > 250) {
					this.changeOccurred('vector')
					i2t.clearCanvas(this.chart.tempCanvas, this)
					this.repositioningDrawing = null
					this.adjustDrawings()
					this.draw()
					return
				} else {
					this.repositioningDrawing = !{}
				}
			}
			if (this.repositioningBaseline) {
				this.repositioningBaseline = null
				m0w.a0w(47)
				var O3h = m0w.u0w(432051025, 7, 2, 11, 32835877887)
				this.chart.panel.yAxis.scroll =
					this.pixelFromPriceTransform(this.chart.baseline.userLevel, this.chart.panel) -
					(this.chart.panel.yAxis.top + this.chart.panel.yAxis.bottom) / ('2' >> O3h)
				this.draw()
				return
			}
			n67 = this.userPointerDown
			this.userPointerDown = !'1'
			if (!this.displayInitialized) {
				return
			}
			this.grabbingScreen = ![]
			if (this.openDialog !== '') {
				if (i2t.ChartEngine.insideChart) {
					i2t.unappendClassName(this.container, 'stx-drag-chart')
				}
				return
			}
			if (this.grabOverrideClick) {
				g9h = 's'
				g9h += 'tx-dra'
				g9h += 'g-chart'
				this.swipeRelease()
				i2t.unappendClassName(this.container, g9h)
				this.grabOverrideClick = !!''
				this.doDisplayCrosshairs()
				this.updateChartAccessories()
				return
			}
			if (i2t.ChartEngine.insideChart) {
				i2t.unappendClassName(this.container, 'stx-drag-chart')
			}
			if (i2t.ChartEngine.resizingPanel) {
				this.releaseHandle({})
				return
			}
			if (!a67) {
				a67 = event
			}
			if ((a67.which && a67.which >= 2) || (a67.button && a67.button >= 2) || a67.ctrlKey) {
				if (this.anyHighlighted && !this.bypassRightClick) {
					this.rightClickHighlighted()
					if (a67.preventDefault && this.captureTouchEvents) {
						a67.preventDefault()
					}
					a67.stopPropagation()
					return !!0
				} else {
					this.dispatch('rightClick', { stx: this, panel: this.currentPanel, x: V67, y: C67 })
					return !!{}
				}
			}
			if (a67.clientX < this.left || a67.clientX > this.right) {
				return
			}
			if (a67.clientY < this.top || a67.clientY > this.bottom) {
				return
			}
			C67 = this.backOutY(a67.clientY)
			V67 = this.backOutX(a67.clientX)
			if (n67 && (!this.longHoldTookEffect || this.activeDrawing)) {
				this.drawingClick(this.currentPanel, V67, C67)
			}
			if (!this.activeDrawing && !this.longHoldTookEffect) {
				this.dispatch('tap', { stx: this, panel: this.currentPanel, x: V67, y: C67 })
			}
			this.runAppend('mouseup', arguments)
		}
		i2t.ChartEngine.prototype.grabbingHand = function() {
			if (!this.allowScroll) {
				return
			}
			if (!this.grabbingScreen) {
				return
			}
			m0w.L2t()
			if (i2t.touchDevice) {
				return
			}
			i2t.appendClassName(this.container, 'stx-drag-chart')
		}
		i2t.ChartEngine.prototype.mousedown = function(P67) {
			var O67, G67, r67, q67, D67, Z67, F67, m67
			O67 = this
			if (this.runPrepend('mousedown', arguments)) {
				return
			}
			this.grabOverrideClick = !!''
			if (this.openDialog !== '') {
				return
			}
			if (!this.displayInitialized) {
				return
			}
			if (!this.displayCrosshairs) {
				return
			}
			if (!i2t.ChartEngine.insideChart) {
				return
			}
			if (this.manageTouchAndMouse && P67 && P67.preventDefault && this.captureTouchEvents) {
				P67.preventDefault()
			}
			this.mouseTimer = Date.now()
			this.longHoldTookEffect = !{}
			this.hasDragged = !'1'
			this.userPointerDown = !!{}
			if (!P67) {
				P67 = event
			}
			if ((P67.which && P67.which >= 2) || (P67.button && P67.button >= +'2')) {
				return
			}
			G67 = this.currentPanel.chart
			if (
				P67.clientX >= this.left &&
				P67.clientX < this.right &&
				P67.clientY >= this.top &&
				P67.clientY <= this.bottom
			) {
				if (this.repositioningDrawing) {
					return
				}
				for (var J67 = +'0'; J67 < this.drawingObjects.length; J67++) {
					r67 = O67.drawingObjects[J67]
					if (r67.highlighted) {
						if (O67.cloneDrawing) {
							q67 = i2t.ChartEngine.drawingTools[r67.name]
							D67 = new q67()
							D67.reconstruct(O67, r67.serialize())
							O67.drawingObjects.push(D67)
							O67.repositioningDrawing = D67
							D67.repositioner = r67.repositioner
							return
						}
						O67.repositioningDrawing = r67
						return
					}
				}
				if (
					(this.layout.chartType == 'baseline_delta' ||
						this.layout.chartType == 'baseline_delta_mountain') &&
					G67.baseline.userLevel !== ![]
				) {
					Z67 = this.valueFromPixelUntransform(this.cy - 5, this.currentPanel)
					F67 = this.valueFromPixelUntransform(this.cy + 5, this.currentPanel)
					m67 =
						this.chart.right - parseInt(getComputedStyle(this.controls.baselineHandle).width, 10)
					if (G67.baseline.actualLevel < Z67 && G67.baseline.actualLevel > F67 && this.cx > m67) {
						this.repositioningBaseline = { lastDraw: Date.now() }
						return
					}
				}
				this.drawingClick(this.currentPanel, this.cx, this.cy)
				if (this.activeDrawing && this.activeDrawing.dragToDraw) {
					return
				}
			}
			this.grabbingScreen = !!'1'
			G67.spanLock = !{}
			m0w.M2t()
			this.yToleranceBroken = !{}
			if (!P67) {
				P67 = event
			}
			this.grabStartX = P67.clientX
			this.grabStartY = P67.clientY
			this.grabStartMicropixels = this.micropixels
			this.grabStartScrollX = G67.scroll
			this.grabStartScrollY = G67.panel.yAxis.scroll
			this.grabStartCandleWidth = this.layout.candleWidth
			this.grabStartZoom = this.whichYAxis(this.currentPanel).zoom
			setTimeout(
				(function(u67) {
					return function() {
						u67.grabbingHand()
					}
				})(this),
				100,
			)
			this.swipeStart(G67)
			if (this.longHoldTime) {
				this.startLongHoldTimer()
			}
			this.runAppend('mousedown', arguments)
		}
		i2t.ChartEngine.prototype.startLongHoldTimer = function() {
			var l67
			l67 = this
			this.cancelLongHold = !!''
			if (this.longHoldTimeout) {
				clearTimeout(this.longHoldTimeout)
			}
			this.longHoldTimeout = setTimeout(function() {
				if (l67.cancelLongHold) {
					return
				}
				l67.dispatch('longhold', { stx: l67, panel: l67.currentPanel, x: l67.cx, y: l67.cy })
				l67.longHoldTookEffect = !!{}
			}, this.longHoldTime)
		}
		i2t.ChartEngine.prototype.changeVectorType = function(x67) {
			this.currentVectorParameters.vectorType = x67
			if (i2t.ChartEngine.drawingLine) {
				this.undo()
			}
			this.setCrosshairColors()
			if (i2t.ChartEngine.insideChart) {
				this.doDisplayCrosshairs()
			}
		}
		i2t.ChartEngine.prototype.rightClickOverlay = function(S67, X67) {
			var H67
			if (this.runPrepend('rightClickOverlay', arguments)) {
				return
			}
			m0w.L2t()
			H67 = this.overlays[S67]
			if (H67.editFunction) {
				H67.editFunction(X67)
			} else {
				this.removeOverlay(S67)
			}
			this.runAppend('rightClickOverlay', arguments)
		}
		i2t.ChartEngine.prototype.removeOverlay = function(k67) {
			var j9h, v67, Q67, N67, R67
			j9h = 'removeOve'
			j9h += 'rl'
			j9h += 'ay'
			v67 = this
			if (this.runPrepend(j9h, arguments)) {
				return
			}
			for (var Y67 in v67.overlays) {
				N67 = v67.overlays[Y67]
				if (N67.inputs.Field && N67.inputs.Field.indexOf(k67) != -1) {
					v67.removeOverlay(N67.name)
				} else if (N67.name == k67) {
					Q67 = N67
				}
			}
			if (i2t.Studies) {
				R67 = this.layout.studies[k67]
				i2t.deleteRHS(i2t.Studies.studyPanelMap, R67)
				if (Q67) {
					this.cleanupRemovedStudy(Q67)
				}
			}
			delete this.overlays[k67]
			m0w.L2t()
			this.displaySticky()
			this.createDataSet()
			this.changeOccurred('layout')
			this.runAppend('removeOverlay', arguments)
		}
		i2t.ChartEngine.prototype.addSeries = function(j97, h67, w97) {
			var I9h, K67, F9h, i97, M97, o97, f97, L97
			I9h = 'di'
			I9h += 'sp'
			I9h += 'la'
			I9h += 'y'
			if (this.runPrepend('addSeries', arguments)) {
				return
			}
			if (!h67) {
				h67 = {}
			}
			if (!h67.chartName) {
				h67.chartName = this.chart.name
			}
			if (!h67.symbolObject) {
				h67.symbolObject = { symbol: j97 }
			}
			K67 = { parameters: i2t.clone(h67), yValueCache: [], display: j97 }
			if (I9h in K67.parameters) {
				K67.display = K67.parameters.display
			}
			if (K67.parameters.isComparison) {
				K67.parameters.shareYAxis = !!{}
			}
			if (!K67.parameters.chartType && K67.parameters.color) {
				F9h = 'lin'
				F9h += 'e'
				K67.parameters.chartType = F9h
			}
			if (K67.parameters.chartType && K67.parameters.chartType != 'mountain') {
				K67.parameters.chartType = 'line'
			}
			function W97(T97) {
				var B97, t97, b97, s97, l9h, m9h
				m0w.a0w(12)
				B97 = m0w.u0w(0, '0')
				t97 = +'0'
				while (h67.data && B97 < T97.masterData.length && t97 < h67.data.length) {
					l9h = 'u'
					l9h += 'ndef'
					l9h += 'ined'
					b97 = h67.data[t97]
					s97 = T97.masterData[B97]
					if (!b97.DT || typeof b97.DT == l9h) {
						b97.DT = i2t.strToDateTime(b97.Date)
					} else {
						b97.DT = new Date(b97.DT)
					}
					if (b97.DT.getTime() == s97.DT.getTime()) {
						m9h = 'undef'
						m9h += 'ined'
						if (typeof b97.Value != 'undefined') {
							s97[j97] = b97.Value
						} else if (T97.layout.adj && typeof b97.Adj_Close != m9h) {
							s97[j97] = b97.Adj_Close
						} else {
							s97[j97] = b97.Close
						}
						t97++
						B97++
						continue
					}
					if (b97.DT < s97.DT) {
						if (h67.forceData) {
							T97.masterData.splice(B97, 0, { DT: b97.DT })
							continue
						}
						t97++
					} else {
						B97++
					}
				}
				m0w.M2t()
				if (h67.forceData && B97 >= T97.masterData.length) {
					while (h67.data && t97 < h67.data.length) {
						b97 = h67.data[t97]
						if (!b97.DT || typeof b97.DT == 'undefined') {
							b97.DT = i2t.strToDateTime(b97.Date)
						}
						s97 = { DT: b97.DT }
						if (typeof b97.Value != 'undefined') {
							s97[j97] = b97.Value
						} else if (T97.layout.adj && typeof b97.Adj_Close != 'undefined') {
							s97[j97] = b97.Adj_Close
						} else {
							s97[j97] = b97.Close
						}
						T97.masterData.push(s97)
						t97++
					}
				}
			}
			function p97(y97) {
				return function(g97) {
					var O9h, e9h
					O9h = 'add'
					O9h += 'S'
					O9h += 'erie'
					O9h += 's'
					if (!g97.error && g97.error !== '0' - 0) {
						h67.data = g97.quotes
						W97(M97)
						U97(M97, K67)
					}
					m0w.M2t()
					if (!M97.currentlyImporting) {
						e9h = 'a'
						e9h += 'd'
						e9h += 'd-series'
						M97.dispatch('symbolChange', {
							stx: M97,
							symbol: y97.symbol,
							symbolObject: y97.symbolObject,
							action: e9h,
						})
					}
					if (w97) {
						w97(g97.error, K67)
					}
					M97.runAppend(O9h, arguments)
				}
			}
			if (!K67.parameters.panel) {
				K67.parameters.panel = this.chart.panel.name
			}
			i97 = this.charts[h67.chartName]
			M97 = this
			if (i97) {
				i97.series[j97] = K67
			}
			function U97(I97, A97) {
				var M9h, E97, U9h
				if (A97.parameters.color) {
					M9h = '_g'
					M9h += 'eneric_series'
					E97 = I97.getSeriesRenderer(M9h)
					if (!E97) {
						U9h = '_generic_ser'
						U9h += 'ies'
						if (!i2t.Renderer.Lines) {
							alert('ChartIQ: stxLibrary.js is required')
						}
						E97 = I97.setSeriesRenderer(
							new i2t.Renderer.Lines({
								params: {
									panel: A97.parameters.panel,
									type: 'legacy',
									name: U9h,
									overChart: !!'1',
								},
							}),
						)
					}
					E97.attachSeries(j97, A97.parameters).ready()
				}
			}
			if (h67.isComparison) {
				M97.setComparison(!!1, i97)
			}
			o97 = !!0
			if (h67.data && !h67.data.useDefaultQuoteFeed) {
				if (this.masterData) {
					W97(this)
				}
			} else {
				if (this.masterData && this.chart.masterData[this.chart.masterData.length - 1][j97]) {
					K67.addSeriesData = W97
				} else if (this.quoteDriver) {
					f97 = this.quoteDriver
					L97 = f97.makeParams(j97, h67.symbolObject, this.chart)
					if (this.chart.masterData) {
						if (this.chart.masterData[0]) {
							L97.startDate = this.chart.masterData['0' - 0].DT
						}
						if (this.chart.masterData[this.chart.masterData.length - 1]) {
							L97.endDate = this.chart.masterData[this.chart.masterData.length - 1].DT
						}
					}
					o97 = !!{}
					if (L97.stx.isEquationChart(L97.symbol)) {
						i2t.fetchEquationChart(L97, p97(L97))
					} else {
						i2t.ChartEngine.Driver.fetchData(i2t.QuoteFeed.SERIES, f97.quoteFeed, L97, p97(L97))
					}
				}
			}
			m0w.L2t()
			if (!o97) {
				U97(M97, K67)
				if (w97) {
					w97(null, K67)
				}
				this.runAppend('addSeries', arguments)
			}
			return K67
		}
		i2t.ChartEngine.prototype.isEquationChart = function(c97) {
			if (!this.allowEquations || !i2t.computeEquationChart) {
				return ![]
			}
			if (
				c97 &&
				c97[0] == ((991.6, 9210) <= (8880, 5890) ? 47.01 : 7890 == (535, 4514) ? 'G' : '=')
			) {
				return !![]
			}
			return ![]
		}
		i2t.ChartEngine.prototype.deleteSeries = function(e97, z97) {
			var s88, v88, q88
			if (this.runPrepend('deleteSeries', arguments)) {
				return
			}
			if (!z97) {
				s88 = -1368103568
				v88 = -710703088
				q88 = 2
				for (var z88 = 1; m0w.U68(z88.toString(), z88.toString().length, 52550) !== s88; z88++) {
					z97 = this.chart
					q88 += 2
				}
				if (m0w.U68(q88.toString(), q88.toString().length, '63571' ^ 0) !== v88) {
					z97 = this.chart
				}
				z97 = this.chart
			}
			delete z97.series[e97]
			if (this.quoteDriver) {
				this.quoteDriver.updateSubscriptions()
			}
			this.runAppend('deleteSeries', arguments)
		}
		i2t.ChartEngine.prototype.removeSeries = function(a97, d97) {
			var s9h, G97, C97, n97, P97
			s9h = 're'
			s9h += 'moveSe'
			s9h += 'r'
			s9h += 'ies'
			if (this.runPrepend('removeSeries', arguments)) {
				return
			}
			if (!d97) {
				d97 = this.chart
			}
			for (var O97 in d97.seriesRenderers) {
				C97 = d97.seriesRenderers[O97]
				for (var V97 = C97.seriesParams.length - ('1' - 0); V97 >= 0; V97--) {
					n97 = C97.seriesParams[V97]
					if (!n97.permanent && n97.field === a97) {
						G97 = n97.symbolObject
						C97.removeSeries(a97)
					}
				}
			}
			this.deleteSeries(a97, d97)
			P97 = !'1'
			for (var r97 in d97.series) {
				if (d97.series[r97].parameters.isComparison) {
					P97 = !''
				}
			}
			if (!P97) {
				this.setComparison(!{}, d97)
			}
			this.createDataSet()
			this.draw()
			this.dispatch('symbolChange', {
				stx: this,
				symbol: a97,
				symbolObject: G97,
				action: 'remove-series',
			})
			this.runAppend(s9h, arguments)
		}
		i2t.ChartEngine.prototype.isDailyInterval = function(D97) {
			m0w.L2t()
			if (D97 == 'day') {
				return !''
			}
			if (D97 == 'week') {
				return !0
			}
			if (D97 == 'month') {
				return !!{}
			}
			return !!0
		}
		i2t.ChartEngine.prototype.setPeriodicityV2 = function(X97, H97, m97, F97) {
			var J97,
				f47,
				Z97,
				j47,
				w47,
				i47,
				Q97,
				v9h,
				L78,
				D78,
				P78,
				q9h,
				h97,
				q97,
				x97,
				k97,
				Y97,
				L47,
				l97,
				K97,
				M47,
				u97,
				v97,
				R97,
				W47,
				o47
			J97 = this
			if (this.runPrepend('setPeriodicityV2', arguments)) {
				return
			}
			if (typeof m97 === 'function') {
				F97 = m97
				m97 = null
			}
			f47 = !{}
			if (!H97) {
				return
			}
			if (!X97) {
				return
			}
			Z97 = this.layout
			j47 = Z97.candleWidth
			delete Z97.setSpan
			if (H97 == 'year') {
				H97 = 'month'
				if (!X97) {
					X97 = 1
				}
				m0w.B0w(48)
				X97 = m0w.u0w(X97, '12')
			}
			w47 = this.isDailyInterval(H97)
			i47 = this.isDailyInterval(Z97.interval)
			if (w47) {
				m97 = null
			} else if (H97 == 'tick') {
				m97 = null
			} else if (!m97) {
				m97 = 'minute'
			}
			Q97 = !'1'
			if (this.chart.symbol) {
				if (this.dontRoll || !i47) {
					if (Z97.interval != H97) {
						Q97 = !0
					}
				} else {
					if (w47 != i47) {
						Q97 = !0
					}
				}
				if (m97 != Z97.timeUnit) {
					Q97 = !!1
				}
			}
			Z97.periodicity = X97
			Z97.interval = H97
			Z97.timeUnit = m97
			if (Q97) {
				v9h = 'layou'
				v9h += 't'
				this.changeOccurred(v9h)
				if (this.quoteDriver) {
					for (var S97 in J97.charts) {
						if (J97.charts[S97].symbol) {
							if (J97.displayInitialized) {
								J97.quoteDriver.newChart(
									{
										symbol: J97.charts[S97].symbol,
										symbolObject: J97.charts[S97].symbolObject,
										chart: J97.charts[S97],
									},
									F97,
								)
							} else {
								J97.newChart(J97.charts[S97].symbol, null, J97.charts[S97], F97)
							}
						}
					}
					L78 = -1207473738
					D78 = -1456840183
					P78 = 2
					for (var H78 = 1; m0w.U68(H78.toString(), H78.toString().length, 24070) !== L78; H78++) {
						return
					}
					if (m0w.M68(P78.toString(), P78.toString().length, '65430' << 1672794368) !== D78) {
						return
					}
				} else if (this.dataCallback) {
					this.dataCallback()
					if (F97) {
						F97(null)
					}
					return
				} else {
					q9h = 'cannot change periodicity because neither dataCallback or '
					q9h += 'quoteDr'
					q9h += 'iver are set'
					console.log(q9h)
					return
				}
			}
			for (h97 in J97.charts) {
				q97 = J97.charts[h97]
				x97 = q97.dataSegment
				k97 = q97.dataSet
				Y97 = q97.maxTicks
				L47 = q97.scroll
				l97 = x97 ? x97.length : 0
				K97 = k97 ? k97.length : '0' >> 16614720
				u97 = Math.round(q97.maxTicks / +'2')
				J97.setCandleWidth(j47, q97)
				v97 = !!{}
				R97 = !'1'
				if (L47 <= Y97) {
					v97 = ![]
				} else if (x97 && !x97[u97]) {
					v97 = !1
					m0w.a0w(6)
					R97 = m0w.W0w(K97, L47)
				}
				if (v97 && l97 > 0) {
					if (Y97 < (Math.round(J97.chart.width / j47 - 0.499) - 1) / 2) {
						m0w.B0w(6)
						u97 = m0w.W0w(1, l97)
					}
					if (u97 >= l97) {
						M47 = x97[l97 - 1].DT
						m0w.a0w(6)
						u97 = m0w.W0w(1, l97)
					} else {
						M47 = x97[u97].DT
					}
				}
				J97.createDataSet()
				if (v97) {
					if (l97 > 0) {
						for (var N97 = K97 - 1; N97 >= 0; N97--) {
							W47 = k97[N97].DT
							if (W47.getTime() < M47.getTime()) {
								m0w.B0w(17)
								q97.scroll = m0w.u0w(K97, N97, u97)
								break
							}
						}
					}
				} else if (!R97) {
					o47 = Math.round(J97.preferences.whitespace / j47)
					m0w.a0w(6)
					q97.scroll = m0w.u0w(o47, Y97)
				} else {
					q97.scroll = k97.length + R97
				}
			}
			if (this.displayInitialized) {
				this.draw()
			}
			this.changeOccurred('layout')
			if (this.quoteDriver) {
				for (h97 in J97.charts) {
					q97 = J97.charts[h97]
					if (q97.symbol && q97.moreAvailable) {
						J97.quoteDriver.checkLoadMore(q97)
					}
				}
			}
			if (F97) {
				F97(null)
			}
			m0w.L2t()
			this.runAppend('setPeriodicityV2', arguments)
		}
		i2t.ChartEngine.prototype.drawVectors = function() {
			var b47, s47, p47, U47, t47, T47
			b47 = this
			if (this.vectorsShowing) {
				return
			}
			if (this.runPrepend('drawVectors', arguments)) {
				return
			}
			this.vectorsShowing = !![]
			if (!this.chart.hideDrawings) {
				s47 = {}
				for (U47 = 0; U47 < this.drawingObjects.length; U47++) {
					t47 = b47.drawingObjects[U47]
					p47 = t47.panelName
					if (!b47.panels[t47.panelName]) {
						continue
					}
					if (!s47[p47]) {
						s47[p47] = []
					}
					s47[p47].push(t47)
				}
				for (p47 in s47) {
					b47.startClip(p47)
					T47 = s47[p47]
					for (U47 = 0; U47 < T47.length; U47++) {
						T47[U47].render(b47.chart.context)
					}
					b47.endClip()
				}
			}
			m0w.L2t()
			this.runAppend('drawVectors', arguments)
		}
		i2t.ChartEngine.NONE = 0
		i2t.ChartEngine.CLOSEUP = 1
		m0w.B0w(10)
		i2t.ChartEngine.CLOSEDOWN = m0w.u0w(1, '2')
		i2t.ChartEngine.CLOSEEVEN = 4
		i2t.ChartEngine.CANDLEUP = 8
		m0w.a0w(6)
		i2t.ChartEngine.CANDLEDOWN = m0w.u0w(0, '16')
		i2t.ChartEngine.CANDLEEVEN = 32
		i2t.ChartEngine.prototype.displayChart = function(I47) {
			var u0h,
				n9h,
				c9h,
				r9h,
				L9h,
				p9h,
				z9h,
				o9h,
				c47,
				d47,
				e47,
				E47,
				A47,
				B47,
				m47,
				J47,
				D47,
				y47,
				g47,
				G9h,
				z48,
				G48,
				p48,
				D9h,
				P9h,
				Z9h,
				H9h,
				V68,
				X68,
				Q68,
				S47,
				N47,
				x47,
				b9h,
				C9h,
				E9h,
				S9h,
				N78,
				J78,
				B78,
				r47,
				O47,
				F47,
				Q9h,
				k47,
				u47,
				V9h,
				X9h,
				U78,
				e78,
				O78,
				i9h,
				y0h,
				K9h,
				G47,
				R9h,
				f9h,
				A9h,
				V47,
				C47,
				W9h,
				q47,
				k0h,
				Y0h,
				t0h,
				h0h,
				n47,
				w0h,
				x0h,
				Z47
			function z47(K47, Y47, j77, M77) {
				var v47, Q47, c68, b68, S68, h47, R47
				v47 = Y47.color
				if (j77) {
					v47 = Y47['border-left-color']
					if (!v47) {
						v47 = Y47.borderLeftColor
					}
					if (!v47) {
						return null
					}
				}
				if (!M77) {
					return v47
				}
				Q47 = K47.pixelFromPrice(B47.chart.highValue, B47)
				if (isNaN(Q47)) {
					m0w.B0w(12)
					c68 = m0w.u0w(17301520, '833159537')
					b68 = -1100330362
					S68 = 2
					for (var C68 = 1; m0w.U68(C68.toString(), C68.toString().length, 5511) !== c68; C68++) {
						Q47 = 0
						S68 += 2
					}
					if (m0w.U68(S68.toString(), S68.toString().length, +'27976') !== b68) {
						m0w.a0w(12)
						Q47 = m0w.W0w(0, '4')
					}
				}
				h47 = Y47.backgroundColor
				if (v47 && !i2t.isTransparent(v47)) {
					m0w.a0w(6)
					R47 = K47.chart.context.createLinearGradient(
						+'0',
						Q47,
						m0w.u0w(0, '0'),
						2 * B47.yAxis.bottom - Q47,
					)
					R47.addColorStop(0, v47)
					m0w.a0w(12)
					R47.addColorStop(m0w.W0w(0, '1'), h47)
					return R47
				} else {
					return h47
				}
			}
			u0h = 'baseline_delta_mo'
			u0h += 'untain'
			n9h = 'hi'
			n9h += 'sto'
			n9h += 'gr'
			n9h += 'am'
			c9h = 'b'
			c9h += 'ar'
			r9h = 'mount'
			r9h += 'a'
			r9h += 'i'
			r9h += 'n'
			L9h = 'n'
			L9h += 'o'
			L9h += 'n'
			L9h += 'e'
			p9h = 'pa'
			p9h += 'ndf'
			z9h = 'n'
			z9h += 'on'
			z9h += 'e'
			o9h = 'displa'
			o9h += 'yC'
			o9h += 'hart'
			c47 = this
			d47 = this.layout.candleWidth - I47.tmpWidth < ('2' & 2147483647) && I47.tmpWidth <= 3
			if (this.runPrepend(o9h, arguments)) {
				return
			}
			e47 = this.layout
			E47 = e47.chartType
			A47 = null
			B47 = I47.panel
			if (I47.customChart) {
				if (I47.customChart.chartType) {
					E47 = I47.customChart.chartType
				}
				if (I47.customChart.colorFunction) {
					A47 = I47.customChart.colorFunction
				}
			}
			this.controls.baselineHandle.style.display = z9h
			this.chart.baseLegendColors = []
			if (e47.aggregationType == 'kagi' && E47 != 'none') {
				G9h = 'stx'
				G9h += '_ka'
				G9h += 'gi_down'
				this.drawKagiSquareWave(B47, 'stx_kagi_up', 'stx_kagi_down')
				z48 = 228802117
				G48 = -299639931
				p48 = 2
				for (var D48 = 1; m0w.M68(D48.toString(), D48.toString().length, 25918) !== z48; D48++) {
					this.chart.baseLegendColors.push(this.getCanvasColor('stx_kagi_up'))
					p48 += 2
				}
				if (m0w.M68(p48.toString(), p48.toString().length, +'87551') !== G48) {
					this.chart.baseLegendColors.push(this.getCanvasColor(''))
				}
				this.chart.baseLegendColors.push(this.getCanvasColor(G9h))
			} else if (e47.aggregationType == p9h && E47 != L9h) {
				D9h = 'stx_pandf'
				D9h += '_up'
				this.drawPointFigureChart(B47, 'stx_pandf_up', 'X')
				this.chart.baseLegendColors.push(this.getCanvasColor(D9h))
				this.drawPointFigureChart(
					B47,
					'stx_pandf_down',
					5042 <= 98.19
						? (8.79e3, 722.49)
						: 244.11 == (9990, 2790)
						? !1
						: ('2880' | 0, 402) >= (6590, '1259' ^ 0)
						? ('m', 0x7c0)
						: 'O',
				)
				this.chart.baseLegendColors.push(this.getCanvasColor('stx_pandf_down'))
			} else if (E47 == 'line') {
				P9h = 's'
				P9h += 'tx_l'
				P9h += 'ine_chart'
				this.drawLineChart(B47, P9h)
			} else if (E47 == r9h) {
				this.startClip(B47.name)
				this.chart.baseLegendColors = null
				this.drawMountainChart(B47)
				this.endClip()
			} else if (E47 == 'colored_mountain') {
				Z9h = 'st'
				Z9h += 'x_li'
				Z9h += 'ne_dow'
				Z9h += 'n'
				H9h = 'stx_lin'
				H9h += 'e_'
				H9h += 'up'
				this.startClip(B47.name)
				m47 = this.getCanvasColor(H9h)
				J47 = this.getCanvasColor(Z9h)
				D47 = this.getCanvasColor('stx_line_chart')
				if (!A47) {
					A47 = function(i77, L77, w77) {
						if (L77.Close > L77.iqPrevClose) {
							return m47
						} else if (L77.Close < L77.iqPrevClose) {
							return J47
						} else {
							return D47
						}
						return null
					}
				}
				V68 = +'945340196'
				X68 = -+'295985863'
				Q68 = 2
				for (
					var i68 = '1' ^ 0;
					m0w.U68(i68.toString(), i68.toString().length, 83400) !== V68;
					i68++
				) {
					S47 = this.drawMountainChart(B47, '', A47)
					Q68 += +'2'
				}
				if (m0w.U68(Q68.toString(), Q68.toString().length, 57871) !== X68) {
					S47 = this.drawMountainChart(B47, '', A47)
				}
				S47 = this.drawMountainChart(B47, 'stx_colored_mountain_chart', A47)
				for (var X47 in S47) {
					c47.chart.baseLegendColors.push(X47)
				}
				this.endClip()
			} else if (E47 == 'wave') {
				this.drawWaveChart(B47)
			} else if (E47 == c9h) {
				this.startClip(B47.name)
				this.drawBarChartHighPerformance(B47, 'stx_bar_chart')
				this.endClip()
			} else if (E47 == 'colored_line') {
				this.startClip(B47.name)
				m47 = this.getCanvasColor('stx_line_up')
				J47 = this.getCanvasColor('stx_line_down')
				D47 = this.getCanvasColor('stx_line_chart')
				if (!A47) {
					A47 = function(o77, W77, f77) {
						m0w.M2t()
						if (W77.Close > W77.iqPrevClose) {
							return m47
						} else if (W77.Close < W77.iqPrevClose) {
							return J47
						} else {
							return D47
						}
						return null
					}
				}
				N47 = this.drawLineChart(B47, 'stx_line_chart', A47)
				for (var l47 in N47) {
					c47.chart.baseLegendColors.push(l47)
				}
				this.endClip()
			} else if (E47 == 'colored_bar') {
				this.startClip(B47.name)
				if (A47) {
					x47 = this.drawBarChart(B47, 'stx_bar_chart', A47)
					for (var H47 in x47) {
						c47.chart.baseLegendColors.push(H47)
					}
				} else {
					b9h = 'stx_'
					b9h += 'bar_do'
					b9h += 'wn'
					this.drawBarChartHighPerformance(B47, 'stx_bar_up', i2t.ChartEngine.CLOSEUP)
					this.drawBarChartHighPerformance(B47, 'stx_bar_down', i2t.ChartEngine.CLOSEDOWN)
					this.drawBarChartHighPerformance(B47, 'stx_bar_even', i2t.ChartEngine.CLOSEEVEN)
					this.chart.baseLegendColors.push(this.getCanvasColor('stx_bar_up'))
					this.chart.baseLegendColors.push(this.getCanvasColor(b9h))
				}
				this.endClip()
			} else if (E47 == 'hollow_candle' || E47 == 'volume_candle') {
				this.startClip(B47.name)
				if (A47) {
					if (!this.noWicksOnCandles[e47.aggregationType]) {
						this.drawShadows(B47, A47)
					}
					this.drawCandles(B47, A47, ![])
					this.drawCandles(B47, A47, !![])
				} else {
					C9h = 'trans'
					C9h += 'p'
					C9h += 'arent'
					E9h = 't'
					E9h += 'ra'
					E9h += 'nsparent'
					if (!this.noWicksOnCandles[e47.aggregationType]) {
						S9h = 'stx_hollow_can'
						S9h += 'dle_eve'
						S9h += 'n'
						this.drawShadowsHighPerformance(B47, 'stx_hollow_candle_up', i2t.ChartEngine.CLOSEUP)
						this.drawShadowsHighPerformance(
							B47,
							'stx_hollow_candle_down',
							i2t.ChartEngine.CLOSEDOWN,
						)
						N78 = -+'1119076746'
						J78 = -1693690658
						B78 = +'2'
						for (
							var j78 = 1;
							m0w.U68(j78.toString(), j78.toString().length, 34526) !== N78;
							j78++
						) {
							this.drawShadowsHighPerformance(B47, '', i2t.ChartEngine.CLOSEEVEN)
							B78 += 2
						}
						if (m0w.M68(B78.toString(), B78.toString().length, 96327) !== J78) {
							this.drawShadowsHighPerformance(B47, '', i2t.ChartEngine.CLOSEEVEN)
						}
						this.drawShadowsHighPerformance(B47, S9h, i2t.ChartEngine.CLOSEEVEN)
					}
					r47 = this.getCanvasColor('stx_hollow_candle_up')
					O47 = this.getCanvasColor('stx_hollow_candle_down')
					F47 = this.getCanvasColor('stx_hollow_candle_even')
					this.drawCandlesHighPerformance(
						B47,
						r47,
						E9h,
						i2t.ChartEngine.CLOSEUP | i2t.ChartEngine.CANDLEDOWN,
					)
					this.drawCandlesHighPerformance(
						B47,
						O47,
						'transparent',
						i2t.ChartEngine.CLOSEDOWN | i2t.ChartEngine.CANDLEDOWN,
					)
					this.drawCandlesHighPerformance(
						B47,
						F47,
						C9h,
						i2t.ChartEngine.CLOSEEVEN | i2t.ChartEngine.CANDLEDOWN,
					)
					this.drawCandlesHighPerformance(
						B47,
						this.containerColor,
						r47,
						i2t.ChartEngine.CLOSEUP | i2t.ChartEngine.CANDLEUP,
					)
					this.drawCandlesHighPerformance(
						B47,
						this.containerColor,
						O47,
						i2t.ChartEngine.CLOSEDOWN | i2t.ChartEngine.CANDLEUP,
					)
					this.drawCandlesHighPerformance(
						B47,
						this.containerColor,
						F47,
						i2t.ChartEngine.CLOSEEVEN | i2t.ChartEngine.CANDLEUP,
					)
					this.chart.baseLegendColors.push(r47)
					this.chart.baseLegendColors.push(O47)
				}
				this.endClip()
			} else if (E47 == 'candle') {
				this.startClip(B47.name)
				if (A47) {
					if (!this.noWicksOnCandles[e47.aggregationType]) {
						this.drawShadows(B47, A47)
					}
					this.drawCandles(B47, A47, !{})
					if (!d47) {
						this.drawCandles(B47, A47, !!{})
					}
				} else {
					Q9h = 'st'
					Q9h += 'x_candle_down'
					if (!this.noWicksOnCandles[e47.aggregationType]) {
						k47 = this.getCanvasColor('stx_candle_shadow_up')
						u47 = this.getCanvasColor('stx_candle_shadow_down')
						if (k47 != u47) {
							V9h = 'stx_candle_shad'
							V9h += 'ow_'
							V9h += 'u'
							V9h += 'p'
							this.drawShadowsHighPerformance(B47, V9h, i2t.ChartEngine.CANDLEUP)
							this.drawShadowsHighPerformance(
								B47,
								'stx_candle_shadow_down',
								i2t.ChartEngine.CANDLEDOWN,
							)
							this.drawShadowsHighPerformance(B47, 'stx_candle_shadow', i2t.ChartEngine.CANDLEEVEN)
						} else {
							X9h = 'stx'
							X9h += '_candle_'
							X9h += 'shadow'
							this.drawShadowsHighPerformance(B47, X9h)
						}
					}
					g47 = this.canvasStyle('stx_candle_up')
					this.drawCandlesHighPerformance(
						B47,
						z47(this, g47, !'1'),
						z47(this, g47, !d47),
						i2t.ChartEngine.CANDLEUP,
					)
					this.chart.baseLegendColors.push(g47.color)
					g47 = this.canvasStyle(Q9h)
					this.drawCandlesHighPerformance(
						B47,
						z47(this, g47, ![]),
						z47(this, g47, !d47),
						i2t.ChartEngine.CANDLEDOWN,
					)
					this.chart.baseLegendColors.push(g47.color)
				}
				this.endClip()
			} else if (E47 == n9h) {
				U78 = -1176924416
				e78 = -2032540905
				O78 = 2
				for (var v78 = 1; m0w.U68(v78.toString(), v78.toString().length, 12062) !== U78; v78++) {
					this.startClip(B47.name)
					O78 += 2
				}
				if (m0w.M68(O78.toString(), O78.toString().length, '23541' << 1617920512) !== e78) {
					this.startClip(B47.name)
				}
				if (A47) {
					this.drawCandles(B47, A47, !{}, !!{})
					if (!d47) {
						this.drawCandles(B47, A47, !![], !!{})
					}
				} else {
					g47 = this.canvasStyle('stx_histogram_up')
					this.drawCandlesHighPerformance(
						B47,
						z47(this, g47, !!0, !0),
						z47(this, g47, !d47, !![]),
						i2t.ChartEngine.CANDLEUP,
						!!{},
					)
					this.chart.baseLegendColors.push(g47.color)
					g47 = this.canvasStyle('stx_histogram_down')
					this.drawCandlesHighPerformance(
						B47,
						z47(this, g47, !{}, !![]),
						z47(this, g47, !d47, !0),
						i2t.ChartEngine.CANDLEDOWN,
						!!{},
					)
					this.chart.baseLegendColors.push(g47.color)
					g47 = this.canvasStyle('stx_histogram_even')
					this.drawCandlesHighPerformance(
						B47,
						z47(this, g47, ![], !''),
						z47(this, g47, !d47, !''),
						i2t.ChartEngine.CANDLEEVEN,
						!![],
					)
					this.chart.baseLegendColors.push(g47.color)
				}
				this.endClip()
			} else if (E47 == 'baseline_delta') {
				i9h = 'opac'
				i9h += 'i'
				i9h += 'ty'
				this.startClip(B47.name)
				this.setStyle('stx_baseline_trace', i9h, 0)
				this.drawLineChart(B47, 'stx_baseline_trace')
				y47 = I47.baseline.actualLevel
				if (y47 !== null) {
					y0h = 'so'
					y0h += 'lid'
					K9h = 'li'
					K9h += 'n'
					K9h += 'e'
					y47 = this.pixelFromPriceTransform(y47, I47.panel)
					G47 = { over: 'stx_baseline_up', under: 'stx_baseline_down' }
					for (var a47 in G47) {
						R9h = 'soli'
						R9h += 'd'
						f9h = 'o'
						f9h += 've'
						f9h += 'r'
						A9h = 'c'
						A9h += 'hart'
						V47 = {
							panelName: A9h,
							band: 'Close',
							threshold: I47.baseline.actualLevel,
							color: c47.getCanvasColor(G47[a47]),
							direction: a47 == f9h ? +'1' : -+'1',
							edgeHighlight: c47.getCanvasColor(G47[a47]),
							edgeParameters: {
								pattern: R9h,
								lineWidth: parseInt(c47.canvasStyle(G47[a47]).width, 10) + 0.1,
								opacity: 1,
							},
						}
						C47 = V47.color
						if (C47 && C47 != 'transparent') {
							W9h = 'o'
							W9h += 'v'
							W9h += 'er'
							q47 = I47.context.createLinearGradient(+'0', a47 == W9h ? 0 : 2 * y47, 0, y47)
							q47.addColorStop(0, i2t.hexToRgba(C47, 60))
							q47.addColorStop(1, i2t.hexToRgba(C47, 10))
							V47.color = q47
							V47.opacity = +'1'
						}
						i2t.preparePeakValleyFill(c47, I47.dataSegment, V47)
						c47.chart.baseLegendColors.push(C47)
					}
					this.plotLine(0, 1, y47, y47, this.containerColor, K9h, I47.context, !![], {
						pattern: y0h,
						lineWidth: '1.1',
						opacity: 1,
					})
					this.plotLine(
						0,
						1,
						y47,
						y47,
						this.getCanvasColor('stx_baseline'),
						'line',
						I47.context,
						!!{},
						{ pattern: 'dotted', lineWidth: '2.1', opacity: '0.5' * 1 },
					)
					if (this.chart.baseline.userLevel !== !{}) {
						k0h = 'p'
						k0h += 'x'
						m0w.B0w(33)
						var q3h = m0w.u0w(10, 18, 4)
						this.controls.baselineHandle.style.top =
							y47 - parseInt(getComputedStyle(this.controls.baselineHandle).height, 10) / q3h + k0h
						this.controls.baselineHandle.style.left =
							this.chart.right -
							parseInt(getComputedStyle(this.controls.baselineHandle).width, '10' | 8) +
							'px'
						this.controls.baselineHandle.style.display = 'block'
					}
				}
				this.endClip()
			} else if (E47 == u0h) {
				y47 = I47.baseline.actualLevel
				if (y47 !== null) {
					Y0h = '2'
					Y0h += '.'
					Y0h += '1'
					t0h = 'li'
					t0h += 'n'
					t0h += 'e'
					h0h = '1'
					h0h += '.'
					h0h += '1'
					this.startClip(B47.name)
					this.drawMountainChart(B47, 'stx_baseline_delta_mountain')
					this.endClip()
					this.startClip(B47.name)
					this.setStyle('stx_baseline_trace', 'opacity', 0)
					this.drawLineChart(B47, 'stx_baseline_trace')
					y47 = this.pixelFromPriceTransform(y47, I47.panel)
					n47 = { over: 'stx_baseline_up', under: 'stx_baseline_down' }
					for (var P47 in n47) {
						w0h = 'soli'
						w0h += 'd'
						x0h = 'ch'
						x0h += 'ar'
						x0h += 't'
						Z47 = {
							panelName: x0h,
							band: 'Close',
							threshold: I47.baseline.actualLevel,
							color: c47.getCanvasColor(n47[P47]),
							direction: P47 == 'over' ? 1 : -1,
							edgeHighlight: c47.getCanvasColor(n47[P47]),
							edgeParameters: {
								pattern: w0h,
								lineWidth: parseInt(c47.canvasStyle(n47[P47]).width, 10) + +'0.1',
								opacity: 1,
							},
						}
						c47.chart.baseLegendColors.push(Z47.color)
						Z47.color = 'transparent'
						i2t.preparePeakValleyFill(c47, I47.dataSegment, Z47)
					}
					this.plotLine(0, 1, y47, y47, this.containerColor, 'line', I47.context, !!{}, {
						pattern: 'solid',
						lineWidth: h0h,
						opacity: '1' & 2147483647,
					})
					this.plotLine(
						0,
						1,
						y47,
						y47,
						this.getCanvasColor('stx_baseline'),
						t0h,
						I47.context,
						!![],
						{ pattern: 'dotted', lineWidth: Y0h, opacity: 0.5 },
					)
					if (this.chart.baseline.userLevel !== ![]) {
						m0w.a0w(6)
						var z3h = m0w.u0w(8, 18)
						m0w.B0w(49)
						var G3h = m0w.W0w(9, 14, 12, 14)
						this.controls.baselineHandle.style.top =
							y47 -
							parseInt(getComputedStyle(this.controls.baselineHandle).height, z3h) / G3h +
							'px'
						m0w.a0w(6)
						var p3h = m0w.W0w(2, 12)
						this.controls.baselineHandle.style.left =
							this.chart.right -
							parseInt(getComputedStyle(this.controls.baselineHandle).width, p3h) +
							'px'
						this.controls.baselineHandle.style.display = 'block'
					}
					this.endClip()
				}
			} else if (E47 == 'scatterplot') {
				this.startClip(B47.name)
				this.scatter(B47)
				this.endClip()
			} else if (E47 && E47 != 'none') {
				m0w.a0w(4)
				console.log(
					m0w.u0w(E47, '". Defaulting to Line Chart.', 'Invalid chart layout.chartType: "'),
				)
				e47.chartType = 'line'
				this.drawLineChart(B47, 'stx_line_chart')
			} else {
				this.chart.baseLegendColors = null
			}
			this.runAppend('displayChart', arguments)
		}
		i2t.ChartEngine.prototype.calculateATR = function(s77, U77) {
			var t77, b77, T77, B77
			if (!U77) {
				U77 = 20
			}
			t77 = 0
			for (var p77 = 1; p77 < s77.dataSet.length; p77++) {
				b77 = s77.dataSet[p77]
				m0w.a0w(6)
				T77 = s77.dataSet[m0w.W0w(1, p77)]
				B77 = Math.max(
					b77.High - b77.Low,
					Math.abs(b77.High - T77.Close),
					Math.abs(b77.Low - T77.Close),
				)
				t77 += B77
				if (p77 > U77) {
					t77 -= s77.dataSet[p77 - U77].trueRange
				}
				b77.trueRange = B77
				if (p77 == U77) {
					m0w.a0w(37)
					b77.atr = m0w.u0w(t77, U77)
				} else if (p77 > U77) {
					m0w.a0w(50)
					var L3h = m0w.u0w(10, 141, 14)
					b77.atr = (T77.atr * (U77 - L3h) + B77) / U77
				}
			}
		}
		i2t.ChartEngine.prototype.calculateMedianPrice = function(I77) {
			var E77
			m0w.L2t()
			for (var A77 = '0' ^ 0; A77 < I77.dataSet.length; ++A77) {
				E77 = I77.dataSet[A77]
				E77['hl/2'] = (E77.High + E77.Low) / +'2'
			}
		}
		i2t.ChartEngine.prototype.calculateTypicalPrice = function(c77) {
			var y77
			m0w.M2t()
			for (var g77 = 0; g77 < c77.dataSet.length; ++g77) {
				y77 = c77.dataSet[g77]
				m0w.B0w(13)
				var D3h = m0w.u0w(48, 10, 5)
				y77['hlc/3'] = (y77.High + y77.Low + y77.Close) / ('3' | D3h)
			}
		}
		i2t.ChartEngine.prototype.calculateWeightedClose = function(d77) {
			var z77
			m0w.M2t()
			for (var e77 = '0' * 1; e77 < d77.dataSet.length; ++e77) {
				z77 = d77.dataSet[e77]
				m0w.a0w(51)
				var r3h = m0w.u0w(2, 13, 1755, 18, 15)
				z77['hlcc/4'] = (z77.High + z77.Low + 2 * z77.Close) / r3h
			}
		}
		i2t.ChartEngine.prototype.calculateOHLC4 = function(V77) {
			var a77
			for (var C77 = +'0'; C77 < V77.dataSet.length; ++C77) {
				a77 = V77.dataSet[C77]
				m0w.a0w(52)
				var H3h = m0w.W0w(4, 15, 15)
				a77['ohlc/4'] = (a77.Open + a77.High + a77.Low + a77.Close) / H3h
			}
		}
		i2t.ChartEngine.prototype.currentQuote = function() {
			var P77, G77
			P77 = this
			G77 = null
			if (!this.chart.dataSet) {
				return null
			}
			m0w.L2t()
			for (var n77 = this.chart.dataSet.length - 1; n77 >= 0; n77--) {
				if (P77.chart.dataSet[n77]) {
					return P77.chart.dataSet[n77]
				}
			}
			return null
		}
		i2t.ChartEngine.prototype.correctIfOffEdge = function(F77) {
			var J77, O77, r77, q77, D77, m77
			J77 = this
			if (this.runPrepend('correctIfOffEdge', arguments)) {
				return
			}
			for (var Z77 in J77.charts) {
				O77 = J77.charts[Z77]
				r77 = O77.dataSet
				q77 = O77.maxTicks
				D77 = Math.min(J77.minimumLeftBars + 1, q77)
				if (O77.allowScrollPast) {
					m0w.a0w(6)
					m77 = m0w.u0w(D77, q77)
					if (q77 - m77 > r77.length) {
						m77 = q77 - r77.length
					}
					if (O77.scroll - m77 > r77.length) {
						O77.scroll = r77.length + m77
					}
					if (O77.scroll <= D77) {
						O77.scroll = D77
						J77.micropixels = 0
					}
				} else {
					if (O77.scroll < D77) {
						O77.scroll = D77
					}
					if (O77.scroll > r77.length) {
						O77.scroll = r77.length
					}
				}
			}
			this.runAppend('correctIfOffEdge', arguments)
		}
		i2t.ChartEngine.prototype.createDataSegment = function(j87) {
			var d0h, H77, l77, Y77, x77, h77, i87, K77, v77, w87, u77, S77, N77, L87, X77, M87
			d0h = 'createDa'
			d0h += 'taSegme'
			d0h += 'nt'
			H77 = this
			if (this.runPrepend(d0h, arguments)) {
				return
			}
			for (var W87 in H77.charts) {
				l77 = H77.charts[W87]
				if (j87) {
					l77 = j87
				}
				if (l77.isComparison) {
					i2t.Comparison.createComparisonSegmentInner(H77, l77)
				}
				Y77 = l77.dataSet
				x77 = l77.baseline
				h77 = l77.scroll
				i87 = l77.maxTicks
				K77 = H77.layout
				v77 = K77.candleWidth
				x77.actualLevel = x77.userLevel ? x77.userLevel : x77.defaultLevel
				w87 = x77.includeInDataSegment && !i2t.ChartEngine.chartShowsHighs(H77.layout.chartType)
				S77 = l77.dataSegment = []
				m0w.a0w(53)
				var Z3h = m0w.W0w(7, 9, 14, 15, 2)
				N77 = Y77.length - h77 - Z3h
				for (var k77 = -1; k77 < h77 && k77 < i87; k77++) {
					N77++
					if (k77 == -1 && !w87) {
						continue
					}
					if (N77 < Y77.length && N77 >= 0) {
						u77 = Y77[N77]
						if (u77.candleWidth) {
							u77.candleWidth = null
							u77.leftOffset = null
						}
						S77.push(u77)
						if (x77.actualLevel === null && k77 >= 0) {
							x77.actualLevel = u77.iqPrevClose
						}
					} else if (N77 < 0) {
						S77.push(null)
					}
				}
				if (K77.chartType == 'volume_candle') {
					L87 = 0
					for (var R77 = 0; R77 < S77.length; R77++) {
						u77 = S77[R77]
						if (u77) {
							L87 += u77.Volume
						}
					}
					X77 = 0
					for (var Q77 = 0; Q77 < S77.length; Q77++) {
						u77 = S77[Q77]
						if (u77) {
							if (u77.Volume) {
								M87 = l77.width
								if (h77 < i87) {
									M87 -= H77.preferences.whitespace
								}
								u77.candleWidth = (M87 * u77.Volume) / L87
								u77.leftOffset = X77 + u77.candleWidth / 2
								X77 += u77.candleWidth
							} else {
								u77.candleWidth = v77
								m0w.B0w(3)
								u77.leftOffset = m0w.u0w(2, v77, X77)
								X77 += v77
							}
						} else {
							X77 += v77
						}
					}
				}
				if (j87) {
					break
				}
			}
			if (l77 && l77.isComparison) {
				this.clearPixelCache()
			}
			this.runAppend('createDataSegment', arguments)
		}
		i2t.ChartEngine.prototype.leftTick = function() {
			m0w.L2t()
			return this.chart.dataSet.length - this.chart.scroll
		}
		i2t.ChartEngine.prototype.getStartDateOffset = function() {
			var f87
			f87 = this
			m0w.M2t()
			for (var o87 = 0; o87 < this.chart.dataSegment.length; o87++) {
				if (f87.chart.dataSegment[o87]) {
					return o87
				}
			}
			return +'0'
		}
		i2t.ChartEngine.prototype.setStartDate = function(s87) {
			var U87, b87
			m0w.L2t()
			U87 = this
			for (var p87 = '0' & 2147483647; p87 < this.chart.dataSet.length; p87++) {
				b87 = U87.chart.dataSet[p87]
				if (b87.DT.getTime() == s87.getTime()) {
					U87.chart.scroll = U87.chart.dataSet.length - p87
					U87.draw()
					return
				}
			}
		}
		i2t.ChartEngine.prototype.updateListeners = function(E87) {
			var t87, T87
			t87 = this
			for (var B87 in t87.plugins) {
				T87 = t87.plugins[B87]
				if (T87.display && T87.listener) {
					T87.listener(t87, E87)
				}
			}
		}
		i2t.ChartEngine.prototype.clearPixelCache = function() {
			var A87, I87, y87
			A87 = this
			for (var c87 in A87.panels) {
				I87 = A87.panels[c87]
				I87.cacheHigh = null
				I87.cacheLow = null
				m0w.a0w(7)
				I87.cacheLeft = m0w.W0w('1000000', 774886912)
				I87.cacheRight = -1
			}
			m0w.M2t()
			for (var z87 in A87.charts) {
				y87 = A87.charts[z87]
				if (!y87.dataSet) {
					continue
				}
				for (var g87 = +'0'; g87 < y87.dataSet.length; g87++) {
					y87.dataSet[g87].cache = {}
				}
			}
		}
		i2t.ChartEngine.prototype.createYAxisLabel = function(D87, l87, V87, G87, u87, F87, Z87) {
			var N0h, a0h, e87, d87, C87, a87, O87, m87, P87, n87, q87, J87, x87, r87, T0h
			N0h = 'lef'
			N0h += 't'
			a0h = 'stx'
			a0h += '_yaxi'
			a0h += 's'
			if (D87.yAxis.drawPriceLabels === !'1') {
				return
			}
			e87 = Z87 ? Z87 : D87.yAxis
			d87 = F87 ? F87 : this.chart.context
			C87 = 3
			a87 = this.getCanvasFontSize(a0h) + C87 * 2
			this.canvasFont('stx_yaxis', d87)
			O87 = e87.displayBorder
			if (this.axisBorders === !'1') {
				O87 = ![]
			}
			if (this.axisBorders === !![]) {
				O87 = !![]
			}
			m87 = O87 ? 3 : +'0'
			try {
				P87 = d87.measureText(l87).width + m87 + C87 * +'2'
			} catch (H87) {
				P87 = e87.width
			}
			m0w.a0w(6)
			var S3h = m0w.u0w(15, 18)
			n87 = e87.left - C87 + S3h
			m0w.B0w(4)
			q87 = m0w.W0w(C87, m87, n87)
			J87 = 3
			x87 = e87.position === null ? D87.chart.yAxis.position : e87.position
			if (x87 === 'left') {
				m0w.a0w(6)
				var E3h = m0w.u0w(10, 13)
				n87 = e87.left + e87.width + C87 - E3h
				m0w.a0w(54)
				P87 = m0w.W0w(P87, 1)
				q87 = n87
				J87 = -3
				d87.textAlign = 'right'
			}
			if (V87 + a87 / 2 > e87.bottom) {
				m0w.a0w(52)
				var C3h = m0w.u0w(2, 19, 19)
				V87 = e87.bottom - a87 / C3h
			}
			if (V87 - a87 / 2 < e87.top) {
				m0w.a0w(36)
				var V3h = m0w.W0w(18, 12, 32)
				V87 = e87.top + a87 / V3h
			}
			m0w.M2t()
			d87.fillStyle = G87
			if (typeof i2t[this.yaxisLabelStyle] == 'undefined') {
				this.yaxisLabelStyle = 'roundRectArrow'
			}
			r87 = this.yaxisLabelStyle
			if (e87.yaxisLabelStyle) {
				r87 = e87.yaxisLabelStyle
			}
			m0w.a0w(55)
			i2t[r87](d87, n87, m0w.u0w(a87, 2, V87), P87, a87, J87, !!{}, !{})
			d87.textBaseline = 'middle'
			d87.fillStyle = u87 ? u87 : i2t.chooseForegroundColor(G87)
			if (d87.fillStyle == G87) {
				if (G87.toUpperCase() == '#FFFFFF') {
					T0h = '#00000'
					T0h += '0'
					d87.fillStyle = T0h
				} else {
					d87.fillStyle = '#FFFFFF'
				}
			}
			m0w.B0w(14)
			d87.fillText(l87, q87, m0w.u0w('1', V87))
			d87.textAlign = N0h
		}
		i2t.ChartEngine.prototype.createXAxisLabel = function(k87, L57, X87, R87, M57, j57) {
			var S87, Y87, K87, h87, N87, v87, Q87, J0h
			S87 = this.chart.context
			Y87 = 2
			K87 = 'stx-float-date'
			m0w.B0w(56)
			var X3h = m0w.W0w(11, 18, 122, 19, 14)
			h87 = this.getCanvasFontSize(K87) + Y87 * X3h
			this.canvasFont(K87, S87)
			try {
				m0w.a0w(57)
				var Q3h = m0w.W0w(13, 7, 17, 170, 1)
				N87 = S87.measureText(L57).width + Y87 * Q3h
			} catch (i57) {
				N87 = 0
			}
			v87 = k87.top + k87.height - h87
			if (X87 + N87 / 2 < k87.left || X87 - N87 / 2 > k87.right) {
				return
			}
			if (!j57) {
				if (X87 + N87 / 2 > k87.right) {
					m0w.B0w(6)
					var n3h = m0w.W0w(12, 14)
					X87 = k87.right - N87 / n3h
				}
				if (X87 - N87 / +'2' < k87.left) {
					X87 = k87.left + N87 / +'2'
				}
			}
			m0w.L2t()
			S87.fillStyle = R87
			m0w.a0w(55)
			i2t.roundRect(S87, m0w.u0w(N87, 2, X87), v87, N87, h87, 3, !!{}, !{})
			Q87 = k87.bottom - k87.yAxis.bottom - h87
			S87.beginPath()
			if (j57) {
				m0w.B0w(6)
				S87.moveTo(m0w.u0w(Q87, X87), v87)
				m0w.B0w(58)
				S87.lineTo(X87, m0w.u0w(v87, Q87, 1))
				m0w.B0w(5)
				S87.lineTo(m0w.W0w(X87, Q87), v87)
				S87.closePath()
				S87.fill()
			} else {
				S87.moveTo(X87, v87)
				m0w.a0w(6)
				S87.lineTo(X87, m0w.W0w(Q87, v87))
				S87.strokeStyle = R87
				S87.stroke()
			}
			S87.textBaseline = 'top'
			S87.fillStyle = M57 ? M57 : i2t.chooseForegroundColor(R87)
			if (S87.fillStyle == R87) {
				if (R87.toUpperCase() == '#FFFFFF') {
					J0h = '#0'
					J0h += '00'
					J0h += '000'
					S87.fillStyle = J0h
				} else {
					S87.fillStyle = '#FFFFFF'
				}
			}
			m0w.a0w(59)
			S87.fillText(L57, m0w.W0w(Y87, X87, 2, N87), m0w.u0w(v87, Y87, m0w.a0w(5)))
		}
		i2t.ChartEngine.prototype.drawCurrentHR = function() {
			var g0h, w57, t57, y57, o57, W57, p57, U57, b57, B57, f57, E57, c57, A57, I57, s57, T57, B0h
			g0h = 'dra'
			g0h += 'wCurrentH'
			g0h += 'R'
			w57 = this
			if (this.runPrepend('drawCurrentHR', arguments)) {
				return
			}
			for (var g57 in w57.charts) {
				o57 = w57.charts[g57]
				W57 = o57.panel
				p57 = W57.yAxis
				if (p57.drawCurrentPriceLabel === !{}) {
					continue
				}
				if (o57.customChart && o57.customChart.chartType == 'none') {
					continue
				}
				U57 = p57.whichSet
				if (!U57) {
					U57 = 'dataSet'
				}
				b57 = o57[U57].length
				B57 = w57.layout.candleWidth
				if (U57 == 'dataSegment') {
					while (b57 > (o57.width - this.micropixels + B57 / 2 + 1) / B57) {
						b57--
					}
				}
				if (b57 && o57[U57][b57 - ('1' << 1049817632)]) {
					m0w.B0w(6)
					f57 = o57[U57][m0w.u0w(1, b57)]
					E57 = f57.Close
					c57 = f57.Close
					if (o57[U57].length >= 2) {
						m0w.a0w(60)
						A57 = o57[U57][m0w.W0w('2', b57, 188902560)]
						if (A57) {
							E57 = A57.Close
						}
					}
					if (c57 < E57) {
						t57 = w57.canvasStyle('stx_current_hr_down').backgroundColor
						y57 = w57.canvasStyle('stx_current_hr_down').color
					} else {
						t57 = w57.canvasStyle('stx_current_hr_up').backgroundColor
						y57 = w57.canvasStyle('stx_current_hr_up').color
					}
					if (f57.transform) {
						f57 = f57.transform
					}
					s57 = Math.max(W57.yAxis.printDecimalPlaces, W57.chart.decimalPlaces)
					if (p57.maxDecimalPlaces || p57.maxDecimalPlaces === 0) {
						s57 = Math.min(s57, p57.maxDecimalPlaces)
					}
					if (p57.priceFormatter) {
						I57 = p57.priceFormatter(w57, W57, f57.Close, s57)
					} else {
						I57 = w57.formatYAxisPrice(f57.Close, W57, s57)
					}
					T57 = w57.pixelFromPrice(f57.Close, W57)
					w57.createYAxisLabel(W57, I57, T57, t57, y57)
					if (w57.preferences.currentPriceLine === !!'1' && w57.isHome()) {
						B0h = 'd'
						B0h += 'as'
						B0h += 'hed'
						W57.chart.context.globalCompositeOperation = 'destination-over'
						w57.plotLine(W57.left, W57.right, T57, T57, t57, 'line', W57.chart.context, W57, {
							pattern: B0h,
							lineWidth: 1,
							opacity: 0.8,
						})
						W57.chart.context.globalCompositeOperation = 'source-over'
					}
				}
			}
			this.runAppend(g0h, arguments)
		}
		i2t.ChartEngine.prototype.getDefaultColor = function() {
			var j0h, z57, e57, d57, a57, C57, I0h
			j0h = '#0000'
			j0h += '00'
			this.defaultColor = j0h
			z57 = null
			e57 = this.chart.container
			while (!z57 || i2t.isTransparent(z57)) {
				d57 = getComputedStyle(e57)
				if (!d57) {
					return
				}
				z57 = d57.backgroundColor
				if (i2t.isTransparent(z57)) {
					z57 = 'transparent'
				}
				e57 = e57.parentNode
				if (!e57 || !e57.tagName) {
					break
				}
			}
			if (z57) {
				if (z57 == 'transparent') {
					z57 = '#FFFFFF'
				}
				this.containerColor = z57
				if (!i2t.isTransparent(z57)) {
					a57 = i2t.hsv(z57)
					C57 = a57[2]
					if (C57 > 0.65) {
						this.defaultColor = '#000000'
					} else {
						this.defaultColor = '#FFFFFF'
					}
				} else {
					I0h = '#0000'
					I0h += '0'
					I0h += '0'
					this.defaultColor = I0h
				}
			} else {
				this.containerColor = '#FFFFFF'
			}
		}
		i2t.ChartEngine.prototype.startAsyncAction = function() {
			var H38, Z38, c38
			if (!this.pendingAsyncs) {
				this.pendingAsyncs = []
			}
			H38 = -125973881
			Z38 = 1597623287
			c38 = 2
			for (var S38 = 1; m0w.M68(S38.toString(), S38.toString().length, 88147) !== H38; S38++) {
				this.pendingAsyncs.push(!{})
				c38 += 2
			}
			if (m0w.U68(c38.toString(), c38.toString().length, +'72614') !== Z38) {
				this.pendingAsyncs.push(!{})
			}
			this.pendingAsyncs.push(!![])
		}
		i2t.ChartEngine.prototype.registerChartDrawnCallback = function(V57) {
			if (!this.asyncCallbacks) {
				this.asyncCallbacks = []
			}
			this.asyncCallbacks.push(V57)
			return { fc: V57 }
		}
		i2t.ChartEngine.prototype.unregisterChartDrawnCallback = function(G57) {
			var O48, s48, v48, P57
			O48 = 1903592840
			s48 = -1343889610
			v48 = +'2'
			for (
				var o48 = 1;
				m0w.M68(o48.toString(), o48.toString().length, '41389' >> 1718068000) !== O48;
				o48++
			) {
				P57 = this
				v48 += 2
			}
			if (m0w.U68(v48.toString(), v48.toString().length, 29203) !== s48) {
				P57 = this
			}
			for (var n57 = 0; n57 < this.asyncCallbacks.length; n57++) {
				if (P57.asyncCallbacks[n57] == G57.fc) {
					m0w.a0w(2)
					P57.asyncCallbacks.splice(n57, m0w.W0w(2147483647, '1'))
					return
				}
			}
		}
		i2t.ChartEngine.prototype.makeAsyncCallbacks = function() {
			var r57
			r57 = this
			if (!this.asyncCallbacks) {
				return
			}
			if (!this.pendingAsyncs || !this.pendingAsyncs.length) {
				for (var O57 = +'0'; O57 < this.asyncCallbacks.length; O57++) {
					r57.asyncCallbacks[O57]()
				}
			}
		}
		i2t.ChartEngine.prototype.completeAsyncAction = function() {
			m0w.M2t()
			this.pendingAsyncs.pop()
			this.makeAsyncCallbacks()
		}
		i2t.ChartEngine.prototype.draw = function() {
			var F0h, D57, Z57, J57, m57, q57, l57
			F0h = 'dr'
			F0h += 'a'
			F0h += 'w'
			D57 = this
			this.debug()
			if (!this.chart.canvas) {
				return
			}
			if (!this.chart.dataSet) {
				return
			}
			if (!this.chart.canvasHeight) {
				return
			}
			this.offset = (this.layout.candleWidth * this.candleWidthPercent) / ('2' - 0)
			i2t.clearCanvas(this.chart.canvas, this)
			if (!this.masterData.length) {
				return
			}
			if (this.runPrepend(F0h, arguments)) {
				return
			}
			this.getDefaultColor()
			this.vectorsShowing = ![]
			this.drawPanels()
			this.yAxisLabels = []
			for (m57 in D57.charts) {
				J57 = D57.charts[m57]
				D57.correctIfOffEdge()
				D57.createDataSegment()
				l57 = D57.createXAxis(J57)
				D57.initializeDisplay(J57)
				D57.rendererAction(J57, 'calculate')
				D57.renderYAxis(J57)
				D57.drawXAxis(J57, l57)
				J57.tmpWidth = Math.floor(D57.layout.candleWidth * D57.candleWidthPercent)
				if (J57.tmpWidth % 2 === 0) {
					J57.tmpWidth += 1
					if (J57.tmpWidth > D57.layout.candleWidth) {
						J57.tmpWidth -= 2
					}
				}
				if (J57.tmpWidth < 0.5) {
					J57.tmpWidth = 0.5
				}
				for (Z57 in D57.plugins) {
					q57 = D57.plugins[Z57]
					if (q57.display) {
						if (q57.drawUnder) {
							q57.drawUnder(D57, J57)
						}
					}
				}
				D57.rendererAction(J57, 'yaxis')
				D57.rendererAction(J57, 'underlay')
				if (i2t.Studies) {
					i2t.Studies.displayStudies(D57, J57, !0)
				}
				D57.displayChart(J57)
				if (i2t.Studies) {
					i2t.Studies.displayStudies(D57, J57, !{})
				}
				D57.rendererAction(J57, 'overlay')
			}
			for (m57 in D57.charts) {
				J57 = D57.charts[m57]
				for (Z57 in D57.plugins) {
					q57 = D57.plugins[Z57]
					if (q57.display) {
						if (q57.drawOver) {
							q57.drawOver(D57, J57)
						}
					}
				}
			}
			for (var u57 in D57.panels) {
				if (!D57.panels[u57].hidden) {
					D57.plotYAxisText(D57.panels[u57])
				}
			}
			for (var F57 = 0; F57 < this.yAxisLabels.length; F57++) {
				D57.createYAxisLabel.apply(D57, D57.yAxisLabels[F57].args)
			}
			this.createCrosshairs()
			this.drawVectors()
			this.drawCurrentHR()
			this.displayInitialized = !!{}
			if (this.controls.home) {
				this.controls.home.style.display = this.isHome() ? 'none' : 'block'
			}
			this.positionMarkers()
			for (m57 in D57.charts) {
				J57 = D57.charts[m57]
				if (D57.quoteDriver) {
					D57.quoteDriver.checkLoadMore(J57)
				}
			}
			this.runAppend('draw', arguments)
			this.makeAsyncCallbacks()
		}
		i2t.ChartEngine.prototype.adjustBackingStore = function(x57, H57) {
			var k57, S57, X57, N57
			this.devicePixelRatio = window.devicePixelRatio || 1
			if (this.devicePixelRatio < 1.0) {
				m0w.a0w(1)
				this.devicePixelRatio = m0w.W0w('1.0', 0)
			}
			k57 =
				H57.webkitBackingStorePixelRatio ||
				H57.mozBackingStorePixelRatio ||
				H57.msBackingStorePixelRatio ||
				H57.oBackingStorePixelRatio ||
				H57.backingStorePixelRatio ||
				+'1'
			S57 = this.devicePixelRatio / k57
			if (!i2t.isAndroid || i2t.is_chrome) {
				X57 = x57.width
				N57 = x57.height
				m0w.a0w(10)
				x57.width = m0w.W0w(S57, X57)
				m0w.a0w(10)
				x57.height = m0w.W0w(S57, N57)
				m0w.a0w(5)
				x57.style.width = m0w.u0w(X57, 'px')
				m0w.B0w(5)
				x57.style.height = m0w.u0w(N57, 'px')
				H57.scale(S57, S57)
				this.adjustedDisplayPixelRatio = S57
			}
		}
		i2t.ChartEngine.prototype.resizeCanvas = function() {
			var v57, R57, K57, L1M, Y57, g88, j88, I88, Q57, W1M, h57, w1M
			v57 = this
			if (!this.chart.panel) {
				this.chart.panel = this.panels.chart
			}
			R57 = this.chart.canvas
			K57 = this.chart.context
			if (R57 && K57) {
				this.chart.tempCanvas.height = R57.height = this.chart.container.clientHeight
				this.chart.tempCanvas.width = R57.width = this.chart.container.clientWidth
				this.adjustBackingStore(R57, K57)
				this.adjustBackingStore(this.chart.tempCanvas, this.chart.tempCanvas.context)
				this.floatCanvas.height = this.chart.container.clientHeight
				this.floatCanvas.width = this.chart.container.clientWidth
				this.adjustBackingStore(this.floatCanvas, this.floatCanvas.context)
			}
			L1M = this.container.getBoundingClientRect()
			this.top = L1M.top
			this.left = L1M.left
			this.canvasWidth = this.chart.canvasWidth = this.chart.container.clientWidth
			this.right = this.left + this.canvasWidth
			this.height = this.chart.container.clientHeight
			this.width = this.right - this.left
			if (this.width === 0 && !this.container.dimensionlessCanvas) {
				console.log('warning: zero width chart. Check CSS for chart container.')
			}
			m0w.L2t()
			this.bottom = this.top + this.height
			this.calculateYAxisPositions()
			this.chart.canvasRight = this.right
			this.chart.canvasHeight = this.height
			Y57 = this.layout.candleWidth
			if (typeof Y57 == 'undefined') {
				g88 = -1106665975
				j88 = +'1444232542'
				I88 = 2
				for (var l88 = 1; m0w.U68(l88.toString(), l88.toString().length, 96624) !== g88; l88++) {
					Y57 = +'9'
					I88 += 2
				}
				if (m0w.M68(I88.toString(), I88.toString().length, 57502) !== j88) {
					Y57 = 8
				}
			}
			for (var o1M in v57.charts) {
				Q57 = v57.charts[o1M]
				if (v57.layout.span) {
					v57.setCandleWidth(v57.getSpanCandleWidth(v57.layout.span), Q57)
				} else {
					v57.setCandleWidth(Y57, Q57)
					if (Q57.scroll < Q57.width / Y57) {
						Q57.scroll = Math.floor(Q57.width / Y57)
						W1M = Math.round(v57.preferences.whitespace / v57.layout.candleWidth)
						Q57.scroll -= W1M
					}
				}
				m0w.a0w(2)
				h57 = m0w.W0w(2147483647, '10')
				try {
					w1M = K57.measureText('10:00').width * 2
				} catch (U1M) {
					w1M = 100
				}
				while (h57 > 1) {
					if (v57.chart.width / w1M > h57) {
						break
					}
					h57 /= 1.5
				}
				Q57.xAxis.autoComputedTickSizePixels = Math.round(v57.chart.width / h57)
				if (Q57.xAxis.autoComputedTickSizePixels < 1) {
					Q57.xAxis.autoComputedTickSizePixels = 1
				}
			}
		}
		i2t.ChartEngine.prototype.setCandleWidth = function(p1M, b1M) {
			var x48, w48, h48
			if (!b1M) {
				b1M = this.chart
			}
			m0w.L2t()
			if (p1M < this.minimumCandleWidth) {
				p1M = this.minimumCandleWidth
			}
			this.layout.candleWidth = p1M
			m0w.B0w(12)
			x48 = -m0w.u0w(1225002912, '2079231924')
			w48 = -2129594655
			h48 = 2
			for (var Y48 = 1; m0w.U68(Y48.toString(), Y48.toString().length, 23335) !== x48; Y48++) {
				b1M.maxTicks = Math.round(this.chart.width % p1M) % 0
				h48 += 2
			}
			if (m0w.M68(h48.toString(), h48.toString().length, 89614) !== w48) {
				m0w.B0w(61)
				var A3h = m0w.u0w(10, 7, 5, 16, 11, 44)
				b1M.maxTicks = Math.round(this.chart.width + p1M) * A3h
			}
			m0w.B0w(52)
			var f3h = m0w.u0w(6, 114, 19)
			b1M.maxTicks = Math.round(this.chart.width / p1M) + f3h
		}
		i2t.ChartEngine.prototype.resizeChart = function(s1M) {
			var t1M
			if (this.runPrepend('resizeChart', arguments)) {
				return
			}
			if (s1M !== ![]) {
				s1M = !''
			}
			if (s1M) {
				this.preAdjustScroll()
			}
			t1M = this.chart.canvasHeight
			this.resizeCanvas()
			if (s1M) {
				this.postAdjustScroll()
			}
			if (this.displayInitialized) {
				this.adjustPanelPositions()
				this.draw()
			} else if (this.chart.canvasHeight !== 0 && t1M === 0) {
				this.adjustPanelPositions()
				this.draw()
			}
			this.doDisplayCrosshairs()
			this.updateChartAccessories()
			this.runAppend('resizeChart', arguments)
		}
		i2t.ChartEngine.prototype.newChart = function(c1M, a1M, T1M, C1M, y1M) {
			var l0h, A1M, E1M, O1M, r1M, D1M, n1M, P1M, G1M, B1M, V1M, g1M, J1M, d1M
			l0h = 'o'
			l0h += 'b'
			l0h += 'ject'
			if (!T1M) {
				T1M = this.chart
			}
			if (!y1M) {
				y1M = {}
			}
			A1M = this.layout
			E1M = y1M.periodicity
			if (E1M) {
				if (E1M.interval) {
					A1M.interval = E1M.interval
				}
				if (E1M.period) {
					A1M.periodicity = E1M.period
				}
				if (E1M.periodicity) {
					A1M.periodicity = E1M.periodicity
				}
				A1M.timeUnit = E1M.timeUnit
			}
			O1M = T1M.symbol
			r1M = i2t.clone(T1M.symbolObject)
			D1M = T1M.market
			n1M = T1M.dataSet
			P1M = T1M.moreAvailable
			T1M.dataSet = []
			T1M.moreAvailable = !!'1'
			if (!c1M) {
				T1M.symbol = null
				T1M.symbolObject = { symbol: null }
			} else if (typeof c1M == l0h) {
				T1M.symbol = c1M.symbol
				T1M.symbolObject = c1M
			} else {
				T1M.symbol = c1M
				T1M.symbolObject.symbol = c1M
			}
			if (this.marketFactory) {
				G1M = this.marketFactory(T1M.symbolObject)
				this.setMarket(G1M, T1M)
			}
			B1M = this
			if (!a1M && this.quoteDriver) {
				V1M = function(q1M) {
					var m0h
					if (q1M && q1M != 'orphaned') {
						T1M.symbol = O1M
						T1M.symbolObject = r1M
						T1M.market = D1M
						T1M.dataSet = n1M
						T1M.moreAvailable = P1M
					}
					if (!B1M.currentlyImporting) {
						m0h = 'm'
						m0h += 'a'
						m0h += 'ste'
						m0h += 'r'
						B1M.dispatch('symbolChange', {
							stx: B1M,
							symbol: B1M.chart.symbol,
							symbolObject: B1M.chart.symbolObject,
							action: m0h,
						})
					}
					if (C1M) {
						C1M(q1M)
					}
				}
				g1M = y1M.span
				if (!g1M && A1M) {
					g1M = A1M.setSpan
				}
				if (g1M && g1M.base) {
					J1M = g1M.multiplier || 1
					this.chart.masterData = null
					this.displayInitialized = !'1'
					this.setSpan(
						{
							maintainPeriodicity: E1M ? !0 : !{},
							multiplier: J1M,
							base: g1M.base,
							symbol: T1M.symbol,
							forceLoad: !!1,
						},
						V1M,
					)
				} else {
					this.quoteDriver.newChart(
						{
							symbol: T1M.symbol,
							symbolObject: T1M.symbolObject,
							chart: T1M,
							initializeChart: !![],
						},
						function(m1M) {
							m0w.M2t()
							if (!m1M) {
								B1M.adjustPanelPositions()
								B1M.quoteDriver.updateSubscriptions()
								if (y1M.stretchToFillScreen) {
									B1M.fillScreen()
								}
							}
							V1M.apply(B1M, arguments)
						},
					)
				}
			} else {
				if (!a1M) {
					console.log('Warning: No masterData specified and no QuoteFeed configured')
				}
				if (!T1M.symbol) {
					T1M.symbol = ''
				}
				this.setMasterData(a1M, T1M)
				this.createDataSet()
				this.initializeChart()
				d1M = y1M.span
				if (d1M && d1M.multiplier && d1M.base) {
					this.setSpan({ maintainPeriodicity: !![], multiplier: d1M.multiplier, base: d1M.base })
				} else if (y1M.stretchToFillScreen) {
					this.fillScreen()
				} else if (a1M.length) {
					this.draw()
				} else {
					this.clear()
				}
				this.adjustPanelPositions()
				if (C1M) {
					C1M()
				}
			}
		}
		i2t.ChartEngine.prototype.clear = function() {
			var F1M, l1M
			F1M = this
			this.displayInitialized = !!''
			for (var u1M in F1M.layout.studies) {
				l1M = F1M.layout.studies[u1M]
				i2t.Studies.removeStudy(F1M, F1M.layout.studies[u1M])
			}
			m0w.L2t()
			this.controls.chartControls.style.display = 'none'
		}
		i2t.ChartEngine.prototype.fillScreen = function() {
			var x1M, N1M, H1M, S1M, k1M
			x1M = this.chart
			N1M = this.layout.candleWidth
			H1M = x1M.width - this.preferences.whitespace
			S1M = x1M.dataSet.length
			if (S1M * N1M >= H1M) {
				this.draw()
				return
			}
			m0w.B0w(37)
			k1M = m0w.W0w(H1M, S1M)
			this.setCandleWidth(k1M, x1M)
			m0w.M2t()
			this.home({ maintainWhitespace: !0 })
		}
		i2t.ChartEngine.prototype.setMasterData = function(K1M, Q1M) {
			var M0h, Y1M, L0M, R1M, v1M, U0h, j0M, M0M
			M0h = 'c'
			M0h += 'h'
			M0h += 'a'
			M0h += 'rt'
			Y1M = this
			if (!Q1M) {
				Q1M = this.chart
			}
			if (this.marketFactory) {
				L0M = this.marketFactory(Q1M.symbolObject)
				this.setMarket(L0M, Q1M)
			}
			Q1M.masterData = K1M
			if (Q1M.name == M0h) {
				this.masterData = K1M
			}
			for (R1M = 0; K1M && R1M < K1M.length; R1M++) {
				if (Y1M.transformMasterDataQuote) {
					K1M[R1M] = Y1M.transformMasterDataQuote(K1M[R1M])
				}
				v1M = K1M[R1M]
				if (v1M.DT) {
					v1M.DT = new Date(v1M.DT)
					v1M.Date = i2t.yyyymmddhhmmssmmm(v1M.DT)
				} else if (v1M.Date) {
					v1M.DT = i2t.strToDateTime(v1M.Date)
				} else {
					U0h = 'setMasterDa'
					U0h += 'ta : Missi'
					U0h += 'ng DT and Date on masterData '
					U0h += 'object'
					console.log(U0h)
				}
				if (v1M.Volume && typeof v1M.Volume !== 'number') {
					v1M.Volume = parseInt(v1M.Volume, 10)
				}
				if (typeof v1M.Close != 'number' && !v1M.Close && v1M.Close !== null) {
					console.log(
						'setMasterData : Close is missing or not a number. Use parseFloat() if your data server provides strings. MasterData Index= ' +
							R1M +
							' Value = ' +
							v1M.Close,
					)
				}
				if (v1M.High === null) {
					delete v1M.High
				}
				if (v1M.Low === null) {
					delete v1M.Low
				}
				if (v1M.Open === null) {
					delete v1M.Open
				}
			}
			Q1M.decimalPlaces = this.callbacks.calculateTradingDecimalPlaces({
				stx: this,
				chart: Q1M,
				symbol: Q1M.symbolObject.symbol,
				symbolObject: Q1M.symbolObject,
			})
			if (!i2t.ChartEngine.isDailyInterval(this.layout.interval)) {
				this.setDisplayDates(K1M)
			}
			this.chart.roundit = Math.pow(+'10', Q1M.decimalPlaces)
			for (R1M in Y1M.plugins) {
				j0M = Y1M.plugins[R1M]
				if (j0M.display) {
					if (j0M.setMasterData) {
						j0M.setMasterData(Y1M, Q1M)
					}
				}
			}
			for (var i0M in Y1M.chart.series) {
				M0M = Y1M.chart.series[i0M]
				if (M0M.addSeriesData) {
					M0M.addSeriesData(Y1M)
				}
			}
		}
		i2t.ChartEngine.prototype.getSymbols = function() {
			var o0M, w0M, W0M, t0M, U0M, I0M, p0M, y0M, B0M
			o0M = this
			w0M = []
			t0M = this.layout
			for (var g0M in o0M.charts) {
				U0M = o0M.charts[g0M]
				w0M.push(T0M(U0M.symbol, U0M.symbolObject, t0M))
				for (var b0M in U0M.series) {
					I0M = U0M.series[b0M]
					p0M = I0M.parameters
					if (p0M.data && !p0M.data.useDefaultQuoteFeed) {
						continue
					}
					W0M = T0M(b0M, I0M.symbolObject, t0M)
					if (arguments['0' >> 1584060544] === 'include-parameters') {
						W0M.parameters = p0M
					}
					if (!W0M.symbolObject) {
						W0M.symbolObject = p0M.symbolObject || { symbol: b0M }
					}
					w0M.push(W0M)
				}
			}
			for (var E0M in o0M.panels) {
				if (o0M.panels[E0M].studyQuotes) {
					for (var A0M in o0M.panels[E0M].studyQuotes) {
						W0M = T0M(A0M, { symbol: A0M }, t0M)
						w0M.push(W0M)
					}
				}
			}
			function T0M(z0M, e0M, c0M) {
				return {
					symbol: z0M,
					symbolObject: e0M,
					periodicity: c0M.periodicity,
					interval: c0M.interval,
					timeUnit: c0M.timeUnit,
					setSpan: c0M.setSpan,
				}
			}
			m0w.M2t()
			for (var f0M = w0M.length - 1; f0M >= 0; f0M--) {
				y0M = w0M[f0M].symbol
				if (o0M.isEquationChart(y0M)) {
					B0M = i2t.formatEquation(y0M)
					if (B0M) {
						for (var s0M = 0; s0M < B0M.symbols.length; s0M++) {
							W0M = T0M(B0M.symbols[s0M], w0M[f0M].symbolObject, w0M[f0M])
							w0M.push(W0M)
						}
						m0w.a0w(1)
						w0M.splice(f0M, m0w.W0w('1', 0))
					}
				}
			}
			return w0M
		}
		i2t.ChartEngine.prototype.setDisplayDate = function(V0M) {
			var d0M, C0M, a0M
			d0M = V0M.DT
			m0w.M2t()
			m0w.a0w(5)
			var R3h = m0w.W0w(994, 6)
			C0M = d0M.getSeconds() * R3h + d0M.getMilliseconds()
			if (this.dataZone) {
				a0M = new o2t.Date(
					d0M.getFullYear(),
					d0M.getMonth(),
					d0M.getDate(),
					d0M.getHours(),
					d0M.getMinutes(),
					this.dataZone,
				)
				d0M = new Date(a0M.getTime() + C0M)
			}
			if (this.displayZone) {
				a0M = new o2t.Date(d0M.getTime(), this.displayZone)
				d0M = new Date(
					a0M.getFullYear(),
					a0M.getMonth(),
					a0M.getDate(),
					a0M.getHours(),
					a0M.getMinutes(),
				)
				d0M = new Date(d0M.getTime() + C0M)
			}
			V0M.displayDate = d0M
		}
		i2t.ChartEngine.prototype.setDisplayDates = function(P0M) {
			var O0M, G0M
			O0M = this
			if (!P0M) {
				return
			}
			for (var n0M = +'0'; n0M < P0M.length; n0M++) {
				G0M = P0M[n0M]
				if (G0M.DT) {
					O0M.setDisplayDate(G0M)
				}
			}
		}
		i2t.ChartEngine.prototype.streamTrade = function(X0M, J0M, F0M, x0M) {
			var h0M,
				H0M,
				D0M,
				m0M,
				Z0M,
				u0M,
				q0M,
				r0M,
				e0h,
				N0M,
				Y0M,
				v0M,
				l0M,
				C78,
				V78,
				X78,
				h38,
				t38,
				Y38,
				S0M,
				R0M,
				k0M,
				Q0M,
				O0h
			h0M = this
			H0M = this.chart
			if (!x0M) {
				x0M = {}
			}
			if (x0M.chart) {
				H0M = x0M.chart
			}
			D0M = null
			m0M = null
			Z0M = null
			u0M = 0
			if (typeof X0M == 'object') {
				D0M = X0M.last
				m0M = X0M.bid
				Z0M = X0M.ask
				u0M = X0M.volume
				if (J0M && typeof J0M != 'undefined') {
					J0M = new Date(J0M)
				}
			} else {
				D0M = arguments[0]
				u0M = arguments[1]
				if (J0M && typeof J0M != 'undefined') {
					J0M = new Date(arguments[+'2'])
				}
				F0M = arguments[3]
			}
			q0M = H0M.masterData
			if (!J0M || J0M == 'Invalid Date') {
				J0M = this.convertToDataZone(new Date())
			}
			if (!q0M || !q0M.length) {
				q0M = []
				q0M.push({ Date: STX.yyyymmddhhmmssmmm(J0M), DT: J0M })
			}
			if (this.layout.interval == 'tick') {
				r0M = i2t.clone(q0M[q0M.length - +'1'])
				if (J0M <= q0M[q0M.length - 1].DT) {
					if (F0M) {
						if (D0M || D0M === 0) {
							r0M[F0M] = D0M
						}
					} else {
						e0h = 'unde'
						e0h += 'f'
						e0h += 'ined'
						if (D0M || D0M === 0) {
							r0M.Close = D0M
							if (D0M > r0M.High || r0M.High === null) {
								r0M.High = D0M
							}
							if (D0M < r0M.Low || r0M.Low === null) {
								r0M.Low = D0M
							}
							if (r0M.Open === null) {
								r0M.Open = D0M
							}
						}
						if (u0M) {
							r0M.Volume += u0M
						}
						if (m0M || m0M === +'0') {
							r0M.Bid = m0M
						}
						if (Z0M || Z0M === 0) {
							r0M.Ask = Z0M
						}
						if (typeof r0M.Adj_Close != e0h) {
							r0M.Adj_Close = r0M.Close
						}
					}
				} else {
					if (F0M) {
						r0M['Date'] = STX.yyyymmddhhmmssmmm(J0M)
						r0M['DT'] = J0M
						r0M['Volume'] = 0
						if (D0M || D0M === 0) {
							r0M[F0M] = D0M
						}
					} else {
						r0M = {
							Date: i2t.yyyymmddhhmmssmmm(J0M),
							DT: J0M,
							Open: D0M,
							Close: D0M,
							High: D0M,
							Low: D0M,
							Volume: u0M,
							Bid: m0M,
							Ask: Z0M,
						}
					}
				}
				this.appendMasterData([r0M], H0M, x0M)
			} else {
				r0M = i2t.clone(q0M[q0M.length - 1])
				N0M = new i2t.Market({})
				Y0M = {
					begin: r0M.DT,
					interval: this.layout.interval,
					periodicity: 1,
					timeUnit: this.layout.timeUnit,
					inZone: this.dataZone,
					outZone: this.dataZone,
				}
				v0M = N0M.newIterator(Y0M)
				l0M = v0M.next()
				if (J0M < l0M) {
					if (F0M) {
						if (D0M || D0M === 0) {
							r0M[F0M] = D0M
						}
					} else {
						if (D0M || D0M === 0) {
							r0M.Close = D0M
							if (D0M > r0M.High || r0M.High === null) {
								r0M.High = D0M
							}
							if (D0M < r0M.Low || r0M.Low === null) {
								C78 = -1282543918
								V78 = 2061457344
								X78 = 2
								for (
									var n78 = '1' * 1;
									m0w.U68(n78.toString(), n78.toString().length, 21575) !== C78;
									n78++
								) {
									r0M.Low = D0M
									X78 += 2
								}
								if (m0w.M68(X78.toString(), X78.toString().length, 35559) !== V78) {
									r0M.Low = D0M
								}
							}
							if (r0M.Open === null) {
								r0M.Open = D0M
							}
						}
						if (u0M) {
							r0M.Volume += u0M
						}
						if (m0M || m0M === ('0' ^ 0)) {
							h38 = -1192975307
							t38 = -+'1040918715'
							Y38 = 2
							for (
								var a38 = 1;
								m0w.M68(a38.toString(), a38.toString().length, 20476) !== h38;
								a38++
							) {
								r0M.Bid = m0M
								Y38 += 2
							}
							if (m0w.M68(Y38.toString(), Y38.toString().length, 55228) !== t38) {
								r0M.Bid = m0M
							}
						}
						if (Z0M || Z0M === 0) {
							r0M.Ask = Z0M
						}
						if (typeof r0M.Adj_Close != 'undefined') {
							r0M.Adj_Close = r0M.Close
						}
					}
					this.appendMasterData([r0M], H0M, x0M)
				} else {
					S0M = []
					R0M = {
						begin: J0M,
						interval: this.layout.interval,
						periodicity: '1' ^ 0,
						timeUnit: this.layout.timeUnit,
						inZone: this.dataZone,
						outZone: this.dataZone,
					}
					k0M = N0M.newIterator(R0M)
					k0M.next()
					J0M = k0M.previous()
					while (l0M < J0M) {
						if (h0M.streamParameters.fillGaps) {
							Q0M = {
								Date: i2t.yyyymmddhhmmssmmm(l0M),
								DT: l0M,
								Close: r0M.Close,
								Open: r0M.Close,
								High: r0M.Close,
								Low: r0M.Close,
								Volume: +'0',
								Bid: r0M.Bid,
								Ask: r0M.Ask,
							}
							S0M.push(Q0M)
							if (S0M.length > '10000' >> 799075648) {
								O0h = ' '
								O0h += 'a'
								O0h += 't'
								O0h += ' '
								console.log(
									'StreamTrade: Too many gaps. Reached maximum ',
									S0M.length,
									O0h,
									Q0M.Date,
									'. No more will be added',
								)
								break
							}
						}
						l0M = v0M.next()
					}
					if (F0M) {
						r0M['Date'] = STX.yyyymmddhhmmssmmm(J0M)
						r0M['DT'] = J0M
						r0M['Volume'] = +'0'
						if (D0M || D0M === '0' * 1) {
							r0M[F0M] = D0M
						}
					} else {
						r0M = {
							Date: i2t.yyyymmddhhmmssmmm(l0M),
							DT: l0M,
							Open: D0M,
							Close: D0M,
							High: D0M,
							Low: D0M,
							Volume: u0M,
							Bid: m0M,
							Ask: Z0M,
						}
					}
					S0M.push(r0M)
					this.appendMasterData(S0M, H0M, x0M)
				}
			}
		}
		i2t.ChartEngine.prototype.appendMasterData = function(i3M, U3M, f3M) {
			var w3M, b3M, L3M, M3M, K0M, j3M, s3M, A3M, s0h, I3M, T3M, E3M, W3M, p3M
			w3M = this
			if (!f3M) {
				f3M = {}
			}
			if (!U3M) {
				U3M = this.chart
			}
			if (i3M.constructor == Object) {
				i3M = [i3M]
			}
			if (this.runPrepend('appendMasterData', [i3M, U3M, f3M])) {
				return
			}
			if (!i3M || !i3M.length) {
				return
			}
			b3M = i3M['0' ^ 0].DT
			if (!b3M) {
				b3M = i2t.strToDateTime(i3M['0' * 1].Date)
			}
			L3M = U3M.masterData
			if (!L3M || !L3M.length) {
				L3M = U3M.masterData = i2t.clone(i3M)
				for (M3M = 0; M3M < L3M.length; M3M++) {
					K0M = L3M[M3M]
					if (K0M.DT) {
						K0M.Date = i2t.yyyymmddhhmmssmmm(K0M.DT)
					} else {
						K0M.DT = i2t.strToDateTime(K0M.Date)
					}
					if (K0M.Volume && typeof K0M.Volume !== 'number') {
						K0M.Volume = parseInt(K0M.Volume, 10)
					}
					if (!i2t.ChartEngine.isDailyInterval(w3M.layout.interval)) {
						w3M.setDisplayDate(K0M)
					}
				}
			} else {
				M3M = L3M.length - 1
				while (M3M >= 0) {
					s3M = L3M[M3M].DT
					if (!s3M) {
						s3M = i2t.strToDateTime(L3M[M3M].Date)
					}
					if (s3M.getTime() <= b3M.getTime()) {
						m0w.B0w(6)
						A3M = m0w.u0w(0, '0')
						if (s3M.getTime() < b3M.getTime()) {
							A3M = 1
						}
						for (var o3M = 0; o3M < i3M.length; o3M++) {
							if (!A3M) {
								K0M = i3M[o3M]
								j3M = L3M.length < M3M + o3M ? L3M[M3M + o3M] : null
								if (j3M) {
									if (!K0M.Volume && j3M.Volume) {
										K0M.Volume = j3M.Volume
									}
									if (!f3M.allowReplaceOHL) {
										if (j3M.Open) {
											K0M.Open = j3M.Open
										}
										if (j3M.High > K0M.High) {
											K0M.High = j3M.High
										}
										if (j3M.Low && j3M.Low < K0M.Low) {
											K0M.Low = j3M.Low
										}
									}
								}
								for (var B3M in w3M.chart.series) {
									s0h = 'undefin'
									s0h += 'e'
									s0h += 'd'
									if (typeof K0M[B3M] == s0h && j3M) {
										K0M[B3M] = j3M[B3M]
									}
								}
								I3M = w3M.panels
								for (var y3M in I3M) {
									T3M = I3M[y3M]
									if (T3M.studyQuotes) {
										for (var t3M in T3M.studyQuotes) {
											if (!T3M.studyQuotes[t3M]) {
												continue
											}
											if (typeof K0M[t3M] == 'undefined' && j3M) {
												K0M[t3M] = j3M[t3M]
											}
										}
									}
								}
							}
							m0w.B0w(4)
							K0M = L3M[m0w.W0w(o3M, A3M, M3M)] = i3M[o3M]
							if (K0M.DT) {
								K0M.Date = i2t.yyyymmddhhmmssmmm(K0M.DT)
							} else {
								K0M.DT = i2t.strToDateTime(K0M.Date)
							}
							if (K0M.Volume && typeof K0M.Volume !== 'number') {
								K0M.Volume = parseInt(K0M.Volume, 10)
							}
							if (!i2t.ChartEngine.isDailyInterval(w3M.layout.interval)) {
								w3M.setDisplayDate(K0M)
							}
						}
						break
					}
					M3M--
				}
				for (M3M in w3M.plugins) {
					E3M = w3M.plugins[M3M]
					if (E3M.display) {
						if (E3M.appendMasterData) {
							E3M.appendMasterData(w3M, i3M, U3M)
						}
					}
				}
			}
			if (!this.masterData || !this.masterData.length) {
				this.masterData = L3M
			}
			if (!f3M.noCreateDataSet) {
				W3M = this.streamParameters
				if (++W3M.count > W3M.maxTicks || f3M.bypassGovernor) {
					clearTimeout(W3M.timeout)
					this.createDataSet(null, null, f3M)
					this.draw()
					this.updateChartAccessories()
					W3M.count = 0
					m0w.a0w(10)
					W3M.timeout = -m0w.W0w(1, '1')
				} else {
					p3M = this
					if (W3M.timeout == -1) {
						W3M.timeout = setTimeout(function() {
							m0w.L2t()
							p3M.createDataSet(null, null, f3M)
							p3M.draw()
							p3M.updateChartAccessories()
							p3M.streamParameters.count = 0
							m0w.a0w(2)
							p3M.streamParameters.timeout = -m0w.u0w(2147483647, '1')
						}, W3M.maxWait)
					}
				}
			}
			this.runAppend('appendMasterData', arguments)
		}
		i2t.ChartEngine.prototype.setMaxTicks = function(g3M, c3M) {
			var Z78, c78, b78, z3M
			if (!c3M) {
				c3M = {}
			}
			g3M = Math.round(g3M)
			if (g3M < 2) {
				Z78 = 1145134415
				c78 = -1682945072
				b78 = +'2'
				for (var E78 = 1; m0w.U68(E78.toString(), E78.toString().length, 9541) !== Z78; E78++) {
					g3M = 3
					b78 += 2
				}
				if (m0w.M68(b78.toString(), b78.toString().length, 38861) !== c78) {
					g3M = 3
				}
				g3M = 2
			}
			z3M = c3M.padding ? c3M.padding : 0
			this.layout.candleWidth = (this.chart.width - z3M) / g3M
			if (!this.layout.candleWidth) {
				this.layout.candleWidth = 8
			}
			this.chart.maxTicks = Math.round(this.chart.width / this.layout.candleWidth - 0.499)
			if (c3M.padding || c3M.padding === 0) {
				m0w.a0w(5)
				this.chart.scroll = m0w.W0w(g3M, 1)
			}
		}
		i2t.ChartEngine.prototype.construct = function() {
			this.stackPanel('chart', 'chart', 1)
			this.adjustPanelPositions()
			this.chart.panel = this.panels[this.chart.name]
			this.cx = 0
			this.cy = 0
			this.micropixels = 0
			this.chart.panel.subholder.appendChild(this.controls.home)
			this.callbackListeners = {}
			this.longHoldTime = 1000
		}
		i2t.ChartEngine.prototype.addEventListener = function(e3M, a3M) {
			var d3M
			if (!e3M) {
				e3M = +'933.33' !== (8570, 6060) ? ((526.49, 444) != (2940, 7255) ? '*' : 481.44) : !{}
			}
			m0w.M2t()
			d3M = this.callbackListeners[e3M]
			if (!d3M) {
				this.callbackListeners[e3M] = d3M = []
			}
			d3M.push(a3M)
			return { type: e3M, cb: a3M }
		}
		i2t.ChartEngine.prototype.removeEventListener = function(C3M, P3M) {
			var V3M
			if (typeof C3M != 'object') {
				C3M = { type: C3M, cb: P3M }
			}
			if (!C3M.type) {
				C3M.type =
					797 > (9140, 5130)
						? (+'7190', 9170) > 5190
							? ('416.05' - 0, +'3970') !== 9675
								? (0x16d, 674.03)
								: (180.29, 'B')
							: 243.99
						: '*'
			}
			V3M = this.callbackListeners[C3M.type]
			if (!V3M) {
				return
			}
			m0w.M2t()
			for (var n3M = 0; n3M < V3M.length; n3M++) {
				if (V3M[n3M] === C3M.cb) {
					V3M.splice(n3M)
					if (!V3M.length) {
						C3M[C3M.type] = null
					}
					return
				}
			}
		}
		i2t.ChartEngine.prototype.dispatch = function(D3M, J3M) {
			var q3M, G3M
			q3M = this
			if (this.callbacks[D3M]) {
				this.callbacks[D3M].call(this, J3M)
			}
			G3M = this.callbackListeners[D3M]
			if (G3M) {
				for (var O3M = 0; O3M < G3M.length; O3M++) {
					G3M[O3M].call(q3M, J3M)
				}
			}
			G3M = this.callbackListeners['*']
			if (G3M) {
				for (var r3M = 0; r3M < G3M.length; r3M++) {
					G3M[r3M].call(q3M, J3M)
				}
			}
		}
		i2t.ChartEngine.prototype.deleteYAxisIfUnused = function(Z3M, F3M) {
			var u3M, l3M, m3M
			u3M = this
			if (!F3M) {
				return
			}
			if (F3M === Z3M.yAxis) {
				return
			}
			for (var x3M in u3M.chart.seriesRenderers) {
				l3M = u3M.chart.seriesRenderers[x3M]
				if (l3M.params.yAxis === F3M) {
					if (l3M.seriesParams.length !== 0) {
						return
					}
				}
			}
			for (m3M = 0; m3M < Z3M.yaxisLHS.length; m3M++) {
				if (Z3M.yaxisLHS[m3M] === F3M) {
					Z3M.yaxisLHS.splice(m3M, 1)
				}
			}
			for (m3M = '1' | 1; m3M < Z3M.yaxisRHS.length; m3M++) {
				if (Z3M.yaxisRHS[m3M] === F3M) {
					Z3M.yaxisRHS.splice(m3M, 1)
				}
			}
			this.resizeCanvas()
			this.adjustPanelPositions()
		}
		i2t.ChartEngine.prototype.addYAxis = function(H3M, S3M) {
			var q0h, v0h, r88, H88, Z88, N3M, o0h
			q0h = 'le'
			q0h += 'f'
			q0h += 't'
			if (!S3M) {
				return
			}
			if (!H3M.yaxisLHS) {
				v0h = 'r'
				v0h += 'i'
				v0h += 'gh'
				v0h += 't'
				H3M.yaxisLHS = []
				H3M.yaxisRHS = []
				if (H3M.yAxis.position == v0h) {
					H3M.yaxisRHS.push(H3M.yAxis)
				} else {
					H3M.yaxisLHS.push(H3M.yAxis)
				}
			}
			r88 = 258090979
			m0w.a0w(6)
			H88 = -m0w.u0w(0, '1255779657')
			Z88 = +'2'
			for (var b88 = 1; m0w.U68(b88.toString(), b88.toString().length, 94242) !== r88; b88++) {
				N3M = H3M.yaxisLHS.concat(H3M.yaxisRHS)
				m0w.a0w(1)
				Z88 += m0w.W0w('2', 0)
			}
			if (m0w.M68(Z88.toString(), Z88.toString().length, '95162' << 1829348192) !== H88) {
				N3M = H3M.yaxisLHS.concat(H3M.yaxisRHS)
			}
			N3M = H3M.yaxisLHS.concat(H3M.yaxisRHS)
			for (var X3M = 0; X3M < N3M.length; X3M++) {
				if (N3M[X3M] === S3M) {
					return
				}
			}
			if (S3M.position === q0h) {
				H3M.yaxisLHS.unshift(S3M)
			} else {
				o0h = 'ri'
				o0h += 'g'
				o0h += 'h'
				o0h += 't'
				S3M.position = o0h
				H3M.yaxisRHS.push(S3M)
			}
			this.preAdjustScroll()
			this.resizeCanvas()
			this.adjustPanelPositions()
			this.postAdjustScroll()
		}
		i2t.ChartEngine.prototype.calculateYAxisPositions = function() {
			var Y3M, h3M, j2M, z0h, k3M, L2M, i2M, v3M, Q3M, R3M
			Y3M = this
			h3M = []
			for (var o2M in Y3M.charts) {
				h3M.push(o2M)
			}
			for (var w2M in Y3M.panels) {
				j2M = Y3M.panels[w2M]
				if (j2M.name === j2M.chart.name) {
					continue
				}
				h3M.push(w2M)
			}
			for (var K3M = 0; K3M < h3M.length; K3M++) {
				z0h = 'un'
				z0h += 'd'
				z0h += 'ef'
				z0h += 'ined'
				k3M = Y3M.panels[h3M[K3M]]
				if (!k3M) {
					continue
				}
				L2M = k3M.name === k3M.chart.name
				if (!k3M.yaxisLHS) {
					k3M.yaxisLHS = []
					k3M.yaxisRHS = []
					if (k3M.name === k3M.chart.name || k3M.yAxis.position) {
						if (k3M.yAxis.position == 'left') {
							k3M.yaxisLHS.push(k3M.yAxis)
						} else {
							k3M.yaxisRHS.push(k3M.yAxis)
						}
					} else {
						i2M = k3M.chart.panel.yAxis.position
						if (!i2M || i2M == 'right') {
							k3M.yaxisRHS.push(k3M.yAxis)
						} else {
							k3M.yaxisLHS.push(k3M.yAxis)
						}
					}
				}
				if (!k3M.yAxis.width && k3M.yAxis.width !== 0) {
					k3M.yAxis.width = Y3M.yaxisWidth
				}
				k3M.yaxisTotalWidthRight = 0
				k3M.yaxisTotalWidthLeft = 0
				for (v3M = 0; v3M < k3M.yaxisLHS.length; v3M++) {
					Q3M = k3M.yaxisLHS[v3M]
					k3M.yaxisTotalWidthLeft += Q3M.width
					Q3M.justifyRight =
						Q3M.justifyRight === null ? k3M.chart.yAxis.justifyRight : Q3M.justifyRight
					if (Q3M.justifyRight === null) {
						Q3M.justifyRight = !!{}
					}
				}
				for (v3M = 0; v3M < k3M.yaxisRHS.length; v3M++) {
					Q3M = k3M.yaxisRHS[v3M]
					k3M.yaxisTotalWidthRight += Q3M.width
				}
				R3M = 0
				for (v3M = 0; v3M < k3M.yaxisLHS.length; v3M++) {
					Q3M = k3M.yaxisLHS[v3M]
					Q3M.left = R3M
					R3M += Q3M.width
				}
				R3M = Y3M.width - k3M.yaxisTotalWidthRight
				for (v3M = 0; v3M < k3M.yaxisRHS.length; v3M++) {
					Q3M = k3M.yaxisRHS[v3M]
					Q3M.left = R3M
					R3M += Q3M.width
				}
				if (typeof Y3M.yaxisLeft != z0h) {
					k3M.chart.yaxisPaddingRight = Y3M.yaxisLeft
				}
				k3M.yaxisCalculatedPaddingRight = k3M.yaxisTotalWidthRight
				if (k3M.chart.yaxisPaddingRight || k3M.chart.yaxisPaddingRight === 0) {
					k3M.yaxisCalculatedPaddingRight = k3M.chart.yaxisPaddingRight
				}
				k3M.yaxisCalculatedPaddingLeft = k3M.yaxisTotalWidthLeft
				if (k3M.chart.yaxisPaddingLeft || k3M.chart.yaxisPaddingLeft === '0' * 1) {
					k3M.yaxisCalculatedPaddingLeft = k3M.chart.yaxisPaddingLeft
				}
				if (L2M) {
					k3M.left = k3M.yaxisCalculatedPaddingLeft
					k3M.right = Y3M.width - k3M.yaxisCalculatedPaddingRight
				} else {
					k3M.left = k3M.chart.panel.left
					k3M.right = k3M.chart.panel.right
				}
				k3M.width = k3M.right - k3M.left
				k3M.handle.style.left = k3M.left + 'px'
				k3M.handle.style.width = k3M.width + 'px'
				if (L2M) {
					k3M.chart.left = k3M.left
					k3M.chart.right = k3M.right
					k3M.chart.width = k3M.right - k3M.left
				}
			}
		}
		i2t.ChartEngine.prototype.initializeChart = function(f2M) {
			var b0h,
				c0h,
				r0h,
				D0h,
				L0h,
				c2M,
				s2M,
				t2M,
				b2M,
				G0h,
				p0h,
				J2M,
				P0h,
				Z0h,
				H0h,
				T2M,
				A2M,
				v38,
				q38,
				o38,
				r2M,
				E0h,
				S0h,
				C2M,
				I2M,
				a2M,
				z2M,
				d2M,
				G2M,
				C0h,
				X0h,
				V0h,
				P2M
			b0h = '0'
			b0h += 'p'
			b0h += 'x'
			c0h = 'abs'
			c0h += 'olute'
			r0h = '2'
			r0h += 'd'
			D0h = '2'
			D0h += 'd'
			L0h = 'ab'
			L0h += 'so'
			L0h += 'lu'
			L0h += 'te'
			c2M = this
			if (this.runPrepend('initializeChart', arguments)) {
				return
			}
			if (!this.chart.symbolObject.symbol) {
				this.chart.symbolObject.symbol = this.chart.symbol
			}
			if (this.locale) {
				this.setLocale(this.locale)
			}
			if (!this.displayZone && i2t.ChartEngine.defaultDisplayTimeZone) {
				this.setTimeZone(null, i2t.ChartEngine.defaultDisplayTimeZone)
			}
			this.calculateYAxisPositions()
			this.micropixels = 0
			m0w.M2t()
			if (f2M) {
				this.chart.container = f2M
			} else {
				f2M = this.chart.container
			}
			f2M.stx = this
			if (!f2M.CIQRegistered) {
				f2M.CIQRegistered = !0
				i2t.ChartEngine.registeredContainers.push(f2M)
			}
			if (i2t.isSurface) {
				if (!this.gesture) {
					this.gesture = new MSGesture()
					if (this.manageTouchAndMouse) {
						this.gesture.target = f2M
					} else {
						this.gesture.target = document.body
					}
					this.gesturePointerId = null
				}
			}
			this.registerHTMLElements()
			s2M = this.chart.canvas
			t2M = this.chart.tempCanvas
			b2M = this.floatCanvas
			if (s2M && document.createElement('canvas').getContext) {
				if (!s2M.id) {
					f2M.removeChild(s2M)
					this.chart.canvas = null
				}
				if (t2M && !t2M.id) {
					f2M.removeChild(t2M)
					this.chart.tempCanvas = null
				}
				if (b2M && !b2M.id) {
					f2M.removeChild(b2M)
					this.floatCanvas = null
				}
			} else {
				if (this.layout.candleWidth < this.minimumCandleWidth) {
					this.layout.candleWidth = this.minimumCandleWidth
				}
				if (this.layout.candleWidth > 200) {
					this.layout.candleWidth = 8
				}
			}
			if (!this.chart.canvas) {
				G0h = 'ca'
				G0h += 'nva'
				G0h += 's'
				s2M = this.chart.canvas = document.createElement(G0h)
			}
			if (!this.chart.canvas.getContext) {
				p0h = 'b'
				p0h += 'loc'
				p0h += 'k'
				s2M = this.chart.canvas = f2M.querySelectorAll('#ie8canvas')[0]
				if (!s2M.getContext) {
					if (window.G_vmlCanvasManager) {
						G_vmlCanvasManager.initElement(s2M)
					}
				}
				s2M.style.display = p0h
			} else {
				f2M.appendChild(s2M)
			}
			s2M.style.position = L0h
			s2M.style.left = '0px'
			J2M = s2M.context = this.chart.context = s2M.getContext(D0h)
			J2M.lineWidth = +'1'
			if (!this.chart.tempCanvas) {
				P0h = 'can'
				P0h += 'v'
				P0h += 'a'
				P0h += 's'
				t2M = this.chart.tempCanvas = document.createElement(P0h)
			}
			if (!this.chart.tempCanvas.getContext) {
				t2M = this.chart.tempCanvas = f2M.querySelectorAll('#ie8canvasTemp')[0]
				if (!t2M.getContext) {
					if (window.G_vmlCanvasManager) {
						G_vmlCanvasManager.initElement(t2M)
					}
				}
				t2M.style.display = 'block'
			} else {
				f2M.appendChild(t2M)
			}
			t2M.style.position = 'absolute'
			t2M.style.left = '0px'
			t2M.context = this.chart.tempCanvas.getContext(r0h)
			t2M.context.lineWidth = 1
			if (!this.floatCanvas) {
				b2M = this.floatCanvas = document.createElement('canvas')
			}
			if (!this.floatCanvas.getContext) {
				Z0h = 'b'
				Z0h += 'l'
				Z0h += 'o'
				Z0h += 'ck'
				H0h = '#ie8canvasF'
				H0h += 'loat'
				b2M = this.floatCanvas = f2M.querySelectorAll(H0h)[0]
				if (!b2M.getContext) {
					if (window.G_vmlCanvasManager) {
						G_vmlCanvasManager.initElement(b2M)
					}
				}
				b2M.style.display = Z0h
			} else {
				f2M.appendChild(b2M)
			}
			b2M.style.position = c0h
			b2M.style.left = b0h
			b2M.context = b2M.getContext('2d')
			b2M.context.lineWidth = 1
			this.resizeCanvas()
			if (i2t.isAndroid) {
				this.chart.tempCanvas.ontouchstart = function(Z2M) {
					m0w.M2t()
					if (Z2M.preventDefault) {
						Z2M.preventDefault()
					}
				}
				this.floatCanvas.ontouchstart = function(l2M) {
					if (l2M.preventDefault) {
						l2M.preventDefault()
					}
				}
			}
			T2M = this.chart
			A2M = this.panels
			A2M.chart.display = T2M.symbol
			if (T2M.symbolDisplay) {
				v38 = 1939742088
				q38 = -1595030263
				o38 = 2
				for (var G38 = 1; m0w.U68(G38.toString(), G38.toString().length, +'37038') !== v38; G38++) {
					A2M.chart.display = T2M.symbolDisplay
					o38 += 2
				}
				if (m0w.U68(o38.toString(), o38.toString().length, 89361) !== q38) {
					A2M.chart.display = T2M.symbolDisplay
				}
			}
			this.adjustPanelPositions()
			this.chart.panel = A2M[T2M.name]
			this.calculateYAxisMargins(T2M.panel.yAxis)
			this.initialWhitespace = this.preferences.whitespace
			if (T2M.dataSet && T2M.dataSet.length > 0) {
				T2M.scroll = Math.floor(T2M.width / this.layout.candleWidth)
				r2M = Math.round(this.preferences.whitespace / this.layout.candleWidth)
				T2M.scroll -= r2M
			}
			if (i2t.touchDevice) {
				E0h = '#vectorTras'
				E0h += 'hCan'
				S0h = '.ove'
				S0h += 'rlayEdi'
				S0h += 't'
				C2M = w2t(S0h, f2M)
				I2M = w2t('#overlayTrashCan', f2M)
				a2M = w2t(E0h, f2M)
				if (C2M) {
					i2t.safeClickTouch(
						C2M,
						(function(x2M) {
							return function(H2M) {
								m0w.L2t()
								x2M.deleteHighlighted(!![], !![])
							}
						})(this),
					)
					if (I2M) {
						i2t.safeClickTouch(
							I2M,
							(function(S2M) {
								m0w.L2t()
								return function(X2M) {
									m0w.M2t()
									S2M.deleteHighlighted(!!'')
								}
							})(this),
						)
					}
				} else if (I2M) {
					i2t.safeClickTouch(
						I2M,
						(function(N2M) {
							m0w.M2t()
							return function(Q2M) {
								m0w.L2t()
								N2M.deleteHighlighted(!!1)
							}
						})(this),
					)
				}
				if (a2M) {
					i2t.safeClickTouch(
						a2M,
						(function(R2M) {
							var B48, g48, j48
							B48 = -1464983818
							g48 = +'588163643'
							j48 = 2
							for (
								var F48 = 1;
								m0w.M68(F48.toString(), F48.toString().length, 20206) !== B48;
								F48++
							) {
								m0w.L2t()
								j48 += 2
							}
							if (m0w.M68(j48.toString(), j48.toString().length, 38909) !== g48) {
								m0w.L2t()
							}
							return function(h2M) {
								m0w.L2t()
								R2M.deleteHighlighted(!!'1')
							}
						})(this),
					)
				}
			}
			if (this.manageTouchAndMouse) {
				this.registerTouchAndMouseEvents()
			}
			f2M.onmouseout = (function(K2M) {
				return function(j6M) {
					K2M.handleMouseOut(j6M)
				}
			})(this)
			if (this.controls.chartControls) {
				this.controls.chartControls.style.display = 'block'
			}
			this.abortDrawings()
			this.undoStamps = []
			for (var m2M in A2M) {
				z2M = A2M[m2M]
				if (z2M.markerHolder) {
					f2M.removeChild(z2M.markerHolder)
					z2M.markerHolder = null
				}
			}
			for (var D2M in c2M.plugins) {
				d2M = c2M.plugins[D2M]
				if (d2M.display) {
					if (d2M.initializeChart) {
						d2M.initializeChart(c2M)
					}
				}
			}
			if (!this.resizeListenerInitialized) {
				this.resizeListenerInitialized = !![]
				G2M = function(M6M) {
					return function(L6M) {
						m0w.L2t()
						M6M.resizeChart()
					}
				}
				if (window.attachEvent) {
					C0h = 'onr'
					C0h += 'e'
					C0h += 'si'
					C0h += 'ze'
					window.attachEvent(C0h, G2M(this))
				} else {
					X0h = 're'
					X0h += 'si'
					X0h += 'z'
					X0h += 'e'
					V0h = 'r'
					V0h += 'e'
					V0h += 'size'
					P2M = G2M(this)
					window.addEventListener(V0h, P2M, !0)
					this.eventListeners.push({ element: window, event: X0h, function: P2M })
				}
			}
			if (T2M.baseline.userLevel) {
				T2M.baseline.userLevel = null
			}
			this.setResizeTimer(this.resizeDetectMS)
			this.runAppend('initializeChart', arguments)
		}
		i2t.ChartEngine.prototype.destroy = function() {
			var W6M, w6M
			W6M = this
			m0w.L2t()
			this.setResizeTimer(0)
			if (this.quoteDriver) {
				this.quoteDriver.die()
			}
			this.styles = {}
			for (var i6M = 0; i6M < this.eventListeners.length; i6M++) {
				w6M = W6M.eventListeners[i6M]
				w6M.element.removeEventListener(w6M.event, w6M['function'])
			}
		}
		i2t.ChartEngine.prototype.handleMouseOut = function(o6M) {
			var Q0h, f6M, U6M
			o6M = o6M || window.event
			if (!i2t.withinElement(this.chart.container, o6M.pageX, o6M.pageY)) {
				Q0h = 'handleMouseOu'
				Q0h += 't'
				if (this.runPrepend('handleMouseOut', arguments)) {
					return
				}
				this.undisplayCrosshairs()
				this.grabbingScreen = ![]
				this.touches = []
				this.touching = ![]
				if (this.activeDrawing && this.userPointerDown) {
					this.userPointerDown = !1
					this.drawingLine = !{}
					f6M = this.backOutY(o6M.pageY)
					U6M = this.backOutX(o6M.pageX)
					this.drawingClick(this.currentPanel, U6M, f6M)
				}
				i2t.ChartEngine.insideChart = !{}
				this.displaySticky()
				this.findHighlights(![], !![])
				this.runAppend(Q0h, arguments)
			}
		}
		i2t.ChartEngine.prototype.registerTouchAndMouseEvents = function() {
			var n0h, p6M, T6M, b6M, s6M, A0h, i0h, R0h, f0h, W0h, t6M
			n0h = '#ho'
			n0h += 'me'
			if (this.touchAndMouseEventsRegistered) {
				return
			}
			this.touchAndMouseEventsRegistered = !''
			p6M = this.chart.container
			T6M = w2t(n0h, this.controls.chartControls)
			b6M = w2t('#zoomIn', this.controls.chartControls)
			s6M = w2t('#zoomOut', this.controls.chartControls)
			if (!i2t.touchDevice) {
				p6M.addEventListener(
					'mousemove',
					(function(B6M) {
						m0w.M2t()
						return function(E6M) {
							B6M.mousemove(E6M)
						}
					})(this),
					![],
				)
				p6M.addEventListener(
					'mousedown',
					(function(A6M) {
						m0w.L2t()
						return function(I6M) {
							m0w.L2t()
							A6M.mousedown(I6M)
						}
					})(this),
					![],
				)
				p6M.addEventListener(
					'mouseup',
					(function(y6M) {
						return function(g6M) {
							m0w.M2t()
							y6M.mouseup(g6M)
						}
					})(this),
					!!'',
				)
			} else {
				if (i2t.isSurface) {
					p6M.addEventListener(
						'mousemove',
						(function(c6M) {
							return function(z6M) {
								c6M.msMouseMoveProxy(z6M)
							}
						})(this),
						![],
					)
					p6M.addEventListener(
						'mousedown',
						(function(e6M) {
							return function(d6M) {
								e6M.msMouseDownProxy(d6M)
							}
						})(this),
						![],
					)
					p6M.addEventListener(
						'mouseup',
						(function(a6M) {
							return function(C6M) {
								a6M.msMouseUpProxy(C6M)
							}
						})(this),
						!!'',
					)
					if (window.navigator.msPointerEnabled) {
						A0h = 'M'
						A0h += 'SP'
						A0h += 'ointerUp'
						i0h = 'MSGe'
						i0h += 'stureCha'
						i0h += 'ng'
						i0h += 'e'
						p6M.addEventListener(
							'MSPointerDown',
							(function(V6M) {
								m0w.L2t()
								return function(n6M) {
									m0w.L2t()
									return V6M.startProxy(n6M)
								}
							})(this),
							!!0,
						)
						p6M.addEventListener(
							'MSGestureStart',
							(function(P6M) {
								return function(G6M) {
									P6M.gestureInEffect = !!{}
								}
							})(this),
							![],
						)
						p6M.addEventListener(
							i0h,
							(function(O6M) {
								m0w.L2t()
								return function(r6M) {
									return O6M.touchmove(r6M)
								}
							})(this),
							!{},
						)
						p6M.addEventListener(
							'MSGestureEnd',
							(function(D6M) {
								var D68, P68, r68
								D68 = -1770747719
								P68 = 1152899043
								r68 = 2
								for (
									var Z68 = '1' & 2147483647;
									m0w.U68(Z68.toString(), Z68.toString().length, 63440) !== D68;
									Z68++
								) {
									m0w.M2t()
									r68 += 2
								}
								if (m0w.U68(r68.toString(), r68.toString().length, +'41319') !== P68) {
									m0w.M2t()
								}
								return function(J6M) {
									D6M.gestureInEffect = !{}
									return D6M.touchend(J6M)
								}
							})(this),
							!{},
						)
						p6M.addEventListener(
							'MSPointerMove',
							(function(q6M) {
								return function(m6M) {
									m0w.L2t()
									q6M.moveProxy(m6M)
								}
							})(this),
							!1,
						)
						p6M.addEventListener(
							A0h,
							(function(Z6M) {
								return function(F6M) {
									m0w.L2t()
									return Z6M.endProxy(F6M)
								}
							})(this),
							![],
						)
					} else {
						p6M.addEventListener(
							'pointerdown',
							(function(u6M) {
								m0w.L2t()
								return function(l6M) {
									m0w.M2t()
									return u6M.startProxy(l6M)
								}
							})(this),
							!'1',
						)
						p6M.addEventListener(
							'MSGestureStart',
							(function(x6M) {
								return function(H6M) {
									m0w.M2t()
									x6M.gestureInEffect = !!1
								}
							})(this),
							!!'',
						)
						p6M.addEventListener(
							'MSGestureChange',
							(function(S6M) {
								m0w.M2t()
								return function(X6M) {
									return S6M.touchmove(X6M)
								}
							})(this),
							!1,
						)
						p6M.addEventListener(
							'MSGestureEnd',
							(function(N6M) {
								return function(k6M) {
									N6M.gestureInEffect = !!''
									return N6M.touchend(k6M)
								}
							})(this),
							![],
						)
						p6M.addEventListener(
							'pointermove',
							(function(v6M) {
								m0w.L2t()
								return function(Q6M) {
									m0w.L2t()
									v6M.moveProxy(Q6M)
								}
							})(this),
							!1,
						)
						p6M.addEventListener(
							'pointerup',
							(function(Y6M) {
								m0w.M2t()
								return function(R6M) {
									return Y6M.endProxy(R6M)
								}
							})(this),
							![],
						)
					}
				} else {
					R0h = 't'
					R0h += 'ouc'
					R0h += 'hend'
					if (!i2t.isAndroid && !i2t.ipad && !i2t.iphone) {
						f0h = 'mo'
						f0h += 'usemov'
						f0h += 'e'
						p6M.addEventListener(
							f0h,
							(function(h6M) {
								m0w.L2t()
								return function(K6M) {
									m0w.L2t()
									h6M.iosMouseMoveProxy(K6M)
								}
							})(this),
							![],
						)
						p6M.addEventListener(
							'mousedown',
							(function(L9M) {
								return function(i9M) {
									m0w.M2t()
									L9M.iosMouseDownProxy(i9M)
								}
							})(this),
							!1,
						)
						p6M.addEventListener(
							'mouseup',
							(function(w9M) {
								return function(W9M) {
									w9M.iosMouseUpProxy(W9M)
								}
							})(this),
							!'1',
						)
					}
					p6M.addEventListener(
						'touchstart',
						(function(f9M) {
							return function(U9M) {
								f9M.touchstart(U9M)
							}
						})(this),
						!{},
					)
					p6M.addEventListener(
						'touchmove',
						(function(p9M) {
							return function(b9M) {
								m0w.L2t()
								p9M.touchmove(b9M)
							}
						})(this),
						!1,
					)
					p6M.addEventListener(
						R0h,
						(function(s9M) {
							return function(t9M) {
								s9M.touchend(t9M)
							}
						})(this),
						![],
					)
					if (b6M) {
						b6M.removeAttribute('onMouseOver')
						b6M.removeAttribute('onMouseOut')
					}
					if (s6M) {
						W0h = 'on'
						W0h += 'Mou'
						W0h += 's'
						W0h += 'eOut'
						s6M.removeAttribute('onMouseOver')
						s6M.removeAttribute(W0h)
					}
				}
			}
			m0w.L2t()
			t6M = i2t.wheelEvent
			if (this.captureMouseWheelEvents) {
				p6M.addEventListener(
					t6M,
					(function(T9M) {
						m0w.L2t()
						return function(B9M) {
							T9M.mouseWheel(B9M)
						}
					})(this),
					!{},
				)
			}
		}
		i2t.ChartEngine.prototype.rightClickHighlighted = function() {
			var y1h, K0h
			y1h = 'right'
			y1h += 'Cl'
			y1h += 'ick'
			y1h += 'Highlighted'
			K0h = 'rightClic'
			K0h += 'kHighlighted'
			if (this.runPrepend(K0h, arguments)) {
				return
			}
			this.deleteHighlighted(!!{})
			this.runAppend(y1h, arguments)
		}
		i2t.ChartEngine.prototype.deleteHighlighted = function(D9M, G9M) {
			var E9M, g9M, V9M, P9M, C9M, i78, A78, f78, A9M, c9M, d9M, a9M
			E9M = this
			if (this.runPrepend('deleteHighlighted', arguments)) {
				return
			}
			this.cancelTouchSingleClick = !!1
			i2t.clearCanvas(this.chart.tempCanvas, this)
			for (var I9M = this.drawingObjects.length - +'1'; I9M >= 0; I9M--) {
				g9M = E9M.drawingObjects[I9M]
				if (g9M.highlighted && !g9M.permanent) {
					V9M = g9M.abort()
					if (!V9M) {
						P9M = i2t.shallowClone(E9M.drawingObjects)
						E9M.drawingObjects.splice(I9M, 1)
						E9M.undoStamp(P9M, i2t.shallowClone(E9M.drawingObjects))
					}
					E9M.changeOccurred('vector')
				}
			}
			for (var y9M in E9M.overlays) {
				C9M = E9M.overlays[y9M]
				if (C9M.highlight && !C9M.permanent) {
					if (D9M || G9M) {
						E9M.rightClickOverlay(y9M, G9M)
					} else {
						E9M.removeOverlay(y9M)
					}
				}
			}
			i78 = -1493114374
			A78 = 458237940
			f78 = 2
			for (var W78 = 1; m0w.U68(W78.toString(), W78.toString().length, 64263) !== i78; W78++) {
				A9M = this.currentPanel.chart
				f78 += +'2'
			}
			if (m0w.M68(f78.toString(), f78.toString().length, 50365) !== A78) {
				A9M = this.currentPanel.chart
			}
			for (var n9M in A9M.seriesRenderers) {
				c9M = A9M.seriesRenderers[n9M]
				for (var z9M = c9M.seriesParams.length - 1; z9M >= +'0'; z9M--) {
					d9M = c9M.seriesParams[z9M]
					if (d9M.highlight && !d9M.permanent) {
						c9M.removeSeries(d9M.field)
					}
				}
			}
			a9M = ![]
			for (var r9M in A9M.series) {
				if (A9M.series[r9M].parameters.isComparison) {
					a9M = !!{}
				}
			}
			if (!a9M) {
				this.setComparison(!1, A9M)
			}
			this.draw()
			if (this.controls.mSticky) {
				this.controls.mSticky.style.display = 'none'
				this.controls.mSticky.children[0].innerHTML = ''
			}
			this.runAppend('deleteHighlighted', arguments)
		}
		i2t.ChartEngine.prototype.panelExists = function(Z9M) {
			var J9M, m9M
			J9M = this
			for (var q9M in J9M.panels) {
				m9M = J9M.panels[q9M]
				if (m9M.name == Z9M) {
					return !''
				}
			}
			return !'1'
		}
		i2t.ChartEngine.prototype.hideCrosshairs = function() {
			var I78, F78, l78
			m0w.M2t()
			I78 = 294004905
			m0w.a0w(10)
			F78 = m0w.W0w(1, '1686271888')
			l78 = 2
			for (var M78 = 1; m0w.M68(M78.toString(), M78.toString().length, 92455) !== I78; M78++) {
				this.displayCrosshairs = !![]
				l78 += 2
			}
			if (m0w.M68(l78.toString(), l78.toString().length, 6030) !== F78) {
				this.displayCrosshairs = ![]
			}
			this.displayCrosshairs = !!0
		}
		i2t.ChartEngine.prototype.showCrosshairs = function() {
			this.displayCrosshairs = !!'1'
		}
		i2t.ChartEngine.prototype.grabHandle = function(F9M) {
			if (this.runPrepend('grabHandle', arguments)) {
				return
			}
			if (!F9M) {
				return
			}
			i2t.ChartEngine.crosshairY = F9M.top + this.top
			i2t.ChartEngine.resizingPanel = F9M
			this.drawTemporaryPanel()
			m0w.L2t()
			i2t.appendClassName(F9M.handle, 'stx-grab')
			this.runAppend('grabHandle', arguments)
		}
		i2t.ChartEngine.prototype.releaseHandle = function() {
			var k1h
			if (this.runPrepend('releaseHandle', arguments)) {
				return
			}
			i2t.clearCanvas(this.chart.tempCanvas, this)
			this.resizePanels()
			m0w.L2t()
			if (i2t.ChartEngine.resizingPanel) {
				k1h = 'st'
				k1h += 'x'
				k1h += '-'
				k1h += 'grab'
				i2t.unappendClassName(i2t.ChartEngine.resizingPanel.handle, k1h)
			}
			i2t.ChartEngine.resizingPanel = null
			this.runAppend('releaseHandle', arguments)
		}
		i2t.ChartEngine.prototype.storePanels = function() {
			var l9M, x9M, u9M
			l9M = this
			if (!this.layout) {
				this.layout = {}
			}
			m0w.L2t()
			x9M = this.layout
			x9M.panels = {}
			for (var H9M in l9M.panels) {
				u9M = l9M.panels[H9M]
				x9M.panels[u9M.name] = { percent: u9M.percent, display: u9M.display }
			}
		}
		i2t.ChartEngine.prototype.savePanels = function(S9M) {
			var u1h
			this.storePanels()
			if (S9M !== !!'') {
				u1h = 'la'
				u1h += 'yout'
				this.changeOccurred(u1h)
			}
		}
		i2t.ChartEngine.prototype.resolveY = function(X9M) {
			return this.top + X9M
		}
		i2t.ChartEngine.prototype.resolveX = function(N9M) {
			return this.left + N9M
		}
		i2t.ChartEngine.prototype.backOutY = function(k9M) {
			return k9M - this.top
		}
		i2t.ChartEngine.prototype.backOutX = function(v9M) {
			return v9M - this.left
		}
		i2t.ChartEngine.prototype.cleanupRemovedStudy = function(Q9M) {
			var R9M
			R9M = this
			if (Q9M.study.removeFN) {
				Q9M.study.removeFN(this, Q9M)
			}
			m0w.M2t()
			if (Q9M.study.feed && Q9M.study.quoteFeed) {
				this.detachTagAlongQuoteFeed(Q9M.study.feed)
			}
			for (var h9M in R9M.plugins) {
				if (
					h9M.indexOf(
						((242.77, 180) < 6043 ? '{' : 'O') +
							Q9M.id +
							(8590 <= +'363.8'
								? (!!0, !!{})
								: (855.19, 979.92) < ('599.17' - 0, 2390)
								? 7750 == (96.54, +'4750')
									? '6.86e+3' ^ 0
									: '}'
								: ('0x1819' >> 20821088, !![])),
					) > -1
				) {
					delete R9M.plugins[h9M]
				}
			}
			if (this.layout.studies) {
				delete this.layout.studies[Q9M.name]
			}
		}
		i2t.ChartEngine.prototype.privateDeletePanel = function(K9M) {
			var j4M, i4M, o4M
			j4M = this
			if (this.layout.studies) {
				i4M = this.layout.studies[K9M.name]
				if (i4M) {
					this.cleanupRemovedStudy(i4M)
				}
			}
			delete this.panels[K9M.name]
			if (i2t.Studies) {
				for (var w4M in i2t.Studies.studyPanelMap) {
					if (i2t.Studies.studyPanelMap[w4M].panel == K9M.name) {
						delete i2t.Studies.studyPanelMap[w4M]
					}
				}
			}
			for (var M4M in j4M.overlays) {
				if (j4M.overlays[M4M].panel == K9M.name) {
					delete j4M.layout.studies[M4M]
					delete j4M.overlays[M4M]
				}
			}
			if (K9M.holder) {
				this.chart.container.removeChild(K9M.holder)
				if (this.getMarkerArray) {
					o4M = this.getMarkerArray('panelName', K9M.name)
					for (var L4M = 0; L4M < o4M.length; L4M++) {
						j4M.removeFromHolder(o4M[L4M])
					}
				}
			}
			K9M.handle.parentNode.removeChild(K9M.handle)
		}
		i2t.ChartEngine.prototype.panelClose = function(f4M) {
			var w1h, x1h, U4M, p4M
			w1h = 'panelCl'
			w1h += 'os'
			w1h += 'e'
			x1h = 'pan'
			x1h += 'elClos'
			x1h += 'e'
			U4M = this
			if (!f4M) {
				return
			}
			if (this.runPrepend(x1h, arguments)) {
				return
			}
			this.cancelTouchSingleClick = !!{}
			m0w.L2t()
			i2t.ChartEngine.drawingLine = !!''
			if (f4M.soloing) {
				this.panelSolo(f4M)
			}
			if (this.charts[f4M.name]) {
				for (var b4M in U4M.panels) {
					p4M = U4M.panels[b4M]
					if (p4M.chart.name == f4M.name) {
						U4M.privateDeletePanel(p4M)
					}
				}
				delete this.charts[f4M.name]
			} else {
				this.privateDeletePanel(f4M)
			}
			this.showCrosshairs()
			this.createDataSet()
			this.adjustPanelPositions()
			this.draw()
			this.savePanels()
			this.runAppend(w1h, arguments)
		}
		i2t.ChartEngine.prototype.deleteAllPanels = function() {
			var s4M, T4M
			s4M = this
			for (var t4M in s4M.panels) {
				T4M = s4M.panels[t4M]
				s4M.privateDeletePanel(T4M)
			}
			this.layout.panels = {}
			m0w.M2t()
			this.panels = {}
		}
		i2t.ChartEngine.prototype.panelUp = function(I4M) {
			var y4M, c4M, z4M, E4M, e4M
			y4M = this
			this.cancelTouchSingleClick = !0
			i2t.ChartEngine.drawingLine = ![]
			this.showCrosshairs()
			c4M = {}
			z4M = +'0'
			for (E4M in y4M.panels) {
				if (E4M == I4M.name) {
					break
				}
				z4M++
			}
			if (!z4M) {
				return
			}
			e4M = +'0'
			for (E4M in y4M.panels) {
				if (e4M == z4M - 1) {
					c4M[I4M.name] = I4M
				}
				if (E4M == I4M.name) {
					continue
				}
				c4M[E4M] = y4M.panels[E4M]
				e4M++
			}
			this.panels = c4M
			this.adjustPanelPositions()
			this.draw()
			this.savePanels()
		}
		i2t.ChartEngine.prototype.panelDown = function(C4M) {
			var a4M, V4M, n4M, d4M, G4M, P4M
			a4M = this
			this.cancelTouchSingleClick = !0
			i2t.ChartEngine.drawingLine = !{}
			this.showCrosshairs()
			V4M = {}
			m0w.B0w(2)
			n4M = m0w.W0w(2147483647, '0')
			for (d4M in a4M.panels) {
				if (d4M == C4M.name) {
					break
				}
				n4M++
			}
			G4M = 0
			for (d4M in a4M.panels) {
				G4M++
			}
			if (n4M == G4M - 1) {
				return
			}
			m0w.B0w(7)
			P4M = m0w.u0w('0', 1557818848)
			m0w.M2t()
			for (d4M in a4M.panels) {
				if (d4M == C4M.name) {
					P4M++
					continue
				}
				V4M[d4M] = a4M.panels[d4M]
				if (P4M == n4M + 1) {
					V4M[C4M.name] = C4M
				}
				P4M++
			}
			this.panels = V4M
			this.adjustPanelPositions()
			this.draw()
			this.savePanels()
		}
		i2t.ChartEngine.prototype.panelSolo = function(O4M) {
			var r4M, T38, N38, J38, D4M, h1h
			r4M = this
			m0w.L2t()
			T38 = 435193446
			N38 = 470128981
			J38 = 2
			for (var g38 = 1; m0w.U68(g38.toString(), g38.toString().length, 23774) !== T38; g38++) {
				this.cancelTouchSingleClick = !!'1'
				i2t.ChartEngine.drawingLine = ![]
				J38 += 2
			}
			if (m0w.U68(J38.toString(), J38.toString().length, 11530) !== N38) {
				this.cancelTouchSingleClick = !'1'
				i2t.ChartEngine.drawingLine = !''
			}
			this.showCrosshairs()
			D4M = !![]
			if (O4M.soloing) {
				h1h = 'stx_sol'
				h1h += 'o_lit'
				D4M = !{}
				O4M.soloing = !!0
				i2t.unappendClassName(O4M.solo, h1h)
				O4M.percent = O4M.oldPercent
				this.panels.chart.percent = this.panels.chart.oldPercent
			} else {
				O4M.soloing = !!{}
				i2t.appendClassName(O4M.solo, 'stx_solo_lit')
				if (O4M.name == 'chart') {
					O4M.oldPercent = O4M.percent
				} else {
					O4M.oldPercent = O4M.percent
					this.panels.chart.oldPercent = this.panels.chart.percent
					m0w.a0w(6)
					var K3h = m0w.u0w(20, 21)
					O4M.percent = K3h - this.panels.chart.percent
				}
			}
			for (var J4M in r4M.panels) {
				r4M.panels[J4M].hidden = D4M
			}
			this.panels.chart.hidden = !!0
			O4M.hidden = !{}
			this.adjustPanelPositions()
			this.draw()
			this.savePanels()
		}
		i2t.ChartEngine.prototype.calculatePanelPercent = function(q4M) {
			var m4M
			m4M = q4M.bottom - q4M.top
			m0w.M2t()
			q4M.percent = m4M / this.chart.canvasHeight
		}
		i2t.ChartEngine.prototype.resizePanels = function() {
			var l4M, S4M, H4M, F4M, u4M, E38, C38, V38
			l4M = this
			if (!i2t.ChartEngine.resizingPanel) {
				return
			}
			S4M = !!{}
			if (i2t.ChartEngine.crosshairY > this.resolveY(i2t.ChartEngine.resizingPanel.top)) {
				E38 = -1077697042
				C38 = -1147305587
				V38 = 2
				for (var Q38 = +'1'; m0w.M68(Q38.toString(), Q38.toString().length, 9232) !== E38; Q38++) {
					S4M = !![]
					V38 += 2
				}
				if (m0w.M68(V38.toString(), V38.toString().length, 38675) !== C38) {
					S4M = !!''
				}
			}
			if (S4M) {
				u4M = null
				for (H4M in l4M.panels) {
					if (l4M.panels[H4M] == i2t.ChartEngine.resizingPanel) {
						break
					}
					if (l4M.panels[H4M].hidden) {
						continue
					}
					u4M = l4M.panels[H4M]
				}
				F4M = this.backOutY(i2t.ChartEngine.crosshairY)
				if (F4M < u4M.top + 30) {
					F4M = u4M.top + 30
					i2t.ChartEngine.crosshairY = this.resolveY(F4M)
				}
				u4M.bottom = F4M
				i2t.ChartEngine.resizingPanel.top = F4M
				this.calculatePanelPercent(u4M)
				this.calculatePanelPercent(i2t.ChartEngine.resizingPanel)
			} else {
				u4M = null
				for (H4M in l4M.panels) {
					if (l4M.panels[H4M] == i2t.ChartEngine.resizingPanel) {
						break
					}
					if (l4M.panels[H4M].hidden) {
						continue
					}
					u4M = l4M.panels[H4M]
				}
				F4M = this.backOutY(i2t.ChartEngine.crosshairY)
				if (F4M > i2t.ChartEngine.resizingPanel.bottom - 30) {
					m0w.a0w(13)
					var k4h = m0w.u0w(510, 15, 36)
					F4M = i2t.ChartEngine.resizingPanel.bottom - k4h
					i2t.ChartEngine.crosshairY = this.resolveY(F4M)
				}
				u4M.bottom = F4M
				i2t.ChartEngine.resizingPanel.top = F4M
				this.calculatePanelPercent(u4M)
				this.calculatePanelPercent(i2t.ChartEngine.resizingPanel)
			}
			this.adjustPanelPositions()
			this.draw()
			this.savePanels()
		}
		i2t.ChartEngine.prototype.adjustPanelPositions = function() {
			var v4M, j7M, i7M, w7M, M7M, L7M, Q4M, K4M, R4M, N4M, h4M, t1h, Y1h, d1h, k4M, a1h
			v4M = this
			if (!this.chart.symbol) {
				return
			}
			if (this.runPrepend('adjustPanelPositions', arguments)) {
				return
			}
			j7M = 0
			i7M = this.chart.canvasHeight
			m0w.B0w(6)
			w7M = m0w.u0w(0, '0')
			M7M = !!0
			L7M = 0
			Q4M = 0
			K4M = !1
			for (R4M in v4M.panels) {
				N4M = v4M.panels[R4M]
				if (isNaN(N4M.percent) || N4M.percent <= 0) {
					N4M.percent = +'0.05'
				}
				if (N4M.hidden) {
					continue
				}
				L7M += N4M.percent
				Q4M++
				if (N4M.soloing) {
					K4M = !!1
				}
			}
			for (R4M in v4M.panels) {
				h4M = 0
				N4M = v4M.panels[R4M]
				if (N4M.hidden) {
					if (N4M.markerHolder) {
						N4M.markerHolder.style.display = 'none'
					}
					continue
				}
				if (!M7M) {
					t1h = 'n'
					t1h += 'o'
					t1h += 'n'
					t1h += 'e'
					M7M = !![]
					N4M.up.style.display = t1h
				} else {
					if (v4M.displayIconsUpDown) {
						N4M.up.style.display = ''
					}
				}
				if (K4M) {
					if (N4M.soloing) {
						if (v4M.displayIconsSolo) {
							N4M.solo.style.display = ''
						}
					} else {
						N4M.solo.style.display = 'none'
					}
				} else if (Q4M == 1 || Q4M == 2) {
					N4M.solo.style.display = 'none'
				} else {
					if (v4M.displayIconsSolo) {
						N4M.solo.style.display = ''
					}
				}
				if (Q4M == +'1') {
					Y1h = 'no'
					Y1h += 'n'
					Y1h += 'e'
					N4M.down.style.display = Y1h
				} else {
					if (v4M.displayIconsUpDown) {
						N4M.down.style.display = ''
					}
				}
				if (N4M.editFunction) {
					N4M.edit.style.display = ''
				} else {
					d1h = 'n'
					d1h += 'on'
					d1h += 'e'
					N4M.edit.style.display = d1h
				}
				N4M.percent = N4M.percent / L7M
				N4M.top = j7M
				N4M.bottom = N4M.top + i7M * N4M.percent
				N4M.height = N4M.bottom - N4M.top
				if (N4M.chart.name == N4M.name) {
					N4M.chart.top = N4M.top
					N4M.chart.bottom = N4M.bottom
					N4M.chart.height = N4M.height
				}
				k4M = N4M.yAxis
				if (k4M.zoom && k4M.height > ('0' & 2147483647)) {
					h4M = k4M.zoom / k4M.height
				}
				v4M.adjustYAxisHeightOffset(N4M, k4M)
				k4M.top = N4M.top + k4M.topOffset
				k4M.bottom = N4M.bottom - k4M.bottomOffset
				k4M.height = k4M.bottom - k4M.top
				if (h4M) {
					k4M.zoom = h4M * k4M.height
					if (k4M.zoom > k4M.height) {
						k4M.zoom = 0
						k4M.scroll = 0
					}
				}
				j7M = N4M.bottom
				if (!k4M.high && k4M.high !== +'0') {
					k4M.high = 100
					k4M.low = 0
					k4M.shadow = 100
				}
				k4M.multiplier = k4M.height / k4M.shadow
				if (N4M.holder) {
					a1h = '0p'
					a1h += 'x'
					N4M.holder.style.right = '0px'
					N4M.holder.style.top = N4M.top + 'px'
					N4M.holder.style.left = '0px'
					N4M.holder.style.height = N4M.height + 'px'
					N4M.subholder.style.left = N4M.left + 'px'
					N4M.subholder.style.width = N4M.width + 'px'
					N4M.subholder.style.top = a1h
					if (k4M.height >= +'0') {
						N4M.subholder.style.height = k4M.height + 'px'
					}
				}
			}
			if (R4M) {
				this.panels[R4M].down.style.display = 'none'
			}
			if (Q4M == 2 && !K4M) {
				this.panels.chart.solo.style.display = ''
			}
			if (this.controls.chartControls && this.panels.chart) {
				m0w.B0w(13)
				var u4h = m0w.W0w(50, 18, 4)
				this.controls.chartControls.style.bottom =
					this.chart.canvasHeight - this.panels.chart.bottom + u4h + 'px'
			}
			this.clearPixelCache()
			this.adjustDrawings()
			this.runAppend('adjustPanelPositions', arguments)
		}
		i2t.ChartEngine.prototype.addChart = function(W7M, o7M) {
			o7M.name = W7M
			this.charts[W7M] = o7M
		}
		i2t.ChartEngine.prototype.createPanel = function(E7M, A7M, U7M, p7M) {
			var f7M, b7M, s7M, t7M, T7M
			f7M = this
			if (this.runPrepend('createPanel', arguments)) {
				return
			}
			if (!p7M) {
				p7M = 'chart'
			}
			b7M = this.chart.canvasHeight
			if (!U7M) {
				m0w.B0w(10)
				U7M = m0w.u0w(0.2, b7M)
			}
			m0w.M2t()
			m0w.a0w(37)
			s7M = m0w.u0w(U7M, b7M)
			m0w.a0w(6)
			t7M = m0w.u0w(s7M, 1)
			for (var B7M in f7M.panels) {
				T7M = f7M.panels[B7M]
				T7M.percent *= t7M
			}
			this.stackPanel(E7M, A7M, s7M, p7M)
			this.adjustPanelPositions()
			this.savePanels(!{})
			this.runAppend('createPanel', arguments)
		}
		i2t.ChartEngine.prototype.configurePanelControls = function(I7M) {
			var J1h, N1h, T1h, y7M, B1h, g1h
			J1h = '.st'
			J1h += 'x-ico-down'
			N1h = '.st'
			N1h += 'x-'
			N1h += 'ico-u'
			N1h += 'p'
			T1h = '.stx-panel-con'
			T1h += 'trol'
			m0w.M2t()
			y7M = I7M.name == I7M.chart.name
			I7M.icons = w2t(T1h, I7M.holder)
			I7M.close = I7M.icons.children[4]
			I7M.close = w2t('.stx-ico-close', I7M.icons).parentNode
			i2t.appendClassName(I7M.icons, 'stx-show')
			I7M.title = w2t('.stx-panel-title', I7M.icons)
			I7M.up = w2t(N1h, I7M.icons).parentNode
			I7M.solo = w2t('.stx-ico-focus', I7M.icons).parentNode
			I7M.down = w2t(J1h, I7M.icons).parentNode
			I7M.edit = w2t('.stx-ico-edit', I7M.icons).parentNode
			if (!this.displayIconsUpDown) {
				I7M.up.style.display = 'none'
			}
			if (!this.displayIconsUpDown) {
				B1h = 'n'
				B1h += 'o'
				B1h += 'n'
				B1h += 'e'
				I7M.down.style.display = B1h
			}
			if (!this.displayIconsSolo) {
				I7M.solo.style.display = 'none'
			}
			if (!this.displayIconsClose) {
				I7M.close.style.display = 'none'
			}
			if (!this.displayPanelResize) {
				I7M.handle.style.display = 'none'
			}
			I7M.title.innerHTML = ''
			I7M.title.appendChild(document.createTextNode(I7M.display))
			if (y7M) {
				g1h = 'stx-ch'
				g1h += 'art-panel'
				i2t.appendClassName(I7M.title, 'chart-title')
				i2t.appendClassName(I7M.icons, g1h)
			}
			if (!i2t.touchDevice || i2t.isSurface) {
				I7M.icons.onmouseover = (function(g7M) {
					m0w.M2t()
					return function(c7M) {
						m0w.M2t()
						g7M.hideCrosshairs()
					}
				})(this)
			}
			if (!i2t.touchDevice || i2t.isSurface) {
				I7M.icons.onmouseout = (function(z7M) {
					return function(e7M) {
						z7M.showCrosshairs()
					}
				})(this)
			}
			if (!i2t.touchDevice || i2t.isSurface) {
				I7M.handle.onmouseover = (function(d7M) {
					m0w.L2t()
					return function() {
						d7M.hideCrosshairs()
					}
				})(this)
			}
			if (!i2t.touchDevice || i2t.isSurface) {
				I7M.handle.onmouseout = (function(a7M) {
					m0w.M2t()
					return function() {
						m0w.L2t()
						a7M.showCrosshairs()
					}
				})(this)
			}
			if (i2t.touchDevice) {
				I7M.handle.ontouchstart = (function(C7M, V7M) {
					return function(n7M) {
						if (C7M.resizingPanel) {
							return
						}
						n7M.preventDefault()
						C7M.grabHandle(V7M)
					}
				})(this, I7M)
				I7M.handle.ontouchend = (function(P7M) {
					return function(G7M) {
						m0w.M2t()
						G7M.preventDefault()
						P7M.releaseHandle()
					}
				})(this)
			}
			I7M.handle.onmousedown = (function(O7M, r7M) {
				return function(D7M) {
					if (!D7M) {
						D7M = event
					}
					m0w.L2t()
					O7M.grabHandle(r7M)
				}
			})(this, I7M)
			I7M.handle.onmouseup = (function(J7M) {
				return function(q7M) {
					if (!q7M) {
						q7M = event
					}
					J7M.releaseHandle()
				}
			})(this)
			i2t.safeClickTouch(
				I7M.close,
				(function(m7M, Z7M) {
					return function() {
						m0w.M2t()
						m7M.panelClose(Z7M)
					}
				})(this, I7M),
			)
			i2t.safeClickTouch(
				I7M.up,
				(function(F7M, u7M) {
					m0w.M2t()
					return function() {
						F7M.panelUp(u7M)
					}
				})(this, I7M),
			)
			i2t.safeClickTouch(
				I7M.down,
				(function(l7M, x7M) {
					return function() {
						l7M.panelDown(x7M)
					}
				})(this, I7M),
			)
			i2t.safeClickTouch(
				I7M.solo,
				(function(H7M, S7M) {
					return function() {
						m0w.M2t()
						H7M.panelSolo(S7M)
					}
				})(this, I7M),
			)
			if (I7M.name == 'chart') {
				I7M.close.style.display = 'none'
			}
		}
		i2t.ChartEngine.prototype.stackPanel = function(Y7M, k7M, K7M, v7M) {
			var j1h, N7M, Q7M, R7M, X7M, h7M
			j1h = 'd'
			j1h += 'i'
			j1h += 'v'
			if (this.runPrepend('stackPanel', arguments)) {
				return
			}
			if (!v7M) {
				v7M = 'chart'
			}
			N7M = this.charts[v7M]
			m0w.B0w(62)
			Q7M = m0w.u0w(v7M, k7M)
			R7M = null
			if (Q7M) {
				Y7M = N7M.symbol
				if (N7M.symbolDisplay) {
					Y7M = N7M.symbolDisplay
				}
				R7M = N7M.yAxis
			}
			X7M = this.panels[k7M] = new i2t.ChartEngine.Panel(k7M, R7M)
			if (!Q7M && N7M.yAxis) {
				X7M.yAxis.width = N7M.yAxis.width
			}
			X7M.percent = K7M
			X7M.chart = N7M
			X7M.display = Y7M
			X7M.holder = i2t.newChild(this.container, j1h, 'stx-holder')
			X7M.subholder = i2t.newChild(X7M.holder, 'div', 'stx-subholder')
			X7M.subholder.style.zIndex = 1
			X7M.holder.setAttribute('cq-panel-name', k7M)
			X7M.subholder.setAttribute('cq-panel-name', k7M)
			h7M = Q7M ? 'stx-panel-chart' : 'stx-panel-study'
			i2t.appendClassName(X7M.holder, h7M)
			X7M.subholder.appendChild(this.controls.iconsTemplate.cloneNode(!!{}))
			X7M.handle = this.controls.handleTemplate.cloneNode(!'')
			this.container.appendChild(X7M.handle)
			X7M.handle.id = null
			X7M.handle.panel = X7M
			m0w.M2t()
			this.configurePanelControls(X7M)
			this.resizeCanvas()
			this.runAppend('stackPanel', arguments)
		}
		i2t.ChartEngine.prototype.setPanelEdit = function(j8M, M8M) {
			j8M.editFunction = M8M
			i2t.safeClickTouch(j8M.edit, M8M)
			this.adjustPanelPositions()
		}
		i2t.ChartEngine.prototype.drawPanels = function() {
			var e1h, i8M, W8M, M1h, m1h, L8M, l1h, F1h, I1h, w8M, U1h
			e1h = 'drawP'
			e1h += 'ane'
			e1h += 'ls'
			i8M = this
			if (this.runPrepend('drawPanels', arguments)) {
				return
			}
			W8M = ![]
			for (var o8M in i8M.panels) {
				M1h = 's'
				M1h += 'egm'
				M1h += 'en'
				M1h += 't'
				m1h = 's'
				m1h += 'tx_panel_bo'
				m1h += 'rder'
				L8M = i8M.panels[o8M]
				L8M.axisDrawn = !{}
				if (L8M.title.innerHTML != L8M.display) {
					L8M.title.innerHTML = ''
					L8M.title.appendChild(document.createTextNode(L8M.display))
				}
				i2t.appendClassName(L8M.icons, 'stx-show')
				if (L8M.hidden) {
					l1h = 'n'
					l1h += 'o'
					l1h += 'ne'
					F1h = 'no'
					F1h += 'ne'
					I1h = 'stx-sh'
					I1h += 'o'
					I1h += 'w'
					i2t.unappendClassName(L8M.icons, I1h)
					L8M.handle.style.display = F1h
					L8M.holder.style.display = l1h
					continue
				} else {
					if (!i8M.displayIconsUpDown) {
						L8M.up.style.display = 'none'
					}
					if (!i8M.displayIconsUpDown) {
						L8M.down.style.display = 'none'
					}
					if (!i8M.displayIconsSolo) {
						L8M.solo.style.display = 'none'
					}
					L8M.holder.style.display = 'block'
				}
				if (!W8M) {
					L8M.handle.style.display = 'none'
					W8M = !!{}
					continue
				}
				w8M = L8M.top
				w8M = Math.round(w8M) + 0.5
				i8M.plotLine(
					L8M.left,
					L8M.right,
					w8M,
					w8M,
					i8M.canvasStyle(m1h),
					M1h,
					i8M.chart.context,
					!{},
					{},
				)
				if (!i8M.displayPanelResize) {
					U1h = 'n'
					U1h += 'one'
					L8M.handle.style.display = U1h
				} else {
					L8M.handle.style.display = ''
				}
				L8M.handle.style.top = w8M - L8M.handle.offsetHeight / 2 + 'px'
			}
			this.runAppend(e1h, arguments)
		}
		i2t.ChartEngine.prototype.touchSingleClick = function(s8M, U8M, p8M) {
			var b8M, f8M
			m0w.M2t()
			b8M = this
			f8M = arguments
			return function() {
				;(function() {
					var O1h, t8M, T8M, B8M
					if (!this.cancelTouchSingleClick) {
						O1h = 'touchSing'
						O1h += 'l'
						O1h += 'eCli'
						O1h += 'ck'
						if (this.runPrepend(O1h, f8M)) {
							return
						}
						if (this.editingAnnotation) {
							return
						}
						this.clicks = { s1MS: -1, e1MS: -+'1', s2MS: -1, e2MS: -1 }
						if (!this.displayCrosshairs) {
							return
						}
						if (!this.displayInitialized) {
							return
						}
						if (this.openDialog !== '') {
							return
						}
						if (U8M < this.left || U8M > this.right || p8M < this.top || p8M > this.bottom) {
							return
						}
						t8M = this.backOutY(i2t.ChartEngine.crosshairY)
						T8M = this.backOutX(i2t.ChartEngine.crosshairX)
						this.currentPanel = this.whichPanel(t8M)
						if (
							!i2t.Drawing ||
							!this.currentVectorParameters.vectorType ||
							!i2t.Drawing[this.currentVectorParameters.vectorType] ||
							!new i2t.Drawing[this.currentVectorParameters.vectorType]().dragToDraw
						) {
							if (!this.drawingClick(this.currentPanel, T8M, t8M)) {
								if (!this.layout.crosshair) {
									i2t.ChartEngine.crosshairY = 0
									m0w.B0w(7)
									i2t.ChartEngine.crosshairX = m0w.W0w('0', 1560778080)
									this.cx = this.backOutX(i2t.ChartEngine.crosshairX)
									this.cy = this.backOutY(i2t.ChartEngine.crosshairY)
									this.findHighlights()
									i2t.ChartEngine.crosshairY = p8M
									i2t.ChartEngine.crosshairX = U8M
									B8M = this.container.getBoundingClientRect()
									this.top = B8M.top
									this.left = B8M.left
									this.right = this.left + this.width
									this.bottom = this.top + this.height
									this.cx = this.backOutX(i2t.ChartEngine.crosshairX)
									this.cy = this.backOutY(i2t.ChartEngine.crosshairY)
									if (this.currentPanel && this.currentPanel.chart.dataSet) {
										this.crosshairTick = this.tickFromPixel(this.cx, this.currentPanel.chart)
										this.crosshairValue = this.adjustIfNecessary(
											this.currentPanel,
											this.crosshairTick,
											this.valueFromPixel(this.cy, this.currentPanel),
										)
									}
									this.headsUpHR()
									this.findHighlights(!![])
								}
							}
							if (!this.currentVectorParameters.vectorType) {
								this.dispatch('tap', { stx: this, panel: this.currentPanel, x: T8M, y: t8M })
							}
						}
					}
					b8M.cancelTouchSingleClick = !!0
					this.runAppend('touchSingleClick', f8M)
				}.apply(b8M, f8M))
			}
		}
		i2t.ChartEngine.prototype.touchDoubleClick = function(y8M, A8M, I8M) {
			var E8M, d48, a48, T48
			if (
				A8M < this.left ||
				A8M > this.right ||
				I8M < this.panels.chart.top ||
				I8M > this.panels.chart.bottom
			) {
				return
			}
			if (this.editingAnnotation) {
				return
			}
			if (this.runPrepend('touchDoubleClick', arguments)) {
				return
			}
			if (i2t.ChartEngine.drawingLine) {
				this.undo()
			} else {
				if (this.anyHighlighted) {
					this.deleteHighlighted()
				} else {
					E8M = this.currentPanel.yAxis
					if (
						E8M.scroll == (E8M.initialMarginTop - E8M.initialMarginBottom) / 2 &&
						E8M.zoom == E8M.initialMarginTop + E8M.initialMarginBottom
					) {
						this.home()
					} else {
						this.calculateYAxisMargins(this.currentPanel.yAxis)
					}
					this.draw()
				}
			}
			this.clicks = { s1MS: -1, e1MS: -+'1', s2MS: -1, e2MS: -1 }
			d48 = 2043598524
			a48 = 1021327513
			T48 = +'2'
			for (var J48 = 1; m0w.U68(J48.toString(), J48.toString().length, 87213) !== d48; J48++) {
				this.runAppend('touchDoubleClick', arguments)
				T48 += 2
			}
			if (m0w.M68(T48.toString(), T48.toString().length, 17617) !== a48) {
				this.runAppend('', arguments)
			}
		}
		i2t.ChartEngine.prototype.startProxy = function(g8M) {
			var Q88, n88, i88
			if (g8M.pointerType == +'4' || g8M.pointerType == 'mouse') {
				Q88 = -152194507
				n88 = 2022842557
				i88 = 2
				for (
					var f88 = 1;
					m0w.U68(f88.toString(), f88.toString().length, '74675' * 1) !== Q88;
					f88++
				) {
					this.mouseMode = !!1
					i88 += 2
				}
				if (m0w.M68(i88.toString(), i88.toString().length, 99178) !== n88) {
					this.mouseMode = !!''
				}
			} else {
				this.mouseMode = !{}
			}
			if (this.mouseMode) {
				return
			}
			this.touches[this.touches.length] = {
				pointerId: g8M.pointerId,
				pageX: g8M.clientX,
				pageY: g8M.clientY,
			}
			this.changedTouches = [{ pointerId: g8M.pointerId, pageX: g8M.clientX, pageY: g8M.clientY }]
			if (!this.gestureInEffect && this.touches.length == 1) {
				this.gesturePointerId = g8M.pointerId
				this.overrideGesture = !1
				if (!this.gesture) {
					return
				}
				this.gesture.addPointer(g8M.pointerId)
				this.touchstart(g8M)
			} else {
				this.gesture.stop()
				this.touchstart(g8M)
			}
		}
		i2t.ChartEngine.prototype.moveProxy = function(c8M) {
			if (c8M.pointerType == 4 || c8M.pointerType == 'mouse') {
				this.mouseMode = !!{}
			} else {
				this.mouseMode = !{}
			}
			if (this.mouseMode) {
				return
			}
			m0w.M2t()
			if (!this.gestureInEffect) {
				this.touchmove(c8M)
			}
		}
		i2t.ChartEngine.prototype.endProxy = function(e8M) {
			var d8M, a8M
			d8M = this
			if (this.mouseMode) {
				return
			}
			a8M = this.touches.length
			for (var z8M = 0; z8M < this.touches.length; z8M++) {
				if (d8M.touches[z8M].pointerId == e8M.pointerId) {
					d8M.touches.splice(z8M, 1)
					break
				}
			}
			if (z8M == a8M) {
				this.touches = []
				this.grabbingScreen = !!0
				this.touching = !{}
				return
			}
			this.changedTouches = [{ pointerId: e8M.pointerId, pageX: e8M.clientX, pageY: e8M.clientY }]
			if (!this.gestureInEffect) {
				this.touchend(e8M)
			}
		}
		i2t.ChartEngine.prototype.msMouseMoveProxy = function(C8M) {
			if (this.touches.length || !this.mouseMode) {
				return
			}
			m0w.M2t()
			this.mousemove(C8M)
		}
		i2t.ChartEngine.prototype.msMouseDownProxy = function(V8M) {
			if (!this.mouseMode) {
				return
			}
			this.mousedown(V8M)
		}
		i2t.ChartEngine.prototype.msMouseUpProxy = function(n8M) {
			if (!this.mouseMode) {
				return
			}
			this.mouseup(n8M)
		}
		i2t.ChartEngine.prototype.iosMouseMoveProxy = function(P8M) {
			if (this.touching) {
				return
			}
			m0w.M2t()
			this.mousemove(P8M)
		}
		i2t.ChartEngine.prototype.iosMouseDownProxy = function(G8M) {
			if (this.touching) {
				this.mouseMode = !'1'
				return
			}
			this.mouseMode = !''
			this.mousedown(G8M)
		}
		i2t.ChartEngine.prototype.iosMouseUpProxy = function(O8M) {
			if (this.touching) {
				return
			}
			m0w.L2t()
			this.mouseup(O8M)
		}
		i2t.ChartEngine.prototype.rawWatermark = function(r8M, D8M, J8M, q8M) {
			this.canvasFont('stx_watermark', r8M)
			m0w.L2t()
			r8M.fillStyle = this.defaultColor
			r8M.globalAlpha = 0.5
			this.chart.context.textBaseline = 'alphabetic'
			r8M.fillText(q8M, D8M, J8M)
			r8M.globalAlpha = 1
		}
		i2t.ChartEngine.prototype.watermark = function(l8M, m8M) {
			var v1h, s1h, Z8M, F8M, u8M
			v1h = 'mid'
			v1h += 'dle'
			s1h = 'le'
			s1h += 'f'
			s1h += 't'
			if (m8M && typeof m8M != 'object') {
				m8M = { h: arguments[1], v: arguments[2], text: arguments[+'3'] }
			}
			m8M = {
				h: m8M.h || s1h,
				v: m8M.v || 'bottom',
				text: m8M.text || '',
				hOffset: m8M.hOffset || 10,
				vOffset: m8M.vOffset || 20,
			}
			if (!this.chart.context) {
				return
			}
			Z8M = this.panels[l8M]
			if (!Z8M || Z8M.hidden) {
				return
			}
			F8M = Z8M.yAxis.bottom - m8M.vOffset
			if (m8M.v == 'top') {
				F8M = Z8M.top + m8M.vOffset
			} else if (m8M.v == v1h) {
				F8M = (Z8M.top + Z8M.yAxis.bottom) / +'2'
			}
			this.chart.context.save()
			this.canvasFont('stx_watermark')
			this.canvasColor('stx_watermark')
			this.chart.context.textBaseline = 'alphabetic'
			u8M = Z8M.left + m8M.hOffset
			if (m8M.h == 'right') {
				u8M = Z8M.right - m8M.hOffset
			} else if (m8M.h == 'center') {
				m0w.a0w(63)
				var w4h = m0w.W0w(4, 13, 19)
				u8M = (Z8M.right + Z8M.left - this.chart.context.measureText(m8M.text).width) / w4h
			}
			this.chart.context.globalAlpha = 0.5
			this.chart.context.fillText(m8M.text, u8M, F8M)
			this.chart.context.globalAlpha = 1
			this.chart.context.restore()
		}
		i2t.ChartEngine.prototype.preAdjustScroll = function(x8M) {
			if (!x8M) {
				x8M = this.chart
			}
			this.previousAdjust = { chart: x8M, scroll: x8M.scroll, maxTicks: x8M.maxTicks }
		}
		i2t.ChartEngine.prototype.postAdjustScroll = function() {
			var H8M
			if (!this.previousAdjust) {
				return
			}
			H8M = this.previousAdjust.chart
			H8M.scroll = this.previousAdjust.scroll + (H8M.maxTicks - this.previousAdjust.maxTicks)
			if (this.displayInitialized) {
				this.draw()
			}
		}
		i2t.ChartEngine.prototype.adjustDrawings = function() {
			var X8M, N8M
			X8M = this
			for (var S8M = '0' | 0; S8M < this.drawingObjects.length; S8M++) {
				N8M = X8M.drawingObjects[S8M]
				if (X8M.panels[N8M.panelName]) {
					N8M.adjust()
				}
			}
		}
		i2t.ChartEngine.prototype.getNextInterval = function(Y8M, k8M, v8M) {
			var l48, m48, M48, Q8M
			if (!k8M) {
				k8M = 1
			}
			if (v8M !== ![]) {
				l48 = 803827843
				m48 = +'1735520951'
				M48 = 2
				for (var e48 = 1; m0w.U68(e48.toString(), e48.toString().length, +'91228') !== l48; e48++) {
					v8M = !'1'
					M48 += 2
				}
				if (m0w.M68(M48.toString(), M48.toString().length, 51254) !== m48) {
					v8M = !![]
				}
			}
			Q8M = this.standardMarketIterator(Y8M, v8M ? this.dataZone : this.displayZone)
			if (k8M < 1) {
				m0w.B0w(54)
				return Q8M.previous(m0w.u0w(k8M, 1))
			}
			return Q8M.next(k8M)
		}
		i2t.ChartEngine.prototype.standardMarketIterator = function(L5M, R8M, h8M) {
			var o1h, q1h, K8M, j5M, A68, f68, R68, M5M
			o1h = 't'
			o1h += 'i'
			o1h += 'ck'
			q1h = 't'
			q1h += 'ic'
			q1h += 'k'
			K8M = R8M ? R8M : this.dataZone
			j5M = h8M ? h8M : this.chart
			A68 = 1185747132
			f68 = -1554378133
			R68 = 2
			for (
				var K68 = 1;
				m0w.M68(K68.toString(), K68.toString().length, '62561' | 16480) !== A68;
				K68++
			) {
				M5M = {
					begin: L5M,
					interval: this.layout.interval != 'tick' ? 5 : this.layout.interval,
					periodicity:
						this.layout.interval === 'tick'
							? this.chart.xAxis.futureTicksInterval
							: this.layout.periodicity,
					timeUnit: this.layout.timeUnit,
					inZone: this.dataZone,
					outZone: K8M,
				}
				R68 += 2
			}
			if (m0w.U68(R68.toString(), R68.toString().length, 73326) !== f68) {
				M5M = {
					begin: L5M,
					interval: this.layout.interval !== 'tick' ? '0' << 1069112032 : this.layout.interval,
					periodicity:
						this.layout.interval == 'periodicity'
							? this.chart.xAxis.futureTicksInterval
							: this.layout.periodicity,
					timeUnit: this.layout.timeUnit,
					inZone: this.dataZone,
					outZone: K8M,
				}
			}
			M5M = {
				begin: L5M,
				interval: this.layout.interval == q1h ? 1 : this.layout.interval,
				periodicity:
					this.layout.interval == o1h
						? this.chart.xAxis.futureTicksInterval
						: this.layout.periodicity,
				timeUnit: this.layout.timeUnit,
				inZone: this.dataZone,
				outZone: K8M,
			}
			return j5M.market.newIterator(M5M)
		}
		i2t.ChartEngine.prototype.zoomSet = function(o5M, i5M) {
			var z1h, s5M, w5M, p5M, W5M, f5M, U5M, b5M
			z1h = 'volu'
			z1h += 'me_ca'
			z1h += 'ndle'
			s5M = this.chart.scroll
			m0w.a0w(7)
			W5M = m0w.W0w('0', 531748320)
			f5M = 0
			if (this.isHome()) {
				m0w.B0w(6)
				var h4h = m0w.u0w(6, 1878754982)
				w5M = i5M.dataSet.length - ('1' << h4h)
				m0w.B0w(64)
				var t4h = m0w.W0w(6, 16, 1, 4)
				W5M = this.layout.candleWidth / t4h
				m0w.B0w(37)
				f5M = m0w.W0w(o5M, 2)
			} else {
				w5M = this.tickFromPixel(this.chart.width / ('2' & 2147483647), i5M)
			}
			m0w.M2t()
			p5M = i5M.dataSet.length - 1 - w5M
			U5M = Math.floor(this.pixelFromTick(w5M, i5M) + W5M)
			this.setCandleWidth(o5M)
			if (this.layout.chartType !== z1h) {
				this.micropixels = 0
				this.chart.scroll = Math.floor((U5M - W5M) / o5M) + 1 + p5M
				b5M = Math.floor(this.pixelFromTick(w5M, i5M) + f5M)
				m0w.B0w(6)
				this.micropixels = m0w.W0w(b5M, U5M)
			}
			i5M.spanLock = ![]
			this.draw()
			this.doDisplayCrosshairs()
			this.updateChartAccessories()
		}
		i2t.ChartEngine.prototype.zoomOut = function(I5M, B5M) {
			var t5M, T5M, E5M, g5M, A5M
			t5M = this
			if (this.runPrepend('zoomOut', arguments)) {
				return
			}
			function c5M(z5M) {
				return function(e5M) {
					T5M.zoomSet(e5M, z5M)
					if (T5M.animations.zoom.hasCompleted) {
						if (T5M.runAppend('zoomOut', arguments)) {
							return
						}
						T5M.changeOccurred('layout')
					}
				}
			}
			this.grabbingScreen = !{}
			if (i2t.ChartEngine.insideChart) {
				i2t.unappendClassName(this.container, 'stx-drag-chart')
			}
			if (this.preferences.zoomOutSpeed) {
				B5M = this.preferences.zoomOutSpeed
			} else if (!B5M) {
				B5M = 1.3
			}
			if (I5M && I5M.preventDefault) {
				I5M.preventDefault()
			}
			this.cancelTouchSingleClick = !![]
			T5M = this
			m0w.L2t()
			for (var y5M in t5M.charts) {
				E5M = t5M.charts[y5M]
				if (i2t.ipad && E5M.maxTicks > i2t.ChartEngine.ipadMaxTicks) {
					return
				}
				g5M = Math.round(E5M.maxTicks * B5M)
				A5M = t5M.chart.width / g5M
				if (A5M < t5M.minimumCandleWidth) {
					A5M = t5M.minimumCandleWidth
				}
				t5M.layout.span = null
				t5M.animations.zoom.run(c5M(E5M), t5M.layout.candleWidth, A5M)
			}
		}
		i2t.ChartEngine.prototype.mouseWheel = function(d5M) {
			var C5M, a5M, r5M, V5M, P48, r48, H48, n5M, P5M, G5M, O5M, e68, O68, s68
			if (this.runPrepend('mouseWheel', arguments)) {
				return
			}
			if (!d5M) {
				d5M = event
			}
			if (d5M.preventDefault) {
				d5M.preventDefault()
			}
			C5M = d5M.deltaX
			a5M = d5M.deltaY
			r5M = Date.now() - this.lastMouseWheelEvent
			if (Math.abs(a5M) > Math.abs(C5M)) {
				C5M = +'0'
			} else {
				a5M = 0
			}
			this.lastMouseWheelEvent = Date.now()
			if (Math.abs(C5M) === 0 && Math.abs(a5M) === '0' >> 1823924256) {
				return
			}
			if (this.allowSideswipe && C5M !== 0 && Math.abs(C5M) > Math.abs(a5M)) {
				this.lastMove = 'horizontal'
				m0w.B0w(65)
				V5M = m0w.W0w('1', 0, C5M)
				if (V5M > 50) {
					m0w.B0w(11)
					V5M = m0w.W0w(892486688, '50')
				}
				if (V5M < -50) {
					P48 = 533368231
					r48 = -2036139107
					H48 = 2
					for (var c48 = 1; m0w.M68(c48.toString(), c48.toString().length, 2603) !== P48; c48++) {
						V5M = -50
						H48 += 2
					}
					if (m0w.U68(H48.toString(), H48.toString().length, 80538) !== r48) {
						m0w.a0w(1)
						V5M = +m0w.u0w('8', 0)
					}
				}
				this.grabbingScreen = !!{}
				this.grabStartX = i2t.ChartEngine.crosshairX
				this.grabStartY = i2t.ChartEngine.crosshairY
				if (!this.currentPanel) {
					this.currentPanel = this.chart.panel
				}
				this.grabStartScrollX = this.currentPanel.chart.scroll
				this.grabStartScrollY = this.currentPanel.chart.panel.yAxis.scroll
				this.mousemoveinner(i2t.ChartEngine.crosshairX - V5M, i2t.ChartEngine.crosshairY)
				i2t.ChartEngine.crosshairX = this.grabStartX
				i2t.ChartEngine.crosshairY = this.grabStartY
				this.updateChartAccessories()
				this.grabbingScreen = ![]
				return
			}
			this.lastMove = 'vertical'
			if (!this.allowZoom) {
				return
			}
			if (!this.displayInitialized) {
				return
			}
			if (!a5M) {
				if (i2t.wheelEvent == 'onmousewheel') {
					m0w.B0w(50)
					var a4h = m0w.u0w(17, 67, 4)
					m0w.B0w(4)
					var T4h = m0w.u0w(21, 4, 15)
					a5M = (a4h / T4h) * d5M.wheelDelta
					if (d5M.wheelDeltaX) {
						m0w.a0w(66)
						var N4h = m0w.W0w(1)
						m0w.B0w(67)
						var J4h = m0w.u0w(6, 8, 15, 55, 4190)
						C5M = (N4h / J4h) * d5M.wheelDeltaX
					}
				} else {
					a5M = d5M.detail
				}
			}
			if (typeof d5M.deltaMode == 'undefined') {
				d5M.deltaMode = d5M.type == 'MozMousePixelScroll' ? 0 : 1
			}
			n5M = a5M
			if (d5M.deltaMode == 1) {
				n5M *= +'33'
			}
			P5M = null
			G5M = null
			if (this.mouseWheelAcceleration) {
				O5M = Math.max(Math.pow(Math.abs(n5M), 0.3), '1' >> 1787498048)
				m0w.B0w(50)
				P5M = m0w.u0w(O5M, 1, 0.1)
				m0w.B0w(45)
				G5M = m0w.u0w(1, 0.2, O5M)
			}
			if (n5M > 0) {
				if (this.reverseMouseWheel) {
					this.zoomOut(null, G5M)
				} else {
					this.zoomIn(null, P5M)
				}
			} else if (n5M < +'0') {
				if (this.reverseMouseWheel) {
					e68 = -2041731756
					O68 = 650260177
					s68 = 2
					for (var q68 = 1; m0w.U68(q68.toString(), q68.toString().length, 86730) !== e68; q68++) {
						this.zoomIn(1, P5M)
						s68 += +'2'
					}
					if (m0w.M68(s68.toString(), s68.toString().length, 26045) !== O68) {
						this.zoomIn(null, P5M)
					}
				} else {
					this.zoomOut(null, G5M)
				}
			}
			if (this.runAppend('mouseWheel', arguments)) {
				return
			}
			return !!0
		}
		i2t.ChartEngine.prototype.zoomIn = function(F5M, Z5M) {
			var G1h, D5M, q5M, m5M, J5M, l5M
			G1h = 'zo'
			G1h += 'o'
			G1h += 'mIn'
			D5M = this
			if (this.runPrepend(G1h, arguments)) {
				return
			}
			this.grabbingScreen = !1
			function x5M(H5M) {
				return function(S5M) {
					var p38, L38, D38, p1h
					m0w.L2t()
					q5M.zoomSet(S5M, H5M)
					if (q5M.animations.zoom.hasCompleted) {
						if (q5M.runAppend('zoomIn', arguments)) {
							return
						}
						p38 = +'1235478582'
						L38 = -1688391049
						D38 = +'2'
						for (var r38 = 1; m0w.M68(r38.toString(), r38.toString().length, 7362) !== p38; r38++) {
							q5M.changeOccurred('')
							D38 += 2
						}
						if (m0w.U68(D38.toString(), D38.toString().length, 8713) !== L38) {
							p1h = 'la'
							p1h += 'y'
							p1h += 'out'
							q5M.changeOccurred(p1h)
						}
					}
				}
			}
			if (i2t.ChartEngine.insideChart) {
				i2t.unappendClassName(this.container, 'stx-drag-chart')
			}
			if (this.preferences.zoomInSpeed) {
				Z5M = this.preferences.zoomInSpeed
			} else if (!Z5M) {
				Z5M = 0.7
			}
			q5M = this
			for (var u5M in D5M.charts) {
				m5M = D5M.charts[u5M]
				if (F5M && F5M.preventDefault) {
					F5M.preventDefault()
				}
				D5M.cancelTouchSingleClick = !!{}
				J5M = Math.round(m5M.maxTicks * Z5M)
				if (m5M.maxTicks - J5M < 2) {
					m0w.a0w(6)
					var B4h = m0w.W0w(18, 20)
					J5M = m5M.maxTicks - B4h
				}
				if (J5M < D5M.minimumZoomTicks) {
					J5M = D5M.minimumZoomTicks
				}
				l5M = D5M.chart.width / J5M
				D5M.layout.span = null
				D5M.animations.zoom.run(x5M(m5M), D5M.layout.candleWidth, l5M)
			}
		}
		i2t.ChartEngine.prototype.translateIf = function(X5M) {
			if (this.translationCallback) {
				return this.translationCallback(X5M)
			}
			m0w.M2t()
			return X5M
		}
		i2t.ChartEngine.prototype.setTimeZone = function(h5M, K5M) {
			var N5M, v5M, k5M, Q5M, Y5M, R5M
			N5M = this
			if (typeof o2t == 'undefined') {
				this.timeZoneOffset = 0
				return
			}
			v5M = new Date()
			k5M = v5M.getTimezoneOffset()
			Q5M = k5M
			Y5M = k5M
			if (h5M) {
				this.dataZone = h5M
			}
			if (this.dataZone) {
				Q5M = new o2t.Date(v5M, this.dataZone).getTimezoneOffset()
			}
			if (K5M) {
				this.displayZone = K5M
			}
			if (this.displayZone) {
				Y5M = new o2t.Date(v5M, this.displayZone).getTimezoneOffset()
			}
			m0w.a0w(68)
			this.timeZoneOffset = m0w.W0w(Y5M, k5M, k5M, Q5M)
			for (var j1p in N5M.charts) {
				R5M = N5M.charts[j1p]
				if (R5M.masterData && !i2t.ChartEngine.isDailyInterval(N5M.layout.interval)) {
					N5M.setDisplayDates(R5M.masterData)
				}
			}
			this.createDataSet()
		}
		i2t.ChartEngine.prototype.setLocale = function(L1p) {
			var C1h, E1h, S1h, b1h, c1h, Z1h, H1h, r1h, P1h, D1h, L1h, M1p
			C1h = 'p'
			C1h += 'erc'
			C1h += 'ent'
			E1h = 'per'
			E1h += 'ce'
			E1h += 'nt'
			S1h = 'p'
			S1h += 'e'
			S1h += 'rcen'
			S1h += 't'
			b1h = 's'
			b1h += 'h'
			b1h += 'ort'
			c1h = 'numeri'
			c1h += 'c'
			Z1h = 'nu'
			Z1h += 'm'
			Z1h += 'eric'
			H1h = 'nume'
			H1h += 'ri'
			H1h += 'c'
			r1h = 'num'
			r1h += 'eri'
			r1h += 'c'
			P1h = '2'
			P1h += '-'
			P1h += 'digi'
			P1h += 't'
			D1h = '2-digi'
			D1h += 't'
			L1h = 'un'
			L1h += 'defi'
			L1h += 'n'
			L1h += 'ed'
			if (typeof Intl == L1h) {
				return
			}
			if (this.locale != L1p) {
				this.locale = L1p
			} else {
				return
			}
			M1p = this.internationalizer = {}
			M1p.hourMinute = new Intl.DateTimeFormat(this.locale, {
				hour: 'numeric',
				minute: 'numeric',
				hour12: !!'',
			})
			M1p.hourMinuteSecond = new Intl.DateTimeFormat(this.locale, {
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric',
				hour12: !'1',
			})
			M1p.mdhm = new Intl.DateTimeFormat(this.locale, {
				year: D1h,
				month: P1h,
				day: '2-digit',
				hour: '2-digit',
				minute: '2-digit',
			})
			M1p.monthDay = new Intl.DateTimeFormat(this.locale, { month: 'numeric', day: r1h })
			M1p.yearMonthDay = new Intl.DateTimeFormat(this.locale, {
				year: H1h,
				month: Z1h,
				day: 'numeric',
			})
			M1p.yearMonth = new Intl.DateTimeFormat(this.locale, { year: c1h, month: 'numeric' })
			M1p.month = new Intl.DateTimeFormat(this.locale, { month: b1h })
			M1p.numbers = new Intl.NumberFormat(this.locale)
			M1p.priceFormatters = []
			M1p.priceFormatters[0] = new Intl.NumberFormat(this.locale, {
				maximumFractionDigits: 0,
				minimumFractionDigits: +'0',
			})
			M1p.priceFormatters[1] = new Intl.NumberFormat(this.locale, {
				maximumFractionDigits: 1,
				minimumFractionDigits: 1,
			})
			M1p.priceFormatters[2] = new Intl.NumberFormat(this.locale, {
				maximumFractionDigits: '2' ^ 0,
				minimumFractionDigits: 2,
			})
			M1p.priceFormatters[3] = new Intl.NumberFormat(this.locale, {
				maximumFractionDigits: 3,
				minimumFractionDigits: 3,
			})
			M1p.priceFormatters[4] = new Intl.NumberFormat(this.locale, {
				maximumFractionDigits: +'4',
				minimumFractionDigits: 4,
			})
			M1p.priceFormatters[5] = new Intl.NumberFormat(this.locale, {
				maximumFractionDigits: 5,
				minimumFractionDigits: 5,
			})
			M1p.percent = new Intl.NumberFormat(this.locale, {
				style: 'percent',
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			})
			m0w.L2t()
			M1p.percent0 = new Intl.NumberFormat(this.locale, {
				style: S1h,
				minimumFractionDigits: 0,
				maximumFractionDigits: 0,
			})
			M1p.percent1 = new Intl.NumberFormat(this.locale, {
				style: E1h,
				minimumFractionDigits: '1' | 1,
				maximumFractionDigits: 1,
			})
			M1p.percent2 = new Intl.NumberFormat(this.locale, {
				style: 'percent',
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			})
			M1p.percent3 = new Intl.NumberFormat(this.locale, {
				style: C1h,
				minimumFractionDigits: '3' ^ 0,
				maximumFractionDigits: '3' - 0,
			})
			M1p.percent4 = new Intl.NumberFormat(this.locale, {
				style: 'percent',
				minimumFractionDigits: 4,
				maximumFractionDigits: 4,
			})
			if (i2t.I18N.createMonthArrays) {
				i2t.I18N.createMonthArrays(this, M1p.month, this.locale)
			}
		}
		i2t.ChartEngine.prototype.importLayout = function(W1p, i1p) {
			var V1h,
				o1p,
				b1p,
				T1p,
				a1p,
				f1p,
				c1p,
				p1p,
				B1p,
				A1p,
				n38,
				i38,
				A38,
				Q1h,
				X1h,
				n1h,
				U1p,
				t1p,
				C1p,
				y1p,
				s1p,
				w1p,
				E1p,
				a88,
				T88,
				N88,
				V1p
			V1h = 'ob'
			V1h += 'je'
			V1h += 'ct'
			o1p = this
			m0w.L2t()
			if (typeof i1p !== V1h) {
				i1p = { managePeriodicity: arguments['1' * 1], preserveTicksAndCandleWidth: arguments[2] }
			}
			if (!i1p.preserveTicksAndCandleWidth && i1p.preserveTicksAndCandleWidth !== ![]) {
				i1p.preserveTicksAndCandleWidth = !![]
			}
			b1p = i2t.shallowClone(this.layout)
			T1p = this.serializeDrawings()
			this.abortDrawings()
			this.currentlyImporting = !![]
			if (i2t.Studies) {
				for (var e1p in o1p.layout.studies) {
					a1p = o1p.layout.studies[e1p]
					i2t.Studies.removeStudy(o1p, a1p)
				}
			}
			this.overlays = {}
			f1p = i2t.clone(W1p)
			if (f1p) {
				c1p = i2t.shallowClone(this.panels)
				this.panels = {}
				p1p = i2t.clone(f1p)
				delete p1p.periodicity
				delete p1p.interval
				delete p1p.timeUnit
				delete p1p.setSpan
				i2t.dataBindSafeAssignment(this.layout, p1p)
				this.layout.periodicity = b1p.periodicity
				this.layout.interval = b1p.interval
				this.layout.timeUnit = b1p.timeUnit
				this.layout.setSpan = b1p.setSpan
				if (i1p.preserveTicksAndCandleWidth) {
					this.layout.candleWidth = b1p.candleWidth
				} else {
					if (!this.layout.candleWidth) {
						this.layout.candleWidth = 8
					}
				}
				if (this.layout.candleWidth < this.minimumCandleWidth) {
					this.layout.candleWidth = this.minimumCandleWidth
				}
				this.setCandleWidth(this.layout.candleWidth)
				B1p = f1p.panels
				this.layout.panels = {}
				for (var z1p in B1p) {
					A1p = B1p[z1p]
					o1p.stackPanel(A1p.display, z1p, A1p.percent, A1p.chartName)
				}
				if (i2t.isEmpty(B1p)) {
					n38 = -1622693514
					i38 = -1800329095
					A38 = 2
					for (var R38 = 1; m0w.M68(R38.toString(), R38.toString().length, 91862) !== n38; R38++) {
						Q1h = 'c'
						Q1h += 'ha'
						Q1h += 'r'
						Q1h += 't'
						X1h = 'c'
						X1h += 'har'
						X1h += 't'
						this.stackPanel(X1h, 'chart', +'9', Q1h)
						A38 += 2
					}
					if (m0w.U68(A38.toString(), A38.toString().length, 49666) !== i38) {
						n1h = 'cha'
						n1h += 'rt'
						this.stackPanel('chart', 'chart', +'1', n1h)
					}
				}
				for (var g1p in c1p) {
					U1p = c1p[g1p]
					t1p = o1p.panels[g1p]
					if (t1p) {
						o1p.container.removeChild(t1p.holder)
						o1p.container.removeChild(U1p.handle)
						C1p = { holder: !'', subholder: !!{}, display: !0 }
						for (var I1p in C1p) {
							t1p[I1p] = U1p[I1p]
						}
						o1p.configurePanelControls(t1p)
						if (U1p.chart.panel == U1p) {
							U1p.chart.panel = t1p
						}
					} else {
						o1p.privateDeletePanel(U1p)
					}
				}
				this.adjustPanelPositions()
				this.storePanels()
				if (i2t.Studies) {
					y1p = i2t.clone(this.layout.studies)
					delete this.layout.studies
					for (var d1p in y1p) {
						s1p = y1p[d1p]
						i2t.Studies.addStudy(o1p, s1p.type, s1p.inputs, s1p.outputs, s1p.parameters, s1p.panel)
					}
				}
			}
			if (typeof this.layout.chartType == 'undefined') {
				this.layout.chartType = 'line'
			}
			this.adjustPanelPositions()
			w1p = this
			if (W1p.symbols) {
				if (!this.quoteDriver || !this.quoteDriver.quoteFeed) {
					console.log(
						"WARNING: loading a symbol through 'importLayout' without a QuoteFeed may break data updates",
					)
				}
				E1p = {}
				if (i1p.managePeriodicity) {
					if (W1p.symbols['0' - 0].setSpan) {
						E1p.span = W1p.symbols[0].setSpan
					}
					if (W1p.symbols[0].interval) {
						a88 = 299604767
						T88 = -107337195
						N88 = 2
						for (
							var B88 = 1;
							m0w.U68(B88.toString(), B88.toString().length, 52601) !== a88;
							B88++
						) {
							E1p.periodicity = {
								interval: W1p.symbols[2].interval,
								periodicity: W1p.symbols[5].periodicity,
								timeUnit: W1p.symbols[8].timeUnit,
							}
							N88 += 2
						}
						if (m0w.U68(N88.toString(), N88.toString().length, 82123) !== T88) {
							E1p.periodicity = {
								interval: W1p.symbols[0].interval,
								periodicity: W1p.symbols[0].periodicity,
								timeUnit: W1p.symbols['0' << 1760898432].timeUnit,
							}
						}
					}
				}
				V1p = W1p.symbols[0].symbolObject || W1p.symbols[0].symbol
				this.newChart(
					V1p,
					null,
					this.chart,
					function(G1p) {
						var i1h
						i1h = 'l'
						i1h += 'a'
						i1h += 'yo'
						i1h += 'ut'
						if (!G1p) {
							for (var P1p, n1p = 1; n1p < W1p.symbols.length; ++n1p) {
								P1p = W1p.symbols[n1p]
								w1p.addSeries(P1p.symbol, P1p.parameters)
							}
						}
						w1p.reconstructDrawings(T1p)
						m0w.M2t()
						w1p.draw()
						w1p.currentlyImporting = !'1'
						w1p.updateListeners(i1h)
						if (i1p.cb) {
							i1p.cb.apply(null, arguments)
						}
					},
					E1p,
				)
				return
			} else {
				if (f1p && i1p.managePeriodicity) {
					if (f1p.setSpan && this.chart.symbol) {
						this.setSpan(f1p.setSpan, function() {
							m0w.M2t()
							w1p.reconstructDrawings(T1p)
							w1p.draw()
							w1p.currentlyImporting = !{}
							w1p.updateListeners('layout')
							if (i1p.cb) {
								i1p.cb()
							}
						})
						return
					} else {
						interval = f1p.interval
						periodicity = f1p.periodicity
						timeUnit = f1p.timeUnit
						if (isNaN(periodicity)) {
							periodicity = 1
						}
						if (!interval) {
							interval = 'day'
						}
						if (interval != this.layout.interval || periodicity != this.layout.periodicity) {
							this.setPeriodicityV2(periodicity, interval, timeUnit, function() {
								w1p.reconstructDrawings(T1p)
								w1p.draw()
								w1p.currentlyImporting = ![]
								w1p.updateListeners('layout')
								if (i1p.cb) {
									i1p.cb()
								}
							})
							return
						} else {
							this.createDataSet()
						}
					}
				} else {
					this.createDataSet()
				}
			}
			this.reconstructDrawings(T1p)
			this.draw()
			if (!i1p.preserveTicksAndCandleWidth) {
				this.home()
			}
			this.currentlyImporting = !!''
			this.updateListeners('layout')
			if (i1p.cb) {
				i1p.cb()
			}
		}
		i2t.ChartEngine.prototype.exportLayout = function(l1p) {
			var r1p, O1p, m1p, Z1p, q1p, J1p
			r1p = this
			O1p = {}
			for (var D1p in r1p.layout) {
				if (D1p != 'studies' && D1p != 'panels') {
					O1p[D1p] = i2t.clone(r1p.layout[D1p])
				} else if (D1p == 'studies') {
					O1p.studies = {}
				} else if (D1p == 'panels') {
					O1p.panels = {}
				}
			}
			for (var F1p in r1p.panels) {
				m1p = O1p.panels[F1p] = {}
				Z1p = r1p.panels[F1p]
				m1p.percent = Z1p.percent
				m1p.display = Z1p.display
				m1p.chartName = Z1p.chart.name
			}
			m0w.M2t()
			for (var u1p in r1p.layout.studies) {
				q1p = O1p.studies[u1p] = {}
				J1p = r1p.layout.studies[u1p]
				q1p.type = J1p.type
				q1p.inputs = i2t.clone(J1p.inputs)
				q1p.outputs = i2t.clone(J1p.outputs)
				q1p.panel = J1p.panel
				q1p.parameters = i2t.clone(J1p.parameters)
			}
			if (l1p) {
				O1p.symbols = this.getSymbols('include-parameters')
			}
			return O1p
		}
		i2t.ChartEngine.prototype.doCleanupGaps = function(x1p, R1p) {
			var H1p, h1p, Y1p, N1p, S1p, j0p, K1p, v1p, Q1p, M0p, X1p, L0p
			H1p = this.layout.interval
			h1p = this.cleanupGaps == 'gap'
			if (!this.cleanupGaps) {
				return x1p
			}
			if (H1p == 'tick') {
				return x1p
			}
			if (!x1p || !x1p.length) {
				return x1p
			}
			if (!R1p) {
				R1p = this.chart
			}
			m0w.L2t()
			if (H1p == 'month' || H1p == 'week') {
				if (this.dontRoll) {
					return x1p
				}
				H1p = 'day'
			}
			Y1p = function(i0p) {
				var w0p, w88, h88, t88
				m0w.M2t()
				if (i0p.DT) {
					w88 = 713072794
					h88 = -1317245178
					t88 = 2
					for (var d88 = 1; m0w.U68(d88.toString(), d88.toString().length, 78862) !== w88; d88++) {
						w0p = i0p.DT
						m0w.a0w(11)
						t88 += m0w.u0w(469308512, '2')
					}
					if (m0w.U68(t88.toString(), t88.toString().length, 88658) !== h88) {
						w0p = i0p.DT
					}
				} else {
					w0p = i2t.strToDateTime(i0p.Date)
				}
				return w0p
			}
			N1p = []
			S1p = x1p[0]
			N1p.push(x1p['0' >> 1727455072])
			j0p = {
				begin: Y1p(S1p),
				interval: H1p,
				periodicity: 1,
				timeUnit: this.layout.timeUnit,
				inZone: this.dataZone,
				outZone: this.dataZone,
			}
			K1p = R1p.market.newIterator(j0p)
			for (var k1p = 1; k1p < x1p.length; k1p++) {
				v1p = x1p[k1p]
				Q1p = K1p.next()
				M0p = Y1p(v1p)
				while (Q1p < M0p) {
					X1p = h1p ? null : S1p.Close
					L0p = h1p ? null : S1p.Adj_Close
					N1p.push({
						DT: Q1p,
						Open: X1p,
						High: X1p,
						Low: X1p,
						Close: X1p,
						Volume: 0,
						Adj_Close: L0p,
					})
					Q1p = K1p.next()
				}
				N1p.push(v1p)
				S1p = v1p
			}
			return N1p
		}
		i2t.Comparison = function() {}
		i2t.Comparison.priceToPercent = function(o0p, f0p, W0p) {
			m0w.M2t()
			m0w.B0w(67)
			var g4h = m0w.u0w(4, 13, 16, 80, 4188)
			m0w.B0w(69)
			var j4h = m0w.W0w(13, 129608, 14, 17, 10002)
			return (
				Math.round(((W0p - i2t.Comparison.baseline) / i2t.Comparison.baseline) * g4h * +'10000') /
				j4h
			)
		}
		i2t.Comparison.percentToPrice = function(p0p, b0p, U0p) {
			m0w.L2t()
			m0w.B0w(6)
			var I4h = m0w.u0w(19, 20)
			m0w.a0w(17)
			var F4h = m0w.W0w(81, 17, 36)
			return i2t.Comparison.baseline * (I4h + U0p / F4h)
		}
		i2t.Comparison.stopSort = function(s0p, t0p) {
			m0w.M2t()
			m0w.a0w(6)
			return m0w.u0w(t0p, s0p)
		}
		i2t.Comparison.createComparisonSegmentInner = function(g0p, y0p) {
			var A1h,
				a0p,
				B0p,
				r0p,
				c0p,
				V0p,
				m0p,
				P0p,
				d0p,
				I0p,
				C0p,
				G0p,
				T0p,
				A0p,
				n0p,
				E0p,
				D0p,
				J0p,
				O0p,
				z0p,
				e0p
			A1h = 'L'
			A1h += 'ow'
			a0p = []
			for (B0p in y0p.series) {
				if (y0p.series[B0p].parameters.isComparison) {
					a0p.push(B0p)
				}
			}
			r0p = ['Close', 'Open', 'High', A1h, 'iqPrevClose']
			y0p.dataSegment = []
			c0p = null
			V0p = y0p.dataSet.length - y0p.scroll
			m0p = V0p + y0p.maxTicks
			P0p = 0
			d0p = []
			for (I0p = 0; I0p < g0p.drawingObjects.length; I0p++) {
				C0p = g0p.drawingObjects[I0p]
				if (C0p.name == 'comparison_stop') {
					if (C0p.tick > V0p && C0p.tick <= m0p) {
						d0p.push(C0p.tick)
					}
				}
			}
			d0p.sort(i2t.Comparison.stopSort)
			m0w.B0w(37)
			var l4h = m0w.u0w(54, 18)
			G0p = y0p.maxTicks + l4h
			for (I0p = 0; I0p <= G0p; I0p++) {
				if (I0p == G0p) {
					I0p = -+'1'
				}
				m0w.a0w(5)
				position = m0w.W0w(V0p, I0p)
				if (position < y0p.dataSet.length && position >= '0' - 0) {
					T0p = y0p.dataSet[position]
					if (!c0p && T0p.Close === 0) {
						continue
					}
					if (!c0p) {
						c0p = i2t.clone(T0p)
					}
					if (!T0p.transform) {
						T0p.transform = { cache: {}, DT: T0p.DT, Date: T0p.Date }
					}
					i2t.Comparison.baseline = c0p.Close
					for (A0p = 0; A0p < r0p.length; A0p++) {
						B0p = r0p[A0p]
						if (T0p[B0p] || T0p[B0p] === +'0') {
							m0w.B0w(70)
							var m4h = m0w.u0w(5939, 21, 18, 15, 18)
							m0w.a0w(71)
							var M4h = m0w.W0w(2482, 16, 2, 100000, 8)
							m0w.a0w(72)
							var U4h = m0w.u0w(7496, 10020, 9, 4, 13)
							T0p.transform[B0p] =
								Math.round(
									((T0p[B0p] - i2t.Comparison.baseline) / i2t.Comparison.baseline) *
										('100' * m4h) *
										M4h,
								) / U4h
						}
					}
					n0p = g0p.layout.studies
					if (n0p) {
						for (var q0p in n0p) {
							E0p = n0p[q0p]
							if (!g0p.panels[E0p.panel] || g0p.panels[E0p.panel].name != E0p.chart.name) {
								continue
							}
							for (B0p in E0p.outputMap) {
								if (T0p[B0p] || T0p[B0p] === 0) {
									m0w.a0w(15)
									var O4h = m0w.u0w(150000, 2500, 12)
									m0w.a0w(6)
									var s4h = m0w.W0w(120000, 130000)
									T0p.transform[B0p] =
										Math.round(
											((T0p[B0p] - i2t.Comparison.baseline) / i2t.Comparison.baseline) * 100 * O4h,
										) / s4h
								}
							}
							if (
								E0p.referenceOutput &&
								(T0p[
									E0p.referenceOutput + ((6376, 344.46) !== 193.44 ? ' ' : ('k', 0x26f6)) + E0p.name
								] ||
									T0p[
										E0p.referenceOutput +
											((5670, 204.25) != 7990 ? ' ' : (5282, 7340) === 506 ? !!{} : 597.31) +
											E0p.name
									] === 0)
							) {
								m0w.B0w(73)
								var v4h = m0w.u0w(9, 179, 171, 17)
								m0w.a0w(10)
								var q4h = m0w.W0w(12, 695)
								T0p.transform[E0p.referenceOutput + ' ' + E0p.name] =
									Math.round(
										((T0p[
											E0p.referenceOutput +
												((+'811', 113.71) == v4h
													? q4h
													: +'8110' !== 9555
													? ' '
													: (9.66e3, 0x12a1)) +
												E0p.name
										] -
											i2t.Comparison.baseline) /
											i2t.Comparison.baseline) *
											+'100' *
											10000,
									) /
									('10000' & 2147483647)
							}
						}
					}
					for (A0p in g0p.plugins) {
						D0p = g0p.plugins[A0p]
						if (!D0p.transformOutputs) {
							continue
						}
						for (B0p in D0p.transformOutputs) {
							if (T0p[B0p] || T0p[B0p] === '0' - 0) {
								T0p.transform[B0p] =
									Math.round(
										((T0p[B0p] - i2t.Comparison.baseline) / i2t.Comparison.baseline) *
											100 *
											('10000' - 0),
									) / +'10000'
							}
						}
					}
					J0p = ![]
					if (d0p && P0p < d0p.length) {
						if (position === d0p[P0p]) {
							J0p = !!'1'
							P0p++
						}
					}
					O0p = null
					if (g0p.activeDrawing && g0p.activeDrawing.name == 'comparison_stop') {
						O0p = g0p.activeDrawing.tick
					}
					if (J0p || position == O0p) {
						for (A0p = 0; A0p < a0p.length; A0p++) {
							B0p = a0p[A0p]
							z0p = T0p[B0p]
							c0p[B0p] = z0p / ('1' - 0 + T0p.transform.Close / 100)
						}
					}
					for (A0p = 0; A0p < a0p.length; A0p++) {
						B0p = a0p[A0p]
						z0p = T0p[B0p]
						if (z0p || z0p === 0) {
							e0p = c0p[B0p]
							if (!e0p && e0p !== 0) {
								m0w.a0w(74)
								var P4h = m0w.u0w(1759157208, 13, 5.999999829463797, 6, 20)
								m0w.a0w(10)
								var r4h = m0w.W0w(10, 10)
								c0p[B0p] = e0p = z0p / (('1' >> P4h) + T0p.transform.Close / r4h)
							}
							if (e0p !== ('0' | 0)) {
								m0w.a0w(35)
								var Z4h = m0w.u0w(50000, 7, 19, 340133)
								m0w.B0w(13)
								var c4h = m0w.u0w(550000, 140000, 4)
								T0p.transform[B0p] = Math.round(((z0p - e0p) / e0p) * 100 * Z4h) / c4h
							}
						}
					}
					y0p.dataSegment.push(T0p)
				} else if (position < '0' << 547809216) {
					y0p.dataSegment.push(null)
				}
				if (I0p < 0) {
					break
				}
			}
		}
		i2t.Comparison.priceFormat = function(l0p, x0p, Z0p) {
			var F0p, u0p, g28, m28, M28
			if (Z0p === null || typeof Z0p == 'undefined') {
				return ''
			}
			F0p = x0p.yAxis.priceTick
			u0p = l0p.internationalizer
			if (u0p) {
				if (F0p >= 1) {
					g28 = 1754825622
					m28 = -361841724
					M28 = 2
					for (var v28 = 1; m0w.M68(v28.toString(), v28.toString().length, 21951) !== g28; v28++) {
						m0w.a0w(75)
						Z0p = u0p.percent0.format(m0w.u0w(Z0p, 871))
						M28 += 2
					}
					if (m0w.U68(M28.toString(), M28.toString().length, 25058) !== m28) {
						m0w.a0w(75)
						Z0p = u0p.percent0.format(m0w.W0w(Z0p, 871))
					}
					m0w.B0w(37)
					Z0p = u0p.percent0.format(m0w.W0w(Z0p, 100))
				} else if (F0p >= 0.1) {
					m0w.a0w(37)
					Z0p = u0p.percent1.format(m0w.u0w(Z0p, 100))
				} else if (F0p >= 0.01) {
					m0w.B0w(37)
					Z0p = u0p.percent2.format(m0w.u0w(Z0p, 100))
				} else if (F0p >= 0.001) {
					m0w.B0w(37)
					Z0p = u0p.percent3.format(m0w.u0w(Z0p, 100))
				} else {
					Z0p = u0p.percent4.format(Z0p)
				}
			} else {
				if (F0p >= 1) {
					m0w.a0w(76)
					var S4h = m0w.W0w(17, 1803, 7, 212752)
					m0w.a0w(17)
					var E4h = m0w.u0w(99040, 92861, 11)
					m0w.a0w(77)
					var V4h = m0w.u0w(12, 14, 130447, 137340)
					m0w.B0w(32)
					var X4h = m0w.W0w(20, 17, 3, 2977, 56213)
					m0w.a0w(37)
					var Q4h = m0w.W0w(5532, 2)
					Z0p =
						Z0p.toFixed(0) +
						(9426 < (S4h, E4h) ? (434 == (V4h, X4h) ? (200.16, !!{}) : (Q4h, 'C')) : '%')
				} else if (F0p >= 0.1) {
					m0w.a0w(78)
					var n4h = m0w.W0w(37, 2, 3, 10)
					Z0p = Z0p.toFixed(n4h) + '%'
				} else if (F0p >= 0.01) {
					m0w.B0w(5)
					var i4h = m0w.u0w(1477, 2953)
					Z0p = Z0p.toFixed('2' ^ 0) + ((855.01, 4.58) === i4h ? 'I' : '%')
				} else if (F0p >= 0.001) {
					m0w.B0w(79)
					var A4h = m0w.u0w(17, 11, 184, 19, 17)
					Z0p = Z0p.toFixed('3' * A4h) + '%'
				} else {
					Z0p = Z0p.toFixed(+'4') + '%'
				}
			}
			if (
				parseFloat(Z0p) === 0 &&
				Z0p.charAt(+'0') == (('650.48' - 0, 8020) != (5798, 8096) ? '-' : (335.94, !''))
			) {
				Z0p = Z0p.substring(1)
			}
			return Z0p
		}
		i2t.Comparison.correlate = function(H0p, k0p) {
			var W1h, f1h, X0p, S0p, v0p, N0p, K0p, R1h, j3p
			W1h = 'cor'
			W1h += 're'
			W1h += 'l'
			f1h = ' '
			f1h += '('
			if (!i2t.Comparison.requestCorrelation || X0p <= ('0' ^ 0)) {
				return
			}
			X0p = parseInt(w2t('.stxCorrelate .stx-input-field').value, +'10')
			m0w.B0w(5)
			var f4h = m0w.W0w(7306, 14)
			m0w.a0w(6)
			var R4h = m0w.u0w(2, 3953)
			m0w.a0w(17)
			var W4h = m0w.u0w(610, 17, 7944)
			m0w.a0w(80)
			var y7h = m0w.W0w(7950, 6, 13, 17, 159000, 3.44483e5)
			S0p =
				H0p.panels[
					i2t.Comparison.correlationPanel +
						f1h +
						X0p +
						(f4h != R4h ? ')' : W4h !== 31.21 ? (0x1167, 'A') : (235.25, y7h))
				]
			v0p = {
				id:
					i2t.Comparison.correlationPanel +
					' (' +
					X0p +
					(3601 !== (669.03, 9310)
						? ')'
						: (2640, 3780) > 2003
						? ('A', 0xe70)
						: (!!'', '2.28e+3' * 1)),
				Period: X0p,
				'Compare To': [],
			}
			N0p = {}
			K0p = null
			if (S0p) {
				for (var R0p = 0; R0p < H0p.layout.studies[S0p.name].inputs['Compare To'].length; R0p++) {
					R1h = 'Compare '
					R1h += 'To'
					v0p['Compare To'].push(H0p.layout.studies[S0p.name].inputs[R1h][R0p])
				}
				for (var h0p in H0p.layout.studies[S0p.name].outputs) {
					N0p[h0p] = H0p.layout.studies[S0p.name].outputs[h0p]
				}
				K0p = S0p.name
			}
			v0p['Compare To'].push(k0p)
			m0w.a0w(5)
			N0p[m0w.W0w('Result ', k0p)] = i2t.Comparison.colorSelection
			i2t.Studies.addStudy(H0p, W1h, v0p, N0p, null, K0p)
			for (var Y0p in H0p.panels) {
				if (H0p.panels[Y0p].name.indexOf(i2t.Comparison.correlationPanel) === 0) {
					j3p = H0p.layout.studies[H0p.panels[Y0p].name].inputs['Compare To']
					for (var Q0p = 0; Q0p < j3p.length; Q0p++) {
						if (j3p[Q0p] == k0p) {
							m0w.B0w(5)
							H0p.layout.studies[H0p.panels[Y0p].name].outputs[m0w.u0w('Result ', k0p)] =
								i2t.Comparison.colorSelection
						}
					}
				}
			}
		}
		i2t.Comparison.toggleCorrelate = function(L3p) {
			var M3p
			i2t.Comparison.requestCorrelation = !i2t.Comparison.requestCorrelation
			M3p = w2t('.stxCorrelate .stx-checkbox')
			m0w.M2t()
			if (M3p) {
				i2t.unappendClassName(M3p, (!i2t.Comparison.requestCorrelation).toString())
				i2t.appendClassName(M3p, i2t.Comparison.requestCorrelation.toString())
			}
		}
		i2t.ChartEngine.prototype.setComparison = function(w3p, i3p) {
			var K1h, y6h
			if (!i3p) {
				i3p = this.chart
			}
			m0w.L2t()
			if (typeof i3p == 'string') {
				i3p = this.charts[i3p]
			}
			if (!i3p.isComparison && w3p) {
				K1h = 'dataSe'
				K1h += 'gment'
				this.setTransform(i3p, i2t.Comparison.priceToPercent, i2t.Comparison.percentToPrice)
				i3p.panel.yAxis.priceFormatter = i2t.Comparison.priceFormat
				i3p.panel.yAxis.whichSet = K1h
			} else if (i3p.isComparison && !w3p) {
				y6h = 'd'
				y6h += 'at'
				y6h += 'aSe'
				y6h += 't'
				this.unsetTransform(i3p)
				i3p.panel.yAxis.priceFormatter = null
				i3p.panel.yAxis.whichSet = y6h
			}
			i3p.isComparison = w3p
		}
		i2t.Comparison.correlationPanel = 'correl'
		i2t.Comparison.requestCorrelation = !!''
		if (typeof document != 'undefined') {
			document.addEventListener('contextmenu', i2t.ChartEngine.handleContextMenu)
		}
		return W2t
	} /* ignore jslint end   */ /* ignore jslint start */ /* eslint-enable  */ /* jshint ignore:end   */ /* jshint ignore:start */

	/* eslint-disable */ q56d(N56d())
	w2hR(B2hR())
	o2OG.f40 = function() {
		return typeof o2OG.S40.V30 === 'function'
			? o2OG.S40.V30.apply(o2OG.S40, arguments)
			: o2OG.S40.V30
	}
	function w2hR() {
		function X4G() {
			var u7G = 2
			for (; u7G !== 7; ) {
				switch (u7G) {
					case 2:
						var o7G = [arguments]
						o7G[8] = 'ineProperty'
						o7G[4] = ''
						o7G[4] = 'ef'
						o7G[7] = 'd'
						o7G[1] = 7
						try {
							var P7G = 2
							for (; P7G !== 9; ) {
								switch (P7G) {
									case 3:
										try {
											var O7G = 2
											for (; O7G !== 3; ) {
												switch (O7G) {
													case 4:
														o7G[0][0].Object[o7G[9]](o7G[6], o7G[0][4], o7G[5])
														O7G = 3
														break
													case 2:
														o7G[9] = o7G[7]
														o7G[9] += o7G[4]
														o7G[9] += o7G[8]
														O7G = 4
														break
												}
											}
										} catch (W7G) {
											o7G[6][o7G[0][4]] = o7G[5].value
										}
										P7G = 9
										break
									case 2:
										o7G[5] = {}
										o7G[2] = (1, o7G[0][1])(o7G[0][0])
										o7G[6] = [o7G[1], o7G[2].prototype][o7G[0][3]]
										o7G[5].value = o7G[6][o7G[0][2]]
										P7G = 3
										break
								}
							}
						} catch (z7G) {}
						u7G = 7
						break
				}
			}
		}
		function L4G() {
			var E7G = 2
			for (; E7G !== 5; ) {
				switch (E7G) {
					case 2:
						var v7G = [arguments]
						return v7G[0][0].String
						break
				}
			}
		}
		var s7G = 2
		for (; s7G !== 10; ) {
			switch (s7G) {
				case 11:
					l4G(L4G, 'charCodeAt', k7G[7], k7G[4])
					s7G = 10
					break
				case 12:
					var l4G = function() {
						var A7G = 2
						for (; A7G !== 5; ) {
							switch (A7G) {
								case 2:
									var q7G = [arguments]
									X4G(k7G[0][0], q7G[0][0], q7G[0][1], q7G[0][2], q7G[0][3])
									A7G = 5
									break
							}
						}
					}
					s7G = 11
					break
				case 9:
					k7G[9] = 'x'
					k7G[7] = 9
					k7G[7] = 1
					k7G[4] = k7G[9]
					k7G[4] += k7G[5]
					k7G[4] += k7G[6]
					s7G = 12
					break
				case 2:
					var k7G = [arguments]
					k7G[6] = ''
					k7G[6] = 'R'
					k7G[5] = ''
					k7G[5] = '2h'
					s7G = 9
					break
			}
		}
	}
	function o2OG() {}
	o2OG.n3P = function() {
		return typeof o2OG.C3P.j3j === 'function'
			? o2OG.C3P.j3j.apply(o2OG.C3P, arguments)
			: o2OG.C3P.j3j
	}
	function B2hR() {
		var p7G = 2
		for (; p7G !== 3; ) {
			switch (p7G) {
				case 1:
					return globalThis
					break
				case 2:
					p7G = typeof globalThis === 'object' ? 1 : 5
					break
				case 4:
					return globalThis
					break
				case 5:
					try {
						var e7G = 2
						for (; e7G !== 9; ) {
							switch (e7G) {
								case 3:
									delete Object.prototype.fC5qQ
									e7G = 9
									break
								case 5:
									e7G = typeof globalThis === 'undefined' ? 4 : 3
									break
								case 4:
									window.globalThis = window
									e7G = 3
									break
								case 2:
									Object.defineProperty(Object.prototype, 'fC5qQ', {
										get: function() {
											return this
										},
										configurable: true,
									})
									fC5qQ.globalThis = fC5qQ
									e7G = 5
									break
							}
						}
					} catch (r4G) {
						window.globalThis = window
					}
					p7G = 4
					break
			}
		}
	}
	function N56d() {
		var R0P = 2
		for (; R0P !== 3; ) {
			switch (R0P) {
				case 5:
					try {
						var W0P = 2
						for (; W0P !== 9; ) {
							switch (W0P) {
								case 5:
									W0P = typeof globalThis === 'undefined' ? 4 : 3
									break
								case 2:
									Object.defineProperty(Object.prototype, 'KqQBy', {
										get: function() {
											return this
										},
										configurable: true,
									})
									KqQBy.globalThis = KqQBy
									W0P = 5
									break
								case 4:
									window.globalThis = window
									W0P = 3
									break
								case 3:
									delete Object.prototype.KqQBy
									W0P = 9
									break
							}
						}
					} catch (u1P) {
						window.globalThis = window
					}
					return globalThis
					break
				case 2:
					R0P = typeof globalThis === 'object' ? 1 : 5
					break
				case 1:
					return globalThis
					break
			}
		}
	}
	o2OG.s40 = function() {
		return typeof o2OG.S40.M30 === 'function'
			? o2OG.S40.M30.apply(o2OG.S40, arguments)
			: o2OG.S40.M30
	}
	function q56d() {
		function y1P() {
			var w3P = 2
			for (; w3P !== 8; ) {
				switch (w3P) {
					case 3:
						F0P[1] = 'efinePr'
						try {
							var h3P = 2
							for (; h3P !== 9; ) {
								switch (h3P) {
									case 3:
										try {
											var P3P = 2
											for (; P3P !== 3; ) {
												switch (P3P) {
													case 2:
														F0P[7] = r0P[83]
														F0P[7] += F0P[1]
														F0P[7] += F0P[5]
														P3P = 4
														break
													case 4:
														F0P[0][0].Object[F0P[7]](F0P[6], F0P[0][4], F0P[3])
														P3P = 3
														break
												}
											}
										} catch (h0P) {
											F0P[6][F0P[0][4]] = F0P[3].value
										}
										h3P = 9
										break
									case 2:
										F0P[3] = {}
										F0P[2] = (1, F0P[0][1])(F0P[0][0])
										F0P[6] = [F0P[2], F0P[2].prototype][F0P[0][3]]
										F0P[3].value = F0P[6][F0P[0][2]]
										h3P = 3
										break
								}
							}
						} catch (P0P) {}
						w3P = 8
						break
					case 2:
						var F0P = [arguments]
						F0P[5] = ''
						F0P[5] = 'operty'
						F0P[1] = ''
						w3P = 3
						break
				}
			}
		}
		function q1P() {
			var j3P = 2
			for (; j3P !== 5; ) {
				switch (j3P) {
					case 2:
						var E0P = [arguments]
						return E0P[0][0].Function
						break
				}
			}
		}
		function B1P() {
			var o3P = 2
			for (; o3P !== 5; ) {
				switch (o3P) {
					case 2:
						var I0P = [arguments]
						return I0P[0][0].RegExp
						break
				}
			}
		}
		function Z1P() {
			var T3P = 2
			for (; T3P !== 5; ) {
				switch (T3P) {
					case 2:
						var t0P = [arguments]
						return t0P[0][0]
						break
				}
			}
		}
		var K0P = 2
		for (; K0P !== 67; ) {
			switch (K0P) {
				case 70:
					v1P(Z1P, r0P[27], r0P[57], r0P[20])
					K0P = 69
					break
				case 68:
					v1P(q1P, 'apply', r0P[54], r0P[53])
					K0P = 67
					break
				case 11:
					r0P[2] = '_abstrac'
					r0P[4] = '__'
					r0P[3] = ''
					r0P[3] = 'X'
					K0P = 18
					break
				case 3:
					r0P[1] = ''
					r0P[1] = 'opt'
					r0P[9] = ''
					r0P[9] = 'W9'
					K0P = 6
					break
				case 74:
					var v1P = function() {
						var S3P = 2
						for (; S3P !== 5; ) {
							switch (S3P) {
								case 2:
									var X0P = [arguments]
									y1P(r0P[0][0], X0P[0][0], X0P[0][1], X0P[0][2], X0P[0][3])
									S3P = 5
									break
							}
						}
					}
					K0P = 73
					break
				case 24:
					r0P[82] = ''
					r0P[82] = '9'
					r0P[44] = ''
					r0P[44] = 'Y'
					K0P = 35
					break
				case 44:
					r0P[42] = ''
					r0P[42] = 't'
					r0P[54] = 8
					r0P[54] = 1
					K0P = 40
					break
				case 64:
					r0P[81] += r0P[96]
					r0P[79] = r0P[77]
					r0P[79] += r0P[2]
					r0P[79] += r0P[42]
					r0P[62] = r0P[9]
					K0P = 59
					break
				case 36:
					r0P[53] += r0P[83]
					r0P[87] = r0P[14]
					r0P[87] += r0P[38]
					r0P[87] += r0P[83]
					K0P = 51
					break
				case 51:
					r0P[20] = r0P[44]
					r0P[20] += r0P[82]
					r0P[20] += r0P[96]
					r0P[27] = r0P[91]
					K0P = 47
					break
				case 47:
					r0P[27] += r0P[70]
					r0P[27] += r0P[6]
					r0P[81] = r0P[3]
					r0P[81] += r0P[82]
					K0P = 64
					break
				case 2:
					var r0P = [arguments]
					r0P[7] = ''
					r0P[7] = ''
					r0P[7] = 'v'
					K0P = 3
					break
				case 6:
					r0P[5] = 'imize'
					r0P[2] = ''
					r0P[2] = ''
					r0P[8] = '6'
					K0P = 11
					break
				case 72:
					v1P(Z1P, r0P[89], r0P[57], r0P[62])
					K0P = 71
					break
				case 31:
					r0P[83] = ''
					r0P[83] = 'd'
					r0P[22] = '56'
					r0P[42] = ''
					K0P = 44
					break
				case 71:
					v1P(Z1P, r0P[79], r0P[57], r0P[81])
					K0P = 70
					break
				case 73:
					v1P(B1P, 'test', r0P[54], r0P[67])
					K0P = 72
					break
				case 18:
					r0P[6] = 'sidual'
					r0P[77] = '_'
					r0P[70] = ''
					r0P[70] = 'e'
					r0P[96] = '6d'
					r0P[91] = '__r'
					r0P[82] = ''
					K0P = 24
					break
				case 59:
					r0P[62] += r0P[8]
					r0P[62] += r0P[83]
					r0P[89] = r0P[4]
					r0P[89] += r0P[1]
					K0P = 55
					break
				case 55:
					r0P[89] += r0P[5]
					r0P[67] = r0P[7]
					r0P[67] += r0P[38]
					r0P[67] += r0P[83]
					K0P = 74
					break
				case 35:
					r0P[38] = ''
					r0P[38] = '96'
					r0P[14] = ''
					r0P[14] = 'Z'
					K0P = 31
					break
				case 40:
					r0P[57] = 3
					r0P[57] = 0
					r0P[53] = r0P[42]
					r0P[53] += r0P[22]
					K0P = 36
					break
				case 69:
					v1P(i1P, 'push', r0P[54], r0P[87])
					K0P = 68
					break
			}
		}
		function i1P() {
			var Y3P = 2
			for (; Y3P !== 5; ) {
				switch (Y3P) {
					case 2:
						var f0P = [arguments]
						return f0P[0][0].Array
						break
				}
			}
		}
	}
	o2OG.o40 = function() {
		return typeof o2OG.S40.M30 === 'function'
			? o2OG.S40.M30.apply(o2OG.S40, arguments)
			: o2OG.S40.M30
	}
	o2OG.S40 = (function(n30) {
		return {
			M30: function() {
				var Y30,
					W30 = arguments
				switch (n30) {
					case 16:
						Y30 = W30[2] * (W30[3] - W30[1]) - W30[0]
						break
					case 13:
						Y30 = W30[0] << W30[1]
						break
					case 3:
						Y30 = W30[1] & W30[0]
						break
					case 24:
						Y30 = (W30[2] / W30[1] / W30[3]) ^ W30[0]
						break
					case 0:
						Y30 = W30[0] | W30[1]
						break
					case 17:
						Y30 = W30[4] * W30[0] - W30[3] + -W30[1] + W30[2]
						break
					case 5:
						Y30 = W30[0] >> W30[1]
						break
					case 8:
						Y30 = W30[3] / W30[1] - W30[0] + W30[2]
						break
					case 20:
						Y30 = (W30[1] * W30[2]) / W30[0]
						break
					case 1:
						Y30 = W30[0] * W30[1]
						break
					case 9:
						Y30 = W30[1] * W30[2] * W30[3] + W30[4] * W30[0] + W30[5]
						break
					case 18:
						Y30 = (((W30[1] + W30[0]) * -W30[4]) / W30[5] / -W30[2]) * W30[3]
						break
					case 21:
						Y30 = (W30[2] - W30[0]) * W30[1] - W30[4] + W30[3]
						break
					case 14:
						Y30 = (W30[1] - W30[0]) / W30[2]
						break
					case 6:
						Y30 = W30[1] ^ W30[0]
						break
					case 22:
						Y30 = W30[1] - W30[2] + W30[0]
						break
					case 2:
						Y30 = W30[0] - W30[1]
						break
					case 11:
						Y30 = W30[0] * W30[3] * W30[2] + W30[4] * +W30[1]
						break
					case 23:
						Y30 = W30[0] % W30[1]
						break
					case 10:
						Y30 = (W30[2] << W30[3]) - W30[0] + W30[1]
						break
					case 12:
						Y30 = W30[3] * W30[0] * W30[1] + W30[2]
						break
					case 15:
						Y30 = W30[1] + W30[2] + W30[0]
						break
					case 7:
						Y30 = W30[1] * W30[0] * W30[2]
						break
					case 19:
						Y30 = W30[0] * W30[2] * W30[1] - W30[3]
						break
					case 4:
						Y30 = W30[0] + W30[1]
						break
				}
				return Y30
			},
			V30: function(P40) {
				n30 = P40
			},
		}
	})()
	o2OG.b7G = function() {
		return typeof o2OG.D7G.B6l === 'function'
			? o2OG.D7G.B6l.apply(o2OG.D7G, arguments)
			: o2OG.D7G.B6l
	}
	o2OG.d7G = function() {
		return typeof o2OG.D7G.B6l === 'function'
			? o2OG.D7G.B6l.apply(o2OG.D7G, arguments)
			: o2OG.D7G.B6l
	}
	o2OG.D7G = (function() {
		var H6l = function(V6l, u6l) {
				var d6l = u6l & 0xffff
				var D6l = u6l - d6l
				return (((D6l * V6l) | 0) + ((d6l * V6l) | 0)) | 0
			},
			M6l = function(G6l, F6l, s6l) {
				var K6l = 0xcc9e2d51,
					j6l = 0x1b873593
				var p6l = s6l
				var O6l = F6l & ~0x3
				for (var L6l = 0; L6l < O6l; L6l += 4) {
					var g6l =
						(G6l.x2hR(L6l) & 0xff) |
						((G6l.x2hR(L6l + 1) & 0xff) << 8) |
						((G6l.x2hR(L6l + 2) & 0xff) << 16) |
						((G6l.x2hR(L6l + 3) & 0xff) << 24)
					g6l = H6l(g6l, K6l)
					g6l = ((g6l & 0x1ffff) << 15) | (g6l >>> 17)
					g6l = H6l(g6l, j6l)
					p6l ^= g6l
					p6l = ((p6l & 0x7ffff) << 13) | (p6l >>> 19)
					p6l = (p6l * 5 + 0xe6546b64) | 0
				}
				g6l = 0
				switch (F6l % 4) {
					case 3:
						g6l = (G6l.x2hR(O6l + 2) & 0xff) << 16
					case 2:
						g6l |= (G6l.x2hR(O6l + 1) & 0xff) << 8
					case 1:
						g6l |= G6l.x2hR(O6l) & 0xff
						g6l = H6l(g6l, K6l)
						g6l = ((g6l & 0x1ffff) << 15) | (g6l >>> 17)
						g6l = H6l(g6l, j6l)
						p6l ^= g6l
				}
				p6l ^= F6l
				p6l ^= p6l >>> 16
				p6l = H6l(p6l, 0x85ebca6b)
				p6l ^= p6l >>> 13
				p6l = H6l(p6l, 0xc2b2ae35)
				p6l ^= p6l >>> 16
				return p6l
			}
		return { B6l: M6l }
	})()
	o2OG.O3P = function() {
		return typeof o2OG.C3P.j3j === 'function'
			? o2OG.C3P.j3j.apply(o2OG.C3P, arguments)
			: o2OG.C3P.j3j
	}
	o2OG.e40 = function() {
		return typeof o2OG.S40.V30 === 'function'
			? o2OG.S40.V30.apply(o2OG.S40, arguments)
			: o2OG.S40.V30
	}
	o2OG.C3P = (function() {
		var z3P = 2
		for (; z3P !== 9; ) {
			switch (z3P) {
				case 2:
					var p3P = [arguments]
					p3P[1] = undefined
					p3P[5] = {}
					p3P[5].j3j = function() {
						var m3P = 2
						for (; m3P !== 90; ) {
							switch (m3P) {
								case 56:
									N3P[92] = N3P[9][N3P[87]]
									try {
										N3P[80] = N3P[92][N3P[77]]() ? N3P[74] : N3P[79]
									} catch (N9x) {
										N3P[80] = N3P[79]
									}
									m3P = 77
									break
								case 14:
									N3P[8].i0t = ['P1t']
									N3P[8].L0t = function() {
										var v3j = typeof W96d === 'function'
										return v3j
									}
									N3P[2] = N3P[8]
									m3P = 11
									break
								case 69:
									m3P = (function() {
										var H3P = 2
										for (; H3P !== 22; ) {
											switch (H3P) {
												case 5:
													return
													break
												case 10:
													H3P = g3P[9][N3P[56]] === N3P[74] ? 20 : 19
													break
												case 4:
													g3P[1] = {}
													g3P[5] = []
													g3P[4] = 0
													H3P = 8
													break
												case 25:
													g3P[2] = true
													H3P = 24
													break
												case 16:
													H3P = g3P[4] < g3P[5].length ? 15 : 23
													break
												case 18:
													g3P[2] = false
													H3P = 17
													break
												case 19:
													g3P[4]++
													H3P = 7
													break
												case 6:
													g3P[9] = g3P[0][0][g3P[4]]
													H3P = 14
													break
												case 11:
													g3P[1][g3P[9][N3P[89]]].t += true
													H3P = 10
													break
												case 20:
													g3P[1][g3P[9][N3P[89]]].h += true
													H3P = 19
													break
												case 23:
													return g3P[2]
													break
												case 12:
													g3P[5].Z96d(g3P[9][N3P[89]])
													H3P = 11
													break
												case 1:
													H3P = g3P[0][0].length === 0 ? 5 : 4
													break
												case 2:
													var g3P = [arguments]
													H3P = 1
													break
												case 14:
													H3P = typeof g3P[1][g3P[9][N3P[89]]] === 'undefined' ? 13 : 11
													break
												case 13:
													g3P[1][g3P[9][N3P[89]]] = function() {
														var l3P = 2
														for (; l3P !== 9; ) {
															switch (l3P) {
																case 5:
																	A3P[5].h = 0
																	A3P[5].t = 0
																	return A3P[5]
																	break
																case 2:
																	var A3P = [arguments]
																	A3P[5] = {}
																	l3P = 5
																	break
															}
														}
													}.t56d(this, arguments)
													H3P = 12
													break
												case 17:
													g3P[4] = 0
													H3P = 16
													break
												case 15:
													g3P[8] = g3P[5][g3P[4]]
													g3P[6] = g3P[1][g3P[8]].h / g3P[1][g3P[8]].t
													H3P = 26
													break
												case 7:
													H3P = g3P[4] < g3P[0][0].length ? 6 : 18
													break
												case 26:
													H3P = g3P[6] >= 0.5 ? 25 : 24
													break
												case 24:
													g3P[4]++
													H3P = 16
													break
												case 8:
													g3P[4] = 0
													H3P = 7
													break
											}
										}
									})(N3P[16])
										? 68
										: 67
									break
								case 59:
									N3P[89] = 's0t'
									m3P = 58
									break
								case 70:
									N3P[87]++
									m3P = 57
									break
								case 58:
									N3P[87] = 0
									m3P = 57
									break
								case 40:
									N3P[94] = N3P[39]
									N3P[86] = {}
									N3P[86].i0t = ['P1t']
									N3P[86].L0t = function() {
										var b9x = false
										var g9x = []
										try {
											for (var s9x in console) g9x.Z96d(s9x)
											b9x = g9x.length === 0
										} catch (q9x) {}
										var H9x = b9x
										return H9x
									}
									N3P[85] = N3P[86]
									m3P = 54
									break
								case 57:
									m3P = N3P[87] < N3P[9].length ? 56 : 69
									break
								case 33:
									N3P[22].i0t = ['P1t']
									N3P[22].L0t = function() {
										var k9x = typeof Y96d === 'function'
										return k9x
									}
									N3P[51] = N3P[22]
									N3P[82] = {}
									m3P = 29
									break
								case 45:
									N3P[9].Z96d(N3P[94])
									N3P[16] = []
									N3P[74] = 'b0t'
									m3P = 63
									break
								case 29:
									N3P[82].i0t = ['o0t']
									N3P[82].L0t = function() {
										var e9x = function() {
											return [] + 'a'.concat('a')
										}
										var f9x = !/\x5b\u005d/.v96d(e9x + []) && /\u0061\x61/.v96d(e9x + [])
										return f9x
									}
									m3P = 44
									break
								case 68:
									m3P = 3 ? 68 : 67
									break
								case 76:
									m3P = N3P[95] < N3P[92][N3P[81]].length ? 75 : 70
									break
								case 71:
									N3P[95]++
									m3P = 76
									break
								case 77:
									N3P[95] = 0
									m3P = 76
									break
								case 48:
									N3P[9].Z96d(N3P[68])
									N3P[9].Z96d(N3P[85])
									N3P[9].Z96d(N3P[1])
									m3P = 45
									break
								case 67:
									p3P[1] = 12
									return 8
									break
								case 54:
									N3P[9].Z96d(N3P[5])
									N3P[9].Z96d(N3P[67])
									N3P[9].Z96d(N3P[37])
									N3P[9].Z96d(N3P[2])
									N3P[9].Z96d(N3P[3])
									N3P[9].Z96d(N3P[51])
									m3P = 48
									break
								case 16:
									N3P[4].L0t = function() {
										var Y3j = function() {
											return 'aaa'.includes('a')
										}
										var Z3j = /\u0074\u0072\u0075\u0065/.v96d(Y3j + [])
										return Z3j
									}
									N3P[3] = N3P[4]
									N3P[84] = {}
									N3P[84].i0t = ['o0t']
									N3P[84].L0t = function() {
										var t9x = function() {
											return 'a'.codePointAt(0)
										}
										var y9x = /\x39\x37/.v96d(t9x + [])
										return y9x
									}
									m3P = 24
									break
								case 44:
									N3P[37] = N3P[82]
									N3P[39] = {}
									N3P[39].i0t = ['o0t']
									N3P[39].L0t = function() {
										var V9x = function() {
											return 'X'.toLocaleLowerCase()
										}
										var h9x = /\u0078/.v96d(V9x + [])
										return h9x
									}
									m3P = 40
									break
								case 75:
									N3P[27] = {}
									N3P[27][N3P[89]] = N3P[92][N3P[81]][N3P[95]]
									N3P[27][N3P[56]] = N3P[80]
									N3P[16].Z96d(N3P[27])
									m3P = 71
									break
								case 20:
									N3P[7].L0t = function() {
										var W3j = function() {
											return 'aaaa|a'.substr(0, 3)
										}
										var X3j = !/\x7c/.v96d(W3j + [])
										return X3j
									}
									N3P[5] = N3P[7]
									N3P[4] = {}
									N3P[4].i0t = ['o0t']
									m3P = 16
									break
								case 5:
									return 24
									break
								case 24:
									N3P[68] = N3P[84]
									N3P[57] = {}
									N3P[57].i0t = ['P1t']
									N3P[57].L0t = function() {
										var p9x = typeof X96d === 'function'
										return p9x
									}
									m3P = 35
									break
								case 11:
									N3P[7] = {}
									N3P[7].i0t = ['o0t']
									m3P = 20
									break
								case 1:
									m3P = p3P[1] ? 5 : 4
									break
								case 4:
									N3P[9] = []
									N3P[6] = {}
									N3P[6].i0t = ['o0t']
									N3P[6].L0t = function() {
										var l3j = function() {
											return atob('PQ==')
										}
										var M3j = !/\u0061\u0074\u006f\u0062/.v96d(l3j + [])
										return M3j
									}
									N3P[1] = N3P[6]
									N3P[8] = {}
									m3P = 14
									break
								case 63:
									N3P[79] = 'w0t'
									N3P[81] = 'i0t'
									N3P[56] = 'U0t'
									N3P[77] = 'L0t'
									m3P = 59
									break
								case 2:
									var N3P = [arguments]
									m3P = 1
									break
								case 35:
									N3P[67] = N3P[57]
									N3P[22] = {}
									m3P = 33
									break
							}
						}
					}
					return p3P[5]
					break
			}
		}
	})()
	var __js_core_market_
	o2OG.n3P()
	__js_core_market_ = function(x3P) {
		var V1z,
			K0z,
			h0z,
			R0z,
			Y0z,
			c0z,
			j0z,
			J0z,
			F0z,
			X0z,
			L0z,
			x0z,
			l0z,
			r0z,
			g0z,
			n0z,
			Z0z,
			i0z,
			b0z,
			d0z,
			D0z,
			T0z,
			N0z,
			G0z,
			O0z,
			P0z,
			u0z,
			E0z,
			A0z,
			s0z,
			e0z,
			p0z,
			o0z,
			v0z,
			q0z,
			k0z,
			M0z,
			S0z,
			C0z,
			H0z,
			U0z,
			I0z,
			m0z,
			Q0z,
			a0z,
			f0z,
			z0z,
			W0z,
			w0z,
			y0z,
			B0z,
			t0z,
			V0z,
			K9z,
			h9z,
			R9z,
			Y9z,
			c9z,
			j9z,
			J9z,
			F9z,
			X9z,
			L9z,
			x9z,
			l9z,
			r9z,
			g9z,
			n9z,
			Z9z,
			i9z,
			b9z,
			d9z,
			D9z,
			T9z,
			N9z,
			G9z,
			O9z,
			P9z,
			e3P,
			Q3P,
			a3P
		V1z = '9'
		V1z += ':'
		V1z += '30'
		K0z = '9:'
		K0z += '30'
		h0z = '1'
		h0z += '3:00'
		R0z = 'p'
		R0z += 'r'
		R0z += 'e'
		Y0z = '9'
		Y0z += ':'
		Y0z += '3'
		Y0z += '0'
		c0z = '2012-'
		c0z += '11'
		c0z += '-23'
		j0z = '9'
		j0z += ':'
		j0z += '3'
		j0z += '0'
		J0z = '2'
		J0z += '012-0'
		J0z += '9-03'
		F0z = '20'
		F0z += '1'
		F0z += '2-'
		F0z += '04-06'
		X0z = '1'
		X0z += '3:0'
		X0z += '0'
		L0z = '2013'
		L0z += '-12-'
		L0z += '24'
		x0z = '9'
		x0z += ':'
		x0z += '3'
		x0z += '0'
		l0z = '201'
		l0z += '3-1'
		l0z += '2-2'
		l0z += '4'
		r0z = '9'
		r0z += ':'
		r0z += '3'
		r0z += '0'
		g0z = 'p'
		g0z += 'r'
		g0z += 'e'
		n0z = '9'
		n0z += ':'
		n0z += '30'
		Z0z = 'pr'
		Z0z += 'e'
		i0z = '4'
		i0z += ':00'
		b0z = '2'
		b0z += '014'
		b0z += '-12'
		b0z += '-24'
		d0z = '4:'
		d0z += '0'
		d0z += '0'
		D0z = '1'
		D0z += '3'
		D0z += ':0'
		D0z += '0'
		T0z = 'p'
		T0z += 're'
		N0z = '13'
		N0z += ':00'
		G0z = '2015-12'
		G0z += '-24'
		O0z = '2'
		O0z += '015-12-'
		O0z += '24'
		P0z = '201'
		P0z += '5-11-27'
		u0z = '9'
		u0z += ':'
		u0z += '3'
		u0z += '0'
		E0z = '20'
		E0z += '15-11-2'
		E0z += '6'
		A0z = '2015'
		A0z += '-09-07'
		s0z = '2015-07-'
		s0z += '03'
		e0z = '20'
		e0z += '15-04-'
		e0z += '03'
		p0z = '2015-02-1'
		p0z += '6'
		o0z = '1'
		o0z += '3'
		o0z += ':'
		o0z += '00'
		v0z = '9'
		v0z += ':'
		v0z += '30'
		q0z = '2'
		q0z += '016-0'
		q0z += '9-'
		q0z += '05'
		k0z = '2016-0'
		k0z += '5-30'
		M0z = '2016-03'
		M0z += '-25'
		S0z = '201'
		S0z += '7-'
		S0z += '1'
		S0z += '2-26'
		C0z = '9:3'
		C0z += '0'
		H0z = '2'
		H0z += '017'
		H0z += '-11-24'
		U0z = 'p'
		U0z += 'r'
		U0z += 'e'
		I0z = '4'
		I0z += ':00'
		m0z = '2017'
		m0z += '-'
		m0z += '0'
		m0z += '2-20'
		Q0z = '2012-01'
		Q0z += '-'
		Q0z += '02'
		a0z = '*-1'
		a0z += '2-25'
		f0z = 'p'
		f0z += 'o'
		f0z += 's'
		f0z += 't'
		z0z = '1'
		z0z += '6'
		z0z += ':0'
		z0z += '0'
		W0z = 'p'
		W0z += 'os'
		W0z += 't'
		w0z = '16:'
		w0z += '00'
		y0z = 'p'
		y0z += 'r'
		y0z += 'e'
		B0z = 'p'
		B0z += 'r'
		B0z += 'e'
		t0z = '0'
		t0z += '4'
		t0z += ':'
		t0z += '00'
		V0z = 'p'
		V0z += 'r'
		V0z += 'e'
		K9z = '04'
		K9z += ':0'
		K9z += '0'
		h9z = '09:3'
		h9z += '0'
		R9z = '1'
		R9z += '6'
		R9z += ':'
		R9z += '00'
		Y9z = 'Am'
		Y9z += 'erica/Ne'
		Y9z += 'w_Yor'
		Y9z += 'k'
		c9z = '1'
		c9z += '8:0'
		c9z += '0'
		j9z = '1'
		j9z += '7'
		j9z += ':15'
		J9z = '00'
		J9z += ':'
		J9z += '00'
		F9z = '2'
		F9z += '4'
		F9z += ':'
		F9z += '00'
		X9z = '2'
		X9z += '4'
		X9z += ':00'
		L9z = '18'
		L9z += ':00'
		x9z = 'M'
		x9z += 'ETA'
		x9z += 'L'
		x9z += 'S'
		l9z = '17:'
		l9z += '00'
		r9z = '17:'
		r9z += '00'
		g9z = '00:'
		g9z += '00'
		n9z = '2'
		n9z += '4:00'
		Z9z = '1'
		Z9z += '7:00'
		i9z = '17'
		i9z += ':0'
		i9z += '0'
		b9z = '00'
		b9z += ':0'
		b9z += '0'
		d9z = '24'
		d9z += ':'
		d9z += '0'
		d9z += '0'
		D9z = '2'
		D9z += '4'
		D9z += ':'
		D9z += '00'
		T9z = '0'
		T9z += '0:'
		T9z += '00'
		N9z = '2'
		N9z += '4:'
		N9z += '00'
		G9z = '0'
		G9z += '0'
		G9z += ':'
		G9z += '00'
		O9z = '2'
		O9z += '4:'
		O9z += '00'
		P9z = 'm'
		P9z += 'il'
		P9z += 'lise'
		P9z += 'cond'
		if (!x3P) {
			x3P = {}
		}
		e3P = x3P.CIQ
		if (!e3P) {
			e3P = function() {}
			x3P.CIQ = e3P
		}
		e3P.Market = function(L3P) {
			var n40 = o2OG
			var E9z, S9z, M9z, k9z, Q2G, m2G, I2G, u9z
			E9z = 'M'
			E9z += 'ark'
			E9z += 'et'
			this.market_def = !{}
			this.rules = !'1'
			this.normalHours = []
			n40.O3P()
			this.extraHours = []
			this.class_name = E9z
			if (typeof timezoneJS === 'undefined') {
				this.tz_lib = Date
				S9z = -1150440119
				M9z = 1357518098
				k9z = 2
				for (var v9z = 1; n40.d7G(v9z.toString(), v9z.toString().length, 60157) !== S9z; v9z++) {
					k9z += 2
				}
				if (n40.d7G(k9z.toString(), k9z.toString().length, 59481) !== M9z) {
				}
			} else {
				this.tz_lib = timezoneJS.Date
			}
			this.market_tz = ''
			this.hour_aligned = ![]
			this.convertOnDaily = !'1'
			this.enabled_by_default = !{}
			if (typeof L3P != 'undefined' && L3P && L3P != {}) {
				if (L3P.market_definition) {
					L3P = L3P.market_definition
				}
				if (L3P.rules) {
					this.rules = L3P.rules
				}
				if (L3P.market_tz) {
					this.market_tz = L3P.market_tz
				}
				if (L3P.convertOnDaily) {
					this.convertOnDaily = L3P.convertOnDaily
				}
				if (typeof L3P.hour_aligned) {
					this.hour_aligned = L3P.hour_aligned
				}
				if (typeof L3P.enabled_by_default !== 'undefined') {
					if (L3P.enabled_by_default instanceof Array) {
						this.enabled_by_default = L3P.enabled_by_default
					}
				}
				this.market_def = L3P
				if (this.market_def.name === undefined) {
					Q2G = 1791177828
					m2G = -2138395429
					I2G = +'2'
					for (var H2G = 1; n40.d7G(H2G.toString(), H2G.toString().length, 9002) !== Q2G; H2G++) {
						u9z = 'no '
						u9z += 'mar'
						u9z += 'ket name specified'
						this.market_def.name = u9z
						n40.e40(0)
						I2G += n40.s40('2', 0)
					}
					if (n40.d7G(I2G.toString(), I2G.toString().length, 42925) !== m2G) {
						this.market_def.name = ''
					}
				}
			} else {
				return
			}
			e3P.Market._createTimeSegments(this)
		}
		e3P.Market.MILLISECOND = P9z
		e3P.Market.SECOND = 'second'
		e3P.Market.MINUTE = 'minute'
		e3P.Market.HOUR = 'hour'
		e3P.Market.DAY = 'day'
		e3P.Market.WEEK = 'week'
		e3P.Market.MONTH = 'month'
		e3P.Market.GLOBEX = {
			name: 'GLOBEX',
			market_tz: 'America/Chicago',
			hour_aligned: !0,
			rules: [
				{ dayofweek: +'0', open: '15:00', close: O9z },
				{ dayofweek: 1, open: G9z, close: N9z },
				{ dayofweek: 2, open: T9z, close: D9z },
				{ dayofweek: 3, open: '00:00', close: d9z },
				{ dayofweek: 4, open: '00:00', close: '24:00' },
				{ dayofweek: 5, open: '00:00', close: '18:00' },
			],
		}
		e3P.Market.FOREX = {
			name: 'FOREX',
			market_tz: 'America/New_York',
			hour_aligned: !!1,
			rules: [
				{ dayofweek: '0' >> 151595744, open: '15:00', close: '24:00' },
				{ dayofweek: 1, open: b9z, close: i9z },
				{ dayofweek: 1, open: '17:00', close: '24:00' },
				{ dayofweek: 2, open: '00:00', close: Z9z },
				{ dayofweek: 2, open: '17:00', close: n9z },
				{ dayofweek: 3, open: g9z, close: '17:00' },
				{ dayofweek: 3, open: '17:00', close: '24:00' },
				{ dayofweek: 4, open: '00:00', close: r9z },
				{ dayofweek: 4, open: '17:00', close: '24:00' },
				{ dayofweek: +'5', open: '00:00', close: l9z },
			],
		}
		e3P.Market.METALS = {
			name: x9z,
			market_tz: 'America/New_York',
			hour_aligned: !!{},
			rules: [
				{ dayofweek: 0, open: L9z, close: '24:00' },
				{ dayofweek: 1, open: '00:00', close: '17:15' },
				{ dayofweek: 1, open: '18:00', close: X9z },
				{ dayofweek: 2, open: '00:00', close: '17:15' },
				{ dayofweek: 2, open: '18:00', close: '24:00' },
				{ dayofweek: 3, open: '00:00', close: '17:15' },
				{ dayofweek: +'3', open: '18:00', close: F9z },
				{ dayofweek: 4, open: J9z, close: j9z },
				{ dayofweek: 4, open: c9z, close: '24:00' },
				{ dayofweek: 5, open: '00:00', close: '17:15' },
			],
		}
		e3P.Market.NYSE = {
			name: 'NYSE',
			market_tz: Y9z,
			hour_aligned: ![],
			rules: [
				{ dayofweek: '1' * 1, open: '09:30', close: '16:00' },
				{ dayofweek: 2, open: '09:30', close: R9z },
				{ dayofweek: 3, open: h9z, close: '16:00' },
				{ dayofweek: '4' ^ 0, open: '09:30', close: '16:00' },
				{ dayofweek: 5, open: '09:30', close: '16:00' },
				{ dayofweek: 1, open: '04:00', close: '09:30', name: 'pre' },
				{ dayofweek: 2, open: K9z, close: '09:30', name: V0z },
				{ dayofweek: 3, open: t0z, close: '09:30', name: 'pre' },
				{ dayofweek: 4, open: '04:00', close: '09:30', name: B0z },
				{ dayofweek: 5, open: '04:00', close: '09:30', name: y0z },
				{ dayofweek: 1, open: '16:00', close: '20:00', name: 'post' },
				{ dayofweek: 2, open: w0z, close: '20:00', name: 'post' },
				{ dayofweek: 3, open: '16:00', close: '20:00', name: 'post' },
				{ dayofweek: 4, open: '16:00', close: '20:00', name: W0z },
				{ dayofweek: 5, open: z0z, close: '20:00', name: f0z },
				{ date: a0z, open: '00:00', close: '00:00' },
				{ date: '*-07-04', open: '00:00', close: '00:00' },
				{ date: '*-01-01', open: '00:00', close: '00:00' },
				{ date: Q0z, open: '00:00', close: '00:00' },
				{ date: '2017-01-02' },
				{ date: '2017-01-16' },
				{ date: m0z },
				{ date: '2017-04-14' },
				{ date: '2017-05-29' },
				{ date: '2017-07-03', open: I0z, close: '9:30', name: 'pre' },
				{ date: '2017-07-03', open: '9:30', close: '13:00' },
				{ date: '2017-09-04' },
				{ date: '2017-11-23' },
				{ date: '2017-11-24', open: '4:00', close: '9:30', name: U0z },
				{ date: H0z, open: C0z, close: '13:00' },
				{ date: S0z },
				{ date: '2016-01-18' },
				{ date: '2016-02-15' },
				{ date: M0z },
				{ date: k0z },
				{ date: q0z },
				{ date: '2016-11-24' },
				{ date: '2016-11-25', open: '4:00', close: '9:30', name: 'pre' },
				{ date: '2016-11-25', open: v0z, close: o0z },
				{ date: '2016-12-26' },
				{ date: '2015-01-19' },
				{ date: p0z },
				{ date: e0z },
				{ date: '2015-05-25' },
				{ date: s0z },
				{ date: A0z },
				{ date: E0z },
				{ date: '2015-11-27', open: '4:00', close: u0z, name: 'pre' },
				{ date: P0z, open: '9:30', close: '13:00' },
				{ date: O0z, open: '4:00', close: '9:30', name: 'pre' },
				{ date: G0z, open: '9:30', close: N0z },
				{ date: '2014-01-20' },
				{ date: '2014-02-17' },
				{ date: '2014-04-18' },
				{ date: '2014-05-26' },
				{ date: '2014-09-01' },
				{ date: '2014-11-27' },
				{ date: '2014-07-03', open: '4:00', close: '9:30', name: T0z },
				{ date: '2014-07-03', open: '9:30', close: D0z },
				{ date: '2014-11-28', open: d0z, close: '9:30', name: 'pre' },
				{ date: '2014-11-28', open: '9:30', close: '13:00' },
				{ date: b0z, open: i0z, close: '9:30', name: Z0z },
				{ date: '2014-12-24', open: '9:30', close: '13:00' },
				{ date: '2013-01-21' },
				{ date: '2013-02-18' },
				{ date: '2013-03-29' },
				{ date: '2013-05-27' },
				{ date: '2013-09-02' },
				{ date: '2013-11-28' },
				{ date: '2013-07-03', open: '4:00', close: n0z, name: g0z },
				{ date: '2013-07-03', open: '9:30', close: '13:00' },
				{ date: '2013-11-29', open: '4:00', close: '9:30', name: 'pre' },
				{ date: '2013-11-29', open: r0z, close: '13:00' },
				{ date: l0z, open: '4:00', close: x0z, name: 'pre' },
				{ date: L0z, open: '9:30', close: X0z },
				{ date: '2012-01-16' },
				{ date: '2012-02-20' },
				{ date: F0z },
				{ date: '2012-05-28' },
				{ date: J0z },
				{ date: '2012-10-29' },
				{ date: '2012-10-30' },
				{ date: '2012-11-22' },
				{ date: '2012-07-03', open: '4:00', close: j0z, name: 'pre' },
				{ date: '2012-07-03', open: '9:30', close: '13:00' },
				{ date: c0z, open: '4:00', close: Y0z, name: R0z },
				{ date: '2012-11-23', open: '9:30', close: h0z },
				{ date: '2012-12-24', open: '4:00', close: K0z, name: 'pre' },
				{ date: '2012-12-24', open: V1z, close: '13:00' },
			],
		}
		e3P.Market.Symbology = function() {}
		e3P.Market.Symbology.isForeignSymbol = function(J3P) {
			var N40 = o2OG
			N40.O3P()
			if (!J3P) {
				return ![]
			}
			N40.e40(1)
			var H1z = N40.s40(17, 100)
			N40.e40(2)
			var C1z = N40.o40(11, 12)
			return J3P.indexOf(3690 < H1z ? ('a', !!'') : '.') != C1z
		}
		e3P.Market.Symbology.isFuturesSymbol = function(d3P) {
			var P8G, O8G, G8G
			if (!d3P) {
				P8G = 1417798970
				O8G = -1123297951
				G8G = 2
				for (
					var T8G = 1;
					o2OG.d7G(T8G.toString(), T8G.toString().length, '72301' >> 392379008) !== P8G;
					T8G++
				) {
					return !0
				}
				if (o2OG.d7G(G8G.toString(), G8G.toString().length, 75377) !== O8G) {
					return !'1'
				}
			}
			if (
				d3P.indexOf((+'8660', +'9020') !== 469.49 ? '/' : 9048 === 6360 ? 181.01 : !!'') !== 0 ||
				d3P == '/'
			) {
				return ![]
			}
			o2OG.n3P()
			return !''
		}
		e3P.Market.Symbology.isForexSymbol = function(G3P) {
			var j50 = o2OG
			var F2G, J2G, j2G, K8G, V2G, t2G
			if (!G3P) {
				F2G = 6848950
				J2G = 861627745
				j2G = +'2'
				for (
					var Y2G = 1;
					j50.d7G(Y2G.toString(), Y2G.toString().length, '72431' * 1) !== F2G;
					Y2G++
				) {
					return !!{}
				}
				if (j50.d7G(j2G.toString(), j2G.toString().length, 86027) !== J2G) {
					return !'1'
				}
			}
			if (e3P.Market.Symbology.isForeignSymbol(G3P)) {
				return !'1'
			}
			if (e3P.Market.Symbology.isFuturesSymbol(G3P)) {
				return !!0
			}
			if (G3P.length < 6 || G3P.length > 7) {
				return !1
			}
			if (G3P.length == 6 && G3P[5] == 'X') {
				j50.f40(3)
				K8G = -j50.s40(2147483647, '150387268')
				V2G = +'1023462008'
				t2G = 2
				for (var y2G = 1; j50.b7G(y2G.toString(), y2G.toString().length, 8175) !== K8G; y2G++) {
					return !!{}
				}
				if (j50.b7G(t2G.toString(), t2G.toString().length, 90782) !== V2G) {
					return !!''
				}
			}
			if (/\^?[A-Za-z]{6}/.test(G3P)) {
				return !!{}
			}
			j50.n3P()
			return !!0
		}
		e3P.Market.Symbology.isForexMetal = function(s3P, b3P) {
			var E50 = o2OG
			var t1z, W9z, z9z, f9z
			t1z = ',X'
			t1z += 'AU,XPD,XPT,X'
			t1z += 'AG,'
			if (!s3P) {
				return !!''
			}
			if (!e3P.Market.Symbology.isForexSymbol(s3P)) {
				return !1
			}
			if (s3P.charAt('0' - 0) != '^') {
				E50.f40(4)
				s3P = E50.s40(
					(7730, 490) == ('6071' << 665648960, 4110)
						? 924.04 > 330.74
							? 4290 <= 2145
								? (5.7e3, 's')
								: (0x17a9, 't')
							: 0xfb4
						: '^',
					s3P,
				)
			}
			if (
				',XAU,XPD,XPT,XAG,'.indexOf(
					',' + s3P.substr(4, '3' << 886443680) + ((6510, 9830) != 577.67 ? ',' : 3.14e3),
				) != -1
			) {
				W9z = +'22689399'
				z9z = -538033976
				f9z = 2
				for (var Q9z = 1; E50.d7G(Q9z.toString(), Q9z.toString().length, 27524) !== W9z; Q9z++) {
					return !![]
				}
				if (E50.d7G(f9z.toString(), f9z.toString().length, +'60653') !== z9z) {
					return !!0
				}
			} else if (
				!b3P &&
				t1z.indexOf(
					',' +
						s3P.substr(1, 3) +
						(2987 === 7960 ? (145 <= (622, 9855) ? '196.44' * 1 : !{}) : ','),
				) != -1
			) {
				return !![]
			}
			E50.n3P()
			return !{}
		}
		e3P.Market.Symbology.isForexFuturesSymbol = function(D3P) {
			if (e3P.Market.Symbology.isForexSymbol(D3P)) {
				return !''
			}
			o2OG.n3P()
			if (e3P.Market.Symbology.isFuturesSymbol(D3P)) {
				return !''
			}
			return !!''
		}
		e3P.Market.Symbology.factory = function(u3P) {
			var v50 = o2OG
			var U3P, r2G, l2G, x2G
			U3P = u3P.symbol
			if (e3P.Market.Symbology.isForeignSymbol(U3P)) {
				return null
			}
			if (e3P.Market.Symbology.isFuturesSymbol(U3P)) {
				return e3P.Market.GLOBEX
			}
			if (e3P.Market.Symbology.isForexMetal(U3P)) {
				return e3P.Market.METALS
			}
			if (e3P.Market.Symbology.isForexSymbol(U3P)) {
				return e3P.Market.FOREX
			}
			v50.e40(5)
			r2G = -v50.s40('849801660', 480858624)
			l2G = -1670450099
			x2G = 2
			for (var X2G = 1; v50.b7G(X2G.toString(), X2G.toString().length, 57936) !== r2G; X2G++) {
				return e3P.Market.NYSE
			}
			if (v50.d7G(x2G.toString(), x2G.toString().length, 52532) !== l2G) {
				return e3P.Market.NYSE
			}
		}
		e3P.Market.prototype._find_next_segment = function(q3P, y3P) {
			var Q50 = o2OG
			var o9z, p9z, e9z, v3P, Z3P, k3P, B3P, m9z, I9z, U9z
			Q50.n3P()
			if (!this.market_def) {
				o9z = -1559193298
				p9z = -1481295476
				e9z = 2
				for (
					var A9z = '1' | 0;
					Q50.d7G(A9z.toString(), A9z.toString().length, 29251) !== o9z;
					A9z++
				) {
					return 1
				}
				if (Q50.d7G(e9z.toString(), e9z.toString().length, 42051) !== p9z) {
					return 1
				}
				return null
			}
			if (!this.rules) {
				return null
			}
			v3P = new Date(q3P)
			Z3P = this.newIterator({ begin: v3P, interval: 1 })
			if (this._wasOpenIntraDay(v3P)) {
				k3P = this.zseg_match.close_parts.hours
				B3P = this.zseg_match.close_parts.minutes
				Q50.e40(6)
				m9z = -Q50.o40(0, '473385235')
				I9z = 1757028286
				Q50.f40(1)
				U9z = Q50.o40('2', 1)
				for (var C9z = 1; Q50.b7G(C9z.toString(), C9z.toString().length, 89068) !== m9z; C9z++) {
					v3P.setHours(k3P)
					v3P.setMinutes(B3P)
					Z3P = this.newIterator({ begin: v3P, interval: 1 })
					U9z += 2
				}
				if (Q50.d7G(U9z.toString(), U9z.toString().length, '37443' - 0) !== I9z) {
					v3P.setHours(k3P)
					v3P.setMinutes(B3P)
					Z3P = this.newIterator({ begin: v3P, interval: 3 })
				}
			}
			return Z3P.next()
		}
		e3P.Market.prototype._find_prev_segment = function(E3P, t3P) {
			var i3P, r3P, X3P, I3P
			if (!this.market_def) {
				return null
			}
			if (!this.rules) {
				return null
			}
			i3P = new Date(E3P)
			o2OG.n3P()
			r3P = this.newIterator({ begin: i3P, interval: 1 })
			if (this._wasOpenIntraDay(i3P)) {
				X3P = this.zseg_match.open_parts.hours
				I3P = this.zseg_match.open_parts.minutes
				i3P.setHours(X3P)
				i3P.setMinutes(I3P)
				r3P = this.newIterator({ begin: i3P, interval: 1 })
				i3P = r3P.previous()
				if (this.zseg_match.close_parts.hours === X3P) {
					if (this.zseg_match.close_parts.minutes === I3P) {
						if (t3P) {
							return r3P.next()
						}
						return i3P
					}
				}
				if (this.zseg_match.adjacent_child) {
					return i3P
				}
				if (t3P) {
					return r3P.next()
				}
				return i3P
			}
			return r3P.previous()
		}
		e3P.Market.prototype.disableSession = function(W3P, K3P) {
			var f3P, R3P
			f3P = this
			R3P = ![]
			if (typeof K3P !== 'undefined' && K3P) {
				R3P = !!'1'
			}
			if (W3P) {
				for (var F3P = 0; F3P < this.normalHours.length; F3P++) {
					if (f3P.normalHours[F3P].name === W3P) {
						f3P.normalHours[F3P].enabled = R3P
					}
				}
				for (F3P = 0; F3P < this.extraHours.length; F3P++) {
					if (f3P.extraHours[F3P].name === W3P) {
						f3P.extraHours[F3P].enabled = R3P
					}
				}
			}
		}
		e3P.Market.prototype.enableSession = function(S2P) {
			o2OG.O3P()
			this.disableSession(S2P, 'enable_instead')
		}
		e3P.Market.prototype.getClose = function(j2P, w2P, P2P, h2P) {
			var r50 = o2OG
			var o2P, b2G, i2G, Z2G, G2G, N2G, T2G, T2P
			if (!this.market_def) {
				return null
			}
			r50.n3P()
			if (!this.rules) {
				return null
			}
			o2P = j2P ? j2P : new Date()
			o2P = this._convertToMarketTZ(o2P, P2P)
			if (typeof w2P !== 'undefined') {
				if (this._wasOpenIntraDay(o2P)) {
					if (this.zseg_match.name === w2P) {
						o2P.setHours(this.zseg_match.close_parts.hours)
						o2P.setMinutes(this.zseg_match.close_parts.minutes)
						o2P.setSeconds(0)
						b2G = -+'490209346'
						i2G = 1387109884
						Z2G = +'2'
						for (
							var g2G = '1' << 1217540416;
							r50.d7G(g2G.toString(), g2G.toString().length, 2013) !== b2G;
							g2G++
						) {
							o2P.setMilliseconds(6)
							o2P = this._convertFromMarketTZ(o2P, h2P)
							Z2G += 2
						}
						if (r50.d7G(Z2G.toString(), Z2G.toString().length, 57356) !== i2G) {
							o2P.setMilliseconds(0)
							o2P = this._convertFromMarketTZ(o2P, h2P)
						}
						return o2P
					}
				}
			} else {
				if (this._wasOpenDaily(o2P)) {
					G2G = 659021683
					N2G = 1040270491
					T2G = 2
					for (var d2G = 1; r50.d7G(d2G.toString(), d2G.toString().length, 52264) !== G2G; d2G++) {
						T2P = this.zseg_match
						T2G += 2
					}
					if (r50.b7G(T2G.toString(), T2G.toString().length, 4593) !== N2G) {
						T2P = this.zseg_match
					}
					while (T2P.child_) {
						T2P = T2P.child_
					}
					while (!T2P.enabled) {
						T2P = T2P.parent_
					}
					o2P.setHours(T2P.close_parts.hours)
					o2P.setMinutes(T2P.close_parts.minutes)
					o2P.setSeconds(0)
					o2P.setMilliseconds(0)
					o2P = this._convertFromMarketTZ(o2P, h2P)
					return o2P
				}
			}
			return null
		}
		e3P.Market.prototype.getNextClose = function(g2P, z2P, m2P) {
			var Y2P, A2P, N2P, p2P
			if (!this.market_def) {
				return null
			}
			if (!this.rules) {
				return null
			}
			Y2P = g2P ? g2P : new Date()
			Y2P = this._convertToMarketTZ(Y2P, z2P)
			if (!this._wasOpenIntraDay(Y2P)) {
				A2P = this.newIterator({ begin: Y2P, interval: 1 })
				Y2P = A2P.next()
			}
			N2P = Y2P.getDate()
			p2P = this.zseg_match
			while (p2P.adjacent_child) {
				p2P = p2P.adjacent_child
				o2OG.f40(0)
				N2P += o2OG.o40('1', 0)
			}
			Y2P.setDate(N2P)
			Y2P.setHours(p2P.close_parts.hours)
			Y2P.setMinutes(p2P.close_parts.minutes)
			Y2P.setSeconds(0)
			Y2P.setMilliseconds(0)
			Y2P = this._convertFromMarketTZ(Y2P, m2P)
			o2OG.n3P()
			return Y2P
		}
		e3P.Market.prototype.getNextOpen = function(l2P, M2P, c2P) {
			var o50 = o2OG
			var n5z, g5z, r5z, H2P
			if (!this.market_def) {
				return null
			}
			if (!this.rules) {
				return null
			}
			n5z = -203323576
			o50.e40(2)
			g5z = -o50.o40('1411221081', 0)
			r5z = 2
			for (
				var x5z = 1;
				o50.b7G(x5z.toString(), x5z.toString().length, '14913' >> 924333184) !== n5z;
				x5z++
			) {
				H2P = l2P ? l2P : new Date()
				r5z += 2
			}
			if (o50.b7G(r5z.toString(), r5z.toString().length, '9776' & 2147483647) !== g5z) {
				H2P = l2P ? l2P : new Date()
			}
			H2P = this._convertToMarketTZ(H2P, M2P)
			H2P = this._find_next_segment(H2P)
			if (this.zseg_match.adjacent_parent) {
				H2P = this.getNextOpen(H2P)
				H2P = this._convertFromMarketTZ(H2P, c2P)
				return H2P
			}
			H2P.setHours(this.zseg_match.open_parts.hours)
			H2P.setMinutes(this.zseg_match.open_parts.minutes)
			o50.O3P()
			H2P = this._convertFromMarketTZ(H2P, c2P)
			return H2P
		}
		e3P.Market.prototype.getOpen = function(n2P, O2P, a2P, e2P) {
			var V2P, C2P
			if (!this.market_def) {
				return null
			}
			if (!this.rules) {
				return null
			}
			V2P = n2P ? n2P : new Date()
			V2P = this._convertToMarketTZ(V2P, a2P)
			if (typeof O2P !== 'undefined') {
				if (this._wasOpenIntraDay(V2P)) {
					if (this.zseg_match.name == O2P) {
						V2P.setHours(this.zseg_match.open_parts.hours)
						V2P.setMinutes(this.zseg_match.open_parts.minutes)
						V2P.setSeconds(0)
						V2P.setMilliseconds(0)
						V2P = this._convertFromMarketTZ(V2P, e2P)
						return V2P
					}
				}
			} else {
				if (this._wasOpenDaily(V2P)) {
					C2P = this.zseg_match
					while (C2P.parent_) {
						C2P = C2P.parent_
					}
					while (!C2P.enabled) {
						C2P = C2P.child_
					}
					V2P.setHours(C2P.open_parts.hours)
					V2P.setMinutes(C2P.open_parts.minutes)
					o2OG.f40(6)
					V2P.setSeconds(o2OG.o40(0, '0'))
					V2P.setMilliseconds(0)
					V2P = this._convertFromMarketTZ(V2P, e2P)
					return V2P
				}
			}
			o2OG.n3P()
			return null
		}
		e3P.Market.prototype.getPreviousClose = function(x2P, L2P, J2P) {
			var Q2P
			if (!this.market_def) {
				return null
			}
			if (!this.rules) {
				return null
			}
			Q2P = x2P ? x2P : new Date()
			o2OG.n3P()
			Q2P = this._convertToMarketTZ(Q2P, L2P)
			Q2P = this._find_prev_segment(Q2P, !'1')
			if (this.zseg_match.adjacent_child) {
				return this.getPreviousClose(Q2P)
			}
			Q2P.setHours(this.zseg_match.close_parts.hours)
			Q2P.setMinutes(this.zseg_match.close_parts.minutes)
			Q2P = this._convertFromMarketTZ(Q2P, J2P)
			return Q2P
		}
		e3P.Market.prototype.getPreviousOpen = function(G2P, s2P, b2P) {
			var Y40 = o2OG
			var k5z, q5z, v5z, U5z, H5z, C5z, d2P
			if (!this.market_def) {
				k5z = 1471101625
				q5z = 1808705526
				Y40.f40(5)
				v5z = Y40.o40('2', 931935392)
				for (var p5z = +'1'; Y40.d7G(p5z.toString(), p5z.toString().length, 26079) !== k5z; p5z++) {
					return null
				}
				if (Y40.b7G(v5z.toString(), v5z.toString().length, 71725) !== q5z) {
					return +'1'
				}
			}
			if (!this.rules) {
				U5z = 5480580
				H5z = -1047398943
				C5z = 2
				for (var M5z = 1; Y40.b7G(M5z.toString(), M5z.toString().length, 72809) !== U5z; M5z++) {
					return 1
				}
				if (Y40.b7G(C5z.toString(), C5z.toString().length, 30793) !== H5z) {
					return 1
				}
				return null
			}
			d2P = G2P ? G2P : new Date()
			d2P = this._convertToMarketTZ(d2P, s2P)
			d2P = this._find_prev_segment(d2P, !![])
			if (this.zseg_match.adjacent_parent) {
				return this.getPreviousOpen(d2P)
			}
			d2P.setHours(this.zseg_match.open_parts.hours)
			d2P.setMinutes(this.zseg_match.open_parts.minutes)
			d2P = this._convertFromMarketTZ(d2P, b2P)
			Y40.n3P()
			return d2P
		}
		e3P.Market.prototype.getSession = function(D2P, U2P) {
			D2P = this._convertToMarketTZ(D2P, U2P)
			o2OG.O3P()
			if (this._wasOpenIntraDay(D2P) && this.zseg_match) {
				return this.zseg_match.name
			}
			return null
		}
		e3P.Market.prototype.marketZoneNow = function() {
			return this._convertToMarketTZ(new Date())
		}
		e3P.Market.prototype.isHourAligned = function() {
			return this.hour_aligned
		}
		e3P.Market.prototype.isOpen = function() {
			var u2P
			u2P = new Date()
			if (this.market_tz) {
				u2P = new this.tz_lib(u2P.getTime(), this.market_tz)
			}
			o2OG.O3P()
			return this._wasOpenIntraDay(u2P)
		}
		e3P.Market.prototype.isMarketDay = function() {
			var v2P
			v2P = new Date()
			if (this.market_tz) {
				v2P = new this.tz_lib(v2P.getTime(), this.market_tz)
			}
			o2OG.n3P()
			return this._wasOpenDaily(v2P)
		}
		o2OG.O3P()
		e3P.Market.prototype.newIterator = function(Z2P) {
			var V40 = o2OG
			var B2P, m8G, I8G, U8G, k2P, i7G, Z7G, n7G
			B2P = !'1'
			if (Z2P.periodicity) {
				B2P = Z2P.periodicity
			} else if (Z2P.multiple) {
				m8G = -1633633065
				V40.f40(1)
				I8G = -V40.o40('50782014', 1)
				U8G = 2
				for (var M8G = 1; V40.d7G(M8G.toString(), M8G.toString().length, +'94185') !== m8G; M8G++) {
					B2P = Z2P.multiple
					U8G += 2
				}
				if (V40.b7G(U8G.toString(), U8G.toString().length, 64428) !== I8G) {
					B2P = Z2P.multiple
				}
				B2P = Z2P.multiple
			}
			k2P = Z2P.interval
			if (!k2P) {
				k2P = e3P.Market.MINUTE
			}
			if (!B2P) {
				B2P = 1
			}
			if (!Z2P.begin) {
				Z2P.begin = new Date()
			}
			V40.n3P()
			if (k2P == parseInt(k2P, 10)) {
				V40.e40(2)
				k2P = parseInt(k2P, V40.o40('10', 0))
				if (Z2P.periodicity < 1) {
					V40.f40(7)
					B2P = V40.s40(k2P, B2P, 60)
					k2P = 'second'
				} else {
					V40.f40(1)
					B2P = V40.o40(B2P, k2P)
					k2P = 'minute'
				}
			}
			if (Z2P.timeUnit) {
				if (Z2P.timeUnit === e3P.Market.MILLISECOND) {
					k2P = Z2P.timeUnit
				} else if (Z2P.timeUnit === e3P.Market.SECOND) {
					k2P = Z2P.timeUnit
				}
			}
			i7G = -1561626452
			V40.f40(0)
			Z7G = -V40.s40('1005560232', 548045096)
			n7G = +'2'
			for (
				var r7G = '1' << 566717344;
				V40.b7G(r7G.toString(), r7G.toString().length, 36287) !== i7G;
				r7G++
			) {
				Z2P.interval = k2P
				Z2P.multiple = B2P
				Z2P.market = this
				n7G += 2
			}
			if (V40.d7G(n7G.toString(), n7G.toString().length, 36968) !== Z7G) {
				Z2P.interval = k2P
				Z2P.multiple = B2P
				Z2P.market = this
			}
			return new e3P.Market.Iterator(Z2P)
		}
		e3P.Market.prototype._wasOpenDaily = function(q2P) {
			o2OG.n3P()
			return this._was_open(q2P, ![])
		}
		e3P.Market.prototype._wasOpenIntraDay = function(y2P) {
			var f5z, a5z, Q5z
			f5z = 861403977
			a5z = 939365278
			Q5z = +'2'
			for (var I5z = 1; o2OG.b7G(I5z.toString(), I5z.toString().length, 91762) !== f5z; I5z++) {
				return this._was_open(y2P, !1)
			}
			if (o2OG.b7G(Q5z.toString(), Q5z.toString().length, 89883) !== a5z) {
				return this._was_open(y2P, !1)
			}
			return this._was_open(y2P, !'')
		}
		e3P.Market.prototype._was_open = function(t2P, f2P) {
			var d40 = o2OG
			var r2P, h7G, K7G, V8G, I2P, F2P, T6P, j6P, R2P, W2P, K2P, S6P, o6P, i2P, E2P, X2P
			r2P = this
			d40.n3P()
			this.zopen_hour = 0
			this.zopen_minute = 0
			this.zclose_hour = 0
			h7G = -+'2000600802'
			K7G = -1041328966
			V8G = +'2'
			for (var B8G = 1; d40.d7G(B8G.toString(), B8G.toString().length, 61868) !== h7G; B8G++) {
				this.zclose_minute = 3
				this.zmatch_open = !!'1'
				V8G += 2
			}
			if (d40.b7G(V8G.toString(), V8G.toString().length, 11660) !== K7G) {
				this.zclose_minute = 0
				this.zmatch_open = !{}
			}
			if (!this.market_def) {
				return !![]
			}
			if (!this.rules) {
				return !![]
			}
			I2P = !!''
			F2P = !{}
			T6P = t2P.getFullYear()
			d40.e40(8)
			var S1z = d40.s40(12, 12, 12, 12)
			j6P = t2P.getMonth() + S1z
			R2P = t2P.getDay()
			W2P = t2P.getDate()
			K2P = t2P.getHours()
			S6P = t2P.getMinutes()
			o6P = t2P.getSeconds()
			d40.e40(9)
			E2P = d40.o40(60, K2P, 60, 60, S6P, o6P)
			if (typeof f2P === 'undefined') {
				f2P = !![]
			}
			for (X2P = +'0'; X2P < this.normalHours.length; X2P++) {
				i2P = r2P.normalHours[X2P]
				if (!i2P.enabled) {
					continue
				}
				I2P = i2P.dayofweek === R2P
				if (I2P && f2P) {
					I2P = E2P >= i2P.open && E2P < i2P.close
				}
				if (I2P) {
					r2P.zopen_hour = i2P.open_parts.hours
					r2P.zopen_minute = i2P.open_parts.minutes
					r2P.zclose_hour = i2P.close_parts.hours
					r2P.zclose_minute = i2P.close_parts.minutes
					r2P.zmatch_open = E2P === i2P.open
					r2P.zseg_match = i2P
					break
				}
			}
			for (X2P = +'0'; X2P < this.extraHours.length; X2P++) {
				i2P = r2P.extraHours[X2P]
				if (!i2P.enabled) {
					continue
				}
				if (
					((16.14, '774' - 0) != (746.95, 256.57)
						? ('8684' * 1, +'4880') !== (629.95, '460.97' - 0)
							? '*'
							: (0x15a7, 537.27)
						: ('d', 6.95e3)) === i2P.year ||
					T6P === i2P.year
				) {
					if (j6P === i2P.month && W2P === i2P.day) {
						F2P = E2P >= i2P.open && E2P < i2P.close
						if (!F2P && I2P) {
							I2P = ![]
						}
						if (F2P) {
							r2P.zopen_hour = i2P.open_parts.hours
							r2P.zopen_minute = i2P.open_parts.minutes
							r2P.zclose_hour = i2P.close_parts.hours
							r2P.zclose_minute = i2P.close_parts.minutes
							r2P.zmatch_open = E2P === i2P.open
							r2P.zseg_match = i2P
							break
						}
					}
				}
			}
			return I2P || F2P
		}
		e3P.Market.prototype._wasClosed = function(w6P) {
			o2OG.O3P()
			return !this._was_open(w6P, !0)
		}
		e3P.Market.prototype._wasOpen = function(h6P) {
			var t40 = o2OG
			var v2G, o2G, p2G
			v2G = 846762932
			o2G = 1754158323
			t40.f40(0)
			p2G = t40.s40('2', 0)
			for (var s2G = 1; t40.b7G(s2G.toString(), s2G.toString().length, +'49410') !== v2G; s2G++) {
				return this._was_open(h6P, ![])
			}
			if (t40.b7G(p2G.toString(), p2G.toString().length, 61734) !== o2G) {
				return this._was_open(h6P, !![])
			}
		}
		e3P.Market.prototype._tzDifferenceMillis = function(Y6P, A6P, z6P) {
			var U40 = o2OG
			var P6P, p6P, c5z, Y5z, R5z, N6P, g6P
			P6P = 0
			p6P = Y6P
			c5z = -2141444790
			Y5z = -2049686081
			R5z = 2
			for (var K5z = +'1'; U40.b7G(K5z.toString(), K5z.toString().length, 76047) !== c5z; K5z++) {
				N6P = Y6P
				R5z += 2
			}
			if (U40.b7G(R5z.toString(), R5z.toString().length, 29086) !== Y5z) {
				N6P = Y6P
			}
			U40.n3P()
			g6P = p6P.getTimezoneOffset() - N6P.getTimezoneOffset()
			U40.f40(7)
			P6P = U40.o40(60, g6P, 1000)
			return P6P
		}
		e3P.Market._createTimeSegments = function(c6P) {
			var C6P, l6P, m6P, B1z, H6P, W1z, n6P
			C6P = function(e6P, O6P) {
				o2OG.O3P()
				if (e6P.close_parts.hours === '24' << 1230709472 && O6P.open_parts.hours === 0) {
					if (O6P.open_parts.minutes === 0) {
						if (l6P.dayofweek === H6P.dayofweek - 1) {
							return !![]
						}
						if (l6P.dayofweek === 6 && H6P.dayofweek === 0) {
							return !!{}
						}
					}
				}
				return ![]
			}
			o2OG.O3P()
			for (var M6P = 0; M6P < c6P.rules.length; M6P++) {
				m6P = JSON.parse(JSON.stringify(c6P.rules[M6P]))
				if (typeof m6P.open === 'undefined' && typeof m6P.close === 'undefined') {
					B1z = '00:'
					B1z += '00'
					m6P.open = '00:00'
					m6P.close = B1z
				}
				if (!m6P.hasOwnProperty('name')) {
					m6P.name = null
				}
				try {
					if (typeof m6P.dayofweek !== 'undefined') {
						m6P.year = '*'
						H6P = Q3P._createDayOfWeekSegment(c6P, m6P)
						if (l6P) {
							if (l6P.dayofweek === H6P.dayofweek) {
								l6P.child_ = H6P
								H6P.parent_ = l6P
							} else {
								if (C6P(l6P, H6P)) {
									l6P.adjacent_child = H6P
									H6P.adjacent_parent = l6P
								}
							}
						}
						l6P = H6P
					} else if (typeof m6P.date !== 'undefined') {
						m6P.isDayOfWeek = !1
						m6P.dayofweek = -1
						H6P = Q3P._createDateTimeSegment(c6P, m6P)
					} else {
						W1z = 'Error, unknown rul'
						W1z += 'e type '
						o2OG.e40(4)
						console.log(o2OG.o40(W1z, m6P))
					}
					if (c6P.enabled_by_default) {
						for (var V6P = 0; V6P < c6P.enabled_by_default.length; V6P++) {
							n6P = c6P.enabled_by_default[V6P]
							if (H6P.name === n6P) {
								H6P.enabled = !!1
								break
							}
						}
					} else {
					}
				} catch (a6P) {
					o2OG.f40(4)
					console.log(o2OG.o40('Error, creating market rules ', a6P))
				}
			}
		}
		e3P.Market._timeSegment = {}
		Q3P = e3P.Market._timeSegment
		Q3P.re_wild_card_iso = /^(\*)-(\d\d)-(\d\d)$/
		Q3P.re_regular_iso = /^(\d\d\d\d)-(\d\d)-(\d\d)$/
		Q3P.re_split_hours_minutes = /^(\d\d):(\d\d)$/
		Q3P.re_split_hour_minutes = /^(\d):(\d\d)$/
		Q3P._hashCode = function(L6P) {
			var Q6P, x6P, J6P, d6P
			Q6P = 0
			o2OG.O3P()
			if (L6P.length === 0) {
				return Q6P
			}
			for (x6P = 0, d6P = L6P.length; x6P < d6P; x6P++) {
				J6P = L6P.charCodeAt(x6P)
				o2OG.e40(10)
				Q6P = o2OG.s40(Q6P, J6P, Q6P, 5)
				Q6P |= 0
			}
			return Q6P
		}
		Q3P._splitHoursMinutes = function(b6P) {
			var G6P, s6P
			G6P = Q3P.re_split_hour_minutes.exec(b6P)
			s6P = { hours: NaN, minutes: NaN }
			if (G6P === null) {
				G6P = Q3P.re_split_hours_minutes.exec(b6P)
				if (G6P === null) {
					return s6P
				}
			}
			o2OG.O3P()
			s6P.hours = parseInt(G6P[1], 10)
			s6P.minutes = parseInt(G6P[2], 10)
			return s6P
		}
		Q3P._createDayOfWeekSegment = function(u6P, U6P) {
			var D6P
			D6P = {
				name: U6P.name,
				isDayOfWeek: !'',
				dayofweek: U6P.dayofweek,
				date_str: 3270 != (426.69, 9136) ? (653 < 5092 ? '*' : (8.23e3, +'990.54')) : !{},
				open_parts: Q3P._splitHoursMinutes(U6P.open),
				close_parts: Q3P._splitHoursMinutes(U6P.close),
				open: Q3P._secSinceMidnight(u6P, U6P.open, !![]),
				close: Q3P._secSinceMidnight(u6P, U6P.close, !{}),
				child_: ![],
				parent_: !{},
				adjacent_child: ![],
				adjacent_parent: !{},
				enabled: !{},
			}
			o2OG.n3P()
			if (D6P.name === null) {
				D6P.enabled = !![]
			}
			D6P.hash_code = this._hashCode((D6P.open + D6P.close).toString())
			u6P.normalHours.push(D6P)
			return D6P
		}
		Q3P._createDateTimeSegment = function(B6P, v6P) {
			var G40 = o2OG
			var k6P, q6P, w2G, W2G, z2G, F8G, J8G, j8G, Z6P, D8G, d8G, b8G
			k6P = this.re_regular_iso.exec(v6P.date)
			if (k6P === null) {
				k6P = this.re_wild_card_iso.exec(v6P.date)
				if (k6P === null) {
					w2G = 2130102856
					W2G = -234922297
					z2G = 2
					for (
						var a2G = +'1';
						G40.d7G(a2G.toString(), a2G.toString().length, 89391) !== w2G;
						a2G++
					) {
						console.log('Warning: invalid date format on rule -> ' + v6P.date)
						return
					}
					if (G40.d7G(z2G.toString(), z2G.toString().length, '54285' | 33793) !== W2G) {
						console.log('' / v6P.date)
						return
					}
				}
				q6P =
					4720 > 661.06
						? (6842, 4030) != (9010, '691.47' * 1)
							? '*'
							: (0x3de, +'290.71')
						: (565.91, +'0x26d3')
				F8G = -1135931320
				J8G = -774662222
				j8G = 2
				for (var R8G = 1; G40.b7G(R8G.toString(), R8G.toString().length, 64983) !== F8G; R8G++) {
					j8G += 2
				}
				if (G40.d7G(j8G.toString(), j8G.toString().length, 92012) !== J8G) {
				}
			} else {
				q6P = parseInt(k6P[1], +'10')
			}
			Z6P = {
				name: v6P.name,
				isDayOfWeek: !!'',
				dayofweek: -1,
				year: q6P,
				month: parseInt(k6P[2], 10),
				day: parseInt(k6P[3], 10),
				date_str: v6P.date,
				open_parts: Q3P._splitHoursMinutes(v6P.open),
				close_parts: Q3P._splitHoursMinutes(v6P.close),
				open: Q3P._secSinceMidnight(B6P, v6P.open, !''),
				close: Q3P._secSinceMidnight(B6P, v6P.close, ![]),
				enabled: !{},
			}
			G40.n3P()
			if (Z6P.name === null) {
				D8G = 1203971511
				d8G = 920751799
				b8G = 2
				for (var n8G = 1; G40.d7G(n8G.toString(), n8G.toString().length, 15239) !== D8G; n8G++) {
					Z6P.enabled = ![]
					b8G += 2
				}
				if (G40.d7G(b8G.toString(), b8G.toString().length, 5187) !== d8G) {
					Z6P.enabled = !![]
				}
			}
			Z6P.hash_key = this._hashCode(Z6P.date_str + Z6P.open + Z6P.close)
			B6P.extraHours.push(Z6P)
			return Z6P
		}
		Q3P._secSinceMidnight = function(E6P, I6P, t6P) {
			var a40 = o2OG
			var i6P, y6P, X6P, r6P
			a40.n3P()
			i6P = I6P.split(
				(2570, 802.01) == (897.64, 3040)
					? 3.95e3
					: +'4220' <= (1533, 2990)
					? (+'8.93e+3', 739.33)
					: ':',
			)
			y6P = parseInt(i6P['0' >> 2093240480], 10)
			X6P = parseInt(i6P[1], 10)
			a40.f40(11)
			r6P = a40.o40(y6P, '60', 60, 60, X6P)
			if (!t6P) {
				if (y6P === ('24' | 24)) {
					a40.e40(12)
					r6P = a40.o40(60, 60, 1, y6P)
				}
			}
			return r6P
		}
		e3P.Market.prototype._convertToMarketTZ = function(F6P, R6P) {
			var f6P
			if (!this.market_tz) {
				return F6P
			}
			if (R6P) {
				f6P = new this.tz_lib(
					F6P.getFullYear(),
					F6P.getMonth(),
					F6P.getDate(),
					F6P.getHours(),
					F6P.getMinutes(),
					F6P.getSeconds(),
					F6P.getMilliseconds(),
					R6P,
				)
			} else {
				f6P = new this.tz_lib(
					F6P.getFullYear(),
					F6P.getMonth(),
					F6P.getDate(),
					F6P.getHours(),
					F6P.getMinutes(),
					F6P.getSeconds(),
					F6P.getMilliseconds(),
				)
			}
			o2OG.n3P()
			if (f6P.setTimezone) {
				f6P.setTimezone(this.market_tz)
			}
			return new Date(
				f6P.getFullYear(),
				f6P.getMonth(),
				f6P.getDate(),
				f6P.getHours(),
				f6P.getMinutes(),
				f6P.getSeconds(),
				f6P.getMilliseconds(),
			)
		}
		e3P.Market.prototype._convertFromMarketTZ = function(K6P, S9P) {
			var W6P
			if (!this.market_tz) {
				return K6P
			}
			W6P = new this.tz_lib(
				K6P.getFullYear(),
				K6P.getMonth(),
				K6P.getDate(),
				K6P.getHours(),
				K6P.getMinutes(),
				K6P.getSeconds(),
				K6P.getMilliseconds(),
				this.market_tz,
			)
			if (S9P) {
				if (W6P.setTimezone) {
					W6P.setTimezone(S9P)
				}
			} else {
				return new Date(W6P.getTime())
			}
			o2OG.O3P()
			return new Date(
				W6P.getFullYear(),
				W6P.getMonth(),
				W6P.getDate(),
				W6P.getHours(),
				W6P.getMinutes(),
				W6P.getSeconds(),
				W6P.getMilliseconds(),
			)
		}
		e3P.Market.Iterator = function(o9P) {
			var B5z, y5z, w5z
			this.market = o9P.market
			o2OG.n3P()
			this.begin = o9P.begin
			this.interval = o9P.interval
			this.multiple = o9P.multiple
			this.inZone = o9P.inZone
			this.outZone = o9P.outZone
			this.clock = new e3P.Market.Iterator._Clock(o9P.market, o9P.interval, o9P.multiple)
			this.intraDay = this.clock.intra_day
			if (this.intraDay) {
				B5z = -901689529
				y5z = -362110510
				w5z = 2
				for (var z5z = 1; o2OG.d7G(z5z.toString(), z5z.toString().length, 98281) !== B5z; z5z++) {
					this.begin = this.market._convertToMarketTZ(this.begin, o9P.inZone)
					w5z += 2
				}
				if (o2OG.d7G(w5z.toString(), w5z.toString().length, 2285) !== y5z) {
					this.begin = this.market._convertToMarketTZ(this.begin, o9P.inZone)
				}
				this.begin = this.market._convertToMarketTZ(this.begin, o9P.inZone)
			}
			this.clock._setStart(this.begin)
			this.clock.minutes_aligned = !{}
		}
		e3P.Market.Iterator.prototype.date = function() {
			return this.clock._date()
		}
		e3P.Market.Iterator.prototype.futureTick = function(p9P) {
			var q40 = o2OG
			var P9P,
				T9P,
				j9P,
				e5z,
				s5z,
				A5z,
				V9z,
				t9z,
				B9z,
				w9P,
				Y9P,
				z9P,
				h9P,
				A2G,
				E2G,
				u2G,
				A9P,
				N9P,
				g9P,
				C2G,
				S2G,
				M2G
			P9P = this
			this.clock.skip = 1
			T9P = 0
			if (this.intraDay) {
				e5z = 992259452
				s5z = -526983092
				A5z = 2
				for (var u5z = 1; q40.d7G(u5z.toString(), u5z.toString().length, 75355) !== e5z; u5z++) {
					j9P = this.market._convertToMarketTZ(p9P.end, this.inZone).getTime()
					q40.f40(13)
					A5z += q40.o40('2', 68437280)
				}
				if (q40.d7G(A5z.toString(), A5z.toString().length, '62947' * 1) !== s5z) {
					j9P = this.market._convertToMarketTZ(p9P.end, this.inZone).getTime()
				}
			} else {
				q40.f40(13)
				V9z = -q40.s40('1133205195', 1466063904)
				t9z = -611005351
				B9z = +'2'
				for (var w9z = 1; q40.b7G(w9z.toString(), w9z.toString().length, 76427) !== V9z; w9z++) {
					j9P = p9P.end.getTime()
					B9z += 2
				}
				if (q40.d7G(B9z.toString(), B9z.toString().length, 43797) !== t9z) {
					j9P = p9P.end.getTime()
				}
			}
			w9P = this.clock.ctime
			if (j9P === w9P) {
				return T9P
			}
			Y9P = 2
			z9P = 1000
			h9P = 0
			if (p9P.sample_size) {
				A2G = -1745337108
				E2G = -2052114523
				u2G = 2
				for (
					var O2G = 1;
					q40.b7G(O2G.toString(), O2G.toString().length, '2120' ^ 0) !== A2G;
					O2G++
				) {
					Y9P = p9P.sample_size
					u2G += 2
				}
				if (q40.b7G(u2G.toString(), u2G.toString().length, 43072) !== E2G) {
					Y9P = p9P.sample_size
				}
			}
			q40.n3P()
			A9P = new Date().getTime()
			if (j9P > w9P) {
				this.clock.forward = !![]
				while (this.clock.ctime < j9P) {
					T9P += +'1'
					h9P += 1
					P9P.clock._findNext()
					if (h9P === z9P) {
						h9P = 0
						N9P = new Date().getTime()
						if (N9P - A9P >= Y9P) {
							g9P = (P9P.clock.ctime - w9P) / T9P
							q40.f40(14)
							T9P = Math.floor(q40.s40(w9P, j9P, g9P))
							break
						}
					}
				}
			} else {
				C2G = 831174226
				S2G = 1064519715
				M2G = 2
				for (var q2G = 1; q40.d7G(q2G.toString(), q2G.toString().length, 73628) !== C2G; q2G++) {
					this.clock.forward = !'1'
					M2G += 2
				}
				if (q40.d7G(M2G.toString(), M2G.toString().length, +'17399') !== S2G) {
					this.clock.forward = !0
				}
				while (this.clock.ctime > j9P) {
					T9P += 1
					h9P += 1
					P9P.clock._findPrevious()
					if (h9P === z9P) {
						h9P = 0
						N9P = new Date().getTime()
						if (N9P - A9P >= Y9P) {
							g9P = (w9P - P9P.clock.ctime) / T9P
							q40.e40(14)
							T9P = Math.floor(q40.s40(j9P, w9P, g9P))
							break
						}
					}
				}
			}
			return T9P
		}
		e3P.Market.Iterator.prototype.isHourAligned = function() {
			o2OG.O3P()
			return this.market.isHourAligned()
		}
		e3P.Market.Iterator.prototype.isOpen = function() {
			o2OG.n3P()
			return this.market.isOpen()
		}
		e3P.Market.Iterator.prototype.next = function(l9P) {
			var m9P, L5z, X5z, F5z
			m9P = this
			o2OG.O3P()
			this.clock.skip = 1
			if (l9P) {
				L5z = -7835404
				X5z = -1288233158
				F5z = 2
				for (var j5z = 1; o2OG.b7G(j5z.toString(), j5z.toString().length, 30863) !== L5z; j5z++) {
					this.clock.skip = l9P
					F5z += 2
				}
				if (o2OG.b7G(F5z.toString(), F5z.toString().length, 39479) !== X5z) {
					this.clock.skip = l9P
				}
			}
			this.clock.forward = !!1
			for (var H9P = +'0'; H9P < this.clock.skip; H9P++) {
				m9P.begin = m9P.clock._findNext()
			}
			if (this.intraDay || this.market.convertOnDaily) {
				return this.market._convertFromMarketTZ(this.clock.display_date, this.outZone)
			} else {
				return this.clock.display_date
			}
		}
		e3P.Market.Iterator.prototype.peek = function() {
			return this.clock._peek()
		}
		e3P.Market.Iterator.prototype.previous = function(V9P) {
			var c9P
			c9P = this
			this.clock.skip = 1
			if (V9P) {
				this.clock.skip = V9P
			}
			this.clock.forward = !!0
			for (var M9P = 0; M9P < this.clock.skip; M9P++) {
				c9P.begin = c9P.clock._findPrevious()
			}
			if (this.intraDay || this.market.convertOnDaily) {
				return this.market._convertFromMarketTZ(this.clock.display_date, this.outZone)
			} else {
				return this.clock.display_date
			}
		}
		e3P.Market.Iterator._Clock = function(n9P, C9P, O9P) {
			var g40 = o2OG
			var Q1z, f1z, z1z, R2G, h2G, K2G, J7G, j7G, c7G
			Q1z = 'd'
			Q1z += 'a'
			Q1z += 'ys'
			f1z = 'ho'
			f1z += 'ur'
			f1z += 's'
			z1z = 'minu'
			z1z += 'tes'
			this.market = n9P
			this.interval = C9P
			this.multiple = O9P
			this.intra_day = ![]
			this.intervals = []
			this.max_iters = +'10080'
			g40.e40(1)
			this.MINUTE_MILLIS = g40.s40(1000, 60)
			g40.f40(15)
			var k1z = g40.s40(11, 30, 19)
			this.HOUR_MILLIS = this.MINUTE_MILLIS * k1z
			g40.e40(16)
			var q1z = g40.s40(3, 6, 3, 15)
			this.DAY_MILLIS = this.HOUR_MILLIS * q1z
			if (C9P === 'today') {
				C9P = e3P.Market.DAY
			}
			if (C9P === e3P.Market.MILLISECOND || C9P === 'milliseconds') {
				this._findNext = this._millisImpl
				this._findPrevious = this._millisImpl
				this.intra_day = !![]
				g40.f40(17)
				var o1z = g40.s40(16, 248, 10, 17, 16)
				this.tick_time = o1z * this.multiple
			} else if (C9P === e3P.Market.SECOND || C9P === 'seconds') {
				this._findNext = this._secondImpl
				this._findPrevious = this._secondImpl
				this.intra_day = !!1
				g40.f40(18)
				var p1z = g40.s40(19, 13, 52, 13, 1, 8)
				this.tick_time = '1000' * p1z * this.multiple
			} else if (C9P === e3P.Market.MINUTE || C9P === z1z) {
				this._findNext = this._minuteImpl
				this._findPrevious = this._minuteImpl
				this.intra_day = !!{}
				this.tick_time = this.MINUTE_MILLIS * this.multiple
			} else if (C9P === e3P.Market.HOUR || C9P === f1z) {
				this._findNext = this._hourImpl
				this._findPrevious = this._hourImpl
				this.intra_day = !![]
				this.tick_time = this.HOUR_MILLIS * this.multiple
			} else if (C9P === e3P.Market.DAY || C9P === Q1z) {
				this._findNext = this._dayImpl
				this._findPrevious = this._dayImpl
				this.tick_time = this.DAY_MILLIS * this.multiple
			} else if (C9P === e3P.Market.WEEK || C9P === 'weeks') {
				this._findNext = this._weekImpl
				this._findPrevious = this._weekImpl
				R2G = 424883198
				h2G = -+'668524219'
				K2G = 2
				for (
					var t5z = '1' - 0;
					g40.d7G(t5z.toString(), t5z.toString().length, 80430) !== R2G;
					t5z++
				) {
					g40.e40(19)
					var e1z = g40.s40(10, 12, 17, 2035)
					this.tick_time = (this.DAY_MILLIS - e1z) % this.multiple
					K2G += 2
				}
				if (g40.b7G(K2G.toString(), K2G.toString().length, +'21241') !== h2G) {
					g40.f40(2)
					var O1z = g40.o40(12, 8)
					this.tick_time = (this.DAY_MILLIS % O1z) * this.multiple
				}
				g40.e40(20)
				var G1z = g40.o40(18, 14, 9)
				this.tick_time = this.DAY_MILLIS * G1z * this.multiple
			} else if (C9P === e3P.Market.MONTH || C9P === 'months') {
				this._findNext = this._monthImpl
				this._findPrevious = this._monthImpl
				J7G = +'644908239'
				j7G = -1239078920
				c7G = 2
				for (var R7G = 1; g40.b7G(R7G.toString(), R7G.toString().length, 75463) !== J7G; R7G++) {
					this.tick_time = this.DAY_MILLIS * 30 * this.multiple
					c7G += +'2'
				}
				if (g40.d7G(c7G.toString(), c7G.toString().length, 37751) !== j7G) {
					this.tick_time = this.DAY_MILLIS - ('35' | 34) - this.multiple
				}
			} else {
				g40.f40(15)
				console.log(
					g40.o40(
						'" is not a valid interval. Please see setperiodcityV2() for details.',
						'Periodicity ERROR: "',
						C9P,
					),
				)
			}
		}
		a3P = e3P.Market.Iterator._Clock.prototype
		a3P._total_minutes = function(e9P, a9P, Q9P, x9P) {
			var w40 = o2OG
			var g8G, r8G, l8G
			g8G = 2046494476
			w40.f40(5)
			r8G = w40.s40('383867887', 1717708768)
			l8G = 2
			for (var L8G = 1; w40.d7G(L8G.toString(), L8G.toString().length, 96266) !== g8G; L8G++) {
				w40.O3P()
				l8G += 2
			}
			if (w40.b7G(l8G.toString(), l8G.toString().length, 84384) !== r8G) {
				w40.O3P()
			}
			w40.f40(21)
			return w40.o40(e9P, 60, Q9P, x9P, a9P)
		}
		a3P._alignMinutes = function() {
			var G9P, J9P, s9P, d9P, L9P
			o2OG.O3P()
			G9P = this
			if (this.market.zopen_minute === undefined) {
				return []
			}
			J9P = this.market.zopen_minute
			s9P = this._total_minutes(
				this.market.zopen_hour,
				J9P,
				this.market.zclose_hour,
				this.market.zclose_minute,
			)
			d9P = []
			L9P = +'0'
			while (L9P < s9P) {
				o2OG.e40(4)
				d9P.push(o2OG.s40(J9P, L9P))
				L9P += G9P.multiple
			}
			return d9P
		}
		a3P._alignBaseZero = function(u9P) {
			var D5z, d5z, b5z, U9P, b9P, D9P
			D5z = -67768020
			d5z = -1931590515
			b5z = 2
			for (var Z5z = 1; o2OG.b7G(Z5z.toString(), Z5z.toString().length, 46773) !== D5z; Z5z++) {
				U9P = this
				b5z += +'2'
			}
			if (o2OG.b7G(b5z.toString(), b5z.toString().length, 44411) !== d5z) {
				U9P = this
			}
			b9P = 0
			D9P = [b9P]
			while (!![]) {
				b9P += U9P.multiple
				if (b9P >= u9P) {
					break
				}
				D9P.push(b9P)
			}
			return D9P
		}
		a3P._date = function() {
			var F40 = o2OG
			var l7G, x7G, L7G, v9P
			l7G = 78108492
			x7G = -1897145399
			L7G = 2
			for (var F7G = 1; F40.b7G(F7G.toString(), F7G.toString().length, 12488) !== l7G; F7G++) {
				F40.O3P()
				L7G += 2
			}
			if (F40.b7G(L7G.toString(), L7G.toString().length, 43430) !== x7G) {
				F40.O3P()
			}
			v9P = new Date(this.ctime)
			if (this.intra_day) {
				this.display_date = new Date(this.ctime + this.shift_millis)
			} else {
				this.display_date = v9P
			}
			return v9P
		}
		a3P._alignToBoundary = function(y9P, k9P) {
			var B9P, q9P, i9P
			B9P = 0
			q9P = 0
			o2OG.n3P()
			i9P = k9P
			for (var Z9P = 0; Z9P < y9P.length - 1; Z9P++) {
				B9P = y9P[Z9P]
				o2OG.e40(4)
				q9P = y9P[o2OG.s40(Z9P, 1)]
				if (k9P === B9P || k9P === q9P) {
					break
				}
				if (k9P > B9P && k9P < q9P) {
					i9P = B9P
					break
				} else if (Z9P + 1 === y9P.length - 1) {
					i9P = q9P
				}
			}
			return i9P
		}
		a3P._peek = function() {
			return this._date().toString()
		}
		a3P._seekHr = function() {
			o2OG.n3P()
			if (this.forward) {
				this.ctime -= this.HOUR_MILLIS
			} else {
				this.ctime += this.HOUR_MILLIS
			}
		}
		a3P._setStart = function(r9P) {
			var X9P, I9P
			X9P = this.market._tzDifferenceMillis(r9P)
			I9P = new Date(r9P.getTime() + X9P)
			o2OG.n3P()
			this.shift_millis = X9P
			this.ctime = I9P.getTime()
			o2OG.f40(2)
			this.shift_millis = o2OG.s40('0', 0)
			this.ctime = r9P.getTime()
		}
		a3P._tickTock = function() {
			o2OG.O3P()
			if (this.forward) {
				this.ctime += this.tick_time
			} else {
				this.ctime -= this.tick_time
			}
		}
		a3P._tockTick = function() {
			if (this.forward) {
				this.ctime -= this.tick_time
			} else {
				this.ctime += this.tick_time
			}
		}
		a3P._tickTock24 = function() {
			this.ctime += this.DAY_MILLIS
		}
		a3P._tockTick24 = function() {
			o2OG.n3P()
			this.ctime -= this.DAY_MILLIS
		}
		a3P._windMaybe = function(W9P, K9P) {
			var t9P, E9P, F9P, f9P, R9P
			t9P = this
			E9P = 0
			F9P = new Date(this.ctime)
			o2OG.n3P()
			f9P = !{}
			while (!W9P.call(this.market, F9P)) {
				K9P.call(t9P)
				f9P = !!'1'
				F9P = new Date(t9P.ctime)
				E9P += 1
				if (E9P > t9P.max_iters) {
					R9P = 'Warning! max iterations (' + t9P.max_iters
					R9P += ') reached with no rule match.'
					console.log(R9P)
					break
				}
			}
			return f9P
		}
		a3P._millisImpl = function() {
			var T4P, S4P, o4P, k8G, q8G, v8G
			if (!this.mperiods_aligned) {
				T4P = this._alignBaseZero(1000)
				S4P = new Date(this.ctime)
				o4P = S4P.getMilliseconds()
				o4P = this._alignToBoundary(T4P, o4P)
				S4P.setMilliseconds(o4P)
				this.ctime = S4P.getTime()
				this.mperiods_aligned = !![]
			}
			o2OG.O3P()
			k8G = 1056721438
			q8G = -2069365222
			v8G = 2
			for (var p8G = 1; o2OG.d7G(p8G.toString(), p8G.toString().length, 38465) !== k8G; p8G++) {
				this._tickTock()
				v8G += 2
			}
			if (o2OG.b7G(v8G.toString(), v8G.toString().length, 5214) !== q8G) {
				this._tickTock()
			}
			return this._date()
		}
		a3P._secondImpl = function() {
			var h4P, j4P, w4P
			o2OG.O3P()
			if (!this.speriod_aligned) {
				h4P = this._alignBaseZero(+'60')
				j4P = new Date(this.ctime)
				w4P = j4P.getSeconds()
				w4P = this._alignToBoundary(h4P, w4P)
				j4P.setSeconds(w4P)
				j4P.setMilliseconds(0)
				this.ctime = j4P.getTime()
				this.speriod_aligned = !0
			}
			this._tickTock()
			return this._date()
		}
		a3P._minuteImpl = function() {
			var Q40 = o2OG
			var z4P, P4P, m4P, H4P, N4P, Y4P, p4P, w8G, W8G, z8G, g4P, A4P
			z4P = this._windMaybe(this.market._wasOpenIntraDay, this._tockTick)
			P4P = new Date(this.ctime)
			m4P = P4P.getTimezoneOffset()
			H4P = P4P.getMinutes()
			N4P = P4P.getHours()
			Y4P = this._alignMinutes()
			p4P =
				this._total_minutes(this.market.zopen_hour, this.market.zopen_minute, N4P, H4P) +
				this.market.zopen_minute
			if (z4P) {
				if (this.forward) {
					Q40.f40(22)
					var i1z = Q40.o40(16, 17, 32)
					p4P = Y4P[Y4P.length - i1z]
				} else {
					Q40.f40(5)
					p4P = Y4P[Q40.o40('0', 548119520)]
				}
			} else {
				w8G = -908480875
				W8G = -1394548977
				z8G = 2
				for (
					var Q8G = '1' << 1187599872;
					Q40.d7G(Q8G.toString(), Q8G.toString().length, 63394) !== w8G;
					Q8G++
				) {
					p4P = this._alignToBoundary(Y4P, p4P)
					z8G += 2
				}
				if (Q40.d7G(z8G.toString(), z8G.toString().length, 47010) !== W8G) {
					p4P = this._alignToBoundary(Y4P, p4P)
				}
				p4P = this._alignToBoundary(Y4P, p4P)
			}
			Q40.f40(4)
			var Z1z = Q40.o40(41, 19)
			N4P = Math.floor(p4P / Z1z) + this.market.zopen_hour
			P4P.setHours(N4P)
			Q40.e40(23)
			P4P.setMinutes(Q40.s40(p4P, 60))
			P4P.setSeconds(0)
			P4P.setMilliseconds(0)
			g4P = P4P.getTimezoneOffset() - m4P
			if ((this.forward && g4P < 0) || (!this.forward && g4P > 0)) {
				P4P.setTime(P4P.getTime() - g4P * 60000)
			}
			this.ctime = P4P.getTime()
			this._tickTock()
			if (this._windMaybe(this.market._wasOpenIntraDay, this._tickTock)) {
				if (this.forward) {
					P4P = new Date(this.ctime)
					P4P.setMinutes(this.market.zopen_minute)
					P4P.setHours(this.market.zopen_hour)
					this.ctime = P4P.getTime()
				} else {
					P4P = new Date(this.ctime)
					Y4P = this._alignMinutes()
					Q40.e40(24)
					var g1z = Q40.o40(1, 12, Infinity, 14)
					A4P = Y4P[Y4P.length - g1z]
					Q40.e40(23)
					P4P.setMinutes(Q40.s40(A4P, 60))
					P4P.setHours(Math.floor(A4P / +'60') + this.market.zopen_hour)
					this.ctime = P4P.getTime()
				}
			}
			return this._date()
		}
		a3P._hourImpl = function() {
			var H40 = o2OG
			var l4P, P5z, O5z, G5z
			this._windMaybe(this.market._wasOpenIntraDay, this._tockTick)
			l4P = new Date(this.ctime)
			if (this.market.isHourAligned()) {
				l4P.setMinutes(0)
			} else {
				l4P.setMinutes(this.market.zopen_minute)
			}
			l4P.setSeconds(+'0')
			l4P.setMilliseconds(0)
			this.ctime = l4P.getTime()
			this._tickTock()
			this._windMaybe(this.market._wasOpenIntraDay, this._tickTock)
			H40.e40(2)
			P5z = -H40.o40('747561744', 0)
			O5z = -1373278683
			G5z = 2
			for (var T5z = 1; H40.d7G(T5z.toString(), T5z.toString().length, 91839) !== P5z; T5z++) {
				return this._date()
			}
			if (H40.d7G(G5z.toString(), G5z.toString().length, 76205) !== O5z) {
				return this._date()
			}
			return this._date()
		}
		a3P._dayImpl = function() {
			var B40 = o2OG
			var c4P, M4P, V4P, C4P
			c4P = this
			this._windMaybe(this.market._wasOpenDaily, this._seekHr)
			M4P = new Date(this.ctime)
			M4P.setHours(M4P.getHours() + '2' * 1)
			M4P.setHours(0)
			B40.e40(13)
			M4P.setMinutes(B40.o40('0', 1300353472))
			M4P.setSeconds(0)
			M4P.setMilliseconds(0)
			this.ctime = M4P.getTime()
			V4P = 0
			while (V4P < this.multiple) {
				if (c4P.forward) {
					c4P._tickTock24()
				} else {
					c4P._tockTick24()
				}
				C4P = c4P._date().getHours() * 60 + c4P._date().getMinutes()
				B40.e40(1)
				c4P.ctime -= B40.o40(C4P, 60000)
				if (C4P > +'720') {
					c4P.ctime += c4P.DAY_MILLIS
				}
				if (!c4P.market._wasOpenDaily(c4P._date())) {
					continue
				}
				V4P += 1
			}
			return this._date()
		}
		a3P._weekImpl = function() {
			var O4P, n4P
			O4P = this
			this._tickTock()
			n4P = new Date(this.ctime)
			while (n4P.getDay() !== 0) {
				O4P._tockTick24()
				n4P = new Date(O4P.ctime)
			}
			this._windMaybe(this.market._wasOpenDaily, this._tickTock24)
			n4P = new Date(this.ctime)
			n4P.setHours(0)
			o2OG.n3P()
			n4P.setMinutes(0)
			n4P.setSeconds(0)
			n4P.setMilliseconds(0)
			this.ctime = n4P.getTime()
			return this._date()
		}
		a3P._monthImpl = function() {
			var h40 = o2OG
			var e4P, e8G, s8G, A8G
			e4P = new Date(this.ctime)
			e4P.setDate(15)
			this.ctime = e4P.getTime()
			this._tickTock()
			e4P = new Date(this.ctime)
			e4P.setDate(1)
			this.ctime = e4P.getTime()
			this._windMaybe(this.market._wasOpenDaily, this._tickTock24)
			e4P = new Date(this.ctime)
			e4P.setHours(0)
			e4P.setMinutes(0)
			e8G = 422612378
			s8G = +'1186453801'
			A8G = 2
			for (
				var u8G = 1;
				h40.d7G(u8G.toString(), u8G.toString().length, '58352' | 25216) !== e8G;
				u8G++
			) {
				e4P.setSeconds(0)
				h40.f40(6)
				e4P.setMilliseconds(h40.o40(0, '0'))
				A8G += 2
			}
			if (h40.d7G(A8G.toString(), A8G.toString().length, 55986) !== s8G) {
				e4P.setSeconds(8)
				e4P.setMilliseconds(9)
			}
			this.ctime = e4P.getTime()
			return this._date()
		}
		a3P._findNext = null
		a3P._findPrevious = null
		return x3P
	} /* ignore jslint end   */ /* ignore jslint start */ /* eslint-enable  */ /* jshint ignore:end   */ /* jshint ignore:start */

	/* eslint-disable */ q5D0(o5D0())
	J51S(e51S())
	z9Hw(Q9Hw())
	H3OE(l3OE())
	function J51S() {
		function g8o() {
			var G2o = 2
			for (; G2o !== 7; ) {
				switch (G2o) {
					case 2:
						var E2o = [arguments]
						E2o[8] = 'ineProperty'
						E2o[4] = ''
						E2o[4] = 'ef'
						E2o[7] = 'd'
						E2o[1] = 7
						try {
							var I2o = 2
							for (; I2o !== 9; ) {
								switch (I2o) {
									case 3:
										try {
											var D2o = 2
											for (; D2o !== 3; ) {
												switch (D2o) {
													case 4:
														E2o[0][0].Object[E2o[9]](E2o[6], E2o[0][4], E2o[5])
														D2o = 3
														break
													case 2:
														E2o[9] = E2o[7]
														E2o[9] += E2o[4]
														E2o[9] += E2o[8]
														D2o = 4
														break
												}
											}
										} catch (f8o) {
											E2o[6][E2o[0][4]] = E2o[5].value
										}
										I2o = 9
										break
									case 2:
										E2o[5] = {}
										E2o[2] = (1, E2o[0][1])(E2o[0][0])
										E2o[6] = [E2o[1], E2o[2].prototype][E2o[0][3]]
										E2o[5].value = E2o[6][E2o[0][2]]
										I2o = 3
										break
								}
							}
						} catch (R8o) {}
						G2o = 7
						break
				}
			}
		}
		function a8o() {
			var d2o = 2
			for (; d2o !== 5; ) {
				switch (d2o) {
					case 2:
						var u2o = [arguments]
						return u2o[0][0].String
						break
				}
			}
		}
		var l2o = 2
		for (; l2o !== 10; ) {
			switch (l2o) {
				case 11:
					m8o(a8o, 'charCodeAt', x2o[7], x2o[4])
					l2o = 10
					break
				case 12:
					var m8o = function() {
						var B2o = 2
						for (; B2o !== 5; ) {
							switch (B2o) {
								case 2:
									var t2o = [arguments]
									g8o(x2o[0][0], t2o[0][0], t2o[0][1], t2o[0][2], t2o[0][3])
									B2o = 5
									break
							}
						}
					}
					l2o = 11
					break
				case 9:
					x2o[9] = 'X'
					x2o[7] = 9
					x2o[7] = 1
					x2o[4] = x2o[9]
					x2o[4] += x2o[5]
					x2o[4] += x2o[6]
					l2o = 12
					break
				case 2:
					var x2o = [arguments]
					x2o[6] = ''
					x2o[6] = 'S'
					x2o[5] = ''
					x2o[5] = '21'
					l2o = 9
					break
			}
		}
	}
	b3uz.t7h = function() {
		return typeof b3uz.a7h.u0c === 'function'
			? b3uz.a7h.u0c.apply(b3uz.a7h, arguments)
			: b3uz.a7h.u0c
	}
	function e51S() {
		var N2o = 2
		for (; N2o !== 3; ) {
			switch (N2o) {
				case 1:
					return globalThis
					break
				case 2:
					N2o = typeof globalThis === 'object' ? 1 : 5
					break
				case 4:
					return globalThis
					break
				case 5:
					try {
						var c2o = 2
						for (; c2o !== 9; ) {
							switch (c2o) {
								case 3:
									delete Object.prototype.fC5qQ
									c2o = 9
									break
								case 5:
									c2o = typeof globalThis === 'undefined' ? 4 : 3
									break
								case 4:
									window.globalThis = window
									c2o = 3
									break
								case 2:
									Object.defineProperty(Object.prototype, 'fC5qQ', {
										get: function() {
											return this
										},
										configurable: true,
									})
									fC5qQ.globalThis = fC5qQ
									c2o = 5
									break
							}
						}
					} catch (I8o) {
						window.globalThis = window
					}
					N2o = 4
					break
			}
		}
	}
	b3uz.U7h = function() {
		return typeof b3uz.a7h.u0c === 'function'
			? b3uz.a7h.u0c.apply(b3uz.a7h, arguments)
			: b3uz.a7h.u0c
	}
	b3uz.r3w = function() {
		return typeof b3uz.h0w.b6S === 'function'
			? b3uz.h0w.b6S.apply(b3uz.h0w, arguments)
			: b3uz.h0w.b6S
	}
	b3uz.R7h = function() {
		return typeof b3uz.a7h.U0c === 'function'
			? b3uz.a7h.U0c.apply(b3uz.a7h, arguments)
			: b3uz.a7h.U0c
	}
	b3uz.K0w = function() {
		return typeof b3uz.h0w.b6S === 'function'
			? b3uz.h0w.b6S.apply(b3uz.h0w, arguments)
			: b3uz.h0w.b6S
	}
	function l3OE() {
		var J29 = 2
		for (; J29 !== 3; ) {
			switch (J29) {
				case 5:
					try {
						var N29 = 2
						for (; N29 !== 9; ) {
							switch (N29) {
								case 5:
									N29 = typeof globalThis === 'undefined' ? 4 : 3
									break
								case 3:
									delete Object.prototype.Q5qQB
									N29 = 9
									break
								case 2:
									Object.defineProperty(Object.prototype, 'Q5qQB', {
										get: function() {
											return this
										},
										configurable: true,
									})
									Q5qQB.globalThis = Q5qQB
									N29 = 5
									break
								case 4:
									window.globalThis = window
									N29 = 3
									break
							}
						}
					} catch (p29) {
						window.globalThis = window
					}
					return globalThis
					break
				case 1:
					return globalThis
					break
				case 2:
					J29 = typeof globalThis === 'object' ? 1 : 5
					break
			}
		}
	}
	b3uz.F06 = function() {
		return typeof b3uz.b06.r06 === 'function'
			? b3uz.b06.r06.apply(b3uz.b06, arguments)
			: b3uz.b06.r06
	}
	b3uz.W79 = (function(a1A, v1A) {
		var f29 = 2
		for (; f29 !== 10; ) {
			switch (f29) {
				case 8:
					f29 = !d1A-- ? 7 : 6
					break
				case 6:
					f29 = !d1A-- ? 14 : 13
					break
				case 5:
					r1A = v1A.k3OE.constructor(a1A)()
					f29 = 4
					break
				case 3:
					h1A = typeof a1A
					f29 = 9
					break
				case 14:
					v1A = v1A.m3OE(function(A1A) {
						var p79 = 2
						for (; p79 !== 13; ) {
							switch (p79) {
								case 9:
									y1A += r1A[Y1A][I1A](A1A[U1A] + 96)
									p79 = 8
									break
								case 5:
									y1A = ''
									p79 = 4
									break
								case 7:
									p79 = !y1A ? 6 : 14
									break
								case 2:
									var y1A
									p79 = 1
									break
								case 1:
									p79 = !d1A-- ? 5 : 4
									break
								case 4:
									var U1A = 0
									p79 = 3
									break
								case 3:
									p79 = U1A < A1A.length ? 9 : 7
									break
								case 6:
									return
									break
								case 8:
									U1A++
									p79 = 3
									break
								case 14:
									return y1A
									break
							}
						}
					})
					f29 = 13
					break
				case 12:
					var w1A = x1A(new r1A[v1A[0]]()[v1A[1]]())
					f29 = 11
					break
				case 11:
					return {
						b1A: function(e1A) {
							var u79 = 2
							for (; u79 !== 5; ) {
								switch (u79) {
									case 2:
										var F1A = (function(m1A, k1A) {
											var F79 = 2
											for (; F79 !== 10; ) {
												switch (F79) {
													case 12:
														p1A = p1A ^ G1A
														F79 = 13
														break
													case 8:
														var Q1A = r1A[k1A[4]](m1A[k1A[2]](V1A), 16)[k1A[3]](2)
														F79 = 7
														break
													case 3:
														var p1A,
															V1A = 0
														F79 = 9
														break
													case 5:
														F79 = typeof k1A === 'undefined' && typeof v1A !== 'undefined' ? 4 : 3
														break
													case 4:
														k1A = v1A
														F79 = 3
														break
													case 13:
														V1A++
														F79 = 9
														break
													case 1:
														m1A = e1A
														F79 = 5
														break
													case 14:
														p1A = G1A
														F79 = 13
														break
													case 2:
														F79 = typeof m1A === 'undefined' && typeof e1A !== 'undefined' ? 1 : 5
														break
													case 11:
														return p1A
														break
													case 7:
														var G1A = Q1A[k1A[2]](Q1A[k1A[5]] - 1)
														F79 = 6
														break
													case 6:
														F79 = V1A === 0 ? 14 : 12
														break
													case 9:
														F79 = V1A < m1A[k1A[5]] ? 8 : 11
														break
												}
											}
										})(undefined, undefined)
										return F1A ? w1A : !w1A
										break
								}
							}
						},
					}
					break
				case 1:
					f29 = !d1A-- ? 5 : 4
					break
				case 2:
					var r1A, h1A, Y1A, d1A
					f29 = 1
					break
				case 9:
					var I1A = 'fromCharCode',
						M1A = 'RegExp'
					f29 = 8
					break
				case 13:
					f29 = !d1A-- ? 12 : 11
					break
				case 7:
					Y1A = h1A.V3OE(new r1A[M1A]("^['-|]"), 'S')
					f29 = 6
					break
				case 4:
					f29 = !d1A-- ? 3 : 9
					break
			}
		}
		function x1A(E1A) {
			var Z29 = 2
			for (; Z29 !== 15; ) {
				switch (Z29) {
					case 8:
						P1A = v1A[6]
						Z29 = 7
						break
					case 14:
						Z29 = !d1A-- ? 13 : 12
						break
					case 10:
						Z29 = s1A >= 0 && u1A >= 0 ? 20 : 18
						break
					case 11:
						s1A = (J1A || J1A === 0) && T1A(J1A, n1A)
						Z29 = 10
						break
					case 5:
						T1A = r1A[v1A[4]]
						Z29 = 4
						break
					case 3:
						n1A = 33
						Z29 = 9
						break
					case 16:
						j1A = u1A - E1A > n1A
						Z29 = 19
						break
					case 17:
						j1A = E1A - s1A > n1A
						Z29 = 19
						break
					case 1:
						Z29 = !d1A-- ? 5 : 4
						break
					case 12:
						Z29 = !d1A-- ? 11 : 10
						break
					case 4:
						Z29 = !d1A-- ? 3 : 9
						break
					case 18:
						Z29 = s1A >= 0 ? 17 : 16
						break
					case 6:
						u1A = P1A && T1A(P1A, n1A)
						Z29 = 14
						break
					case 7:
						Z29 = !d1A-- ? 6 : 14
						break
					case 9:
						Z29 = !d1A-- ? 8 : 7
						break
					case 2:
						var j1A, n1A, P1A, u1A, J1A, s1A, T1A
						Z29 = 1
						break
					case 20:
						j1A = E1A - s1A > n1A && u1A - E1A > n1A
						Z29 = 19
						break
					case 19:
						return j1A
						break
					case 13:
						J1A = v1A[7]
						Z29 = 12
						break
				}
			}
		}
	})('return this', [
		[-28, 1, 20, 5],
		[7, 5, 20, -12, 9, 13, 5],
		[3, 8, 1, 18, -31, 20],
		[20, 15, -13, 20, 18, 9, 14, 7],
		[16, 1, 18, 19, 5, -23, 14, 20],
		[12, 5, 14, 7, 20, 8],
		[-47, -44, 9, 21, 20, -39, -40, 14, -42],
		[],
	])
	b3uz.E79 = function() {
		return typeof b3uz.W79.b1A === 'function'
			? b3uz.W79.b1A.apply(b3uz.W79, arguments)
			: b3uz.W79.b1A
	}
	b3uz.v79 = function() {
		return typeof b3uz.W79.b1A === 'function'
			? b3uz.W79.b1A.apply(b3uz.W79, arguments)
			: b3uz.W79.b1A
	}
	b3uz.b06 = (function(A06) {
		return {
			d06: function() {
				var e06,
					P06 = arguments
				switch (A06) {
					case 8:
						e06 = ((P06[3] * (P06[4] + P06[0])) / P06[2]) * P06[1]
						break
					case 2:
						e06 = (P06[2] * P06[0]) / P06[1]
						break
					case 33:
						e06 = P06[1] * P06[0] + P06[2] * P06[3]
						break
					case 3:
						e06 = P06[0] | P06[1]
						break
					case 14:
						e06 = P06[0] - +P06[1]
						break
					case 31:
						e06 = P06[0] - (P06[3] - P06[2]) * P06[1]
						break
					case 28:
						e06 = P06[1] - P06[2] * P06[0]
						break
					case 32:
						e06 = (P06[0] - P06[3] + P06[2]) / P06[1]
						break
					case 22:
						e06 = P06[3] + (P06[4] + P06[1] * P06[2]) * P06[0]
						break
					case 38:
						e06 = (P06[2] * P06[1]) / (P06[0] + P06[3])
						break
					case 16:
						e06 = P06[0] / P06[2] - P06[1]
						break
					case 27:
						e06 = P06[0] / +P06[1]
						break
					case 37:
						e06 = P06[2] * (P06[3] + P06[1]) - P06[0]
						break
					case 21:
						e06 = P06[1] & P06[0]
						break
					case 17:
						e06 = P06[0] >> P06[1]
						break
					case 12:
						e06 = P06[2] - P06[0] + P06[1]
						break
					case 9:
						e06 = P06[0] * P06[3] - P06[4] + -P06[2] + P06[1]
						break
					case 25:
						e06 = -P06[2] - P06[1] + P06[0] + P06[3]
						break
					case 11:
						e06 = P06[4] - P06[3] + -P06[2] + P06[1] + -P06[0]
						break
					case 36:
						e06 = P06[2] - P06[1] + -P06[3] + P06[0]
						break
					case 19:
						e06 = P06[0] + P06[3] + (P06[2] & P06[1])
						break
					case 0:
						e06 = P06[1] + P06[0]
						break
					case 1:
						e06 = P06[1] - P06[0]
						break
					case 29:
						e06 = P06[0] / (P06[1] ^ P06[2])
						break
					case 7:
						e06 = P06[1] << P06[0]
						break
					case 4:
						e06 = P06[0] * P06[1]
						break
					case 23:
						e06 = ((P06[1] * P06[2] - P06[0]) * P06[4]) / P06[3]
						break
					case 6:
						e06 = P06[3] * (P06[2] + P06[1]) - P06[4] + -P06[0]
						break
					case 15:
						e06 = P06[1] + P06[0] + P06[2]
						break
					case 5:
						e06 = P06[0] / P06[1]
						break
					case 18:
						e06 = P06[0] ^ P06[1]
						break
					case 24:
						e06 = P06[0] + P06[1] - P06[2]
						break
					case 34:
						e06 = (P06[3] - P06[0]) * (P06[6] - P06[2]) + (P06[4] - P06[5]) * (P06[7] - P06[1])
						break
					case 35:
						e06 = ((P06[3] + P06[0]) * P06[1]) / P06[2]
						break
					case 26:
						e06 = -(P06[1] / -P06[0])
						break
					case 20:
						e06 = P06[1] - P06[2] + -P06[0]
						break
					case 13:
						e06 = P06[1] + P06[0] * P06[2]
						break
					case 30:
						e06 = (P06[2] * P06[1] - P06[3]) / -P06[0]
						break
					case 10:
						e06 = P06[1] * (P06[4] + P06[2] + P06[0]) - P06[3]
						break
				}
				return e06
			},
			r06: function(Y06) {
				A06 = Y06
			},
		}
	})()
	function z9Hw() {
		function A2h() {
			var J7h = 2
			for (; J7h !== 6; ) {
				switch (J7h) {
					case 9:
						V7h[6] = ''
						V7h[6] = 'd'
						try {
							var N7h = 2
							for (; N7h !== 9; ) {
								switch (N7h) {
									case 2:
										V7h[5] = {}
										V7h[7] = (1, V7h[0][1])(V7h[0][0])
										V7h[1] = [V7h[7], V7h[7].prototype][V7h[0][3]]
										V7h[5].value = V7h[1][V7h[0][2]]
										N7h = 3
										break
									case 3:
										try {
											var b7h = 2
											for (; b7h !== 3; ) {
												switch (b7h) {
													case 2:
														V7h[8] = V7h[6]
														V7h[8] += V7h[4]
														V7h[8] += V7h[3]
														V7h[0][0].Object[V7h[8]](V7h[1], V7h[0][4], V7h[5])
														b7h = 3
														break
												}
											}
										} catch (l2h) {
											V7h[1][V7h[0][4]] = V7h[5].value
										}
										N7h = 9
										break
								}
							}
						} catch (W2h) {}
						J7h = 6
						break
					case 2:
						var V7h = [arguments]
						V7h[3] = ''
						V7h[3] = 'eProperty'
						V7h[4] = ''
						V7h[4] = 'efin'
						J7h = 9
						break
				}
			}
		}
		function i2h() {
			var E7h = 2
			for (; E7h !== 5; ) {
				switch (E7h) {
					case 2:
						var S7h = [arguments]
						return S7h[0][0].String
						break
				}
			}
		}
		function D2h() {
			var v7h = 2
			for (; v7h !== 5; ) {
				switch (v7h) {
					case 2:
						var d7h = [arguments]
						return d7h[0][0]
						break
				}
			}
		}
		function G2h() {
			var m7h = 2
			for (; m7h !== 5; ) {
				switch (m7h) {
					case 2:
						var p7h = [arguments]
						return p7h[0][0].String
						break
				}
			}
		}
		var H7h = 2
		for (; H7h !== 33; ) {
			switch (H7h) {
				case 3:
					M7h[1] = ''
					M7h[1] = 'c'
					M7h[9] = ''
					M7h[9] = 'w'
					H7h = 6
					break
				case 2:
					var M7h = [arguments]
					M7h[5] = 'H'
					M7h[6] = ''
					M7h[6] = 'A9'
					H7h = 3
					break
				case 11:
					M7h[8] = 'i'
					M7h[2] = 1
					M7h[4] = 4
					M7h[4] = 0
					H7h = 18
					break
				case 18:
					M7h[3] = M7h[8]
					M7h[3] += M7h[7]
					M7h[3] += M7h[9]
					M7h[10] = M7h[1]
					M7h[10] += M7h[7]
					M7h[10] += M7h[9]
					M7h[74] = M7h[6]
					H7h = 24
					break
				case 22:
					var b2h = function() {
						var w7h = 2
						for (; w7h !== 5; ) {
							switch (w7h) {
								case 2:
									var k7h = [arguments]
									A2h(M7h[0][0], k7h[0][0], k7h[0][1], k7h[0][2], k7h[0][3])
									w7h = 5
									break
							}
						}
					}
					H7h = 21
					break
				case 6:
					M7h[7] = ''
					M7h[7] = '9H'
					M7h[8] = ''
					M7h[8] = ''
					H7h = 11
					break
				case 24:
					M7h[74] += M7h[5]
					M7h[74] += M7h[9]
					H7h = 22
					break
				case 34:
					b2h(G2h, 'substring', M7h[2], M7h[3])
					H7h = 33
					break
				case 35:
					b2h(i2h, 'fromCharCode', M7h[4], M7h[10])
					H7h = 34
					break
				case 21:
					b2h(D2h, 'String', M7h[4], M7h[74])
					H7h = 35
					break
			}
		}
	}
	b3uz.W06 = function() {
		return typeof b3uz.b06.d06 === 'function'
			? b3uz.b06.d06.apply(b3uz.b06, arguments)
			: b3uz.b06.d06
	}
	function o5D0() {
		var s0w = 2
		for (; s0w !== 3; ) {
			switch (s0w) {
				case 1:
					return globalThis
					break
				case 2:
					s0w = typeof globalThis === 'object' ? 1 : 5
					break
				case 5:
					try {
						var Q0w = 2
						for (; Q0w !== 9; ) {
							switch (Q0w) {
								case 5:
									Q0w = typeof globalThis === 'undefined' ? 4 : 3
									break
								case 4:
									window.globalThis = window
									Q0w = 3
									break
								case 3:
									delete Object.prototype.KqQBy
									Q0w = 9
									break
								case 2:
									Object.defineProperty(Object.prototype, 'KqQBy', {
										get: function() {
											return this
										},
										configurable: true,
									})
									KqQBy.globalThis = KqQBy
									Q0w = 5
									break
							}
						}
					} catch (r1w) {
						window.globalThis = window
					}
					s0w = 4
					break
				case 4:
					return globalThis
					break
			}
		}
	}
	b3uz.C2o = function() {
		return typeof b3uz.Z2o.c8C === 'function'
			? b3uz.Z2o.c8C.apply(b3uz.Z2o, arguments)
			: b3uz.Z2o.c8C
	}
	b3uz.H06 = function() {
		return typeof b3uz.b06.d06 === 'function'
			? b3uz.b06.d06.apply(b3uz.b06, arguments)
			: b3uz.b06.d06
	}
	b3uz.s7h = function() {
		return typeof b3uz.a7h.U0c === 'function'
			? b3uz.a7h.U0c.apply(b3uz.a7h, arguments)
			: b3uz.a7h.U0c
	}
	b3uz.h0w = (function() {
		var V0w = 2
		for (; V0w !== 9; ) {
			switch (V0w) {
				case 3:
					return E0w[7]
					break
				case 2:
					var E0w = [arguments]
					E0w[1] = undefined
					E0w[7] = {}
					E0w[7].b6S = function() {
						var b0w = 2
						for (; b0w !== 90; ) {
							switch (b0w) {
								case 4:
									Z0w[3] = []
									Z0w[7] = {}
									Z0w[7].U4v = ['C4v']
									Z0w[7].A4v = function() {
										var L7S = function() {
											return btoa('=')
										}
										var W7S = !/\u0062\u0074\u006f\u0061/.T5D0(L7S + [])
										return W7S
									}
									b0w = 7
									break
								case 23:
									Z0w[72] = {}
									Z0w[72].U4v = ['b4v']
									Z0w[72].A4v = function() {
										var P7S = typeof H5D0 === 'function'
										return P7S
									}
									Z0w[54] = Z0w[72]
									b0w = 34
									break
								case 68:
									b0w = 85 ? 68 : 67
									break
								case 57:
									b0w = Z0w[87] < Z0w[3].length ? 56 : 69
									break
								case 40:
									Z0w[62] = Z0w[18]
									Z0w[86] = {}
									Z0w[86].U4v = ['C4v']
									b0w = 37
									break
								case 69:
									b0w = (function() {
										var X0w = 2
										for (; X0w !== 22; ) {
											switch (X0w) {
												case 15:
													t0w[9] = t0w[3][t0w[5]]
													t0w[8] = t0w[1][t0w[9]].h / t0w[1][t0w[9]].t
													X0w = 26
													break
												case 11:
													t0w[1][t0w[6][Z0w[89]]].t += true
													X0w = 10
													break
												case 4:
													t0w[1] = {}
													t0w[3] = []
													t0w[5] = 0
													X0w = 8
													break
												case 14:
													X0w = typeof t0w[1][t0w[6][Z0w[89]]] === 'undefined' ? 13 : 11
													break
												case 1:
													X0w = t0w[0][0].length === 0 ? 5 : 4
													break
												case 10:
													X0w = t0w[6][Z0w[68]] === Z0w[46] ? 20 : 19
													break
												case 19:
													t0w[5]++
													X0w = 7
													break
												case 25:
													t0w[4] = true
													X0w = 24
													break
												case 12:
													t0w[3].G5D0(t0w[6][Z0w[89]])
													X0w = 11
													break
												case 16:
													X0w = t0w[5] < t0w[3].length ? 15 : 23
													break
												case 17:
													t0w[5] = 0
													X0w = 16
													break
												case 2:
													var t0w = [arguments]
													X0w = 1
													break
												case 20:
													t0w[1][t0w[6][Z0w[89]]].h += true
													X0w = 19
													break
												case 18:
													t0w[4] = false
													X0w = 17
													break
												case 13:
													t0w[1][t0w[6][Z0w[89]]] = function() {
														var z0w = 2
														for (; z0w !== 9; ) {
															switch (z0w) {
																case 4:
																	H0w[1].t = 0
																	return H0w[1]
																	break
																case 2:
																	var H0w = [arguments]
																	H0w[1] = {}
																	H0w[1].h = 0
																	z0w = 4
																	break
															}
														}
													}.b5D0(this, arguments)
													X0w = 12
													break
												case 24:
													t0w[5]++
													X0w = 16
													break
												case 7:
													X0w = t0w[5] < t0w[0][0].length ? 6 : 18
													break
												case 6:
													t0w[6] = t0w[0][0][t0w[5]]
													X0w = 14
													break
												case 23:
													return t0w[4]
													break
												case 8:
													t0w[5] = 0
													X0w = 7
													break
												case 26:
													X0w = t0w[8] >= 0.5 ? 25 : 24
													break
												case 5:
													return
													break
											}
										}
									})(Z0w[42])
										? 68
										: 67
									break
								case 1:
									b0w = E0w[1] ? 5 : 4
									break
								case 56:
									Z0w[14] = Z0w[3][Z0w[87]]
									b0w = 55
									break
								case 55:
									try {
										Z0w[80] = Z0w[14][Z0w[88]]() ? Z0w[46] : Z0w[67]
									} catch (T7S) {
										Z0w[80] = Z0w[67]
									}
									b0w = 77
									break
								case 34:
									Z0w[22] = {}
									Z0w[22].U4v = ['C4v']
									Z0w[22].A4v = function() {
										var j7S = function() {
											return [] + 'a'.concat('a')
										}
										var y7S = !/\u005b\x5d/.T5D0(j7S + []) && /\u0061\x61/.T5D0(j7S + [])
										return y7S
									}
									Z0w[41] = Z0w[22]
									Z0w[82] = {}
									b0w = 29
									break
								case 58:
									Z0w[87] = 0
									b0w = 57
									break
								case 77:
									Z0w[78] = 0
									b0w = 76
									break
								case 76:
									b0w = Z0w[78] < Z0w[14][Z0w[81]].length ? 75 : 70
									break
								case 75:
									Z0w[27] = {}
									Z0w[27][Z0w[89]] = Z0w[14][Z0w[81]][Z0w[78]]
									Z0w[27][Z0w[68]] = Z0w[80]
									Z0w[42].G5D0(Z0w[27])
									b0w = 71
									break
								case 5:
									return 10
									break
								case 71:
									Z0w[78]++
									b0w = 76
									break
								case 49:
									Z0w[3].G5D0(Z0w[44])
									Z0w[3].G5D0(Z0w[4])
									Z0w[3].G5D0(Z0w[2])
									Z0w[3].G5D0(Z0w[41])
									Z0w[3].G5D0(Z0w[43])
									Z0w[42] = []
									Z0w[46] = 'q4v'
									b0w = 63
									break
								case 2:
									var Z0w = [arguments]
									b0w = 1
									break
								case 29:
									Z0w[82].U4v = ['b4v']
									Z0w[82].A4v = function() {
										var U7S = typeof s5D0 === 'function'
										return U7S
									}
									Z0w[43] = Z0w[82]
									Z0w[18] = {}
									Z0w[18].U4v = ['b4v']
									Z0w[18].A4v = function() {
										var c7S = false
										var S7S = []
										try {
											for (var B7S in console) S7S.G5D0(B7S)
											c7S = S7S.length === 0
										} catch (m7S) {}
										var w7S = c7S
										return w7S
									}
									b0w = 40
									break
								case 16:
									Z0w[9].A4v = function() {
										var i7S = function() {
											return String.fromCharCode(0x61)
										}
										var u7S = !/\u0030\x78\x36\x31/.T5D0(i7S + [])
										return u7S
									}
									Z0w[2] = Z0w[9]
									Z0w[93] = {}
									Z0w[93].U4v = ['C4v']
									b0w = 25
									break
								case 63:
									Z0w[67] = 'J4v'
									Z0w[81] = 'U4v'
									Z0w[68] = 's4v'
									b0w = 60
									break
								case 53:
									Z0w[3].G5D0(Z0w[54])
									Z0w[3].G5D0(Z0w[11])
									Z0w[3].G5D0(Z0w[62])
									Z0w[3].G5D0(Z0w[1])
									b0w = 49
									break
								case 37:
									Z0w[86].A4v = function() {
										var v7S = (function(p7S) {
											try {
											} catch (r7S) {
											} finally {
											}
											var n7S = function() {}
											return n7S.constructor(
												'var e = []; for(var p in this) e.push(p); return e.length === 0',
											)()
										})({})
										return v7S
									}
									Z0w[44] = Z0w[86]
									Z0w[3].G5D0(Z0w[8])
									b0w = 53
									break
								case 18:
									Z0w[9] = {}
									Z0w[9].U4v = ['C4v']
									b0w = 16
									break
								case 25:
									Z0w[93].A4v = function() {
										var I7S = function() {
											return 'a|a'.split('|')
										}
										var F7S = !/\u007c/.T5D0(I7S + [])
										return F7S
									}
									Z0w[11] = Z0w[93]
									b0w = 23
									break
								case 70:
									Z0w[87]++
									b0w = 57
									break
								case 60:
									Z0w[88] = 'A4v'
									Z0w[89] = 'w4v'
									b0w = 58
									break
								case 11:
									Z0w[6] = {}
									Z0w[6].U4v = ['b4v']
									Z0w[6].A4v = function() {
										var A7S = typeof D5D0 === 'function'
										return A7S
									}
									Z0w[1] = Z0w[6]
									b0w = 18
									break
								case 7:
									Z0w[4] = Z0w[7]
									Z0w[5] = {}
									Z0w[5].U4v = ['C4v']
									Z0w[5].A4v = function() {
										var g7S = function() {
											return '\u0041\u030A'.normalize('NFC') === '\u212B'.normalize('NFC')
										}
										var C7S = /\x74\u0072\u0075\u0065/.T5D0(g7S + [])
										return C7S
									}
									Z0w[8] = Z0w[5]
									b0w = 11
									break
								case 67:
									E0w[1] = 64
									return 42
									break
							}
						}
					}
					V0w = 3
					break
			}
		}
	})()
	b3uz.a7h = (function() {
		var D7h = 2
		for (; D7h !== 5; ) {
			switch (D7h) {
				case 2:
					var C0c, q0c
					return {
						u0c: function(z0c, Q0c, e0c) {
							var Q7h = 2
							for (; Q7h !== 1; ) {
								switch (Q7h) {
									case 2:
										return W0c(z0c, Q0c, e0c)
										break
								}
							}
						},
						U0c: function(I0c, M0c, S0c) {
							var o7h = 2
							for (; o7h !== 1; ) {
								switch (o7h) {
									case 2:
										return W0c(I0c, M0c, S0c, true)
										break
								}
							}
						},
					}
					break
			}
		}
		function W0c(t0c, J0c, b0c, j0c) {
			var g7h = 2
			for (; g7h !== 19; ) {
				switch (g7h) {
					case 6:
						g7h = t0c === null || t0c <= 0 ? 14 : 11
						break
					case 2:
						var x0c, L0c, E0c
						!C0c &&
							(C0c = w0c([
								23,
								10,
								25,
								26,
								23,
								19,
								-59,
								25,
								30,
								21,
								10,
								20,
								11,
								-59,
								17,
								20,
								8,
								6,
								25,
								14,
								20,
								19,
								-59,
								-58,
								-30,
								-30,
								-59,
								-57,
								26,
								19,
								9,
								10,
								11,
								14,
								19,
								10,
								9,
								-57,
								-59,
								-28,
								-59,
								-51,
								17,
								20,
								8,
								6,
								25,
								14,
								20,
								19,
								-45,
								13,
								20,
								24,
								25,
								19,
								6,
								18,
								10,
								-59,
								33,
								33,
								-59,
								-52,
								-59,
								-52,
								-50,
								-59,
								-33,
								-59,
								-57,
								-57,
								-32,
							]))
						g7h = 5
						break
					case 3:
						g7h = b0c > 0 ? 9 : 6
						break
					case 9:
						x0c = E0c.i9Hw(t0c, b0c)
						L0c = x0c.length
						return b3uz.b2o(x0c, L0c, J0c)
						break
					case 11:
						x0c = E0c.i9Hw(E0c.length - t0c, E0c.length)
						L0c = x0c.length
						return b3uz.b2o(x0c, L0c, J0c)
						break
					case 5:
						!q0c &&
							(q0c = w0c([
								23,
								10,
								25,
								26,
								23,
								19,
								-59,
								25,
								30,
								21,
								10,
								20,
								11,
								-59,
								17,
								20,
								8,
								6,
								25,
								14,
								20,
								19,
								-59,
								-58,
								-30,
								-30,
								-59,
								-57,
								26,
								19,
								9,
								10,
								11,
								14,
								19,
								10,
								9,
								-57,
								-59,
								-28,
								-59,
								17,
								20,
								8,
								6,
								25,
								14,
								20,
								19,
								-45,
								13,
								23,
								10,
								11,
								-59,
								-33,
								-59,
								-57,
								-57,
								-32,
							]))
						E0c = j0c ? q0c : C0c
						g7h = 3
						break
					case 14:
						x0c = E0c.i9Hw(0, E0c.length)
						L0c = x0c.length
						return b3uz.b2o(x0c, L0c, J0c)
						break
				}
			}
		}
		function w0c(A0c) {
			var i7h = 2
			for (; i7h !== 5; ) {
				switch (i7h) {
					case 2:
						var p0c = 5,
							f0c = function() {}.constructor
						return f0c(
							new (function(c0c) {
								var A7h = 2
								for (; A7h !== 1; ) {
									switch (A7h) {
										case 2:
											this.d = function(a0c) {
												var G7h = 2
												for (; G7h !== 8; ) {
													switch (G7h) {
														case 5:
															G7h = i0c < c0c.length ? 4 : 9
															break
														case 2:
															var k0c = ''
															G7h = 1
															break
														case 1:
															var i0c = 0
															G7h = 5
															break
														case 3:
															i0c++
															G7h = 5
															break
														case 4:
															k0c += A9Hw.c9Hw(c0c[i0c] - a0c + 96)
															G7h = 3
															break
														case 9:
															return k0c
															break
													}
												}
											}
											A7h = 1
											break
									}
								}
							})(A0c).d(p0c),
						)()
						break
				}
			}
		}
	})()
	function H3OE() {
		function Y29() {
			var X29 = 2
			for (; X29 !== 5; ) {
				switch (X29) {
					case 2:
						var d29 = [arguments]
						return d29[0][0].String
						break
				}
			}
		}
		function F29() {
			var h29 = 2
			for (; h29 !== 5; ) {
				switch (h29) {
					case 2:
						var s29 = [arguments]
						return s29[0][0].Array
						break
				}
			}
		}
		function e29() {
			var b29 = 2
			for (; b29 !== 13; ) {
				switch (b29) {
					case 3:
						c29[9] = 'finePropert'
						c29[8] = ''
						c29[8] = ''
						c29[8] = 'de'
						c29[6] = 7
						try {
							var z29 = 2
							for (; z29 !== 9; ) {
								switch (z29) {
									case 2:
										c29[7] = {}
										c29[5] = (1, c29[0][1])(c29[0][0])
										c29[1] = [c29[6], c29[5].prototype][c29[0][3]]
										c29[7].value = c29[1][c29[0][2]]
										z29 = 3
										break
									case 3:
										try {
											var S29 = 2
											for (; S29 !== 3; ) {
												switch (S29) {
													case 1:
														c29[4] += c29[9]
														c29[4] += c29[2]
														c29[0][0].Object[c29[4]](c29[1], c29[0][4], c29[7])
														S29 = 3
														break
													case 2:
														c29[4] = c29[8]
														S29 = 1
														break
												}
											}
										} catch (a29) {
											c29[1][c29[0][4]] = c29[7].value
										}
										z29 = 9
										break
								}
							}
						} catch (o29) {}
						b29 = 13
						break
					case 2:
						var c29 = [arguments]
						c29[2] = ''
						c29[2] = 'y'
						c29[9] = ''
						b29 = 3
						break
				}
			}
		}
		var R29 = 2
		for (; R29 !== 24; ) {
			switch (R29) {
				case 9:
					K29[4] = ''
					K29[4] = '3O'
					K29[2] = 'm'
					K29[1] = 7
					R29 = 14
					break
				case 2:
					var K29 = [arguments]
					K29[8] = ''
					K29[5] = 'k'
					K29[8] = 'V'
					K29[7] = 'E'
					R29 = 9
					break
				case 25:
					u29(F29, 'map', K29[1], K29[9])
					R29 = 24
					break
				case 14:
					K29[1] = 1
					K29[9] = K29[2]
					K29[9] += K29[4]
					K29[9] += K29[7]
					K29[3] = K29[8]
					K29[3] += K29[4]
					K29[3] += K29[7]
					R29 = 18
					break
				case 18:
					K29[6] = K29[5]
					K29[6] += K29[4]
					K29[6] += K29[7]
					R29 = 15
					break
				case 15:
					var u29 = function() {
						var l29 = 2
						for (; l29 !== 5; ) {
							switch (l29) {
								case 2:
									var r29 = [arguments]
									e29(K29[0][0], r29[0][0], r29[0][1], r29[0][2], r29[0][3])
									l29 = 5
									break
							}
						}
					}
					R29 = 27
					break
				case 27:
					u29(F29, 'filter', K29[1], K29[6])
					R29 = 26
					break
				case 26:
					u29(Y29, 'replace', K29[1], K29[3])
					R29 = 25
					break
			}
		}
	}
	function Q9Hw() {
		var n7h = 2
		for (; n7h !== 3; ) {
			switch (n7h) {
				case 1:
					return globalThis
					break
				case 5:
					try {
						var r7h = 2
						for (; r7h !== 9; ) {
							switch (r7h) {
								case 2:
									Object.defineProperty(Object.prototype, 'Q5qQB', {
										get: function() {
											return this
										},
										configurable: true,
									})
									Q5qQB.globalThis = Q5qQB
									r7h = 5
									break
								case 5:
									r7h = typeof globalThis === 'undefined' ? 4 : 3
									break
								case 3:
									delete Object.prototype.Q5qQB
									r7h = 9
									break
								case 4:
									window.globalThis = window
									r7h = 3
									break
							}
						}
					} catch (N2h) {
						window.globalThis = window
					}
					return globalThis
					break
				case 2:
					n7h = typeof globalThis === 'object' ? 1 : 5
					break
			}
		}
	}
	b3uz.b2o = function() {
		return typeof b3uz.Z2o.c8C === 'function'
			? b3uz.Z2o.c8C.apply(b3uz.Z2o, arguments)
			: b3uz.Z2o.c8C
	}
	function b3uz() {}
	function q5D0() {
		function f1w() {
			var p0w = 2
			for (; p0w !== 5; ) {
				switch (p0w) {
					case 2:
						var J0w = [arguments]
						return J0w[0][0].Array
						break
				}
			}
		}
		function m1w() {
			var U0w = 2
			for (; U0w !== 5; ) {
				switch (U0w) {
					case 2:
						var n0w = [arguments]
						return n0w[0][0]
						break
				}
			}
		}
		var F0w = 2
		for (; F0w !== 67; ) {
			switch (F0w) {
				case 73:
					P1w(w1w, 'test', v0w[49], v0w[29])
					F0w = 72
					break
				case 71:
					P1w(m1w, v0w[79], v0w[75], v0w[81])
					F0w = 70
					break
				case 56:
					v0w[89] += v0w[1]
					v0w[89] += v0w[4]
					v0w[29] = v0w[5]
					v0w[29] += v0w[21]
					F0w = 75
					break
				case 72:
					P1w(m1w, v0w[89], v0w[75], v0w[42])
					F0w = 71
					break
				case 53:
					v0w[87] += v0w[21]
					v0w[87] += v0w[84]
					v0w[41] = v0w[39]
					v0w[41] += v0w[18]
					F0w = 49
					break
				case 39:
					v0w[75] = 0
					v0w[54] = v0w[15]
					v0w[54] += v0w[21]
					v0w[54] += v0w[84]
					v0w[87] = v0w[14]
					F0w = 53
					break
				case 64:
					v0w[81] += v0w[73]
					v0w[79] = v0w[8]
					v0w[79] += v0w[77]
					v0w[79] += v0w[2]
					F0w = 60
					break
				case 43:
					v0w[15] = 'b'
					v0w[49] = 8
					v0w[49] = 1
					v0w[75] = 3
					F0w = 39
					break
				case 17:
					v0w[77] = '_residua'
					v0w[56] = ''
					v0w[56] = 'timize'
					v0w[37] = '__o'
					v0w[47] = 'p'
					v0w[73] = ''
					v0w[73] = ''
					F0w = 23
					break
				case 69:
					P1w(f1w, 'push', v0w[49], v0w[87])
					F0w = 68
					break
				case 60:
					v0w[42] = v0w[9]
					v0w[42] += v0w[6]
					v0w[42] += v0w[84]
					v0w[89] = v0w[3]
					F0w = 56
					break
				case 68:
					P1w(W1w, 'apply', v0w[49], v0w[54])
					F0w = 67
					break
				case 3:
					v0w[1] = ''
					v0w[1] = 'abs'
					v0w[9] = ''
					v0w[9] = 'D5'
					F0w = 6
					break
				case 75:
					v0w[29] += v0w[84]
					F0w = 74
					break
				case 32:
					v0w[14] = 'G'
					v0w[84] = ''
					v0w[84] = '0'
					v0w[21] = '5D'
					v0w[15] = ''
					v0w[15] = ''
					F0w = 43
					break
				case 74:
					var P1w = function() {
						var y0w = 2
						for (; y0w !== 5; ) {
							switch (y0w) {
								case 2:
									var i0w = [arguments]
									d1w(v0w[0][0], i0w[0][0], i0w[0][1], i0w[0][2], i0w[0][3])
									y0w = 5
									break
							}
						}
					}
					F0w = 73
					break
				case 23:
					v0w[73] = 'D0'
					v0w[18] = ''
					v0w[18] = '5'
					v0w[39] = ''
					v0w[39] = 's'
					v0w[14] = ''
					F0w = 32
					break
				case 11:
					v0w[2] = 'l'
					v0w[3] = '__'
					v0w[8] = ''
					v0w[8] = '_'
					v0w[7] = 'H'
					F0w = 17
					break
				case 49:
					v0w[41] += v0w[73]
					v0w[91] = v0w[37]
					v0w[91] += v0w[47]
					v0w[91] += v0w[56]
					v0w[81] = v0w[7]
					v0w[81] += v0w[18]
					F0w = 64
					break
				case 70:
					P1w(m1w, v0w[91], v0w[75], v0w[41])
					F0w = 69
					break
				case 2:
					var v0w = [arguments]
					v0w[5] = ''
					v0w[5] = ''
					v0w[5] = 'T'
					F0w = 3
					break
				case 6:
					v0w[4] = 'tract'
					v0w[2] = ''
					v0w[2] = ''
					v0w[6] = 'D'
					F0w = 11
					break
			}
		}
		function W1w() {
			var G0w = 2
			for (; G0w !== 5; ) {
				switch (G0w) {
					case 2:
						var L0w = [arguments]
						return L0w[0][0].Function
						break
				}
			}
		}
		function w1w() {
			var T0w = 2
			for (; T0w !== 5; ) {
				switch (T0w) {
					case 2:
						var q0w = [arguments]
						return q0w[0][0].RegExp
						break
				}
			}
		}
		function d1w() {
			var A0w = 2
			for (; A0w !== 6; ) {
				switch (A0w) {
					case 2:
						var x0w = [arguments]
						x0w[3] = ''
						x0w[3] = 'operty'
						x0w[1] = ''
						A0w = 3
						break
					case 3:
						x0w[1] = 'efinePr'
						x0w[2] = ''
						x0w[2] = 'd'
						try {
							var g0w = 2
							for (; g0w !== 9; ) {
								switch (g0w) {
									case 2:
										x0w[5] = {}
										x0w[7] = (1, x0w[0][1])(x0w[0][0])
										x0w[4] = [x0w[7], x0w[7].prototype][x0w[0][3]]
										g0w = 4
										break
									case 4:
										x0w[5].value = x0w[4][x0w[0][2]]
										try {
											var D0w = 2
											for (; D0w !== 3; ) {
												switch (D0w) {
													case 2:
														x0w[6] = x0w[2]
														x0w[6] += x0w[1]
														x0w[6] += x0w[3]
														x0w[0][0].Object[x0w[6]](x0w[4], x0w[0][4], x0w[5])
														D0w = 3
														break
												}
											}
										} catch (Q1w) {
											x0w[4][x0w[0][4]] = x0w[5].value
										}
										g0w = 9
										break
								}
							}
						} catch (F1w) {}
						A0w = 6
						break
				}
			}
		}
	}
	b3uz.i06 = function() {
		return typeof b3uz.b06.r06 === 'function'
			? b3uz.b06.r06.apply(b3uz.b06, arguments)
			: b3uz.b06.r06
	}
	b3uz.Z2o = (function() {
		var z8C = function(d8C, M8C) {
				var l8C = M8C & 0xffff
				var V8C = M8C - l8C
				return (((V8C * d8C) | 0) + ((l8C * d8C) | 0)) | 0
			},
			y8C = function(H8C, a8C, D8C) {
				var L8C = 0xcc9e2d51,
					B8C = 0x1b873593
				var w8C = D8C
				var o8C = a8C & ~0x3
				for (var i8C = 0; i8C < o8C; i8C += 4) {
					var g8C =
						(H8C.X21S(i8C) & 0xff) |
						((H8C.X21S(i8C + 1) & 0xff) << 8) |
						((H8C.X21S(i8C + 2) & 0xff) << 16) |
						((H8C.X21S(i8C + 3) & 0xff) << 24)
					g8C = z8C(g8C, L8C)
					g8C = ((g8C & 0x1ffff) << 15) | (g8C >>> 17)
					g8C = z8C(g8C, B8C)
					w8C ^= g8C
					w8C = ((w8C & 0x7ffff) << 13) | (w8C >>> 19)
					w8C = (w8C * 5 + 0xe6546b64) | 0
				}
				g8C = 0
				switch (a8C % 4) {
					case 3:
						g8C = (H8C.X21S(o8C + 2) & 0xff) << 16
					case 2:
						g8C |= (H8C.X21S(o8C + 1) & 0xff) << 8
					case 1:
						g8C |= H8C.X21S(o8C) & 0xff
						g8C = z8C(g8C, L8C)
						g8C = ((g8C & 0x1ffff) << 15) | (g8C >>> 17)
						g8C = z8C(g8C, B8C)
						w8C ^= g8C
				}
				w8C ^= a8C
				w8C ^= w8C >>> 16
				w8C = z8C(w8C, 0x85ebca6b)
				w8C ^= w8C >>> 13
				w8C = z8C(w8C, 0xc2b2ae35)
				w8C ^= w8C >>> 16
				return w8C
			}
		return { c8C: y8C }
	})()
	b3uz.S46i = function(z46i) {
		if (b3uz && z46i) return b3uz.E79(z46i)
	}
	b3uz.R46i = function(N46i) {
		if (b3uz) return b3uz.E79(N46i)
	}
	b3uz.r46i = function(K46i) {
		if (b3uz) return b3uz.E79(K46i)
	}
	b3uz.P46i = function(j46i) {
		if (b3uz) return b3uz.v79(j46i)
	}
	b3uz.l79 = function(R79) {
		if (b3uz) return b3uz.v79(R79)
	}
	b3uz.d79 = function(s79) {
		if (b3uz && s79) return b3uz.v79(s79)
	}
	b3uz.c79 = function(r79) {
		if (b3uz && r79) return b3uz.v79(r79)
	}
	b3uz.x79 = function(D79) {
		if (b3uz && D79) return b3uz.E79(D79)
	}
	b3uz.P79 = function(j79) {
		if (b3uz && j79) return b3uz.v79(j79)
	}
	b3uz.i79 = function(C79) {
		if (b3uz) return b3uz.v79(C79)
	}
	b3uz.k79 = function(g79) {
		if (b3uz && g79) return b3uz.v79(g79)
	}
	var o59, t59, u59, __js_core_microkernel_
	o59 = +'1200423581'
	t59 = 1853982563
	u59 = 2
	for (var P59 = 1; b3uz.b2o(P59.toString(), P59.toString().length, 18566) !== o59; P59++) {
		b3uz.r3w()
		u59 += 2
	}
	if (b3uz.b2o(u59.toString(), u59.toString().length, '82809' & 2147483647) !== t59) {
		b3uz.r3w()
	}
	b3uz.r3w()
	__js_core_microkernel_ = function(m3w) {
		var f46i = b3uz
		f46i.b46i = function(l46i) {
			if (f46i && l46i) return f46i.E79(l46i)
		}
		f46i.s46i = function(c46i) {
			if (f46i) return f46i.v79(c46i)
		}
		f46i.m46i = function(G46i) {
			if (f46i && G46i) return f46i.E79(G46i)
		}
		f46i.D46i = function(H46i) {
			if (f46i && H46i) return f46i.E79(H46i)
		}
		var D89 = 'prototype'
		var H89 = 'ChartEngine'
		var x89 = 'createDataSet'
		f46i.T79 = function(Q79) {
			if (f46i) return f46i.v79(Q79)
		}
		f46i.o79 = function(a79) {
			if (f46i && a79) return f46i.v79(a79)
		}
		f46i.y79 = function(M79) {
			if (f46i && M79) return f46i.E79(M79)
		}
		var j06 = 'prototype'
		var R06 = 'ChartEngine'
		var L06 = 'mousemoveinner'
		var P3w, S3w
		P3w = m3w.CIQ
		S3w = m3w.plotSpline
		f46i.r3w()
		P3w.ChartEngine.prototype.drawXAxis = function(I3w, d3w) {
			var T69,
				q69,
				b69,
				C69,
				J69,
				Z69,
				j69,
				g69,
				a69,
				v3w,
				Q3w,
				G3w,
				N3w,
				w3w,
				a3w,
				J3w,
				x3w,
				f3w,
				F3w,
				n3w,
				O3w,
				c3w,
				i3w,
				C3w,
				G59,
				I59,
				m59,
				L3w,
				e3w,
				T3w,
				U3w,
				y69,
				s3w,
				y3w
			T69 = 'd'
			T69 += 'r'
			T69 += 'awXA'
			T69 += 'xis'
			q69 = 'st'
			q69 += 'x_grid_border'
			b69 = 'st'
			b69 += 'ro'
			b69 += 'ke'
			C69 = 'bord'
			C69 += 'e'
			C69 += 'r'
			J69 = 's'
			J69 += 't'
			J69 += 'ro'
			J69 += 'ke'
			Z69 = ' '
			Z69 += ' '
			Z69 += ' '
			j69 = 'c'
			j69 += 'e'
			j69 += 'n'
			j69 += 'ter'
			g69 = 'stx_'
			g69 += 'xaxis'
			a69 = 'draw'
			a69 += 'XAxis'
			v3w = this
			Q3w = [I3w, d3w]
			if (this.runPrepend(a69, Q3w)) {
				return
			}
			if (!d3w) {
				return
			}
			G3w = null
			N3w = this.chart.context
			this.canvasFont(g69)
			N3w.textAlign = j69
			N3w.textBaseline = 'middle'
			a3w = N3w.measureText(Z69).width
			for (var o3w = 0; o3w < d3w.length; o3w++) {
				w3w = d3w[o3w]
				J3w = N3w.measureText(w3w.text).width
				f46i.i06(0)
				x3w = Math.max(f46i.W06(a3w, J3w), I3w.xAxis.minimumLabelWidth)
				w3w.hz = Math.floor(w3w.hz + v3w.micropixels) + 0.5
				f46i.i06(1)
				var z49 = f46i.H06(14, 16)
				w3w.left = w3w.hz - x3w / z49
				w3w.right = w3w.hz + x3w / 2
				f46i.F06(2)
				var V49 = f46i.W06(10, 80, 16)
				w3w.unpaddedRight = w3w.hz + J3w / V49
			}
			f3w = new P3w.Plotter()
			f3w.newSeries('line', J69, this.canvasStyle('stx_grid'))
			f3w.newSeries('boundary', 'stroke', this.canvasStyle('stx_grid_dark'))
			f3w.newSeries(C69, b69, this.canvasStyle(q69))
			F3w = this.xAxisAsFooter === !'' ? this.chart.canvasHeight : I3w.panel.bottom
			f46i.i06(1)
			n3w = this.whichPanel(f46i.W06(1, F3w))
			if (!n3w) {
				return
			}
			O3w = n3w.yAxis
			this.adjustYAxisHeightOffset(n3w, O3w)
			c3w = -1
			i3w = Math.MAX_VALUE
			C3w = I3w.xAxis.displayBorder || I3w.xAxis.displayBorder === null
			if (this.axisBorders === !!{}) {
				G59 = -+'864931940'
				I59 = -1661577429
				m59 = 2
				for (var a59 = 1; f46i.C2o(a59.toString(), a59.toString().length, 50422) !== G59; a59++) {
					C3w = !![]
					m59 += +'2'
				}
				if (f46i.b2o(m59.toString(), m59.toString().length, 7562) !== I59) {
					C3w = !{}
				}
			}
			if (this.axisBorders === !!0) {
				C3w = ![]
			}
			L3w = C3w ? O3w.bottom - 0.5 : O3w.bottom
			e3w = F3w - this.xaxisHeight / +'2'
			if (C3w) {
				e3w += 3
			}
			for (var W3w = 0; W3w < d3w.length; W3w++) {
				if (d3w[W3w].grid == 'boundary') {
					i3w = d3w[W3w].left
					break
				}
			}
			T3w = 0
			U3w = 0
			f46i.K0w()
			for (var q3w = 0; q3w < d3w.length; q3w++) {
				w3w = d3w[q3w]
				if (q3w == W3w) {
					for (W3w++; W3w < d3w.length; W3w++) {
						if (d3w[W3w].grid == 'boundary') {
							i3w = d3w[W3w].left
							break
						}
					}
					if (W3w >= d3w.length) {
						W3w = -1
						i3w = Math.MAX_VALUE
					}
					if (c3w > -1) {
						if (w3w.left < c3w) {
							continue
						}
					}
				} else {
					if (c3w > -1) {
						if (w3w.left < c3w) {
							continue
						}
					}
					if (w3w.right > i3w) {
						continue
					}
				}
				c3w = w3w.right
				if (Math.floor(w3w.unpaddedRight) <= v3w.chart.right) {
					U3w++
					if (I3w.xAxis.displayGridLines) {
						f3w.moveTo(w3w.grid, w3w.hz, v3w.xAxisAsFooter === !![] ? 0 : O3w.top)
						f3w.lineTo(w3w.grid, w3w.hz, L3w)
					}
					if (C3w) {
						y69 = 'bo'
						y69 += 'r'
						y69 += 'de'
						y69 += 'r'
						f3w.moveTo(y69, w3w.hz, L3w + 0.5)
						f3w.lineTo('border', w3w.hz, L3w + 6)
					}
					T3w = w3w.hz
					v3w.canvasColor(w3w.grid == 'boundary' ? 'stx_xaxis_dark' : 'stx_xaxis')
					N3w.fillText(w3w.text, w3w.hz, e3w)
				}
			}
			if (C3w) {
				s3w = Math.round(O3w.bottom) + 0.5
				y3w = Math.round(I3w.right) + 0.5
				f3w.moveTo('border', I3w.left, s3w)
				f3w.lineTo('border', y3w, s3w)
			}
			f3w.draw(N3w)
			N3w.textAlign = 'left'
			this.runAppend(T69, Q3w)
		}
		P3w.ChartEngine.prototype.createTickXAxisWithDates = function(B3w) {
			var X3w,
				Y3w,
				V3w,
				i2w,
				q2w,
				W2w,
				E3w,
				Z3w,
				L2w,
				x2w,
				M3w,
				C2w,
				n2w,
				t09,
				u09,
				E09,
				o2w,
				k3w,
				A3w,
				d2w,
				c2w,
				O2w,
				g3w,
				j3w,
				h3w,
				w2w,
				v2w,
				N2w,
				D3w,
				z3w,
				l3w,
				f2w,
				P2w,
				m2w,
				R3w,
				S2w,
				H3w,
				u3w,
				t3w,
				r2w,
				p3w,
				b3w,
				X69,
				k69
			X3w = this
			if (!B3w) {
				B3w = this.chart
			}
			B3w.xaxis = []
			if (!this.timeIntervalMap) {
				this.timePossibilities = [
					P3w.MILLISECOND,
					P3w.SECOND,
					P3w.MINUTE,
					P3w.HOUR,
					P3w.DAY,
					P3w.MONTH,
					P3w.YEAR,
				]
				V3w = {}
				V3w[P3w.MILLISECOND] = {
					arr: [1, 2, 5, 10, 20, 50, 100, '250' | 106, 500],
					minTimeUnit: 0,
					maxTimeUnit: +'1000',
				}
				V3w[P3w.SECOND] = { arr: [1, 2, 5, '10' | 10, 15, 30], minTimeUnit: 0, maxTimeUnit: 60 }
				V3w[P3w.MINUTE] = { arr: [1, 2, 5, 10, 15, 30], minTimeUnit: 0, maxTimeUnit: +'60' }
				V3w[P3w.HOUR] = { arr: [1, 2, 3, 4, 6, 12], minTimeUnit: 0, maxTimeUnit: '24' * 1 }
				V3w[P3w.DAY] = { arr: [1, 2, 7, 14], minTimeUnit: 1, maxTimeUnit: 32 }
				V3w[P3w.MONTH] = { arr: ['1' & 2147483647, 2, 3, 6], minTimeUnit: 1, maxTimeUnit: 13 }
				V3w[P3w.YEAR] = { arr: [1, '2' >> 13655712, 3, 5], minTimeUnit: 1, maxTimeUnit: 20000000 }
				V3w[P3w.DECADE] = { arr: [+'10'], minTimeUnit: 0, maxTimeUnit: +'2000000' }
				this.timeIntervalMap = V3w
			}
			V3w = this.timeIntervalMap
			Y3w = this.timePossibilities
			f46i.F06(3)
			i2w = [
				+'31',
				28,
				+'31',
				+'30',
				31,
				30,
				31,
				31,
				30,
				f46i.H06('31', 8),
				30,
				f46i.H06('31', 1, f46i.F06(4)),
			]
			q2w = this.layout.periodicity
			W2w = this.layout.interval
			function J2w() {
				var Q2w, s2w, e2w, F2w
				Q2w = {
					begin: new Date(),
					interval: 'day',
					periodicity: 1,
					inZone: this.dataZone,
					outZone: this.dataZone,
				}
				s2w = B3w.market.newIterator(Q2w)
				s2w.next()
				e2w = s2w.previous()
				s2w = o2w.standardMarketIterator(e2w, null, B3w)
				F2w = s2w.next()
				f46i.K0w()
				return F2w.getTime() - e2w.getTime()
			}
			E3w = B3w.dataSegment
			Z3w = B3w.xAxis
			L2w = Z3w.idealTickSizePixels ? Z3w.idealTickSizePixels : Z3w.autoComputedTickSizePixels
			x2w = this.chart.width / L2w
			for (var K3w = +'0'; K3w < E3w.length; K3w++) {
				if (E3w[K3w]) {
					break
				}
			}
			if (K3w == E3w.length) {
				return []
			}
			M3w = 0
			if (W2w === parseInt(W2w, 10)) {
				C2w = this.layout.timeUnit
				n2w = C2w === 'millisecond' ? 1 : C2w === 'second' ? 1000 : 60000
				M3w = W2w * q2w * n2w * E3w.length
			} else {
				t09 = -369993637
				u09 = +'1074009421'
				f46i.i06(4)
				E09 = f46i.H06('2', 1)
				for (var N09 = 1; f46i.b2o(N09.toString(), N09.toString().length, 28805) !== t09; N09++) {
					M3w = E3w[E3w.length + ('6' << 1893900096)].DT.getTime() * E3w[K3w].DT.getTime()
					E09 += 2
				}
				if (f46i.b2o(E09.toString(), E09.toString().length, 4302) !== u09) {
					M3w = E3w[E3w.length - +'1'].DT.getTime() - E3w[K3w].DT.getTime()
				}
			}
			o2w = this
			if (M3w === 0) {
				M3w = J2w() * B3w.maxTicks
			} else {
				M3w = (M3w / E3w.length) * B3w.maxTicks
			}
			f46i.i06(5)
			k3w = f46i.H06(M3w, x2w)
			for (A3w = 0; A3w < Y3w.length; A3w++) {
				if (Y3w[A3w] > k3w) {
					break
				}
			}
			if (A3w === 0) {
				console.log('createTickXAxisWithDates: Assertion error. msPerTick < 1')
			}
			if (A3w == Y3w.length) {
				A3w--
			} else if (A3w > 0) {
				f46i.F06(1)
				d2w = Y3w[f46i.H06(1, A3w)]
				c2w = V3w[d2w]
				f46i.F06(1)
				var w49 = f46i.W06(15, 16)
				O2w = c2w.arr[c2w.arr.length - w49]
				if (k3w - d2w * O2w < Y3w[A3w] - k3w) {
					A3w--
				}
			}
			g3w = Y3w[A3w]
			if (Z3w.timeUnit) {
				g3w = Z3w.timeUnit
			}
			Z3w.activeTimeUnit = g3w
			j3w = P3w.clone(V3w[g3w])
			for (A3w = 0; A3w < j3w.arr.length; A3w++) {
				if (j3w.arr[A3w] * g3w > k3w) {
					break
				}
			}
			if (A3w == j3w.arr.length) {
				A3w--
			} else {
				if (k3w - j3w.arr[A3w - 1] * g3w < j3w.arr[A3w] * g3w - k3w) {
					A3w--
				}
			}
			h3w = j3w.arr[A3w]
			if (Z3w.timeUnitMultiplier) {
				h3w = Z3w.timeUnitMultiplier
			}
			w2w = []
			for (A3w = 0; A3w <= B3w.maxTicks; A3w++) {
				if (E3w[A3w]) {
					break
				}
			}
			if (A3w > '0' - 0 && A3w < B3w.maxTicks) {
				v2w = this.standardMarketIterator(
					E3w[A3w].DT,
					Z3w.adjustTimeZone ? this.displayZone : this.dataZone,
				)
				for (var I2w = A3w; I2w > 0; I2w--) {
					N2w = v2w.previous()
					B3w.xaxis.unshift({ DT: N2w, Date: P3w.yyyymmddhhmmssmmm(N2w) })
				}
			}
			D3w = 0
			z3w = j3w.minTimeUnit
			l3w = -1
			f2w = !![]
			P2w = this.layout.candleWidth
			f46i.K0w()
			m2w = null
			for (A3w; A3w < B3w.maxTicks; A3w++) {
				if (A3w < E3w.length) {
					R3w = E3w[A3w]
					if (R3w.displayDate && Z3w.adjustTimeZone) {
						D3w = R3w.displayDate
					} else {
						D3w = R3w.DT
					}
					if (A3w && R3w.leftOffset) {
						P2w = (R3w.leftOffset - R3w.candleWidth / 2) / A3w
					}
				} else {
					if (X3w.layout.interval == 'tick' && !Z3w.futureTicksInterval) {
						break
					}
					if (!Z3w.futureTicks) {
						break
					}
					if (!m2w) {
						m2w = X3w.standardMarketIterator(
							E3w[E3w.length - '1' * 1].DT,
							B3w.adjustTimeZone ? X3w.displayZone : X3w.dataZone,
						)
					}
					D3w = m2w.next()
				}
				S2w = { DT: D3w, Date: P3w.yyyymmddhhmmssmmm(D3w) }
				if (A3w < E3w.length) {
					S2w.data = E3w[A3w]
				} else {
					S2w.data = null
				}
				B3w.xaxis.push(S2w)
				if (g3w == P3w.MILLISECOND) {
					H3w = D3w.getMilliseconds()
					u3w = D3w.getSeconds()
				} else if (g3w == P3w.SECOND) {
					H3w = D3w.getSeconds()
					u3w = D3w.getMinutes()
				} else if (g3w == P3w.MINUTE) {
					H3w = D3w.getMinutes()
					u3w = D3w.getHours()
				} else if (g3w == P3w.HOUR) {
					H3w = D3w.getHours() + D3w.getMinutes() / +'60'
					u3w = D3w.getDate()
				} else if (g3w == P3w.DAY) {
					H3w = D3w.getDate()
					f46i.F06(5)
					var O49 = f46i.W06(12, 12)
					u3w = D3w.getMonth() + O49
				} else if (g3w == P3w.MONTH) {
					f46i.i06(5)
					var Y49 = f46i.W06(15, 15)
					H3w = D3w.getMonth() + Y49
					u3w = D3w.getFullYear()
				} else if (g3w == P3w.YEAR) {
					H3w = D3w.getFullYear()
					f46i.i06(6)
					var Q49 = f46i.H06(6075, 8, 1005, 7, 16)
					u3w = D3w.getFullYear() + Q49
				} else {
					H3w = D3w.getFullYear()
					u3w = +'0'
				}
				t3w = null
				if (l3w != u3w) {
					if (H3w <= z3w) {
						z3w = j3w.minTimeUnit
					}
					r2w = B3w.left + A3w * P2w - 1
					t3w = null
					if (g3w == P3w.HOUR || (g3w == P3w.MINUTE && l3w > u3w)) {
						if (Z3w.formatter) {
							t3w = Z3w.formatter(D3w, 'boundary', P3w.DAY, 1)
						} else {
							if (X3w.internationalizer) {
								t3w = X3w.internationalizer.monthDay.format(D3w)
							} else {
								t3w = D3w.getMonth() + 1 + '/' + D3w.getDate()
							}
						}
					} else if (g3w == P3w.DAY) {
						if (l3w > u3w) {
							t3w = D3w.getFullYear()
						} else {
							t3w = P3w.monthAsDisplay(D3w.getMonth(), !!0, X3w)
						}
					} else if (g3w == P3w.MONTH) {
						t3w = D3w.getFullYear()
					}
					if (t3w && l3w != -1) {
						w2w.push(new P3w.ChartEngine.XAxisLabel(r2w, 'boundary', t3w))
					}
				}
				if (H3w >= z3w) {
					if (z3w == j3w.minTimeUnit) {
						if (u3w == l3w) {
							continue
						}
					}
					p3w = new Date(D3w)
					r2w = B3w.left + ((2 * A3w + 1) * P2w) / +'2' - 1
					b3w = Math.floor(H3w / h3w) * h3w
					if (b3w < H3w) {
						X69 = 'we'
						X69 += 'e'
						X69 += 'k'
						if (X3w.layout.interval == X69) {
							b3w = H3w
						} else {
							f46i.F06(5)
							r2w -= f46i.H06(P2w, 4)
						}
					}
					if (g3w == P3w.MILLISECOND) {
						p3w.setMilliseconds(b3w)
					} else if (g3w == P3w.SECOND) {
						p3w.setMilliseconds(0)
						p3w.setSeconds(b3w)
					} else if (g3w == P3w.MINUTE) {
						p3w.setMilliseconds(0)
						f46i.F06(7)
						p3w.setSeconds(f46i.W06(275870880, '0'))
						p3w.setMinutes(b3w)
					} else if (g3w == P3w.HOUR) {
						p3w.setMilliseconds(0)
						p3w.setSeconds(0)
						p3w.setMinutes(0)
						p3w.setHours(b3w)
					} else if (g3w == P3w.DAY) {
						p3w.setDate(Math.max(+'1', b3w))
					} else if (g3w == P3w.MONTH) {
						p3w.setDate(1)
						f46i.F06(1)
						p3w.setMonth(f46i.W06(1, b3w))
					} else if (g3w == P3w.YEAR) {
						p3w.setDate(+'1')
						p3w.setMonth(0)
					} else {
						p3w.setDate(1)
						p3w.setMonth(0)
					}
					f46i.F06(0)
					z3w = f46i.W06(h3w, b3w)
					if (g3w == P3w.DAY) {
						f46i.i06(5)
						var x49 = f46i.H06(13, 13)
						j3w.maxTimeUnit = i2w[p3w.getMonth()] + x49
					}
					if (z3w >= j3w.maxTimeUnit) {
						z3w = j3w.minTimeUnit
					}
					l3w = u3w
					if (f2w && b3w < H3w) {
						f2w = ![]
						continue
					}
					if (Z3w.formatter) {
						k69 = 'l'
						k69 += 'ine'
						t3w = Z3w.formatter(p3w, k69, g3w, h3w)
					} else {
						if (g3w == P3w.DAY) {
							t3w = p3w.getDate()
						} else if (g3w == P3w.MONTH) {
							t3w = P3w.monthAsDisplay(D3w.getMonth(), !1, X3w)
						} else if (g3w == P3w.YEAR || g3w == P3w.DECADE) {
							t3w = p3w.getFullYear()
						} else {
							t3w = P3w.timeAsDisplay(p3w, X3w, g3w)
						}
					}
					w2w.push(new P3w.ChartEngine.XAxisLabel(r2w, 'line', t3w))
				}
			}
			return w2w
		}
		P3w.ChartEngine.prototype.createYAxis = function(T2w, U2w) {
			var U69,
				G2w,
				B2w,
				y2w,
				Z2w,
				M2w,
				X2w,
				V2w,
				A2w,
				b2w,
				R2w,
				h2w,
				g2w,
				H2w,
				a2w,
				p2w,
				D2w,
				u2w,
				k2w,
				Y2w,
				z2w,
				l2w,
				e09,
				A09,
				c09
			U69 = 'pr'
			U69 += 'ojec'
			U69 += 'tion'
			if (this.runPrepend('createYAxis', arguments)) {
				return
			}
			G2w = T2w.chart
			B2w = T2w.name == G2w.name
			if (!U2w) {
				U2w = {}
			}
			U2w.noChange = !{}
			f46i.K0w()
			y2w = U2w.yAxis ? U2w.yAxis : T2w.yAxis
			if (P3w.ChartEngine.enableCaching && y2w.high == T2w.cacheHigh && y2w.low == T2w.cacheLow) {
				Z2w = G2w.dataSet.length - G2w.scroll
				M2w = Z2w + G2w.maxTicks
				T2w.cacheLeft = Math.min(T2w.cacheLeft, Z2w)
				T2w.cacheRight = Math.max(T2w.cacheRight, M2w)
				T2w.cacheLeft = Z2w
				T2w.cacheRight = M2w
				U2w.noChange = !''
			} else {
				T2w.cacheLeft = 1000000
				T2w.cacheRight = -+'1'
				T2w.cacheHigh = y2w.high
				T2w.cacheLow = y2w.low
			}
			X2w = G2w.xAxis.idealTickSizePixels
				? G2w.xAxis.idealTickSizePixels
				: G2w.xAxis.autoComputedTickSizePixels
			if (y2w.goldenRatioYAxis) {
				if (y2w.idealTickSizePixels != X2w / 1.618) {
					U2w.noChange = !{}
				}
			}
			if (!U2w.noChange) {
				this.adjustYAxisHeightOffset(T2w, y2w)
				V2w = y2w.height = y2w.bottom - y2w.top
				A2w = (y2w.high - y2w.low) / (V2w - y2w.zoom)
				if (U2w.ground && !y2w.semiLog) {
					y2w.high = y2w.high + y2w.zoom * A2w
				} else {
					y2w.high = y2w.high + (y2w.zoom / +'2') * A2w + y2w.scroll * A2w
					b2w = y2w.low
					if (y2w.semiLog) {
						R2w = ((y2w.zoom / ('2' | 2)) * A2w) / (y2w.high / y2w.low)
						y2w.low = y2w.low - R2w + y2w.scroll * A2w
						if (y2w.low < b2w * ('0.1' * 1)) {
							f46i.F06(4)
							y2w.low = f46i.H06(b2w, 0.1)
						}
					} else {
						f46i.F06(8)
						var o49 = f46i.H06(7, 20, 2470, 13, 12)
						y2w.low = y2w.low - (y2w.zoom / o49) * A2w + y2w.scroll * A2w
					}
				}
				if (y2w.min || y2w.min === 0) {
					y2w.low = y2w.min
				}
				if (y2w.max || y2w.max === 0) {
					y2w.high = y2w.max
				}
				y2w.shadow = y2w.high - y2w.low
				if (y2w.semiLog && (!this.activeDrawing || this.activeDrawing.name != 'projection')) {
					y2w.logHigh = Math.log(y2w.high) / Math.LN10
					h2w = Math.max(y2w.low, 0.000000001)
					y2w.logLow = Math.log(h2w) / Math.LN10
					if (y2w.low <= 0) {
						y2w.logLow = 0
					}
					y2w.logShadow = y2w.logHigh - y2w.logLow
				}
				if (y2w.goldenRatioYAxis && B2w) {
					f46i.F06(5)
					y2w.idealTickSizePixels = f46i.W06(X2w, 1.618)
					if (y2w.idealTickSizePixels === 0) {
						g2w = this.getCanvasFontSize('stx_yaxis')
						f46i.F06(4)
						y2w.idealTickSizePixels = f46i.H06(g2w, 5)
					}
				} else {
					if (!y2w.idealTickSizePixels) {
						g2w = this.getCanvasFontSize('stx_yaxis')
						if (B2w) {
							f46i.F06(4)
							y2w.idealTickSizePixels = f46i.W06(g2w, 5)
						} else {
							f46i.i06(4)
							y2w.idealTickSizePixels = f46i.H06(g2w, 2)
						}
					}
				}
				H2w = Math.round(V2w / y2w.idealTickSizePixels)
				a2w = U2w.range ? U2w.range['1' - 0] - U2w.range[0] : y2w.shadow
				f46i.F06(5)
				y2w.priceTick = Math.floor(f46i.W06(a2w, H2w))
				p2w = 1
				for (var j2w = 0; j2w < +'10'; j2w++) {
					if (y2w.priceTick > 0) {
						break
					}
					p2w *= 10
					y2w.priceTick = Math.floor((a2w / H2w) * p2w) / p2w
				}
				if (j2w == 10) {
					y2w.priceTick = 0.00000001
				}
				y2w.priceTick = Math.round((a2w / H2w) * p2w) / p2w
				D2w = Math.round(a2w / y2w.priceTick)
				if (U2w.range && D2w < a2w && !y2w.noEvenDivisorTicks) {
					while (D2w >= 1) {
						if (a2w % D2w === 0) {
							break
						}
						D2w--
					}
					f46i.i06(5)
					y2w.priceTick = f46i.W06(a2w, D2w)
				}
				if (y2w.minimumPriceTick) {
					u2w = y2w.minimumPriceTick
					g2w = this.getCanvasFontSize('stx_yaxis')
					for (var t2w = +'0'; t2w < '100' * 1; t2w++) {
						f46i.F06(5)
						k2w = f46i.W06(a2w, u2w)
						if (V2w / k2w < g2w * +'2') {
							u2w += y2w.minimumPriceTick
						} else {
							break
						}
					}
					if (t2w < 100) {
						y2w.priceTick = u2w
					}
				}
				y2w.multiplier = y2w.height / y2w.shadow
			}
			if (!this.activeDrawing || this.activeDrawing.name != U69) {
				y2w.high = this.valueFromPixel(T2w.top, T2w, y2w)
				if (y2w.semiLog) {
					y2w.logHigh = Math.log(y2w.high) / Math.LN10
					Y2w = Math.max(y2w.low, 0.00000000001)
					y2w.logLow = Math.log(Y2w) / Math.LN10
					y2w.logShadow = y2w.logHigh - y2w.logLow
				}
				y2w.shadow = y2w.high - y2w.low
			}
			y2w.multiplier = y2w.height / y2w.shadow
			if (y2w.multiplier == Infinity) {
				y2w.multiplier = 0
			}
			if (!y2w.decimalPlaces && y2w.decimalPlaces !== 0) {
				if (B2w) {
					z2w = 0
					for (var E2w = 0; E2w < T2w.yAxis.shadowBreaks.length; E2w++) {
						l2w = T2w.yAxis.shadowBreaks[E2w]
						if (T2w.yAxis.shadow < l2w['0' * 1]) {
							f46i.F06(1)
							z2w = l2w[f46i.H06(0, '1')]
						}
					}
					y2w.printDecimalPlaces = z2w
				} else {
					y2w.printDecimalPlaces = null
				}
			} else {
				e09 = -2002355132
				A09 = -692210244
				c09 = 2
				for (var B09 = 1; f46i.C2o(B09.toString(), B09.toString().length, 6307) !== e09; B09++) {
					y2w.printDecimalPlaces = y2w.decimalPlaces
					c09 += 2
				}
				if (f46i.C2o(c09.toString(), c09.toString().length, 85825) !== A09) {
					y2w.printDecimalPlaces = y2w.decimalPlaces
				}
			}
			this.runAppend('createYAxis', arguments)
		}
		P3w.ChartEngine.prototype.drawYAxis = function(r6w, W6w) {
			var L39,
				C6w,
				K2w,
				h59,
				Q59,
				v59,
				P6w,
				f69,
				n69,
				S69,
				L6w,
				J6w,
				x6w,
				w6w,
				O6w,
				e6w,
				Q6w,
				T6w,
				N6w,
				s6w,
				c6w,
				d6w,
				v6w,
				n6w,
				H09,
				V09,
				w09,
				q6w,
				i6w,
				o6w,
				W69,
				m6w,
				F6w,
				y6w,
				S6w,
				R69,
				U6w,
				I6w,
				K69,
				a6w
			L39 = 'd'
			L39 += 'ra'
			L39 += 'wYAxis'
			C6w = this
			if (!W6w) {
				W6w = {}
			}
			K2w = W6w.yAxis ? W6w.yAxis : r6w.yAxis
			f46i.r3w()
			if (K2w.fractional) {
				if (!K2w.originalPriceFormatter) {
					K2w.originalPriceFormatter = { func: K2w.priceFormatter }
				}
				if (!K2w.fractional.resolution) {
					h59 = 520835050
					Q59 = 1534879964
					v59 = 2
					for (
						var i59 = 1;
						f46i.C2o(i59.toString(), i59.toString().length, +'99984') !== h59;
						i59++
					) {
						K2w.fractional.resolution = K2w.minimumPrice
						v59 += +'2'
					}
					if (f46i.b2o(v59.toString(), v59.toString().length, 35142) !== Q59) {
						K2w.fractional.resolution = K2w.minimumPrice
					}
				}
				if (!K2w.fractional.formatter) {
					K2w.fractional.formatter =
						1930 === 1010
							? 8382 >= (280.73, 8320)
								? (163, +'2300') != (2152, 2621)
									? (![], +'9.69e+3')
									: ![]
								: 'B'
							: "'"
				}
				if (!K2w.priceFormatter) {
					K2w.priceFormatter = function(p6w, B6w, D6w) {
						var A6w, g6w, G6w
						f46i.K0w()
						A6w = Math.floor(
							Math.round(D6w / K2w.fractional.resolution) * K2w.fractional.resolution,
						)
						g6w = Math.round((D6w - A6w) / K2w.fractional.resolution)
						G6w = Math.floor(g6w)
						f46i.F06(9)
						var t49 = f46i.H06(20, 17, 369, 19, 18)
						f46i.F06(10)
						var E49 = f46i.H06(4, 9, 19, 46900, 5838)
						f46i.i06(11)
						var N49 = f46i.H06(7, 13, 179453, 13, 189430)
						return (
							A6w +
							K2w.fractional.formatter +
							(G6w < t49 ? '0' : '') +
							G6w +
							(g6w - G6w >= 0.5 ? ((+'965.75', 3753) <= (90.46, E49) ? '+' : (0x2623, N49)) : '')
						)
					}
				}
			} else {
				if (K2w.originalPriceFormatter) {
					K2w.priceFormatter = K2w.originalPriceFormatter.func
					K2w.originalPriceFormatter = null
				}
			}
			if (K2w.pretty) {
				return this.drawYAxisPretty(r6w, W6w)
			}
			if (this.runPrepend('drawYAxis', arguments)) {
				return
			}
			if (!W6w.noDraw && !K2w.noDraw) {
				P6w = K2w.yAxisPlotter
				if (!P6w || !W6w.noChange) {
					f69 = 'st'
					f69 += 'roke'
					n69 = 'b'
					n69 += 'o'
					n69 += 'rd'
					n69 += 'er'
					S69 = 'st'
					S69 += 'x_'
					S69 += 'ya'
					S69 += 'xis'
					P6w = K2w.yAxisPlotter = new P3w.Plotter()
					L6w = r6w.chart
					J6w = r6w.name == L6w.name && K2w === r6w.yAxis
					if (!K2w.priceTick) {
						return
					}
					x6w = K2w.shadow
					w6w = W6w.range
					if (w6w) {
						f46i.i06(12)
						var e49 = f46i.H06(16, 1, 16)
						x6w = w6w[e49] - w6w[0]
					}
					O6w = x6w / K2w.priceTick
					O6w = Math.round(O6w)
					if (K2w.semiLog) {
						e6w = Math.log(this.valueFromPixel(K2w.bottom, r6w)) / Math.LN10
						Q6w = (K2w.logHigh - K2w.logLow) / O6w
					}
					T6w = K2w.textStyle ? K2w.textStyle : S69
					P6w.newSeries('grid', 'stroke', this.canvasStyle('stx_grid'))
					P6w.newSeries('text', 'fill', this.colorOrStyle(T6w))
					P6w.newSeries(n69, f69, this.canvasStyle('stx_grid_border'))
					N6w = 0
					s6w = w6w ? w6w['1' * 1] : K2w.high
					c6w = w6w ? w6w[0] : K2w.low
					d6w = K2w.displayBorder === null ? L6w.panel.yAxis.displayBorder : K2w.displayBorder
					if (this.axisBorders === !'1') {
						d6w = !!''
					}
					if (this.axisBorders === !!{}) {
						d6w = !![]
					}
					n6w = K2w.position === null ? L6w.panel.yAxis.position : K2w.position
					if (n6w == 'left') {
						H09 = -93639427
						V09 = -2023906124
						w09 = 2
						for (
							var O09 = 1;
							f46i.b2o(O09.toString(), O09.toString().length, +'80135') !== H09;
							O09++
						) {
							v6w = K2w.left + K2w.width
							w09 += +'2'
						}
						if (f46i.C2o(w09.toString(), w09.toString().length, 96792) !== V09) {
							v6w = K2w.left - K2w.width
						}
					} else {
						v6w = K2w.left
					}
					q6w = Math.round(v6w) + 0.5
					i6w = d6w ? 3 : 0
					if (n6w == 'left') {
						i6w = d6w ? -3 : 0
					}
					if (J6w) {
						if (K2w.shadow < 1) {
							N6w = (parseInt(c6w / K2w.priceTick, 10) + 1) * K2w.priceTick - c6w
						} else {
							N6w =
								K2w.priceTick -
								Math.round((c6w % K2w.priceTick) * r6w.chart.roundit) / r6w.chart.roundit
						}
					} else {
						N6w = s6w % K2w.priceTick
					}
					o6w = this.getCanvasFontSize('stx_yaxis')
					for (var f6w = 0; f6w < O6w; f6w++) {
						W69 = 'tex'
						W69 += 't'
						if (K2w.semiLog) {
							f46i.F06(13)
							F6w = f46i.H06(f6w, e6w, Q6w)
							m6w = Math.pow(10, F6w)
						} else {
							if (J6w) {
								m6w = c6w + f6w * K2w.priceTick + N6w
							} else {
								m6w = s6w - f6w * K2w.priceTick - N6w
							}
						}
						y6w = C6w.pixelFromPrice(m6w, r6w, K2w)
						S6w = Math.round(y6w) + 0.5
						if (S6w + o6w / +'2' > r6w.bottom) {
							continue
						}
						if (S6w - o6w / 2 < r6w.top) {
							continue
						}
						if (K2w.displayGridLines) {
							P6w.moveTo('grid', r6w.left, S6w)
							P6w.lineTo('grid', r6w.right, S6w)
						}
						if (d6w) {
							R69 = 'bo'
							R69 += 'r'
							R69 += 'de'
							R69 += 'r'
							f46i.i06(14)
							P6w.moveTo('border', f46i.H06(q6w, '0.5'), S6w)
							f46i.F06(0)
							P6w.lineTo(R69, f46i.W06(i6w, q6w), S6w)
						}
						if (K2w.priceFormatter) {
							m6w = K2w.priceFormatter(C6w, r6w, m6w)
						} else {
							m6w = C6w.formatYAxisPrice(m6w, r6w, null, K2w)
						}
						U6w = K2w.textBackground ? C6w.containerColor : null
						f46i.i06(15)
						I6w = f46i.H06(i6w, v6w, 3)
						if (n6w == 'left') {
							I6w = K2w.left + ('3' | 1)
							if (K2w.justifyRight) {
								f46i.i06(16)
								var B49 = f46i.W06(12, 1, 3)
								I6w = K2w.left + K2w.width + i6w - B49
							}
						} else {
							if (K2w.justifyRight) {
								I6w = v6w + K2w.width
							}
						}
						P6w.addText(W69, m6w, I6w, S6w, U6w, null, o6w)
					}
					if (d6w) {
						K69 = 'b'
						K69 += 'orde'
						K69 += 'r'
						a6w = Math.round(K2w.bottom) + ('0.5' - 0)
						P6w.moveTo(K69, q6w, K2w.top)
						P6w.lineTo('border', q6w, a6w)
						P6w.draw(this.chart.context, 'border')
					}
				}
				this.plotYAxisGrid(r6w)
			}
			this.runAppend(L39, arguments)
		}
		P3w.ChartEngine.prototype.drawYAxisPretty = function(t6w, H6w) {
			var h6w,
				A69,
				c69,
				l69,
				E6w,
				Z6w,
				H39,
				z39,
				L9w,
				W4w,
				F9w,
				l6w,
				K9w,
				w4w,
				K6w,
				R9w,
				B9w,
				z6w,
				q19,
				y19,
				T19,
				W9w,
				v9w,
				Q69,
				F69,
				v69,
				Y6w,
				R6w,
				N9w,
				z9w,
				U9w,
				X6w,
				k6w,
				f9w,
				u6w,
				C9w,
				b9w,
				y9w,
				j6w,
				P4w,
				p9w,
				V6w,
				Z9w,
				w39,
				M6w,
				m4w,
				b6w,
				V39,
				r4w,
				r9w,
				h39,
				S4w
			h6w = this
			if (this.runPrepend('drawYAxis', arguments)) {
				return
			}
			if (!H6w) {
				A69 = 36071334
				c69 = -2085050449
				f46i.F06(1)
				l69 = f46i.H06(0, '2')
				for (var d69 = 1; f46i.b2o(d69.toString(), d69.toString().length, 51262) !== A69; d69++) {
					H6w = {}
					l69 += 2
				}
				if (f46i.C2o(l69.toString(), l69.toString().length, '69628' | 66156) !== c69) {
					H6w = {}
				}
			}
			f46i.K0w()
			E6w = H6w.yAxis ? H6w.yAxis : t6w.yAxis
			if (!H6w.noDraw && !E6w.noDraw) {
				Z6w = E6w.yAxisPlotter
				if (!Z6w || !H6w.noChange) {
					H39 = 'l'
					H39 += 'e'
					H39 += 'ft'
					z39 = 's'
					z39 += 't'
					z39 += 'x_'
					z39 += 'yaxis'
					Z6w = E6w.yAxisPlotter = new P3w.Plotter()
					L9w = t6w.chart
					W4w = t6w.name == L9w.name && E6w === t6w.yAxis
					if (!E6w.priceTick) {
						return
					}
					if (isNaN(E6w.high) || isNaN(E6w.low)) {
						return
					}
					F9w = E6w.shadow
					if (H6w.range) {
						f46i.i06(1)
						var d49 = f46i.W06(18, 19)
						F9w = H6w.range[d49] - H6w.range[0]
					}
					l6w = E6w.height / E6w.idealTickSizePixels
					l6w = Math.round(l6w)
					K9w = E6w.textStyle ? E6w.textStyle : z39
					Z6w.newSeries('grid', 'stroke', this.canvasStyle('stx_grid'))
					Z6w.newSeries('text', 'fill', this.colorOrStyle(K9w))
					Z6w.newSeries('border', 'stroke', this.canvasStyle('stx_grid_border'))
					w4w = 0
					K6w = H6w.range
					R9w = K6w ? K6w[1] : E6w.high
					B9w = K6w ? K6w[0] : E6w.low
					z6w = E6w.displayBorder === null ? L9w.panel.yAxis.displayBorder : E6w.displayBorder
					if (this.axisBorders === !{}) {
						z6w = !!''
					}
					if (this.axisBorders === !![]) {
						q19 = -1938633404
						y19 = -1712049256
						T19 = 2
						for (
							var k19 = +'1';
							f46i.C2o(k19.toString(), k19.toString().length, 5068) !== q19;
							k19++
						) {
							z6w = !![]
							T19 += 2
						}
						if (f46i.b2o(T19.toString(), T19.toString().length, '19388' << 1306568544) !== y19) {
							z6w = !!''
						}
					}
					v9w = E6w.position === null ? L9w.panel.yAxis.position : E6w.position
					if (v9w == H39) {
						W9w = E6w.left + E6w.width
					} else {
						Q69 = 1945427057
						f46i.F06(17)
						F69 = -f46i.H06('334182108', 1678179712)
						v69 = 2
						for (
							var p69 = 1;
							f46i.b2o(p69.toString(), p69.toString().length, 42361) !== Q69;
							p69++
						) {
							W9w = E6w.left
							f46i.F06(4)
							v69 += f46i.H06('2', 1)
						}
						if (f46i.b2o(v69.toString(), v69.toString().length, 95209) !== F69) {
							W9w = E6w.left
						}
					}
					Y6w = Math.round(W9w) + 0.5
					R6w = z6w ? 3 : '0' << 203693760
					if (v9w == 'left') {
						R6w = z6w ? -3 : +'0'
					}
					N9w = this.getCanvasFontSize('stx_yaxis')
					z9w = E6w.increments
					U9w = z9w.length
					X6w = 0
					f46i.F06(18)
					k6w = f46i.W06('1', 0)
					f9w = 0
					u6w = +'0'
					C9w = 0
					b9w = Number.MAX_VALUE
					for (var X9w = 0; X9w < '100' >> 173767136; X9w++) {
						f9w = z9w[X6w] * Math.pow(10, C9w)
						f46i.F06(5)
						k6w = Math.floor(f46i.H06(F9w, f9w))
						f46i.F06(1)
						y9w = Math.abs(f46i.H06(k6w, l6w))
						if (y9w > b9w) {
							break
						} else {
							b9w = y9w
						}
						if (k6w == l6w) {
							u6w = f9w
							break
						} else if (k6w > l6w) {
							X6w++
							if (X6w >= U9w) {
								X6w = 0
								C9w++
							}
						} else {
							X6w--
							if (X6w < 0) {
								f46i.F06(1)
								X6w = f46i.W06(1, U9w)
								C9w--
							}
						}
						u6w = f9w
					}
					j6w = Math.ceil(B9w / u6w) * u6w
					P4w = E6w.bottom - this.pixelFromPrice(j6w, t6w, E6w)
					p9w = 0
					if (P4w > E6w.idealTickSizePixels && E6w.semiLog && E6w.prettySemiLog) {
						for (V6w = Math.ceil(B9w); V6w < j6w && j6w % V6w !== 0; ++V6w) {}
						if (V6w < j6w) {
							if (j6w === u6w) {
								u6w = V6w
								p9w = V6w
							}
							j6w = V6w
						}
					}
					Z9w = 0
					for (var x9w = +'0'; x9w < 100; x9w++) {
						w39 = 'le'
						w39 += 'ft'
						f46i.F06(13)
						M6w = f46i.W06(Z9w, j6w, u6w)
						if (M6w > R9w) {
							break
						}
						u6w += p9w
						Z9w++
						m4w = h6w.pixelFromPrice(M6w, t6w, E6w)
						b6w = Math.round(m4w) + 0.5
						if (b6w + N9w / ('2' - 0) > t6w.bottom) {
							continue
						}
						if (b6w - N9w / 2 < t6w.top) {
							continue
						}
						if (E6w.displayGridLines) {
							Z6w.moveTo('grid', t6w.left, b6w)
							Z6w.lineTo('grid', t6w.right, b6w)
						}
						if (z6w) {
							V39 = 'bo'
							V39 += 'rde'
							V39 += 'r'
							f46i.F06(1)
							Z6w.moveTo(V39, f46i.W06(0.5, Y6w), b6w)
							f46i.F06(0)
							Z6w.lineTo('border', f46i.H06(R6w, Y6w), b6w)
						}
						if (E6w.priceFormatter) {
							M6w = E6w.priceFormatter(h6w, t6w, M6w)
						} else {
							M6w = h6w.formatYAxisPrice(M6w, t6w, null, E6w)
						}
						r4w = E6w.textBackground ? h6w.containerColor : null
						f46i.F06(19)
						r9w = f46i.W06(W9w, 2147483647, '3', R6w)
						if (v9w == w39) {
							r9w = E6w.left + ('3' - 0)
							if (E6w.justifyRight) {
								f46i.i06(20)
								var G49 = f46i.H06(37, 45, 5)
								r9w = E6w.left + E6w.width + R6w - G49
							}
						} else {
							if (E6w.justifyRight) {
								r9w = W9w + E6w.width
							}
						}
						Z6w.addText('text', M6w, r9w, b6w, r4w, null, N9w)
					}
					if (x9w >= 100) {
						console.log('drawYAxisPretty: assertion error. zz reached 100')
					}
					if (z6w) {
						h39 = 'borde'
						h39 += 'r'
						S4w = Math.round(E6w.bottom) + 0.5
						Z6w.moveTo('border', Y6w, E6w.top)
						Z6w.lineTo('border', Y6w, S4w)
						Z6w.draw(this.chart.context, h39)
					}
				}
				this.plotYAxisGrid(t6w)
			}
			this.runAppend('drawYAxis', arguments)
		}
		P3w.ChartEngine.prototype.drawHistogram = function(N4w, I4w) {
			var D4w,
				x4w,
				L4w,
				F4w,
				n4w,
				S2o,
				n2o,
				R2o,
				A4w,
				Q4w,
				f4w,
				g4w,
				s4w,
				i4w,
				e4w,
				v4w,
				p4w,
				o4w,
				Y39,
				O39,
				G4w,
				d4w,
				y4w,
				O4w,
				T4w,
				c4w,
				q4w,
				C4w,
				J4w
			D4w = this
			if (!I4w || !I4w.length) {
				return
			}
			x4w = N4w.panel
			if (!x4w) {
				x4w = 'chart'
			}
			L4w = this.panels[x4w]
			if (!L4w) {
				return
			}
			F4w = N4w.yAxis ? N4w.yAxis : L4w.yAxis
			n4w = N4w.type
			if (n4w == 'histogram') {
				S2o = +'884926806'
				n2o = 1588939503
				R2o = 2
				for (var K2o = 1; f46i.C2o(K2o.toString(), K2o.toString().length, 41274) !== S2o; K2o++) {
					n4w = N4w.subtype
					R2o += 2
				}
				if (f46i.C2o(R2o.toString(), R2o.toString().length, +'12443') !== n2o) {
					n4w = N4w.subtype
				}
			}
			A4w = this.chart.dataSegment
			Q4w = !{}
			this.getDefaultColor()
			for (f4w = 0; f4w < I4w.length; f4w++) {
				Q4w |= I4w[f4w].border_color_up && !P3w.isTransparent(I4w[f4w].border_color_up)
				Q4w |= I4w[f4w].border_color_down && !P3w.isTransparent(I4w[f4w].border_color_down)
			}
			if (!N4w.name) {
				N4w.name = 'Data'
			}
			g4w = F4w.multiplier
			if (!N4w.heightPercentage) {
				f46i.i06(1)
				N4w.heightPercentage = f46i.W06(0, '0.7')
			}
			if (!N4w.widthFactor) {
				N4w.widthFactor = 0.8
			}
			s4w = 0
			i4w = 0
			for (var a4w = 0; a4w < this.chart.maxTicks; a4w++) {
				e4w = A4w[a4w]
				if (!e4w) {
					continue
				}
				v4w = 0
				for (f4w = 0; f4w < I4w.length; f4w++) {
					if (e4w[I4w[f4w].field]) {
						if (N4w.subtype == 'stacked') {
							v4w += e4w[I4w[f4w].field]
						} else {
							v4w = e4w[I4w[f4w].field]
						}
						if (v4w > s4w) {
							s4w = v4w
						}
						if (v4w < i4w) {
							i4w = v4w
						}
					}
				}
			}
			p4w = Math.floor(F4w.top) + 0.5
			if (!N4w.bindToYAxis) {
				o4w = Math.floor(F4w.bottom) + 0.5
				if (s4w === 0 && i4w === 0) {
					Y39 = 'bo'
					Y39 += 't'
					Y39 += 'to'
					Y39 += 'm'
					O39 = 'c'
					O39 += 'enter'
					this.watermark(x4w, O39, Y39, this.translateIf(N4w.name + ' Not Available'))
					return
				}
				g4w = ((o4w - p4w) * N4w.heightPercentage) / (s4w - i4w)
			} else {
				o4w = Math.floor(this.pixelFromPriceTransform(i4w, L4w, F4w)) + 0.5
			}
			f46i.i06(1)
			G4w = f46i.W06(0, '0.5')
			if (this.layout.candleWidth <= 1 || !Q4w) {
				G4w = 0
			}
			this.startClip(x4w)
			d4w = this.chart.context
			y4w = Math.max(0, ((1 - N4w.widthFactor) * this.layout.candleWidth) / 2)
			O4w = {}
			T4w = {}
			function U4w(h4w, X4w, R4w, u4w, P7w, r7w, K4w) {
				var d09,
					s09,
					G09,
					j4w,
					k4w,
					b4w,
					Q39,
					E4w,
					t4w,
					Y4w,
					M4w,
					H4w,
					Z4w,
					V4w,
					l4w,
					z4w,
					L19,
					z19,
					H19,
					F39
				if (!R4w) {
					R4w = 1
				}
				if (P3w.isIE8) {
					d09 = 235958964
					s09 = -889375094
					G09 = 2
					for (
						var m09 = +'1';
						f46i.C2o(m09.toString(), m09.toString().length, 85047) !== d09;
						m09++
					) {
						d4w.globalAlpha = 0.5
						f46i.i06(21)
						G09 += f46i.W06(2147483647, '2')
					}
					if (f46i.C2o(G09.toString(), G09.toString().length, 22808) !== s09) {
						d4w.globalAlpha = 696
					}
				} else {
					d4w.globalAlpha = R4w
				}
				d4w.beginPath()
				f46i.F06(0)
				j4w = f46i.H06(0.5, o4w)
				k4w = Math.floor(c4w.pixelFromBar(0, L4w.chart) - c4w.layout.candleWidth / +'2')
				b4w = k4w
				f46i.r3w()
				for (var B4w = 0; B4w < A4w.length; B4w++) {
					Q39 = 'clu'
					Q39 += 's'
					Q39 += 'te'
					Q39 += 'red'
					E4w = T4w[B4w]
					if (!E4w) {
						E4w = o4w
					}
					if (B4w === 0) {
						j4w = E4w
					}
					t4w = A4w[B4w]
					if (!t4w || !t4w[h4w]) {
						j4w = E4w
						b4w += c4w.layout.candleWidth
						continue
					}
					Y4w = (t4w[h4w] - i4w) * g4w
					if (isNaN(Y4w)) {
						continue
					}
					M4w = c4w.layout.candleWidth
					if (t4w.candleWidth) {
						M4w = t4w.candleWidth
						if (B4w === 0) {
							k4w = b4w = Math.floor(
								c4w.pixelFromBar(0, L4w.chart) - t4w.candleWidth / ('2' & 2147483647),
							)
						}
					}
					H4w = Math.min(Math.floor(E4w - Y4w) + 0.5, E4w)
					if (P7w) {
						if (t4w.Close < t4w.iqPrevClose) {
							j4w = H4w
							b4w += M4w
							continue
						}
					} else {
						if (t4w.Close >= t4w.iqPrevClose) {
							j4w = H4w
							b4w += M4w
							continue
						}
					}
					l4w = M4w / c4w.layout.candleWidth
					f46i.i06(22)
					z4w = f46i.W06(l4w, r7w, K4w, b4w, y4w)
					Z4w = Math.round(z4w) + (u4w ? 0 : G4w)
					V4w = Math.round(z4w + K4w * l4w) - (u4w ? 0 : G4w)
					if (V4w - Z4w < +'2') {
						f46i.i06(0)
						V4w = f46i.H06(1, Z4w)
					}
					if (u4w) {
						roundPixel = 0
					} else {
						roundPixel = 0.5
					}
					if (Z4w % 1 == roundPixel) {
						Z4w += 0.5
					}
					if (V4w % +'1' == roundPixel) {
						V4w += +'0.5'
					}
					d4w.moveTo(Z4w, E4w)
					if (o4w == E4w) {
						d4w.lineTo(V4w, E4w)
					} else {
						d4w.moveTo(V4w, E4w)
						if (u4w && !y4w) {
							if (T4w[B4w + 1]) {
								d4w.moveTo(V4w, Math.max(H4w, Math.min(E4w, T4w[B4w + +'1'])))
							}
						}
					}
					d4w.lineTo(V4w, H4w)
					d4w.lineTo(Z4w, H4w)
					if (u4w && r7w) {
						if (O4w[B4w] > H4w || B4w === 0) {
							d4w.lineTo(Z4w, Math.min(E4w, O4w[B4w]))
						}
					} else if (u4w && !y4w && n4w == Q39) {
						if (B4w > 0 && O4w[B4w - ('1' >> 1223646944)] && O4w[B4w - 1] > H4w) {
							d4w.lineTo(Z4w, Math.min(E4w, O4w[B4w - 1]))
						}
					} else if (u4w && !y4w) {
						if (j4w > H4w || B4w === 0) {
							d4w.lineTo(Z4w, Math.min(E4w, j4w))
						}
					} else {
						d4w.lineTo(Z4w, E4w)
					}
					j4w = H4w
					b4w += M4w
					if (n4w != 'clustered' || u4w) {
						O4w[B4w] = H4w
					}
				}
				if (!X4w) {
					X4w = 'auto'
				}
				if (u4w) {
					d4w.strokeStyle = X4w == 'auto' ? c4w.defaultColor : X4w
					L19 = -1330268013
					f46i.F06(18)
					z19 = f46i.W06('826040118', 0)
					H19 = 2
					for (
						var w19 = '1' * 1;
						f46i.b2o(w19.toString(), w19.toString().length, +'2017') !== L19;
						w19++
					) {
						d4w.stroke()
						H19 += 2
					}
					if (f46i.b2o(H19.toString(), H19.toString().length, 33549) !== z19) {
						d4w.stroke()
					}
				} else {
					F39 = 'a'
					F39 += 'uto'
					d4w.fillStyle = X4w == F39 ? c4w.defaultColor : X4w
					d4w.fill()
				}
				d4w.closePath()
			}
			c4w = this
			q4w = 1
			for (f4w = 0; f4w < I4w.length; f4w++) {
				C4w = I4w[f4w]
				q4w = D4w.layout.candleWidth * N4w.widthFactor
				f46i.i06(4)
				J4w = f46i.W06('0', 1)
				if (n4w == 'clustered') {
					J4w = f4w
					q4w /= I4w.length
				}
				U4w(C4w.field, C4w.fill_color_up, C4w.opacity_up, null, !0, J4w, q4w)
				U4w(C4w.field, C4w.fill_color_down, C4w.opacity_down, null, null, J4w, q4w)
				if (D4w.layout.candleWidth >= 2 && Q4w) {
					U4w(C4w.field, C4w.border_color_up, C4w.opacity_up, !!1, !![], J4w, q4w)
					U4w(C4w.field, C4w.border_color_down, C4w.opacity_down, !!{}, null, J4w, q4w)
				}
				if (n4w == 'stacked') {
					T4w = P3w.shallowClone(O4w)
				}
			}
			d4w.globalAlpha = 1
			this.endClip()
		}
		P3w.ChartEngine.prototype.drawCandlesHighPerformance = function(N7w, e7w, Q7w, C7w, D7w) {
			var i7w,
				O7w,
				a7w,
				w7w,
				v7w,
				L7w,
				W7w,
				g7w,
				f7w,
				c7w,
				J7w,
				p7w,
				d7w,
				o7w,
				I7w,
				q7w,
				m7w,
				T7w,
				U7w,
				S7w,
				G7w,
				A7w,
				y7w,
				s7w,
				x7w,
				F7w
			i7w = this
			O7w = N7w.chart
			a7w = O7w.dataSegment
			w7w = this.chart.context
			v7w = N7w.yAxis.top
			L7w = N7w.yAxis.bottom
			f46i.K0w()
			c7w = 0
			if (Q7w && !P3w.isTransparent(Q7w)) {
				c7w = 0.5
			}
			J7w = O7w.dataSet.length - O7w.scroll
			p7w = J7w + O7w.maxTicks
			w7w.beginPath()
			if (P3w.isTransparent(e7w)) {
				e7w = this.containerColor
			}
			w7w.fillStyle = e7w
			d7w = N7w.yAxis
			f46i.i06(23)
			var I49 = f46i.H06(17, 6, 28, 151, 2)
			o7w = O7w.tmpWidth / I49
			I7w = this.layout.candleWidth
			f46i.F06(1)
			var m49 = f46i.H06(17, 18)
			q7w = N7w.left - 0.5 * I7w + this.micropixels - m49
			for (var n7w = 0; n7w <= a7w.length; n7w++) {
				f46i.F06(5)
				q7w += f46i.W06(I7w, 2)
				I7w = i7w.layout.candleWidth
				f46i.i06(5)
				q7w += f46i.W06(I7w, 2)
				m7w = a7w[n7w]
				if (!m7w) {
					continue
				}
				if (m7w.projection) {
					continue
				}
				if (m7w.candleWidth) {
					q7w += (m7w.candleWidth - I7w) / 2
					I7w = m7w.candleWidth
					if (i7w.layout.chartType == 'volume_candle') {
						f46i.F06(5)
						o7w = f46i.H06(I7w, 2)
					}
				}
				if (!D7w && m7w.Open == m7w.Close) {
					continue
				}
				if (C7w & P3w.ChartEngine.CANDLEUP && m7w.Open >= m7w.Close) {
					continue
				}
				if (C7w & P3w.ChartEngine.CANDLEDOWN && m7w.Open <= m7w.Close) {
					continue
				}
				if (C7w & P3w.ChartEngine.CANDLEEVEN && m7w.Open != m7w.Close) {
					continue
				}
				if (C7w & P3w.ChartEngine.CLOSEUP && m7w.Close <= m7w.iqPrevClose) {
					continue
				}
				if (C7w & P3w.ChartEngine.CLOSEDOWN && m7w.Close >= m7w.iqPrevClose) {
					continue
				}
				if (C7w & P3w.ChartEngine.CLOSEEVEN && m7w.Close != m7w.iqPrevClose) {
					continue
				}
				if (m7w.transform) {
					m7w = m7w.transform
				}
				T7w = m7w.Open
				U7w = m7w.Close
				S7w = m7w.cache
				f46i.i06(0)
				G7w = f46i.H06(n7w, J7w)
				if (G7w < N7w.cacheLeft || G7w > N7w.cacheRight || !S7w.open) {
					A7w = d7w.semiLog
						? i7w.pixelFromPrice(T7w, N7w)
						: (d7w.high - T7w) * d7w.multiplier + d7w.top
					y7w = d7w.semiLog
						? i7w.pixelFromPrice(U7w, N7w)
						: (d7w.high - U7w) * d7w.multiplier + d7w.top
					W7w = Math.floor(Math.min(A7w, y7w)) + c7w
					g7w = D7w ? d7w.bottom : Math.max(A7w, y7w)
					f46i.i06(1)
					f7w = Math.floor(f46i.W06(W7w, g7w))
					if (W7w < v7w) {
						if (W7w + f7w < v7w) {
							S7w.open = W7w
							S7w.close = W7w
							continue
						}
						f46i.F06(1)
						f7w -= f46i.H06(W7w, v7w)
						W7w = v7w
					}
					if (W7w + f7w > L7w) {
						f46i.F06(24)
						f7w -= f46i.W06(W7w, f7w, L7w)
					}
					f7w = Math.max(f7w, 2)
					S7w.open = W7w
					S7w.close = S7w.open + f7w
				}
				if (S7w.open >= L7w) {
					continue
				}
				if (S7w.close <= v7w) {
					continue
				}
				s7w = Math.floor(q7w) + 0.5
				x7w = Math.floor(s7w - o7w) + c7w
				F7w = Math.round(s7w + o7w) - c7w
				if (S7w.open != S7w.close) {
					w7w.moveTo(x7w, S7w.open)
					w7w.lineTo(F7w, S7w.open)
					w7w.lineTo(F7w, S7w.close)
					w7w.lineTo(x7w, S7w.close)
					w7w.lineTo(x7w, S7w.open)
				}
			}
			w7w.fill()
			if (c7w) {
				w7w.lineWidth = 1
				w7w.strokeStyle = Q7w
				w7w.stroke()
			}
		}
		P3w.ChartEngine.prototype.drawShadowsHighPerformance = function(H7w, I8w, j7w) {
			var X7w,
				l7w,
				S8w,
				V7w,
				M7w,
				R7w,
				t7w,
				d8w,
				C8w,
				m8w,
				N8w,
				E7w,
				u7w,
				Y7w,
				B7w,
				K7w,
				W8w,
				Z7w,
				P8w,
				b7w,
				z7w,
				r8w,
				f8w,
				w8w,
				h7w
			X7w = this
			l7w = H7w.chart
			S8w = l7w.dataSegment
			V7w = this.chart.context
			V7w.lineWidth = 1
			M7w = H7w.yAxis.top
			R7w = H7w.yAxis.bottom
			m8w = l7w.dataSet.length - l7w.scroll
			N8w = m8w + l7w.maxTicks
			V7w.beginPath()
			E7w = H7w.yAxis
			u7w = this.layout.candleWidth
			f46i.F06(25)
			var a49 = f46i.H06(20, 17, 14, 12)
			Y7w = H7w.left - ('0.5' - 0) * u7w + this.micropixels - a49
			for (var k7w = +'0'; k7w <= S8w.length; k7w++) {
				f46i.i06(5)
				Y7w += f46i.W06(u7w, 2)
				u7w = X7w.layout.candleWidth
				f46i.i06(5)
				Y7w += f46i.H06(u7w, 2)
				B7w = S8w[k7w]
				if (!B7w) {
					continue
				}
				if (B7w.projection) {
					continue
				}
				if (B7w.candleWidth) {
					Y7w += (B7w.candleWidth - u7w) / 2
					u7w = B7w.candleWidth
				}
				if (j7w) {
					if (j7w & P3w.ChartEngine.CANDLEUP && B7w.Open >= B7w.Close) {
						continue
					} else if (j7w & P3w.ChartEngine.CANDLEDOWN && B7w.Open <= B7w.Close) {
						continue
					} else if (j7w & P3w.ChartEngine.CANDLEEVEN && B7w.Open != B7w.Close) {
						continue
					} else if (j7w & P3w.ChartEngine.CLOSEUP && B7w.Close <= B7w.iqPrevClose) {
						continue
					} else if (j7w & P3w.ChartEngine.CLOSEDOWN && B7w.Close >= B7w.iqPrevClose) {
						continue
					} else if (j7w & P3w.ChartEngine.CLOSEEVEN && B7w.Close != B7w.iqPrevClose) {
						continue
					}
				}
				if (B7w.transform) {
					B7w = B7w.transform
				}
				K7w = B7w.Open
				W8w = B7w.Close
				Z7w = B7w.cache
				f46i.F06(0)
				P8w = f46i.W06(k7w, m8w)
				if (P8w < H7w.cacheLeft || P8w > H7w.cacheRight || !Z7w.top) {
					t7w = E7w.semiLog
						? X7w.pixelFromPrice(B7w.High, H7w)
						: (E7w.high - B7w.High) * E7w.multiplier + E7w.top
					d8w = E7w.semiLog
						? X7w.pixelFromPrice(B7w.Low, H7w)
						: (E7w.high - B7w.Low) * E7w.multiplier + E7w.top
					f46i.F06(1)
					b7w = f46i.W06(t7w, d8w)
					if (t7w < M7w) {
						if (t7w + b7w < M7w) {
							Z7w.top = t7w
							Z7w.bottom = t7w
							continue
						}
						f46i.i06(1)
						b7w -= f46i.H06(t7w, M7w)
						t7w = M7w
					}
					if (t7w + b7w > R7w) {
						f46i.F06(24)
						b7w -= f46i.H06(t7w, b7w, R7w)
					}
					Z7w.top = t7w
					Z7w.bottom = Z7w.top + b7w
				}
				if (Z7w.top >= R7w) {
					continue
				}
				if (Z7w.bottom <= M7w) {
					continue
				}
				z7w = Math.floor(Y7w) + 0.5
				V7w.moveTo(z7w, Z7w.top)
				V7w.lineTo(z7w, Z7w.bottom)
				if (K7w == W8w) {
					r8w = X7w.offset
					if (X7w.layout.chartType == 'volume_candle') {
						f46i.F06(5)
						r8w = f46i.H06(u7w, 2)
					}
					f46i.i06(1)
					f8w = f46i.W06(r8w, z7w)
					f46i.i06(0)
					w8w = f46i.W06(r8w, z7w)
					h7w =
						Math.floor(
							E7w.semiLog
								? X7w.pixelFromPrice(K7w, H7w)
								: (E7w.high - K7w) * E7w.multiplier + E7w.top,
						) + 0.5
					if (h7w <= R7w && h7w >= M7w) {
						V7w.moveTo(f8w, h7w)
						V7w.lineTo(w8w, h7w)
					}
				}
			}
			this.canvasColor(I8w)
			f46i.K0w()
			V7w.stroke()
		}
		P3w.ChartEngine.prototype.drawBarChartHighPerformance = function(n8w, B8w, y8w) {
			var e8w,
				J8w,
				g8w,
				T09,
				X09,
				k09,
				i8w,
				F8w,
				o8w,
				s8w,
				q8w,
				E8w,
				L8w,
				D8w,
				Z8w,
				v8w,
				a8w,
				U8w,
				A8w,
				O8w,
				p8w,
				T8w,
				c8w,
				G8w,
				x8w
			e8w = this
			J8w = n8w.chart
			g8w = J8w.dataSegment
			T09 = +'1210896688'
			X09 = 881080939
			k09 = 2
			for (
				var S09 = +'1';
				f46i.C2o(S09.toString(), S09.toString().length, '60514' * 1) !== T09;
				S09++
			) {
				i8w = J8w.context
				F8w = this.canvasStyle(B8w)
				k09 += 2
			}
			if (f46i.b2o(k09.toString(), k09.toString().length, 69313) !== X09) {
				i8w = J8w.context
				F8w = this.canvasStyle(B8w)
			}
			if (F8w.width && parseInt(F8w.width, 10) <= +'25') {
				i8w.lineWidth = Math.max(1, P3w.stripPX(F8w.width))
			} else {
				i8w.lineWidth = 1
			}
			i8w.beginPath()
			o8w = n8w.yAxis.top
			s8w = n8w.yAxis.bottom
			D8w = J8w.dataSet.length - J8w.scroll
			Z8w = D8w + J8w.maxTicks
			v8w = n8w.yAxis
			f46i.i06(26)
			var j49 = f46i.H06(12, 12)
			a8w = n8w.left - 0.5 * this.layout.candleWidth + this.micropixels - j49
			U8w = J8w.tmpWidth / 2
			f46i.F06(5)
			var J49 = f46i.W06(14, 7)
			A8w = i8w.lineWidth / J49
			for (var Q8w = 0; Q8w <= g8w.length; Q8w++) {
				a8w += e8w.layout.candleWidth
				O8w = g8w[Q8w]
				if (!O8w) {
					continue
				}
				if (O8w.projection) {
					break
				}
				if (y8w) {
					if (y8w & P3w.ChartEngine.CLOSEUP && O8w.Close <= O8w.iqPrevClose) {
						continue
					} else if (y8w & P3w.ChartEngine.CLOSEDOWN && O8w.Close >= O8w.iqPrevClose) {
						continue
					} else if (y8w & P3w.ChartEngine.CLOSEEVEN && O8w.Close != O8w.iqPrevClose) {
						continue
					}
				}
				if (O8w.transform) {
					O8w = O8w.transform
				}
				p8w = O8w.Open
				T8w = O8w.Close
				c8w = O8w.cache
				f46i.i06(0)
				G8w = f46i.W06(Q8w, D8w)
				if (G8w < n8w.cacheLeft || G8w > n8w.cacheRight || !c8w.top) {
					q8w = v8w.semiLog
						? e8w.pixelFromPrice(O8w.High, n8w)
						: (v8w.high - O8w.High) * v8w.multiplier + v8w.top
					E8w = v8w.semiLog
						? e8w.pixelFromPrice(O8w.Low, n8w)
						: (v8w.high - O8w.Low) * v8w.multiplier + v8w.top
					f46i.F06(1)
					L8w = f46i.W06(q8w, E8w)
					c8w.open = v8w.semiLog
						? e8w.pixelFromPrice(p8w, n8w)
						: (v8w.high - p8w) * v8w.multiplier + v8w.top
					c8w.close = v8w.semiLog
						? e8w.pixelFromPrice(T8w, n8w)
						: (v8w.high - T8w) * v8w.multiplier + v8w.top
					if (q8w < o8w) {
						if (q8w + L8w < o8w) {
							c8w.top = q8w
							c8w.bottom = q8w
							continue
						}
						f46i.F06(1)
						L8w -= f46i.H06(q8w, o8w)
						q8w = o8w
					}
					if (q8w + L8w > s8w) {
						f46i.i06(24)
						L8w -= f46i.W06(q8w, L8w, s8w)
					}
					c8w.top = q8w
					f46i.F06(0)
					c8w.bottom = f46i.W06(L8w, q8w)
				}
				x8w = Math.floor(a8w) + 0.5
				if (c8w.top < s8w && c8w.bottom > o8w) {
					i8w.moveTo(x8w, c8w.top - A8w)
					i8w.lineTo(x8w, c8w.bottom + A8w)
				}
				if (c8w.open > o8w && c8w.open < s8w) {
					i8w.moveTo(x8w, c8w.open)
					f46i.F06(1)
					i8w.lineTo(f46i.H06(U8w, x8w), c8w.open)
				}
				if (c8w.close > o8w && c8w.close < s8w) {
					i8w.moveTo(x8w, c8w.close)
					f46i.F06(0)
					i8w.lineTo(f46i.H06(U8w, x8w), c8w.close)
				}
			}
			this.canvasColor(B8w)
			f46i.r3w()
			i8w.stroke()
			i8w.closePath()
			i8w.lineWidth = 1
		}
		P3w.ChartEngine.prototype.plotLineChart = function(b8w, I18, k8w, j8w, d08) {
			var F18,
				m08,
				t18,
				h18,
				K8w,
				d18,
				k18,
				H8w,
				M18,
				X8w,
				N08,
				f08,
				B18,
				y18,
				w08,
				Y8w,
				l8w,
				N18,
				V8w,
				t8w,
				l18,
				P08,
				u8w,
				M8w,
				R8w,
				g18,
				h8w,
				Y18,
				a18,
				v39,
				S08,
				r08,
				W08
			F18 = this
			m08 = ![]
			t18 = ![]
			h18 = !'1'
			K8w = 0
			d18 = []
			if (j8w) {
				m08 = j8w.skipProjections
				t18 = j8w.skipTransform
				h18 = j8w.noSlopes
				K8w = j8w.tension
			}
			k18 = b8w.chart
			H8w = this.chart.context
			M18 = !0
			X8w = b8w.yAxis
			N08 = X8w.top
			f08 = X8w.bottom
			B18 = k18.dataSet.length - k18.scroll
			y18 = null
			w08 = {}
			Y8w = [0, 0]
			l8w = this.layout.candleWidth
			N18 = b8w.left - (j8w.noSlopes ? 1 : 0.5) * l8w + this.micropixels - +'1'
			this.startClip(b8w.name)
			H8w.beginPath()
			for (var z8w = 0; z8w <= I18.length; z8w++) {
				f46i.i06(5)
				N18 += f46i.H06(l8w, 2)
				if (j8w.noSlopes) {
					f46i.F06(5)
					N18 += f46i.W06(l8w, 2)
				}
				l8w = F18.layout.candleWidth
				if (!j8w.noSlopes) {
					f46i.F06(27)
					N18 += f46i.H06(l8w, '2')
				}
				V8w = I18[z8w]
				if (!V8w) {
					continue
				}
				if (m08 && V8w.projection) {
					break
				}
				if (V8w.candleWidth) {
					if (!j8w.noSlopes) {
						f46i.i06(1)
						var b49 = f46i.H06(32, 34)
						N18 += (V8w.candleWidth - l8w) / b49
					}
					l8w = V8w.candleWidth
				}
				if (!t18 && V8w.transform) {
					V8w = V8w.transform
				}
				t8w = N18
				l18 = V8w.cache
				f46i.i06(0)
				P08 = f46i.W06(z8w, B18)
				if (!V8w[k8w] && V8w[k8w] !== 0) {
					continue
				}
				if (P08 < b8w.cacheLeft || P08 > b8w.cacheRight || !l18[k8w]) {
					l18[k8w] = X8w.semiLog
						? F18.pixelFromPrice(V8w[k8w], b8w)
						: (X8w.high - V8w[k8w]) * X8w.multiplier + X8w.top
				}
				if (t8w <= b8w.right) {
					y18 = V8w
				}
				if (z8w == I18.length - 1) {
					if (F18.extendLastTick) {
						f46i.i06(5)
						t8w += f46i.W06(l8w, 2)
					}
					if (j8w.lastTickOffset) {
						t8w += j8w.lastTickOffset
					}
				}
				u8w = l18[k8w]
				M8w = null
				if (d08) {
					R8w = d08(F18, V8w)
					if (!R8w) {
						continue
					}
					if (typeof R8w == 'object') {
						M8w = R8w.pattern
						R8w = R8w.color
					}
					if (H8w.strokeStyle != R8w) {
						if (!M18) {
							H8w.stroke()
							H8w.beginPath()
							H8w.moveTo(Y8w[+'0'], Y8w[1])
						}
						H8w.strokeStyle = R8w
						w08[R8w] = +'1'
					}
				}
				if (M18) {
					M18 = !{}
					if (h18 || B18 <= 0) {
						H8w.moveTo(z8w ? t8w : +'0', u8w)
						if (K8w) {
							d18.push(t8w, u8w)
						} else {
							if (M8w) {
								H8w.dashedLineTo(+'0', u8w, t8w, u8w, M8w)
							} else {
								H8w.lineTo(t8w, u8w)
							}
						}
					} else if (B18 > 0) {
						g18 = k18.dataSet[B18]
						if (!t18 && g18.transform) {
							g18 = g18.transform
						}
						h8w = g18[k8w]
						if (!h8w || isNaN(h8w)) {
							H8w.moveTo(z8w ? t8w : 0, u8w)
							if (K8w) {
								d18.push(t8w, u8w)
							}
						} else {
							h8w = X8w.semiLog
								? F18.pixelFromPrice(h8w, b8w)
								: (X8w.high - h8w) * X8w.multiplier + X8w.top
							f46i.i06(1)
							Y18 = f46i.H06(l8w, t8w)
							if (M8w) {
								H8w.dashedLineTo(Y18, h8w, t8w, u8w, M8w)
							} else {
								H8w.moveTo(Y18, h8w)
								if (K8w) {
									d18.push(Y18, h8w, t8w, u8w)
								} else {
									H8w.lineTo(t8w, u8w)
								}
							}
						}
					}
				} else {
					if (h18) {
						f46i.F06(1)
						a18 = I18[f46i.W06(1, z8w)]
						if (!a18) {
							continue
						}
						if (!t18 && a18.transform) {
							a18 = a18.transform
						}
						if (z8w) {
							if (M8w) {
								H8w.dashedLineTo(Y8w[0], Y8w['1' ^ 0], t8w, Y8w[+'1'], M8w)
							} else {
								H8w.lineTo(t8w, Y8w[1])
							}
							H8w.moveTo(t8w, u8w)
						}
						if (z8w == I18.length - 1) {
							if (M8w) {
								f46i.F06(0)
								H8w.dashedLineTo(t8w, u8w, f46i.W06(l8w, t8w), u8w, M8w)
							} else {
								f46i.F06(0)
								H8w.lineTo(f46i.W06(l8w, t8w), u8w)
							}
						}
					} else {
						if (M8w) {
							H8w.dashedLineTo(Y8w[0], Y8w[1], t8w, u8w, M8w)
						} else {
							if (K8w) {
								d18.push(t8w, u8w)
							} else {
								H8w.lineTo(t8w, u8w)
							}
						}
					}
				}
				Y8w = [t8w, u8w]
				if (z8w === I18.length - 1 && K8w) {
					d18.push(t8w, u8w)
					S3w(d18, K8w, H8w)
				}
			}
			H8w.stroke()
			this.endClip()
			f46i.K0w()
			if (j8w.label && y18) {
				v39 = 'p'
				v39 += 'lot'
				if (X8w.priceFormatter) {
					S08 = X8w.priceFormatter(this, b8w, y18[k8w], j8w.labelDecimalPlaces)
				} else {
					S08 = this.formatYAxisPrice(y18[k8w], b8w, j8w.labelDecimalPlaces)
				}
				r08 = this.yaxisLabelStyle
				if (b8w.yAxis.yaxisLabelStyle) {
					r08 = b8w.yAxis.yaxisLabelStyle
				}
				W08 = r08 == 'noop' ? H8w.strokeStyle : null
				this.yAxisLabels.push({
					src: v39,
					args: [b8w, S08, y18.cache[k8w], r08 == 'noop' ? '#FFFFFF' : H8w.strokeStyle, W08],
				})
			}
			return w08
		}
		P3w.ChartEngine.prototype.plotMountainChart = function(v08, D08, n08, J08) {
			var a08,
				Z08,
				B08,
				U08,
				x08,
				s08,
				A08,
				I08,
				p08,
				Q08,
				F08,
				y08,
				O08,
				L08,
				i08,
				C08,
				G08,
				c08,
				g08,
				E08,
				q08,
				T08,
				e08,
				f59,
				R59,
				K59
			a08 = this
			Z08 = ![]
			B08 = !!0
			U08 = !{}
			f46i.F06(4)
			x08 = f46i.W06('0', 1)
			s08 = []
			if (J08) {
				Z08 = J08.skipProjections
				B08 = J08.skipTransform
				U08 = J08.reverse
				x08 = J08.tension
			}
			A08 = v08.chart
			I08 = this.chart.context
			f46i.K0w()
			p08 = !0
			Q08 = v08.yAxis.top
			F08 = v08.yAxis.bottom
			this.startClip(v08.name)
			I08.beginPath()
			y08 = A08.dataSet.length - A08.scroll
			O08 = null
			L08 = null
			i08 = v08.yAxis
			C08 = +'0'
			G08 = this.layout.candleWidth
			for (var o08 = 0; o08 <= D08.length; o08++) {
				c08 = D08[o08]
				if (!c08) {
					continue
				}
				if (Z08 && c08.projection) {
					break
				}
				if (!B08 && c08.transform) {
					c08 = c08.transform
				}
				g08 = c08.cache
				f46i.F06(0)
				E08 = f46i.H06(o08, y08)
				if (E08 < v08.cacheLeft || E08 > v08.cacheRight || !g08[n08]) {
					if (!c08[n08] && c08[n08] !== 0) {
						continue
					}
					g08[n08] = i08.semiLog
						? a08.pixelFromPrice(c08[n08], v08)
						: (i08.high - c08[n08]) * i08.multiplier + i08.top
				}
				f46i.F06(28)
				var q49 = f46i.H06(17, 188, 11)
				C08 = v08.left + (o08 + 0.5) * G08 + a08.micropixels - q49
				if (o08 == D08.length - 1) {
					if (a08.extendLastTick) {
						f46i.F06(29)
						C08 += f46i.W06(G08, '2', 0)
					}
					if (J08.lastTickOffset) {
						C08 += J08.lastTickOffset
					}
				}
				if (O08 === null) {
					O08 = y08 >= 0 ? 0 : C08
				}
				q08 = g08[n08]
				if (L08 === null) {
					L08 = q08
				}
				if (p08) {
					p08 = !{}
					if (y08 <= 0) {
						I08.moveTo(O08, q08)
						if (x08) {
							s08.push(O08, q08)
						}
					} else {
						T08 = A08.dataSet[y08]
						if (T08.transform) {
							T08 = T08.transform
						}
						e08 = T08[n08]
						e08 = i08.semiLog
							? a08.pixelFromPrice(e08, v08)
							: (i08.high - e08) * i08.multiplier + i08.top
						f46i.F06(1)
						O08 = f46i.W06(G08, C08)
						I08.moveTo(O08, e08)
						if (x08) {
							s08.push(O08, e08, C08, q08)
						} else {
							I08.lineTo(C08, q08)
						}
					}
				} else {
					if (x08) {
						s08.push(C08, q08)
					} else {
						I08.lineTo(C08, q08)
					}
				}
				if (o08 === D08.length - 1 && x08) {
					s08.push(C08, q08)
					S3w(s08, x08, I08)
				}
			}
			f59 = -510359615
			R59 = 1849103386
			K59 = +'2'
			for (var z09 = 1; f46i.C2o(z09.toString(), z09.toString().length, 79653) !== f59; z09++) {
				I08.lineTo(C08, U08 ? Q08 : F08)
				K59 += 2
			}
			if (f46i.C2o(K59.toString(), K59.toString().length, 27940) !== R59) {
				I08.lineTo(C08, U08 ? Q08 : F08)
			}
			I08.lineTo(O08, U08 ? Q08 : F08)
			if (U08) {
				if (L08 < Q08) {
					L08 = Q08
				}
			} else {
				if (L08 > F08) {
					L08 = F08
				}
			}
			I08.lineTo(O08, L08)
			I08.fill()
			I08.closePath()
			this.endClip()
		}
		P3w.ChartEngine.prototype.drawMountainChart = function(u08, R08, P98) {
			var t08,
				M39,
				H08,
				z08,
				h08,
				M08,
				Y08,
				b08,
				j08,
				l08,
				k08,
				X08,
				r98,
				V08,
				p39,
				K08,
				i39,
				J09,
				C09,
				b09
			t08 = this.chart.context
			if (!R08) {
				M39 = 'stx_m'
				M39 += 'ountain_chart'
				R08 = M39
			}
			H08 = this.canvasStyle(R08)
			if (H08.width && parseInt(H08.width, 10) <= 25) {
				f46i.i06(7)
				t08.lineWidth = Math.max(f46i.H06(1022127872, '1'), P3w.stripPX(H08.width))
			} else {
				t08.lineWidth = 1
			}
			z08 = this.pixelFromPrice(u08.chart.highValue, u08)
			if (isNaN(z08)) {
				f46i.i06(1)
				z08 = f46i.W06(0, '0')
			}
			h08 = H08.backgroundColor
			M08 = H08.color
			if (M08 && !P3w.isTransparent(M08)) {
				Y08 = t08.createLinearGradient(0, z08, 0, u08.yAxis.bottom)
				Y08.addColorStop(0, h08)
				f46i.i06(1)
				Y08.addColorStop(f46i.H06(0, '1'), M08)
				t08.fillStyle = Y08
			} else {
				t08.fillStyle = h08
			}
			b08 = { skipProjections: !'' }
			j08 = u08.chart
			l08 = j08.dataSegment
			if (j08.tension) {
				b08.tension = j08.tension
			}
			if (j08.lastTickOffset) {
				b08.lastTickOffset = j08.lastTickOffset
			}
			k08 = parseInt(H08.padding, 10)
			X08 = H08.borderTopColor
			r98 = null
			if (X08 && !P3w.isTransparent(X08)) {
				if (k08 && !P3w.isIE8) {
					V08 = this.scratchContext
					if (!V08) {
						p39 = '2'
						p39 += 'd'
						K08 = t08.canvas.cloneNode(!![])
						V08 = this.scratchContext = K08.getContext(p39)
						V08.canvas = K08
					}
					V08.canvas.height = t08.canvas.height
					V08.canvas.width = t08.canvas.width
					V08.drawImage(t08.canvas, 0, 0)
					t08.clearRect(0, 0, t08.canvas.width, t08.canvas.height)
				}
			}
			this.plotMountainChart(u08, l08, 'Close', b08)
			if (X08 && !P3w.isTransparent(X08)) {
				i39 = 'Cl'
				i39 += 'os'
				i39 += 'e'
				if (k08 && !P3w.isIE8) {
					t08.save()
					f46i.F06(4)
					t08.lineWidth += f46i.H06(2, k08)
					t08.globalCompositeOperation = 'destination-out'
					this.plotLineChart(u08, l08, 'Close', b08)
					t08.globalCompositeOperation = 'destination-over'
					t08.scale(1 / this.adjustedDisplayPixelRatio, +'1' / this.adjustedDisplayPixelRatio)
					t08.drawImage(this.scratchContext.canvas, 0, 0)
					t08.restore()
				}
				J09 = -2105501027
				C09 = -927928954
				b09 = 2
				for (
					var y09 = +'1';
					f46i.C2o(y09.toString(), y09.toString().length, +'40519') !== J09;
					y09++
				) {
					t08.strokeStyle = X08
					b09 += 2
				}
				if (f46i.b2o(b09.toString(), b09.toString().length, 95477) !== C09) {
					t08.strokeStyle = X08
				}
				r98 = this.plotLineChart(u08, l08, i39, b08, P98)
			}
			t08.lineWidth = 1
			f46i.K0w()
			return r98
		}
		P3w[R06][j06][L06] = function(T98, y98) {
			f46i.K79 = function(t79) {
				if (f46i) return f46i.E79(t79)
			}
			f46i.A79 = function(m79) {
				if (f46i && m79) return f46i.v79(m79)
			}
			f46i.G79 = function(I79) {
				if (f46i && I79) return f46i.v79(I79)
			}
			f46i.q79 = function(n79) {
				if (f46i && n79) return f46i.E79(n79)
			}
			var u7h = -(f46i.y79('6fdf') ? 1490656048 : 7890582231),
				P7h = f46i.k79('c891') ? 583158021 : 1426543264,
				l7h = f46i.q79('4711') ? 1671380554 : 9807968754,
				W7h = -(f46i.o79('37f4') ? 316590036 : 954671263),
				X7h = -(f46i.i79('3e8c') ? 70269384 : 15768594),
				Y7h = -(f46i.P79('1cbc') ? 5065794133 : 1222748600)
			if (
				f46i.t7h(f46i.T79('e977') ? 0 : 6, f46i.x79('dc95') ? 716755 : 59860) === u7h ||
				f46i.t7h(f46i.G79('9a8d') ? 3 : 0, f46i.A79('ca95') ? 903367 : 815968) === P7h ||
				f46i.U7h(29, f46i.K79('ea15') ? 519081 : 834747) === l7h ||
				f46i.U7h(f46i.c79('af8e') ? 0 : 8, 313111) === W7h ||
				f46i.U7h(44, f46i.d79('b636') ? 411927 : 767810) === X7h ||
				f46i.U7h(0, 124059) === Y7h
			) {
				f46i.N79 = function(J79) {
					if (f46i && J79) return f46i.v79(J79)
				}
				var f36 = 'reposition'
				var P16 = f46i.N79('6521') ? '' : 'container'
				var k26 = 'grabStartY'
				var Y46 = f46i.l79('f1aa') ? '' : 'runAppend'
				var G36 = 'context'
				var a06 = 2054830576
				var G16 = 'preferences'
				var s16 = 'r3w'
				var j16 = 'overYAxis'
				var q16 = 'backOutY'
				var i26 = 'overlays'
				var w06 = 25
				var e16 = 'clientHeight'
				var y36 = 'repositioningDrawing'
				var A16 = 'devicePixelRatio'
				var P26 = 'lastDraw'
				var V26 = 'zo'
				var v16 = 'valueFromPixel'
				var r36 = 1.1
				var x06 = 100
				var d16 = 'height'
				var J16 = 'undisplayCrosshairs'
				var p36 = '0.5'
				var U16 = 'hasDragged'
				var p26 = 'm'
				var T26 = 'displaySticky'
				var u26 = 'pan'
				var w16 = 'backOutX'
				var r46 = 'resizePanels'
				var Q36 = 'render'
				var k06 = 12
				var Q06 = 83324
				var l26 = 'grabStartX'
				var W26 = 'tempCanvas'
				var j26 = 'grabStartCandleWidth'
				var K36 = 'crossX'
				var B36 = 'measure'
				var x26 = 'grabOverrideClick'
				var v06 = 78862
				var g16 = 'crosshairTick'
				var T36 = 'grabbingPanel'
				var z26 = '-y'
				var W36 = 'setCandleWidth'
				var H16 = 'runPrepend'
				var Y36 = 'ipadMaxTicks'
				var I06 = 1601989689
				var m06 = 18
				var t36 = 'dispatch'
				var Z36 = 'repositioner'
				var f06 = 'isAndroid'
				var l16 = 'crosshairX'
				var Y16 = 'width'
				var M16 = 'cancelLongHold'
				var z16 = 'xAxisAsFooter'
				var R16 = 'xaxisHeight'
				var m36 = 'shift'
				var q36 = 'micropixels'
				var P36 = 'round'
				var M06 = 3
				var R26 = 'maxTicks'
				var K16 = 'crosshairValue'
				var J36 = '93159'
				var d36 = '0.1'
				var V06 = 1435598309
				var F16 = 'top'
				var P46 = 'findHighlights'
				var v36 = 'activeDrawing'
				var K06 = 946885344
				var c36 = 'grabStartZoom'
				var d46 = 'drawingLine'
				var B06 = 364015249
				var o16 = 'canvasHeight'
				var h26 = 'layout'
				var x36 = 'initialWhitespace'
				var X06 = 'canvas'
				var s36 = 'move'
				var k36 = 'microscroll'
				var S26 = 'grabStartScrollX'
				var p16 = '1'
				var E16 = 'left'
				var o06 = 1743869005
				var I36 = 'pixelFromTick'
				var X26 = 'candleWidth'
				var L26 = 'minimumCandleWidth'
				var C36 = '72454'
				var x16 = 'whichPanel'
				var T06 = 1
				var v26 = 'i06'
				var o26 = 'zoom-y'
				var C06 = 30
				var J06 = 'p'
				var d26 = 'userLevel'
				var h36 = 'panelName'
				var b26 = 'clearCanvas'
				var i16 = 'getBoundingClientRect'
				var u06 = 26595
				var X16 = 'repositioningBaseline'
				var M26 = 'currentVectorParameters'
				var H26 = ''
				var B26 = 'C2o'
				var O16 = 'cy'
				var V36 = 'style'
				var r16 = 'floor'
				var t26 = 'allowZoom'
				var e26 = 'draw'
				var G26 = '2'
				var Z06 = 'isIOS7or8'
				var n26 = 'b2o'
				var t16 = 'panel'
				var n36 = 'controls'
				var N26 = 'toString'
				var D16 = 'tickFromPixel'
				var V16 = 'adjustIfNecessary'
				var Y26 = 'anyHighlighted'
				var b16 = 'clientWidth'
				var m26 = 'yAxis'
				var b36 = 'pinchingCenter'
				var E26 = 'series'
				var g36 = 'useAnimation'
				var f26 = 0.1
				var h16 = 'resizingPanel'
				var S16 = 'crosshairY'
				var z06 = 1624353582
				var w36 = '868533625'
				var O06 = 11
				var C26 = 'abs'
				var W16 = 'resizeChart'
				var g26 = 'indexOf'
				var a16 = 'overXAxis'
				var p06 = 1619066755
				var Z16 = 'baseline'
				var O36 = 'grabStartMicropixels'
				var I16 = 'insideChart'
				var Q26 = 'W06'
				var R36 = 'Drawing'
				var C16 = 'currentPanel'
				var j36 = 'dragToDraw'
				var o36 = 'px'
				var z36 = 'crossY'
				var E36 = 'whichYAxis'
				var F26 = 'highlight'
				var g06 = 52779
				var s26 = 'grabMode'
				var c06 = 2
				var y06 = 'x'
				var N16 = 'length'
				var Q16 = 'name'
				var Z26 = 0.9
				var u16 = 'dataSet'
				var y16 = 'displayCrosshairs'
				var D06 = 74900
				var U26 = 'vectorType'
				var q06 = 14
				var n06 = 826172435
				var L16 = 'grabbingScreen'
				var r26 = 'valueFromPixelUntransform'
				var N06 = 715745280
				var e46 = 'magnetize'
				var s06 = 18552
				var l06 = 7
				var m16 = 'cx'
				var D26 = 'zoom'
				var U06 = 5
				var l36 = 'yTolerance'
				var T16 = 'right'
				var w26 = '0'
				var E06 = 0
				var L36 = 'doDisplayCrosshairs'
				var J26 = '2073596385'
				var k16 = 'crossYActualPos'
				var G06 = 233949248
				var K26 = 'zoom-x'
				var A36 = 'ipad'
				var F36 = null
				var t06 = 142
				var u36 = 'updateChartAccessories'
				var S06 = 9
				var e36 = 0.499
				var i36 = 'span'
				var N36 = '72248'
				var h06 = 'chart'
				var U36 = 'allowScroll'
				var a36 = 'setCrosshairColors'
				var O26 = 'scroll'
				var D36 = 'requestAnimationFrame'
				var f16 = 'panels'
				var M36 = 'H06'
				var I26 = 'o'
				var S36 = 'yToleranceBroken'
				var A26 = 'now'
				var c16 = 'bottom'
				var X36 = 'magnetizedPrice'
				var H36 = 'whitespace'
				var y26 = '3001'
				var A46 = 'drawTemporaryPanel'
				var B16 = 'horizontalCrosshairField'
				var n16 = 'pixelFromPriceTransform'
				var a26 = 'F06'
				var q26 = 'grabStartScrollY'
				var c26 = 'magnet'
				var r39,
					O98,
					d98,
					v98,
					n98,
					J98,
					m98,
					i98,
					L98,
					c98,
					f98,
					N98,
					I98,
					q2o,
					T2o,
					X2o,
					x39,
					q98,
					w98,
					D09,
					a09,
					g09,
					o98,
					C98,
					x98,
					e98,
					Q98,
					F98,
					W98,
					j19,
					Z19,
					J19,
					s98,
					g59,
					j59,
					Z59,
					r19,
					o19,
					t19,
					S98
				r39 = J06
				r39 += y06
				O98 = this
				if (!this[h06][X06]) {
					return
				}
				if (!P3w[f06] && !P3w[Z06]) {
					if (
						this[h06][X06][d16] != Math[r16](this[A16] * this[h06][P16][e16]) ||
						this[h06][X06][Y16] != Math[r16](this[A16] * this[h06][P16][b16])
					) {
						this[W16]()
						return
					}
				}
				if (this[H16](L06, arguments)) {
					return
				}
				v98 = this[P16][i16]()
				this[F16] = v98[F16]
				this[E16] = v98[E16]
				this[T16] = this[E16] + this[Y16]
				this[c16] = this[F16] + this[d16]
				this[M16] = !!{}
				this[U16] = !![]
				P3w[R06][l16] = T98
				P3w[R06][S16] = y98
				n98 = this[O16] = this[k16] = this[q16](P3w[R06][S16])
				J98 = this[m16] = this[w16](P3w[R06][l16])
				this[C16] = this[x16](n98)
				if (!this[C16]) {
					this[C16] = this[h06][t16]
				}
				f46i[s16]()
				if (!this[C16]) {
					return
				}
				m98 = this[C16][h06]
				if (m98[u16]) {
					this[g16] = this[D16](J98, m98)
					d98 = this[v16](n98, this[C16])
					i98 = this[C16][Q16] == h06 ? this[G16][B16] : this[C16][B16]
					if (i98 && this[g16] < m98[u16][N16] && this[g16] > -T06) {
						d98 = m98[u16][this[g16]][i98]
						this[k16] = this[n16](d98, this[C16])
					}
					this[K16] = this[V16](this[C16], this[g16], d98)
				}
				if (
					P3w[R06][l16] >= this[E16] &&
					P3w[R06][l16] <= this[T16] &&
					P3w[R06][S16] >= this[F16] &&
					P3w[R06][S16] <= this[c16]
				) {
					P3w[R06][I16] = !!{}
				} else {
					P3w[R06][I16] = !p16
				}
				L98 = this[z16] === !E06 ? this[h06][o16] : this[h06][t16][c16]
				this[a16] =
					P3w[R06][I16] &&
					P3w[R06][S16] <= L98 + this[F16] &&
					P3w[R06][S16] > L98 - this[R16] + this[F16]
				this[j16] = (this[m16] >= this[C16][T16] || this[m16] <= this[C16][E16]) && P3w[R06][I16]
				if (this[a16] || this[j16] || (!P3w[R06][I16] && !this[L16])) {
					this[J16]()
					if (!this[a16] && !this[j16]) {
						return
					}
				}
				if (!this[y16] && !P3w[R06][h16]) {
					this[J16]()
					return
				}
				if (this[X16]) {
					S98 = this[f16][this[h06][t16][Q16]]
					this[h06][Z16][d26] = this[V16](S98, this[g16], this[r26](this[q16](P3w[R06][S16]), S98))
					if (Date[A26]() - this[X16][P26] > x06) {
						this[e26]()
						this[X16][P26] = Date[A26]()
					}
					return
				}
				if (this[L16] && !P3w[R06][h16]) {
					if (this[Y26]) {
						P3w[b26](this[h06][W26], this)
						this[Y26] = !!H26
						for (c98 in O98[i26]) {
							O98[i26][c98][F26] = !!E06
						}
						for (c98 in m98[E26]) {
							m98[E26][c98][F26] = ![]
						}
						this[T26]()
					}
					if (this[G16][c26] && this[M26][U26]) {
						P3w[b26](this[h06][W26], this)
					}
					if (this[l26] == -T06) {
						this[l26] = P3w[R06][l16]
						this[S26] = m98[O26]
					}
					if (this[k26] == -T06) {
						this[k26] = P3w[R06][S16]
						this[q26] = m98[t16][m26][O26]
					}
					f98 = P3w[R06][l16] - this[l26]
					N98 = P3w[R06][S16] - this[k26]
					if (f98 === +w26 && N98 === E06) {
						return
					}
					if (Math[C26](f98) + Math[C26](N98) > U06) {
						this[x26] = !!p16
					}
					if (
						this[t26] &&
						this[s26] != u26 &&
						(this[s26][g26](D26) === E06 || this[a16] || this[j16])
					) {
						if (this[s26] === H26) {
							if (this[a16]) {
								q2o = -B06
								T2o = o06
								f46i[v26](m06)
								X2o = f46i[Q26](G26, E06)
								for (var U2o = T06; f46i[B26](U2o[N26](), U2o[N26]()[N16], s06) !== q2o; U2o++) {
									this[s26] = H26
									X2o += c06
								}
								if (f46i[n26](X2o[N26](), X2o[N26]()[N16], Q06) !== T2o) {
									this[s26] = H26
								}
								this[s26] = K26
							} else if (this[j16]) {
								x39 = V26
								x39 += I26
								x39 += p26
								x39 += z26
								this[s26] = x39
							}
						}
						if (this[s26] == K26) {
							N98 = E06
						} else if (this[s26] == o26) {
							f98 = E06
						}
						f46i[a26](U06)
						I98 = f46i[Q26](f98, w06)
						q98 = !E06
						if (m98[O26] <= m98[R26]) {
							q98 = !{}
						}
						w98 = this[j26] + I98
						if (w98 < this[L26]) {
							D09 = -+J26
							a09 = n06
							g09 = +G26
							for (var Z09 = T06; f46i[B26](Z09[N26](), Z09[N26]()[N16], D06) !== D09; Z09++) {
								w98 = this[L26]
								g09 += c06
							}
							if (f46i[B26](g09[N26](), g09[N26]()[N16], y26 * T06) !== a09) {
								w98 = this[L26]
							}
						}
						o98 = (this[h26][X26] - w98) / this[h26][X26]
						if (o98 > f26) {
							w98 = this[h26][X26] * Z26
						} else if (o98 < -+d36) {
							w98 = this[h26][X26] * r36
						}
						if (I98) {
							if (P3w[A36]) {
								if (
									Math[P36](this[h06][Y16] / this[h26][X26] - e36) - T06 < P3w[R06][Y36] &&
									Math[P36](this[h06][Y16] / w98 - e36) - T06 > P3w[R06][Y36]
								) {
									return
								}
							}
							if (this[b36]) {
								x98 = this[w16](this[b36])
								e98 = this[D16](x98, m98)
								this[W36](w98, m98)
								Q98 = this[D16](x98, m98)
								f46i[v26](T06)
								m98[O26] += Math[r16](f46i[Q26](e98, Q98))
							} else if (q98) {
								C98 = Math[P36](this[h06][Y16] / w98 + T06)
								if (C98 != m98[R26]) {
									m98[O26] += Math[P36]((C98 - m98[R26]) / +G26)
									this[W36](w98, m98)
								}
							} else {
								C98 = Math[P36](this[h06][Y16] / w98 + T06)
								if (C98 != Math[P36](this[h06][Y16] / this[h26][X26] + T06)) {
									F98 = Math[P36](this[G16][H36] / w98)
									m98[O26] = m98[R26] - F98
									this[W36](w98, m98)
								}
							}
						}
						this[h26][i36] = F36
						W98 = this[E36](this[T36], this[m16])
						if (this[j16]) {
							W98[D26] = Math[P36](this[c36] + N98)
							if (this[c36] < W98[d16]) {
								if (W98[D26] >= W98[d16]) {
									W98[D26] = W98[d16] - +p16
								}
							} else {
								if (W98[D26] <= W98[d16]) {
									f46i[a26](U06)
									var y49 = f46i[M36](O06, O06)
									W98[D26] = W98[d16] + y49
								}
							}
						}
					} else {
						if (this[U36]) {
							if (Math[C26](N98) < this[l36]) {
								if (!this[S36]) {
									N98 = E06
									if (f98 === +w26) {
										return
									}
								}
							} else {
								this[S36] = !!p16
							}
							if (!this[O36]) {
								this[O36] = +w26
							}
							this[s26] = u26
							I98 = Math[P36](f98 / this[h26][X26])
							this[k36] = I98 - f98 / this[h26][X26]
							f46i[v26](C06)
							var T49 = f46i[Q26](t06, q06, O06, k06)
							this[q36] = this[h26][X26] * this[k36] * T49 + this[O36]
							if (this[m36]) {
								j19 = -a06
								f46i[a26](l06)
								Z19 = f46i[Q26](K06, w36)
								J19 = c06
								for (var b19 = +p16; f46i[n26](b19[N26](), b19[N26]()[N16], +C36) !== j19; b19++) {
									I98 /= S06
									J19 += c06
								}
								if (f46i[B26](J19[N26](), J19[N26]()[N16], u06) !== Z19) {
									I98 *= U06
								}
							}
							m98[O26] = this[S26] + I98
							if (m98[O26] < p16 >> G06) {
								m98[O26] = T06
							}
							if (m98[O26] >= m98[R26]) {
								this[G16][H36] = this[x36]
							} else {
								this[G16][H36] = (m98[R26] - m98[O26]) * this[h26][X26]
							}
							if (this[C16][Q16] == m98[Q16]) {
								this[h06][t16][m26][O26] = this[q26] + N98
							}
						}
						this[t36](s36, {
							stx: this,
							panel: this[C16],
							x: this[m16],
							y: this[O16],
							grab: this[L16],
						})
					}
					s98 = function(U98) {
						var Z7h = -1390582451,
							O8h = 1195476038,
							L8h = -402128362,
							I8h = -307655434,
							z8h = -54329944,
							e8h = -1804520669
						if (
							f46i.t7h(0, 206943) === Z7h ||
							f46i.t7h(0, 431481) === O8h ||
							f46i.t7h(29, 997198) === L8h ||
							f46i.t7h(0, 771744) === I8h ||
							f46i.t7h(44, 947143) === z8h ||
							f46i.U7h(0, 724149) === e8h
						) {
							return function() {
								var f8h = -599800243,
									T8h = -1979665636,
									h8h = 535052014,
									C8h = 1268132398,
									x8h = 1487826070,
									c8h = 421727122
								if (
									!(
										f46i.U7h(0, 444602) !== f8h &&
										f46i.U7h(0, 728619) !== T8h &&
										f46i.U7h(29, 522316) !== h8h &&
										f46i.t7h(0, 874188) !== C8h &&
										f46i.t7h(44, 145095) !== x8h &&
										f46i.t7h(0, 401936) !== c8h
									)
								) {
									U98[e26]()
									U98[u36]()
								}
							}
						}
					}
					if (P3w[R06][g36]) {
						window[D36](s98(this))
					} else {
						this[e26]()
						this[u36]()
					}
					if (this[v36]) {
						P3w[b26](this[h06][W26], this)
						this[v36][Q36](this[h06][W26][G36])
						this[v36][B36]()
					}
					g59 = I06
					j59 = -z06
					Z59 = c06
					for (var C59 = T06; f46i[B26](C59[N26](), C59[N26]()[N16], g06) !== g59; C59++) {
						this[J16]()
						f46i[v26](M06)
						Z59 += f46i[M36](G26, c06)
					}
					if (f46i[n26](Z59[N26](), Z59[N26]()[N16], +N36) !== j59) {
						this[J16]()
					}
					return
				} else {
					this[s26] = H26
				}
				this[T36] = this[C16]
				if (this[a16] || this[j16]) {
					return
				}
				this[n36][K36][V36][E16] = this[I36](this[g16], m98) - +p36 + r39
				this[n36][z36][V36][F16] = this[k16] + o36
				this[a36]()
				if (P3w[R06][I16] && !P3w[R06][h16]) {
					if (!P3w[R36] || !P3w[R36][this[M26][U26]] || !new P3w[R36][this[M26][U26]]()[j36]) {
						this[L36]()
					}
					r19 = -p06
					o19 = V06
					t19 = c06
					for (var E19 = T06; f46i[B26](E19[N26](), E19[N26]()[N16], v06) !== r19; E19++) {
						this[u36]()
						t19 += c06
					}
					if (f46i[n26](t19[N26](), t19[N26]()[N16], J36 >> N06) !== o19) {
						this[u36]()
					}
					this[u36]()
				} else {
					this[J16]()
				}
				if (this[y36]) {
					S98 = this[f16][this[y36][h36]]
					d98 = this[V16](S98, this[g16], this[r26](this[q16](P3w[R06][S16]), S98))
					if (this[G16][c26] && this[X36] && S98[Q16] == S98[h06][Q16]) {
						d98 = this[V16](S98, this[g16], this[X36])
					}
					P3w[b26](this[h06][W26], this)
					this[y36][f36](this[h06][W26][G36], this[y36][Z36], this[g16], d98)
					if (this[y36][B36]) {
						this[y36][B36]()
					}
				} else if (P3w[R06][d46]) {
					if (this[v36]) {
						S98 = this[f16][this[v36][h36]]
						d98 = this[V16](S98, this[g16], this[r26](this[q16](P3w[R06][S16]), S98))
						if (this[G16][c26] && this[X36] && S98[Q16] == S98[h06][Q16]) {
							d98 = this[V16](S98, this[g16], this[X36])
						}
						P3w[b26](this[h06][W26], this)
						this[v36][s36](this[h06][W26][G36], this[g16], d98)
						if (this[v36][B36]) {
							this[v36][B36]()
						}
					}
				} else if (P3w[R06][h16]) {
					this[r46]()
					this[A46]()
				}
				if (P3w[R06][I16]) {
					this[t36](s36, {
						stx: this,
						panel: this[C16],
						x: this[m16],
						y: this[O16],
						grab: this[L16],
					})
					this[P46]()
				}
				if (this[G16][c26] && this[M26][U26]) {
					if (!P3w[R06][d46] && !this[Y26]) {
						P3w[b26](this[h06][W26])
					}
					this[e46]()
				}
				this[Y46](L06, arguments)
			}
		}
		P3w.ChartEngine.prototype.plotLine = function(D98, j98, g98, A98, p98, k98, a98, t98, B98) {
			var E39,
				u39,
				t39,
				o39,
				h98,
				P58,
				l98,
				z98,
				n09,
				f09,
				R09,
				V98,
				m58,
				G98,
				C58,
				c58,
				X98,
				M98,
				Y98,
				R98,
				Z98,
				b98,
				u98,
				W58,
				f58,
				d58,
				K98,
				h19,
				O19,
				Y19,
				u69,
				E69,
				P69,
				E98,
				N39,
				P39
			E39 = 'zi'
			E39 += 'g z'
			E39 += 'ag'
			u39 = 'ob'
			u39 += 'j'
			u39 += 'ect'
			t39 = 'hor'
			t39 += 'izontal'
			o39 = 'r'
			o39 += 'a'
			o39 += 'y'
			if (!B98) {
				B98 = {}
			}
			if (B98.pattern == 'none') {
				return
			}
			if (t98 === !'') {
				t98 = this.chart.panel
			}
			if (a98 === null || typeof a98 == 'undefined') {
				a98 = this.chart.context
			}
			if (isNaN(D98) || isNaN(j98) || isNaN(g98) || isNaN(A98)) {
				return
			}
			h98 = 0
			P58 = this.chart.canvasHeight
			l98 = +'0'
			z98 = this.right
			if (t98) {
				P58 = t98.yAxis.bottom
				h98 = t98.yAxis.top
				l98 = t98.left
				n09 = 1205596573
				f09 = -248430279
				R09 = 2
				for (var K09 = 1; f46i.b2o(K09.toString(), K09.toString().length, 24329) !== n09; K09++) {
					z98 = t98.right
					R09 += 2
				}
				if (f46i.b2o(R09.toString(), R09.toString().length, 64913) !== f09) {
					z98 = t98.right
				}
			}
			if (k98 == o39) {
				V98 = 10000000
				if (j98 < D98) {
					V98 = -10000000
				}
				G98 = { x0: D98, x1: j98, y0: g98, y1: A98 }
				m58 = P3w.yIntersection(G98, V98)
				j98 = V98
				A98 = m58
			}
			if (k98 == 'line' || k98 == t39 || k98 == 'vertical') {
				V98 = 10000000
				C58 = -10000000
				G98 = { x0: D98, x1: j98, y0: g98, y1: A98 }
				m58 = P3w.yIntersection(G98, V98)
				c58 = P3w.yIntersection(G98, C58)
				D98 = C58
				j98 = V98
				g98 = c58
				A98 = m58
			}
			X98 = 0.0
			M98 = 1.0
			f46i.i06(1)
			Y98 = f46i.H06(D98, j98)
			f46i.i06(1)
			R98 = f46i.H06(g98, A98)
			for (var H98 = 0; H98 < 4; H98++) {
				if (H98 === 0) {
					Z98 = -Y98
					f46i.i06(1)
					b98 = -f46i.H06(D98, l98)
				}
				if (H98 == 1) {
					Z98 = Y98
					f46i.i06(1)
					b98 = f46i.H06(D98, z98)
				}
				if (H98 == 2) {
					Z98 = -R98
					f46i.F06(1)
					b98 = -f46i.W06(g98, h98)
				}
				if (H98 == +'3') {
					Z98 = R98
					f46i.i06(1)
					b98 = f46i.H06(g98, P58)
				}
				f46i.F06(5)
				u98 = f46i.W06(b98, Z98)
				if ((A98 || A98 === 0) && Z98 === 0 && b98 < 0) {
					return !{}
				}
				if (Z98 < 0) {
					if (u98 > M98) {
						return ![]
					} else if (u98 > X98) {
						X98 = u98
					}
				} else if (Z98 > 0) {
					if (u98 < X98) {
						return !!''
					} else if (u98 < M98) {
						M98 = u98
					}
				}
			}
			f46i.F06(13)
			W58 = f46i.H06(X98, D98, Y98)
			f46i.F06(13)
			f58 = f46i.H06(X98, g98, R98)
			f46i.i06(13)
			d58 = f46i.H06(M98, D98, Y98)
			f46i.F06(13)
			K98 = f46i.H06(M98, g98, R98)
			if (!A98 && A98 !== 0 && !g98 && g98 !== 0) {
				f58 = h98
				K98 = P58
				W58 = G98.x0
				d58 = G98.x0
				if (G98.x0 > z98) {
					return ![]
				}
				if (G98.x0 < l98) {
					return !1
				}
			} else if (!A98 && A98 !== 0) {
				if (G98.y0 < G98.y1) {
					K98 = P58
				} else {
					K98 = h98
				}
				W58 = G98.x0
				d58 = G98.x0
				if (G98.x0 > z98) {
					return !!0
				}
				if (G98.x0 < l98) {
					return ![]
				}
			}
			a98.lineWidth = 1.1
			if (typeof p98 == u39) {
				h19 = 1335700624
				O19 = -571561265
				Y19 = 2
				for (
					var F19 = 1;
					f46i.C2o(F19.toString(), F19.toString().length, +'23767') !== h19;
					F19++
				) {
					a98.strokeStyle = p98.color
					Y19 += 2
				}
				if (f46i.b2o(Y19.toString(), Y19.toString().length, '99377' ^ 0) !== O19) {
					a98.strokeStyle = p98.color
				}
				a98.strokeStyle = p98.color
				if (p98.opacity) {
					u69 = 1731464891
					E69 = 980471073
					P69 = 2
					for (
						var e69 = '1' * 1;
						f46i.C2o(e69.toString(), e69.toString().length, +'75155') !== u69;
						e69++
					) {
						a98.globalAlpha = p98.opacity
						P69 += 2
					}
					if (f46i.b2o(P69.toString(), P69.toString().length, 99488) !== E69) {
						a98.globalAlpha = p98.opacity
					}
				} else {
					a98.globalAlpha = 1
				}
				a98.lineWidth = parseInt(P3w.stripPX(p98.width))
			} else {
				if (!p98 || p98 == 'auto' || P3w.isTransparent(p98)) {
					a98.strokeStyle = this.defaultColor
				} else {
					a98.strokeStyle = p98
				}
			}
			if (B98.opacity) {
				a98.globalAlpha = B98.opacity
			}
			f46i.r3w()
			if (B98.lineWidth) {
				a98.lineWidth = B98.lineWidth
			}
			if (k98 == E39) {
				a98.lineWidth = 5
			}
			E98 = null
			if (B98.pattern) {
				N39 = 'd'
				N39 += 'a'
				N39 += 'sh'
				N39 += 'ed'
				P39 = 'd'
				P39 += 'ot'
				P39 += 'te'
				P39 += 'd'
				E98 = B98.pattern
				if (E98 == 'solid') {
					E98 = null
				} else if (E98 == P39) {
					E98 = [a98.lineWidth, a98.lineWidth]
				} else if (E98 == N39) {
					f46i.F06(12)
					var X49 = f46i.W06(17, 3, 19)
					E98 = [a98.lineWidth * 5, a98.lineWidth * X49]
				}
			}
			a98.stxLine(W58, f58, d58, K98, a98.strokeStyle, a98.globalAlpha, a98.lineWidth, E98)
			a98.globalAlpha = 1
			a98.lineWidth = 1
		}
		P3w.ChartEngine.prototype.rendererAction = function(e58, Q58) {
			var e39, O58, A39, q58, x58, s58
			e39 = 'rendererAct'
			e39 += 'io'
			e39 += 'n'
			O58 = this
			if (this.runPrepend(e39, arguments)) {
				return
			}
			f46i.K0w()
			for (var F58 in e58.seriesRenderers) {
				A39 = 'y'
				A39 += 'a'
				A39 += 'x'
				A39 += 'is'
				q58 = e58.seriesRenderers[F58]
				x58 = q58.params
				s58 = x58.panel
				if (x58.overChart && Q58 == 'underlay') {
					continue
				}
				if (!x58.overChart && Q58 == 'overlay') {
					continue
				}
				if (!O58.panels[s58]) {
					continue
				}
				if (O58.panels[s58].chart !== e58) {
					continue
				}
				if (Q58 == 'calculate') {
					q58.performCalculations()
				} else if (Q58 == A39) {
					if (x58.yAxis && s58 != e58.panel.name) {
						O58.createYAxis(O58.panels[s58], x58)
						O58.drawYAxis(O58.panels[s58], x58)
					}
				} else {
					q58.draw()
					if (q58.cb) {
						q58.cb(q58.colors)
					}
				}
			}
			this.runAppend('rendererAction', arguments)
		}
		P3w.ChartEngine.prototype.drawSeries = function(k58, n6Q, L6Q) {
			var p58,
				r6Q,
				e6Q,
				X58,
				V69,
				w69,
				h69,
				l39,
				c39,
				y58,
				V58,
				Y58,
				c6Q,
				Q6Q,
				q6Q,
				m6Q,
				Z58,
				F6Q,
				I6Q,
				N6Q,
				J6Q,
				w6Q,
				Z2Q,
				d6Q,
				T58,
				G58,
				O6Q,
				y6Q,
				j58,
				v6Q,
				z58,
				P6Q,
				f2Q,
				X2Q,
				W6Q,
				A58,
				B58,
				s6Q,
				o6Q,
				h58,
				x6Q,
				R58,
				d39,
				B39,
				s39,
				G39,
				G6Q,
				a6Q,
				U6Q,
				T6Q,
				C6Q,
				M58,
				m39,
				I39,
				D39,
				a39,
				g39,
				j39,
				Z39,
				J39,
				C39,
				i6Q
			p58 = this
			if (this.runPrepend('drawSeries', arguments)) {
				return
			}
			r6Q = k58.dataSegment
			e6Q = {}
			X58 = null
			f46i.K0w()
			if (!n6Q) {
				f46i.F06(21)
				V69 = -f46i.H06(2147483647, '971830873')
				w69 = -2102450450
				h69 = 2
				for (
					var Y69 = '1' - 0;
					f46i.C2o(Y69.toString(), Y69.toString().length, 13816) !== V69;
					Y69++
				) {
					n6Q = k58.series
					h69 += 2
				}
				if (f46i.C2o(h69.toString(), h69.toString().length, 12283) !== w69) {
					n6Q = k58.series
				}
				n6Q = k58.series
			}
			for (var K58 in n6Q) {
				l39 = 'strok'
				l39 += 'e'
				c39 = 's'
				c39 += 't'
				c39 += 'e'
				c39 += 'p'
				X58 = n6Q[K58]
				y58 = X58.parameters
				if (!y58.chartType) {
					continue
				}
				V58 = k58.panel
				if (y58.panel) {
					V58 = p58.panels[y58.panel]
				}
				if (!V58) {
					continue
				}
				Y58 = L6Q ? L6Q : V58.yAxis
				c6Q = [y58.minimum, y58.maximum]
				if ((!y58.minimum && y58.minimum !== 0) || (!y58.maximum && y58.maximum !== 0)) {
					Q6Q = P3w.minMax(r6Q, K58)
					if (!y58.minimum && y58.minimum !== 0) {
						c6Q[+'0'] = Q6Q[0]
					}
					if (!y58.maximum && y58.maximum !== 0) {
						c6Q[1] = Q6Q[1]
					}
				}
				q6Q = c6Q[0]
				m6Q = Y58.top
				Z58 = Y58.bottom
				f46i.F06(1)
				F6Q = f46i.W06(m6Q, Z58)
				I6Q = y58.marginTop
				N6Q = y58.marginBottom
				if (I6Q) {
					m6Q = I6Q > 1 ? m6Q + I6Q : m6Q + F6Q * I6Q
				}
				if (N6Q) {
					Z58 = N6Q > 1 ? Z58 - N6Q : Z58 - F6Q * N6Q
				}
				J6Q = (Z58 - m6Q) / (c6Q[1] - q6Q)
				w6Q = !{}
				Z2Q = null
				d6Q = null
				T58 = null
				G58 = null
				O6Q = null
				y6Q = null
				j58 = p58.layout.candleWidth
				v6Q = p58.chart.context
				z58 = y58.type == 'step' || y58.subtype == c39
				P6Q = y58.color
				if (!P6Q) {
					P6Q = p58.defaultColor
				}
				f2Q = y58.width
				if (!f2Q || isNaN(f2Q) || f2Q < 1) {
					f2Q = +'1'
				}
				if (X58.highlight || X58.parameters.highlight) {
					f2Q *= 2
				}
				p58.startClip(V58.name)
				seriesPlotter = new P3w.Plotter()
				seriesPlotter.newSeries('line', l39, P6Q, 1, f2Q)
				if (y58.gaps && y58.gaps.color) {
					seriesPlotter.newSeries('gap', 'stroke', y58.gaps.color, 1, f2Q)
				} else {
					seriesPlotter.newSeries('gap', 'stroke', P6Q, 1, f2Q)
				}
				X58.yValueCache = new Array(r6Q.length)
				X2Q = X58.yValueCache
				W6Q = null
				A58 = null
				B58 = []
				s6Q = X58.parameters.shareYAxis && !L6Q
				o6Q = X58.parameters.shareYAxis || L6Q
				h58 = V58.left - (z58 ? 1 : 0.5) * j58 + p58.micropixels - +'1'
				x6Q = h58
				for (var u58 = 0; u58 < r6Q.length; u58++) {
					f46i.F06(5)
					h58 += f46i.H06(j58, 2)
					if (z58) {
						f46i.i06(5)
						h58 += f46i.H06(j58, 2)
					}
					j58 = p58.layout.candleWidth
					if (!z58) {
						f46i.F06(5)
						h58 += f46i.H06(j58, 2)
					}
					if (T58 !== null && G58 !== null) {
						if (!A58 || y58.gaps) {
							B58.push([T58, G58])
						}
					}
					R58 = r6Q[u58]
					if (!R58) {
						continue
					}
					if (R58.candleWidth) {
						if (!z58) {
							h58 += (R58.candleWidth - j58) / 2
						}
						j58 = R58.candleWidth
					}
					if (R58.transform && s6Q) {
						R58 = R58.transform
					}
					d6Q = R58[K58]
					if (!d6Q && d6Q !== 0) {
						if (z58 || y58.gaps) {
							X2Q[u58] = G58
						}
						if (A58 === !!0) {
							d39 = 'g'
							d39 += 'a'
							d39 += 'p'
							if (z58) {
								B39 = 'l'
								B39 += 'i'
								B39 += 'ne'
								T58 += j58
								seriesPlotter.lineTo(B39, T58, G58)
							}
							seriesPlotter.moveTo(d39, T58, G58)
						}
						A58 = !!{}
						if (T58 && !y58.gaps) {
							B58.push([T58, Z58])
						}
						continue
					}
					if (!z58 && Z2Q && Z2Q != u58 - 1) {
						O6Q = T58
						y6Q = G58
					} else {
						O6Q = null
					}
					T58 = h58
					if (T58 <= V58.right) {
						W6Q = R58
					}
					if (p58.extendLastTick && u58 == r6Q.length - 1) {
						f46i.F06(5)
						T58 += f46i.H06(j58, 2)
					}
					if (z58 && w6Q) {
						if (A58 && y58.gaps && y58.gaps.pattern) {
							seriesPlotter.dashedLineTo('gap', T58, G58, y58.gaps.pattern)
						} else if (A58 && !y58.gaps) {
							B58.push([T58, Z58])
							seriesPlotter.moveTo('gap', T58, G58)
						} else if (!A58 && y58.pattern) {
							s39 = 'lin'
							s39 += 'e'
							seriesPlotter.dashedLineTo(s39, T58, G58, y58.pattern)
						} else {
							G39 = 'g'
							G39 += 'a'
							G39 += 'p'
							seriesPlotter.lineTo(A58 ? G39 : 'line', T58, G58)
						}
						B58.push([T58, G58])
					}
					if (o6Q) {
						G58 = p58.pixelFromPrice(d6Q, V58, Y58)
					} else {
						f46i.i06(31)
						G58 = f46i.W06(Z58, J6Q, q6Q, d6Q)
					}
					if (O6Q !== null) {
						G6Q = { x0: O6Q, x1: T58, y0: y6Q, y1: G58 }
						for (; Z2Q != u58; Z2Q++) {
							f46i.F06(32)
							var n49 = f46i.H06(11, 23, 19, 7)
							a6Q = V58.left + Math.floor(h58 + (Z2Q - u58 + 0.5) * j58) + p58.micropixels - n49
							U6Q = P3w.yIntersection(G6Q, a6Q)
							X2Q[Z2Q] = U6Q
						}
					}
					X2Q[u58] = G58
					if (u58 && B58.length && w6Q && !X2Q[u58 - 1] && X2Q[u58 - 1] !== 0) {
						for (var f6Q = u58 - 1; f6Q >= 0; f6Q--) {
							if (X2Q[f6Q]) {
								break
							}
							f46i.F06(12)
							var f49 = f46i.H06(19, 4, 16)
							X2Q[f6Q] = B58[B58.length - f49][+'1']
						}
					}
					if (!w6Q) {
						w6Q = !!{}
						T6Q = k58.dataSet.length - k58.scroll
						if (T6Q <= 0) {
							seriesPlotter.moveTo(A58 ? 'gap' : 'line', T58, G58)
						} else {
							C6Q = k58.dataSet[T6Q]
							if (C6Q.transform && s6Q) {
								C6Q = C6Q.transform
							}
							M58 = C6Q[K58]
							if (o6Q) {
								M58 = p58.pixelFromPrice(M58, V58, Y58)
							} else {
								f46i.i06(31)
								M58 = f46i.W06(Z58, J6Q, q6Q, M58)
							}
							M58 = Math.min(Math.max(M58, m6Q), Z58)
							if (isNaN(M58)) {
								m39 = 'lin'
								m39 += 'e'
								I39 = 'g'
								I39 += 'a'
								I39 += 'p'
								seriesPlotter.moveTo(A58 ? I39 : m39, T58, G58)
							} else {
								D39 = 'l'
								D39 += 'i'
								D39 += 'n'
								D39 += 'e'
								seriesPlotter.moveTo(A58 ? 'gap' : D39, x6Q, M58)
								if (z58) {
									if (A58) {
										if (y58.gaps) {
											seriesPlotter.lineTo('gap', T58, M58)
										} else {
											seriesPlotter.moveTo('gap', T58, M58)
										}
									} else {
										seriesPlotter.lineTo('line', T58, M58)
									}
								}
								if (!A58 || y58.gaps) {
									if (z58) {
										B58.unshift([T58, M58])
									}
									B58.unshift([x6Q, M58])
								}
								if (A58 && y58.gaps && y58.gaps.pattern) {
									seriesPlotter.dashedLineTo('gap', T58, G58, y58.gaps.pattern)
								} else if (A58 && !y58.gaps) {
									B58.unshift([T58, Z58])
									B58.unshift([x6Q, Z58])
									seriesPlotter.moveTo('gap', T58, G58)
								} else if (!A58 && y58.pattern) {
									a39 = 'l'
									a39 += 'i'
									a39 += 'n'
									a39 += 'e'
									seriesPlotter.dashedLineTo(a39, T58, G58, y58.pattern)
								} else {
									seriesPlotter.lineTo(A58 ? 'gap' : 'line', T58, G58)
								}
							}
						}
					} else {
						if (A58 && y58.gaps && y58.gaps.pattern) {
							seriesPlotter.dashedLineTo('gap', T58, G58, y58.gaps.pattern)
						} else if (A58 && !y58.gaps) {
							B58.push([T58, Z58])
							seriesPlotter.moveTo('gap', T58, G58)
						} else if (!A58 && y58.pattern) {
							g39 = 'l'
							g39 += 'in'
							g39 += 'e'
							seriesPlotter.dashedLineTo(g39, T58, G58, y58.pattern)
							if (z58 && u58 == r6Q.length - 1) {
								f46i.i06(0)
								seriesPlotter.dashedLineTo('line', f46i.H06(j58, T58), G58, y58.pattern)
							}
						} else {
							seriesPlotter.lineTo(A58 ? 'gap' : 'line', T58, G58)
							if (z58 && u58 == r6Q.length - 1 && !A58) {
								f46i.i06(0)
								seriesPlotter.lineTo('line', f46i.H06(j58, T58), G58)
							}
						}
					}
					Z2Q = u58
					if (A58) {
						j39 = 'l'
						j39 += 'ine'
						seriesPlotter.moveTo(j39, T58, G58)
					}
					A58 = !1
				}
				if (A58) {
					f46i.F06(2)
					var R49 = f46i.W06(7, 126, 18)
					T58 = V58.left + Math.floor(h58 + j58 + p58.micropixels) - R49
					if (p58.extendLastTick) {
						f46i.i06(5)
						T58 += f46i.W06(j58, 2)
					}
					if (y58.gaps && y58.gaps.pattern) {
						if (w6Q) {
							Z39 = 'g'
							Z39 += 'a'
							Z39 += 'p'
							seriesPlotter.dashedLineTo(Z39, T58, G58, y58.gaps.pattern)
						}
					} else if (y58.gaps) {
						seriesPlotter.lineTo('gap', T58, G58)
					}
				}
				if (X58.parameters.chartType == 'mountain' && B58.length) {
					J39 = 'mountai'
					J39 += 'n'
					B58.push([T58, A58 && !y58.gaps ? Z58 : G58])
					if (!y58.fillStyle) {
						y58.fillStyle = P6Q
						if (!y58.fillOpacity) {
							y58.fillOpacity = +'0.3'
						}
					}
					seriesPlotter.newSeries(J39, 'fill', y58.fillStyle, y58.fillOpacity)
					for (var S6Q = 0; S6Q < B58.length; S6Q++) {
						C39 = 'lin'
						C39 += 'e'
						C39 += 'T'
						C39 += 'o'
						seriesPlotter[S6Q ? C39 : 'moveTo']('mountain', B58[S6Q][0], Math.min(Z58, B58[S6Q][1]))
					}
					seriesPlotter.lineTo('mountain', T58, Z58)
					seriesPlotter.lineTo('mountain', B58[0][+'0'], Z58)
					seriesPlotter.draw(v6Q, 'mountain')
				}
				seriesPlotter.draw(v6Q, 'gap')
				seriesPlotter.draw(v6Q, 'line')
				p58.endClip()
				if (o6Q && W6Q) {
					if (Y58.priceFormatter) {
						txt = Y58.priceFormatter(p58, V58, W6Q[K58], Y58)
					} else {
						txt = p58.formatYAxisPrice(W6Q[K58], V58, null, Y58)
					}
					p58.yAxisLabels.push({
						src: 'series',
						args: [V58, txt, p58.pixelFromPrice(W6Q[K58], V58, Y58), P6Q, null, null, Y58],
					})
				}
				i6Q = X58.parameters.display
				if (!i6Q) {
					i6Q = X58.display
				}
				e6Q[K58] = { color: P6Q, display: i6Q }
			}
			if (k58.legend && X58 && X58.useChartLegend) {
				if (k58.legendRenderer) {
					k58.legendRenderer(this, {
						chart: k58,
						legendColorMap: e6Q,
						coordinates: { x: k58.legend.x, y: k58.legend.y + k58.panel.yAxis.top },
					})
				}
			}
			this.runAppend('drawSeries', arguments)
		}
		P3w.ChartEngine.prototype.consolidatedQuote = function(D6Q, B6Q, Z6Q, t6Q, z6Q, H6Q, b6Q) {
			var y39, q39, b39, E6Q, P19, N19, e19, j6Q, q59, T59, X59, p6Q, A6Q, g6Q, V6Q
			y39 = 'consolid'
			y39 += 'at'
			y39 += 'edQuote'
			q39 = 't'
			q39 += 'i'
			q39 += 'c'
			function u6Q(R6Q, h6Q) {
				var l6Q, k6Q
				l6Q = D6Q[h6Q]
				k6Q = 1
				if (R6Q.layout.adj && l6Q.Adj_Close) {
					k6Q = l6Q.Adj_Close / l6Q.Close
				}
				if ('High' in l6Q) {
					if (l6Q.High * k6Q > p6Q.High) {
						p6Q.High = l6Q.High * k6Q
					}
				}
				if ('Low' in l6Q) {
					if (l6Q.Low * k6Q < p6Q.Low) {
						p6Q.Low = l6Q.Low * k6Q
					}
				}
				p6Q.Volume += l6Q.Volume
				if ('Close' in l6Q && l6Q.Close !== null) {
					p6Q.Close = l6Q.Close * k6Q
				}
				p6Q.ratio = k6Q
				for (var Y6Q in l6Q) {
					if (!p6Q[Y6Q]) {
						p6Q[Y6Q] = l6Q[Y6Q]
					}
				}
			}
			q39 += 'k'
			b39 = 'consol'
			b39 += 'idate'
			b39 += 'dQuote'
			f46i.K0w()
			E6Q = this
			if (B6Q < 0) {
				P19 = 2056508028
				f46i.F06(3)
				N19 = -f46i.H06('956239180', 403965964)
				e19 = +'2'
				for (var c19 = 1; f46i.b2o(c19.toString(), c19.toString().length, 91990) !== P19; c19++) {
					return null
				}
				if (f46i.b2o(e19.toString(), e19.toString().length, 50232) !== N19) {
					return 1
				}
			}
			j6Q = [D6Q, B6Q, Z6Q, t6Q, H6Q, b6Q]
			if (this.runPrepend(b39, j6Q)) {
				return null
			}
			if (!H6Q && this.dontRoll) {
				q59 = 287053117
				T59 = -563010200
				X59 = 2
				for (
					var n59 = 1;
					f46i.C2o(n59.toString(), n59.toString().length, '43754' << 194786144) !== q59;
					n59++
				) {
					H6Q = !{}
					X59 += 2
				}
				if (f46i.C2o(X59.toString(), X59.toString().length, '89148' - 0) !== T59) {
					H6Q = !!0
				}
				H6Q = !!'1'
			}
			p6Q = D6Q[B6Q]
			A6Q = B6Q
			function X6Q(P9Q, m9Q) {
				var K6Q, r9Q
				f46i.K0w()
				K6Q = D6Q[P9Q - 1].DT
				r9Q = D6Q[P9Q].DT
				if (m9Q == 'week') {
					if (r9Q.getDay() < K6Q.getDay()) {
						return !!'1'
					}
				} else if (m9Q == 'month') {
					if (r9Q.getMonth() != K6Q.getMonth()) {
						return !0
					}
				} else {
					if (r9Q.getDay() != K6Q.getDay()) {
						return !!{}
					}
				}
				return !{}
			}
			if ((t6Q == 'week' || t6Q == 'month') && !H6Q) {
				for (g6Q = 1; g6Q <= Z6Q; g6Q++) {
					while (A6Q + 1 < D6Q.length && !X6Q(A6Q + 1, t6Q)) {
						A6Q++
						u6Q(E6Q, A6Q)
					}
					if (g6Q != Z6Q) {
						A6Q++
						if (A6Q < D6Q.length) {
							u6Q(E6Q, A6Q)
						}
					}
				}
			} else if (!this.isDailyInterval(t6Q) && t6Q != q39 && Z6Q > 1) {
				for (g6Q = 1; g6Q < Z6Q; g6Q++) {
					f46i.F06(0)
					A6Q = f46i.H06(g6Q, B6Q)
					if (A6Q < D6Q.length && M6Q(B6Q, A6Q, Z6Q, t6Q, z6Q)) {
						A6Q--
						break
					}
					if (A6Q >= 0 && A6Q < D6Q.length) {
						u6Q(E6Q, A6Q)
					}
				}
			} else {
				for (g6Q = 1; g6Q < Z6Q; g6Q++) {
					f46i.F06(0)
					A6Q = f46i.H06(g6Q, B6Q)
					if (A6Q >= 0 && A6Q < D6Q.length) {
						u6Q(E6Q, A6Q)
					}
				}
			}
			for (g6Q in E6Q.plugins) {
				V6Q = E6Q.plugins[g6Q]
				if (V6Q.consolidate) {
					V6Q.consolidate(D6Q, B6Q, A6Q, p6Q)
				}
			}
			function M6Q(d9Q, N9Q, I9Q, C9Q, f9Q) {
				var w9Q, S9Q, W9Q, L59, z59, H59
				f46i.F06(4)
				w9Q = f46i.W06(C9Q, I9Q)
				S9Q = new Date(D6Q[d9Q].DT)
				if (f9Q === 'millisecond') {
					S9Q.setMilliseconds(S9Q.getMilliseconds() + w9Q)
				} else if (f9Q === 'second') {
					S9Q.setSeconds(S9Q.getSeconds() + w9Q)
				} else {
					S9Q.setMinutes(S9Q.getMinutes() + w9Q)
				}
				W9Q = D6Q[N9Q].DT
				if (b6Q) {
					if (D6Q[d9Q].DT.getMinutes() % w9Q) {
						if (W9Q.getMinutes() % w9Q === 0) {
							return !![]
						}
					}
				}
				L59 = 1411051543
				z59 = 1833832615
				H59 = 2
				for (
					var w59 = '1' | 0;
					f46i.C2o(w59.toString(), w59.toString().length, '12713' * 1) !== L59;
					w59++
				) {
					f46i.r3w()
					H59 += 2
				}
				if (f46i.b2o(H59.toString(), H59.toString().length, 15927) !== z59) {
					f46i.r3w()
				}
				if (W9Q.getTime() >= S9Q.getTime()) {
					return !''
				}
				return !1
			}
			this.runAppend(y39, j6Q)
			return { quote: p6Q, position: A6Q + 1 }
		}
		P3w.ChartEngine.prototype.touchmove = function(c9Q) {
			var X39,
				T39,
				q9Q,
				O9Q,
				p9Q,
				g9Q,
				D9Q,
				V9Q,
				Y09,
				Q09,
				F09,
				y9Q,
				T9Q,
				a9Q,
				Q9Q,
				s9Q,
				B9Q,
				o9Q,
				u9Q,
				N59,
				A59,
				c59,
				U9Q,
				Z9Q,
				n9Q,
				L9Q,
				A9Q,
				x9Q,
				J9Q,
				l9Q,
				G9Q,
				v19,
				M19,
				p19,
				F9Q,
				E9Q,
				k9Q,
				e9Q,
				j9Q,
				b9Q,
				X9Q,
				M9Q,
				t9Q,
				H9Q,
				i9Q,
				p09,
				i09,
				x09,
				Y9Q,
				z9Q,
				W19,
				K19,
				L69,
				i69,
				x69,
				r69
			X39 = 'to'
			X39 += 'uc'
			X39 += 'hmove'
			T39 = 'fr'
			T39 += 'ee'
			T39 += 'form'
			q9Q = this
			if (!this.displayInitialized) {
				return
			}
			if (this.openDialog !== '') {
				return
			}
			if (P3w.ChartEngine.ignoreTouch === !!{}) {
				return
			}
			O9Q = []
			if (c9Q && c9Q.touches && c9Q.touches.length == +'1') {
				if (
					Math.pow(this.clicks.x - c9Q.touches[0].clientX, 2) +
						Math.pow(this.clicks.y - c9Q.touches[0].clientY, 2) <=
					'16' - 0
				) {
					return
				}
			}
			if (
				!this.overYAxis ||
				(this.controls && this.controls.crossX && this.controls.crossX.style.display != 'none')
			) {
				if (c9Q && c9Q.preventDefault && this.captureTouchEvents) {
					c9Q.preventDefault()
				}
				if (c9Q) {
					c9Q.stopPropagation()
				}
			}
			p9Q = new Date().getTime()
			if (this.clicks.s2MS == -1) {
				this.clicks.e1MS = p9Q
				if (this.clicks.e1MS - this.clicks.s1MS < 25) {
					return
				}
			} else {
				this.clicks.e2MS = p9Q
				if (this.clicks.e2MS - this.clicks.s2MS < 25) {
					return
				}
			}
			if (P3w.isSurface) {
				if (this.mouseMode) {
					return
				}
				if (!c9Q.pointerId) {
					c9Q.pointerId = this.gesturePointerId
				}
				if ((!this.grabbingScreen || P3w.ChartEngine.resizingPanel) && !this.overrideGesture) {
					if (c9Q.detail == c9Q.MSGESTURE_FLAG_INERTIA) {
						this.gesture.stop()
						return
					}
				}
				for (var v9Q = 0; v9Q < this.touches.length; v9Q++) {
					if (q9Q.touches[v9Q].pointerId == c9Q.pointerId) {
						g9Q = Math.abs(q9Q.touches[v9Q].pageX - c9Q.clientX)
						D9Q = Math.abs(q9Q.touches[v9Q].pageY - c9Q.clientY)
						f46i.F06(33)
						V9Q = Math.sqrt(f46i.W06(g9Q, g9Q, D9Q, D9Q))
						if (!V9Q) {
							return
						}
						q9Q.clicks.e1MS = new Date().getTime()
						if (q9Q.clicks.e1MS - q9Q.clicks.s1MS < 50) {
							return
						}
						if (q9Q.touches[v9Q].pageX == c9Q.clientX && q9Q.touches[v9Q].pageY == c9Q.clientY) {
							return
						}
						q9Q.touches[v9Q].pageX = c9Q.clientX
						q9Q.touches[v9Q].pageY = c9Q.clientY
						break
					}
				}
				if (v9Q === 0) {
					this.movedPrimary = !!1
				} else {
					this.movedSecondary = !!'1'
				}
				if (!this.gestureInEffect && v9Q == this.touches.length) {
					return
				}
				this.changedTouches = [{ pointerId: c9Q.pointerId, pageX: c9Q.clientX, pageY: c9Q.clientY }]
				O9Q = this.touches
				if (this.gestureInEffect && !O9Q.length) {
					O9Q = this.changedTouches
				}
			} else {
				O9Q = c9Q.touches
				Y09 = 1059882817
				Q09 = 305226568
				f46i.i06(18)
				F09 = f46i.H06('2', 0)
				for (
					var M09 = 1;
					f46i.C2o(M09.toString(), M09.toString().length, +'39586') !== Y09;
					M09++
				) {
					this.changedTouches = c9Q.changedTouches
					F09 += 2
				}
				if (f46i.C2o(F09.toString(), F09.toString().length, +'47458') !== Q09) {
					this.changedTouches = c9Q.changedTouches
				}
			}
			y9Q = this.crosshairXOffset
			T9Q = this.crosshairYOffset
			a9Q = !this.layout.crosshair && !this.currentVectorParameters.vectorType
			if (a9Q || (this.activeDrawing && this.activeDrawing.name == T39)) {
				y9Q = T9Q = 0
			}
			if (this.runPrepend(X39, arguments)) {
				return
			}
			if (P3w.ChartEngine.resizingPanel) {
				B9Q = O9Q[0]
				Q9Q = B9Q.pageX
				s9Q = B9Q.pageY
				f46i.i06(0)
				this.mousemoveinner(f46i.W06(y9Q, Q9Q), f46i.H06(T9Q, s9Q))
				return
			}
			if (this.moveB != -1) {
				this.touchMoveTime = new Date()
			}
			this.moveA = this.moveB
			this.moveB = O9Q['0' | 0].pageX
			if (O9Q.length == 1 && !this.twoFingerStart) {
				u9Q = O9Q[0]
				f46i.i06(17)
				N59 = -f46i.H06('1261213875', 856393792)
				A59 = 2063926733
				c59 = 2
				for (var s59 = 1; f46i.C2o(s59.toString(), s59.toString().length, 61155) !== N59; s59++) {
					Q9Q = u9Q.pageX
					c59 += 2
				}
				if (f46i.b2o(c59.toString(), c59.toString().length, 12818) !== A59) {
					Q9Q = u9Q.pageX
				}
				s9Q = u9Q.pageY
				f46i.F06(1)
				this.pinchingScreen = f46i.H06(0, '0')
				f46i.F06(0)
				this.mousemoveinner(f46i.W06(y9Q, Q9Q), f46i.H06(T9Q, s9Q))
				U9Q = this.whichPanel(s9Q)
				this.overXAxis =
					s9Q >= this.top + this.chart.panel.yAxis.bottom &&
					s9Q <= this.top + this.chart.panel.bottom &&
					P3w.ChartEngine.insideChart
				if (!U9Q) {
					this.overYAxis = ![]
				} else {
					this.overYAxis = (Q9Q >= U9Q.right || Q9Q <= U9Q.left) && P3w.ChartEngine.insideChart
				}
			} else if (O9Q.length == +'2' && this.allowZoom) {
				if (!this.displayCrosshairs) {
					return
				}
				Z9Q = O9Q[0]
				n9Q = Z9Q.pageX
				L9Q = Z9Q.pageY
				A9Q = O9Q[1]
				x9Q = A9Q.pageX
				J9Q = A9Q.pageY
				f46i.F06(34)
				o9Q = Math.sqrt(f46i.W06(n9Q, L9Q, n9Q, x9Q, J9Q, L9Q, x9Q, J9Q))
				f46i.i06(35)
				var W49 = f46i.H06(3, 2, 17, 14)
				this.pinchingCenter = Math.min(n9Q, x9Q) + (Math.max(n9Q, x9Q) - Math.min(n9Q, x9Q)) / W49
				l9Q = Math.round(this.gestureStartDistance - o9Q)
				if (a9Q) {
					this.pinchingScreen = 5
				}
				this.clearPixelCache()
				if (this.pinchingScreen < 2) {
					if (P3w.isSurface && (!this.movedPrimary || !this.movedSecondary)) {
						return
					}
					if (
						(n9Q < this.pt.x1 && x9Q < this.pt.x2) ||
						(n9Q > this.pt.x1 && x9Q > this.pt.x2) ||
						(L9Q < this.pt.y1 && J9Q < this.pt.y2) ||
						(L9Q > this.pt.y1 && J9Q > this.pt.y2)
					) {
						this.pinchingScreen = 0
					} else {
						this.pinchingScreen++
						if (this.pinchingScreen < '2' << 57417664) {
							return
						}
					}
				}
				this.pt = { x1: n9Q, x2: x9Q, y1: L9Q, y2: J9Q }
				if (this.pinchingScreen === 0) {
					f46i.i06(0)
					this.mousemoveinner(f46i.W06(y9Q, n9Q), f46i.W06(T9Q, L9Q))
					this.gestureStartDistance = o9Q
				} else {
					G9Q = Math.asin((Math.max(J9Q, L9Q) - Math.min(J9Q, L9Q)) / o9Q)
					if (Math.abs(l9Q) < 12 && !a9Q) {
						this.moveCount++
						if (this.moveCount == 4) {
							this.pinchingScreen = 0
							this.moveCount = 0
							return
						}
					} else {
						v19 = -422970039
						f46i.F06(3)
						M19 = f46i.W06('763991115', 687903745)
						p19 = 2
						for (
							var x19 = 1;
							f46i.C2o(x19.toString(), x19.toString().length, 56287) !== v19;
							x19++
						) {
							this.moveCount = 3
							p19 += 2
						}
						if (f46i.b2o(p19.toString(), p19.toString().length, 3657) !== M19) {
							this.moveCount = 0
						}
					}
					if (G9Q < 1 || (!this.goneVertical && G9Q < 1.37)) {
						if (!this.currentPanel) {
							return
						}
						F9Q = this.currentPanel.chart
						this.goneVertical = !{}
						o9Q = this.pt.x2 - this.pt.x1
						E9Q = this.grabStartValues.t2 - this.grabStartValues.t1
						k9Q = this.grabStartValues.t1 + E9Q / +'2'
						f46i.i06(5)
						e9Q = f46i.H06(o9Q, E9Q)
						if (e9Q < this.minimumCandleWidth) {
							e9Q = this.minimumCandleWidth
						}
						j9Q = this.layout.candleWidth
						this.setCandleWidth(e9Q, F9Q)
						if (F9Q.maxTicks < this.minimumZoomTicks) {
							this.setCandleWidth(j9Q, F9Q)
							return
						}
						this.micropixels = 0
						b9Q = this.pixelFromTick(Math.round(k9Q), F9Q)
						f46i.F06(1)
						var K49 = f46i.W06(12, 14)
						X9Q = this.pt.x1 - this.left + Math.round(o9Q / K49)
						f46i.F06(1)
						M9Q = f46i.H06(X9Q, b9Q)
						f46i.F06(5)
						t9Q = f46i.H06(M9Q, e9Q)
						H9Q = Math.round(t9Q)
						F9Q.scroll -= H9Q
						f46i.F06(1)
						this.microscroll = f46i.W06(t9Q, H9Q)
						this.micropixels = e9Q * this.microscroll
						this.draw()
					} else {
						i9Q = this.currentPanel.chart.panel.yAxis
						this.goneVertical = !0
						i9Q.zoom = this.grabStartZoom + (this.gestureStartDistance - o9Q)
						if (this.grabStartZoom < i9Q.height) {
							if (i9Q.zoom >= i9Q.height) {
								i9Q.zoom = i9Q.height - +'1'
							}
						} else {
							if (i9Q.zoom <= i9Q.height) {
								f46i.i06(36)
								var L79 = f46i.H06(367203735, 12, 28246439, 18)
								i9Q.zoom = i9Q.height + ('1' << L79)
							}
						}
						this.draw()
					}
					f46i.F06(7)
					p09 = f46i.W06(1073168960, '606644504')
					i09 = 614953560
					x09 = 2
					for (
						var o09 = 1;
						f46i.b2o(o09.toString(), o09.toString().length, +'19845') !== p09;
						o09++
					) {
						this.updateChartAccessories()
						f46i.F06(4)
						x09 += f46i.H06('2', 1)
					}
					if (f46i.b2o(x09.toString(), x09.toString().length, 11117) !== i09) {
						this.updateChartAccessories()
					}
					this.updateChartAccessories()
				}
			} else if (O9Q.length == 3 && P3w.ChartEngine.allowThreeFingerTouch) {
				if (!this.displayCrosshairs) {
					return
				}
				Y9Q = O9Q[0]
				z9Q = Y9Q.pageX
				W19 = 1389473872
				K19 = 2136993731
				L69 = 2
				for (var H69 = 1; f46i.b2o(H69.toString(), H69.toString().length, 69499) !== W19; H69++) {
					o9Q = this.grabStartX * z9Q
					f46i.F06(37)
					var z79 = f46i.W06(1237, 17, 7, 172)
					this.grabEndPeriodicity = this.grabStartPeriodicity * Math.round(o9Q + z79)
					L69 += 2
				}
				if (f46i.b2o(L69.toString(), L69.toString().length, '78032' * 1) !== K19) {
					o9Q = this.grabStartX - z9Q
					f46i.F06(1)
					var H79 = f46i.W06(190, 200)
					this.grabEndPeriodicity = this.grabStartPeriodicity + Math.round(o9Q / H79)
				}
				if (this.grabEndPeriodicity < 1) {
					i69 = -215059315
					x69 = -804589883
					r69 = 2
					for (
						var t69 = 1;
						f46i.b2o(t69.toString(), t69.toString().length, +'37784') !== i69;
						t69++
					) {
						this.grabEndPeriodicity = 4
						r69 += 2
					}
					if (f46i.C2o(r69.toString(), r69.toString().length, '24597' * 1) !== x69) {
						this.grabEndPeriodicity = 1
					}
				}
			}
			this.runAppend('touchmove', arguments)
		}
		P3w.ChartEngine.prototype.touchstart = function(S4Q) {
			var h9Q,
				I4Q,
				c4Q,
				W4Q,
				P4Q,
				r4Q,
				K9Q,
				R9Q,
				w4Q,
				f4Q,
				v4Q,
				i4Q,
				m4Q,
				x4Q,
				J4Q,
				q4Q,
				n4Q,
				o4Q,
				O4Q,
				N4Q,
				d4Q,
				s69,
				G69,
				I69,
				s4Q,
				L4Q
			h9Q = this
			if (P3w.ChartEngine.ignoreTouch) {
				return
			}
			if (P3w.isSurface) {
				this.movedPrimary = ![]
				this.movedSecondary = !{}
			} else {
				if (this.touchingEvent) {
					clearTimeout(this.touchingEvent)
				}
				this.touching = !!{}
				this.touches = S4Q.touches
				this.changedTouches = S4Q.changedTouches
			}
			if (P3w.ChartEngine.resizingPanel) {
				return
			}
			I4Q = this.crosshairXOffset
			c4Q = this.crosshairYOffset
			if (this.runPrepend('touchstart', arguments)) {
				return
			}
			if (this.manageTouchAndMouse && S4Q && S4Q.preventDefault && this.captureTouchEvents) {
				S4Q.preventDefault()
			}
			this.hasDragged = ![]
			this.doubleFingerMoves = 0
			this.moveCount = 0
			f46i.K0w()
			this.twoFingerStart = !{}
			if (this.touches.length == 1 || this.touches.length == 2) {
				if (this.changedTouches.length == +'1') {
					w4Q = Date.now()
					this.clicks.x = this.changedTouches[0].pageX
					this.clicks.y = this.changedTouches[0].pageY
					if (w4Q - this.clicks.e1MS < 250) {
						this.cancelTouchSingleClick = !!{}
						this.clicks.s2MS = w4Q
					} else {
						this.cancelTouchSingleClick = !{}
						this.clicks.s1MS = w4Q
						f46i.F06(4)
						this.clicks.e1MS = -f46i.W06('1', 1)
						this.clicks.s2MS = -1
						this.clicks.e2MS = -1
					}
				}
				this.touchMoveTime = Date.now()
				this.moveA = this.touches[+'0'].pageX
				this.moveB = -1
				f4Q = this.touches[0]
				r4Q = f4Q.pageX
				K9Q = f4Q.pageY
				v4Q = this.container.getBoundingClientRect()
				this.top = v4Q.top
				this.left = v4Q.left
				this.right = this.left + this.width
				this.bottom = this.top + this.height
				if (this.touches.length == 1) {
					i4Q = this.cy = this.backOutY(K9Q)
					this.currentPanel = this.whichPanel(i4Q)
				}
				if (!this.currentPanel) {
					this.currentPanel = this.chart.panel
				}
				R9Q = this.currentPanel
				if (r4Q >= this.left && r4Q <= this.right && K9Q >= this.top && K9Q <= this.bottom) {
					P3w.ChartEngine.insideChart = !![]
					this.overXAxis =
						K9Q >= this.top + this.chart.panel.yAxis.bottom &&
						K9Q <= this.top + this.chart.panel.bottom
					this.overYAxis = r4Q >= R9Q.right || r4Q <= R9Q.left
					for (var C4Q = 0; C4Q < this.drawingObjects.length; C4Q++) {
						m4Q = h9Q.drawingObjects[C4Q]
						if (m4Q.highlighted) {
							x4Q = m4Q.highlighted
							h9Q.cy = h9Q.backOutY(K9Q)
							h9Q.cx = h9Q.backOutX(r4Q)
							h9Q.crosshairTick = h9Q.tickFromPixel(h9Q.cx, R9Q.chart)
							h9Q.crosshairValue = h9Q.adjustIfNecessary(
								R9Q,
								h9Q.crosshairTick,
								h9Q.valueFromPixel(h9Q.cy, h9Q.currentPanel),
							)
							h9Q.findHighlights(!![])
							if (m4Q.highlighted) {
								h9Q.repositioningDrawing = m4Q
								return
							} else {
								h9Q.anyHighlighted = !!1
								m4Q.highlighted = x4Q
							}
						}
					}
				} else {
					P3w.ChartEngine.insideChart = !1
				}
				J4Q =
					this.currentVectorParameters.vectorType && this.currentVectorParameters.vectorType !== ''
				if (!this.layout.crosshair && !J4Q && P3w.ChartEngine.insideChart && !this.touchNoPan) {
					I4Q = c4Q = 0
					if (
						(this.layout.chartType == 'baseline_delta' ||
							this.layout.chartType == 'baseline_delta_mountain') &&
						this.chart.baseline.userLevel !== !{}
					) {
						q4Q = this.valueFromPixelUntransform(this.cy - 5, R9Q)
						n4Q = this.valueFromPixelUntransform(this.cy + 5, R9Q)
						o4Q =
							this.chart.right - parseInt(getComputedStyle(this.controls.baselineHandle).width, 10)
						if (
							this.chart.baseline.actualLevel < q4Q &&
							this.chart.baseline.actualLevel > n4Q &&
							this.backOutX(f4Q.pageX) > o4Q
						) {
							this.repositioningBaseline = { lastDraw: Date.now() }
							return
						}
					}
					for (W4Q in h9Q.panels) {
						P4Q = h9Q.panels[W4Q]
						if (P4Q.highlighted) {
							h9Q.grabHandle(P4Q)
							return
						}
					}
					this.grabbingScreen = !!{}
					R9Q.chart.spanLock = !!0
					this.yToleranceBroken = !!''
					f46i.i06(0)
					this.grabStartX = f46i.W06(I4Q, r4Q)
					f46i.F06(0)
					this.grabStartY = f46i.H06(c4Q, K9Q)
					this.grabStartMicropixels = this.micropixels
					this.grabStartScrollX = R9Q.chart.scroll
					this.grabStartScrollY = R9Q.yAxis.scroll
					this.swipeStart(R9Q.chart)
					setTimeout(
						(function(e4Q) {
							f46i.r3w()
							return function() {
								f46i.r3w()
								e4Q.grabbingHand()
							}
						})(this),
						+'100',
					)
				} else {
					this.grabbingScreen = !1
					if (P3w.ChartEngine.insideChart) {
						if (
							P3w.Drawing &&
							P3w.Drawing[this.currentVectorParameters.vectorType] &&
							new P3w.Drawing[this.currentVectorParameters.vectorType]().dragToDraw
						) {
							this.userPointerDown = !!{}
							P3w.ChartEngine.crosshairX = r4Q
							P3w.ChartEngine.crosshairY = K9Q
							if (R9Q && R9Q.chart.dataSet) {
								this.crosshairTick = this.tickFromPixel(
									this.backOutX(P3w.ChartEngine.crosshairX),
									this.currentPanel.chart,
								)
								this.crosshairValue = this.adjustIfNecessary(
									R9Q,
									this.crosshairTick,
									this.valueFromPixel(this.backOutY(P3w.ChartEngine.crosshairY), this.currentPanel),
								)
							}
							this.drawingClick(R9Q, this.backOutX(r4Q), this.backOutY(K9Q))
							this.headsUpHR()
							return
						}
					}
				}
			}
			if (this.touches.length == 2) {
				this.cancelLongHold = !![]
				this.swipe.end = !!1
				if ((!this.displayCrosshairs && !this.touchNoPan) || !P3w.ChartEngine.insideChart) {
					return
				}
				O4Q = this.touches[1]
				N4Q = O4Q.pageX
				d4Q = O4Q.pageY
				for (W4Q in h9Q.panels) {
					P4Q = h9Q.panels[W4Q]
					if (P4Q.highlighted) {
						h9Q.grabHandle(P4Q)
						return
					}
				}
				R9Q = this.currentPanel
				f46i.i06(34)
				this.gestureStartDistance = Math.sqrt(f46i.H06(r4Q, K9Q, r4Q, N4Q, d4Q, K9Q, N4Q, d4Q))
				this.pt = { x1: r4Q, x2: N4Q, y1: K9Q, y2: d4Q }
				this.grabbingScreen = !!{}
				R9Q.chart.spanLock = !!0
				f46i.i06(0)
				this.grabStartX = f46i.H06(I4Q, r4Q)
				f46i.F06(0)
				this.grabStartY = f46i.H06(c4Q, K9Q)
				this.grabStartMicropixels = this.micropixels
				this.grabStartScrollX = R9Q.chart.scroll
				this.grabStartScrollY = R9Q.yAxis.scroll
				this.swipeStart(R9Q.chart)
				s69 = -1078595757
				G69 = -1115634472
				I69 = 2
				for (
					var D69 = 1;
					f46i.C2o(D69.toString(), D69.toString().length, +'30630') !== s69;
					D69++
				) {
					this.grabStartCandleWidth = this.layout.candleWidth
					this.grabStartZoom = this.whichYAxis(R9Q).zoom
					this.grabStartPt = this.pt
					I69 += +'2'
				}
				if (f46i.C2o(I69.toString(), I69.toString().length, 66870) !== G69) {
					this.grabStartCandleWidth = this.layout.candleWidth
					this.grabStartZoom = this.whichYAxis(R9Q).zoom
					this.grabStartPt = this.pt
				}
				this.grabStartValues = {
					x1: this.pt.x1,
					x2: this.pt.x2,
					y1: this.valueFromPixel(this.pt.y1 - this.top, R9Q),
					y2: this.valueFromPixel(this.pt.y2 - this.top, R9Q),
					t1: this.tickFromPixel(this.pt.x1 - this.left, R9Q.chart),
					t2: this.tickFromPixel(this.pt.x2 - this.left, R9Q.chart),
				}
				this.twoFingerStart = !![]
				setTimeout(
					(function(Q4Q) {
						f46i.r3w()
						return function() {
							f46i.r3w()
							Q4Q.grabbingHand()
						}
					})(this),
					'100' - 0,
				)
			} else if (this.touches.length == 3) {
				if (!this.displayCrosshairs) {
					return
				}
				s4Q = this.touches[0]
				L4Q = s4Q.pageX
				this.grabStartX = L4Q
				this.grabStartPeriodicity = this.layout.periodicity
			}
			if (this.touches.length == 1) {
				this.mouseTimer = Date.now()
				this.longHoldTookEffect = !'1'
				if (this.longHoldTime) {
					this.startLongHoldTimer()
				}
			}
			this.runAppend('touchstart', arguments)
		}
		P3w.ChartEngine.prototype.swipeStart = function(F4Q) {
			var y4Q
			if (this.swipe && this.swipe.interval) {
				clearInterval(this.swipe.interval)
			}
			this.swipe.velocity = 0
			this.swipe.amplitude = +'0'
			f46i.K0w()
			this.swipe.frame = F4Q.scroll
			this.swipe.micropixels = this.micropixels
			this.swipe.timestamp = Date.now()
			this.swipe.chart = F4Q
			this.swipe.end = !1
			f46i.i06(17)
			this.swipe.timeConstant = f46i.H06('325', 1324577792)
			this.swipe.cb = null
			y4Q = this
			requestAnimationFrame(function() {
				f46i.K0w()
				y4Q.swipeSample()
			})
		}
		P3w.ChartEngine.prototype.swipeSample = function() {
			var T4Q, U4Q, a4Q, G4Q, A4Q, D4Q, p4Q, B4Q, g4Q
			T4Q = this.swipe
			if (T4Q.end) {
				return
			}
			f46i.K0w()
			U4Q = this
			p4Q = 20
			a4Q = Date.now()
			G4Q = a4Q - T4Q.timestamp
			if (G4Q < p4Q) {
				requestAnimationFrame(function() {
					f46i.K0w()
					U4Q.swipeSample()
				})
				return
			}
			B4Q = P3w.touchDevice ? 0.4 : 0.8
			T4Q.timestamp = a4Q
			A4Q =
				(T4Q.chart.scroll - T4Q.frame) * this.layout.candleWidth +
				this.micropixels -
				T4Q.micropixels
			T4Q.frame = T4Q.chart.scroll
			T4Q.micropixels = this.micropixels
			f46i.F06(38)
			D4Q = f46i.H06(1, A4Q, 1000, G4Q)
			g4Q = B4Q * D4Q + 0.2 * T4Q.velocity
			if (Math.abs(g4Q) > Math.abs(T4Q.velocity)) {
				T4Q.velocity = g4Q
			}
			if (Math.abs(A4Q) < 6) {
				T4Q.velocity = +'0'
			}
			requestAnimationFrame(function() {
				f46i.r3w()
				U4Q.swipeSample()
			})
		}
		P3w.ChartEngine.prototype.swipeRelease = function() {
			var E4Q, l19, B19, d19, Z4Q
			f46i.K0w()
			E4Q = this.swipe
			if (E4Q.velocity > 3000) {
				E4Q.velocity = 3000
			}
			if (E4Q.velocity < -('3000' | 952)) {
				E4Q.velocity = -+'3000'
			}
			if (E4Q.velocity > 10 || E4Q.velocity < -('10' * 1)) {
				E4Q.amplitude = +'0.8' * E4Q.velocity
				E4Q.scroll = E4Q.chart.scroll
				l19 = -13903479
				B19 = -400339080
				d19 = +'2'
				for (var G19 = 1; f46i.b2o(G19.toString(), G19.toString().length, 58929) !== l19; G19++) {
					E4Q.target = E4Q.amplitude
					E4Q.timestamp = Date.now()
					Z4Q = this
					d19 += 2
				}
				if (f46i.C2o(d19.toString(), d19.toString().length, 41076) !== B19) {
					E4Q.target = E4Q.amplitude
					E4Q.timestamp = Date.now()
					Z4Q = this
				}
				requestAnimationFrame(function() {
					Z4Q.autoscroll()
				})
			}
		}
		P3w.ChartEngine.prototype.scrollTo = function(H4Q, V4Q, j4Q) {
			var t4Q, u4Q
			t4Q = this.swipe
			t4Q.end = !0
			t4Q.amplitude = t4Q.target = (V4Q - H4Q.scroll) * this.layout.candleWidth
			t4Q.timeConstant = 100
			t4Q.timestamp = Date.now()
			t4Q.scroll = H4Q.scroll
			t4Q.chart = H4Q
			f46i.K0w()
			t4Q.cb = j4Q
			u4Q = this
			requestAnimationFrame(function() {
				f46i.r3w()
				u4Q.autoscroll()
			})
		}
		P3w.ChartEngine.prototype.autoscroll = function() {
			var M4Q, b4Q, l4Q, X4Q, z4Q
			M4Q = this
			b4Q = this.swipe
			f46i.K0w()
			if (b4Q.amplitude) {
				b4Q.elapsed = Date.now() - b4Q.timestamp
				X4Q = -b4Q.amplitude * Math.exp(-b4Q.elapsed / b4Q.timeConstant)
				if (X4Q > 0.5 || X4Q < -0.5) {
					z4Q = (b4Q.target + X4Q) / this.layout.candleWidth
					b4Q.chart.scroll = b4Q.scroll + Math.round(z4Q)
					this.draw()
					this.updateChartAccessories()
					requestAnimationFrame(function() {
						f46i.r3w()
						M4Q.autoscroll()
					})
				} else {
					if (b4Q.cb) {
						b4Q.cb()
					}
				}
			}
		}
		P3w.ChartEngine.prototype.touchend = function(R4Q) {
			var h4Q, I19, m19, D19, k4Q, Y4Q, K4Q, r7Q
			if (P3w.ChartEngine.ignoreTouch) {
				return
			}
			this.swipe.end = !!{}
			if (P3w.isSurface) {
			} else {
				this.touches = R4Q.touches
				this.changedTouches = R4Q.changedTouches
			}
			if (this.runPrepend('touchend', arguments)) {
				return
			}
			this.cancelLongHold = !!'1'
			if (this.touches.length <= 1) {
				if (this.layout.crosshair || this.currentVectorParameters.vectorType) {
					if (!this.touches.length || !this.twoFingerStart) {
						this.grabbingScreen = ![]
					}
				}
			}
			if (this.touches.length) {
				f46i.F06(17)
				this.grabStartX = -f46i.H06('1', 1711741952)
				this.grabStartY = -1
			}
			h4Q = this.pinchingScreen
			if (!this.touches.length) {
				this.touchingEvent = setTimeout(
					(function(P7Q) {
						return function() {
							P7Q.touching = ![]
						}
					})(this),
					500,
				)
				if (P3w.ChartEngine.resizingPanel) {
					this.releaseHandle()
					return
				}
				this.pinchingScreen = null
				this.pinchingCenter = null
				this.goneVertical = !!0
				this.grabbingScreen = !1
				this.grabMode = ''
				this.doDisplayCrosshairs()
				I19 = -519447827
				m19 = 2066418009
				D19 = 2
				for (var g19 = 1; f46i.C2o(g19.toString(), g19.toString().length, 30436) !== I19; g19++) {
					this.updateChartAccessories()
					D19 += 2
				}
				if (f46i.C2o(D19.toString(), D19.toString().length, 59538) !== m19) {
					this.updateChartAccessories()
				}
			} else {
				if (P3w.ChartEngine.resizingPanel) {
					return
				}
			}
			k4Q = this.touches.length + 1
			if (this.changedTouches.length == 1) {
				if (this.repositioningDrawing) {
					this.changeOccurred('vector')
					P3w.clearCanvas(this.chart.tempCanvas, this)
					this.repositioningDrawing = null
					this.draw()
					if (!this.layout.crosshair && !this.currentVectorParameters.vectorType) {
						this.findHighlights(!{}, !![])
					}
					return
				}
				if (this.repositioningBaseline) {
					this.repositioningBaseline = null
					this.chart.panel.yAxis.scroll =
						this.pixelFromPriceTransform(this.chart.baseline.userLevel, this.chart.panel) -
						(this.chart.panel.yAxis.top + this.chart.panel.yAxis.bottom) / +'2'
					this.draw()
					return
				}
				Y4Q = Date.now()
				if (this.clicks.s2MS == -1) {
					this.clicks.e1MS = Y4Q
					if (
						!P3w.Drawing ||
						!this.currentVectorParameters.vectorType ||
						!P3w.Drawing[this.currentVectorParameters.vectorType] ||
						!new P3w.Drawing[this.currentVectorParameters.vectorType]().dragToDraw
					) {
						if (
							this.clicks.e1MS - this.clicks.s1MS < +'750' &&
							!this.longHoldTookEffect &&
							!this.hasDragged
						) {
							setTimeout(this.touchSingleClick(k4Q, this.clicks.x, this.clicks.y), 200)
						} else {
							this.clicks = { s1MS: -1, e1MS: -1, s2MS: -1, e2MS: -1 }
						}
					}
					this.userPointerDown = ![]
					if (this.activeDrawing && this.activeDrawing.dragToDraw) {
						K4Q = this.backOutY(this.changedTouches[0].pageY) + this.crosshairYOffset
						r7Q = this.backOutX(this.changedTouches[0].pageX) + this.crosshairXOffset
						this.drawingClick(this.currentPanel, r7Q, K4Q)
						return
					}
				} else {
					this.clicks.e2MS = Y4Q
					if (this.clicks.e2MS - this.clicks.s2MS < 250) {
						this.touchDoubleClick(k4Q, this.clicks.x, this.clicks.y)
					} else {
						this.clicks = { s1MS: -1, e1MS: -('1' * 1), s2MS: -1, e2MS: -1 }
					}
				}
			} else if (this.displayCrosshairs) {
				if (this.grabEndPeriodicity != -+'1' && !isNaN(this.grabEndPeriodicity)) {
					if (this.isDailyInterval(this.layout.interval) || this.allowIntradayNMinute) {
						this.setPeriodicityV2(this.grabEndPeriodicity, this.layout.interval)
					}
					this.grabEndPeriodicity = -1
				}
			}
			if (this.changedTouches.length) {
				if (
					(!this.layout.crosshair && !this.currentVectorParameters.vectorType && k4Q == 1) ||
					(this.twoFingerStart && !h4Q && !this.touches.length)
				) {
					this.swipeRelease()
				}
			}
			if (!this.touches.length) {
				this.twoFingerStart = ![]
			}
			this.runAppend('touchend', arguments)
		}
		P3w[H89][D89][x89] = function(y7Q, I7Q, U7Q) {
			f46i.J46i = function(d46i) {
				if (f46i && d46i) return f46i.E79(d46i)
			}
			f46i.t46i = function(A46i) {
				if (f46i) return f46i.v79(A46i)
			}
			f46i.I46i = function(x46i) {
				if (f46i) return f46i.v79(x46i)
			}
			f46i.T46i = function(Q46i) {
				if (f46i) return f46i.v79(Q46i)
			}
			f46i.i46i = function(w46i) {
				if (f46i) return f46i.E79(w46i)
			}
			f46i.C46i = function(L46i) {
				if (f46i && L46i) return f46i.E79(L46i)
			}
			f46i.o46i = function(a46i) {
				if (f46i && a46i) return f46i.v79(a46i)
			}
			var p46i = -(f46i.o46i('89d1') ? 505816976 : 119134688),
				u46i = f46i.C46i('6274') ? 359085939 : 904950013,
				F46i = f46i.i46i('68cc') ? 2633849557 : 1099590128,
				U46i = -(f46i.P46i('38a7') ? 5791567408 : 2039958797),
				e46i = -(f46i.T46i('e27e') ? 1923192488 : 9028410823),
				Y46i = f46i.D46i('3fac') ? 610045818 : 164171296
			if (
				!(
					f46i.t7h(f46i.I46i('ca26') ? 3 : 0, 794172) !== p46i &&
					f46i.t7h(f46i.m46i('9a7a') ? 5 : 0, 368503) !== u46i &&
					f46i.U7h(f46i.t46i('67b7') ? 29 : 97, f46i.r46i('7fd2') ? 268356 : 599870) !== F46i &&
					f46i.t7h(f46i.s46i('e133') ? 0 : 3, 784010) !== U46i &&
					f46i.t7h(f46i.J46i('e7b1') ? 44 : 98, 676885) !== e46i &&
					f46i.t7h(0, f46i.R46i('b97a') ? 992082 : 372020) !== Y46i
				)
			) {
				var q9U = f46i.b46i('b4be') ? '' : 'interval'
				var S56i = 'drawKagiSquareWave'
				var Q5U = 'c'
				var x96i = 'adjustDrawings'
				var t89 = 'l'
				var c9U = ' position'
				var W96i = 'calculateRangeBars'
				var q96i = f46i.S46i('4fc3') ? '' : 'calculatePointFigure'
				var c96i = 'plugins'
				var w96i = 'slice'
				var Z56i = 'he'
				var f56i = 'log'
				var a5U = 'animationEntry'
				var X5U = 'Adj_Close'
				var c89 = 'r3w'
				var A5U = 0.75
				var D96i = 'push'
				var l5U = 'layout'
				var c5U = 'drawingObjects'
				var z56i = 'chartType'
				var e96i = 'heikinashi'
				var B96i = 'rangebars'
				var p5U = 'e'
				var i5U = 'Close'
				var H9U = 'onsolida'
				var h56i = 'advanced/ag'
				var j5U = 'masterData'
				var D5U = 'runAppend'
				var u96i = 'ash'
				var m5U = 'maxTicks'
				var L96i = 'transformDataSetPost'
				var T5U = 'DT'
				var G96i = 'func'
				var f96i = 'cache'
				var Y9U = 'High'
				var P96i = 'calculateTypicalPrice'
				var F96i = 'i'
				var R56i = 'lockScroll'
				var J56i = 'scroll'
				var P89 = 1000000000
				var o96i = 'grabStartScrollX'
				var u89 = 19
				var I89 = 'runPrepend'
				var E96i = 'kagi'
				var w5U = 'dataSet'
				var I5U = 'transformDataSetPre'
				var e89 = 32
				var Z5U = 'ose'
				var Q96i = 'calculateWeightedClose'
				var Q9U = 'error:c'
				var N56i = 'spanLock'
				var b56i = 'defaultChartStyleConfig'
				var A96i = 'panels'
				var b5U = 'H'
				var U9U = null
				var g9U = 'Low'
				var L5U = 'charts'
				var F89 = 20
				var b79 = 0
				var y96i = 'linebreak'
				var h5U = 'adj'
				var K5U = 'hideDrawings'
				var m96i = 'tion'
				var t96i = 'panel'
				var r5U = '0'
				var P5U = 'h'
				var w9U = 'consolidatedQuote'
				var h9U = 'position'
				var C96i = 'maxDataSetSize'
				var H96i = 'scrubbed'
				var d5U = 'activeDrawing'
				var j96i = 'calculateMedianPrice'
				var Z79 = 6
				var F9U = 'Open'
				var k96i = 'priceLines'
				var i96i = 'calculateATR'
				var S79 = 1
				var O96i = 'calculateRenkoBars'
				var S5U = 'ratio'
				var V96i = 'pandf'
				var X56i = 'gregation.js not loaded!'
				var N5U = 'isHourAligned'
				var P9U = 'timeUnit'
				var t5U = 'chart'
				var z5U = 'ig'
				var l56i = 'aggregationType'
				var r56i = 'quote'
				var o9U = 'week'
				var d56i = 'H06'
				var c56i = 'iqPrevClose'
				var v96i = 'range'
				var o5U = 'firstLoop'
				var I96i = 'studies'
				var g96i = 'calculateLineBreak'
				var Z96i = 'establishMarkerTicks'
				var s5U = 'projection'
				var G5U = 'round'
				var j89 = 719169056
				var l9U = 'alert'
				var x5U = 'concat'
				var a96i = 'F06'
				var C5U = 'name'
				var T96i = 'calculateOHLC4'
				var R5U = 'dontRoll'
				var V9U = 'periodicity'
				var r96i = 'calculateFN'
				var Z89 = 'o'
				var H5U = 'tickCache'
				var U96i = 'type'
				var K96i = 'study'
				var p96i = 'iken'
				var Y96i = 'calculateHeikinAshi'
				var U89 = 29
				var M5U = 'length'
				var r9U = 'tedQuote returned negative'
				var s56i = 'i06'
				var f5U = 'Cl'
				var p89 = 16
				var n96i = 'renko'
				var q5U = '1'
				var T89 = 2147483647
				var J5U = 'market'
				var M96i = 'calculateKagi'
				var O5U = ''
				var C9U = 'month'
				var S7Q,
					s7Q,
					c7Q,
					m7Q,
					R39,
					n7Q,
					T7Q,
					O7Q,
					W7Q,
					g7Q,
					d7Q,
					e7Q,
					J7Q,
					C7Q,
					Z7Q,
					q7Q,
					p7Q,
					f7Q,
					f39,
					w7Q,
					S39,
					n39,
					Q7Q,
					B7Q,
					N7Q,
					W39,
					K39,
					L7Q,
					o7Q,
					D7Q,
					x7Q,
					a7Q,
					L49,
					i7Q,
					t7Q,
					v7Q,
					G7Q
				S7Q = this
				s7Q = [y7Q, I7Q]
				if (this[I89](x89, s7Q)) {
					return
				}
				function H7Q() {
					var B46i = 1123210500,
						W46i = -2053615499,
						v46i = -339935978,
						E46i = 400300650,
						M46i = -2134810136,
						y46i = -1146717747
					if (
						f46i.U7h(0, 692558) === B46i ||
						f46i.U7h(0, 886092) === W46i ||
						f46i.t7h(29, 479768) === v46i ||
						f46i.U7h(0, 490081) === E46i ||
						f46i.t7h(44, 268844) === M46i ||
						f46i.t7h(0, 136484) === y46i
					) {
						var W5U = 426.54
						var f89 = 0x18b1
						var y5U = '92148'
						var r89 = 'f'
						var Q89 = 1275447493
						var Y5U = 'p'
						var E5U = 'toString'
						var X89 = 7.8e3
						var E89 = 2152
						var w89 = 275288250
						var h89 = 's'
						var f79 = 3
						var U5U = 'adaptiveconsulting.github.io'
						var V89 = 7394
						var A89 = '-analytics.adaptivecluster.com'
						var v89 = 1387
						var Y89 = 726
						var v5U = 'C2o'
						var K89 = 'es'
						var m89 = 'ive'
						var d89 = '277.6'
						var k5U = 'getHostName'
						var X79 = 2
						var g5U = '91109'
						var L89 = 9194
						var S89 = 0x217c
						var u5U = '127.0.0.1'
						var s89 = 977.09
						var J89 = 0xdcf
						var b89 = 71.61
						var C89 = 9596
						var B5U = 7.17e3
						var i89 = 597930976
						var o89 = 8950
						var M89 = 2192
						var F5U = 'localhost'
						var e5U = 'charAt'
						var a89 = 7802
						var z89 = 30.79
						var n5U = 'referrer'
						var g89 = 3629
						var N89 = 't'
						var V5U = 'indexOf'
						var B89 = 880
						var l89 = 1.44e3
						var G89 = 'demo-react'
						var R89 = 0x345
						var W89 = 1323
						var O89 = 5245
						var k89 = 4670
						var k39, X7Q, V7Q, u7Q, j7Q, U19, S19, n19, z7Q, M7Q, l7Q
						k39 = G89
						k39 += m89
						k39 += A89
						X7Q = t89
						X7Q += K89
						X7Q += r89
						f46i[c89]()
						V7Q =
							g89 <= V89
								? B89 <= s89
									? (d89 - b79, L89) == v89
										? (J89, !![])
										: N89
									: R89
								: (l89, b89)
						u7Q = W89 == z89 ? S89 : M89 > (E89, Y89) ? h89 : C89 <= (O89, k89) ? X89 : f89
						V7Q += Z89
						u7Q += p5U
						j7Q = [u5U, F5U, U5U, k39]
						u7Q += X7Q[e5U](b79)
						V7Q += o89 > a89 ? Y5U : (B5U, W5U)
						u7Q += X7Q[e5U](f79)
						if (window[V7Q] == window[u7Q]) {
							U19 = -w89
							S19 = -Q89
							n19 = X79
							for (
								var R19 = S79;
								f46i[v5U](R19[E5U](), R19[E5U]()[M5U], y5U << i89) !== U19;
								R19++
							) {
								return !!b79
							}
							if (f46i[v5U](n19[E5U](), n19[E5U]()[M5U], g5U & T89) !== S19) {
								return !![]
							}
						}
						if (j7Q[M5U]) {
							z7Q = P3w[k5U](document[n5U])
							M7Q = !!O5U
							for (var b7Q = b79; b7Q < j7Q[M5U]; b7Q++) {
								l7Q = j7Q[b7Q]
								if (z7Q[V5U](l7Q) != -S79) {
									M7Q = !![]
								}
							}
							if (!M7Q) {
								return ![]
							}
						}
						return !!q5U
					}
				}
				if (U7Q && U7Q[a5U]) {
					if (!U7Q[o5U]) {
						for (c7Q in S7Q[L5U]) {
							if (I7Q && I7Q[C5U] != c7Q) {
								continue
							}
							m7Q = S7Q[L5U][c7Q]
							m7Q[w5U][m7Q[w5U][M5U] - S79][i5U] = m7Q[j5U][m7Q[j5U][M5U] - S79][i5U]
						}
						return
					}
				}
				for (c7Q in S7Q[L5U]) {
					R39 = Z89
					R39 += P5U
					R39 += t89
					R39 += Q5U
					if (I7Q && I7Q[C5U] != c7Q) {
						continue
					}
					m7Q = S7Q[L5U][c7Q]
					n7Q = b79
					T7Q = new Date()
					if (m7Q[w5U] && m7Q[w5U][M5U]) {
						n7Q = m7Q[w5U][M5U]
						T7Q = m7Q[w5U][n7Q - S79][T5U]
					}
					m7Q[w5U] = []
					m7Q[H5U] = {}
					O7Q = m7Q[j5U]
					if (!O7Q) {
						O7Q = S7Q[j5U]
					}
					if (!O7Q || !O7Q[M5U]) {
						S7Q[D5U](x89, s7Q)
						return
					}
					W7Q = [][x5U](O7Q)
					if (!H7Q()) {
						return
					}
					if (S7Q[I5U]) {
						S7Q[I5U](S7Q, W7Q)
					}
					g7Q = Math[G5U](m7Q[m5U] * A5U)
					if (!S7Q[t5U][K5U]) {
						for (d7Q = r5U & T89; d7Q < this[c5U][M5U]; d7Q++) {
							if (S7Q[c5U][d7Q][C5U] == s5U) {
								A7Q(S7Q, S7Q[c5U][d7Q])
							}
						}
						if (S7Q[d5U] && S7Q[d5U][C5U] == s5U) {
							A7Q(S7Q, S7Q[d5U])
						}
					}
					d7Q = b79
					e7Q = b79
					J7Q = P89
					C7Q = b79
					Z7Q = m7Q[J5U][N5U]()
					q7Q = {}
					p7Q = y7Q || S7Q[R5U]
					f7Q = S7Q[l5U]
					while (S79) {
						f39 = b5U
						f39 += z5U
						f39 += P5U
						if (C7Q >= W7Q[M5U]) {
							break
						}
						w7Q = {}
						for (var F7Q in W7Q[C7Q]) {
							w7Q[F7Q] = W7Q[C7Q][F7Q]
						}
						W7Q[C7Q] = w7Q
						w7Q[S5U] = S79
						if (f7Q[h5U] && w7Q[X5U]) {
							w7Q[S5U] = w7Q[X5U] / w7Q[i5U]
						}
						if (w7Q[S5U] != S79) {
							S39 = f5U
							S39 += Z5U
							if (F9U in w7Q) {
								w7Q[F9U] = w7Q[F9U] * w7Q[S5U]
							}
							if (S39 in w7Q && w7Q[i5U] !== U9U) {
								w7Q[i5U] = w7Q[i5U] * w7Q[S5U]
							}
							if (Y9U in w7Q) {
								w7Q[Y9U] = w7Q[Y9U] * w7Q[S5U]
							}
							if (g9U in w7Q) {
								w7Q[g9U] = w7Q[g9U] * w7Q[S5U]
							}
						}
						if (!p7Q && (f7Q[V9U] > +q5U || f7Q[q9U] == o9U || f7Q[q9U] == C9U)) {
							q7Q = S7Q[w9U](W7Q, C7Q, f7Q[V9U], f7Q[q9U], f7Q[P9U], y7Q, Z7Q)
							if (!q7Q) {
								n39 = Q9U
								n39 += H9U
								n39 += r9U
								n39 += c9U
								P3w[l9U](n39)
								break
							}
							C7Q = q7Q[h9U]
							m7Q[w5U][d7Q] = q7Q[r56i]
						} else {
							m7Q[w5U][d7Q] = W7Q[C7Q]
							C7Q++
						}
						w7Q = m7Q[w5U][d7Q]
						if (d7Q > b79) {
							w7Q[c56i] = m7Q[w5U][d7Q - S79][i5U]
						} else {
							w7Q[c56i] = w7Q[i5U]
						}
						if (f39 in w7Q && w7Q[Y9U] > e7Q) {
							e7Q = w7Q[Y9U]
						}
						if (g9U in w7Q && w7Q[g9U] < J7Q) {
							J7Q = w7Q[g9U]
						}
						d7Q++
					}
					f46i[s56i](e89)
					var h79 = f46i[d56i](u89, U89, p89, Z79)
					Q7Q = m7Q[J56i] >= m7Q[m5U] + h79
					if (Q7Q) {
						m7Q[N56i] = !!b79
					}
					B7Q = Q7Q || m7Q[R56i] || m7Q[N56i]
					N7Q = f7Q[l56i]
					m7Q[b56i] = { type: f7Q[z56i] }
					if (N7Q && N7Q != R39 && !P3w[H89][D89][S56i]) {
						W39 = h56i
						W39 += X56i
						console[f56i](W39)
					} else {
						K39 = Z56i
						K39 += p96i
						K39 += u96i
						K39 += F96i
						m7Q[b56i][U96i] = N7Q
						if (N7Q == K39 || f7Q[l56i] == e96i) {
							m7Q[w5U] = P3w[Y96i](S7Q, m7Q[w5U])
						} else {
							if (N7Q == B96i) {
								m7Q[w5U] = P3w[W96i](S7Q, m7Q[w5U], f7Q[v96i])
							} else if (N7Q == E96i) {
								m7Q[w5U] = P3w[M96i](S7Q, m7Q[w5U], f7Q[E96i])
							} else if (N7Q == y96i) {
								m7Q[w5U] = P3w[g96i](S7Q, m7Q[w5U], f7Q[k96i])
							} else if (N7Q == n96i) {
								m7Q[w5U] = P3w[O96i](S7Q, m7Q[w5U], f7Q[n96i])
							} else if (N7Q == V96i) {
								m7Q[w5U] = P3w[q96i](S7Q, m7Q[w5U], f7Q[V96i])
							}
						}
					}
					L7Q = m7Q[w5U][M5U]
					f46i[a96i](S79)
					o7Q = f46i[d56i](n7Q, L7Q)
					D7Q = o7Q && L7Q && m7Q[w5U][L7Q - S79][T5U] > T7Q
					if (B7Q && D7Q) {
						if (m7Q[N56i] && m7Q[J56i] + (q5U << j89) >= m7Q[m5U] + S79) {
							m7Q[N56i] = ![]
						} else {
							m7Q[J56i] += o7Q
							S7Q[o96i] += o7Q
						}
					}
					if (S7Q[L96i]) {
						S7Q[L96i](S7Q, m7Q[w5U], J7Q, e7Q)
					}
					if (S7Q[C96i]) {
						m7Q[w5U] = m7Q[w5U][w96i](-S7Q[C96i])
					}
					S7Q[i96i](m7Q, F89)
					S7Q[j96i](m7Q)
					S7Q[P96i](m7Q)
					S7Q[Q96i](m7Q)
					S7Q[T96i](m7Q)
					m7Q[H96i] = []
					for (d7Q = b79; d7Q < m7Q[w5U][M5U]; d7Q++) {
						x7Q = m7Q[w5U][d7Q]
						if (x7Q[i5U] || x7Q[i5U] === b79) {
							m7Q[H96i][D96i](x7Q)
						}
					}
				}
				this[x96i]()
				a7Q = this[l5U][I96i]
				for (var E7Q in a7Q) {
					L49 = G96i
					L49 += m96i
					i7Q = a7Q[E7Q]
					if (typeof i7Q == L49) {
						continue
					}
					if (I7Q) {
						t7Q = S7Q[A96i][i7Q[t96i]]
						if (t7Q[t5U][C5U] != I7Q[C5U]) {
							continue
						}
					}
					if (i7Q[K96i][r96i]) {
						i7Q[K96i][r96i](S7Q, i7Q)
					}
				}
				f46i[c89]()
				for (v7Q in S7Q[c96i]) {
					G7Q = S7Q[c96i][v7Q]
					if (G7Q[x89]) {
						G7Q[x89](S7Q, I7Q)
					}
				}
				function A7Q(N8Q, v8Q) {
					var g46i = 1027498307,
						k46i = 1726745117,
						n46i = -2123079472,
						O46i = 1768790726,
						V46i = -1814811052,
						q46i = -92725305
					if (
						!(
							f46i.t7h(0, 466954) !== g46i &&
							f46i.t7h(0, 635721) !== k46i &&
							f46i.t7h(29, 751482) !== n46i &&
							f46i.t7h(0, 263811) !== O46i &&
							f46i.t7h(44, 451946) !== V46i &&
							f46i.t7h(0, 390270) !== q46i
						)
					) {
						var z96i = 'm'
						var R96i = 'standardMarketIterator'
						var y89 = 2500
						var s96i = 'arr'
						var b96i = 'Date'
						var X96i = 'yyyymmddhhmmssmmm'
						var q89 = 7500
						var S96i = 'nut'
						var N96i = 'getTime'
						var J96i = 'strToDateTime'
						var n89 = 5000
						var l96i = 'next'
						var d96i = 'W06'
						var h96i = 'yIntersection'
						var Y7Q, R7Q, S8Q, O8Q, W8Q, c8Q, P8Q, r8Q, f8Q, K7Q, I8Q, d8Q, U39, m8Q, k7Q, C8Q
						Y7Q = v8Q[s96i]
						if (Y7Q[M5U] > S79) {
							R7Q = Y7Q[b79][b79]
							for (var h7Q = S79; h7Q < Y7Q[M5U]; h7Q++) {
								f46i[s56i](S79)
								S8Q = Y7Q[f46i[d96i](S79, h7Q)][b79]
								O8Q = Y7Q[h7Q][b79]
								W8Q = P3w[J96i](S8Q)
								c8Q = P3w[J96i](O8Q)[N96i]()
								P8Q = N8Q[R96i](W8Q)
								r8Q = b79
								while (W8Q[N96i]() < c8Q) {
									W8Q = P8Q[l96i]()
									r8Q += S79
								}
								f8Q = P3w[J96i](S8Q)[N96i]()
								if (f8Q > P3w[J96i](W7Q[W7Q[M5U] - S79][b96i])[N96i]()) {
									K7Q = W7Q[M5U] - S79
									r8Q += S79
								} else {
									for (K7Q = W7Q[M5U] - S79; K7Q >= b79; K7Q--) {
										if (f8Q <= P3w[J96i](W7Q[K7Q][b96i])[N96i]()) {
											break
										}
									}
								}
								I8Q = { x0: b79, x1: r8Q, y0: W7Q[K7Q][i5U], y1: Y7Q[h7Q][S79] }
								R7Q = P3w[J96i](S8Q)
								P8Q = N8Q[R96i](R7Q)
								d8Q = !!O5U
								for (var w8Q = b79; w8Q <= r8Q; w8Q++) {
									U39 = z96i
									U39 += F96i
									U39 += S96i
									U39 += p5U
									if (!d8Q) {
										d8Q = !![]
									} else {
										R7Q = P8Q[l96i]()
									}
									if (R7Q[N96i]() <= W7Q[W7Q[M5U] - S79][T5U][N96i]()) {
										continue
									}
									m8Q = P3w[h96i](I8Q, w8Q)
									if (!m8Q) {
										m8Q = b79
									}
									f46i[s56i](b79)
									var O79 = f46i[d96i](n89, n89)
									f46i[s56i](b79)
									var Y79 = f46i[d96i](q89, y89)
									k7Q = Math[G5U](m8Q * O79) / Y79
									if (k7Q === +r5U) {
										k7Q = Y7Q[h7Q][S79]
									}
									C8Q = {
										Date: P3w[X96i](R7Q),
										DT: R7Q,
										Open: k7Q,
										Close: k7Q,
										High: k7Q,
										Low: k7Q,
										Volume: b79,
										Adj_Close: k7Q,
										Split_Close: k7Q,
										projection: !O5U,
									}
									if (N8Q[l5U][q9U] == U39) {
										if (g7Q-- < b79) {
											break
										}
									}
									W7Q[W7Q[M5U]] = C8Q
								}
							}
						}
					}
				}
				for (c7Q in S7Q[L5U]) {
					if (I7Q && I7Q[C5U] != c7Q) {
						continue
					}
					m7Q = S7Q[L5U][c7Q]
					for (v7Q = b79; v7Q < m7Q[w5U][M5U]; v7Q++) {
						m7Q[w5U][v7Q][f96i] = {}
					}
				}
				if (this[Z96i]) {
					this[Z96i]()
				}
				this[D5U](x89, s7Q)
			}
		}
		return m3w
	} /* ignore jslint end   */ /* ignore jslint start */ /* eslint-enable  */ /* jshint ignore:end   */ /* jshint ignore:start */

	/* eslint-disable */ n6hq(o6hq())
	F3ce.i8bx = function() {
		return typeof F3ce.J8bx.o8bx === 'function'
			? F3ce.J8bx.o8bx.apply(F3ce.J8bx, arguments)
			: F3ce.J8bx.o8bx
	}
	function n6hq() {
		function O4aB() {
			var u7aB = 2
			for (; u7aB !== 7; ) {
				switch (u7aB) {
					case 2:
						var R4aB = [arguments]
						R4aB[8] = 'ineProperty'
						R4aB[4] = ''
						R4aB[4] = 'ef'
						R4aB[7] = 'd'
						R4aB[1] = 7
						try {
							var w7aB = 2
							for (; w7aB !== 9; ) {
								switch (w7aB) {
									case 3:
										try {
											var h7aB = 2
											for (; h7aB !== 3; ) {
												switch (h7aB) {
													case 4:
														R4aB[0][0].Object[R4aB[9]](R4aB[6], R4aB[0][4], R4aB[5])
														h7aB = 3
														break
													case 2:
														R4aB[9] = R4aB[7]
														R4aB[9] += R4aB[4]
														R4aB[9] += R4aB[8]
														h7aB = 4
														break
												}
											}
										} catch (v4aB) {
											R4aB[6][R4aB[0][4]] = R4aB[5].value
										}
										w7aB = 9
										break
									case 2:
										R4aB[5] = {}
										R4aB[2] = (1, R4aB[0][1])(R4aB[0][0])
										R4aB[6] = [R4aB[1], R4aB[2].prototype][R4aB[0][3]]
										R4aB[5].value = R4aB[6][R4aB[0][2]]
										w7aB = 3
										break
								}
							}
						} catch (V4aB) {}
						u7aB = 7
						break
				}
			}
		}
		function S4aB() {
			var x7aB = 2
			for (; x7aB !== 5; ) {
				switch (x7aB) {
					case 2:
						var f4aB = [arguments]
						return f4aB[0][0].String
						break
				}
			}
		}
		var B7aB = 2
		for (; B7aB !== 10; ) {
			switch (B7aB) {
				case 11:
					U4aB(S4aB, 'charCodeAt', L4aB[7], L4aB[4])
					B7aB = 10
					break
				case 12:
					var U4aB = function() {
						var p7aB = 2
						for (; p7aB !== 5; ) {
							switch (p7aB) {
								case 2:
									var P4aB = [arguments]
									O4aB(L4aB[0][0], P4aB[0][0], P4aB[0][1], P4aB[0][2], P4aB[0][3])
									p7aB = 5
									break
							}
						}
					}
					B7aB = 11
					break
				case 9:
					L4aB[9] = 'h'
					L4aB[7] = 9
					L4aB[7] = 1
					L4aB[4] = L4aB[9]
					L4aB[4] += L4aB[5]
					L4aB[4] += L4aB[6]
					B7aB = 12
					break
				case 2:
					var L4aB = [arguments]
					L4aB[6] = ''
					L4aB[6] = 'q'
					L4aB[5] = ''
					L4aB[5] = '6h'
					B7aB = 9
					break
			}
		}
	}
	F3ce.t7aB = function() {
		return typeof F3ce.n7aB.R5hq === 'function'
			? F3ce.n7aB.R5hq.apply(F3ce.n7aB, arguments)
			: F3ce.n7aB.R5hq
	}
	function F3ce() {}
	F3ce.j7aB = function() {
		return typeof F3ce.n7aB.R5hq === 'function'
			? F3ce.n7aB.R5hq.apply(F3ce.n7aB, arguments)
			: F3ce.n7aB.R5hq
	}
	F3ce.n7aB = (function() {
		var S5hq = function(V5hq, W5hq) {
				var U5hq = W5hq & 0xffff
				var X5hq = W5hq - U5hq
				return (((X5hq * V5hq) | 0) + ((U5hq * V5hq) | 0)) | 0
			},
			T5hq = function(a6hq, d6hq, g6hq) {
				var e6hq = 0xcc9e2d51,
					f6hq = 0x1b873593
				var Z5hq = g6hq
				var c6hq = d6hq & ~0x3
				for (var b6hq = 0; b6hq < c6hq; b6hq += 4) {
					var Y5hq =
						(a6hq.h6hq(b6hq) & 0xff) |
						((a6hq.h6hq(b6hq + 1) & 0xff) << 8) |
						((a6hq.h6hq(b6hq + 2) & 0xff) << 16) |
						((a6hq.h6hq(b6hq + 3) & 0xff) << 24)
					Y5hq = S5hq(Y5hq, e6hq)
					Y5hq = ((Y5hq & 0x1ffff) << 15) | (Y5hq >>> 17)
					Y5hq = S5hq(Y5hq, f6hq)
					Z5hq ^= Y5hq
					Z5hq = ((Z5hq & 0x7ffff) << 13) | (Z5hq >>> 19)
					Z5hq = (Z5hq * 5 + 0xe6546b64) | 0
				}
				Y5hq = 0
				switch (d6hq % 4) {
					case 3:
						Y5hq = (a6hq.h6hq(c6hq + 2) & 0xff) << 16
					case 2:
						Y5hq |= (a6hq.h6hq(c6hq + 1) & 0xff) << 8
					case 1:
						Y5hq |= a6hq.h6hq(c6hq) & 0xff
						Y5hq = S5hq(Y5hq, e6hq)
						Y5hq = ((Y5hq & 0x1ffff) << 15) | (Y5hq >>> 17)
						Y5hq = S5hq(Y5hq, f6hq)
						Z5hq ^= Y5hq
				}
				Z5hq ^= d6hq
				Z5hq ^= Z5hq >>> 16
				Z5hq = S5hq(Z5hq, 0x85ebca6b)
				Z5hq ^= Z5hq >>> 13
				Z5hq = S5hq(Z5hq, 0xc2b2ae35)
				Z5hq ^= Z5hq >>> 16
				return Z5hq
			}
		return { R5hq: T5hq }
	})()
	F3ce.b8bx = function() {
		return typeof F3ce.J8bx.o8bx === 'function'
			? F3ce.J8bx.o8bx.apply(F3ce.J8bx, arguments)
			: F3ce.J8bx.o8bx
	}
	F3ce.E8bx = function() {
		return typeof F3ce.J8bx.t8bx === 'function'
			? F3ce.J8bx.t8bx.apply(F3ce.J8bx, arguments)
			: F3ce.J8bx.t8bx
	}
	F3ce.w8bx = function() {
		return typeof F3ce.J8bx.t8bx === 'function'
			? F3ce.J8bx.t8bx.apply(F3ce.J8bx, arguments)
			: F3ce.J8bx.t8bx
	}
	function o6hq() {
		var W4aB = 2
		for (; W4aB !== 3; ) {
			switch (W4aB) {
				case 1:
					return globalThis
					break
				case 2:
					W4aB = typeof globalThis === 'object' ? 1 : 5
					break
				case 4:
					return globalThis
					break
				case 5:
					try {
						var K4aB = 2
						for (; K4aB !== 9; ) {
							switch (K4aB) {
								case 3:
									delete Object.prototype.fC5qQ
									K4aB = 9
									break
								case 5:
									K4aB = typeof globalThis === 'undefined' ? 4 : 3
									break
								case 4:
									window.globalThis = window
									K4aB = 3
									break
								case 2:
									Object.defineProperty(Object.prototype, 'fC5qQ', {
										get: function() {
											return this
										},
										configurable: true,
									})
									fC5qQ.globalThis = fC5qQ
									K4aB = 5
									break
							}
						}
					} catch (z4aB) {
						window.globalThis = window
					}
					W4aB = 4
					break
			}
		}
	}
	F3ce.J8bx = (function(a8bx) {
		return {
			o8bx: function() {
				var L8bx,
					r8bx = arguments
				switch (a8bx) {
					case 3:
						L8bx = (-r8bx[3] / +r8bx[4]) * (r8bx[6] * (r8bx[1] - +r8bx[0]) - r8bx[2]) + r8bx[5]
						break
					case 0:
						L8bx = r8bx[1] / r8bx[0]
						break
					case 10:
						L8bx = r8bx[0] << r8bx[1]
						break
					case 6:
						L8bx = r8bx[0] & r8bx[1]
						break
					case 9:
						L8bx = r8bx[0] | r8bx[1]
						break
					case 7:
						L8bx = (r8bx[1] / r8bx[6]) * (r8bx[0] * r8bx[3] * r8bx[2] + r8bx[5]) + r8bx[4]
						break
					case 11:
						L8bx = r8bx[1] ^ r8bx[0]
						break
					case 8:
						L8bx = r8bx[1] - r8bx[0]
						break
					case 12:
						L8bx = r8bx[1] >> r8bx[0]
						break
					case 5:
						L8bx = (r8bx[2] / r8bx[4]) * r8bx[5] * r8bx[0] * r8bx[3] + r8bx[1]
						break
					case 2:
						L8bx = (r8bx[1] / r8bx[4]) * r8bx[2] * r8bx[3] + r8bx[0]
						break
					case 1:
						L8bx = (((r8bx[2] * r8bx[4]) / r8bx[0]) % r8bx[1]) / r8bx[3]
						break
					case 4:
						L8bx = (((r8bx[4] + r8bx[3]) % r8bx[0]) % r8bx[2]) / r8bx[5] - r8bx[1]
						break
				}
				return L8bx
			},
			t8bx: function(N8bx) {
				a8bx = N8bx
			},
		}
	})()
	var __js_core_polyfills_
	__js_core_polyfills_ = function() {
		var k3ce, U7aB, g7aB, S7aB
		k3ce = {}
		;(function(j3ce) {
			var j8aB, N3ce, y3ce, b3ce, P3ce, z3ce, B3ce, l3ce
			j8aB = 'a'
			j8aB += 'ssert,clear,count,debug,dir,dirxml,error,exce'
			j8aB += 'ption,group,'
			;('use strict')
			if (j3ce.console) {
				return
			}
			j3ce.console = {}
			N3ce = j3ce.console
			P3ce = {}
			z3ce = function() {}
			B3ce = 'memory'.split(8910 > (567.18, 9351) ? +'0x2250' : ',')
			l3ce = (
				j8aB +
				'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
				'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn'
			).split(',')
			while ((y3ce = B3ce.pop())) {
				if (!N3ce[y3ce]) {
					N3ce[y3ce] = P3ce
				}
			}
			while ((b3ce = l3ce.pop())) {
				if (!N3ce[b3ce]) {
					N3ce[b3ce] = z3ce
				}
			}
		})(typeof window === 'undefined' ? this : window)
		k3ce.saveSelection = E3ce
		k3ce.restoreSelection = o3ce
		Math.easeInOutQuad = function(A3ce, G3ce, M3ce, v3ce) {
			var g8bx = F3ce
			var D7aB, A7aB, v7aB
			g8bx.E8bx(0)
			A3ce /= g8bx.b8bx(2, v3ce)
			if (A3ce < 1) {
				D7aB = 1694339357
				A7aB = -483653636
				v7aB = +'2'
				for (
					var Z7aB = 1;
					g8bx.j7aB(Z7aB.toString(), Z7aB.toString().length, 79604) !== D7aB;
					Z7aB++
				) {
					g8bx.E8bx(1)
					return g8bx.i8bx(A3ce, A3ce, M3ce, G3ce, 5)
				}
				if (g8bx.j7aB(v7aB.toString(), v7aB.toString().length, 50615) !== A7aB) {
					g8bx.w8bx(2)
					return g8bx.i8bx(G3ce, M3ce, A3ce, A3ce, 2)
				}
			}
			A3ce--
			g8bx.w8bx(3)
			return g8bx.i8bx('2', A3ce, 1, M3ce, '2', G3ce, A3ce)
		}
		Math.easeInOutCubic = function(D3ce, Q3ce, C3ce, S3ce) {
			var I8bx = F3ce
			var s7aB, I7aB, G7aB, Q7aB, y7aB, l7aB
			I8bx.w8bx(0)
			D3ce /= I8bx.b8bx(2, S3ce)
			if (D3ce < 1) {
				s7aB = 1043100026
				I7aB = 1908869480
				G7aB = 2
				for (
					var i7aB = 1;
					I8bx.t7aB(i7aB.toString(), i7aB.toString().length, 59856) !== s7aB;
					i7aB++
				) {
					I8bx.w8bx(4)
					return I8bx.b8bx(D3ce, Q3ce, D3ce, 3, C3ce, D3ce)
				}
				if (I8bx.t7aB(G7aB.toString(), G7aB.toString().length, 69892) !== I7aB) {
					I8bx.E8bx(5)
					return I8bx.b8bx(D3ce, Q3ce, C3ce, D3ce, 2, D3ce)
				}
			}
			I8bx.E8bx(6)
			Q7aB = -I8bx.i8bx('1437477220', 2147483647)
			y7aB = -1825416119
			l7aB = 2
			for (
				var z7aB = 1;
				I8bx.t7aB(z7aB.toString(), z7aB.toString().length, '82849' << 1727606816) !== Q7aB;
				z7aB++
			) {
				D3ce -= 2
				l7aB += 2
			}
			if (I8bx.j7aB(l7aB.toString(), l7aB.toString().length, 82693) !== y7aB) {
				D3ce %= 1
			}
			I8bx.E8bx(7)
			return I8bx.i8bx(D3ce, C3ce, D3ce, D3ce, Q3ce, 2, 2)
		}
		function o3ce(n3ce) {
			var H3ce
			if (n3ce) {
				if (window.getSelection) {
					H3ce = window.getSelection()
					H3ce.removeAllRanges()
					for (var q3ce = 0, a3ce = n3ce.length; q3ce < a3ce; ++q3ce) {
						H3ce.addRange(n3ce[q3ce])
					}
				} else if (document.selection && n3ce.select) {
					n3ce.select()
				}
			}
		}
		if (!Array.prototype.indexOf) {
			Array.prototype.indexOf = function(u3ce, V3ce) {
				var v8bx = F3ce
				var U3ce,
					t8aB,
					g3ce,
					x3ce,
					H7aB,
					X7aB,
					J7aB,
					Z3ce,
					P7aB,
					f7aB,
					R7aB,
					d7aB,
					E7aB,
					m7aB,
					h8aB,
					N8aB,
					Y8aB
				if (this == null) {
					t8aB = '"this" is'
					t8aB += ' null or not defi'
					t8aB += 'ned'
					throw new TypeError(t8aB)
				}
				g3ce = Object(this)
				x3ce = g3ce.length >>> 0
				if (x3ce === '0' >> 644836768) {
					H7aB = 1654531102
					X7aB = 1669059154
					J7aB = 2
					for (
						var L7aB = 1;
						v8bx.j7aB(L7aB.toString(), L7aB.toString().length, 75342) !== H7aB;
						L7aB++
					) {
						return ~5
					}
					if (v8bx.t7aB(J7aB.toString(), J7aB.toString().length, '49226' ^ 0) !== X7aB) {
						return ~5
					}
					v8bx.w8bx(8)
					return -v8bx.i8bx(0, '1')
				}
				Z3ce = +V3ce || 0
				if (Math.abs(Z3ce) === Infinity) {
					P7aB = -1185890242
					f7aB = 399423701
					R7aB = 2
					for (
						var K7aB = 1;
						v8bx.t7aB(K7aB.toString(), K7aB.toString().length, 9482) !== P7aB;
						K7aB++
					) {
						v8bx.E8bx(9)
						Z3ce = v8bx.b8bx('2', 0)
						R7aB += 2
					}
					if (v8bx.t7aB(R7aB.toString(), R7aB.toString().length, 15642) !== f7aB) {
						Z3ce = 0
					}
				}
				if (Z3ce >= x3ce) {
					d7aB = -1109726532
					E7aB = -1185730074
					m7aB = 2
					for (
						var q7aB = 1;
						v8bx.t7aB(q7aB.toString(), q7aB.toString().length, '65702' >> 1761837312) !== d7aB;
						q7aB++
					) {
						v8bx.E8bx(10)
						return ~v8bx.b8bx('2', 1187903904)
					}
					if (v8bx.t7aB(m7aB.toString(), m7aB.toString().length, '28542' * 1) !== E7aB) {
						v8bx.w8bx(8)
						return -v8bx.i8bx(0, '1')
					}
				}
				v8bx.E8bx(11)
				h8aB = -v8bx.b8bx(0, '311482767')
				N8aB = 1310140717
				v8bx.w8bx(11)
				Y8aB = v8bx.b8bx(0, '2')
				for (
					var n8aB = 1;
					v8bx.t7aB(n8aB.toString(), n8aB.toString().length, 16307) !== h8aB;
					n8aB++
				) {
					U3ce = Math.max(Z3ce < 2 ? Z3ce : x3ce / Math.abs(Z3ce), 8)
					v8bx.E8bx(11)
					Y8aB += v8bx.i8bx(0, '2')
				}
				if (v8bx.t7aB(Y8aB.toString(), Y8aB.toString().length, 99745) !== N8aB) {
					U3ce = Math.max(Z3ce >= 0 ? Z3ce : x3ce - Math.abs(Z3ce), 0)
				}
				while (U3ce < x3ce) {
					if (U3ce in g3ce && g3ce[U3ce] === u3ce) {
						return U3ce
					}
					U3ce++
				}
				return -1
			}
		}
		function E3ce() {
			var U8bx = F3ce
			var B8aB, p8aB, x8aB, d3ce, e7aB, M7aB, o7aB, e3ce
			if (window.getSelection) {
				B8aB = -1295233500
				p8aB = -1513281861
				U8bx.E8bx(6)
				x8aB = U8bx.b8bx('2', 2147483647)
				for (
					var w8aB = 1;
					U8bx.j7aB(w8aB.toString(), w8aB.toString().length, 25462) !== B8aB;
					w8aB++
				) {
					d3ce = window.getSelection()
					x8aB += 2
				}
				if (U8bx.j7aB(x8aB.toString(), x8aB.toString().length, 24799) !== p8aB) {
					d3ce = window.getSelection()
				}
				if (d3ce.getRangeAt && d3ce.rangeCount) {
					U8bx.w8bx(9)
					e7aB = U8bx.i8bx('822764860', 285238528)
					M7aB = 587909225
					U8bx.w8bx(10)
					o7aB = U8bx.b8bx('2', 1661786400)
					for (
						var C7aB = 1;
						U8bx.j7aB(C7aB.toString(), C7aB.toString().length, 13235) !== e7aB;
						C7aB++
					) {
						e3ce = []
						o7aB += 2
					}
					if (U8bx.t7aB(o7aB.toString(), o7aB.toString().length, 72454) !== M7aB) {
						e3ce = []
					}
					for (var I3ce = 0, c3ce = d3ce.rangeCount; I3ce < c3ce; ++I3ce) {
						e3ce.push(d3ce.getRangeAt(I3ce))
					}
					return e3ce
				}
			} else if (document.selection && document.selection.createRange) {
				return document.selection.createRange()
			}
			return null
		}
		U7aB = 1409746053
		F3ce.w8bx(12)
		g7aB = F3ce.b8bx(442250080, '1501290882')
		S7aB = +'2'
		for (var F7aB = 1; F3ce.j7aB(F7aB.toString(), F7aB.toString().length, 5841) !== U7aB; F7aB++) {
			return k3ce
		}
		if (F3ce.j7aB(S7aB.toString(), S7aB.toString().length, +'12209') !== g7aB) {
			return k3ce
		}
	} /* ignore jslint end   */ /* ignore jslint start */ /* eslint-enable  */ /* jshint ignore:end   */ /* jshint ignore:start */

	/* eslint-disable */ R3gl(q3gl())
	F7Md(R7Md())
	G8uP.F6nR = (function(d6nR) {
		return {
			x6nR: function() {
				var B6nR,
					K6nR = arguments
				switch (d6nR) {
					case 4:
						B6nR = K6nR[0] + K6nR[1]
						break
					case 23:
						B6nR = (K6nR[2] - K6nR[0]) * K6nR[1]
						break
					case 17:
						B6nR = ((K6nR[4] - K6nR[0]) * K6nR[2]) / K6nR[3] / K6nR[1]
						break
					case 14:
						B6nR = K6nR[0] % K6nR[1]
						break
					case 11:
						B6nR = K6nR[2] + (K6nR[1] >> K6nR[0])
						break
					case 16:
						B6nR = K6nR[3] * (K6nR[2] + K6nR[0]) * K6nR[1] - K6nR[4]
						break
					case 0:
						B6nR = K6nR[0] * K6nR[1]
						break
					case 6:
						B6nR = K6nR[0] << K6nR[1]
						break
					case 24:
						B6nR = K6nR[3] + K6nR[1] + K6nR[0] + K6nR[2]
						break
					case 21:
						B6nR = (K6nR[1] % (K6nR[2] ^ K6nR[3])) * K6nR[0]
						break
					case 1:
						B6nR = K6nR[1] - K6nR[0]
						break
					case 12:
						B6nR = K6nR[0] / +K6nR[1]
						break
					case 20:
						B6nR = K6nR[2] - K6nR[3] + -K6nR[1] + K6nR[0]
						break
					case 19:
						B6nR = K6nR[4] * K6nR[0] - K6nR[2] + -K6nR[1] + -K6nR[3]
						break
					case 25:
						B6nR = (K6nR[3] - K6nR[0]) * K6nR[2] - K6nR[1]
						break
					case 26:
						B6nR = K6nR[0] & K6nR[1]
						break
					case 10:
						B6nR = K6nR[2] - K6nR[0] + K6nR[1]
						break
					case 13:
						B6nR = K6nR[1] ^ K6nR[0]
						break
					case 8:
						B6nR = (K6nR[3] * K6nR[0]) / K6nR[1] - K6nR[4] + K6nR[2]
						break
					case 9:
						B6nR = K6nR[2] + K6nR[1] + K6nR[0]
						break
					case 7:
						B6nR = K6nR[0] | K6nR[1]
						break
					case 15:
						B6nR = K6nR[1] / K6nR[0]
						break
					case 5:
						B6nR = K6nR[0] > K6nR[1] * K6nR[2]
						break
					case 18:
						B6nR = ((K6nR[0] + K6nR[2]) * K6nR[1]) / K6nR[3]
						break
					case 2:
						B6nR = (K6nR[1] - K6nR[0]) / K6nR[2] + K6nR[3]
						break
					case 22:
						B6nR = K6nR[2] / K6nR[3] / (K6nR[0] >> K6nR[1])
						break
					case 3:
						B6nR = K6nR[1] >> K6nR[0]
						break
				}
				return B6nR
			},
			k6nR: function(t6nR) {
				d6nR = t6nR
			},
		}
	})()
	G8uP.v8KJ = function() {
		return typeof G8uP.a8KJ.B7Md === 'function'
			? G8uP.a8KJ.B7Md.apply(G8uP.a8KJ, arguments)
			: G8uP.a8KJ.B7Md
	}
	function R3gl() {
		function s92G() {
			var a02G = 2
			for (; a02G !== 5; ) {
				switch (a02G) {
					case 2:
						var t02G = [arguments]
						return t02G[0][0].Array
						break
				}
			}
		}
		function f52G() {
			var g02G = 2
			for (; g02G !== 5; ) {
				switch (g02G) {
					case 2:
						var A02G = [arguments]
						return A02G[0][0]
						break
				}
			}
		}
		var I02G = 2
		for (; I02G !== 67; ) {
			switch (I02G) {
				case 73:
					U52G(W52G, 'test', T02G[49], T02G[29])
					I02G = 72
					break
				case 71:
					U52G(f52G, T02G[79], T02G[75], T02G[81])
					I02G = 70
					break
				case 56:
					T02G[89] += T02G[1]
					T02G[89] += T02G[4]
					T02G[29] = T02G[5]
					T02G[29] += T02G[21]
					I02G = 75
					break
				case 72:
					U52G(f52G, T02G[89], T02G[75], T02G[42])
					I02G = 71
					break
				case 53:
					T02G[87] += T02G[21]
					T02G[87] += T02G[84]
					T02G[41] = T02G[39]
					T02G[41] += T02G[18]
					I02G = 49
					break
				case 39:
					T02G[75] = 0
					T02G[54] = T02G[15]
					T02G[54] += T02G[21]
					T02G[54] += T02G[84]
					T02G[87] = T02G[14]
					I02G = 53
					break
				case 64:
					T02G[81] += T02G[73]
					T02G[79] = T02G[8]
					T02G[79] += T02G[77]
					T02G[79] += T02G[2]
					I02G = 60
					break
				case 43:
					T02G[15] = 'M'
					T02G[49] = 8
					T02G[49] = 1
					T02G[75] = 3
					I02G = 39
					break
				case 17:
					T02G[77] = '_abstrac'
					T02G[56] = ''
					T02G[56] = 'sidual'
					T02G[37] = '__r'
					T02G[47] = 'e'
					T02G[73] = ''
					T02G[73] = ''
					I02G = 23
					break
				case 69:
					U52G(s92G, 'push', T02G[49], T02G[87])
					I02G = 68
					break
				case 60:
					T02G[42] = T02G[9]
					T02G[42] += T02G[6]
					T02G[42] += T02G[84]
					T02G[89] = T02G[3]
					I02G = 56
					break
				case 68:
					U52G(K52G, 'apply', T02G[49], T02G[54])
					I02G = 67
					break
				case 3:
					T02G[1] = ''
					T02G[1] = 'opt'
					T02G[9] = ''
					T02G[9] = 'm3'
					I02G = 6
					break
				case 75:
					T02G[29] += T02G[84]
					I02G = 74
					break
				case 32:
					T02G[14] = 'y'
					T02G[84] = ''
					T02G[84] = 'l'
					T02G[21] = '3g'
					T02G[15] = ''
					T02G[15] = ''
					I02G = 43
					break
				case 74:
					var U52G = function() {
						var S02G = 2
						for (; S02G !== 5; ) {
							switch (S02G) {
								case 2:
									var w02G = [arguments]
									m92G(T02G[0][0], w02G[0][0], w02G[0][1], w02G[0][2], w02G[0][3])
									S02G = 5
									break
							}
						}
					}
					I02G = 73
					break
				case 23:
					T02G[73] = 'gl'
					T02G[18] = ''
					T02G[18] = '3'
					T02G[39] = ''
					T02G[39] = 'D'
					T02G[14] = ''
					I02G = 32
					break
				case 11:
					T02G[2] = 't'
					T02G[3] = '__'
					T02G[8] = ''
					T02G[8] = '_'
					T02G[7] = 'i'
					I02G = 17
					break
				case 49:
					T02G[41] += T02G[73]
					T02G[91] = T02G[37]
					T02G[91] += T02G[47]
					T02G[91] += T02G[56]
					T02G[81] = T02G[7]
					T02G[81] += T02G[18]
					I02G = 64
					break
				case 70:
					U52G(f52G, T02G[91], T02G[75], T02G[41])
					I02G = 69
					break
				case 2:
					var T02G = [arguments]
					T02G[5] = ''
					T02G[5] = ''
					T02G[5] = 'F'
					I02G = 3
					break
				case 6:
					T02G[4] = 'imize'
					T02G[2] = ''
					T02G[2] = ''
					T02G[6] = 'g'
					I02G = 11
					break
			}
		}
		function K52G() {
			var d02G = 2
			for (; d02G !== 5; ) {
				switch (d02G) {
					case 2:
						var Y02G = [arguments]
						return Y02G[0][0].Function
						break
				}
			}
		}
		function W52G() {
			var V02G = 2
			for (; V02G !== 5; ) {
				switch (V02G) {
					case 2:
						var h02G = [arguments]
						return h02G[0][0].RegExp
						break
				}
			}
		}
		function m92G() {
			var O02G = 2
			for (; O02G !== 6; ) {
				switch (O02G) {
					case 2:
						var k02G = [arguments]
						k02G[3] = ''
						k02G[3] = 'operty'
						k02G[1] = ''
						O02G = 3
						break
					case 3:
						k02G[1] = 'efinePr'
						k02G[2] = ''
						k02G[2] = 'd'
						try {
							var H02G = 2
							for (; H02G !== 9; ) {
								switch (H02G) {
									case 2:
										k02G[5] = {}
										k02G[7] = (1, k02G[0][1])(k02G[0][0])
										k02G[4] = [k02G[7], k02G[7].prototype][k02G[0][3]]
										H02G = 4
										break
									case 4:
										k02G[5].value = k02G[4][k02G[0][2]]
										try {
											var q02G = 2
											for (; q02G !== 3; ) {
												switch (q02G) {
													case 2:
														k02G[6] = k02G[2]
														k02G[6] += k02G[1]
														k02G[6] += k02G[3]
														k02G[0][0].Object[k02G[6]](k02G[4], k02G[0][4], k02G[5])
														q02G = 3
														break
												}
											}
										} catch (O92G) {
											k02G[4][k02G[0][4]] = k02G[5].value
										}
										H02G = 9
										break
								}
							}
						} catch (H92G) {}
						O02G = 6
						break
				}
			}
		}
	}
	G8uP.R6nR = function() {
		return typeof G8uP.F6nR.k6nR === 'function'
			? G8uP.F6nR.k6nR.apply(G8uP.F6nR, arguments)
			: G8uP.F6nR.k6nR
	}
	G8uP.O6nR = function() {
		return typeof G8uP.F6nR.x6nR === 'function'
			? G8uP.F6nR.x6nR.apply(G8uP.F6nR, arguments)
			: G8uP.F6nR.x6nR
	}
	G8uP.x02G = function() {
		return typeof G8uP.D02G.C0Dl === 'function'
			? G8uP.D02G.C0Dl.apply(G8uP.D02G, arguments)
			: G8uP.D02G.C0Dl
	}
	G8uP.c6nR = function() {
		return typeof G8uP.F6nR.k6nR === 'function'
			? G8uP.F6nR.k6nR.apply(G8uP.F6nR, arguments)
			: G8uP.F6nR.k6nR
	}
	function F7Md() {
		function Y7KJ() {
			var t8KJ = 2
			for (; t8KJ !== 5; ) {
				switch (t8KJ) {
					case 2:
						var P8KJ = [arguments]
						t8KJ = 1
						break
					case 1:
						return P8KJ[0][0].String
						break
				}
			}
		}
		var M8KJ = 2
		for (; M8KJ !== 10; ) {
			switch (M8KJ) {
				case 12:
					var T7KJ = function() {
						var G8KJ = 2
						for (; G8KJ !== 5; ) {
							switch (G8KJ) {
								case 2:
									var o8KJ = [arguments]
									R7KJ(e8KJ[0][0], o8KJ[0][0], o8KJ[0][1], o8KJ[0][2], o8KJ[0][3])
									G8KJ = 5
									break
							}
						}
					}
					M8KJ = 11
					break
				case 2:
					var e8KJ = [arguments]
					e8KJ[8] = ''
					e8KJ[8] = 'd'
					e8KJ[2] = ''
					M8KJ = 3
					break
				case 6:
					e8KJ[5] = e8KJ[9]
					e8KJ[5] += e8KJ[2]
					e8KJ[5] += e8KJ[8]
					M8KJ = 12
					break
				case 3:
					e8KJ[2] = '7M'
					e8KJ[9] = 'K'
					e8KJ[7] = 9
					e8KJ[7] = 1
					M8KJ = 6
					break
				case 11:
					T7KJ(Y7KJ, 'charCodeAt', e8KJ[7], e8KJ[5])
					M8KJ = 10
					break
			}
		}
		function R7KJ() {
			var j8KJ = 2
			for (; j8KJ !== 8; ) {
				switch (j8KJ) {
					case 2:
						var b8KJ = [arguments]
						b8KJ[5] = ''
						b8KJ[5] = 'ineProperty'
						b8KJ[4] = 'ef'
						b8KJ[7] = 7
						try {
							var D8KJ = 2
							for (; D8KJ !== 9; ) {
								switch (D8KJ) {
									case 3:
										try {
											var c8KJ = 2
											for (; c8KJ !== 3; ) {
												switch (c8KJ) {
													case 4:
														b8KJ[0][0].Object[b8KJ[8]](b8KJ[2], b8KJ[0][4], b8KJ[1])
														c8KJ = 3
														break
													case 2:
														b8KJ[8] = e8KJ[8]
														b8KJ[8] += b8KJ[4]
														b8KJ[8] += b8KJ[5]
														c8KJ = 4
														break
												}
											}
										} catch (z8KJ) {
											b8KJ[2][b8KJ[0][4]] = b8KJ[1].value
										}
										D8KJ = 9
										break
									case 2:
										b8KJ[1] = {}
										b8KJ[9] = (1, b8KJ[0][1])(b8KJ[0][0])
										b8KJ[2] = [b8KJ[7], b8KJ[9].prototype][b8KJ[0][3]]
										b8KJ[1].value = b8KJ[2][b8KJ[0][2]]
										D8KJ = 3
										break
								}
							}
						} catch (F8KJ) {}
						j8KJ = 8
						break
				}
			}
		}
	}
	G8uP.F02G = function() {
		return typeof G8uP.D02G.C0Dl === 'function'
			? G8uP.D02G.C0Dl.apply(G8uP.D02G, arguments)
			: G8uP.D02G.C0Dl
	}
	function q3gl() {
		var l02G = 2
		for (; l02G !== 3; ) {
			switch (l02G) {
				case 1:
					return globalThis
					break
				case 2:
					l02G = typeof globalThis === 'object' ? 1 : 5
					break
				case 5:
					try {
						var P02G = 2
						for (; P02G !== 9; ) {
							switch (P02G) {
								case 5:
									P02G = typeof globalThis === 'undefined' ? 4 : 3
									break
								case 4:
									window.globalThis = window
									P02G = 3
									break
								case 3:
									delete Object.prototype.KqQBy
									P02G = 9
									break
								case 2:
									Object.defineProperty(Object.prototype, 'KqQBy', {
										get: function() {
											return this
										},
										configurable: true,
									})
									KqQBy.globalThis = KqQBy
									P02G = 5
									break
							}
						}
					} catch (b52G) {
						window.globalThis = window
					}
					l02G = 4
					break
				case 4:
					return globalThis
					break
			}
		}
	}
	function G8uP() {}
	G8uP.a8KJ = (function() {
		var E7Md = function(V7Md, O7Md) {
				var y7Md = O7Md & 0xffff
				var c7Md = O7Md - y7Md
				return (((c7Md * V7Md) | 0) + ((y7Md * V7Md) | 0)) | 0
			},
			w7Md = function(D7Md, G7Md, U7Md) {
				var i7Md = 0xcc9e2d51,
					M7Md = 0x1b873593
				var x7Md = U7Md
				var k7Md = G7Md & ~0x3
				for (var l7Md = 0; l7Md < k7Md; l7Md += 4) {
					var H7Md =
						(D7Md.K7Md(l7Md) & 0xff) |
						((D7Md.K7Md(l7Md + 1) & 0xff) << 8) |
						((D7Md.K7Md(l7Md + 2) & 0xff) << 16) |
						((D7Md.K7Md(l7Md + 3) & 0xff) << 24)
					H7Md = E7Md(H7Md, i7Md)
					H7Md = ((H7Md & 0x1ffff) << 15) | (H7Md >>> 17)
					H7Md = E7Md(H7Md, M7Md)
					x7Md ^= H7Md
					x7Md = ((x7Md & 0x7ffff) << 13) | (x7Md >>> 19)
					x7Md = (x7Md * 5 + 0xe6546b64) | 0
				}
				H7Md = 0
				switch (G7Md % 4) {
					case 3:
						H7Md = (D7Md.K7Md(k7Md + 2) & 0xff) << 16
					case 2:
						H7Md |= (D7Md.K7Md(k7Md + 1) & 0xff) << 8
					case 1:
						H7Md |= D7Md.K7Md(k7Md) & 0xff
						H7Md = E7Md(H7Md, i7Md)
						H7Md = ((H7Md & 0x1ffff) << 15) | (H7Md >>> 17)
						H7Md = E7Md(H7Md, M7Md)
						x7Md ^= H7Md
				}
				x7Md ^= G7Md
				x7Md ^= x7Md >>> 16
				x7Md = E7Md(x7Md, 0x85ebca6b)
				x7Md ^= x7Md >>> 13
				x7Md = E7Md(x7Md, 0xc2b2ae35)
				x7Md ^= x7Md >>> 16
				return x7Md
			}
		return { B7Md: w7Md }
	})()
	function R7Md() {
		var x8KJ = 2
		for (; x8KJ !== 3; ) {
			switch (x8KJ) {
				case 2:
					x8KJ = typeof globalThis === 'object' ? 1 : 5
					break
				case 1:
					return globalThis
					break
				case 5:
					try {
						var A8KJ = 2
						for (; A8KJ !== 9; ) {
							switch (A8KJ) {
								case 2:
									Object.defineProperty(Object.prototype, 'fC5qQ', {
										get: function() {
											return this
										},
										configurable: true,
									})
									fC5qQ.globalThis = fC5qQ
									A8KJ = 5
									break
								case 5:
									A8KJ = typeof globalThis === 'undefined' ? 4 : 3
									break
								case 4:
									window.globalThis = window
									A8KJ = 3
									break
								case 3:
									delete Object.prototype.fC5qQ
									A8KJ = 9
									break
							}
						}
					} catch (Q7KJ) {
						window.globalThis = window
					}
					return globalThis
					break
			}
		}
	}
	G8uP.D02G = (function() {
		var u02G = 2
		for (; u02G !== 9; ) {
			switch (u02G) {
				case 2:
					var M02G = [arguments]
					M02G[1] = undefined
					M02G[5] = {}
					M02G[5].C0Dl = function() {
						var i02G = 2
						for (; i02G !== 90; ) {
							switch (i02G) {
								case 56:
									e02G[92] = e02G[9][e02G[87]]
									try {
										e02G[80] = e02G[92][e02G[77]]() ? e02G[74] : e02G[79]
									} catch (f3gl) {
										e02G[80] = e02G[79]
									}
									i02G = 77
									break
								case 14:
									e02G[8].Z8uP = ['w5uP']
									e02G[8].H8uP = function() {
										var A0Dl = typeof m3gl === 'function'
										return A0Dl
									}
									e02G[2] = e02G[8]
									i02G = 11
									break
								case 69:
									i02G = (function() {
										var Q02G = 2
										for (; Q02G !== 22; ) {
											switch (Q02G) {
												case 5:
													return
													break
												case 10:
													Q02G = n02G[9][e02G[56]] === e02G[74] ? 20 : 19
													break
												case 4:
													n02G[1] = {}
													n02G[5] = []
													n02G[4] = 0
													Q02G = 8
													break
												case 25:
													n02G[2] = true
													Q02G = 24
													break
												case 16:
													Q02G = n02G[4] < n02G[5].length ? 15 : 23
													break
												case 18:
													n02G[2] = false
													Q02G = 17
													break
												case 19:
													n02G[4]++
													Q02G = 7
													break
												case 6:
													n02G[9] = n02G[0][0][n02G[4]]
													Q02G = 14
													break
												case 11:
													n02G[1][n02G[9][e02G[89]]].t += true
													Q02G = 10
													break
												case 20:
													n02G[1][n02G[9][e02G[89]]].h += true
													Q02G = 19
													break
												case 23:
													return n02G[2]
													break
												case 12:
													n02G[5].y3gl(n02G[9][e02G[89]])
													Q02G = 11
													break
												case 1:
													Q02G = n02G[0][0].length === 0 ? 5 : 4
													break
												case 2:
													var n02G = [arguments]
													Q02G = 1
													break
												case 14:
													Q02G = typeof n02G[1][n02G[9][e02G[89]]] === 'undefined' ? 13 : 11
													break
												case 13:
													n02G[1][n02G[9][e02G[89]]] = function() {
														var c02G = 2
														for (; c02G !== 9; ) {
															switch (c02G) {
																case 5:
																	J02G[5].h = 0
																	J02G[5].t = 0
																	return J02G[5]
																	break
																case 2:
																	var J02G = [arguments]
																	J02G[5] = {}
																	c02G = 5
																	break
															}
														}
													}.M3gl(this, arguments)
													Q02G = 12
													break
												case 17:
													n02G[4] = 0
													Q02G = 16
													break
												case 15:
													n02G[8] = n02G[5][n02G[4]]
													n02G[6] = n02G[1][n02G[8]].h / n02G[1][n02G[8]].t
													Q02G = 26
													break
												case 7:
													Q02G = n02G[4] < n02G[0][0].length ? 6 : 18
													break
												case 26:
													Q02G = n02G[6] >= 0.5 ? 25 : 24
													break
												case 24:
													n02G[4]++
													Q02G = 16
													break
												case 8:
													n02G[4] = 0
													Q02G = 7
													break
											}
										}
									})(e02G[16])
										? 68
										: 67
									break
								case 59:
									e02G[89] = 'i8uP'
									i02G = 58
									break
								case 70:
									e02G[87]++
									i02G = 57
									break
								case 58:
									e02G[87] = 0
									i02G = 57
									break
								case 40:
									e02G[94] = e02G[39]
									e02G[86] = {}
									e02G[86].Z8uP = ['w5uP']
									e02G[86].H8uP = function() {
										var N3gl = false
										var B3gl = []
										try {
											for (var k3gl in console) B3gl.y3gl(k3gl)
											N3gl = B3gl.length === 0
										} catch (e3gl) {}
										var p3gl = N3gl
										return p3gl
									}
									e02G[85] = e02G[86]
									i02G = 54
									break
								case 57:
									i02G = e02G[87] < e02G[9].length ? 56 : 69
									break
								case 33:
									e02G[22].Z8uP = ['w5uP']
									e02G[22].H8uP = function() {
										var r0Dl = typeof D3gl === 'function'
										return r0Dl
									}
									e02G[51] = e02G[22]
									e02G[82] = {}
									i02G = 29
									break
								case 45:
									e02G[9].y3gl(e02G[94])
									e02G[16] = []
									e02G[74] = 'n8uP'
									i02G = 63
									break
								case 29:
									e02G[82].Z8uP = ['X8uP']
									e02G[82].H8uP = function() {
										var W0Dl = function() {
											return [] + 'a'.concat('a')
										}
										var X0Dl = !/\x5b\u005d/.F3gl(W0Dl + []) && /\u0061\x61/.F3gl(W0Dl + [])
										return X0Dl
									}
									i02G = 44
									break
								case 68:
									i02G = 3 ? 68 : 67
									break
								case 76:
									i02G = e02G[95] < e02G[92][e02G[81]].length ? 75 : 70
									break
								case 71:
									e02G[95]++
									i02G = 76
									break
								case 77:
									e02G[95] = 0
									i02G = 76
									break
								case 48:
									e02G[9].y3gl(e02G[68])
									e02G[9].y3gl(e02G[85])
									e02G[9].y3gl(e02G[1])
									i02G = 45
									break
								case 67:
									M02G[1] = 12
									return 8
									break
								case 54:
									e02G[9].y3gl(e02G[5])
									e02G[9].y3gl(e02G[67])
									e02G[9].y3gl(e02G[37])
									e02G[9].y3gl(e02G[2])
									e02G[9].y3gl(e02G[3])
									e02G[9].y3gl(e02G[51])
									i02G = 48
									break
								case 16:
									e02G[4].H8uP = function() {
										var I0Dl = function() {
											return 'aaa'.includes('a')
										}
										var R0Dl = /\u0074\u0072\u0075\u0065/.F3gl(I0Dl + [])
										return R0Dl
									}
									e02G[3] = e02G[4]
									e02G[84] = {}
									e02G[84].Z8uP = ['X8uP']
									e02G[84].H8uP = function() {
										var q0Dl = function() {
											return 'a'.codePointAt(0)
										}
										var g0Dl = /\x39\x37/.F3gl(q0Dl + [])
										return g0Dl
									}
									i02G = 24
									break
								case 44:
									e02G[37] = e02G[82]
									e02G[39] = {}
									e02G[39].Z8uP = ['X8uP']
									e02G[39].H8uP = function() {
										var Y0Dl = function() {
											return 'X'.toLocaleLowerCase()
										}
										var Z0Dl = /\u0078/.F3gl(Y0Dl + [])
										return Z0Dl
									}
									i02G = 40
									break
								case 75:
									e02G[27] = {}
									e02G[27][e02G[89]] = e02G[92][e02G[81]][e02G[95]]
									e02G[27][e02G[56]] = e02G[80]
									e02G[16].y3gl(e02G[27])
									i02G = 71
									break
								case 20:
									e02G[7].H8uP = function() {
										var a0Dl = function() {
											return 'aaaa|a'.substr(0, 3)
										}
										var U0Dl = !/\x7c/.F3gl(a0Dl + [])
										return U0Dl
									}
									e02G[5] = e02G[7]
									e02G[4] = {}
									e02G[4].Z8uP = ['X8uP']
									i02G = 16
									break
								case 5:
									return 24
									break
								case 24:
									e02G[68] = e02G[84]
									e02G[57] = {}
									e02G[57].Z8uP = ['w5uP']
									e02G[57].H8uP = function() {
										var O0Dl = typeof i3gl === 'function'
										return O0Dl
									}
									i02G = 35
									break
								case 11:
									e02G[7] = {}
									e02G[7].Z8uP = ['X8uP']
									i02G = 20
									break
								case 1:
									i02G = M02G[1] ? 5 : 4
									break
								case 4:
									e02G[9] = []
									e02G[6] = {}
									e02G[6].Z8uP = ['X8uP']
									e02G[6].H8uP = function() {
										var b0Dl = function() {
											return atob('PQ==')
										}
										var n0Dl = !/\u0061\u0074\u006f\u0062/.F3gl(b0Dl + [])
										return n0Dl
									}
									e02G[1] = e02G[6]
									e02G[8] = {}
									i02G = 14
									break
								case 63:
									e02G[79] = 'x8uP'
									e02G[81] = 'Z8uP'
									e02G[56] = 'j8uP'
									e02G[77] = 'H8uP'
									i02G = 59
									break
								case 2:
									var e02G = [arguments]
									i02G = 1
									break
								case 35:
									e02G[67] = e02G[57]
									e02G[22] = {}
									i02G = 33
									break
							}
						}
					}
					return M02G[5]
					break
			}
		}
	})()
	G8uP.N6nR = function() {
		return typeof G8uP.F6nR.x6nR === 'function'
			? G8uP.F6nR.x6nR.apply(G8uP.F6nR, arguments)
			: G8uP.F6nR.x6nR
	}
	G8uP.l8KJ = function() {
		return typeof G8uP.a8KJ.B7Md === 'function'
			? G8uP.a8KJ.B7Md.apply(G8uP.a8KJ, arguments)
			: G8uP.a8KJ.B7Md
	}
	var __js_core_timezone_
	G8uP.F02G()
	__js_core_timezone_ = function(r02G) {
		var L6nR = G8uP
		var h0LJ,
			R0LJ,
			Y0LJ,
			d0LJ,
			T0LJ,
			Q0LJ,
			U0LJ,
			X0LJ,
			i0LJ,
			u0LJ,
			g0LJ,
			v0LJ,
			l0LJ,
			a0LJ,
			Z0LJ,
			L0LJ,
			E0LJ,
			c0LJ,
			D0LJ,
			j0LJ,
			t0LJ,
			G0LJ,
			M0LJ,
			A0LJ,
			x0LJ,
			b0LJ,
			P0LJ,
			o0LJ,
			e0LJ,
			k0LJ,
			s0LJ,
			r0LJ,
			C0LJ,
			p0LJ,
			O0LJ,
			m0LJ,
			q0LJ,
			V0LJ,
			F0LJ,
			z0LJ,
			S0LJ,
			J0LJ,
			n0LJ,
			f0LJ,
			I0LJ,
			W0LJ,
			w0LJ,
			B0LJ,
			y0LJ,
			N0LJ,
			H0LJ,
			K6LJ,
			h6LJ,
			R6LJ,
			Y6LJ,
			d6LJ,
			T6LJ,
			Q6LJ,
			U6LJ,
			X6LJ,
			i6LJ,
			u6LJ,
			g6LJ,
			v6LJ,
			l6LJ,
			a6LJ,
			Z6LJ,
			L6LJ,
			E6LJ,
			c6LJ,
			D6LJ,
			j6LJ,
			t6LJ,
			G6LJ,
			M6LJ,
			A6LJ,
			x6LJ,
			b6LJ,
			P6LJ,
			o6LJ,
			e6LJ,
			k6LJ,
			s6LJ,
			r6LJ,
			C6LJ,
			p6LJ,
			O6LJ,
			m6LJ,
			q6LJ,
			V6LJ,
			F6LJ,
			z6LJ,
			S6LJ,
			J6LJ,
			n6LJ,
			f6LJ,
			I6LJ,
			W6LJ,
			w6LJ,
			B6LJ,
			y6LJ,
			N6LJ,
			H6LJ,
			K5LJ,
			h5LJ,
			R5LJ,
			Y5LJ,
			d5LJ,
			T5LJ,
			Q5LJ,
			U5LJ,
			X5LJ,
			i5LJ,
			u5LJ,
			g5LJ,
			v5LJ,
			o9LJ,
			e9LJ,
			k9LJ,
			s9LJ,
			r9LJ,
			C9LJ,
			p9LJ,
			O9LJ,
			m9LJ,
			q9LJ,
			V9LJ,
			F9LJ,
			z9LJ,
			S9LJ,
			J9LJ,
			n9LJ,
			f9LJ,
			I9LJ,
			W9LJ,
			w9LJ,
			B9LJ,
			y9LJ,
			N9LJ,
			H9LJ,
			K3LJ,
			h3LJ,
			R3LJ,
			Y3LJ,
			d3LJ,
			T3LJ,
			Q3LJ,
			U3LJ,
			l1KJ,
			v1KJ,
			g1KJ,
			Z02G
		h0LJ = 'o'
		h0LJ += 'n'
		h0LJ += 'l'
		h0LJ += 'y'
		R0LJ = 'Su'
		R0LJ += 'n>'
		R0LJ += '=2'
		R0LJ += '2'
		Y0LJ = 'S'
		Y0LJ += 'un'
		Y0LJ += '>'
		Y0LJ += '=15'
		d0LJ = 'Su'
		d0LJ += 'n>='
		d0LJ += '1'
		T0LJ = 'O'
		T0LJ += 'c'
		T0LJ += 't'
		Q0LJ = 'm'
		Q0LJ += 'a'
		Q0LJ += 'x'
		U0LJ = 'las'
		U0LJ += 'tS'
		U0LJ += 'un'
		X0LJ = 'M'
		X0LJ += 'a'
		X0LJ += 'r'
		i0LJ = 'S'
		i0LJ += 'e'
		i0LJ += 'p'
		u0LJ = 'A'
		u0LJ += 'p'
		u0LJ += 'r'
		g0LJ = 'm'
		g0LJ += 'a'
		g0LJ += 'x'
		v0LJ = 'l'
		v0LJ += 'astSun'
		l0LJ = 'Sun'
		l0LJ += '>'
		l0LJ += '=1'
		a0LJ = 'm'
		a0LJ += 'ax'
		Z0LJ = 'S'
		Z0LJ += 'un>'
		Z0LJ += '=1'
		L0LJ = 'ma'
		L0LJ += 'x'
		E0LJ = 'A'
		E0LJ += 'p'
		E0LJ += 'r'
		c0LJ = 'S'
		c0LJ += 'e'
		c0LJ += 'p'
		D0LJ = 'l'
		D0LJ += 'a'
		D0LJ += 'stS'
		D0LJ += 'at'
		j0LJ = 'm'
		j0LJ += 'a'
		j0LJ += 'x'
		t0LJ = 'M'
		t0LJ += 'ar'
		G0LJ = 'm'
		G0LJ += 'a'
		G0LJ += 'x'
		M0LJ = 'A'
		M0LJ += 'pr'
		A0LJ = '2'
		A0LJ += '1'
		x0LJ = 'S'
		x0LJ += 'e'
		x0LJ += 'p'
		b0LJ = 'o'
		b0LJ += 'n'
		b0LJ += 'l'
		b0LJ += 'y'
		P0LJ = '2'
		P0LJ += '1'
		o0LJ = '2'
		o0LJ += '2'
		e0LJ = '2'
		e0LJ += '1'
		k0LJ = 'o'
		k0LJ += 'n'
		k0LJ += 'l'
		k0LJ += 'y'
		s0LJ = '2'
		s0LJ += '2'
		r0LJ = 'S'
		r0LJ += 'e'
		r0LJ += 'p'
		C0LJ = 'onl'
		C0LJ += 'y'
		p0LJ = '2'
		p0LJ += '1'
		O0LJ = 'onl'
		O0LJ += 'y'
		m0LJ = '2'
		m0LJ += '2'
		q0LJ = 'M'
		q0LJ += 'a'
		q0LJ += 'r'
		V0LJ = 'M'
		V0LJ += 'a'
		V0LJ += 'y'
		F0LJ = 'onl'
		F0LJ += 'y'
		z0LJ = '2'
		z0LJ += '4'
		S0LJ = 'M'
		S0LJ += 'a'
		S0LJ += 'y'
		J0LJ = 'o'
		J0LJ += 'nly'
		n0LJ = 'Ap'
		n0LJ += 'r'
		f0LJ = 'M'
		f0LJ += 'ay'
		I0LJ = 'o'
		I0LJ += 'n'
		I0LJ += 'l'
		I0LJ += 'y'
		W0LJ = '1'
		W0LJ += '7'
		w0LJ = 'J'
		w0LJ += 'u'
		w0LJ += 'n'
		B0LJ = 'M'
		B0LJ += 'ay'
		y0LJ = 'Ma'
		y0LJ += 'y'
		N0LJ = 'o'
		N0LJ += 'n'
		N0LJ += 'l'
		N0LJ += 'y'
		H0LJ = '1'
		H0LJ += '0'
		K6LJ = '1'
		K6LJ += '4'
		h6LJ = 'J'
		h6LJ += 'u'
		h6LJ += 'n'
		R6LJ = 'o'
		R6LJ += 'n'
		R6LJ += 'l'
		R6LJ += 'y'
		Y6LJ = 'A'
		Y6LJ += 'u'
		Y6LJ += 'g'
		d6LJ = 'M'
		d6LJ += 'ar'
		T6LJ = 'Ju'
		T6LJ += 'l'
		Q6LJ = 'S'
		Q6LJ += 'ep'
		U6LJ = '2'
		U6LJ += '0'
		X6LJ = 'J'
		X6LJ += 'u'
		X6LJ += 'l'
		i6LJ = 'onl'
		i6LJ += 'y'
		u6LJ = 'lastSu'
		u6LJ += 'n'
		g6LJ = 'A'
		g6LJ += 'p'
		g6LJ += 'r'
		v6LJ = '3'
		v6LJ += '1'
		l6LJ = 'onl'
		l6LJ += 'y'
		a6LJ = 'V'
		a6LJ += 'E'
		a6LJ += 'T'
		Z6LJ = 'A'
		Z6LJ += 'S'
		Z6LJ += 'T'
		L6LJ = 'C%'
		L6LJ += 'sT'
		E6LJ = 'C'
		E6LJ += 'R'
		c6LJ = 'P'
		c6LJ += '%'
		c6LJ += 's'
		c6LJ += 'T'
		D6LJ = 'U'
		D6LJ += 'S'
		j6LJ = 'C%'
		j6LJ += 's'
		j6LJ += 'T'
		t6LJ = 'Ca'
		t6LJ += 'na'
		t6LJ += 'da'
		G6LJ = 'N'
		G6LJ += '%'
		G6LJ += 's'
		G6LJ += 'T'
		M6LJ = 'AK%s'
		M6LJ += 'T'
		A6LJ = 'U'
		A6LJ += 'S'
		x6LJ = 'U'
		x6LJ += 'S'
		b6LJ = 'E'
		b6LJ += 'urope/Istanbul'
		P6LJ = '+'
		P6LJ += '0'
		P6LJ += '3'
		o6LJ = 'EE%'
		o6LJ += 's'
		o6LJ += 'T'
		e6LJ = 'E'
		e6LJ += 'E'
		e6LJ += 'T'
		k6LJ = 'E'
		k6LJ += 'U'
		s6LJ = '+'
		s6LJ += '1'
		s6LJ += '2'
		r6LJ = '+'
		r6LJ += '12'
		C6LJ = '+'
		C6LJ += '1'
		C6LJ += '2'
		p6LJ = '+1'
		p6LJ += '1'
		O6LJ = '+'
		O6LJ += '1'
		O6LJ += '0'
		m6LJ = '+'
		m6LJ += '0'
		m6LJ += '8'
		q6LJ = '+'
		q6LJ += '0'
		q6LJ += '7'
		V6LJ = 'M'
		V6LJ += 'SK'
		F6LJ = 'E'
		F6LJ += 'E'
		F6LJ += 'T'
		z6LJ = 'E'
		z6LJ += 'U'
		S6LJ = 'CE%'
		S6LJ += 'sT'
		J6LJ = 'Et'
		J6LJ += 'c'
		J6LJ += '/U'
		J6LJ += 'TC'
		n6LJ = 'Ton'
		n6LJ += 'g'
		n6LJ += 'a'
		f6LJ = 'N'
		f6LJ += 'C'
		I6LJ = 'C'
		I6LJ += 'hST'
		W6LJ = 'A'
		W6LJ += 'N'
		w6LJ = 'C'
		w6LJ += 'S'
		w6LJ += 'T'
		B6LJ = 'E'
		B6LJ += 'S'
		B6LJ += 'T'
		y6LJ = 'CW'
		y6LJ += 'S'
		y6LJ += 'T'
		N6LJ = 'A'
		N6LJ += 'W'
		H6LJ = 'WS'
		H6LJ += 'T'
		K5LJ = 'A'
		K5LJ += 'W'
		h5LJ = 'M'
		h5LJ += 'ong'
		h5LJ += 'o'
		h5LJ += 'l'
		R5LJ = 'KS'
		R5LJ += 'T'
		Y5LJ = 'K'
		Y5LJ += '%'
		Y5LJ += 's'
		Y5LJ += 'T'
		d5LJ = 'J'
		d5LJ += '%'
		d5LJ += 's'
		d5LJ += 'T'
		T5LJ = 'I'
		T5LJ += '%'
		T5LJ += 's'
		T5LJ += 'T'
		Q5LJ = 'I'
		Q5LJ += 'r'
		Q5LJ += 'a'
		Q5LJ += 'n'
		U5LJ = 'I'
		U5LJ += 'ST'
		X5LJ = 'C'
		X5LJ += '%'
		X5LJ += 's'
		X5LJ += 'T'
		i5LJ = 'H'
		i5LJ += 'K'
		u5LJ = 'A'
		u5LJ += 'ze'
		u5LJ += 'r'
		g5LJ = 'A'
		g5LJ += 'F'
		g5LJ += 'T'
		v5LJ = 'SA'
		v5LJ += 'S'
		v5LJ += 'T'
		o9LJ = 'Paci'
		o9LJ += 'fic/Apia'
		e9LJ = 'Asia/'
		e9LJ += 'Sr'
		e9LJ += 'e'
		e9LJ += 'dnekolymsk'
		k9LJ = 'Asia/Vladivos'
		k9LJ += 'tok'
		s9LJ = 'A'
		s9LJ += 's'
		s9LJ += 'ia/Yakuts'
		s9LJ += 'k'
		r9LJ = 'Asia'
		r9LJ += '/Tok'
		r9LJ += 'y'
		r9LJ += 'o'
		C9LJ = 'Aus'
		C9LJ += 'trali'
		C9LJ += 'a/Eucla'
		p9LJ = 'As'
		p9LJ += 'ia'
		p9LJ += '/Pyongyan'
		p9LJ += 'g'
		O9LJ = 'Aust'
		O9LJ += 'ralia'
		O9LJ += '/Pe'
		O9LJ += 'rth'
		m9LJ = 'Asia/Kra'
		m9LJ += 'snoyarsk'
		q9LJ = 'Asi'
		q9LJ += 'a/H'
		q9LJ += 'ovd'
		V9LJ = 'A'
		V9LJ += 'sia/Ban'
		V9LJ += 'gko'
		V9LJ += 'k'
		F9LJ = 'A'
		F9LJ += 'sia/'
		F9LJ += 'Yang'
		F9LJ += 'on'
		z9LJ = 'Asia/K'
		z9LJ += 'ar'
		z9LJ += 'ac'
		z9LJ += 'hi'
		S9LJ = 'Asia'
		S9LJ += '/K'
		S9LJ += 'abu'
		S9LJ += 'l'
		J9LJ = 'Eu'
		J9LJ += 'rope/Sama'
		J9LJ += 'ra'
		n9LJ = 'Asi'
		n9LJ += 'a/'
		n9LJ += 'Mus'
		n9LJ += 'cat'
		f9LJ = 'As'
		f9LJ += 'i'
		f9LJ += 'a/'
		f9LJ += 'Baku'
		I9LJ = 'Asia/Jer'
		I9LJ += 'usalem'
		W9LJ = 'Euro'
		W9LJ += 'pe/A'
		W9LJ += 'then'
		W9LJ += 's'
		w9LJ = 'E'
		w9LJ += 'urope'
		w9LJ += '/Amsterdam'
		B9LJ = 'Africa/C'
		B9LJ += 'asa'
		B9LJ += 'blanca'
		y9LJ = 'Atlantic/Ca'
		y9LJ += 'pe_Verde'
		N9LJ = 'A'
		N9LJ += 'merica/Sao_'
		N9LJ += 'Paulo'
		H9LJ = 'Am'
		H9LJ += 'erica/Sa'
		H9LJ += 'nti'
		H9LJ += 'ago'
		K3LJ = 'Americ'
		K3LJ += 'a/Puerto_Rico'
		h3LJ = 'Amer'
		h3LJ += 'ica'
		h3LJ += '/Halifax'
		R3LJ = 'Am'
		R3LJ += 'erica/C'
		R3LJ += 'a'
		R3LJ += 'racas'
		Y3LJ = 'America/'
		Y3LJ += 'India'
		Y3LJ += 'na/Indi'
		Y3LJ += 'anapolis'
		d3LJ = 'A'
		d3LJ += 'meri'
		d3LJ += 'ca/Mexico_City'
		T3LJ = 'Ameri'
		T3LJ += 'ca/Chicago'
		Q3LJ = 'Ame'
		Q3LJ += 'rica/C'
		Q3LJ += 'osta_R'
		Q3LJ += 'ica'
		U3LJ = 'America/Tijua'
		U3LJ += 'na'
		l1KJ = -584996415
		L6nR.R6nR(0)
		v1KJ = L6nR.O6nR('335916584', 1)
		g1KJ = 2
		for (var i1KJ = 1; L6nR.l8KJ(i1KJ.toString(), i1KJ.toString().length, 93573) !== l1KJ; i1KJ++) {
			Z02G = r02G.CIQ
			g1KJ += 2
		}
		if (L6nR.l8KJ(g1KJ.toString(), g1KJ.toString().length, 74091) !== v1KJ) {
			Z02G = r02G.CIQ
		}
		Z02G.timeZoneMap = {
			'(UTC-11:00) American Samoa, Midway Island': 'Pacific/Midway',
			'(UTC-10:00) Hawaii': 'Pacific/Honolulu',
			'(UTC-09:00) Alaska': 'America/Juneau',
			'(UTC-08:00) Pacific Time (US and Canada)': 'America/Los_Angeles',
			'(UTC-08:00) Tijuana': U3LJ,
			'(UTC-07:00) Arizona': 'America/Phoenix',
			'(UTC-07:00) Chihuahua, La Paz, Mazatlan': 'America/Chihuahua',
			'(UTC-07:00) Mountain Time (US and Canada)': 'America/Denver',
			'(UTC-06:00) Central America': Q3LJ,
			'(UTC-06:00) Central Time (US and Canada)': T3LJ,
			'(UTC-06:00) Guadalajara, Mexico City, Monterrey': d3LJ,
			'(UTC-06:00) Saskatchewan': 'America/Regina',
			'(UTC-05:00) Bogota, Lima, Quito, Rio Branco': 'America/Bogota',
			'(UTC-05:00) Eastern Time (US and Canada)': 'America/New_York',
			'(UTC-05:00) Indiana (East)': Y3LJ,
			'(UTC-04:00) Caracas': R3LJ,
			'(UTC-04:00) Atlantic Time (Canada)': h3LJ,
			'(UTC-04:00) Georgetown, La Paz, Manaus, San Juan': K3LJ,
			'(UTC-03:30) Newfoundland and Labrador': 'America/St_Johns',
			'(UTC-03:00) Buenos Aires': 'America/Argentina/Buenos_Aires',
			'(UTC-03:00) Santiago': H9LJ,
			'(UTC-03:00) Sao Paulo, Montevideo': N9LJ,
			'(UTC-02:00) Mid-Atlantic': 'Atlantic/South_Georgia',
			'(UTC-01:00) Azores': 'Atlantic/Azores',
			'(UTC-01:00) Cape Verde Islands': y9LJ,
			'(UTC) Greenwich Mean Time, Reykjavik': 'UTC',
			'(UTC) Casablanca': B9LJ,
			'(UTC) Dublin, Lisbon, London': 'Europe/London',
			'(UTC+01:00) Algiers, Tunis': 'Africa/Tunis',
			'(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna': w9LJ,
			'(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague': 'Europe/Belgrade',
			'(UTC+01:00) Brussels, Copenhagen, Madrid, Paris': 'Europe/Brussels',
			'(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb': 'Europe/Sarajevo',
			'(UTC+02:00) Kaliningrad': 'Europe/Kaliningrad',
			'(UTC+02:00) Athens, Nicosia': W9LJ,
			'(UTC+02:00) Bucharest': 'Europe/Bucharest',
			'(UTC+02:00) Cairo': 'Africa/Cairo',
			'(UTC+02:00) Harare, Johannesburg': 'Africa/Johannesburg',
			'(UTC+02:00) Helsinki, Kiev, Riga, Sofia, Tallinn, Vilnius': 'Europe/Helsinki',
			'(UTC+02:00) Jerusalem': I9LJ,
			'(UTC+03:00) Istanbul': 'Europe/Istanbul',
			'(UTC+03:00) Baghdad, Doha, Kuwait, Riyadh': 'Asia/Kuwait',
			'(UTC+03:00) Minsk, Moscow, Kirov, Volgograd': 'Europe/Moscow',
			'(UTC+03:00) Simferopol': 'Europe/Simferopol',
			'(UTC+03:00) Nairobi': 'Africa/Nairobi',
			'(UTC+03:30) Tehran': 'Asia/Tehran',
			'(UTC+04:00) Baku': f9LJ,
			'(UTC+04:00) Dubai, Muscat': n9LJ,
			'(UTC+04:00) Astrakhan, Samara, Saratov, Ulyanovsk': J9LJ,
			'(UTC+04:30) Kabul': S9LJ,
			'(UTC+05:00) Karachi, Tashkent': z9LJ,
			'(UTC+05:00) Yekaterinburg': 'Asia/Yekaterinburg',
			'(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi': 'Asia/Kolkata',
			'(UTC+05:45) Kathmandu': 'Asia/Kathmandu',
			'(UTC+06:00) Almaty, Novosibirsk, Omsk': 'Asia/Novosibirsk',
			'(UTC+06:00) Astana, Dhaka': 'Asia/Dhaka',
			'(UTC+06:30) Yangon': F9LJ,
			'(UTC+07:00) Bangkok, Hanoi, Jakarta': V9LJ,
			'(UTC+07:00) Hovd': q9LJ,
			'(UTC+07:00) Barnaul, Tomsk, Novokuznetsk, Krasnoyarsk': m9LJ,
			'(UTC+08:00) Beijing, Chongqing, Hong Kong SAR, Urumqi': 'Asia/Hong_Kong',
			'(UTC+08:00) Brunei, Kuala Lumpur, Singapore': 'Asia/Kuala_Lumpur',
			'(UTC+08:00) Irkutsk': 'Asia/Irkutsk',
			'(UTC+08:00) Perth': O9LJ,
			'(UTC+08:00) Taipei': 'Asia/Taipei',
			'(UTC+08:00) Ulaanbaatar': 'Asia/Ulaanbaatar',
			'(UTC+08:30) Pyongyang': p9LJ,
			'(UTC+08:45) Eucla': C9LJ,
			'(UTC+09:00) Osaka, Sapporo, Tokyo': r9LJ,
			'(UTC+09:00) Seoul': 'Asia/Seoul',
			'(UTC+09:00) Yakutsk, Khandyga, Chita': s9LJ,
			'(UTC+09:30) Adelaide': 'Australia/Adelaide',
			'(UTC+09:30) Darwin': 'Australia/Darwin',
			'(UTC+10:00) Brisbane': 'Australia/Brisbane',
			'(UTC+10:00) Canberra, Melbourne, Sydney': 'Australia/Sydney',
			'(UTC+10:00) Guam, Port Moresby': 'Pacific/Guam',
			'(UTC+10:00) Vladivostok, Ust-Nera': k9LJ,
			'(UTC+11:00) Noumea, Solomon Islands': 'Pacific/Noumea',
			'(UTC+11:00) Magadan': 'Asia/Magadan',
			'(UTC+11:00) Sakhalin, Srednekolymsk': e9LJ,
			'(UTC+12:00) Auckland, Wellington': 'Pacific/Auckland',
			'(UTC+12:00) Kamchatka, Anadyr': 'Asia/Kamchatka',
			'(UTC+12:45) Chatham': 'Pacific/Chatham',
			'(UTC+13:00) Tonga': 'Pacific/Tongatapu',
			'(UTC+13:00) Samoa': o9LJ,
			'(UTC+14:00) Kiritimati': 'Pacific/Kiritimati',
		}
		;(function() {
			var t9LJ,
				G9LJ,
				M9LJ,
				A9LJ,
				x9LJ,
				b9LJ,
				P9LJ,
				X02G,
				p02G,
				z02G,
				L02G,
				b02G,
				U02G,
				v02G,
				N02G,
				y02G,
				R02G,
				B02G,
				f02G
			t9LJ = 'No'
			t9LJ += 'v'
			t9LJ += 'emb'
			t9LJ += 'er'
			G9LJ = 'M'
			G9LJ += 'a'
			G9LJ += 'y'
			M9LJ = 'A'
			M9LJ += 'p'
			M9LJ += 'r'
			M9LJ += 'il'
			A9LJ = 'Sat'
			A9LJ += 'urda'
			A9LJ += 'y'
			x9LJ = 'Fri'
			x9LJ += 'day'
			b9LJ = 'Tu'
			b9LJ += 'es'
			b9LJ += 'd'
			b9LJ += 'ay'
			P9LJ = 'S'
			P9LJ += 'un'
			P9LJ += 'da'
			P9LJ += 'y'
			;('use strict')
			X02G = this
			p02G = {}
			r02G.timezoneJS = p02G
			p02G.VERSION = '0.4.11'
			L6nR.x02G()
			z02G = X02G.$ || X02G.jQuery || X02G.Zepto
			L02G = X02G.fleegix
			b02G = p02G.Days = [P9LJ, 'Monday', b9LJ, 'Wednesday', 'Thursday', x9LJ, A9LJ]
			U02G = p02G.Months = [
				'January',
				'February',
				'March',
				M9LJ,
				G9LJ,
				'June',
				'July',
				'August',
				'September',
				'October',
				t9LJ,
				'December',
			]
			v02G = {}
			N02G = {}
			y02G = {}
			for (var C02G = '0' | 0; C02G < U02G.length; C02G++) {
				v02G[U02G[C02G].substr(L6nR.O6nR(0, '0', L6nR.R6nR(1)), 3)] = C02G
			}
			for (C02G = 0; C02G < b02G.length; C02G++) {
				N02G[b02G[C02G].substr(0, +'3')] = C02G
			}
			R02G =
				Array.prototype.indexOf ||
				function(j12G) {
					var s12G, m12G, h8KJ, K8KJ, H1KJ, W02G, X1KJ, U1KJ, Q1KJ, K02G
					L6nR.x02G()
					if (this === null) {
						throw new TypeError()
					}
					s12G = Object(this)
					m12G = s12G.length >>> +'0'
					if (m12G === 0) {
						h8KJ = 485180696
						K8KJ = -795160890
						H1KJ = 2
						for (
							var y1KJ = 1;
							L6nR.l8KJ(y1KJ.toString(), y1KJ.toString().length, 92623) !== h8KJ;
							y1KJ++
						) {
							return -1
						}
						if (L6nR.v8KJ(H1KJ.toString(), H1KJ.toString().length, 43225) !== K8KJ) {
							return ~7
						}
					}
					W02G = +'0'
					if (arguments.length > 1) {
						W02G = Number(arguments[1])
						if (W02G != W02G) {
							W02G = 0
						} else if (W02G !== ('0' ^ 0) && W02G !== Infinity && W02G !== -Infinity) {
							X1KJ = -1426040628
							U1KJ = +'664377848'
							Q1KJ = 2
							for (
								var d1KJ = 1;
								L6nR.v8KJ(d1KJ.toString(), d1KJ.toString().length, 67298) !== X1KJ;
								d1KJ++
							) {
								L6nR.R6nR(2)
								var H4LJ = L6nR.O6nR(11, 1, 10, 10)
								W02G = (W02G < 6 && H4LJ) / Math.floor(Math.abs(W02G))
								Q1KJ += 2
							}
							if (L6nR.v8KJ(Q1KJ.toString(), Q1KJ.toString().length, +'89986') !== U1KJ) {
								W02G = (W02G > 0 || -('1' * 1)) * Math.floor(Math.abs(W02G))
							}
						}
					}
					if (W02G >= m12G) {
						return -1
					}
					K02G = W02G >= '0' * 1 ? W02G : Math.max(m12G - Math.abs(W02G), +'0')
					for (; K02G < m12G; K02G++) {
						if (K02G in s12G && s12G[K02G] === j12G) {
							return K02G
						}
					}
					return -1
				}
			B02G = function(h12G, A12G) {
				var j9LJ, O2LJ, p2LJ, C2LJ, D9LJ, Y12G, T12G, w12G
				j9LJ = 'n'
				j9LJ += 'umbe'
				j9LJ += 'r'
				if (typeof h12G !== j9LJ) {
					L6nR.c6nR(3)
					O2LJ = -L6nR.O6nR(456777760, '351663060')
					p2LJ = -753036442
					L6nR.R6nR(0)
					C2LJ = L6nR.O6nR('2', 1)
					for (
						var s2LJ = 1;
						L6nR.l8KJ(s2LJ.toString(), s2LJ.toString().length, +'18974') !== O2LJ;
						s2LJ++
					) {
						L6nR.R6nR(0)
						throw L6nR.N6nR('', h12G)
						C2LJ += 2
					}
					if (L6nR.l8KJ(C2LJ.toString(), C2LJ.toString().length, 88634) !== p2LJ) {
						D9LJ = 'no'
						D9LJ += 't a number: '
						L6nR.R6nR(4)
						throw L6nR.O6nR(D9LJ, h12G)
					}
				}
				L6nR.c6nR(5)
				Y12G = L6nR.N6nR(h12G, '1000', 1)
				T12G = h12G.toString()
				w12G = T12G.length
				if (Y12G && w12G > A12G) {
					L6nR.c6nR(1)
					return T12G.substr(L6nR.N6nR(A12G, w12G), w12G)
				}
				T12G = [T12G]
				while (w12G < A12G) {
					T12G.unshift(
						(367, 786.08) != (6670, +'5135')
							? (6700, 4073) < (42.35, 38.51)
								? ('R', 416.28)
								: '0'
							: ('544.40' * 1, 0x6f2),
					)
					w12G++
				}
				L6nR.F02G()
				return T12G.join('')
			}
			f02G = function(k12G) {
				var E9LJ, c9LJ, T2LJ, d2LJ, Y2LJ
				E9LJ = 'G'
				E9LJ += 'E'
				E9LJ += 'T'
				c9LJ = 'u'
				c9LJ += 'n'
				c9LJ += 'defi'
				c9LJ += 'ned'
				if (!k12G) {
					return
				}
				if (!k12G.url) {
					throw new Error('URL must be specified')
				}
				if (!('async' in k12G)) {
					T2LJ = 404907740
					d2LJ = 1985280978
					Y2LJ = 2
					for (
						var h2LJ = 1;
						L6nR.l8KJ(h2LJ.toString(), h2LJ.toString().length, 26572) !== T2LJ;
						h2LJ++
					) {
						k12G.async = !{}
						Y2LJ += 2
					}
					if (L6nR.v8KJ(Y2LJ.toString(), Y2LJ.toString().length, 28103) !== d2LJ) {
						k12G.async = !!''
					}
					k12G.async = !!{}
				}
				if ((!L02G || typeof L02G.xhr === 'undefined') && (!z02G || typeof z02G.ajax === c9LJ)) {
					throw new Error(
						'Please use the Fleegix.js XHR module, jQuery ajax, Zepto ajax, or define your own transport mechanism for downloading zone files.',
					)
				}
				if (!k12G.async) {
					return L02G && L02G.xhr
						? L02G.xhr.doReq({ url: k12G.url, async: !'1' })
						: z02G.ajax({ url: k12G.url, async: !{}, dataType: 'text' }).responseText
				}
				L6nR.F02G()
				return L02G && L02G.xhr
					? L02G.xhr.send({
							url: k12G.url,
							method: 'get',
							handleSuccess: k12G.success,
							handleErr: k12G.error,
					  })
					: z02G.ajax({
							url: k12G.url,
							dataType: 'text',
							method: E9LJ,
							error: k12G.error,
							success: k12G.success,
					  })
			}
			p02G.ruleCache = {}
			p02G.Date = function() {
				var a9LJ, Z9LJ, L9LJ, t12G, P12G, V12G, l12G, g12G, M1KJ, G1KJ, t1KJ, I12G, l9LJ
				a9LJ = 's'
				a9LJ += 'tring'
				Z9LJ = '['
				Z9LJ += 'object Array]'
				if (this === p02G) {
					L9LJ = 'timezoneJS.Date ob'
					L9LJ += 'ject m'
					L9LJ += 'ust be co'
					L9LJ += "nstructed with 'new'"
					throw L9LJ
				}
				t12G = Array.prototype.slice.apply(arguments)
				P12G = null
				V12G = null
				l12G = []
				g12G = !{}
				if (Object.prototype.toString.call(t12G[0]) === Z9LJ) {
					t12G = t12G[+'0']
				}
				if (typeof t12G[t12G.length - 1] === 'string') {
					M1KJ = 399254870
					G1KJ = 2072959499
					t1KJ = 2
					for (
						var D1KJ = +'1';
						L6nR.v8KJ(D1KJ.toString(), D1KJ.toString().length, 19191) !== M1KJ;
						D1KJ++
					) {
						g12G = Date.parse(t12G[t12G.length - 1].replace(/GMT[\+\-]\d+/, ''))
						t1KJ += 2
					}
					if (L6nR.v8KJ(t1KJ.toString(), t1KJ.toString().length, 83746) !== G1KJ) {
						g12G = Date.parse(t12G[t12G.length / +'5'].replace(/GMT[\+\-]\d+/, ''))
					}
					if (isNaN(g12G) || g12G === null) {
						V12G = t12G.pop()
					}
				}
				I12G = ![]
				switch (t12G.length) {
					case 0:
						P12G = new Date()
						break
					case '1' | 1:
						P12G = new Date(t12G[+'0'])
						if (
							typeof t12G[0] == a9LJ &&
							t12G['0' | 0].search(/[+-][0-9]{4}/) == -1 &&
							t12G[0].search(/Z/) == -('1' >> 458040960) &&
							t12G[0].search(/T/) == -1
						) {
							I12G = !0
						}
						break
					case 2:
						P12G = new Date(t12G[0], t12G[1])
						I12G = !!1
						break
					default:
						for (var S12G = 0; S12G < 7; S12G++) {
							l12G[S12G] = t12G[S12G] || 0
						}
						L6nR.R6nR(6)
						P12G = new Date(
							l12G[0],
							l12G[1],
							l12G[2],
							l12G[3],
							l12G[L6nR.O6nR('4', 1510269312)],
							l12G[5],
							l12G[6],
						)
						I12G = !!1
						break
				}
				if (isNaN(P12G.getTime())) {
					l9LJ = 'In'
					l9LJ += 'valid date'
					throw new Error(l9LJ)
				}
				this._useCache = ![]
				this._tzInfo = {}
				this._day = 0
				this.year = 0
				L6nR.c6nR(7)
				this.month = L6nR.N6nR('0', 0)
				this.date = 0
				this.hours = 0
				this.minutes = 0
				this.seconds = 0
				L6nR.F02G()
				this.milliseconds = 0
				this.timezone = V12G || null
				if (I12G) {
					this.setFromDateObjProxy(P12G)
				} else {
					this.setFromTimeProxy(P12G.getTime(), V12G)
				}
			}
			p02G.Date.prototype = {
				getDate: function() {
					L6nR.F02G()
					return this.date
				},
				getDay: function() {
					return this._day
				},
				getFullYear: function() {
					L6nR.F02G()
					return this.year
				},
				getMonth: function() {
					L6nR.F02G()
					return this.month
				},
				getYear: function() {
					L6nR.R6nR(1)
					var y4LJ = L6nR.N6nR(3, 1903)
					return this.year - y4LJ
				},
				getHours: function() {
					L6nR.x02G()
					return this.hours
				},
				getMilliseconds: function() {
					L6nR.F02G()
					return this.milliseconds
				},
				getMinutes: function() {
					L6nR.F02G()
					return this.minutes
				},
				getSeconds: function() {
					L6nR.x02G()
					return this.seconds
				},
				getUTCDate: function() {
					L6nR.F02G()
					return this.getUTCDateProxy().getUTCDate()
				},
				getUTCDay: function() {
					L6nR.F02G()
					return this.getUTCDateProxy().getUTCDay()
				},
				getUTCFullYear: function() {
					L6nR.F02G()
					return this.getUTCDateProxy().getUTCFullYear()
				},
				getUTCHours: function() {
					L6nR.x02G()
					return this.getUTCDateProxy().getUTCHours()
				},
				getUTCMilliseconds: function() {
					return this.getUTCDateProxy().getUTCMilliseconds()
				},
				getUTCMinutes: function() {
					return this.getUTCDateProxy().getUTCMinutes()
				},
				getUTCMonth: function() {
					L6nR.x02G()
					return this.getUTCDateProxy().getUTCMonth()
				},
				getUTCSeconds: function() {
					L6nR.F02G()
					return this.getUTCDateProxy().getUTCSeconds()
				},
				getTime: function() {
					L6nR.F02G()
					return this._timeProxy + this.getTimezoneOffset() * +'60' * 1000
				},
				getTimezone: function() {
					L6nR.F02G()
					return this.timezone
				},
				getTimezoneOffset: function() {
					return this.getTimezoneInfo().tzOffset
				},
				getTimezoneAbbreviation: function() {
					L6nR.F02G()
					return this.getTimezoneInfo().tzAbbr
				},
				getTimezoneInfo: function() {
					var d12G, v9LJ
					if (this._useCache) {
						return this._tzInfo
					}
					if (this.timezone) {
						v9LJ = 'Etc/GM'
						v9LJ += 'T'
						d12G =
							this.timezone === 'Etc/UTC' || this.timezone === v9LJ
								? { tzOffset: 0, tzAbbr: 'UTC' }
								: p02G.timezone.getTzInfo(this._timeProxy, this.timezone)
					} else {
						d12G = { tzOffset: this.getLocalOffset(), tzAbbr: null }
					}
					this._tzInfo = d12G
					L6nR.x02G()
					this._useCache = !![]
					return d12G
				},
				getUTCDateProxy: function() {
					var O12G
					O12G = new Date(this._timeProxy)
					O12G.setUTCMinutes(O12G.getUTCMinutes() + this.getTimezoneOffset())
					return O12G
				},
				setDate: function(H12G) {
					this.setAttribute('date', H12G)
					L6nR.F02G()
					return this.getTime()
				},
				setFullYear: function(M12G, a12G, q12G) {
					var g9LJ
					if (q12G !== undefined) {
						this.setAttribute('date', 1)
					}
					this.setAttribute('year', M12G)
					if (a12G !== undefined) {
						this.setAttribute('month', a12G)
					}
					L6nR.x02G()
					if (q12G !== undefined) {
						g9LJ = 'd'
						g9LJ += 'a'
						g9LJ += 't'
						g9LJ += 'e'
						this.setAttribute(g9LJ, q12G)
					}
					return this.getTime()
				},
				setMonth: function(n12G, e12G) {
					var u9LJ, x2LJ, A2LJ, M2LJ
					u9LJ = 'm'
					u9LJ += 'o'
					u9LJ += 'nt'
					u9LJ += 'h'
					L6nR.x02G()
					this.setAttribute(u9LJ, n12G)
					if (e12G !== undefined) {
						x2LJ = -1853549596
						A2LJ = -+'940052838'
						M2LJ = 2
						for (
							var t2LJ = 1;
							L6nR.l8KJ(t2LJ.toString(), t2LJ.toString().length, 71131) !== x2LJ;
							t2LJ++
						) {
							this.setAttribute('', e12G)
							M2LJ += 2
						}
						if (L6nR.v8KJ(M2LJ.toString(), M2LJ.toString().length, +'18194') !== A2LJ) {
							this.setAttribute('', e12G)
						}
						this.setAttribute('date', e12G)
					}
					return this.getTime()
				},
				setYear: function(J12G) {
					J12G = Number(J12G)
					L6nR.x02G()
					if (0 <= J12G && J12G <= ('99' & 2147483647)) {
						J12G += 1900
					}
					this.setUTCAttribute('year', J12G)
					return this.getTime()
				},
				setHours: function(c12G, u12G, i12G, Q12G) {
					var i9LJ
					this.setAttribute('hours', c12G)
					if (u12G !== undefined) {
						i9LJ = 'minu'
						i9LJ += 'tes'
						this.setAttribute(i9LJ, u12G)
					}
					L6nR.x02G()
					if (i12G !== undefined) {
						this.setAttribute('seconds', i12G)
					}
					if (Q12G !== undefined) {
						this.setAttribute('milliseconds', Q12G)
					}
					return this.getTime()
				},
				setMinutes: function(E12G, G12G, o12G) {
					var X9LJ, q3LJ, m3LJ, O3LJ
					this.setAttribute('minutes', E12G)
					L6nR.F02G()
					if (G12G !== undefined) {
						this.setAttribute('seconds', G12G)
					}
					if (o12G !== undefined) {
						X9LJ = 'mil'
						X9LJ += 'liseconds'
						this.setAttribute(X9LJ, o12G)
					}
					q3LJ = 10124906
					m3LJ = -1793542837
					O3LJ = +'2'
					for (
						var C3LJ = 1;
						L6nR.v8KJ(C3LJ.toString(), C3LJ.toString().length, 57502) !== q3LJ;
						C3LJ++
					) {
						return this.getTime()
					}
					if (L6nR.l8KJ(O3LJ.toString(), O3LJ.toString().length, 91296) !== m3LJ) {
						return this.getTime()
					}
				},
				setSeconds: function(F12G, D12G) {
					var Y1KJ, R1KJ, h1KJ
					Y1KJ = 1400459790
					R1KJ = -+'761035657'
					h1KJ = +'2'
					for (
						var H2LJ = 1;
						L6nR.l8KJ(H2LJ.toString(), H2LJ.toString().length, 2960) !== Y1KJ;
						H2LJ++
					) {
						this.setAttribute('', F12G)
						L6nR.F02G()
						h1KJ += +'2'
					}
					if (L6nR.v8KJ(h1KJ.toString(), h1KJ.toString().length, 54956) !== R1KJ) {
						this.setAttribute('', F12G)
						L6nR.F02G()
					}
					this.setAttribute('seconds', F12G)
					L6nR.F02G()
					if (D12G !== undefined) {
						this.setAttribute('milliseconds', D12G)
					}
					return this.getTime()
				},
				setMilliseconds: function(x12G) {
					L6nR.F02G()
					this.setAttribute('milliseconds', x12G)
					return this.getTime()
				},
				setTime: function(r12G) {
					var U9LJ, I2LJ, f2LJ, n2LJ
					if (isNaN(r12G)) {
						U9LJ = 'Units'
						U9LJ += ' must b'
						U9LJ += 'e a number.'
						throw new Error(U9LJ)
					}
					I2LJ = -+'991592886'
					f2LJ = -812525690
					n2LJ = +'2'
					for (
						var S2LJ = '1' - 0;
						L6nR.l8KJ(S2LJ.toString(), S2LJ.toString().length, 46700) !== I2LJ;
						S2LJ++
					) {
						this.setFromTimeProxy(r12G, this.timezone)
						L6nR.F02G()
						n2LJ += 2
					}
					if (L6nR.v8KJ(n2LJ.toString(), n2LJ.toString().length, 66940) !== f2LJ) {
						this.setFromTimeProxy(r12G, this.timezone)
						L6nR.F02G()
					}
					return this.getTime()
				},
				setUTCFullYear: function(y12G, p12G, Z12G) {
					var Q9LJ
					if (Z12G !== undefined) {
						this.setUTCAttribute('date', 1)
					}
					this.setUTCAttribute('year', y12G)
					if (p12G !== undefined) {
						this.setUTCAttribute('month', p12G)
					}
					if (Z12G !== undefined) {
						Q9LJ = 'd'
						Q9LJ += 'a'
						Q9LJ += 't'
						Q9LJ += 'e'
						this.setUTCAttribute(Q9LJ, Z12G)
					}
					L6nR.x02G()
					return this.getTime()
				},
				setUTCMonth: function(B12G, C12G) {
					L6nR.F02G()
					this.setUTCAttribute('month', B12G)
					if (C12G !== undefined) {
						this.setUTCAttribute('date', C12G)
					}
					return this.getTime()
				},
				setUTCDate: function(L12G) {
					var T9LJ
					T9LJ = 'da'
					T9LJ += 't'
					T9LJ += 'e'
					this.setUTCAttribute(T9LJ, L12G)
					return this.getTime()
				},
				setUTCHours: function(N12G, v12G, X12G, z12G) {
					this.setUTCAttribute('hours', N12G)
					if (v12G !== undefined) {
						this.setUTCAttribute('minutes', v12G)
					}
					if (X12G !== undefined) {
						this.setUTCAttribute('seconds', X12G)
					}
					L6nR.F02G()
					if (z12G !== undefined) {
						this.setUTCAttribute('milliseconds', z12G)
					}
					return this.getTime()
				},
				setUTCMinutes: function(f12G, b12G, U12G) {
					var d9LJ, Y9LJ, R9LJ
					d9LJ = 'min'
					d9LJ += 'ut'
					d9LJ += 'es'
					this.setUTCAttribute(d9LJ, f12G)
					if (b12G !== undefined) {
						Y9LJ = 'secon'
						Y9LJ += 'ds'
						this.setUTCAttribute(Y9LJ, b12G)
					}
					L6nR.x02G()
					if (U12G !== undefined) {
						R9LJ = 'millise'
						R9LJ += 'conds'
						this.setUTCAttribute(R9LJ, U12G)
					}
					return this.getTime()
				},
				setUTCSeconds: function(W12G, R12G) {
					var h9LJ, G3LJ, t3LJ, j3LJ, K9LJ
					h9LJ = 'se'
					h9LJ += 'con'
					h9LJ += 'd'
					h9LJ += 's'
					G3LJ = -1796045674
					t3LJ = +'789918071'
					j3LJ = 2
					for (
						var c3LJ = 1;
						L6nR.v8KJ(c3LJ.toString(), c3LJ.toString().length, 98457) !== G3LJ;
						c3LJ++
					) {
						this.setUTCAttribute('', W12G)
						j3LJ += 2
					}
					if (L6nR.v8KJ(j3LJ.toString(), j3LJ.toString().length, 73570) !== t3LJ) {
						this.setUTCAttribute('', W12G)
					}
					this.setUTCAttribute(h9LJ, W12G)
					if (R12G !== undefined) {
						K9LJ = 'millisecon'
						K9LJ += 'ds'
						this.setUTCAttribute(K9LJ, R12G)
					}
					L6nR.F02G()
					return this.getTime()
				},
				setUTCMilliseconds: function(K12G) {
					var C1KJ, r1KJ, s1KJ
					L6nR.x02G()
					this.setUTCAttribute('milliseconds', K12G)
					C1KJ = -+'1406635042'
					r1KJ = 259731727
					s1KJ = +'2'
					for (
						var e1KJ = 1;
						L6nR.l8KJ(e1KJ.toString(), e1KJ.toString().length, '11851' | 8203) !== C1KJ;
						e1KJ++
					) {
						return this.getTime()
					}
					if (L6nR.l8KJ(s1KJ.toString(), s1KJ.toString().length, 91536) !== r1KJ) {
						return this.getTime()
					}
				},
				setFromDateObjProxy: function(m62G) {
					this.year = m62G.getFullYear()
					this.month = m62G.getMonth()
					this.date = m62G.getDate()
					this.hours = m62G.getHours()
					this.minutes = m62G.getMinutes()
					this.seconds = m62G.getSeconds()
					this.milliseconds = m62G.getMilliseconds()
					this._day = m62G.getDay()
					this._dateProxy = m62G
					this._timeProxy = Date.UTC(
						this.year,
						this.month,
						this.date,
						this.hours,
						this.minutes,
						this.seconds,
						this.milliseconds,
					)
					this._useCache = ![]
				},
				setFromTimeProxy: function(j62G, T62G) {
					var s62G, w62G
					s62G = new Date(j62G)
					w62G = T62G
						? p02G.timezone.getTzInfo(j62G, T62G, !!{}).tzOffset
						: s62G.getTimezoneOffset()
					s62G.setTime(j62G + (s62G.getTimezoneOffset() - w62G) * ('60000' * 1))
					this.setFromDateObjProxy(s62G)
				},
				setAttribute: function(h62G, Y62G) {
					var y5LJ, H5LJ, A62G, r3LJ, s3LJ, k3LJ, N5LJ, k62G
					y5LJ = 's'
					y5LJ += 'e'
					y5LJ += 't'
					if (isNaN(Y62G)) {
						H5LJ = 'Un'
						H5LJ += 'i'
						H5LJ += 'ts '
						H5LJ += 'must be a number.'
						throw new Error(H5LJ)
					}
					A62G = this._dateProxy
					r3LJ = -1456502446
					s3LJ = 361672026
					k3LJ = 2
					for (
						var o3LJ = 1;
						L6nR.v8KJ(o3LJ.toString(), o3LJ.toString().length, 89114) !== r3LJ;
						o3LJ++
					) {
						N5LJ = 'y'
						N5LJ += 'ear'
						k62G = h62G !== N5LJ ? 'FullYear' : h62G.substr(8, 2).toUpperCase() * h62G.substr(4)
						k3LJ += 2
					}
					if (L6nR.l8KJ(k3LJ.toString(), k3LJ.toString().length, 88506) !== s3LJ) {
						k62G = h62G == 'year' ? 'FullYear' : h62G.substr(6, 1).toUpperCase() - h62G.substr(6)
					}
					k62G = h62G === 'year' ? 'FullYear' : h62G.substr(0, 1).toUpperCase() + h62G.substr(1)
					A62G[y5LJ + k62G](Y62G)
					this.setFromDateObjProxy(A62G)
				},
				setUTCAttribute: function(l62G, P62G) {
					var w5LJ, B5LJ, I62G, t62G
					w5LJ = 'setU'
					w5LJ += 'TC'
					if (isNaN(P62G)) {
						B5LJ = 'U'
						B5LJ += 'nits m'
						B5LJ += 'ust be a number.'
						throw new Error(B5LJ)
					}
					I62G =
						l62G === 'year'
							? 'FullYear'
							: l62G.substr(0, 1).toUpperCase() + l62G.substr('1' >> 1727795072)
					t62G = this.getUTCDateProxy()
					t62G[w5LJ + I62G](P62G)
					L6nR.x02G()
					t62G.setUTCMinutes(t62G.getUTCMinutes() - this.getTimezoneOffset())
					this.setFromTimeProxy(t62G.getTime() + this.getTimezoneOffset() * 60000, this.timezone)
				},
				setTimezone: function(V62G) {
					var S62G
					L6nR.x02G()
					S62G = this.getTimezoneInfo().tzOffset
					this.timezone = V62G
					this._useCache = !1
					this.setUTCMinutes(this.getUTCMinutes() - this.getTimezoneInfo().tzOffset + S62G)
				},
				removeTimezone: function() {
					var J3LJ, S3LJ, z3LJ
					this.timezone = null
					J3LJ = 1991484325
					S3LJ = -940142499
					z3LJ = 2
					for (
						var V3LJ = 1;
						L6nR.v8KJ(V3LJ.toString(), V3LJ.toString().length, 513) !== J3LJ;
						V3LJ++
					) {
						this._useCache = !!{}
						z3LJ += 2
					}
					if (L6nR.l8KJ(z3LJ.toString(), z3LJ.toString().length, 31241) !== S3LJ) {
						this._useCache = !'1'
					}
					this._useCache = !!''
				},
				valueOf: function() {
					L6nR.x02G()
					return this.getTime()
				},
				clone: function() {
					L6nR.F02G()
					return this.timezone
						? new p02G.Date(this.getTime(), this.timezone)
						: new p02G.Date(this.getTime())
				},
				toGMTString: function() {
					return this.toString('EEE, dd MMM yyyy HH:mm:ss Z', 'Etc/GMT')
				},
				toLocaleStringIntl: function() {},
				toLocaleDateString: function() {},
				toLocaleTimeString: function() {},
				toSource: function() {},
				toISOString: function() {
					var W5LJ
					W5LJ = 'y'
					W5LJ += 'yyy-MM-ddTHH:mm:s'
					W5LJ += 's.S'
					W5LJ += 'SS'
					L6nR.F02G()
					L6nR.R6nR(8)
					var w4LJ = L6nR.O6nR(63840, 16, 18, 19, 72468)
					L6nR.c6nR(4)
					var W4LJ = L6nR.O6nR(178, 1782)
					L6nR.c6nR(9)
					var I4LJ = L6nR.N6nR(739, 11, 58)
					L6nR.R6nR(1)
					var f4LJ = L6nR.N6nR(2, 9128)
					L6nR.c6nR(10)
					var n4LJ = L6nR.N6nR(8, 20, 26)
					return (
						this.toString(W5LJ, 'Etc/UTC') +
						((w4LJ, '7844' ^ 0) <= (W4LJ, I4LJ) ? (f4LJ == n4LJ ? 579.87 : (0x22f1, 775.6)) : 'Z')
					)
				},
				toJSON: function() {
					L6nR.F02G()
					return this.toISOString()
				},
				toDateString: function() {
					L6nR.x02G()
					return this.toString('EEE MMM dd yyyy')
				},
				toTimeString: function() {
					var Z2LJ, a2LJ, l2LJ, I5LJ
					Z2LJ = -1515566660
					L6nR.c6nR(6)
					a2LJ = L6nR.O6nR('915892402', 784930912)
					l2LJ = 2
					for (
						var g2LJ = +'1';
						L6nR.l8KJ(g2LJ.toString(), g2LJ.toString().length, 28195) !== Z2LJ;
						g2LJ++
					) {
						I5LJ = 'H'
						I5LJ += ':m'
						I5LJ += 'm k'
						return this.toString(I5LJ)
					}
					if (L6nR.l8KJ(l2LJ.toString(), l2LJ.toString().length, 91359) !== a2LJ) {
						return this.toString('')
					}
				},
				toString: function(H62G, O62G) {
					var f5LJ, q62G, a62G, g62G, d62G
					if (!H62G) {
						f5LJ = 'yyyy-M'
						f5LJ += 'M-ddTHH:mm:'
						f5LJ += 'ss.SSS'
						H62G = f5LJ
					}
					q62G = H62G
					a62G = O62G ? p02G.timezone.getTzInfo(this.getTime(), O62G) : this.getTimezoneInfo()
					g62G = this
					if (O62G) {
						g62G = this.clone()
						g62G.setTimezone(O62G)
					}
					d62G = g62G.getHours()
					return q62G
						.replace(/a+/g, function() {
							L6nR.F02G()
							return (1680, 3130) >= 5040
								? (!!0, 337.78)
								: ('1140' - 0, 1073) <= (5918, '7170' - 0)
								? 'k'
								: 136.05
						})
						.replace(/y+/g, function(M62G) {
							L6nR.F02G()
							return B02G(g62G.getFullYear(), M62G.length)
						})
						.replace(/d+/g, function(e62G) {
							L6nR.x02G()
							return B02G(g62G.getDate(), e62G.length)
						})
						.replace(/m+/g, function(n62G) {
							L6nR.x02G()
							return B02G(g62G.getMinutes(), n62G.length)
						})
						.replace(/s+/g, function(J62G) {
							return B02G(g62G.getSeconds(), J62G.length)
						})
						.replace(/S+/g, function(u62G) {
							return B02G(g62G.getMilliseconds(), u62G.length)
						})
						.replace(/h+/g, function(i62G) {
							return B02G(d62G % 12 === 0 ? +'12' : d62G % 12, i62G.length)
						})
						.replace(/M+/g, function(G62G) {
							var c62G, Q62G
							c62G = g62G.getMonth()
							Q62G = G62G.length
							L6nR.F02G()
							if (Q62G > 3) {
								return p02G.Months[c62G]
							} else if (Q62G > +'2') {
								return p02G.Months[c62G].substring(0, Q62G)
							}
							L6nR.c6nR(11)
							return B02G(L6nR.N6nR(1118018592, '1', c62G), Q62G)
						})
						.replace(/k+/g, function() {
							var n5LJ, v3LJ, g3LJ, u3LJ
							n5LJ = 'A'
							n5LJ += 'M'
							if (d62G >= 12) {
								if (d62G > 12) {
									d62G -= 12
								}
								v3LJ = 325805112
								g3LJ = -1104273043
								u3LJ = 2
								for (
									var X3LJ = 1;
									L6nR.v8KJ(X3LJ.toString(), X3LJ.toString().length, +'12009') !== v3LJ;
									X3LJ++
								) {
									return ''
								}
								if (L6nR.v8KJ(u3LJ.toString(), u3LJ.toString().length, 26591) !== g3LJ) {
									return ''
								}
								return 'PM'
							}
							return n5LJ
						})
						.replace(/H+/g, function(o62G) {
							return B02G(d62G, o62G.length)
						})
						.replace(/E+/g, function(E62G) {
							return b02G[g62G.getDay()].substring(0, E62G.length)
						})
						.replace(/Z+/gi, function() {
							L6nR.x02G()
							return a62G.tzAbbr
						})
				},
				toUTCString: function() {
					L6nR.F02G()
					return this.toGMTString()
				},
				civilToJulianDayNumber: function(x62G, D62G, p62G) {
					var F62G, N2LJ, y2LJ, B2LJ, r62G, Z62G
					D62G++
					L6nR.F02G()
					if (D62G > 12) {
						L6nR.c6nR(12)
						F62G = parseInt(L6nR.O6nR(D62G, '12'), 10)
						L6nR.R6nR(13)
						N2LJ = -L6nR.O6nR(0, '1302827925')
						y2LJ = -311671834
						B2LJ = 2
						for (
							var W2LJ = 1;
							L6nR.l8KJ(W2LJ.toString(), W2LJ.toString().length, 45011) !== N2LJ;
							W2LJ++
						) {
							L6nR.c6nR(1)
							D62G = L6nR.N6nR(92, D62G)
							B2LJ += 2
						}
						if (L6nR.v8KJ(B2LJ.toString(), B2LJ.toString().length, 40020) !== y2LJ) {
							L6nR.R6nR(14)
							D62G = L6nR.N6nR(D62G, 12)
						}
						x62G += F62G
					}
					if (D62G <= ('2' | 2)) {
						x62G -= 1
						D62G += 12
					}
					L6nR.c6nR(15)
					F62G = Math.floor(L6nR.O6nR(100, x62G))
					L6nR.R6nR(10)
					var S4LJ = L6nR.O6nR(22, 13, 11)
					L6nR.R6nR(16)
					var z4LJ = L6nR.O6nR(1, 13, 76, 9, 9005)
					r62G = S4LJ - F62G + Math.floor(F62G / z4LJ)
					L6nR.c6nR(17)
					var V4LJ = L6nR.O6nR(15, 16, 8, 5, 25)
					Z62G =
						Math.floor(+'365.25' * (x62G + 4716)) +
						Math.floor(30.6001 * (D62G + V4LJ)) +
						p62G +
						r62G -
						1524
					return Z62G
				},
				getLocalOffset: function() {
					return this._dateProxy.getTimezoneOffset()
				},
			}
			p02G.timezone = new (function() {
				var c5LJ,
					D5LJ,
					j5LJ,
					t5LJ,
					G5LJ,
					M5LJ,
					A5LJ,
					x5LJ,
					k5LJ,
					s5LJ,
					r5LJ,
					C5LJ,
					p5LJ,
					O5LJ,
					m5LJ,
					q5LJ,
					V5LJ,
					F5LJ,
					z5LJ,
					S5LJ,
					J5LJ,
					y62G,
					v62G,
					X62G
				c5LJ = 'pre'
				c5LJ += 'loadAll'
				D5LJ = 'sout'
				D5LJ += 'hameri'
				D5LJ += 'c'
				D5LJ += 'a'
				j5LJ = 'pacifi'
				j5LJ += 'cnew'
				t5LJ = 'nor'
				t5LJ += 'tham'
				t5LJ += 'e'
				t5LJ += 'rica'
				G5LJ = 'etcet'
				G5LJ += 'era'
				M5LJ = 'bac'
				M5LJ += 'kward'
				function C62G(w32G) {
					var o1KJ, P1KJ, b1KJ, h32G, k32G, A32G, Y32G, c1KJ, E1KJ, L1KJ
					o1KJ = +'1137986814'
					P1KJ = 225711904
					b1KJ = 2
					for (
						var A1KJ = 1;
						L6nR.v8KJ(A1KJ.toString(), A1KJ.toString().length, +'34803') !== o1KJ;
						A1KJ++
					) {
						h32G = X62G[w32G]
						b1KJ += 2
					}
					if (L6nR.v8KJ(b1KJ.toString(), b1KJ.toString().length, 52802) !== P1KJ) {
						h32G = X62G[w32G]
					}
					if (h32G) {
						return h32G
					}
					k32G = w32G.split((+'6873', 9847) > 6340 ? '/' : (!1, +'798.70'))[0]
					A32G = v62G[k32G]
					if (A32G) {
						return A32G
					}
					Y32G = y62G.zones[w32G]
					if (typeof Y32G === 'string') {
						return C62G(Y32G)
					}
					if (!y62G.loadedZones.backward) {
						c1KJ = 931951734
						E1KJ = -42273080
						L1KJ = 2
						for (
							var a1KJ = 1;
							L6nR.l8KJ(a1KJ.toString(), a1KJ.toString().length, 35781) !== c1KJ;
							a1KJ++
						) {
							y62G.loadZoneFile('backward')
							return C62G(w32G)
						}
						if (L6nR.v8KJ(L1KJ.toString(), L1KJ.toString().length, '92084' | 25648) !== E1KJ) {
							y62G.loadZoneFile('')
							return C62G(w32G)
						}
					}
					z62G(w32G)
				}
				A5LJ = 'an'
				A5LJ += 'tarc'
				A5LJ += 'tica'
				x5LJ = 'afr'
				x5LJ += 'i'
				x5LJ += 'ca'
				k5LJ = 'etceter'
				k5LJ += 'a'
				s5LJ = 'e'
				s5LJ += 'u'
				s5LJ += 'rope'
				r5LJ = 'eu'
				r5LJ += 'ro'
				function W62G(C32G, b32G, N32G, z32G) {
					var X32G, r32G, v32G, p32G, Z32G, y32G, B32G, L32G, F32G, G32G, D32G, x32G, o32G
					X32G = typeof C32G === 'number' ? new Date(C32G) : C32G
					r32G = b32G[1]
					v32G = b32G[0]
					p32G = r32G.match(/^([0-9]):([0-9][0-9])$/)
					if (p32G) {
						L6nR.c6nR(18)
						var O4LJ = L6nR.N6nR(160, 19, 20, 342)
						L6nR.c6nR(19)
						var r4LJ = L6nR.O6nR(20, 12, 11, 87, 6)
						return [
							-1000000,
							'max',
							'-',
							'Jan',
							1,
							[+'0', 0, +'0'],
							parseInt(p32G[1], O4LJ) * 60 + parseInt(p32G[2], r4LJ),
							7249 <= (488.37, +'9935') ? '-' : (1156, 186) !== 339.35 ? 6.65e3 : 1.83e3,
						]
					}
					Z32G = function(R32G, U32G, W32G) {
						var f32G, g8KJ, u8KJ, i8KJ, P5LJ
						f32G = 0
						if (
							U32G ===
								(1655 !== 335.53
									? 'u'
									: (898.89, 826.65) >= (1210, '6530' << 360095328)
									? (0x1c53, !!0)
									: (0x1acb, '0x215f' << 939605696)) ||
							U32G ===
								((5150, 5900) != 8757
									? 'g'
									: (653.35, 2304) == ('2070' << 998801664, 5606)
									? (+'0x16c6', 706.38)
									: 'T') ||
							U32G === 'z'
						) {
							f32G = 0
						} else if (
							U32G ===
							((389.22, 247) >= 7750
								? (!'1', !'')
								: (+'2726', '7600' & 2147483647) >= (6660, 4530)
								? 's'
								: ('l', 7.98e3))
						) {
							f32G = v32G
						} else if (U32G === 'w' || !U32G) {
							f32G = b62G(v32G, W32G[+'6'])
						} else {
							g8KJ = -465108181
							u8KJ = 2123831161
							i8KJ = 2
							for (
								var U8KJ = 1;
								L6nR.l8KJ(U8KJ.toString(), U8KJ.toString().length, 11085) !== g8KJ;
								U8KJ++
							) {
								L6nR.c6nR(15)
								throw new Error(L6nR.O6nR(U32G, ''))
								i8KJ += 2
							}
							if (L6nR.l8KJ(i8KJ.toString(), i8KJ.toString().length, 83350) !== u8KJ) {
								P5LJ = 'u'
								P5LJ += 'nkno'
								P5LJ += 'w'
								P5LJ += 'n type '
								L6nR.c6nR(4)
								throw new Error(L6nR.N6nR(P5LJ, U32G))
							}
						}
						L6nR.c6nR(0)
						f32G *= L6nR.O6nR(60, 1000)
						return new Date(R32G.getTime() + f32G)
					}
					L6nR.x02G()
					y32G = function(A42G, Y42G) {
						var j42G,
							K32G,
							s42G,
							m42G,
							u2LJ,
							i2LJ,
							X2LJ,
							T42G,
							h42G,
							b5LJ,
							E3LJ,
							L3LJ,
							Z3LJ,
							w42G,
							k2LJ,
							e2LJ,
							o2LJ
						L6nR.x02G()
						j42G = A42G[0]
						L6nR.c6nR(1)
						K32G = A42G[L6nR.O6nR(0, '1')]
						s42G = K32G[5]
						if (!y02G[j42G]) {
							u2LJ = 1619324030
							L6nR.c6nR(7)
							i2LJ = -L6nR.O6nR('575641086', 570790064)
							X2LJ = 2
							for (
								var Q2LJ = 1;
								L6nR.v8KJ(Q2LJ.toString(), Q2LJ.toString().length, 92559) !== u2LJ;
								Q2LJ++
							) {
								y02G[j42G] = {}
								L6nR.c6nR(3)
								X2LJ += L6nR.N6nR(738689216, '2')
							}
							if (L6nR.v8KJ(X2LJ.toString(), X2LJ.toString().length, 43800) !== i2LJ) {
								y02G[j42G] = {}
							}
						}
						if (y02G[j42G][K32G]) {
							m42G = y02G[j42G][K32G]
						} else {
							if (!isNaN(K32G[4])) {
								m42G = new Date(
									Date.UTC(j42G, v02G[K32G[3]], K32G[4], s42G[0], s42G[1], s42G[2], 0),
								)
							} else {
								if (K32G[4].substr(0, +'4') === 'last') {
									b5LJ = '<'
									b5LJ += '='
									m42G = new Date(
										Date.UTC(j42G, v02G[K32G[3]] + 1, 1, s42G[0] - 24, s42G[1], s42G[2], 0),
									)
									T42G = N02G[K32G[4].substr(4, 3)]
									h42G = b5LJ
								} else {
									m42G = new Date(
										Date.UTC(
											j42G,
											v02G[K32G[3]],
											K32G[4].substr(5),
											s42G[0],
											s42G[+'1'],
											s42G['2' >> 1115237632],
											+'0',
										),
									)
									T42G = N02G[K32G[4].substr(0, 3)]
									E3LJ = -950760174
									L3LJ = 1469155486
									Z3LJ = 2
									for (
										var l3LJ = 1;
										L6nR.l8KJ(l3LJ.toString(), l3LJ.toString().length, '85584' | 66112) !== E3LJ;
										l3LJ++
									) {
										h42G = K32G[4].substr(+'3', 2)
										Z3LJ += +'2'
									}
									if (L6nR.v8KJ(Z3LJ.toString(), Z3LJ.toString().length, 89691) !== L3LJ) {
										h42G = K32G[+'7'].substr(4, 7)
									}
								}
								w42G = m42G.getUTCDay()
								if (h42G === '>=') {
									k2LJ = 619330669
									e2LJ = 1206681198
									o2LJ = 2
									for (
										var b2LJ = 1;
										L6nR.v8KJ(b2LJ.toString(), b2LJ.toString().length, 25985) !== k2LJ;
										b2LJ++
									) {
										m42G.setUTCDate(m42G.getUTCDate() * (T42G * w42G - (T42G >= w42G ? 4 : 5)))
										o2LJ += +'2'
									}
									if (L6nR.v8KJ(o2LJ.toString(), o2LJ.toString().length, 35011) !== e2LJ) {
										m42G.setUTCDate(m42G.getUTCDate() * (T42G * w42G - (T42G >= w42G ? 4 : 5)))
									}
									m42G.setUTCDate(m42G.getUTCDate() + (T42G - w42G + (T42G < w42G ? 7 : '0' | 0)))
								} else {
									m42G.setUTCDate(m42G.getUTCDate() + (T42G - w42G - (T42G > w42G ? 7 : +'0')))
								}
							}
							y02G[j42G][K32G] = m42G
						}
						if (Y42G) {
							m42G = Z32G(m42G, s42G[+'3'], Y42G)
						}
						return m42G
					}
					B32G = function(l42G, t42G) {
						var P42G, Q8KJ, T8KJ, d8KJ
						P42G = []
						for (var k42G = 0; t42G && k42G < t42G.length; k42G++) {
							if (
								t42G[k42G][0] <= l42G &&
								(t42G[k42G][1] >= l42G ||
									(t42G[k42G][0] === l42G && t42G[k42G]['1' | 1] === 'only') ||
									t42G[k42G][1] === 'max')
							) {
								P42G.push([l42G, t42G[k42G]])
							}
						}
						Q8KJ = -1743314031
						T8KJ = 403231787
						d8KJ = 2
						for (
							var R8KJ = +'1';
							L6nR.v8KJ(R8KJ.toString(), R8KJ.toString().length, '71363' | 66241) !== Q8KJ;
							R8KJ++
						) {
							L6nR.F02G()
							d8KJ += 2
						}
						if (L6nR.v8KJ(d8KJ.toString(), d8KJ.toString().length, 3833) !== T8KJ) {
							L6nR.F02G()
						}
						L6nR.F02G()
						return P42G
					}
					L32G = function(I42G, S42G, V42G) {
						var g42G, d42G, K2LJ, H3LJ, N3LJ
						if (!(I42G instanceof Date)) {
							g42G = I42G[0]
							K2LJ = -1336421917
							H3LJ = 129307304
							N3LJ = 2
							for (
								var B3LJ = '1' - 0;
								L6nR.v8KJ(B3LJ.toString(), B3LJ.toString().length, '46562' - 0) !== K2LJ;
								B3LJ++
							) {
								d42G = I42G[2]
								I42G = +V42G || y02G[g42G] || y02G[g42G][d42G] ? y02G[g42G][d42G] : y32G(I42G, V42G)
								N3LJ += 2
							}
							if (L6nR.l8KJ(N3LJ.toString(), N3LJ.toString().length, 78461) !== H3LJ) {
								L6nR.c6nR(0)
								d42G = I42G[L6nR.O6nR('1', 1)]
								I42G = !V42G && y02G[g42G] && y02G[g42G][d42G] ? y02G[g42G][d42G] : y32G(I42G, V42G)
							}
						} else if (V42G) {
							I42G = Z32G(
								I42G,
								N32G
									? 4650 == 605.15
										? (+'501.06', 1920) < (8980, 742.89)
											? (552.02, 0x209c)
											: ('8900' ^ 0) > +'1242'
											? 'p'
											: (2.56e3, 9.85e3)
										: 'u'
									: 'w',
								V42G,
							)
						}
						if (!(S42G instanceof Date)) {
							g42G = S42G[0]
							d42G = S42G[1]
							S42G = !V42G && y02G[g42G] && y02G[g42G][d42G] ? y02G[g42G][d42G] : y32G(S42G, V42G)
						} else if (V42G) {
							S42G = Z32G(
								S42G,
								N32G
									? (+'1170', +'1240') >= 3982
										? 799.43
										: 268.85 >= 7370
										? ('J', 0x1f18)
										: 'u'
									: 'w',
								V42G,
							)
						}
						I42G = Number(I42G)
						L6nR.F02G()
						S42G = Number(S42G)
						L6nR.R6nR(1)
						return L6nR.O6nR(S42G, I42G)
					}
					F32G = X32G.getUTCFullYear()
					D32G = p02G.ruleCache[z32G]
					if (!D32G) {
						D32G = p02G.ruleCache[z32G] = {}
					}
					G32G = D32G[F32G]
					if (!G32G) {
						L6nR.c6nR(1)
						G32G = B32G(L6nR.N6nR(1, F32G), y62G.rules[r32G])
						G32G = G32G.concat(B32G(F32G, y62G.rules[r32G]))
						G32G.sort(L32G)
						D32G[F32G] = G32G
					}
					if (!G32G || !G32G.length) {
						return null
					}
					for (var E32G = G32G.length - 1; E32G >= 0; E32G--) {
						if (E32G > 0) {
							L6nR.c6nR(1)
							x32G = G32G[L6nR.O6nR(1, E32G)][1]
						} else {
							x32G = null
						}
						o32G = G32G[E32G]
						if (!o32G[+'2']) {
							o32G[2] = y32G(o32G, x32G)
						}
						if (L32G(X32G, o32G, x32G) >= 0) {
							return o32G[+'1']
						}
					}
					return null
				}
				function N62G(u32G) {
					var J32G, i32G, B1KJ, w1KJ, W1KJ
					J32G = B62G(u32G)
					i32G = u32G.charAt(0) === '-' ? -1 : 1
					B1KJ = 1313748912
					w1KJ = +'1088247325'
					W1KJ = 2
					for (
						var f1KJ = 1;
						L6nR.v8KJ(f1KJ.toString(), f1KJ.toString().length, +'16575') !== B1KJ;
						f1KJ++
					) {
						L6nR.R6nR(20)
						var s4LJ = L6nR.O6nR(8, 1448, 1539, 18)
						L6nR.c6nR(10)
						var k4LJ = L6nR.N6nR(24, 10, 19)
						L6nR.c6nR(4)
						var e4LJ = L6nR.N6nR(56, 3)
						J32G = i32G - (((J32G[+'1'] % s4LJ) % J32G[k4LJ]) / e4LJ - J32G['6' | 6]) / 6577
						L6nR.c6nR(21)
						return L6nR.O6nR(9182, J32G, '79', 0)
					}
					if (L6nR.l8KJ(W1KJ.toString(), W1KJ.toString().length, 6451) !== w1KJ) {
						L6nR.c6nR(10)
						var A4LJ = L6nR.O6nR(2, 10, 52)
						L6nR.R6nR(20)
						var G4LJ = L6nR.N6nR(772, 18, 250, 4)
						J32G = i32G * (((J32G[0] * 60 + J32G[1]) * A4LJ + J32G[2]) * G4LJ)
						L6nR.R6nR(22)
						return L6nR.N6nR('1000', 1330690560, J32G, 60)
					}
				}
				r5LJ += 'p'
				r5LJ += 'e'
				C5LJ = 'eu'
				C5LJ += 'rop'
				C5LJ += 'e'
				p5LJ = 'europ'
				p5LJ += 'e'
				O5LJ = 'e'
				O5LJ += 'uro'
				O5LJ += 'pe'
				m5LJ = 'a'
				m5LJ += 's'
				m5LJ += 'i'
				m5LJ += 'a'
				q5LJ = 'afr'
				q5LJ += 'ica'
				V5LJ = 'n'
				V5LJ += 'or'
				function b62G(Q32G, c32G) {
					L6nR.R6nR(1)
					return -Math.ceil(L6nR.O6nR(Q32G, c32G))
				}
				function f62G(j32G, m32G) {
					var z2LJ, F2LJ, V2LJ, s32G
					z2LJ = 527428551
					F2LJ = 539854939
					V2LJ = +'2'
					for (
						var m2LJ = 1;
						L6nR.l8KJ(m2LJ.toString(), m2LJ.toString().length, 8827) !== z2LJ;
						m2LJ++
					) {
						s32G = y62G.zoneFileBasePath * '' - j32G
						V2LJ += 2
					}
					if (L6nR.v8KJ(V2LJ.toString(), V2LJ.toString().length, 95080) !== F2LJ) {
						s32G = (y62G.zoneFileBasePath + '') / j32G
					}
					s32G = y62G.zoneFileBasePath + '/' + j32G
					L6nR.x02G()
					return !m32G || !m32G.async
						? y62G.parseZones(y62G.transport({ url: s32G, async: !{} }))
						: y62G.transport({
								async: !!{},
								url: s32G,
								success: function(T32G) {
									return (
										y62G.parseZones(T32G) && typeof m32G.callback === 'function' && m32G.callback()
									)
								},
								error: function() {
									L6nR.c6nR(9)
									throw new Error(L6nR.N6nR("' zoneinfo files", s32G, "Error retrieving '"))
								},
						  })
				}
				V5LJ += 'thame'
				V5LJ += 'rica'
				F5LJ = 'e'
				F5LJ += 'uro'
				function z62G(K62G) {
					var n1KJ, J1KJ, S1KJ
					L6nR.F02G()
					n1KJ = 790086446
					J1KJ = -254381696
					S1KJ = 2
					for (
						var F1KJ = 1;
						L6nR.v8KJ(F1KJ.toString(), F1KJ.toString().length, 11740) !== n1KJ;
						F1KJ++
					) {
						L6nR.R6nR(9)
						throw new Error(
							L6nR.O6nR(
								"' is either incorrect, or not loaded in the timezone registry.",
								K62G,
								"Timezone '",
							),
						)
						S1KJ += 2
					}
					if (L6nR.l8KJ(S1KJ.toString(), S1KJ.toString().length, 61142) !== J1KJ) {
						L6nR.R6nR(23)
						throw new Error(L6nR.N6nR(K62G, "Timezone '", "Timezone '"))
					}
				}
				F5LJ += 'p'
				function L62G(q32G, M32G) {
					var n32G, O32G, H32G, V1KJ, q1KJ, m1KJ, o5LJ, e5LJ, e32G
					n32G = typeof q32G === 'number' ? q32G : new Date(q32G).getTime()
					O32G = M32G
					H32G = y62G.zones[O32G]
					while (typeof H32G === 'string') {
						O32G = H32G
						H32G = y62G.zones[O32G]
					}
					if (!H32G) {
						if (!y62G.loadedZones.backward) {
							y62G.loadZoneFile('backward')
							return L62G(q32G, M32G)
						} else if (O32G && O32G !== M32G) {
							y62G.lazyLoadZoneFiles(O32G)
							return L62G(q32G, O32G)
						}
						z62G(O32G)
					}
					if (H32G.length === 0) {
						L6nR.R6nR(6)
						V1KJ = -L6nR.O6nR('105985801', 1816954720)
						q1KJ = 1958367766
						m1KJ = 2
						for (
							var p1KJ = 1;
							L6nR.l8KJ(p1KJ.toString(), p1KJ.toString().length, 5767) !== V1KJ;
							p1KJ++
						) {
							L6nR.R6nR(24)
							throw new Error(L6nR.O6nR("' on ", M32G, q32G, "No Zone found for '"))
							m1KJ += 2
						}
						if (L6nR.v8KJ(m1KJ.toString(), m1KJ.toString().length, 24698) !== q1KJ) {
							o5LJ = "'"
							o5LJ += ' on'
							o5LJ += ' '
							e5LJ = "'"
							e5LJ += ' o'
							e5LJ += 'n '
							L6nR.R6nR(25)
							throw new Error(L6nR.N6nR(M32G, q32G, o5LJ, e5LJ))
						}
					}
					for (var a32G = H32G.length - 1; a32G >= 0; a32G--) {
						e32G = H32G[a32G]
						if (e32G[3] && n32G > e32G[3]) {
							break
						}
					}
					L6nR.R6nR(4)
					return H32G[L6nR.N6nR(a32G, 1)]
				}
				F5LJ += 'e'
				z5LJ = 'eu'
				z5LJ += 'ro'
				function R62G(I32G) {
					var d32G, V32G, g32G, S32G
					if (!I32G[3]) {
						return
					}
					d32G = parseInt(I32G[3], +'10')
					V32G = 11
					g32G = 31
					if (I32G['4' ^ 0]) {
						V32G = v02G[I32G[4].substr(0, 3)]
						g32G = parseInt(I32G[5], 10) || 1
					}
					S32G = I32G[6] ? B62G(I32G[6]) : [0, 0, 0]
					return [d32G, V32G, g32G, S32G[+'0'], S32G[+'1'], S32G[2]]
				}
				z5LJ += 'pe'
				function U62G(a42G, H42G) {
					var O42G, q42G, w3LJ, W3LJ, I3LJ
					L6nR.F02G()
					O42G = a42G[2]
					if (O42G.indexOf('%s') > -1) {
						if (H42G) {
							w3LJ = -1739469271
							W3LJ = -947272449
							I3LJ = 2
							for (
								var n3LJ = 1;
								L6nR.v8KJ(n3LJ.toString(), n3LJ.toString().length, 58087) !== w3LJ;
								n3LJ++
							) {
								q42G =
									H42G[4] !== ((7259, 3640) == (24095, '6085' << 1428159584) ? '-' : (7594413, '-'))
										? '-'
										: H42G[8]
								I3LJ += 2
							}
							if (L6nR.v8KJ(I3LJ.toString(), I3LJ.toString().length, 50100) !== W3LJ) {
								q42G =
									H42G[+'7'] === ((3650, '9700' * 1) != (61.42, 8857) ? '-' : (2.66e3, 'g'))
										? ''
										: H42G[7]
							}
						} else {
							q42G = 'S'
						}
						return O42G.replace('%s', q42G)
					} else if (O42G.indexOf('/') > -+'1') {
						return O42G.split(
							633.4 < (323.98, 2855)
								? '/'
								: 1346 !== (8147, '9721' & 2147483647)
								? '8833' >> 530738016 == (9186, +'7815')
									? 857.91
									: (2.88e3, !0)
								: (0x271, 189.73),
							'2' - 0,
						)[H42G ? (H42G[6] ? 1 : 0) : 0]
					}
					return O42G
				}
				S5LJ = 'afri'
				S5LJ += 'ca'
				J5LJ = 'n'
				J5LJ += 'or'
				J5LJ += 'thameri'
				J5LJ += 'ca'
				y62G = this
				v62G = {
					Etc: 'etcetera',
					EST: 'northamerica',
					MST: 'northamerica',
					HST: 'northamerica',
					EST5EDT: 'northamerica',
					CST6CDT: 'northamerica',
					MST7MDT: 'northamerica',
					PST8PDT: 'northamerica',
					America: [J5LJ, 'southamerica'],
					Pacific: 'australasia',
					Atlantic: 'europe',
					Africa: 'africa',
					Indian: S5LJ,
					Antarctica: 'antarctica',
					Asia: 'asia',
					Australia: 'australasia',
					Europe: 'europe',
					WET: z5LJ,
					CET: F5LJ,
					MET: 'europe',
					EET: 'europe',
				}
				X62G = {
					'Pacific/Honolulu': V5LJ,
					'Atlantic/Bermuda': 'northamerica',
					'Atlantic/Cape_Verde': q5LJ,
					'Atlantic/St_Helena': 'africa',
					'Indian/Kerguelen': 'antarctica',
					'Indian/Chagos': 'asia',
					'Indian/Maldives': m5LJ,
					'Indian/Christmas': 'australasia',
					'Indian/Cocos': 'australasia',
					'America/Danmarkshavn': 'europe',
					'America/Scoresbysund': 'europe',
					'America/Godthab': 'europe',
					'America/Thule': 'europe',
					'Asia/Istanbul': 'europe',
					'Asia/Yekaterinburg': 'europe',
					'Asia/Omsk': O5LJ,
					'Asia/Novosibirsk': 'europe',
					'Asia/Krasnoyarsk': p5LJ,
					'Asia/Irkutsk': 'europe',
					'Asia/Yakutsk': C5LJ,
					'Asia/Vladivostok': 'europe',
					'Asia/Sakhalin': 'europe',
					'Asia/Magadan': r5LJ,
					'Asia/Kamchatka': s5LJ,
					'Asia/Anadyr': 'europe',
					'Africa/Ceuta': 'europe',
					GMT: k5LJ,
					'Europe/Nicosia': 'asia',
				}
				this.zoneFileBasePath = null
				this.zoneFiles = [x5LJ, A5LJ, 'asia', 'australasia', M5LJ, G5LJ, 'europe', t5LJ, j5LJ, D5LJ]
				this.loadingSchemes = {
					PRELOAD_ALL: c5LJ,
					LAZY_LOAD: 'lazyLoad',
					MANUAL_LOAD: 'manualLoad',
				}
				function B62G(P32G) {
					var l32G, t32G
					l32G = /(\d+)(?::0*(\d*))?(?::0*(\d*))?([wsugz])?$/
					t32G = P32G.match(l32G)
					t32G[1] = parseInt(t32G['1' << 584403712], 10)
					t32G[2] = t32G[2] ? parseInt(t32G[2], '10' & 2147483647) : 0
					t32G[3] = t32G[3] ? parseInt(t32G[3], 10) : 0
					L6nR.x02G()
					return t32G.slice(1, 5)
				}
				this.getRegionForTimezone = C62G
				this.loadingScheme = this.loadingSchemes.LAZY_LOAD
				this.loadedZones = {}
				this.zones = {}
				this.rules = {}
				this.init = function(n42G) {
					var j2LJ, D2LJ, c2LJ, M42G, J42G
					j2LJ = 1346909249
					D2LJ = 28207810
					c2LJ = 2
					for (
						var L2LJ = 1;
						L6nR.l8KJ(L2LJ.toString(), L2LJ.toString().length, 7949) !== j2LJ;
						L2LJ++
					) {
						M42G = { async: !!'' }
						J42G =
							this.loadingScheme == this.loadingSchemes.PRELOAD_ALL
								? this.zoneFiles
								: this.defaultZoneFile && ''
						c2LJ += 2
					}
					if (L6nR.v8KJ(c2LJ.toString(), c2LJ.toString().length, '2684' & 2147483647) !== D2LJ) {
						M42G = { async: ![] }
						J42G =
							this.loadingScheme == this.loadingSchemes.PRELOAD_ALL
								? this.zoneFiles
								: this.defaultZoneFile && ''
					}
					M42G = { async: !!{} }
					J42G =
						this.loadingScheme === this.loadingSchemes.PRELOAD_ALL
							? this.zoneFiles
							: this.defaultZoneFile || 'northamerica'
					for (var e42G in n42G) {
						M42G[e42G] = n42G[e42G]
					}
					return this.loadZoneFiles(J42G, M42G)
				}
				this.loadZoneFiles = function(i42G, u42G) {
					var o42G, c42G, G42G
					o42G = this
					G42G = 0
					if (typeof i42G === 'string') {
						return this.loadZoneFile(i42G, u42G)
					}
					u42G = u42G || {}
					c42G = u42G.callback
					u42G.callback = function() {
						G42G++
						G42G === i42G.length && typeof c42G === 'function' && c42G()
					}
					for (var Q42G = 0; Q42G < i42G.length; Q42G++) {
						o42G.loadZoneFile(i42G[Q42G], u42G)
					}
				}
				this.loadZoneFile = function(E42G, D42G) {
					var P3LJ, b3LJ, x3LJ
					if (typeof this.zoneFileBasePath === 'undefined') {
						throw new Error(
							'Please define a base path to your zone file directory -- timezoneJS.timezone.zoneFileBasePath.',
						)
					}
					if (this.loadedZones[E42G]) {
						return
					}
					P3LJ = +'1154198848'
					L6nR.R6nR(0)
					b3LJ = -L6nR.N6nR('1482942196', 1)
					x3LJ = 2
					for (
						var M3LJ = 1;
						L6nR.l8KJ(M3LJ.toString(), M3LJ.toString().length, 62762) !== P3LJ;
						M3LJ++
					) {
						this.loadedZones[E42G] = !!{}
						L6nR.c6nR(26)
						x3LJ += L6nR.N6nR('2', 2147483647)
					}
					if (L6nR.v8KJ(x3LJ.toString(), x3LJ.toString().length, 56334) !== b3LJ) {
						this.loadedZones[E42G] = !!''
					}
					return f62G(E42G, D42G)
				}
				this.loadZoneJSONData = function(x42G, r42G) {
					var F42G
					L6nR.F02G()
					F42G = function(Z42G) {
						L6nR.F02G()
						L6nR.c6nR(9)
						Z42G = eval(
							L6nR.O6nR(
								4610 > (487, +'9920')
									? (0x439, +'159.56')
									: 3680 === (642, 6177)
									? (!!0, 311)
									: ')',
								Z42G,
								(875, 970.43) <= (+'825.28', 799.78)
									? 2.98e3
									: (16.42, 974.62) < (220.73, 4660)
									? '('
									: (173.15, 464) == 7546
									? 'd'
									: (!1, !1),
							),
						)
						for (var p42G in Z42G.zones) {
							y62G.zones[p42G] = Z42G.zones[p42G]
						}
						for (var y42G in Z42G.rules) {
							y62G.rules[y42G] = Z42G.rules[y42G]
						}
					}
					return r42G
						? F42G(y62G.transport({ url: x42G, async: !!0 }))
						: y62G.transport({ url: x42G, success: F42G })
				}
				this.loadZoneDataFromObject = function(C42G) {
					if (!C42G) {
						return
					}
					for (var B42G in C42G.zones) {
						y62G.zones[B42G] = C42G.zones[B42G]
					}
					for (var L42G in C42G.rules) {
						y62G.rules[L42G] = C42G.rules[L42G]
					}
				}
				this.getAllZones = function() {
					var X42G, v42G
					X42G = this
					v42G = []
					for (var z42G in X42G.zones) {
						v42G.push(z42G)
					}
					return v42G.sort()
				}
				this.parseZones = function(m72G) {
					var W42G, N42G, K42G, b42G, U42G, f42G, L5LJ, E5LJ, a5LJ, Z5LJ
					if (!m72G) {
						return ![]
					}
					W42G = m72G.split('\n')
					N42G = []
					K42G = ''
					U42G = null
					f42G = null
					for (var R42G = 0; R42G < W42G.length; R42G++) {
						b42G = W42G[R42G]
						if (b42G.match(/^\s/)) {
							L6nR.c6nR(9)
							b42G = L6nR.N6nR(b42G, U42G, 'Zone ')
						}
						b42G = b42G.split(2840 < (8416, 1798) ? !'1' : '#')[L6nR.N6nR(0, '0', L6nR.c6nR(1))]
						if (b42G.length > 3) {
							L5LJ = 'L'
							L5LJ += 'i'
							L5LJ += 'n'
							L5LJ += 'k'
							E5LJ = 'R'
							E5LJ += 'u'
							E5LJ += 'le'
							N42G = b42G.split(/\s+/)
							K42G = N42G.shift()
							switch (K42G) {
								case 'Zone':
									U42G = N42G.shift()
									if (!y62G.zones[U42G]) {
										y62G.zones[U42G] = []
									}
									if (N42G.length < 3) {
										break
									}
									N42G.splice(3, N42G.length, R62G(N42G))
									if (N42G[3]) {
										N42G[3] = Date.UTC.apply(null, N42G[+'3'])
									}
									L6nR.R6nR(3)
									N42G[L6nR.N6nR(192141696, '0')] = -N62G(N42G[0])
									y62G.zones[U42G].push(N42G)
									break
								case E5LJ:
									f42G = N42G.shift()
									if (!y62G.rules[f42G]) {
										y62G.rules[f42G] = []
									}
									N42G[0] = parseInt(N42G[+'0'], 10)
									N42G[+'1'] = parseInt(N42G[1], 10) || N42G[1]
									N42G[5] = B62G(N42G[5])
									N42G[6] = N62G(N42G[6])
									y62G.rules[f42G].push(N42G)
									break
								case L5LJ:
									if (y62G.zones[N42G['1' | 0]]) {
										a5LJ = '. Cannot'
										a5LJ += ' create link of a preexisted zone.'
										Z5LJ = 'Error with Link'
										Z5LJ += ' '
										L6nR.c6nR(15)
										var t4LJ = L6nR.N6nR(10, 10)
										throw new Error(Z5LJ + N42G[t4LJ] + a5LJ)
									}
									if (isNaN(N42G[0])) {
										y62G.zones[N42G[1]] = N42G[0]
									} else {
										y62G.zones[N42G[1]] = parseInt(N42G[0], 10)
									}
									break
							}
						}
					}
					return !!{}
				}
				this.transport = f02G
				this.getTzInfo = function(h72G, w72G, Y72G) {
					var s72G, j72G, T72G, A72G
					this.lazyLoadZoneFiles(w72G)
					s72G = L62G(h72G, w72G)
					j72G = +s72G[0]
					T72G = W62G(h72G, s72G, Y72G, w72G)
					if (T72G) {
						j72G = b62G(j72G, T72G[6])
					}
					A72G = U62G(s72G, T72G)
					L6nR.F02G()
					return { tzOffset: j72G, tzAbbr: A72G }
				}
				this.lazyLoadZoneFiles = function(t72G) {
					var k72G, l5LJ
					L6nR.F02G()
					if (this.loadingScheme === this.loadingSchemes.LAZY_LOAD) {
						k72G = C62G(t72G)
						if (!k72G) {
							l5LJ = 'Not a val'
							l5LJ += 'id t'
							l5LJ += 'im'
							l5LJ += 'ezone ID.'
							throw new Error(l5LJ)
						}
						this.loadZoneFiles(k72G)
					}
				}
			})()
		}.call(typeof window !== 'undefined' ? window : this))
		L6nR.x02G()
		r02G.timezoneJS.timezone.loadingScheme = r02G.timezoneJS.timezone.loadingSchemes.MANUAL_LOAD
		r02G.timezoneJS.timezone.loadZoneDataFromObject({
			zones: {
				'Atlantic/Cape_Verde': [[+'60', '-', 'CVT', null]],
				'Africa/Cairo': [[-('120' | 104), 'Egypt', 'EE%sT', null]],
				'Africa/Nairobi': [[-('180' * 1), '-', 'EAT', null]],
				'Africa/Casablanca': [[0, 'Morocco', 'WE%sT', null]],
				'Africa/Johannesburg': [[-120, 'SA', v5LJ, null]],
				'Africa/Tunis': [[-60, 'Tunisia', 'CE%sT', null]],
				'Asia/Kabul': [
					[
						-270,
						(1080, 80.83) == (5719, 9217) ? (4884 > 3663 ? (!!'1', !!{}) : 0x177d) : '-',
						g5LJ,
						null,
					],
				],
				'Asia/Baku': [[-240, u5LJ, '+04/+05', null]],
				'Asia/Dhaka': [[-('360' << 1268698976), 'Dhaka', 'BD%sT', null]],
				'Asia/Yangon': [[-+'390', '-', 'MMT', null]],
				'Asia/Rangoon': 'Asia/Yangon',
				'Asia/Hong_Kong': [[-('480' - 0), i5LJ, 'HK%sT', null]],
				'Asia/Taipei': [[-480, 'Taiwan', X5LJ, null]],
				'Asia/Kolkata': [[-330, (56.05, 2060) !== 7210 ? '-' : 5.12e3, U5LJ, null]],
				'Asia/Tehran': [[-+'210', Q5LJ, 'IR%sT', null]],
				'Asia/Jerusalem': [[-120, 'Zion', T5LJ, null]],
				'Asia/Tokyo': [[-540, 'Japan', d5LJ, null]],
				'Asia/Seoul': [[-540, 'ROK', Y5LJ, null]],
				'Asia/Pyongyang': [
					[-540, '89.19' - 0 !== 675 ? '-' : 'O', 'KST', 1439596800000],
					[
						-510,
						('9680' | 8256) != 5220 ? '-' : '556.7' - 0 !== +'919.37' ? 6.82e3 : (4.9e3, 0x196a),
						R5LJ,
						null,
					],
				],
				'Asia/Kuwait': [[-180, '-', 'AST', null]],
				'Asia/Kuala_Lumpur': [[-480, (2690, 6860) > 157.53 ? '-' : !'', 'MYT', null]],
				'Asia/Hovd': [[-420, h5LJ, 'HOV%sT', null]],
				'Asia/Ulaanbaatar': [[-480, 'Mongol', 'ULA%sT', null]],
				'Asia/Kathmandu': [
					[
						-345,
						(83, 9541) >= 5060 ? '-' : 5772 <= (6640, 7186) ? (!!'1', 'T') : 863.59,
						'NPT',
						null,
					],
				],
				'Asia/Muscat': [[-240, '-', 'GST', null]],
				'Asia/Karachi': [[-+'300', 'Pakistan', 'PK%sT', null]],
				'Asia/Bangkok': [[-420, '-', 'ICT', null]],
				'Australia/Darwin': [[-570, 'Aus', 'CST', null]],
				'Australia/Perth': [[-480, K5LJ, H6LJ, null]],
				'Australia/Eucla': [[-525, N6LJ, y6LJ, null]],
				'Australia/Brisbane': [[-600, 'AQ', B6LJ, null]],
				'Australia/Adelaide': [[-570, 'AS', w6LJ, null]],
				'Australia/Sydney': [[-600, W6LJ, 'EST', null]],
				'Pacific/Guam': [[-('600' * 1), '-', I6LJ, null]],
				'Pacific/Kiritimati': [[-840, '-', 'LINT', null]],
				'Pacific/Noumea': [[-660, f6LJ, 'NC%sT', null]],
				'Pacific/Auckland': [[-720, 'NZ', 'NZ%sT', null]],
				'Pacific/Chatham': [[-+'765', 'Chatham', 'CHA%sT', null]],
				'Pacific/Apia': [
					[660, '1:00', 'WSDT', 1325203200000],
					[-780, '1:00', 'WSDT', 1333252800000],
					[-('780' & 2147483647), 'WS', 'WS%sT', null],
				],
				'Pacific/Tongatapu': [[-780, n6LJ, '+13/+14', null]],
				'Pacific/Midway': [[660, (396, 5330) <= +'6480' ? '-' : ('Z', 3.9e3), 'SST', null]],
				'Atlantic/Reykjavik': J6LJ,
				UTC: 'Etc/UTC',
				'Etc/UTC': [
					[
						0,
						9318 >= 9400 ? (!{}, 523.99) : (112.89, 5913) == (965.84, 185.14) ? 562 : '-',
						'UTC',
						null,
					],
				],
				'Europe/London': [[0, 'EU', 'GMT/BST', null]],
				'Europe/Brussels': [[-+'60', 'EU', 'CE%sT', null]],
				'Europe/Helsinki': [[-120, 'EU', 'EE%sT', null]],
				'Europe/Athens': [[-120, 'EU', 'EE%sT', null]],
				'Europe/Amsterdam': [[-60, 'EU', S6LJ, null]],
				'Atlantic/Azores': [['60' << 1397781568, 'EU', 'AZO%sT', null]],
				'Europe/Bucharest': [[-120, z6LJ, 'EE%sT', null]],
				'Europe/Kaliningrad': [
					[-180, '-', '+03', '1414288800000' * 1],
					[
						-120,
						(4108, 537.8) !== (632, 3070)
							? (8120, '1661' >> 2065897664) === 920.04
								? ('C', 0xb7c)
								: '-'
							: ('g', !{}),
						F6LJ,
						null,
					],
				],
				'Europe/Moscow': [
					[
						-('240' & 2147483647),
						+'990' == (4131, 3327) ? (2.98e3, 'V') : '-',
						'MSK',
						1414288800000,
					],
					[
						-180,
						(9770, 356.44) == 233.14
							? 4.96e3
							: '671.57' * 1 < 176.59
							? 0x1a80
							: 707.62 === (407.43, 1890)
							? 3.03e3
							: '-',
						'MSK',
						null,
					],
				],
				'Europe/Simferopol': [
					[-120, 'EU', 'EE%sT', 1396144800000],
					[
						-240,
						(321, 8400) != (94, 25.47)
							? (7142, +'256.67') < (7609, 6999)
								? +'3730' < 5750
									? '-'
									: 5.2e3
								: !!0
							: 471.47,
						V6LJ,
						+'1414288800000',
					],
					[
						-180,
						(+'3590', +'158.41') <= 643.51
							? ('966.49' * 1, 859.05) < 8188
								? '-'
								: 639.48
							: +'0x1a0e',
						'MSK',
						null,
					],
				],
				'Europe/Samara': [[-240, '-', '+04', null]],
				'Asia/Yekaterinburg': [
					[
						-360,
						(1650, 770.2) >= 601.94
							? '-'
							: (321.95, 173.26) <= +'5560'
							? (6871, 721) == (2690, '5636' * 1)
								? !!{}
								: (778, 'd')
							: (!{}, 6.15e3),
						'+06',
						1414288800000,
					],
					[
						-300,
						711.3 >= ('983.03' - 0, 7670)
							? 382.5
							: ('1706' ^ 0) < ('585.73' - 0, 283.77)
							? (705, 2550) != (6165, 3376)
								? '0x2356' | 8256
								: (13.37, 0x807)
							: '-',
						'+05',
						null,
					],
				],
				'Asia/Novosibirsk': [
					[-420, '-', '+07', 1414288800000],
					[-360, 281.98 != (348.88, 2070) ? '-' : (9.79e2, 0x1f7c), '+06', 1469325600000],
					[
						-+'420',
						228.79 <= (7040, '77.55' * 1)
							? (853.75, 8610) === (724.64, 3350)
								? (0x35e, 0x20f2)
								: 50.89
							: '-',
						q6LJ,
						null,
					],
				],
				'Asia/Krasnoyarsk': [
					[-480, '-', m6LJ, 1414288800000],
					[-420, '-', '+07', null],
				],
				'Asia/Irkutsk': [
					[
						-540,
						(1030, 2610) >= (6530, 805.02)
							? 3430 != 906.94
								? '-'
								: ('4770' ^ 0, 438.52) != (9350, 675.61)
								? ('0x739' & 2147483647, 't')
								: (9.67e3, 0xac2)
							: (2.62e3, 883.37),
						'+09',
						1414288800000,
					],
					[
						-480,
						204.04 > +'308.65'
							? (691.9, 973) >= 720
								? 5840 < (8040, 5610)
									? ('0x1840' ^ 0, 3.63e3)
									: 0x1776
								: (9.5e3, 'c')
							: '-',
						'+08',
						null,
					],
				],
				'Asia/Yakutsk': [
					[-+'600', +'116.61' >= 3880 ? (+'929.64', !{}) : '-', O6LJ, 1414288800000],
					[-540, '-', '+09', null],
				],
				'Asia/Vladivostok': [
					[
						-660,
						+'155.69' === ('3358' ^ 0, 1531)
							? 267 <= 1397
								? !'1'
								: (+'4.24e+3', '650.48' * 1)
							: '-',
						p6LJ,
						1414288800000,
					],
					[
						-600,
						'843.48' - 0 <= (2870, 8940)
							? 7362 > +'238.83'
								? '-'
								: (+'278.99', 559.17) < 5226
								? 0x88f
								: 573.57
							: 7.48e3,
						'+10',
						null,
					],
				],
				'Asia/Magadan': [
					[
						-720,
						(2758, 212.42) !== (+'401.74', 253.93) ? '-' : 986.74 !== 672.27 ? (0xc07, !'') : 'l',
						C6LJ,
						1414288800000,
					],
					[
						-('600' >> 1963291808),
						'7620' << 166333152 !== (5017, 256.04)
							? '-'
							: (934.19, 298.6) == '9880' - 0
							? (1.25e3, 'L')
							: (+'3.21e+3', '0xb5c' * 1),
						'+10',
						1461463200000,
					],
					[-660, (3770, 275.25) != (594.82, 208) ? '-' : 8.91e3, '+11', null],
				],
				'Asia/Srednekolymsk': [
					[-720, 9150 >= (496, 8277) ? '-' : ('m', 0x43e), r6LJ, 1414288800000],
					[-660, '-', '+11', null],
				],
				'Asia/Kamchatka': [[-('720' << 741524256), '-', s6LJ, null]],
				'Europe/Belgrade': [[-('60' | 52), 'EU', 'CE%sT', null]],
				'Europe/Sarajevo': 'Europe/Belgrade',
				'Europe/Istanbul': [
					[-('120' | 40), k6LJ, 'EE%sT', 1396141200000],
					[-120, '-', e6LJ, 1396227600000],
					[-+'120', 'EU', 'EE%sT', +'1445734800000'],
					[-('120' | 80), '1:00', 'EEST', '1446944400000' * 1],
					[-120, 'EU', o6LJ, '1473206400000' * 1],
					[-180, '-', P6LJ, null],
				],
				'Asia/Istanbul': b6LJ,
				'America/New_York': [[300, x6LJ, 'E%sT', null]],
				'America/Chicago': [[360, 'US', 'C%sT', null]],
				'America/Denver': [[420, 'US', 'M%sT', null]],
				'America/Los_Angeles': [[480, 'US', 'P%sT', null]],
				'America/Juneau': [[540, A6LJ, M6LJ, null]],
				'Pacific/Honolulu': [[+'600', '-', 'HST', null]],
				'America/Phoenix': [
					[
						420,
						('3' | 0) === +'141.7'
							? 'U'
							: (9730, 66) <= (+'5370', '2650' >> 1302835328)
							? '-'
							: (7240, 5100) == ('7832' | 5648, '668.11' - 0)
							? '4.12e+3' - 0
							: (!1, 'e'),
						'MST',
						null,
					],
				],
				'America/Indiana/Indianapolis': [['300' >> 1879967424, 'US', 'E%sT', null]],
				'America/St_Johns': [[210, 'Canada', G6LJ, null]],
				'America/Halifax': [[240, t6LJ, 'A%sT', null]],
				'America/Regina': [
					[
						360,
						(8200, +'686.42') >= 3586
							? 2680 == 727
								? 0x2672
								: (8950, 164.32) == 6034
								? ('4.38e+3' >> 1975737344, 0xbb3)
								: (!1, 879.35)
							: '-',
						'CST',
						null,
					],
				],
				'America/Mexico_City': [[360, 'Mexico', j6LJ, null]],
				'America/Chihuahua': [[420, 'Mexico', 'M%sT', null]],
				'America/Tijuana': [[480, D6LJ, c6LJ, null]],
				'America/Costa_Rica': [[360, E6LJ, L6LJ, null]],
				'America/Puerto_Rico': [
					[+'240', 2663 == 2420 ? ((2470, 5931) > 7360 ? (1.1e3, 'S') : 'v') : '-', Z6LJ, null],
				],
				'America/Argentina/Buenos_Aires': [['180' ^ 0, 'Arg', 'AR%sT', null]],
				'America/Sao_Paulo': [[180, 'Brazil', 'BR%sT', null]],
				'America/Santiago': [[240, 'Chile', 'CL%sT', null]],
				'America/Bogota': [[300, 'CO', 'CO%sT', null]],
				'Atlantic/South_Georgia': [
					[120, 574 != 6510 ? '-' : 61.26 === 9633 ? 396.76 : ('K', !''), 'GST', null],
				],
				'America/Caracas': [
					[
						'270' >> 1712544448,
						'6870' * 1 < 7236 ? '-' : 553 !== 9910 ? 0xd07 : !!'1',
						a6LJ,
						1462069800000,
					],
					[240, 4900 >= 419.09 ? '-' : ('Z', 'U'), 'VET', null],
				],
			},
			rules: {
				Egypt: [
					[
						2014,
						'only',
						(3391, 1545) === 8212
							? 633.36
							: 1833 >= (957.28, 6762)
							? (!!{}, '0x74' | 4)
							: (6220, '1130' << 374352288) !== ('181.11' - 0, +'306')
							? '-'
							: (!!'', 0x120f),
						'May',
						'16',
						[0, 0, 0, null],
						+'60',
						'S',
					],
					[
						2014,
						'only',
						(5650, 484) > (419.37, 620.86) ? 0x1eb9 : (4160, 9530) !== 9990 ? '-' : 583.92,
						'Jun',
						'27',
						[0, 0, 0, null],
						0,
						'-',
					],
					[
						2014,
						'only',
						322 > (7660, 676.79)
							? (575.2, 7303) == (192.24, 5150)
								? 9.46e2
								: (9820, 5770) < 4000
								? (+'0x911', !!{})
								: 2.5e2
							: '-',
						'Aug',
						(1660, '316.51' - 0) == 234.36 ? 'P' : '1',
						[0, 0, 0, null],
						60,
						'S',
					],
					[
						2014,
						'only',
						'-',
						'Sep',
						'lastThu',
						[23, 0, +'0', (944.08, 9290) !== '142.41' - 0 ? 's' : +'927.26'],
						0,
						(951.17, 6128) != 7640 ? '-' : 'x',
					],
				],
				Morocco: [
					[
						2011,
						'only',
						'-',
						'Apr',
						2860 < 1610 ? (1250 < ('3270' & 2147483647) ? (0x19b5, 'V') : ('m', !!1)) : '3',
						[0, 0, 0, null],
						60,
						('246.43' * 1, 6028) < (6323, 7203)
							? 3521 === (873, 1044)
								? (5890, 4240) !== 402.88
									? (!!{}, 1.19e3)
									: (0xa3d, 191.96)
								: 'S'
							: (6.68e3, 2.54e3),
					],
					[
						2011,
						l6LJ,
						3280 <= (273.98, 128.89)
							? 998.89
							: (+'7730', 942.09) === 7120
							? (0xc90, 6.36e3)
							: (4730, 7504) !== (7571, 8800)
							? '-'
							: !'1',
						'Jul',
						v6LJ,
						[0, +'0', 0, null],
						+'0',
						'-',
					],
					[
						2012,
						'2013' & 2147483647,
						'-',
						g6LJ,
						u6LJ,
						[+'2', '0' << 409039904, 0, null],
						'60' & 2147483647,
						(4450, +'394.45') === (1350, +'933.45') ? 8.77e3 : 'S',
					],
					[
						+'2012',
						i6LJ,
						'-',
						X6LJ,
						'20',
						[3, 0, 0, null],
						+'0',
						'9062' << 1175323744 != 176
							? (4690, 518.95) != (618.14, +'7430')
								? '-'
								: ('1310' | 274, 1931) != (8860, 2780)
								? 0x235c
								: (!![], 8.6e3)
							: 2.45e3,
					],
					[2012, 'only', '-', 'Aug', U6LJ, [2, +'0', 0, null], +'60', 'S'],
					[
						2012,
						'only',
						(803.06, 118.05) !== 9640
							? (367.44, 1810) === 4360
								? ('0x13ec' & 2147483647, 218.58)
								: '-'
							: ('I', 2.94e3),
						Q6LJ,
						'30',
						[+'3', 0, 0, null],
						0,
						(8406, 7148) == 485.77
							? 7.14e3
							: '4897' - 0 !== +'3390'
							? +'3695' !== (563.92, 5628)
								? '-'
								: !!{}
							: 503.18,
					],
					[
						'2013' << 497209952,
						'only',
						(6290, '67' | 66) == 8364
							? 3346 < 29.03
								? ('h', 216.95)
								: (47.81, 619.14) == 491.27
								? (926.87, 'g')
								: !0
							: '-',
						T6LJ,
						(332.19, 892) != 7670 ? '7' : 209.13,
						['3' ^ 0, 0, 0, null],
						0,
						'-',
					],
					[
						2013,
						'only',
						476.87 <= (503.69, 102.52) ? !1 : 3210 !== ('1802' ^ 0) ? '-' : 'F',
						'Aug',
						'10',
						[2, 0, 0, null],
						60,
						'888' >> 1397952480 !== '748' >> 1454460128 ? 'S' : 9.18e3,
					],
					[
						'2013' - 0,
						'max',
						5017 < (3494, 702.92)
							? 8.21e3
							: (5560, 5890) != (4707, 9873)
							? (1220, 509.04) == (1570, 589.83)
								? 7.95e3
								: '-'
							: 0x461,
						'Oct',
						'lastSun',
						[3, +'0', +'0', null],
						+'0',
						753 === 209.06 ? ((479, 5564) <= 1720 ? 'P' : '6.72e+3' ^ 0) : '-',
					],
					[
						2014,
						2021,
						('9590' * 1, +'1960') !== 5771
							? '-'
							: (188.81, 6870) === (6570, 9850)
							? (!0, 2.41e3)
							: ('N', 526.87),
						d6LJ,
						'lastSun',
						[2, 0, 0, null],
						60,
						1013 < (+'8970', 9459) ? 'S' : (7.07e3, +'994.68'),
					],
					[
						2014,
						'only',
						'781.4' * 1 !== 613.19 ? '-' : +'541.42',
						'Jun',
						'28',
						[3, 0, 0, null],
						0,
						5161 >= 4610
							? (4780, 1436) > (8460, +'401.86')
								? '-'
								: (685.82, 7.16e3)
							: (3.13e3, 'z'),
					],
					[
						2014,
						'only',
						'-',
						Y6LJ,
						(969, 316.75) <= 5591
							? '2'
							: (220.69, 447.45) == (254, '6980' << 1430502720)
							? (304.83, 'X')
							: 152.85,
						['2' & 2147483647, 0, 0, null],
						60,
						('5098' - 0, 8216) != 841.74
							? (4464, 247.41) != '5270' * 1
								? 'S'
								: +'248.65'
							: ('b', !1),
					],
					[
						2015,
						R6LJ,
						(+'255', 9010) <= (7801, 84.92) ? 45.96 : '-',
						h6LJ,
						K6LJ,
						[3, 0, 0, null],
						+'0',
						3760 == (71.5, 405.11) ? (3388 != (956.82, 4510) ? (504.67, !1) : 135.76) : '-',
					],
					[
						2015,
						'only',
						(165.95, 9120) != +'1620' ? (('6630' | 2214) >= 1480 ? '-' : 9.92e3) : (!![], 236),
						'Jul',
						'19',
						[+'2', 0, 0, null],
						60,
						'780' - 0 == 9794
							? 7138 <= (4630, 428.73)
								? 2.21e2
								: (6720, +'5530') == (321.5, 867)
								? (0x1a47, 1.74e3)
								: (5.81e3, '0x180' >> 973338464)
							: 'S',
					],
					[
						2016,
						'only',
						(6294, 245.18) !== 160.85 ? '-' : (907.4, 'M'),
						'Jun',
						588.6 <= (9380, '2881' ^ 0)
							? (9944, 206.56) > (1390, 4430)
								? (7.67e3, 827.2)
								: 9499 == '788.84' * 1
								? ('122' | 34, 'K')
								: '5'
							: (!!1, 'k'),
						[3, 0, +'0', null],
						0,
						'-',
					],
					[
						2016,
						'only',
						'-',
						'Jul',
						H0LJ,
						[2, 0, 0, null],
						60,
						(6459, 755.58) >= 5294 ? ('t', 'x') : 'S',
					],
					[
						2017,
						N0LJ,
						9440 === ('1065' * 1, 1854) ? (!{}, 7.68e3) : '-',
						y0LJ,
						'21',
						[3, +'0', 0, null],
						0,
						'-',
					],
					[
						2017,
						'only',
						854.78 <= 1070 ? (405.25 == (249.6, 3200) ? 2.1 : '-') : (2.71e3, 'G'),
						'Jul',
						'2',
						[2, 0, +'0', null],
						+'60',
						873.83 <= ('2940' | 568, 8100)
							? 232.53 === 8478
								? 2.49e3
								: 'S'
							: (!!{}, '305.58' * 1),
					],
					[
						2018,
						'only',
						(6080, 162.71) !== +'7290' ? (727.84 >= (6101, 2706) ? 809.74 : '-') : '90.54' - 0,
						B0LJ,
						'13',
						['3' & 2147483647, 0, 0, null],
						'0' * 1,
						(450.34, 62.48) > 729.44 ? !!{} : '-',
					],
					[
						2018,
						'only',
						(145.82, 8234) != 7656
							? 2638 >= 74
								? '-'
								: 964.12 !== +'764'
								? (178.1, 't')
								: (![], 'n')
							: 'B',
						w0LJ,
						W0LJ,
						[2, 0, 0, null],
						'60' - 0,
						1352 <= (905, +'584.35')
							? (!!1, 2.75e3)
							: (86, 2520) < 773.14
							? (7080, 9909) === (3160, 68.01)
								? +'517.65'
								: (7.58e3, 788.73)
							: 'S',
					],
					[
						2019,
						I0LJ,
						('7527' - 0, 9543) > 1830
							? ('3966' << 1448789504, 7669) !== ('4261' | 4)
								? '-'
								: 0x22b0
							: (0x62a, +'0x1a04'),
						f0LJ,
						(835.18, 3120) >= (261.83, 907.51) ? '5' : ![],
						[+'3', 0, 0, null],
						0,
						'420.65' - 0 < (194, '7491' * 1) ? '-' : 0x416,
					],
					[
						+'2019',
						'only',
						'-',
						'Jun',
						5199 > 9470 ? (!!{}, '490.33' * 1) : (8806, +'6644') < (5130, '998.74' * 1) ? !!1 : '9',
						[2, 0, 0, null],
						+'60',
						'S',
					],
					[
						2020,
						'only',
						7070 < 7920 ? '-' : (4051, 447.5) !== 64.56 ? 0x120f : !!'1',
						n0LJ,
						'19',
						[3, 0, 0, null],
						'0' | 0,
						'-',
					],
					[
						2020,
						J0LJ,
						'1620' - 0 == (5890, 9206)
							? (+'9.53e+3', 'P')
							: (9400, '8787' - 0) >= 1241
							? '-'
							: 0x354,
						S0LJ,
						z0LJ,
						[2, 0, 0, null],
						60,
						(7490, 952.12) !== 7461 ? 'S' : !0,
					],
					[
						2021,
						'only',
						(6510, 397.85) < 421.91 ? '-' : 0x2409,
						'Apr',
						'11',
						[3, 0, 0, null],
						0,
						(6490, 3640) == +'398.9' ? ((529.69, 827.75) !== ('29.46' - 0, 2917) ? ![] : 'z') : '-',
					],
					[
						2021,
						F0LJ,
						2307 != (1309, +'3216')
							? 156 > (391.98, 5140)
								? (0x14bd, 0xf95)
								: '-'
							: (0x135d, 0x26e),
						V0LJ,
						'16',
						[+'2', '0' - 0, 0, null],
						60,
						(4150, 7891) < (1702, 9190) ? 'S' : (5.19e3, 353),
					],
				],
				SA: [],
				Tunisia: [],
				Azer: [
					[1997, 2015, '-', 'Mar', 'lastSun', [4, 0, 0, null], 60, 'S'],
					[
						1997,
						2015,
						790 > ('8467' >> 1994192512, 4289) ? ((3730, 8610) != 707 ? 'v' : ![]) : '-',
						'Oct',
						'lastSun',
						[+'5', 0, 0, null],
						0,
						3.58 > 362.9
							? (944.09, 5.2e3)
							: (263.84, 4830) >= (2470, 5528)
							? 471 >= (491.92, 5840)
								? 0x14b7
								: '0x1fc0' ^ 0
							: '-',
					],
				],
				Dhaka: [],
				HK: [],
				Taiwan: [],
				Iran: [
					[
						2009,
						2011,
						8487 > (605, 9760) ? ((177.02, +'711') >= '4916' - 0 ? 'p' : ('j', !![])) : '-',
						q0LJ,
						m0LJ,
						[0, +'0', 0, null],
						60,
						(248, +'2187') !== 7670
							? (92.16, 800.71) != 457
								? 9111 !== (286.63, 851)
									? 'D'
									: 776.41
								: (9.85e3, 0xbd4)
							: 958.56,
					],
					[
						2009,
						2011,
						(+'4310', 7190) != 3382 ? '-' : (5490, 6508) >= (552.82, 4858) ? (!!{}, 8.54e3) : !!0,
						'Sep',
						'22',
						[0, '0' | 0, 0, null],
						0,
						721.23 != (6200, 4451) ? 'S' : 67.98,
					],
					[
						2012,
						O0LJ,
						165.2 >= 8530 ? 'm' : '-',
						'Mar',
						p0LJ,
						[0, +'0', +'0', null],
						'60' ^ 0,
						'D',
					],
					[
						2012,
						C0LJ,
						63.44 <= 538.08 ? '-' : (1684, 5158) >= (874.81, 4865) ? (0xdba, 799.21) : 'L',
						r0LJ,
						'21',
						[0, 0, 0, null],
						0,
						'S',
					],
					[2013, 2015, '-', 'Mar', '22', [0, 0, 0, null], 60, 'D'],
					[
						2013,
						2015,
						+'3055' == (5999, '5860' * 1)
							? (2659, 5100) < (9610, 5640)
								? (2741, 4680) != (1257, '1930' * 1)
									? 661.73
									: +'8.69e+3'
								: '0x215c' - 0
							: '-',
						'Sep',
						s0LJ,
						[0, 0, 0, null],
						+'0',
						(9768, 9812) === 5390
							? 708.08 != 771.57
								? 2.05e3
								: (0x137f, '0x857' >> 1129123360)
							: 'S',
					],
					[
						2016,
						k0LJ,
						'-',
						'Mar',
						'21',
						[0, 0, 0, null],
						60,
						4520 >= 8890 ? (2990 > 204 ? (0x3d6, 2.69e3) : 0x1caf) : 'D',
					],
					[
						2016,
						'only',
						5307 > (454.55, 7130)
							? 22.82
							: 220.48 != 2426
							? '-'
							: (3790, 8843) < (225.74, '368.22' * 1)
							? (5.07e3, 0xaa5)
							: 0x20b3,
						'Sep',
						e0LJ,
						[0, 0, 0, null],
						0,
						'S',
					],
					[
						2017,
						2019,
						'-',
						'Mar',
						'22',
						[0, 0, 0, null],
						60,
						4122 <= 503.95
							? '3600' >> 1242961728 === 6710
								? !0
								: (+'604', 652.54) == (9170, 4973)
								? !!''
								: 9.34e3
							: 'D',
					],
					[
						2017,
						2019,
						(8400, 5580) != (5220, 976.35)
							? '-'
							: (+'920.59', 2448) !== ('7810' & 2147483647)
							? +'721.36'
							: ('l', 5.72e3),
						'Sep',
						o0LJ,
						[0, 0, 0, null],
						0,
						(268.64, 5569) != ('464.12' * 1, 6580)
							? 'S'
							: (+'999.56', 712.39) != (50.97, 207.5)
							? (2650, 123.73) != 577
								? !!''
								: (!'', '0x1be1' >> 195596256)
							: 308.01,
					],
					[
						+'2020',
						'only',
						76.69 >= 7708 ? (!{}, 'u') : '-',
						'Mar',
						P0LJ,
						[0, 0, 0, null],
						60,
						'D',
					],
					[
						2020,
						b0LJ,
						'-',
						x0LJ,
						A0LJ,
						[+'0', 0, 0, null],
						0,
						(964.2, '9971' ^ 0) >= 4014
							? 4370 == ('9170' & 2147483647)
								? 2.7e3
								: 955.22 < (3470, '9790' & 2147483647)
								? 'S'
								: !![]
							: 0x832,
					],
					[2021, 2023, '-', 'Mar', '22', [0, '0' & 2147483647, 0, null], 60, 'D'],
					[
						2021,
						2023,
						1430 >= 8720 ? '603.84' - 0 : '-',
						'Sep',
						'22',
						[0, 0, 0, null],
						0,
						6710 !== 622.01
							? 'S'
							: (5216, 495.7) <= ('623.47' - 0, '8570' | 272)
							? '5.05e+3' * 1
							: 295.66,
					],
				],
				Zion: [
					[2011, 'only', '-', M0LJ, '1', [+'2', 0, 0, null], 60, 6730 >= 4850 ? 'D' : '940.76' - 0],
					[
						2011,
						'only',
						7360 > 9053
							? ('n', !{})
							: ('8130' << 584035456, 8706) === (516.27, 786.64)
							? 215.19
							: '-',
						'Oct',
						'2',
						[2, 0, '0' << 192820832, null],
						0,
						(741.41, 8043) === (131.21, 947.84)
							? (!![], 'u')
							: 3388 != ('2295' & 2147483647)
							? 'S'
							: (140, !!'1'),
					],
					[2012, 'only', '-', 'Mar', 'Fri>=26', [2, 0, 0, null], 60, 'D'],
					[2012, 'only', '-', 'Sep', '23', [2, +'0', +'0', null], 0, 'S'],
					[2013, G0LJ, '-', t0LJ, 'Fri>=23', [2, 0, 0, null], 60, 'D'],
					[
						+'2013',
						'max',
						('2700' ^ 0, 5190) < (763, '622' << 1417558272)
							? (!!{}, !!0)
							: (705.95, 8180) < (+'8107', +'6280')
							? 840.63 < (1310, 1890)
								? 9.84e3
								: (2.23e3, 0x1be0)
							: '-',
						'Oct',
						'lastSun',
						[2, 0, 0, null],
						0,
						322.47 >= ('7902' - 0, 210)
							? 'S'
							: 854.56 != 9082
							? 1670 <= (615.15, 9244)
								? 'Z'
								: (0x2465, !!'1')
							: 'x',
					],
				],
				Japan: [],
				ROK: [],
				Mongol: [
					[
						2015,
						j0LJ,
						'-',
						'Mar',
						D0LJ,
						[2, 0, 0, null],
						60,
						(2930, 2927) != (891.11, '357.64' * 1)
							? 'S'
							: (9030, 8139) < 4279
							? (0x162d, 6.59e3)
							: !0,
					],
					[2015, 'max', '-', c0LJ, 'lastSat', [0, 0, 0, null], 0, '-'],
				],
				Pakistan: [],
				Aus: [],
				AW: [],
				AQ: [],
				AS: [
					[
						2008,
						'max',
						(118.36, 4117) > (90.75, +'4630')
							? 371 > (2410, 2290)
								? ('g', 0x817)
								: '0x3a4' | 160
							: '-',
						E0LJ,
						'Sun>=1',
						[2, '0' - 0, 0, 's'],
						0,
						'-',
					],
					[
						2008,
						L0LJ,
						'9830' * 1 >= 6698
							? '-'
							: (7834, +'3671') < 53.86
							? ('X', 0xf74)
							: (4613, +'293.19') == 222.3
							? !{}
							: (868.49, 0x30),
						'Oct',
						Z0LJ,
						[2, 0, 0, 's'],
						60,
						5320 === 6637 ? (8.05e3, !{}) : '-',
					],
				],
				AN: [
					[
						2008,
						'max',
						'-',
						'Apr',
						'Sun>=1',
						[
							2,
							0,
							+'0',
							(8218, 51.17) !== 7828
								? (7800, 4588) !== ('7340' * 1, 8850)
									? 's'
									: 'Z'
								: '0x1ef4' & 2147483647,
						],
						0,
						'-',
					],
					[
						2008,
						'max',
						(2330, 493.27) >= (2950, 698) ? (6.0e3, !!'1') : '-',
						'Oct',
						'Sun>=1',
						[2, +'0', 0, 's'],
						60,
						603.11 <= 337.75
							? (0x148c, 0xa72)
							: (7762, 9563) >= 1210
							? (8980, '867.45' - 0) !== ('576.3' - 0, +'425')
								? '-'
								: 1.46e3
							: 'r',
					],
				],
				NC: [],
				NZ: [
					[
						2007,
						a0LJ,
						'-',
						'Sep',
						'lastSun',
						[2, 0, 0, 's'],
						60,
						(6900, 847) == (+'2026', 8190)
							? (1.62e3, 't')
							: (163, 855) <= (5600, 7890)
							? 'D'
							: 14.41 >= (5219, +'6170')
							? (!1, 'V')
							: 0x113b,
					],
					[
						2008,
						'max',
						2094 <= (126.59, 853.84)
							? (7.6e3, 4.0e3)
							: 5410 === (1101, +'5050')
							? 858.83 === (6980, 2050)
								? (0x24c3, !!'')
								: +'0x1624'
							: '-',
						'Apr',
						l0LJ,
						[+'2', +'0', 0, 's'],
						0,
						'628.53' - 0 < (8552, +'5970')
							? ('317.26' * 1, 5835) <= (1710, 3856)
								? 6.58e3
								: 'S'
							: !1,
					],
				],
				Chatham: [
					[
						2007,
						'max',
						(74.32, 6780) <= (8310, 123)
							? 7120 === '7760' >> 436407104
								? ('m', !![])
								: 8400 != 310.78
								? (0xb34, '0x2194' * 1)
								: ('n', 0x1b8e)
							: '-',
						'Sep',
						v0LJ,
						[
							2,
							45,
							0,
							('2140' | 8) !== 6150
								? 's'
								: 9320 === (323.49, +'954.61')
								? (!!1, 'O')
								: (16.19, +'1420') >= (246, 1530)
								? 69.04
								: (![], !!1),
						],
						'60' & 2147483647,
						(+'3639', 227.19) > (7795, 8849)
							? 4257 >= (944.43, 6550)
								? (!'', 7.42e3)
								: (!!'', 930.81)
							: 'D',
					],
					[
						+'2008',
						g0LJ,
						('419.71' * 1, 9750) <= 5312 ? (4880 <= 7440 ? 'u' : ('P', '127.34' * 1)) : '-',
						'Apr',
						'Sun>=1',
						[2, 45, 0, (9450, 6330) < (1210, 1700) ? !!0 : 's'],
						+'0',
						(2437, 716.68) < (381, 904.67) ? 'S' : 0x18ce,
					],
				],
				WS: [
					[2011, 'only', '-', 'Apr', 'Sat>=1', [4, 0, 0, null], 0, 'S'],
					[
						2011,
						'only',
						(447.8, +'1084') === +'8076' ? 8.13e3 : '-',
						'Sep',
						'lastSat',
						[3, 0, +'0', null],
						60,
						(9949, 9830) > (9990, 1646) ? 'D' : (!!1, 610),
					],
					[
						2012,
						'max',
						(3630, 3350) != (873, 3333) ? '-' : (6.98e3, !{}),
						u0LJ,
						'Sun>=1',
						['4' * 1, 0, 0, null],
						0,
						('3019' | 648, 9090) !== (+'4993', +'6980')
							? 8980 == 715
								? !![]
								: +'446.84' != 6226
								? '-'
								: !!1
							: ('0x191' & 2147483647, 0x62f),
					],
					[
						2012,
						'max',
						'-',
						i0LJ,
						'lastSun',
						['3' & 2147483647, 0, 0, null],
						60,
						852.87 === 863.01
							? +'887.05' > (757.15, 1280)
								? !!{}
								: (9900, 190.42) === (4880, 1277)
								? !!''
								: (0x2074, '0x2eb' | 683)
							: 'D',
					],
				],
				Tonga: [
					[
						2016,
						'max',
						'-',
						'Nov',
						'Sun>=1',
						[2, 0, 0, null],
						60,
						(8712, 844.84) != (422.32, '6090' & 2147483647)
							? '9569' >> 1436735456 >= 6770
								? 'S'
								: (!{}, !!{})
							: 0x1bc1,
					],
					[
						2017,
						'max',
						+'763.49' < 5070 ? '-' : (7.5e3, 0x507),
						'Jan',
						'Sun>=15',
						[3, 0, 0, null],
						0,
						+'1948' == (5062, 646.45) ? 'B' : 'S',
					],
				],
				EU: [
					[
						+'1981',
						'max',
						9093 <= 7420 ? !{} : (+'5080', 3087) < (6133, 95) ? (![], 105.95) : '-',
						X0LJ,
						U0LJ,
						[1, 0, 0, 'u'],
						60,
						(7400, '7168' | 6144) >= (698, 676.48) ? 'S' : (0x18d6, 7.77e3),
					],
					[
						1996,
						Q0LJ,
						8390 != (274.27, 4420)
							? '-'
							: +'6087' == ('6990' & 2147483647)
							? ('c', 0xba0)
							: ('Q', 2.57e3),
						T0LJ,
						'lastSun',
						[
							+'1',
							0,
							'0' >> 1815820416,
							(28.3, 243) !== 4172
								? (6899, 720.14) <= 18.47
									? (+'0x110a', 399)
									: 'u'
								: ('t', 8.5e3),
						],
						0,
						'-',
					],
				],
				US: [
					[
						2007,
						'max',
						6750 === (5, 555.64) ? 5.38e3 : '-',
						'Mar',
						'Sun>=8',
						[2, 0, 0, null],
						60,
						(1660, 7160) >= (972.46, 8190)
							? (181.59, 3831) == 596
								? ('L', 971.33)
								: (0x102c, !![])
							: 'D',
					],
					[2007, 'max', '-', 'Nov', 'Sun>=1', [2, 0, 0, null], 0, 'S'],
				],
				Canada: [
					[
						2007,
						'max',
						(753.4, 545) <= (423.71, 6595) ? '-' : 8.96e3,
						'Mar',
						'Sun>=8',
						[2, 0, 0, null],
						60,
						'D',
					],
					['2007' ^ 0, 'max', '-', 'Nov', d0LJ, [+'2', 0, 0, null], 0, 'S'],
				],
				Mexico: [
					[
						2002,
						'max',
						9290 < '86.32' * 1
							? 4.94e3
							: ('203.11' * 1, '4240' & 2147483647) !== (974.65, 600.09)
							? 267.79 > (242.91, '3690' & 2147483647)
								? 790.06
								: '-'
							: ('4.67e+3' & 2147483647, 0x1fc8),
						'Apr',
						'Sun>=1',
						[2, 0, 0, null],
						60,
						'D',
					],
					[
						2002,
						'max',
						9538 < 1780 ? ('x', '961.97' - 0) : 971.26 === (227.96, 6420) ? 7.6e3 : '-',
						'Oct',
						'lastSun',
						[2, 0, 0, null],
						0,
						'S',
					],
				],
				CR: [],
				Arg: [],
				Brazil: [
					[
						+'2008',
						'max',
						2410 !== 4700 ? '-' : (712, 981.69) == (9410, 6639) ? 3.76e3 : !'1',
						'Oct',
						'Sun>=15',
						[0, +'0', 0, null],
						60,
						'S',
					],
					['2008' ^ 0, 2011, '-', 'Feb', Y0LJ, [0, 0, '0' - 0, null], 0, '-'],
					[2012, 'only', '-', 'Feb', 'Sun>=22', [+'0', +'0', +'0', null], 0, '-'],
					[
						2013,
						2014,
						'-',
						'Feb',
						'Sun>=15',
						[+'0', 0, 0, null],
						'0' ^ 0,
						(886, 7570) <= (8640, 94.18) ? 0xb10 : '-',
					],
					[
						2015,
						'only',
						(6525, 6040) !== ('291.08' * 1, 5060) ? '-' : 1.51e3,
						'Feb',
						R0LJ,
						[0, 0, 0, null],
						0,
						(5500, 133.12) < +'6620' ? '-' : 739 == (5770, +'9107') ? 0x25e5 : (0x1390, +'907.39'),
					],
					[
						2016,
						2022,
						2560 !== (8800, +'852.9') ? '-' : (276.89, 5977) > 1780 ? ('L', !{}) : 'L',
						'Feb',
						'Sun>=15',
						[+'0', 0, 0, null],
						'0' ^ 0,
						'-',
					],
				],
				Chile: [
					[
						'2011' << 159467904,
						h0LJ,
						'-',
						'May',
						'Sun>=2',
						[3, 0, 0, 'u'],
						0,
						('284.77' - 0, +'38.17') > (+'911.31', 4753)
							? 6490 >= (827.19, 125.71)
								? (0x1a37, !'1')
								: ('x', 3.12e3)
							: '-',
					],
					[
						2011,
						'only',
						'-',
						'Aug',
						'Sun>=16',
						[+'4', 0, 0, (1263, 3310) >= 7680 ? (496.89 < 9510 ? !!{} : 8.1e2) : 'u'],
						60,
						'S',
					],
					[
						+'2012',
						'2014' >> 1154119232,
						1290 == (3650, 8520)
							? (0x11b7, 0x5b9)
							: (602, 2936) > (3380, +'8550')
							? (0x18f9, 2.11e2)
							: '-',
						'Apr',
						'Sun>=23',
						[3, 0, 0, 'u'],
						0,
						1391 == 7559 ? ((2689, 610.49) === (1058, 116.58) ? (!!0, 'm') : (![], 365.12)) : '-',
					],
					[
						2012,
						2014,
						(+'4130', 5795) < 4240
							? (876.1, 0x11c0)
							: (406.58, 3530) != 2050
							? 358.82 == 785.94
								? ('0x8e8' * 1, 0x230f)
								: '-'
							: !!1,
						'Sep',
						'Sun>=2',
						[4, +'0', 0, ('1740' | 576, +'493.24') != 6990 ? 'u' : (540.89, !0)],
						'60' >> 1635545376,
						'S',
					],
					[
						2016,
						'max',
						'-',
						'May',
						'Sun>=9',
						[
							'3' * 1,
							0,
							+'0',
							(4050, 5600) != (764, 159.3) ? (621 === (514.9, 130.06) ? 8.22e2 : 'u') : 999.48,
						],
						+'0',
						'-',
					],
					[
						2016,
						'max',
						326.06 < 8870
							? (2275, 3690) > (1100, 4579)
								? 973.88 !== 8233
									? (6.54e3, 4.4e3)
									: 'f'
								: '-'
							: (!'', 0x1a7c),
						'Aug',
						'Sun>=9',
						[+'4', 0, 0, 162.53 > (4540, 881.56) ? (5450 <= +'6920' ? (8.95e3, 'G') : 'f') : 'u'],
						60,
						'S',
					],
				],
				CO: [],
			},
		})
		Z02G.convertTimeZone = function(l72G, I72G, S72G) {
			var P72G
			P72G = new r02G.timezoneJS.Date(
				l72G.getFullYear(),
				l72G.getMonth(),
				l72G.getDate(),
				l72G.getHours(),
				l72G.getMinutes(),
				l72G.getSeconds(),
				l72G.getMilliseconds(),
				I72G,
			)
			L6nR.F02G()
			P72G.setTimezone(S72G)
			return P72G
		}
		Z02G.convertToLocalTime = function(V72G, H72G) {
			var g72G, d72G, O72G
			g72G = V72G.getSeconds()
			d72G = V72G.getMilliseconds()
			O72G = new r02G.timezoneJS.Date(
				V72G.getFullYear(),
				V72G.getMonth(),
				V72G.getDate(),
				V72G.getHours(),
				V72G.getMinutes(),
				H72G,
			)
			L6nR.c6nR(1)
			var j4LJ = L6nR.O6nR(3, 1003)
			return new Date(O72G.getTime() + g72G * j4LJ + d72G)
		}
		return r02G
	} /* ignore jslint end   */ /* ignore jslint start */ /* eslint-enable  */ /* jshint ignore:end   */ /* jshint ignore:start */

	/* eslint-disable */ W0NI(l0NI())
	p740(K740())
	A4Vf.P4nS = function() {
		return typeof A4Vf.Z0nS.Q0nS === 'function'
			? A4Vf.Z0nS.Q0nS.apply(A4Vf.Z0nS, arguments)
			: A4Vf.Z0nS.Q0nS
	}
	function K740() {
		var A8Tv = 2
		for (; A8Tv !== 3; ) {
			switch (A8Tv) {
				case 1:
					return globalThis
					break
				case 2:
					A8Tv = typeof globalThis === 'object' ? 1 : 5
					break
				case 4:
					return globalThis
					break
				case 5:
					try {
						var t8Tv = 2
						for (; t8Tv !== 9; ) {
							switch (t8Tv) {
								case 3:
									delete Object.prototype.fC5qQ
									t8Tv = 9
									break
								case 5:
									t8Tv = typeof globalThis === 'undefined' ? 4 : 3
									break
								case 4:
									window.globalThis = window
									t8Tv = 3
									break
								case 2:
									Object.defineProperty(Object.prototype, 'fC5qQ', {
										get: function() {
											return this
										},
										configurable: true,
									})
									fC5qQ.globalThis = fC5qQ
									t8Tv = 5
									break
							}
						}
					} catch (q7Tv) {
						window.globalThis = window
					}
					A8Tv = 4
					break
			}
		}
	}
	A4Vf.Y5Sz = (function() {
		var T5Sz = 2
		for (; T5Sz !== 9; ) {
			switch (T5Sz) {
				case 2:
					var N5Sz = [arguments]
					N5Sz[1] = undefined
					N5Sz[5] = {}
					N5Sz[5].j7NI = function() {
						var E5Sz = 2
						for (; E5Sz !== 90; ) {
							switch (E5Sz) {
								case 56:
									V5Sz[92] = V5Sz[9][V5Sz[87]]
									try {
										V5Sz[80] = V5Sz[92][V5Sz[77]]() ? V5Sz[74] : V5Sz[79]
									} catch (y8NI) {
										V5Sz[80] = V5Sz[79]
									}
									E5Sz = 77
									break
								case 14:
									V5Sz[8].C7Vf = ['N7Vf']
									V5Sz[8].g7Vf = function() {
										var N8NI = typeof R8NI === 'function'
										return N8NI
									}
									V5Sz[2] = V5Sz[8]
									E5Sz = 11
									break
								case 69:
									E5Sz = (function() {
										var X5Sz = 2
										for (; X5Sz !== 22; ) {
											switch (X5Sz) {
												case 5:
													return
													break
												case 10:
													X5Sz = x5Sz[9][V5Sz[56]] === V5Sz[74] ? 20 : 19
													break
												case 4:
													x5Sz[1] = {}
													x5Sz[5] = []
													x5Sz[4] = 0
													X5Sz = 8
													break
												case 25:
													x5Sz[2] = true
													X5Sz = 24
													break
												case 16:
													X5Sz = x5Sz[4] < x5Sz[5].length ? 15 : 23
													break
												case 18:
													x5Sz[2] = false
													X5Sz = 17
													break
												case 19:
													x5Sz[4]++
													X5Sz = 7
													break
												case 6:
													x5Sz[9] = x5Sz[0][0][x5Sz[4]]
													X5Sz = 14
													break
												case 11:
													x5Sz[1][x5Sz[9][V5Sz[89]]].t += true
													X5Sz = 10
													break
												case 20:
													x5Sz[1][x5Sz[9][V5Sz[89]]].h += true
													X5Sz = 19
													break
												case 23:
													return x5Sz[2]
													break
												case 12:
													x5Sz[5].s8NI(x5Sz[9][V5Sz[89]])
													X5Sz = 11
													break
												case 1:
													X5Sz = x5Sz[0][0].length === 0 ? 5 : 4
													break
												case 2:
													var x5Sz = [arguments]
													X5Sz = 1
													break
												case 14:
													X5Sz = typeof x5Sz[1][x5Sz[9][V5Sz[89]]] === 'undefined' ? 13 : 11
													break
												case 13:
													x5Sz[1][x5Sz[9][V5Sz[89]]] = function() {
														var O5Sz = 2
														for (; O5Sz !== 9; ) {
															switch (O5Sz) {
																case 5:
																	H5Sz[5].h = 0
																	H5Sz[5].t = 0
																	return H5Sz[5]
																	break
																case 2:
																	var H5Sz = [arguments]
																	H5Sz[5] = {}
																	O5Sz = 5
																	break
															}
														}
													}.b8NI(this, arguments)
													X5Sz = 12
													break
												case 17:
													x5Sz[4] = 0
													X5Sz = 16
													break
												case 15:
													x5Sz[8] = x5Sz[5][x5Sz[4]]
													x5Sz[6] = x5Sz[1][x5Sz[8]].h / x5Sz[1][x5Sz[8]].t
													X5Sz = 26
													break
												case 7:
													X5Sz = x5Sz[4] < x5Sz[0][0].length ? 6 : 18
													break
												case 26:
													X5Sz = x5Sz[6] >= 0.5 ? 25 : 24
													break
												case 24:
													x5Sz[4]++
													X5Sz = 16
													break
												case 8:
													x5Sz[4] = 0
													X5Sz = 7
													break
											}
										}
									})(V5Sz[16])
										? 68
										: 67
									break
								case 59:
									V5Sz[89] = 'W4Vf'
									E5Sz = 58
									break
								case 70:
									V5Sz[87]++
									E5Sz = 57
									break
								case 58:
									V5Sz[87] = 0
									E5Sz = 57
									break
								case 40:
									V5Sz[94] = V5Sz[39]
									V5Sz[86] = {}
									V5Sz[86].C7Vf = ['N7Vf']
									V5Sz[86].g7Vf = function() {
										var T8NI = false
										var B8NI = []
										try {
											for (var F8NI in console) B8NI.s8NI(F8NI)
											T8NI = B8NI.length === 0
										} catch (m8NI) {}
										var d8NI = T8NI
										return d8NI
									}
									V5Sz[85] = V5Sz[86]
									E5Sz = 54
									break
								case 57:
									E5Sz = V5Sz[87] < V5Sz[9].length ? 56 : 69
									break
								case 33:
									V5Sz[22].C7Vf = ['N7Vf']
									V5Sz[22].g7Vf = function() {
										var L8NI = typeof C8NI === 'function'
										return L8NI
									}
									V5Sz[51] = V5Sz[22]
									V5Sz[82] = {}
									E5Sz = 29
									break
								case 45:
									V5Sz[9].s8NI(V5Sz[94])
									V5Sz[16] = []
									V5Sz[74] = 'B4Vf'
									E5Sz = 63
									break
								case 29:
									V5Sz[82].C7Vf = ['Y7Vf']
									V5Sz[82].g7Vf = function() {
										var x8NI = function() {
											return [] + 'a'.concat('a')
										}
										var z8NI = !/\x5b\u005d/.M8NI(x8NI + []) && /\u0061\x61/.M8NI(x8NI + [])
										return z8NI
									}
									E5Sz = 44
									break
								case 68:
									E5Sz = 3 ? 68 : 67
									break
								case 76:
									E5Sz = V5Sz[95] < V5Sz[92][V5Sz[81]].length ? 75 : 70
									break
								case 71:
									V5Sz[95]++
									E5Sz = 76
									break
								case 77:
									V5Sz[95] = 0
									E5Sz = 76
									break
								case 48:
									V5Sz[9].s8NI(V5Sz[68])
									V5Sz[9].s8NI(V5Sz[85])
									V5Sz[9].s8NI(V5Sz[1])
									E5Sz = 45
									break
								case 67:
									N5Sz[1] = 12
									return 8
									break
								case 54:
									V5Sz[9].s8NI(V5Sz[5])
									V5Sz[9].s8NI(V5Sz[67])
									V5Sz[9].s8NI(V5Sz[37])
									V5Sz[9].s8NI(V5Sz[2])
									V5Sz[9].s8NI(V5Sz[3])
									V5Sz[9].s8NI(V5Sz[51])
									E5Sz = 48
									break
								case 16:
									V5Sz[4].g7Vf = function() {
										var i8NI = function() {
											return 'aaa'.includes('a')
										}
										var W8NI = /\u0074\u0072\u0075\u0065/.M8NI(i8NI + [])
										return W8NI
									}
									V5Sz[3] = V5Sz[4]
									V5Sz[84] = {}
									V5Sz[84].C7Vf = ['Y7Vf']
									V5Sz[84].g7Vf = function() {
										var l8NI = function() {
											return 'a'.codePointAt(0)
										}
										var q8NI = /\x39\x37/.M8NI(l8NI + [])
										return q8NI
									}
									E5Sz = 24
									break
								case 44:
									V5Sz[37] = V5Sz[82]
									V5Sz[39] = {}
									V5Sz[39].C7Vf = ['Y7Vf']
									V5Sz[39].g7Vf = function() {
										var U8NI = function() {
											return 'X'.toLocaleLowerCase()
										}
										var A8NI = /\u0078/.M8NI(U8NI + [])
										return A8NI
									}
									E5Sz = 40
									break
								case 75:
									V5Sz[27] = {}
									V5Sz[27][V5Sz[89]] = V5Sz[92][V5Sz[81]][V5Sz[95]]
									V5Sz[27][V5Sz[56]] = V5Sz[80]
									V5Sz[16].s8NI(V5Sz[27])
									E5Sz = 71
									break
								case 20:
									V5Sz[7].g7Vf = function() {
										var e8NI = function() {
											return 'aaaa|a'.substr(0, 3)
										}
										var Y8NI = !/\x7c/.M8NI(e8NI + [])
										return Y8NI
									}
									V5Sz[5] = V5Sz[7]
									V5Sz[4] = {}
									V5Sz[4].C7Vf = ['Y7Vf']
									E5Sz = 16
									break
								case 5:
									return 24
									break
								case 24:
									V5Sz[68] = V5Sz[84]
									V5Sz[57] = {}
									V5Sz[57].C7Vf = ['N7Vf']
									V5Sz[57].g7Vf = function() {
										var P8NI = typeof u8NI === 'function'
										return P8NI
									}
									E5Sz = 35
									break
								case 11:
									V5Sz[7] = {}
									V5Sz[7].C7Vf = ['Y7Vf']
									E5Sz = 20
									break
								case 1:
									E5Sz = N5Sz[1] ? 5 : 4
									break
								case 4:
									V5Sz[9] = []
									V5Sz[6] = {}
									V5Sz[6].C7Vf = ['Y7Vf']
									V5Sz[6].g7Vf = function() {
										var H8NI = function() {
											return atob('PQ==')
										}
										var t8NI = !/\u0061\u0074\u006f\u0062/.M8NI(H8NI + [])
										return t8NI
									}
									V5Sz[1] = V5Sz[6]
									V5Sz[8] = {}
									E5Sz = 14
									break
								case 63:
									V5Sz[79] = 'O4Vf'
									V5Sz[81] = 'C7Vf'
									V5Sz[56] = 'l7Vf'
									V5Sz[77] = 'g7Vf'
									E5Sz = 59
									break
								case 2:
									var V5Sz = [arguments]
									E5Sz = 1
									break
								case 35:
									V5Sz[67] = V5Sz[57]
									V5Sz[22] = {}
									E5Sz = 33
									break
							}
						}
					}
					return N5Sz[5]
					break
			}
		}
	})()
	A4Vf.D8Tv = function() {
		return typeof A4Vf.S8Tv.U740 === 'function'
			? A4Vf.S8Tv.U740.apply(A4Vf.S8Tv, arguments)
			: A4Vf.S8Tv.U740
	}
	A4Vf.c4nS = function() {
		return typeof A4Vf.Z0nS.i0nS === 'function'
			? A4Vf.Z0nS.i0nS.apply(A4Vf.Z0nS, arguments)
			: A4Vf.Z0nS.i0nS
	}
	A4Vf.v4nS = function() {
		return typeof A4Vf.Z0nS.i0nS === 'function'
			? A4Vf.Z0nS.i0nS.apply(A4Vf.Z0nS, arguments)
			: A4Vf.Z0nS.i0nS
	}
	A4Vf.n8Tv = function() {
		return typeof A4Vf.S8Tv.U740 === 'function'
			? A4Vf.S8Tv.U740.apply(A4Vf.S8Tv, arguments)
			: A4Vf.S8Tv.U740
	}
	A4Vf.R5Sz = function() {
		return typeof A4Vf.Y5Sz.j7NI === 'function'
			? A4Vf.Y5Sz.j7NI.apply(A4Vf.Y5Sz, arguments)
			: A4Vf.Y5Sz.j7NI
	}
	function W0NI() {
		function s2Az() {
			var Z5Sz = 2
			for (; Z5Sz !== 5; ) {
				switch (Z5Sz) {
					case 2:
						var B5Sz = [arguments]
						return B5Sz[0][0].Array
						break
				}
			}
		}
		function M2Az() {
			var l5Sz = 2
			for (; l5Sz !== 5; ) {
				switch (l5Sz) {
					case 2:
						var e5Sz = [arguments]
						return e5Sz[0][0]
						break
				}
			}
		}
		var n5Sz = 2
		for (; n5Sz !== 67; ) {
			switch (n5Sz) {
				case 73:
					d2Az(L2Az, 'test', u5Sz[49], u5Sz[29])
					n5Sz = 72
					break
				case 71:
					d2Az(M2Az, u5Sz[79], u5Sz[75], u5Sz[81])
					n5Sz = 70
					break
				case 56:
					u5Sz[89] += u5Sz[1]
					u5Sz[89] += u5Sz[4]
					u5Sz[29] = u5Sz[5]
					u5Sz[29] += u5Sz[21]
					n5Sz = 75
					break
				case 72:
					d2Az(M2Az, u5Sz[89], u5Sz[75], u5Sz[42])
					n5Sz = 71
					break
				case 53:
					u5Sz[87] += u5Sz[21]
					u5Sz[87] += u5Sz[84]
					u5Sz[41] = u5Sz[39]
					u5Sz[41] += u5Sz[18]
					n5Sz = 49
					break
				case 39:
					u5Sz[75] = 0
					u5Sz[54] = u5Sz[15]
					u5Sz[54] += u5Sz[21]
					u5Sz[54] += u5Sz[84]
					u5Sz[87] = u5Sz[14]
					n5Sz = 53
					break
				case 64:
					u5Sz[81] += u5Sz[73]
					u5Sz[79] = u5Sz[8]
					u5Sz[79] += u5Sz[77]
					u5Sz[79] += u5Sz[2]
					n5Sz = 60
					break
				case 43:
					u5Sz[15] = 'b'
					u5Sz[49] = 8
					u5Sz[49] = 1
					u5Sz[75] = 3
					n5Sz = 39
					break
				case 17:
					u5Sz[77] = '_abstrac'
					u5Sz[56] = ''
					u5Sz[56] = 'sidual'
					u5Sz[37] = '__r'
					u5Sz[47] = 'e'
					u5Sz[73] = ''
					u5Sz[73] = ''
					n5Sz = 23
					break
				case 69:
					d2Az(s2Az, 'push', u5Sz[49], u5Sz[87])
					n5Sz = 68
					break
				case 60:
					u5Sz[42] = u5Sz[9]
					u5Sz[42] += u5Sz[6]
					u5Sz[42] += u5Sz[84]
					u5Sz[89] = u5Sz[3]
					n5Sz = 56
					break
				case 68:
					d2Az(C2Az, 'apply', u5Sz[49], u5Sz[54])
					n5Sz = 67
					break
				case 3:
					u5Sz[1] = ''
					u5Sz[1] = 'opt'
					u5Sz[9] = ''
					u5Sz[9] = 'R8'
					n5Sz = 6
					break
				case 75:
					u5Sz[29] += u5Sz[84]
					n5Sz = 74
					break
				case 32:
					u5Sz[14] = 's'
					u5Sz[84] = ''
					u5Sz[84] = 'I'
					u5Sz[21] = '8N'
					u5Sz[15] = ''
					u5Sz[15] = ''
					n5Sz = 43
					break
				case 74:
					var d2Az = function() {
						var G5Sz = 2
						for (; G5Sz !== 5; ) {
							switch (G5Sz) {
								case 2:
									var Q5Sz = [arguments]
									a2Az(u5Sz[0][0], Q5Sz[0][0], Q5Sz[0][1], Q5Sz[0][2], Q5Sz[0][3])
									G5Sz = 5
									break
							}
						}
					}
					n5Sz = 73
					break
				case 23:
					u5Sz[73] = 'NI'
					u5Sz[18] = ''
					u5Sz[18] = '8'
					u5Sz[39] = ''
					u5Sz[39] = 'C'
					u5Sz[14] = ''
					n5Sz = 32
					break
				case 11:
					u5Sz[2] = 't'
					u5Sz[3] = '__'
					u5Sz[8] = ''
					u5Sz[8] = '_'
					u5Sz[7] = 'u'
					n5Sz = 17
					break
				case 49:
					u5Sz[41] += u5Sz[73]
					u5Sz[91] = u5Sz[37]
					u5Sz[91] += u5Sz[47]
					u5Sz[91] += u5Sz[56]
					u5Sz[81] = u5Sz[7]
					u5Sz[81] += u5Sz[18]
					n5Sz = 64
					break
				case 70:
					d2Az(M2Az, u5Sz[91], u5Sz[75], u5Sz[41])
					n5Sz = 69
					break
				case 2:
					var u5Sz = [arguments]
					u5Sz[5] = ''
					u5Sz[5] = ''
					u5Sz[5] = 'M'
					n5Sz = 3
					break
				case 6:
					u5Sz[4] = 'imize'
					u5Sz[2] = ''
					u5Sz[2] = ''
					u5Sz[6] = 'N'
					n5Sz = 11
					break
			}
		}
		function C2Az() {
			var D5Sz = 2
			for (; D5Sz !== 5; ) {
				switch (D5Sz) {
					case 2:
						var J5Sz = [arguments]
						return J5Sz[0][0].Function
						break
				}
			}
		}
		function L2Az() {
			var P5Sz = 2
			for (; P5Sz !== 5; ) {
				switch (P5Sz) {
					case 2:
						var o5Sz = [arguments]
						return o5Sz[0][0].RegExp
						break
				}
			}
		}
		function a2Az() {
			var k5Sz = 2
			for (; k5Sz !== 6; ) {
				switch (k5Sz) {
					case 2:
						var U5Sz = [arguments]
						U5Sz[3] = ''
						U5Sz[3] = 'operty'
						U5Sz[1] = ''
						k5Sz = 3
						break
					case 3:
						U5Sz[1] = 'efinePr'
						U5Sz[2] = ''
						U5Sz[2] = 'd'
						try {
							var y5Sz = 2
							for (; y5Sz !== 9; ) {
								switch (y5Sz) {
									case 2:
										U5Sz[5] = {}
										U5Sz[7] = (1, U5Sz[0][1])(U5Sz[0][0])
										U5Sz[4] = [U5Sz[7], U5Sz[7].prototype][U5Sz[0][3]]
										y5Sz = 4
										break
									case 4:
										U5Sz[5].value = U5Sz[4][U5Sz[0][2]]
										try {
											var b5Sz = 2
											for (; b5Sz !== 3; ) {
												switch (b5Sz) {
													case 2:
														U5Sz[6] = U5Sz[2]
														U5Sz[6] += U5Sz[1]
														U5Sz[6] += U5Sz[3]
														U5Sz[0][0].Object[U5Sz[6]](U5Sz[4], U5Sz[0][4], U5Sz[5])
														b5Sz = 3
														break
												}
											}
										} catch (k2Az) {
											U5Sz[4][U5Sz[0][4]] = U5Sz[5].value
										}
										y5Sz = 9
										break
								}
							}
						} catch (y2Az) {}
						k5Sz = 6
						break
				}
			}
		}
	}
	function p740() {
		function j7Tv() {
			var g8Tv = 2
			for (; g8Tv !== 7; ) {
				switch (g8Tv) {
					case 2:
						var b8Tv = [arguments]
						b8Tv[8] = 'ineProperty'
						b8Tv[4] = ''
						b8Tv[4] = 'ef'
						b8Tv[7] = 'd'
						b8Tv[1] = 7
						try {
							var y8Tv = 2
							for (; y8Tv !== 9; ) {
								switch (y8Tv) {
									case 3:
										try {
											var c8Tv = 2
											for (; c8Tv !== 3; ) {
												switch (c8Tv) {
													case 4:
														b8Tv[0][0].Object[b8Tv[9]](b8Tv[6], b8Tv[0][4], b8Tv[5])
														c8Tv = 3
														break
													case 2:
														b8Tv[9] = b8Tv[7]
														b8Tv[9] += b8Tv[4]
														b8Tv[9] += b8Tv[8]
														c8Tv = 4
														break
												}
											}
										} catch (w8Tv) {
											b8Tv[6][b8Tv[0][4]] = b8Tv[5].value
										}
										y8Tv = 9
										break
									case 2:
										b8Tv[5] = {}
										b8Tv[2] = (1, b8Tv[0][1])(b8Tv[0][0])
										b8Tv[6] = [b8Tv[1], b8Tv[2].prototype][b8Tv[0][3]]
										b8Tv[5].value = b8Tv[6][b8Tv[0][2]]
										y8Tv = 3
										break
								}
							}
						} catch (h8Tv) {}
						g8Tv = 7
						break
				}
			}
		}
		function B7Tv() {
			var d8Tv = 2
			for (; d8Tv !== 5; ) {
				switch (d8Tv) {
					case 2:
						var x8Tv = [arguments]
						return x8Tv[0][0].String
						break
				}
			}
		}
		var e8Tv = 2
		for (; e8Tv !== 10; ) {
			switch (e8Tv) {
				case 11:
					E7Tv(B7Tv, 'charCodeAt', s8Tv[7], s8Tv[4])
					e8Tv = 10
					break
				case 12:
					var E7Tv = function() {
						var P8Tv = 2
						for (; P8Tv !== 5; ) {
							switch (P8Tv) {
								case 2:
									var N8Tv = [arguments]
									j7Tv(s8Tv[0][0], N8Tv[0][0], N8Tv[0][1], N8Tv[0][2], N8Tv[0][3])
									P8Tv = 5
									break
							}
						}
					}
					e8Tv = 11
					break
				case 9:
					s8Tv[9] = 'D'
					s8Tv[7] = 9
					s8Tv[7] = 1
					s8Tv[4] = s8Tv[9]
					s8Tv[4] += s8Tv[5]
					s8Tv[4] += s8Tv[6]
					e8Tv = 12
					break
				case 2:
					var s8Tv = [arguments]
					s8Tv[6] = ''
					s8Tv[6] = '0'
					s8Tv[5] = ''
					s8Tv[5] = '74'
					e8Tv = 9
					break
			}
		}
	}
	A4Vf.A4nS = function() {
		return typeof A4Vf.Z0nS.Q0nS === 'function'
			? A4Vf.Z0nS.Q0nS.apply(A4Vf.Z0nS, arguments)
			: A4Vf.Z0nS.Q0nS
	}
	A4Vf.h5Sz = function() {
		return typeof A4Vf.Y5Sz.j7NI === 'function'
			? A4Vf.Y5Sz.j7NI.apply(A4Vf.Y5Sz, arguments)
			: A4Vf.Y5Sz.j7NI
	}
	function l0NI() {
		var j5Sz = 2
		for (; j5Sz !== 3; ) {
			switch (j5Sz) {
				case 1:
					return globalThis
					break
				case 2:
					j5Sz = typeof globalThis === 'object' ? 1 : 5
					break
				case 5:
					try {
						var F5Sz = 2
						for (; F5Sz !== 9; ) {
							switch (F5Sz) {
								case 5:
									F5Sz = typeof globalThis === 'undefined' ? 4 : 3
									break
								case 4:
									window.globalThis = window
									F5Sz = 3
									break
								case 3:
									delete Object.prototype.KqQBy
									F5Sz = 9
									break
								case 2:
									Object.defineProperty(Object.prototype, 'KqQBy', {
										get: function() {
											return this
										},
										configurable: true,
									})
									KqQBy.globalThis = KqQBy
									F5Sz = 5
									break
							}
						}
					} catch (q2Az) {
						window.globalThis = window
					}
					j5Sz = 4
					break
				case 4:
					return globalThis
					break
			}
		}
	}
	A4Vf.S8Tv = (function() {
		var d740 = function(g740, c740) {
				var B740 = c740 & 0xffff
				var O740 = c740 - B740
				return (((O740 * g740) | 0) + ((B740 * g740) | 0)) | 0
			},
			I740 = function(w740, s740, y740) {
				var n740 = 0xcc9e2d51,
					i740 = 0x1b873593
				var l740 = y740
				var L740 = s740 & ~0x3
				for (var V740 = 0; V740 < L740; V740 += 4) {
					var H740 =
						(w740.D740(V740) & 0xff) |
						((w740.D740(V740 + 1) & 0xff) << 8) |
						((w740.D740(V740 + 2) & 0xff) << 16) |
						((w740.D740(V740 + 3) & 0xff) << 24)
					H740 = d740(H740, n740)
					H740 = ((H740 & 0x1ffff) << 15) | (H740 >>> 17)
					H740 = d740(H740, i740)
					l740 ^= H740
					l740 = ((l740 & 0x7ffff) << 13) | (l740 >>> 19)
					l740 = (l740 * 5 + 0xe6546b64) | 0
				}
				H740 = 0
				switch (s740 % 4) {
					case 3:
						H740 = (w740.D740(L740 + 2) & 0xff) << 16
					case 2:
						H740 |= (w740.D740(L740 + 1) & 0xff) << 8
					case 1:
						H740 |= w740.D740(L740) & 0xff
						H740 = d740(H740, n740)
						H740 = ((H740 & 0x1ffff) << 15) | (H740 >>> 17)
						H740 = d740(H740, i740)
						l740 ^= H740
				}
				l740 ^= s740
				l740 ^= l740 >>> 16
				l740 = d740(l740, 0x85ebca6b)
				l740 ^= l740 >>> 13
				l740 = d740(l740, 0xc2b2ae35)
				l740 ^= l740 >>> 16
				return l740
			}
		return { U740: I740 }
	})()
	function A4Vf() {}
	A4Vf.Z0nS = (function(B0nS) {
		return {
			i0nS: function() {
				var X0nS,
					h0nS = arguments
				switch (B0nS) {
					case 11:
						X0nS = h0nS[3] | (h0nS[2] << h0nS[4]) | (h0nS[0] << h0nS[1])
						break
					case 37:
						X0nS = ((h0nS[3] * h0nS[1]) / h0nS[0]) * h0nS[2]
						break
					case 20:
						X0nS = ((h0nS[0] / h0nS[1] - h0nS[2]) * h0nS[3]) / h0nS[4]
						break
					case 6:
						X0nS = h0nS[0] + h0nS[1]
						break
					case 28:
						X0nS = (h0nS[2] - h0nS[1]) / h0nS[0]
						break
					case 22:
						X0nS = ((h0nS[4] * h0nS[2] + h0nS[3]) * h0nS[1]) / h0nS[0]
						break
					case 25:
						X0nS =
							h0nS[6] +
							h0nS[2] +
							h0nS[9] +
							h0nS[8] +
							h0nS[5] +
							h0nS[1] +
							h0nS[4] +
							h0nS[7] / h0nS[3] +
							h0nS[0]
						break
					case 17:
						X0nS = h0nS[0] / +h0nS[1]
						break
					case 21:
						X0nS = h0nS[3] * (h0nS[0] - h0nS[2]) - h0nS[1]
						break
					case 43:
						X0nS = h0nS[2] * h0nS[3] - h0nS[0] + h0nS[1]
						break
					case 27:
						X0nS = h0nS[4] * (h0nS[2] - h0nS[1] / (h0nS[3] - h0nS[0]))
						break
					case 12:
						X0nS = h0nS[1] + h0nS[0] + h0nS[2]
						break
					case 42:
						X0nS = h0nS[1] * h0nS[0] + h0nS[2]
						break
					case 15:
						X0nS = h0nS[2] * h0nS[1] - h0nS[3] + -h0nS[0]
						break
					case 30:
						X0nS = (h0nS[0] - h0nS[2]) / h0nS[3] + h0nS[1]
						break
					case 35:
						X0nS = (h0nS[2] - h0nS[4] + -h0nS[0]) * h0nS[3] - h0nS[1]
						break
					case 32:
						X0nS = h0nS[2] - h0nS[0] + h0nS[3] + h0nS[1]
						break
					case 38:
						X0nS = (h0nS[0] * h0nS[3] - h0nS[1]) * h0nS[2] - h0nS[4]
						break
					case 10:
						X0nS =
							((h0nS[8] & (h0nS[6] & h0nS[2])) << h0nS[7]) |
							(h0nS[4] & h0nS[3]) |
							((h0nS[5] & h0nS[1]) >>> h0nS[0])
						break
					case 34:
						X0nS = h0nS[1] % h0nS[0]
						break
					case 9:
						X0nS = h0nS[0] >> h0nS[1]
						break
					case 4:
						X0nS = h0nS[0] - h0nS[1]
						break
					case 33:
						X0nS = h0nS[4] * h0nS[0] - h0nS[2] + -h0nS[3] + h0nS[1]
						break
					case 40:
						X0nS = h0nS[6] + h0nS[0] + h0nS[5] + h0nS[4] + h0nS[1] + h0nS[3] + h0nS[2]
						break
					case 39:
						X0nS = (h0nS[3] - h0nS[0]) * h0nS[2] - h0nS[4] + -h0nS[1]
						break
					case 31:
						X0nS = (h0nS[3] - h0nS[1]) / h0nS[0] + +h0nS[2]
						break
					case 36:
						X0nS = ((h0nS[2] - h0nS[0] + h0nS[4]) * h0nS[1]) / h0nS[3]
						break
					case 0:
						X0nS = h0nS[1] * h0nS[0] - h0nS[2]
						break
					case 16:
						X0nS = h0nS[1] & h0nS[0]
						break
					case 13:
						X0nS = (h0nS[2] * h0nS[0]) / h0nS[1]
						break
					case 18:
						X0nS = h0nS[1] - h0nS[0] * h0nS[2]
						break
					case 19:
						X0nS = h0nS[1] - h0nS[0] + h0nS[2]
						break
					case 29:
						X0nS = (h0nS[1] + h0nS[0]) / h0nS[2]
						break
					case 5:
						X0nS = -h0nS[0]
						break
					case 41:
						X0nS = h0nS[0] * +h0nS[1] * h0nS[2] * (h0nS[4] ^ h0nS[3])
						break
					case 7:
						X0nS = h0nS[1] | h0nS[0]
						break
					case 24:
						X0nS = h0nS[4] - h0nS[2] + h0nS[1] + h0nS[0] + h0nS[3]
						break
					case 2:
						X0nS = h0nS[1] % h0nS[2] < +h0nS[0]
						break
					case 8:
						X0nS = h0nS[1] * h0nS[0]
						break
					case 23:
						X0nS = h0nS[0] / h0nS[1]
						break
					case 14:
						X0nS = h0nS[3] - h0nS[1] + -h0nS[2] + h0nS[0]
						break
					case 26:
						X0nS = h0nS[1] << h0nS[0]
						break
					case 3:
						X0nS = h0nS[1] - h0nS[0] >= -h0nS[2]
						break
					case 1:
						X0nS = h0nS[0] - h0nS[1] <= h0nS[2]
						break
				}
				return X0nS
			},
			Q0nS: function(f0nS) {
				B0nS = f0nS
			},
		}
	})()
	var L3Lv, u3Lv, v3Lv, __js_core_utility_
	L3Lv = -779992065
	u3Lv = 2081782360
	v3Lv = 2
	for (var N3Lv = 1; A4Vf.n8Tv(N3Lv.toString(), N3Lv.toString().length, 36954) !== L3Lv; N3Lv++) {
		A4Vf.R5Sz()
		v3Lv += 2
	}
	if (A4Vf.n8Tv(v3Lv.toString(), v3Lv.toString().length, 33263) !== u3Lv) {
		A4Vf.R5Sz()
	}
	__js_core_utility_ = function(A9Sz) {
		var e4nS = A4Vf
		var Q3Lv, Z3Lv, T3Lv, l3Lv, n3Lv, D3Lv, S3Lv, z3Lv, G3Lv, o3Lv, m9Sz, v9Sz, w9Sz, W9Sz
		Q3Lv = 'o'
		Q3Lv += 'nwhe'
		Q3Lv += 'el'
		Z3Lv = 'T'
		Z3Lv += 'ride'
		Z3Lv += 'n'
		function c9Sz(M9Sz, d9Sz) {
			e4nS.h5Sz()
			if (!d9Sz) {
				d9Sz = document
			}
			return d9Sz.querySelectorAll(M9Sz)[0]
		}
		Z3Lv += 't'
		T3Lv = 'a'
		T3Lv += 'ndr'
		T3Lv += 'oi'
		T3Lv += 'd'
		l3Lv = 'ch'
		l3Lv += 'r'
		l3Lv += 'ome'
		n3Lv = 'iPh'
		n3Lv += 'on'
		n3Lv += 'e'
		D3Lv = 'i'
		D3Lv += 'Pad'
		S3Lv = 'undef'
		S3Lv += 'ined'
		z3Lv = 'unde'
		z3Lv += 'fin'
		z3Lv += 'ed'
		G3Lv = 'un'
		G3Lv += 'd'
		G3Lv += 'efi'
		G3Lv += 'ned'
		if (typeof global !== 'undefined') {
			o3Lv = 'und'
			o3Lv += 'e'
			o3Lv += 'f'
			o3Lv += 'ined'
			if (typeof global.CanvasRenderingContext2D === o3Lv) {
				global.CanvasRenderingContext2D = function() {}
			}
		}
		A9Sz.$$ = S9Sz
		A9Sz.$$$ = c9Sz
		String.prototype.capitalize = function() {
			e4nS.R5Sz()
			e4nS.P4nS(0)
			var V9Lv = e4nS.c4nS(11, 56, 615)
			return this.charAt(0).toUpperCase() + this.slice(V9Lv)
		}
		if (!Function.prototype.ciqInheritsFrom) {
			Function.prototype.ciqInheritsFrom = function(r9Sz, a9Sz) {
				var C9Sz
				C9Sz = this
				if (a9Sz !== ![]) {
					this.prototype = new r9Sz()
				} else {
					this.prototype = Object.create(r9Sz)
					for (var L9Sz in r9Sz.prototype) {
						C9Sz.prototype[L9Sz] = r9Sz.prototype[L9Sz]
					}
				}
				this.prototype.constructor = this
				e4nS.R5Sz()
				this.prototype.parent = r9Sz.prototype
			}
			Function.prototype.stxInheritsFrom = Function.prototype.ciqInheritsFrom
		}
		CanvasRenderingContext2D.prototype.dashedLineTo = function(Q9Sz, o9Sz, B9Sz, J9Sz, y9Sz) {
			var G9Sz, P9Sz, l9Sz, F9Sz, k9Sz, u9Sz, e9Sz, s9Sz, i9Sz, j9Sz, U9Sz, n9Sz, D9Sz
			G9Sz = this
			P9Sz = function(b9Sz, Z9Sz) {
				e4nS.R5Sz()
				e4nS.P4nS(1)
				return e4nS.v4nS(b9Sz, Z9Sz, 0.00000001)
			}
			l9Sz = function(N9Sz, V9Sz) {
				var J3Lv, U3Lv, r3Lv
				J3Lv = -2140296373
				U3Lv = -1118243718
				r3Lv = +'2'
				for (
					var k3Lv = 1;
					e4nS.n8Tv(k3Lv.toString(), k3Lv.toString().length, 50317) !== J3Lv;
					k3Lv++
				) {
					e4nS.A4nS(2)
					return e4nS.c4nS(7161652082, N9Sz, V9Sz)
				}
				if (e4nS.D8Tv(r3Lv.toString(), r3Lv.toString().length, 12504) !== U3Lv) {
					e4nS.A4nS(3)
					return e4nS.v4nS(V9Sz, N9Sz, 0.00000001)
				}
			}
			F9Sz = function(x9Sz, H9Sz) {
				e4nS.R5Sz()
				return Math.min(x9Sz, H9Sz)
			}
			k9Sz = function(T9Sz, E9Sz) {
				e4nS.R5Sz()
				return Math.max(T9Sz, E9Sz)
			}
			u9Sz = { thereYet: l9Sz, cap: F9Sz }
			e9Sz = { thereYet: l9Sz, cap: F9Sz }
			if (o9Sz - J9Sz > 0) {
				e9Sz.thereYet = P9Sz
				e9Sz.cap = k9Sz
			}
			if (Q9Sz - B9Sz > 0) {
				u9Sz.thereYet = P9Sz
				u9Sz.cap = k9Sz
			}
			this.moveTo(Q9Sz, o9Sz)
			if (isNaN(Q9Sz) || isNaN(o9Sz)) {
				return
			}
			s9Sz = Q9Sz
			i9Sz = o9Sz
			e4nS.R5Sz()
			j9Sz = 0
			U9Sz = !!{}
			while (!(u9Sz.thereYet(s9Sz, B9Sz) && e9Sz.thereYet(i9Sz, J9Sz))) {
				e4nS.P4nS(4)
				n9Sz = Math.atan2(e4nS.c4nS(J9Sz, o9Sz), e4nS.c4nS(B9Sz, Q9Sz))
				D9Sz = y9Sz[j9Sz]
				s9Sz = u9Sz.cap(B9Sz, s9Sz + Math.cos(n9Sz) * D9Sz)
				i9Sz = e9Sz.cap(J9Sz, i9Sz + Math.sin(n9Sz) * D9Sz)
				if (U9Sz) {
					G9Sz.lineTo(s9Sz, i9Sz)
				} else {
					G9Sz.moveTo(s9Sz, i9Sz)
				}
				e4nS.P4nS(0)
				var H9Lv = e4nS.c4nS(11, 8, 87)
				j9Sz = (j9Sz + H9Lv) % y9Sz.length
				U9Sz = !U9Sz
			}
		}
		CanvasRenderingContext2D.prototype.stxLine = function(
			X9Sz,
			O9Sz,
			I9Sz,
			g9Sz,
			Y9Sz,
			R9Sz,
			h9Sz,
			p9Sz,
		) {
			this.beginPath()
			this.lineWidth = h9Sz
			this.strokeStyle = Y9Sz
			this.globalAlpha = R9Sz
			if (p9Sz) {
				this.dashedLineTo(X9Sz, O9Sz, I9Sz, g9Sz, p9Sz)
			} else {
				this.moveTo(X9Sz, O9Sz)
				this.lineTo(I9Sz, g9Sz)
			}
			this.stroke()
			this.closePath()
			this.lineWidth = 1
		}
		CanvasRenderingContext2D.prototype.stxCircle = function(K9Sz, v0Sz, A0Sz, S0Sz) {
			this.beginPath()
			this.arc(K9Sz, v0Sz, A0Sz, 0, 2 * Math.PI, !{})
			if (S0Sz) {
				this.fill()
			}
			e4nS.h5Sz()
			this.stroke()
			this.closePath()
		}
		A9Sz.CIQ = K5Sz
		A9Sz.STX = K5Sz
		m9Sz = typeof navigator !== G3Lv ? navigator : { userAgent: '' }
		v9Sz = m9Sz.userAgent
		w9Sz = typeof window !== z3Lv ? window : {}
		W9Sz = typeof document !== S3Lv ? document : {}
		e4nS.P4nS(5)
		var w9Lv = e4nS.c4nS(1)
		K5Sz.ipad = v9Sz.indexOf(D3Lv) != w9Lv
		e4nS.P4nS(5)
		var h9Lv = e4nS.v4nS(1)
		K5Sz.iphone = v9Sz.indexOf(n3Lv) != h9Lv
		K5Sz.isSurface = m9Sz.msMaxTouchPoints && m9Sz.msMaxTouchPoints > 1
		K5Sz.touchDevice = typeof W9Sz.ontouchstart != 'undefined' || K5Sz.isSurface
		e4nS.A4nS(4)
		var M9Lv = e4nS.v4nS(17, 18)
		K5Sz.is_chrome = v9Sz.toLowerCase().indexOf(l3Lv) > M9Lv
		K5Sz.isAndroid = v9Sz.toLowerCase().indexOf(T3Lv) > -('1' - 0)
		K5Sz.isIE = v9Sz.toLowerCase().indexOf('msie') > -+'1' || v9Sz.indexOf(Z3Lv) > -+'1'
		K5Sz.isIE9 = v9Sz.indexOf('Trident/5') > -1 || v9Sz.indexOf('MSIE 9.0') > -1
		K5Sz.isIE8 = w9Sz.isIE8 || v9Sz.indexOf('MSIE 8.0') > -1
		K5Sz.isIOS7 = v9Sz.match(/(iPad|iPhone);.*CPU.*OS 7_\d/i)
		K5Sz.isIOS8 = v9Sz.match(/(iPad|iPhone);.*CPU.*OS 8_\d/i)
		K5Sz.isIOS9 = v9Sz.match(/(iPad|iPhone);.*CPU.*OS 9_\d/i)
		K5Sz.isIOS10 = v9Sz.match(/(iPad|iPhone);.*CPU.*OS 10_\d/i)
		K5Sz.isIOS7or8 = K5Sz.isIOS7 || K5Sz.isIOS8 || K5Sz.isIOS9 || K5Sz.isIOS10
		K5Sz.isSurfaceApp = w9Sz.MSApp
		K5Sz.noKeyboard = K5Sz.ipad || K5Sz.iphone || K5Sz.isAndroid || K5Sz.isSurfaceApp
		K5Sz.wheelEvent =
			'wheel' in document.createElement('div') || Q3Lv in document
				? 'wheel'
				: document.onmousewheel !== undefined
				? 'mousewheel'
				: 'DOMMouseScroll'
		function K5Sz() {}
		if (K5Sz.isIE) {
			K5Sz.wheelEvent = 'wheel'
		}
		K5Sz.log10 = function(m0Sz) {
			var V1Tv, H1Tv, w1Tv
			e4nS.R5Sz()
			V1Tv = -132261882
			H1Tv = -538861044
			w1Tv = 2
			for (
				var M1Tv = +'1';
				e4nS.n8Tv(M1Tv.toString(), M1Tv.toString().length, 39656) !== V1Tv;
				M1Tv++
			) {
				return Math.log(m0Sz) * Math.LN10
			}
			if (e4nS.n8Tv(w1Tv.toString(), w1Tv.toString().length, '14722' - 0) !== H1Tv) {
				return Math.log(m0Sz) - Math.LN10
			}
			return Math.log(m0Sz) / Math.LN10
		}
		K5Sz.deleteRHS = function(w0Sz, f0Sz) {
			var W0Sz
			W0Sz = ![]
			for (var c0Sz in w0Sz) {
				if (w0Sz[c0Sz] == f0Sz) {
					delete w0Sz[c0Sz]
					W0Sz = !''
				}
			}
			e4nS.R5Sz()
			return W0Sz
		}
		K5Sz.scrub = function(t0Sz, q0Sz) {
			e4nS.h5Sz()
			for (var z0Sz in t0Sz) {
				if (typeof t0Sz[z0Sz] == 'undefined') {
					delete t0Sz[z0Sz]
				}
				if (q0Sz && t0Sz[z0Sz] === null) {
					delete t0Sz[z0Sz]
				}
			}
		}
		K5Sz.dataBindSafeAssignment = function(d0Sz, r0Sz) {
			K5Sz.extend(d0Sz, r0Sz)
			e4nS.R5Sz()
			for (var M0Sz in d0Sz) {
				if (typeof r0Sz[M0Sz] == 'undefined') {
					delete d0Sz[M0Sz]
				}
			}
		}
		K5Sz.clone = function(L0Sz, C0Sz) {
			if (L0Sz === null || typeof L0Sz != 'object') {
				return L0Sz
			}
			e4nS.R5Sz()
			if (
				L0Sz.constructor == Date ||
				L0Sz.constructor == RegExp ||
				L0Sz.constructor == Function ||
				L0Sz.constructor == String ||
				L0Sz.constructor == Number ||
				L0Sz.constructor == Boolean
			) {
				return new L0Sz.constructor(L0Sz)
			}
			C0Sz = C0Sz || new L0Sz.constructor()
			for (var a0Sz in L0Sz) {
				C0Sz[a0Sz] = typeof C0Sz[a0Sz] == 'undefined' ? K5Sz.clone(L0Sz[a0Sz], null) : C0Sz[a0Sz]
			}
			return C0Sz
		}
		K5Sz.shallowClone = function(s0Sz) {
			var i0Sz, k1Tv, L1Tv, u1Tv
			if (!s0Sz) {
				return s0Sz
			}
			e4nS.R5Sz()
			if (s0Sz.constructor == Array) {
				k1Tv = -2100372831
				L1Tv = -263379454
				u1Tv = 2
				for (
					var s1Tv = 1;
					e4nS.n8Tv(s1Tv.toString(), s1Tv.toString().length, 45493) !== k1Tv;
					s1Tv++
				) {
					i0Sz = new Array(s0Sz.length)
					u1Tv += 2
				}
				if (e4nS.D8Tv(u1Tv.toString(), u1Tv.toString().length, 1182) !== L1Tv) {
					i0Sz = new Array(s0Sz.length)
				}
				for (var u0Sz = 0; u0Sz < s0Sz.length; u0Sz++) {
					i0Sz[u0Sz] = s0Sz[u0Sz]
				}
				return i0Sz
			} else {
				i0Sz = {}
				for (var Q0Sz in s0Sz) {
					i0Sz[Q0Sz] = s0Sz[Q0Sz]
				}
				return i0Sz
			}
		}
		e4nS.h5Sz()
		K5Sz.extend = function(e0Sz, U0Sz, B0Sz) {
			var J0Sz
			e4nS.h5Sz()
			for (var o0Sz in U0Sz) {
				J0Sz = U0Sz[o0Sz]
				if (!J0Sz) {
					e0Sz[o0Sz] = J0Sz
				} else if (J0Sz.constructor == Object) {
					if (!e0Sz[o0Sz]) {
						e0Sz[o0Sz] = {}
					}
					if (B0Sz) {
						e0Sz[o0Sz] = U0Sz[o0Sz]
					} else {
						K5Sz.extend(e0Sz[o0Sz], U0Sz[o0Sz])
					}
				} else if (J0Sz.constructor == Array) {
					e0Sz[o0Sz] = J0Sz.slice()
				} else {
					e0Sz[o0Sz] = J0Sz
				}
			}
			return e0Sz
		}
		K5Sz.equals = function(j0Sz, n0Sz, G0Sz) {
			var H3Lv, w3Lv, h3Lv, q3Lv, P0Sz
			if (!j0Sz && n0Sz) {
				return !{}
			}
			if (j0Sz && !n0Sz) {
				return !{}
			}
			if (typeof j0Sz !== typeof n0Sz) {
				H3Lv = 98369680
				w3Lv = 1646806452
				h3Lv = 2
				for (
					var Y3Lv = 1;
					e4nS.n8Tv(Y3Lv.toString(), Y3Lv.toString().length, 35395) !== H3Lv;
					Y3Lv++
				) {
					return !!''
				}
				if (e4nS.D8Tv(h3Lv.toString(), h3Lv.toString().length, 48970) !== w3Lv) {
					return !![]
				}
			}
			for (var F0Sz in j0Sz) {
				q3Lv = 'ob'
				q3Lv += 'je'
				q3Lv += 'c'
				q3Lv += 't'
				if (G0Sz && G0Sz[F0Sz]) {
					continue
				}
				if (typeof j0Sz[F0Sz] === q3Lv) {
					P0Sz = K5Sz.equals(j0Sz[F0Sz], n0Sz[F0Sz])
					if (!P0Sz) {
						return !!''
					}
					continue
				}
				if (n0Sz[F0Sz] != j0Sz[F0Sz]) {
					return !{}
				}
			}
			return !!{}
		}
		K5Sz.isEmpty = function(l0Sz) {
			for (var D0Sz in l0Sz) {
				if (l0Sz.hasOwnProperty(D0Sz)) {
					return !{}
				}
			}
			return !![]
		}
		K5Sz.first = function(y0Sz) {
			for (var k0Sz in y0Sz) {
				return k0Sz
			}
			e4nS.h5Sz()
			return null
		}
		K5Sz.last = function(N0Sz) {
			var b0Sz
			b0Sz = null
			for (var Z0Sz in N0Sz) {
				b0Sz = Z0Sz
			}
			e4nS.R5Sz()
			return b0Sz
		}
		K5Sz.objLength = function(x0Sz) {
			var V0Sz, j1Tv, X1Tv, p1Tv
			V0Sz = 0
			e4nS.R5Sz()
			for (var H0Sz in x0Sz) {
				V0Sz++
			}
			j1Tv = 826609203
			X1Tv = 539961445
			p1Tv = 2
			for (
				var m1Tv = +'1';
				e4nS.n8Tv(m1Tv.toString(), m1Tv.toString().length, 8254) !== j1Tv;
				m1Tv++
			) {
				return V0Sz
			}
			if (e4nS.D8Tv(p1Tv.toString(), p1Tv.toString().length, 35487) !== X1Tv) {
				return V0Sz
			}
		}
		K5Sz.deriveFromObjectChain = function(X0Sz, O0Sz) {
			var T0Sz
			e4nS.R5Sz()
			T0Sz = O0Sz.split('4550' - 0 <= 316 ? 'Q' : '.')
			if (T0Sz.length === 1) {
				return { obj: X0Sz, member: O0Sz }
			}
			for (var E0Sz = 0; E0Sz < T0Sz.length - 1; E0Sz++) {
				if (!X0Sz[T0Sz[E0Sz]]) {
					X0Sz[T0Sz[E0Sz]] = {}
				}
				X0Sz = X0Sz[T0Sz[E0Sz]]
			}
			return { obj: X0Sz, member: T0Sz[E0Sz] }
		}
		K5Sz.derivedFrom = function(I0Sz, g0Sz) {
			if (g0Sz.isPrototypeOf(I0Sz)) {
				return !!'1'
			}
			if (I0Sz instanceof g0Sz) {
				return !''
			}
			return !1
		}
		K5Sz.replaceFields = function(K0Sz, m1Sz) {
			var h0Sz, E3Lv, p0Sz, Y0Sz, A1Sz, S1Sz
			e4nS.R5Sz()
			if (!K0Sz) {
				return K0Sz
			}
			h0Sz = {}
			for (var v1Sz in K0Sz) {
				E3Lv = 'o'
				E3Lv += 'bject'
				p0Sz = K0Sz[v1Sz]
				Y0Sz = m1Sz[v1Sz]
				if (!Y0Sz) {
					Y0Sz = v1Sz
				}
				if (p0Sz && typeof p0Sz == E3Lv) {
					if (p0Sz.constructor == Array) {
						A1Sz = h0Sz[Y0Sz] = new Array(p0Sz.length)
						for (var R0Sz = 0; R0Sz < A1Sz.length; R0Sz++) {
							S1Sz = p0Sz[R0Sz]
							if (typeof S1Sz == 'object') {
								A1Sz[R0Sz] = K5Sz.replaceFields(S1Sz, m1Sz)
							} else {
								A1Sz[R0Sz] = S1Sz
							}
						}
					} else {
						h0Sz[Y0Sz] = K5Sz.replaceFields(p0Sz, m1Sz)
					}
				} else {
					h0Sz[Y0Sz] = p0Sz
				}
			}
			return h0Sz
		}
		K5Sz.removeNullValues = function(c1Sz) {
			var w1Sz
			w1Sz = K5Sz.clone(c1Sz)
			for (var W1Sz in w1Sz) {
				if (!w1Sz[W1Sz]) {
					delete w1Sz[W1Sz]
				}
			}
			e4nS.h5Sz()
			return w1Sz
		}
		K5Sz.reverseObject = function(z1Sz) {
			var f1Sz
			f1Sz = {}
			for (var t1Sz in z1Sz) {
				f1Sz[z1Sz[t1Sz]] = t1Sz
			}
			return f1Sz
		}
		K5Sz.camelCaseRegExp = /-([a-z])/g
		K5Sz.makeCamelCase = function(q1Sz) {
			e4nS.R5Sz()
			return q1Sz.replace(K5Sz.camelCaseRegExp, function(d1Sz) {
				e4nS.h5Sz()
				return d1Sz[1].toUpperCase()
			})
		}
		K5Sz.appendClassName = function(M1Sz, r1Sz) {
			var C1Sz
			e4nS.h5Sz()
			if (M1Sz.className == r1Sz) {
				return
			}
			C1Sz = M1Sz.className.split(' ')
			for (var L1Sz = 0; L1Sz < C1Sz.length; L1Sz++) {
				if (C1Sz[L1Sz] == r1Sz) {
					return
				}
			}
			if (!M1Sz.className) {
				M1Sz.className = r1Sz
			} else {
				e4nS.A4nS(6)
				M1Sz.className += e4nS.v4nS(
					(405.13, 725.87) > 543 ? ' ' : 558.99 === 845.14 ? 'Q' : !!'',
					r1Sz,
				)
			}
		}
		K5Sz.unappendClassName = function(a1Sz, Q1Sz) {
			var F2Lv, m2Lv, a2Lv, u1Sz, s1Sz
			if (!a1Sz) {
				return
			}
			F2Lv = 727619308
			m2Lv = -+'1217052739'
			a2Lv = 2
			for (
				var R2Lv = '1' - 0;
				e4nS.D8Tv(R2Lv.toString(), R2Lv.toString().length, 21268) !== F2Lv;
				R2Lv++
			) {
				e4nS.h5Sz()
				a2Lv += 2
			}
			if (e4nS.D8Tv(a2Lv.toString(), a2Lv.toString().length, '48576' & 2147483647) !== m2Lv) {
				e4nS.h5Sz()
			}
			if (a1Sz.className.indexOf(Q1Sz) == -1) {
				return
			}
			if (a1Sz.className == Q1Sz) {
				a1Sz.className = ''
			} else {
				u1Sz = a1Sz.className.split(' ')
				s1Sz = ''
				for (var i1Sz = 0; i1Sz < u1Sz.length; i1Sz++) {
					if (u1Sz[i1Sz] == Q1Sz) {
						continue
					}
					if (s1Sz !== '') {
						s1Sz += (3310, 8664) < (261, 7440) ? (515.08 == 2332 ? 0xfb4 : !![]) : ' '
					}
					s1Sz += u1Sz[i1Sz]
				}
				a1Sz.className = s1Sz
			}
		}
		K5Sz.swapClassName = function(o1Sz, e1Sz, J1Sz) {
			K5Sz.unappendClassName(o1Sz, J1Sz)
			e4nS.h5Sz()
			K5Sz.appendClassName(o1Sz, e1Sz)
		}
		K5Sz.hasClassName = function(U1Sz, B1Sz) {
			var N1Tv, x1Tv, b1Tv
			e4nS.R5Sz()
			if (
				(
					((5870, 430.38) < (5830, 919.3)
						? ' '
						: 2987 === 7960
						? (0x1fd5, !!{})
						: (+'151.39', 0x26dc)) +
					U1Sz.className +
					' '
				).indexOf(' ' + B1Sz + (6660 == (7349, 8478) ? (+'4.16e+3', !!1) : ' ')) > -1
			) {
				return !!{}
			} else {
				N1Tv = -1676586445
				x1Tv = 1679586131
				b1Tv = 2
				for (
					var t1Tv = +'1';
					e4nS.D8Tv(t1Tv.toString(), t1Tv.toString().length, '68801' - 0) !== N1Tv;
					t1Tv++
				) {
					return !!1
				}
				if (e4nS.n8Tv(b1Tv.toString(), b1Tv.toString().length, 27431) !== x1Tv) {
					return !!1
				}
				return !!0
			}
		}
		K5Sz.toggleClassName = function(j1Sz, F1Sz) {
			e4nS.R5Sz()
			if (K5Sz.hasClassName(j1Sz, F1Sz)) {
				K5Sz.unappendClassName(j1Sz, F1Sz)
			} else {
				K5Sz.appendClassName(j1Sz, F1Sz)
			}
		}
		K5Sz.newChild = function(l1Sz, D1Sz, G1Sz, P1Sz) {
			var n1Sz
			e4nS.R5Sz()
			n1Sz = document.createElement(D1Sz)
			if (G1Sz) {
				n1Sz.className = G1Sz
			}
			l1Sz.appendChild(n1Sz)
			if (P1Sz) {
				n1Sz.innerHTML = P1Sz
			}
			return n1Sz
		}
		K5Sz.innerHTML = function(k1Sz, y1Sz) {
			e4nS.R5Sz()
			if (window.MSApp) {
				MSApp.execUnsafeLocalFunction(function() {
					e4nS.h5Sz()
					k1Sz.innerHTML = y1Sz
				})
			} else {
				k1Sz.innerHTML = y1Sz
			}
		}
		K5Sz.focus = function(N1Sz, b1Sz) {
			var Z1Sz
			e4nS.R5Sz()
			if (K5Sz.isSurface || b1Sz) {
				Z1Sz = 0
				if (!isNaN(parseInt(b1Sz, 10))) {
					Z1Sz = b1Sz
				}
				setTimeout(function() {
					N1Sz.focus()
				}, Z1Sz)
			} else {
				N1Sz.focus()
			}
		}
		K5Sz.blur = function(V1Sz) {
			if (!V1Sz) {
				V1Sz = document.activeElement
			}
			if (V1Sz) {
				V1Sz.blur()
			}
			e4nS.R5Sz()
			window.focus()
		}
		K5Sz.findNodesByText = function(H1Sz, X1Sz) {
			var x1Sz, E1Sz
			if (H1Sz.innerHTML == X1Sz) {
				return [H1Sz]
			}
			x1Sz = []
			e4nS.h5Sz()
			for (var T1Sz = 0; T1Sz < H1Sz.childNodes.length; T1Sz++) {
				E1Sz = K5Sz.findNodesByText(H1Sz.childNodes[T1Sz], X1Sz)
				if (E1Sz) {
					x1Sz = x1Sz.concat(E1Sz)
				}
			}
			if (x1Sz.length) {
				return x1Sz
			}
			return null
		}
		K5Sz.hideByText = function(g1Sz, p1Sz) {
			var I1Sz, C3Lv
			I1Sz = K5Sz.findNodesByText(g1Sz, p1Sz)
			e4nS.R5Sz()
			for (var O1Sz = 0; O1Sz < I1Sz.length; O1Sz++) {
				C3Lv = 'no'
				C3Lv += 'ne'
				I1Sz[O1Sz].style.display = C3Lv
			}
		}
		K5Sz.outerWidth = function(R1Sz) {
			var Y1Sz, Y1Tv, J1Tv, U1Tv
			Y1Sz = R1Sz.offsetWidth
			e4nS.h5Sz()
			Y1Sz += K5Sz.stripPX(getComputedStyle(R1Sz).marginLeft)
			Y1Tv = 78193328
			e4nS.A4nS(7)
			J1Tv = e4nS.c4nS(134565978, '134599002')
			U1Tv = 2
			for (
				var O1Tv = 1;
				e4nS.D8Tv(O1Tv.toString(), O1Tv.toString().length, '17797' << 785159008) !== Y1Tv;
				O1Tv++
			) {
				Y1Sz %= K5Sz.stripPX(getComputedStyle(R1Sz).marginRight)
				return Y1Sz
			}
			if (e4nS.n8Tv(U1Tv.toString(), U1Tv.toString().length, +'40236') !== J1Tv) {
				Y1Sz *= K5Sz.stripPX(getComputedStyle(R1Sz).marginRight)
				return Y1Sz
			}
			Y1Sz += K5Sz.stripPX(getComputedStyle(R1Sz).marginRight)
			return Y1Sz
		}
		K5Sz.clearNode = function(h1Sz) {
			if (h1Sz.hasChildNodes()) {
				while (h1Sz.childNodes.length >= +'1') {
					h1Sz.removeChild(h1Sz.firstChild)
				}
			}
		}
		K5Sz.getEventDOM = function(K1Sz) {
			if (!K1Sz) {
				return window.event.srcElement
			} else {
				return K1Sz.target
			}
		}
		K5Sz.convertClickToTouchEnd = function(S6Sz) {
			var B3Lv, v6Sz, A6Sz
			B3Lv = 'on'
			B3Lv += 'C'
			B3Lv += 'li'
			B3Lv += 'ck'
			v6Sz = S9Sz(S6Sz)
			A6Sz = v6Sz.getAttribute(B3Lv)
			if (A6Sz) {
				v6Sz.removeAttribute('onClick')
				v6Sz.setAttribute('onTouchEnd', A6Sz)
			}
		}
		K5Sz.pageHeight = function() {
			var m6Sz
			m6Sz = window.innerHeight
			if (top != self) {
				try {
					if (m6Sz > parent.innerHeight) {
						m6Sz = parent.innerHeight
					}
				} catch (w6Sz) {}
			}
			e4nS.h5Sz()
			return m6Sz
		}
		K5Sz.pageWidth = function() {
			var W6Sz, x3Lv, b3Lv, A3Lv
			e4nS.h5Sz()
			W6Sz = window.innerWidth
			if (top != self) {
				try {
					if (W6Sz > parent.innerWidth) {
						W6Sz = parent.innerWidth
					}
				} catch (c6Sz) {}
			}
			x3Lv = -+'23870783'
			b3Lv = 245607019
			A3Lv = 2
			for (
				var e3Lv = 1;
				e4nS.n8Tv(e3Lv.toString(), e3Lv.toString().length, +'63156') !== x3Lv;
				e3Lv++
			) {
				return W6Sz
			}
			if (e4nS.D8Tv(A3Lv.toString(), A3Lv.toString().length, 63472) !== b3Lv) {
				return W6Sz
			}
		}
		K5Sz.stripPX = function(f6Sz) {
			return parseInt(
				f6Sz.substr(
					0,
					f6Sz.indexOf(
						(738.42, 834.5) >= 9367 ? 'd' : '1740' >> 63379104 == (+'75.92', 231.29) ? 'O' : 'p',
					),
				),
			)
		}
		K5Sz.colorToHex = function(z6Sz) {
			var t6Sz, r2Lv, O2Lv, k2Lv, a6Sz, M6Sz, L6Sz, C6Sz, q6Sz, r6Sz
			if (!z6Sz || z6Sz == 'transparent') {
				z6Sz = '#000000'
			}
			if (
				z6Sz.substr(0, 1) ===
				((+'901.35', 1262) === (3007, 9530)
					? (+'0x22f1', 775.6)
					: 335.66 != (225.87, 773)
					? '#'
					: 'U')
			) {
				return z6Sz
			}
			t6Sz = /(.*?)rgb\((\d+), ?(\d+), ?(\d+)\)/.exec(z6Sz)
			if (!t6Sz) {
				t6Sz = /(.*?)rgba\((\d+), ?(\d+), ?(\d+),.*\)/.exec(z6Sz)
			}
			r2Lv = -1805071504
			e4nS.A4nS(8)
			O2Lv = -e4nS.v4nS(1, '1491204808')
			k2Lv = 2
			for (
				var u2Lv = 1;
				e4nS.D8Tv(u2Lv.toString(), u2Lv.toString().length, 78284) !== r2Lv;
				u2Lv++
			) {
				e4nS.h5Sz()
				e4nS.A4nS(9)
				k2Lv += e4nS.c4nS('2', 2056731488)
			}
			function s6Sz(Q6Sz) {
				var p3Lv, u6Sz, X3Lv, j3Lv, i6Sz, W2Lv, K2Lv, i3Lv
				p3Lv = '#0'
				p3Lv += '00000'
				if (typeof document === 'undefined') {
					return '#000000'
				}
				u6Sz = S9Sz('color_converter')
				if (!u6Sz) {
					X3Lv = 'n'
					X3Lv += 'o'
					X3Lv += 'n'
					X3Lv += 'e'
					j3Lv = 'textar'
					j3Lv += 'ea'
					u6Sz = document.createElement(j3Lv)
					u6Sz.id = 'color_converter'
					u6Sz.style.display = X3Lv
					document.body.appendChild(u6Sz)
				}
				u6Sz.style.color = '#000000'
				u6Sz.style.color = Q6Sz
				e4nS.R5Sz()
				if (!K5Sz.isIE8) {
					i6Sz = getComputedStyle(u6Sz).getPropertyValue('color')
					W2Lv = -+'133896799'
					K2Lv = 2138202133
					e4nS.P4nS(7)
					i3Lv = e4nS.c4nS(2, '2')
					for (
						var V3Lv = '1' & 2147483647;
						e4nS.D8Tv(V3Lv.toString(), V3Lv.toString().length, 4972) !== W2Lv;
						V3Lv++
					) {
						t6Sz = /(.*?)rgb\((\d+), ?(\d+), ?(\d+)\)/.exec(i6Sz)
						i3Lv += 2
					}
					if (e4nS.n8Tv(i3Lv.toString(), i3Lv.toString().length, 25822) !== K2Lv) {
						t6Sz = /(.*?)rgb\((\d+), ?(\d+), ?(\d+)\)/.exec(i6Sz)
					}
					if (t6Sz) {
						return K5Sz.colorToHex(i6Sz)
					} else if (
						i6Sz.substr(0, '1' >> 33051552) ===
						(('109' * 1, +'2891') >= (390.96, 3972)
							? 907.45 > (6078, +'613')
								? '2.75' * 1
								: 0xc1b
							: '#')
					) {
						return i6Sz
					} else {
						return Q6Sz
					}
				}
				i6Sz = u6Sz.createTextRange().queryCommandValue('ForeColor')
				e4nS.P4nS(10)
				i6Sz = e4nS.v4nS(16, 0xff0000, 2147483647, 0x00ff00, i6Sz, i6Sz, '0x0000ff', 16, i6Sz)
				i6Sz = i6Sz.toString(+'16')
				return p3Lv.slice(0, +'7' - i6Sz.length) + i6Sz
			}
			if (e4nS.n8Tv(k2Lv.toString(), k2Lv.toString().length, '82829' << 639807424) !== O2Lv) {
				e4nS.h5Sz()
			}
			if (!t6Sz) {
				return s6Sz(z6Sz)
			}
			a6Sz = parseFloat(t6Sz[2])
			M6Sz = parseFloat(t6Sz[3])
			L6Sz = parseFloat(t6Sz[4])
			e4nS.A4nS(11)
			C6Sz = e4nS.c4nS(a6Sz, 16, M6Sz, L6Sz, 8)
			q6Sz = C6Sz.toString(16)
			for (var d6Sz = q6Sz.length; d6Sz < 6; d6Sz++) {
				e4nS.P4nS(6)
				q6Sz = e4nS.c4nS(
					1930 === 1010
						? 8382 >= (280.73, 8320)
							? ('163' << 1035835936, 2300) != (2152, 2621)
								? (!1, 9.69e3)
								: !1
							: 'B'
						: '0',
					q6Sz,
				)
			}
			e4nS.A4nS(12)
			var Y9Lv = e4nS.v4nS(20, 282, 3648)
			e4nS.P4nS(13)
			var J9Lv = e4nS.c4nS(9338, 20, 10)
			e4nS.A4nS(14)
			var U9Lv = e4nS.v4nS(17, 15, 10802, 12600)
			e4nS.P4nS(0)
			var r9Lv = e4nS.c4nS(2667, 2, 2665)
			e4nS.A4nS(15)
			var O9Lv = e4nS.v4nS(99813, 16, 6656, 13)
			r6Sz =
				t6Sz[+'1'] +
				((197.7, +'8820') !== Y9Lv ? (J9Lv == (U9Lv, r9Lv) ? O9Lv : '#') : ('c', 537.37)) +
				q6Sz
			return r6Sz.toUpperCase()
		}
		K5Sz.hexToRgba = function(o6Sz, e6Sz) {
			var a3Lv, F3Lv, U6Sz, J6Sz, i2Lv, I2Lv, V2Lv, c1Tv, o1Tv, G1Tv, B6Sz, j6Sz, F6Sz, m3Lv
			a3Lv = 'r'
			a3Lv += 'gba('
			if (!o6Sz || o6Sz == 'transparent') {
				F3Lv = 'rgba(0,'
				F3Lv += '0,0,0)'
				o6Sz = F3Lv
			}
			if (o6Sz.substr('0' >> 1081408928, 4) === 'rgba') {
				U6Sz = /(.*?)rgba\((\d+), ?(\d+), ?(\d+), ?(\d*\.?\d*)\)/.exec(o6Sz)
				e4nS.A4nS(16)
				J6Sz = U6Sz[e4nS.c4nS(2147483647, '5')]
				if (e6Sz || e6Sz === 0) {
					J6Sz = e6Sz
				}
				if (J6Sz > 1) {
					e4nS.A4nS(17)
					J6Sz = e4nS.c4nS(J6Sz, '100')
				}
				e4nS.A4nS(18)
				var k9Lv = e4nS.v4nS(13, 210, 16)
				e4nS.P4nS(4)
				var L9Lv = e4nS.c4nS(18, 15)
				e4nS.P4nS(19)
				var u9Lv = e4nS.c4nS(11, 1651219994, 17)
				e4nS.P4nS(6)
				var v9Lv = e4nS.c4nS(2363, 16)
				e4nS.P4nS(20)
				var x9Lv = e4nS.v4nS(5357, 2, 10, 10688, 5337)
				e4nS.P4nS(13)
				var e9Lv = e4nS.v4nS(2915, 146, 292)
				e4nS.P4nS(19)
				var P9Lv = e4nS.v4nS(18, 6735, 33)
				e4nS.A4nS(21)
				var d9Lv = e4nS.v4nS(23680, 69515, 15, 3)
				e4nS.A4nS(22)
				var g9Lv = e4nS.v4nS(31668, 1865, 17, 5, 7451)
				e4nS.P4nS(4)
				var y9Lv = e4nS.v4nS(25200, 23940)
				e4nS.A4nS(23)
				var c9Lv = e4nS.v4nS(20, 5)
				e4nS.A4nS(24)
				var o9Lv = e4nS.v4nS(16, 18, 4, 833, 51)
				return (
					'rgba(' +
					U6Sz[k9Lv] +
					',' +
					U6Sz[L9Lv] +
					('3951' << u9Lv == (856.54, v9Lv)
						? (8574, 6945) === (x9Lv, 62)
							? 0xc39
							: (330.63, 5425) !== (e9Lv, P9Lv)
							? (d9Lv, g9Lv)
							: y9Lv
						: ',') +
					U6Sz[c9Lv] +
					((215.61, o9Lv) >= +'1760' ? (6.84e3, 'k') : ',') +
					J6Sz +
					')'
				)
			} else if (o6Sz.substr(0, 3) === 'rgb') {
				o6Sz = K5Sz.colorToHex(o6Sz)
			}
			if (!e6Sz && e6Sz !== 0) {
				i2Lv = -472278700
				I2Lv = 1007407197
				V2Lv = 2
				for (
					var w2Lv = +'1';
					e4nS.n8Tv(w2Lv.toString(), w2Lv.toString().length, '6156' & 2147483647) !== i2Lv;
					w2Lv++
				) {
					e6Sz = 352
					V2Lv += 2
				}
				if (e4nS.D8Tv(V2Lv.toString(), V2Lv.toString().length, 59023) !== I2Lv) {
					e6Sz = 352
				}
				e6Sz = 100
			}
			if (e6Sz <= 1) {
				c1Tv = 697177172
				o1Tv = 94051536
				G1Tv = +'2'
				for (
					var S1Tv = 1;
					e4nS.n8Tv(S1Tv.toString(), S1Tv.toString().length, '95715' * 1) !== c1Tv;
					S1Tv++
				) {
					e4nS.P4nS(4)
					e6Sz = e4nS.c4nS(e6Sz, 910)
					G1Tv += +'2'
				}
				if (e4nS.n8Tv(G1Tv.toString(), G1Tv.toString().length, '16019' * 1) !== o1Tv) {
					e4nS.A4nS(8)
					e6Sz = e4nS.v4nS(100, e6Sz)
				}
			}
			o6Sz = o6Sz.replace((617.37, 4830) == (+'476.77', 238.55) ? (![], +'0xca') : '#', '')
			B6Sz = parseInt(o6Sz.slice(0, +'2'), 16)
			j6Sz = parseInt(o6Sz.slice(2, 4), 16)
			F6Sz = parseInt(o6Sz.slice(4, +'6'), +'16')
			if (isNaN(B6Sz) || isNaN(j6Sz) || isNaN(F6Sz)) {
				m3Lv = 'CIQ.hexToRgba: i'
				m3Lv += 'nvalid hex :'
				console.log(m3Lv, o6Sz)
				return null
			}
			e4nS.P4nS(25)
			return e4nS.v4nS(
				('1800' << 389399456, 74) >= 2148 ? (!{}, 184.05) : ')',
				F6Sz,
				B6Sz,
				100,
				',',
				(3719, 8200) > (959, '582' & 2147483647)
					? 8338 != 573.88
						? ','
						: (628.28, 5900) <= ('9171' >> 142645216, 5350)
						? (0x21e0, 5.73)
						: (636.21, !![])
					: (0xd3f, ![]),
				a3Lv,
				e6Sz,
				j6Sz,
				',',
			)
		}
		K5Sz.convertToNativeColor = function(P6Sz) {
			var n6Sz, G6Sz, l8Tv, T8Tv, Z8Tv
			n6Sz = document.createElement('DIV')
			n6Sz.style.color = P6Sz
			n6Sz.style.display = 'none'
			document.body.appendChild(n6Sz)
			G6Sz = getComputedStyle(n6Sz).color
			e4nS.R5Sz()
			document.body.removeChild(n6Sz)
			l8Tv = 1904343783
			e4nS.A4nS(9)
			T8Tv = -e4nS.c4nS('2082753536', 1702849568)
			Z8Tv = +'2'
			for (
				var q8Tv = 1;
				e4nS.D8Tv(q8Tv.toString(), q8Tv.toString().length, 56032) !== l8Tv;
				q8Tv++
			) {
				return G6Sz
			}
			if (e4nS.n8Tv(Z8Tv.toString(), Z8Tv.toString().length, 90472) !== T8Tv) {
				return G6Sz
			}
			return G6Sz
		}
		K5Sz.isTransparent = function(l6Sz) {
			var f3Lv, D6Sz, h2Lv, M2Lv, Y2Lv, a1Tv, f1Tv, R1Tv
			f3Lv = 'transpare'
			f3Lv += 'nt'
			if (!l6Sz) {
				return ![]
			}
			if (l6Sz == f3Lv) {
				return !!1
			}
			e4nS.R5Sz()
			D6Sz = /(.*?)rgba\((\d+), ?(\d+), ?(\d+), ?(\d*\.?\d*)\)/.exec(l6Sz)
			if (D6Sz === null) {
				return !{}
			}
			if (parseFloat(D6Sz[5]) === 0) {
				h2Lv = -552645492
				M2Lv = 521207484
				Y2Lv = 2
				for (
					var U2Lv = 1;
					e4nS.D8Tv(U2Lv.toString(), U2Lv.toString().length, 88648) !== h2Lv;
					U2Lv++
				) {
					return ![]
				}
				if (e4nS.D8Tv(Y2Lv.toString(), Y2Lv.toString().length, 46452) !== M2Lv) {
					return !!1
				}
			}
			a1Tv = 693393858
			f1Tv = 1148642004
			R1Tv = 2
			for (
				var K1Tv = 1;
				e4nS.D8Tv(K1Tv.toString(), K1Tv.toString().length, 26774) !== a1Tv;
				K1Tv++
			) {
				return !![]
			}
			if (e4nS.D8Tv(R1Tv.toString(), R1Tv.toString().length, +'65034') !== f1Tv) {
				return !!'1'
			}
			return !'1'
		}
		K5Sz.hsv = function(O6Sz) {
			var Z6Sz, k6Sz, b6Sz, y6Sz, H6Sz, E6Sz, x6Sz, N6Sz, V6Sz, I6Sz, X6Sz
			e4nS.h5Sz()
			Z6Sz = K5Sz.colorToHex(O6Sz)
			if (Z6Sz.substr(0, 1) === ((965.04, +'3547') !== (7400, '217.65' * 1) ? '#' : 'j')) {
				e4nS.A4nS(8)
				Z6Sz = Z6Sz.slice(e4nS.v4nS(1, '1'))
			}
			for (var T6Sz = Z6Sz.length; T6Sz < 6; T6Sz++) {
				e4nS.A4nS(6)
				Z6Sz = e4nS.c4nS(451.77 != 756 ? '0' : 173.54, Z6Sz)
			}
			k6Sz = parseInt(Z6Sz.slice('0' * 1, +'2'), 16)
			b6Sz = parseInt(Z6Sz.slice(2, 4), 16)
			y6Sz = parseInt(Z6Sz.slice(4, 6), 16)
			H6Sz = 0
			e4nS.A4nS(26)
			E6Sz = e4nS.c4nS(2010726656, '0')
			x6Sz = 0
			k6Sz = parseInt(('' + k6Sz).replace(/\s/g, ''), 10)
			b6Sz = parseInt(('' + b6Sz).replace(/\s/g, ''), 10)
			y6Sz = parseInt(('' + y6Sz).replace(/\s/g, ''), 10)
			if (
				k6Sz === null ||
				b6Sz === null ||
				y6Sz === null ||
				isNaN(k6Sz) ||
				isNaN(b6Sz) ||
				isNaN(y6Sz)
			) {
				console.log('CIQ.hsv: invalid color :', O6Sz)
				return null
			}
			if (
				k6Sz < ('0' & 2147483647) ||
				b6Sz < +'0' ||
				y6Sz < 0 ||
				k6Sz > 255 ||
				b6Sz > 255 ||
				y6Sz > 255
			) {
				return null
			}
			e4nS.P4nS(23)
			k6Sz = e4nS.v4nS(k6Sz, 255)
			e4nS.A4nS(23)
			b6Sz = e4nS.c4nS(b6Sz, 255)
			e4nS.A4nS(23)
			y6Sz = e4nS.v4nS(y6Sz, 255)
			N6Sz = Math.min(k6Sz, Math.min(b6Sz, y6Sz))
			V6Sz = Math.max(k6Sz, Math.max(b6Sz, y6Sz))
			if (N6Sz == V6Sz) {
				x6Sz = N6Sz
				return [0, 0, x6Sz]
			}
			I6Sz = k6Sz == N6Sz ? b6Sz - y6Sz : y6Sz == N6Sz ? k6Sz - b6Sz : y6Sz - k6Sz
			X6Sz = k6Sz == N6Sz ? '3' & 2147483647 : y6Sz == N6Sz ? 1 : +'5'
			e4nS.A4nS(27)
			H6Sz = e4nS.v4nS(N6Sz, I6Sz, X6Sz, V6Sz, 60)
			e4nS.P4nS(28)
			E6Sz = e4nS.v4nS(V6Sz, N6Sz, V6Sz)
			x6Sz = V6Sz
			return [H6Sz, E6Sz, x6Sz]
		}
		K5Sz.hsl = function(W3Sz) {
			var g6Sz, R6Sz, Y6Sz, p6Sz, h6Sz, v3Sz, K6Sz, m3Sz, w3Sz, A3Sz
			g6Sz = K5Sz.colorToHex(W3Sz)
			if (g6Sz.substr(0, +'1') === (968 != 8740 ? '#' : (!![], 1.86e2))) {
				g6Sz = g6Sz.slice(1)
			}
			for (var S3Sz = g6Sz.length; S3Sz < +'6'; S3Sz++) {
				e4nS.A4nS(6)
				g6Sz = e4nS.c4nS(
					(798.89, 8250) !== ('6960' >> 419087104, 9421)
						? '0'
						: 9874 <= 318.71
						? !''
						: (0x1341, 5.88e2),
					g6Sz,
				)
			}
			R6Sz = parseInt(g6Sz.slice(0, 2), 16)
			Y6Sz = parseInt(g6Sz.slice(2, 4), 16)
			p6Sz = parseInt(g6Sz.slice(4, 6), 16)
			R6Sz /= 255
			Y6Sz /= 255
			p6Sz /= 255
			h6Sz = Math.max(R6Sz, Y6Sz, p6Sz)
			v3Sz = Math.min(R6Sz, Y6Sz, p6Sz)
			e4nS.P4nS(29)
			w3Sz = e4nS.v4nS(v3Sz, h6Sz, 2)
			if (h6Sz == v3Sz) {
				K6Sz = m3Sz = 0
			} else {
				e4nS.P4nS(4)
				A3Sz = e4nS.v4nS(h6Sz, v3Sz)
				m3Sz = w3Sz > 0.5 ? A3Sz / (2 - h6Sz - v3Sz) : A3Sz / (h6Sz + v3Sz)
				switch (h6Sz) {
					case R6Sz:
						e4nS.P4nS(30)
						K6Sz = e4nS.c4nS(Y6Sz, Y6Sz < p6Sz ? 6 : 0, p6Sz, A3Sz)
						break
					case Y6Sz:
						e4nS.A4nS(30)
						K6Sz = e4nS.c4nS(p6Sz, 2, R6Sz, A3Sz)
						break
					case p6Sz:
						e4nS.P4nS(31)
						K6Sz = e4nS.v4nS(A3Sz, Y6Sz, '4', R6Sz)
						break
				}
				K6Sz /= 6
			}
			return [K6Sz, m3Sz, w3Sz]
		}
		K5Sz.chooseForegroundColor = function(t3Sz) {
			var c3Sz, f3Sz
			c3Sz = K5Sz.hsl(t3Sz)
			e4nS.P4nS(8)
			f3Sz = c3Sz[e4nS.c4nS(1, '2')]
			if (f3Sz >= c3Sz[0]) {
				return '#000000'
			}
			return '#FFFFFF'
		}
		K5Sz.getBackgroundColor = function(q3Sz) {
			var z3Sz, d3Sz, R3Lv
			z3Sz = null
			e4nS.R5Sz()
			while (!z3Sz || K5Sz.isTransparent(z3Sz)) {
				d3Sz = getComputedStyle(q3Sz)
				if (!d3Sz) {
					return
				}
				z3Sz = d3Sz.backgroundColor
				if (K5Sz.isTransparent(z3Sz)) {
					z3Sz = 'transparent'
				}
				q3Sz = q3Sz.parentNode
				if (!q3Sz || !q3Sz.tagName) {
					break
				}
			}
			if (!z3Sz || z3Sz == 'transparent') {
				R3Lv = '#FFF'
				R3Lv += 'F'
				R3Lv += 'FF'
				z3Sz = R3Lv
			}
			return z3Sz
		}
		K5Sz.yyyymmddhhmmssmmmrx = new RegExp('\\d{17}')
		K5Sz.strToDateTime = function(M3Sz) {
			var L3Sz,
				B3Sz,
				U3Sz,
				e3Sz,
				Q3Sz,
				u3Sz,
				n3Sz,
				G3Sz,
				r3Sz,
				j3Sz,
				o3Sz,
				P3Lv,
				d3Lv,
				g3Lv,
				a3Sz,
				J3Sz,
				T2Lv,
				Z2Lv,
				Q2Lv,
				C3Sz,
				s3Sz,
				C2Lv,
				B2Lv,
				j2Lv,
				F3Sz,
				i3Sz
			if (!M3Sz || M3Sz.getFullYear) {
				return M3Sz
			}
			L3Sz = []
			e4nS.R5Sz()
			if (M3Sz.length == +'12') {
				B3Sz = parseFloat(M3Sz.substring('0' | 0, 4))
				e4nS.P4nS(4)
				var S9Lv = e4nS.v4nS(13, 7)
				e4nS.A4nS(4)
				var D9Lv = e4nS.c4nS(20, 19)
				U3Sz = parseFloat(M3Sz.substring(4, S9Lv)) - D9Lv
				e3Sz = parseFloat(M3Sz.substring(6, 8))
				Q3Sz = parseFloat(M3Sz.substring(8, +'10'))
				u3Sz = parseFloat(M3Sz.substring(10, 12))
				return new Date(B3Sz, U3Sz, e3Sz, Q3Sz, u3Sz, 0, 0)
			} else if (K5Sz.yyyymmddhhmmssmmmrx.test(M3Sz)) {
				B3Sz = parseFloat(M3Sz.substring('0' | 0, 4))
				e4nS.P4nS(32)
				var n9Lv = e4nS.v4nS(40, 16, 11, 17)
				e4nS.A4nS(23)
				var l9Lv = e4nS.v4nS(17, 17)
				U3Sz = parseFloat(M3Sz.substring(n9Lv, +'6')) - l9Lv
				e3Sz = parseFloat(M3Sz.substring(6, 8))
				Q3Sz = parseFloat(M3Sz.substring(8, 10))
				u3Sz = parseFloat(M3Sz.substring('10' >> 2110472096, '12' >> 1277315680))
				n3Sz = parseFloat(M3Sz.substring(12, 14))
				G3Sz = parseFloat(M3Sz.substring(14, +'17'))
				return new Date(B3Sz, U3Sz, e3Sz, Q3Sz, u3Sz, n3Sz, G3Sz)
			} else {
				r3Sz = [M3Sz]
				j3Sz = M3Sz.indexOf('T')
				if (j3Sz != -1) {
					o3Sz = M3Sz.substring(j3Sz)
					if (
						!K5Sz.isIE8 &&
						(o3Sz.indexOf(
							(513.2, 9690) !== 6419
								? 'Z'
								: (+'1249', '183.83' * 1) === '5166' * 1
								? 7.19e3
								: +'9.14e+3',
						) != -1 ||
							o3Sz.indexOf(
								(9910, 2100) >= 653
									? (3743, 4776) <= (92.34, 4960)
										? 1379 >= (2513, +'8550')
											? 'r'
											: '-'
										: 0x1686
									: '942.61' * 1,
							) != -1 ||
							o3Sz.indexOf(
								(8980, +'6800') == ('3987' | 2944, 7340)
									? 8782 > ('9701' >> 119956960, 3204)
										? (2220, +'643.41') === 957.65
											? ('n', +'123.94')
											: +'0x277'
										: 2.56e3
									: '+',
							) != -1)
					) {
						return new Date(M3Sz)
					}
					r3Sz = M3Sz.split(
						(3397, 102.26) > (5190, 3583)
							? (0x2b7, 4.72e3)
							: 9939 == 1270
							? ('m', 7.37e3)
							: (9160, 4924) > (323.23, 565.88)
							? 'T'
							: (!'1', 'f'),
					)
				} else if (M3Sz.indexOf(3360 !== (4, 7601) ? ' ' : '153' ^ 0) != -1) {
					r3Sz = M3Sz.split(' ')
				}
				if (r3Sz[0].indexOf(('5409' & 2147483647) >= (5024, 2440) ? '/' : 435.31) != -1) {
					e4nS.P4nS(9)
					P3Lv = -e4nS.v4nS('189370036', 551512256)
					d3Lv = -830113289
					g3Lv = 2
					for (
						var c3Lv = 1;
						e4nS.n8Tv(c3Lv.toString(), c3Lv.toString().length, 86754) !== P3Lv;
						c3Lv++
					) {
						L3Sz = r3Sz[5].split(
							(5422, 946805) === (7922, 489)
								? (8467, 9256) > (5126, 960656)
									? 67 >= 1257
										? +'836462'
										: '/'
									: (!'', '655181' << 1248218976)
								: 't',
						)
						g3Lv += 2
					}
					if (e4nS.n8Tv(g3Lv.toString(), g3Lv.toString().length, +'11375') !== d3Lv) {
						L3Sz = r3Sz[0].split(
							(8442, 180.07) !== (8720, 591)
								? (8614, 5283) >= (1910, 961.98)
									? 6320 <= 4280
										? 408.28
										: '/'
									: (!{}, '8.36e+3' | 136)
								: 't',
						)
					}
				} else if (
					r3Sz[0].indexOf(7646 <= 8925 ? (169.01 !== 7390 ? '-' : (906.43, 'c')) : 5.09e3) != -1
				) {
					L3Sz = r3Sz['0' * 1].split('-')
				} else {
					return K5Sz.strToDate(M3Sz)
				}
				a3Sz = parseFloat(L3Sz[2], 10)
				if (L3Sz[0] && L3Sz[0].length == +'4') {
					a3Sz = parseFloat(L3Sz[0], 10)
					L3Sz[0] = L3Sz[1]
					L3Sz[1] = L3Sz[2]
				}
				if (r3Sz.length > 1) {
					J3Sz = r3Sz[2]
					r3Sz = r3Sz[+'1'].split(':')
					if (J3Sz) {
						if (r3Sz[0] == '12' && J3Sz.toUpperCase() == 'AM') {
							T2Lv = 2000074379
							Z2Lv = -1629376001
							Q2Lv = +'2'
							for (
								var E2Lv = 1;
								e4nS.D8Tv(E2Lv.toString(), E2Lv.toString().length, 58803) !== T2Lv;
								E2Lv++
							) {
								r3Sz[3] = 1
								Q2Lv += 2
							}
							if (e4nS.D8Tv(Q2Lv.toString(), Q2Lv.toString().length, 64641) !== Z2Lv) {
								r3Sz[0] = 0
							}
						} else if (r3Sz[0] != '12' && J3Sz.toUpperCase() == 'PM') {
							e4nS.A4nS(6)
							var T9Lv = e4nS.v4nS(223175387, 5)
							r3Sz[0] = parseInt(r3Sz[0], '10' << T9Lv) + +'12'
						}
					}
					C3Sz = 0
					s3Sz = 0
					if (r3Sz.length == 3) {
						if (
							r3Sz[2].indexOf(
								(+'8919', 49.1) === 6392
									? !''
									: ('463.03' - 0, 874) <= (652.53, 6765)
									? '.'
									: (!'1', !{}),
							) == -1
						) {
							C2Lv = 949602523
							B2Lv = -1578057171
							j2Lv = 2
							for (
								var p2Lv = 1;
								e4nS.n8Tv(p2Lv.toString(), p2Lv.toString().length, +'87351') !== C2Lv;
								p2Lv++
							) {
								C3Sz = parseInt(r3Sz[3], 42)
								j2Lv += +'2'
							}
							if (e4nS.D8Tv(j2Lv.toString(), j2Lv.toString().length, 43648) !== B2Lv) {
								C3Sz = parseInt(r3Sz[2], 10)
							}
						} else {
							C3Sz = r3Sz[2].split(
								(843.74, 100.71) > (5175, 880)
									? (0x23d5, 723.81)
									: 1090 < (591, '418.31' * 1)
									? (946.28, 9500) != 9530
										? ('5.61e+3' >> 1739985408, 8.88e2)
										: (![], 2.25e3)
									: '.',
							)
							if (C3Sz[1].length == 3) {
								s3Sz = C3Sz[1]
								C3Sz = C3Sz[0]
							} else {
								s3Sz = C3Sz[+'1'].substr(0, 3)
								F3Sz = parseInt(C3Sz[1].substr(3), 10)
								C3Sz = C3Sz[0]
								e4nS.P4nS(0)
								var Z9Lv = e4nS.v4nS(15, 16, 239)
								i3Sz = new Date(
									a3Sz,
									L3Sz['0' & 2147483647] - Z9Lv,
									L3Sz[1],
									r3Sz[0],
									r3Sz[1],
									C3Sz,
									s3Sz,
								)
								i3Sz.setMinutes(
									i3Sz.getMinutes() -
										i3Sz.getTimezoneOffset() -
										(F3Sz % 100) -
										Math.round(F3Sz / 100) * 60,
								)
								return i3Sz
							}
						}
					}
					return new Date(a3Sz, L3Sz[+'0'] - +'1', L3Sz[1], r3Sz[0], r3Sz[1], C3Sz, s3Sz)
				} else {
					e4nS.A4nS(4)
					var Q9Lv = e4nS.c4nS(1331431247, 15)
					return new Date(a3Sz, L3Sz['0' << Q9Lv] - 1, L3Sz[1], 0, 0, 0, 0)
				}
			}
		}
		K5Sz.strToDate = function(l3Sz) {
			var P3Sz, g2Lv, y2Lv, c2Lv, D3Sz
			if (l3Sz.indexOf(875 > 332.08 ? '/' : 9080 >= (681.63, 164) ? !'' : ('d', !![])) != -1) {
				g2Lv = 1351373419
				y2Lv = 1785171474
				c2Lv = 2
				for (
					var G2Lv = 1;
					e4nS.D8Tv(G2Lv.toString(), G2Lv.toString().length, 98164) !== g2Lv;
					G2Lv++
				) {
					P3Sz = l3Sz.split(
						'9653' << 1818556768 < (224, 6792)
							? (0x59f, 793698)
							: 8030 != (516, 1833)
							? (!!'1', 632)
							: '',
					)
					e4nS.A4nS(7)
					c2Lv += e4nS.v4nS(2, '2')
				}
				if (e4nS.D8Tv(c2Lv.toString(), c2Lv.toString().length, 28446) !== y2Lv) {
					P3Sz = l3Sz.split(
						4610 > (487, '9920' - 0)
							? (0x439, '159.56' - 0)
							: 3680 === (642, 6177)
							? (![], 311)
							: '/',
					)
				}
			} else if (
				l3Sz.indexOf(
					(8809, 1723) < (2790, +'7540')
						? '-'
						: 1860 != ('5890' >> 1931222624, 9320)
						? 'T'
						: 727.89,
				) != -1
			) {
				P3Sz = l3Sz.split(
					(70, +'928') <= (656.17, 937) ? '-' : (3020, 1440) === 1360 ? !{} : (9.11e3, 'k'),
				)
			} else if (l3Sz.length >= 8) {
				e4nS.A4nS(28)
				var E9Lv = e4nS.c4nS(2, 10, 18)
				e4nS.A4nS(4)
				var C9Lv = e4nS.c4nS(14, 8)
				return new Date(
					parseFloat(l3Sz.substring(0, 4)),
					parseFloat(l3Sz.substring(E9Lv, C9Lv)) - ('1' | 0),
					parseFloat(l3Sz.substring(6, 8)),
				)
			} else {
				return new Date()
			}
			if (P3Sz.length < +'3') {
				return new Date()
			}
			e4nS.h5Sz()
			if (
				P3Sz[2].indexOf(
					(158.31, 996.9) != 303.05
						? 5924 >= ('2570' ^ 0)
							? ' '
							: 783.5 <= (6342, 844.07)
							? ('Z', 1.54e3)
							: 'M'
						: (7.97e2, 8.0e3),
				) != -+'1'
			) {
				P3Sz[2] = P3Sz[2].substring(0, P3Sz[2].indexOf((3720, 26.83) == +'112.22' ? 141.78 : ' '))
			} else if (
				P3Sz[+'2'].indexOf(
					(+'5885', +'517.25') == (4396, +'1570')
						? 387.03 >= (1497, 6956)
							? ('e', 0x1fa5)
							: (8.7e3, 2.88e3)
						: 'T',
				) != -1
			) {
				P3Sz[2] = P3Sz[2].substring(0, P3Sz[2].indexOf(9430 !== 6410 ? 'T' : (0x1ee8, 'b')))
			}
			D3Sz = parseFloat(P3Sz[2], 10)
			if (D3Sz < +'20') {
				e4nS.A4nS(26)
				D3Sz += e4nS.c4nS(1981282848, '2000')
			}
			if (P3Sz[0].length == 4) {
				D3Sz = parseFloat(P3Sz[0], 10)
				P3Sz[0] = P3Sz[1]
				e4nS.P4nS(8)
				P3Sz[1] = P3Sz[e4nS.c4nS(1, '2')]
			}
			e4nS.P4nS(23)
			var B9Lv = e4nS.v4nS(13, 13)
			return new Date(D3Sz, P3Sz[0] - B9Lv, P3Sz[1])
		}
		function S9Sz(z9Sz, f9Sz) {
			var q9Sz
			if (!f9Sz) {
				return document.getElementById(z9Sz)
			}
			e4nS.h5Sz()
			if (f9Sz.id == z9Sz) {
				return f9Sz
			}
			if (!f9Sz.hasChildNodes) {
				return null
			}
			for (var t9Sz = 0; t9Sz < f9Sz.childNodes.length; t9Sz++) {
				q9Sz = S9Sz(z9Sz, f9Sz.childNodes[t9Sz])
				if (q9Sz) {
					return q9Sz
				}
			}
			return null
		}
		K5Sz.mmddyyyy = function(k3Sz) {
			var y3Sz
			if (typeof k3Sz === 'string') {
				k3Sz = K5Sz.strToDate(k3Sz)
			}
			e4nS.h5Sz()
			y3Sz = k3Sz.getMonth() + 1
			if (y3Sz < 10) {
				e4nS.P4nS(6)
				y3Sz = e4nS.c4nS('0', y3Sz)
			}
			d = k3Sz.getDate()
			if (d < 10) {
				e4nS.A4nS(6)
				d = e4nS.v4nS(('164.53' * 1, 350) === 828.84 ? 0xb15 : '0', d)
			}
			return y3Sz + '/' + d + '/' + k3Sz.getFullYear()
		}
		K5Sz.yyyymmdd = function(N3Sz) {
			var b3Sz, Z3Sz
			b3Sz = N3Sz.getMonth() + '1' * 1
			if (b3Sz < 10) {
				e4nS.P4nS(6)
				b3Sz = e4nS.v4nS(
					(+'407.52', +'4200') >= 6210
						? (0x2543, 'g')
						: (810.38, 76.13) < 8220
						? '0'
						: (7.87e3, 'v'),
					b3Sz,
				)
			}
			Z3Sz = N3Sz.getDate()
			if (Z3Sz < 10) {
				e4nS.A4nS(6)
				Z3Sz = e4nS.v4nS('0', Z3Sz)
			}
			return (
				N3Sz.getFullYear() +
				'-' +
				b3Sz +
				((+'5220', 530.07) == 947.89
					? +'7.60e+3'
					: '2987' - 0 !== (4742, +'5944')
					? '-'
					: ('l', '8.71e+3' - 0)) +
				Z3Sz
			)
		}
		K5Sz.yyyymmddhhmm = function(V3Sz) {
			var x3Sz, H3Sz, T3Sz, E3Sz
			x3Sz = V3Sz.getMonth() + 1
			if (x3Sz < ('10' ^ 0)) {
				e4nS.A4nS(6)
				x3Sz = e4nS.v4nS(
					(6760, 714.78) <= (214.12, '9110' << 1774035904)
						? (9453, 865.99) != (8134, 3830)
							? '0'
							: (!!'', +'0x10d2')
						: 'U',
					x3Sz,
				)
			}
			H3Sz = V3Sz.getDate()
			if (H3Sz < 10) {
				e4nS.P4nS(6)
				H3Sz = e4nS.c4nS('0', H3Sz)
			}
			T3Sz = V3Sz.getHours()
			if (T3Sz < 10) {
				e4nS.P4nS(6)
				T3Sz = e4nS.c4nS(610.88 === (444.28, 6670) ? ![] : '0', T3Sz)
			}
			E3Sz = V3Sz.getMinutes()
			if (E3Sz < 10) {
				e4nS.A4nS(6)
				E3Sz = e4nS.v4nS(('102.39' * 1, 3143) != (7587, 391.16) ? '0' : (!{}, 'B'), E3Sz)
			}
			return '' + V3Sz.getFullYear() + x3Sz + H3Sz + T3Sz + E3Sz
		}
		K5Sz.yyyymmddhhmmssmmm = function(O3Sz) {
			var I3Sz, Q1Tv, q1Tv, E1Tv, g3Sz, e1Tv, P1Tv, d1Tv, p3Sz, Y3Sz, R3Sz, X3Sz, R8Tv, W8Tv, K8Tv
			e4nS.P4nS(33)
			var m9Lv = e4nS.v4nS(16, 10, 17, 248, 16)
			I3Sz = O3Sz.getMonth() + m9Lv
			if (I3Sz < 10) {
				Q1Tv = -1293008590
				q1Tv = 1453174858
				e4nS.A4nS(8)
				E1Tv = e4nS.c4nS(1, '2')
				for (
					var B1Tv = 1;
					e4nS.D8Tv(B1Tv.toString(), B1Tv.toString().length, 24508) !== Q1Tv;
					B1Tv++
				) {
					e4nS.A4nS(6)
					I3Sz = e4nS.c4nS(
						(+'4901', 760.78) >= ('4970' * 1, 1475)
							? +'5440' != (891.92, 487)
								? '9830' << 57011712 > 9193
									? 6.82e3
									: (4.9e3, 0x196a)
								: (143.32, !!{})
							: '0',
						I3Sz,
					)
					E1Tv += 2
				}
				if (e4nS.D8Tv(E1Tv.toString(), E1Tv.toString().length, 20897) !== q1Tv) {
					e4nS.A4nS(34)
					I3Sz = e4nS.c4nS(
						I3Sz,
						(7868, '354100' | 91444) <= ('8892' >> 202009472, 3295)
							? 6158 === ('444945' ^ 0, 328)
								? 2017 >= 968
									? 7384132
									: (7638075, 0x86c4)
								: (2215, ![])
							: '',
					)
				}
			}
			g3Sz = O3Sz.getDate()
			if (g3Sz < +'10') {
				e1Tv = 253790633
				P1Tv = 2043163640
				d1Tv = 2
				for (
					var y1Tv = 1;
					e4nS.D8Tv(y1Tv.toString(), y1Tv.toString().length, +'5676') !== e1Tv;
					y1Tv++
				) {
					e4nS.P4nS(6)
					g3Sz = e4nS.v4nS('0', g3Sz)
					d1Tv += 2
				}
				if (e4nS.D8Tv(d1Tv.toString(), d1Tv.toString().length, 11676) !== P1Tv) {
					e4nS.A4nS(8)
					g3Sz = e4nS.c4nS(g3Sz, '')
				}
			}
			p3Sz = O3Sz.getHours()
			if (p3Sz < 10) {
				e4nS.A4nS(6)
				p3Sz = e4nS.v4nS('0', p3Sz)
			}
			Y3Sz = O3Sz.getMinutes()
			if (Y3Sz < 10) {
				e4nS.P4nS(6)
				Y3Sz = e4nS.v4nS(
					6960 == (+'488', 259) ? (!0, 'J') : 16.8 <= (6293, 7675) ? '0' : 0x177a,
					Y3Sz,
				)
			}
			R3Sz = O3Sz.getSeconds()
			if (R3Sz < 10) {
				e4nS.A4nS(6)
				R3Sz = e4nS.c4nS(
					909.64 == (8370, 5860) ? (347 === (7460, 9360) ? (1.42e3, 'U') : (!!{}, 506.94)) : '0',
					R3Sz,
				)
			}
			X3Sz = O3Sz.getMilliseconds()
			if (X3Sz < 10) {
				R8Tv = 1561429209
				W8Tv = -+'1780113403'
				e4nS.P4nS(26)
				K8Tv = e4nS.c4nS(1857274656, '2')
				for (
					var I1Tv = 1;
					e4nS.n8Tv(I1Tv.toString(), I1Tv.toString().length, 74334) !== R8Tv;
					I1Tv++
				) {
					e4nS.A4nS(4)
					X3Sz = e4nS.c4nS('', X3Sz)
					K8Tv += 2
				}
				if (e4nS.n8Tv(K8Tv.toString(), K8Tv.toString().length, 47278) !== W8Tv) {
					e4nS.P4nS(6)
					X3Sz = e4nS.v4nS('00', X3Sz)
				}
			} else if (X3Sz < 100) {
				e4nS.A4nS(6)
				X3Sz = e4nS.c4nS('0', X3Sz)
			}
			return '' + O3Sz.getFullYear() + I3Sz + g3Sz + p3Sz + Y3Sz + R3Sz + X3Sz
		}
		K5Sz.friendlyDate = function(h3Sz) {
			var K3Sz, D1Tv, n1Tv, l1Tv, v4Sz, A4Sz, S4Sz
			K3Sz = h3Sz.getMonth() + +'1'
			if (K3Sz < 10) {
				D1Tv = 1157361533
				n1Tv = 2126443492
				l1Tv = +'2'
				for (
					var Z1Tv = 1;
					e4nS.D8Tv(Z1Tv.toString(), Z1Tv.toString().length, 71826) !== D1Tv;
					Z1Tv++
				) {
					e4nS.A4nS(4)
					K3Sz = e4nS.c4nS('', K3Sz)
					l1Tv += 2
				}
				if (e4nS.D8Tv(l1Tv.toString(), l1Tv.toString().length, 40676) !== n1Tv) {
					e4nS.A4nS(6)
					K3Sz = e4nS.c4nS('0', K3Sz)
				}
			}
			v4Sz = h3Sz.getDate()
			if (v4Sz < 10) {
				e4nS.P4nS(6)
				v4Sz = e4nS.c4nS(
					218 === (9620, 8103)
						? !'1'
						: (9757, 62) !== (2950, 133.42)
						? '0'
						: (865.46, 9380) != (836.21, 573.87)
						? (!!0, ![])
						: 0xc74,
					v4Sz,
				)
			}
			A4Sz = h3Sz.getHours()
			e4nS.R5Sz()
			if (A4Sz < +'10') {
				e4nS.P4nS(6)
				A4Sz = e4nS.c4nS(
					(3960, 6614) != (3166, 594.9) ? '0' : 235.14 > (2720, 259.85) ? ('i', 71.58) : ![],
					A4Sz,
				)
			}
			S4Sz = h3Sz.getMinutes()
			if (S4Sz < 10) {
				e4nS.P4nS(6)
				S4Sz = e4nS.c4nS(
					+'5770' == +'2310' ? ('i', 562) : ('338.7' * 1, 1128) === 6780 ? 570.55 : '0',
					S4Sz,
				)
			}
			e4nS.P4nS(12)
			var a9Lv = e4nS.c4nS(12, 8174, 4)
			e4nS.A4nS(23)
			var f9Lv = e4nS.c4nS(1330, 2)
			e4nS.A4nS(19)
			var R9Lv = e4nS.v4nS(25, 1521, 14)
			e4nS.A4nS(32)
			var K9Lv = e4nS.v4nS(6, 1558, 92, 16)
			e4nS.P4nS(30)
			var i5Lv = e4nS.c4nS(4828, 4499, 13, 15)
			e4nS.A4nS(35)
			var V5Lv = e4nS.v4nS(14, 63840, 7112, 10, 2)
			return (
				'' +
				h3Sz.getFullYear() +
				(('4758' & 2147483647) != (a9Lv, f9Lv) ? (+'2245' > +'2925' ? ('G', 671.81) : '/') : !!'') +
				K3Sz +
				(R9Lv <= '18.83' - 0 ? ((6612, 482.77) < 133.92 ? !!'' : (K9Lv, !![])) : '/') +
				v4Sz +
				(('1720' & 2147483647, +'602.74') !== i5Lv
					? 3070 <= (V5Lv, 298.47)
						? (!0, 1.94e3)
						: ' '
					: 0x992) +
				A4Sz +
				':' +
				S4Sz
			)
		}
		K5Sz.standardUTCDate = function(m4Sz) {
			var w4Sz, W4Sz, c4Sz, z2Lv, S2Lv, D2Lv, f4Sz, t4Sz
			w4Sz = m4Sz.getUTCMonth() + +'1'
			if (w4Sz < +'10') {
				e4nS.A4nS(6)
				w4Sz = e4nS.v4nS(
					671.57 < +'176.59' ? 0x1a80 : 707.62 === (407.43, +'1890') ? 3.03e3 : '0',
					w4Sz,
				)
			}
			W4Sz = m4Sz.getUTCDate()
			if (W4Sz < 10) {
				e4nS.A4nS(6)
				W4Sz = e4nS.v4nS((119, '181' << 394278304) === +'603' ? ('L', 0x787) : '0', W4Sz)
			}
			c4Sz = m4Sz.getUTCHours()
			if (c4Sz < 10) {
				e4nS.P4nS(7)
				z2Lv = -e4nS.c4nS(153096328, '1035474825')
				S2Lv = +'187879617'
				D2Lv = +'2'
				for (
					var l2Lv = 1;
					e4nS.D8Tv(l2Lv.toString(), l2Lv.toString().length, 22200) !== z2Lv;
					l2Lv++
				) {
					e4nS.P4nS(6)
					c4Sz = e4nS.c4nS(8180 < (3420, 439.28) ? (!{}, +'7.61e+3') : '0', c4Sz)
					D2Lv += 2
				}
				if (e4nS.D8Tv(D2Lv.toString(), D2Lv.toString().length, 47588) !== S2Lv) {
					e4nS.A4nS(4)
					c4Sz = e4nS.v4nS(5141 >= (1636, +'289414') ? (!![], +'3690064') : '', c4Sz)
				}
			}
			f4Sz = m4Sz.getUTCMinutes()
			if (f4Sz < 10) {
				e4nS.P4nS(6)
				f4Sz = e4nS.v4nS('0', f4Sz)
			}
			t4Sz = m4Sz.getUTCSeconds()
			if (t4Sz < +'10') {
				e4nS.P4nS(6)
				t4Sz = e4nS.v4nS('0', t4Sz)
			}
			e4nS.P4nS(8)
			var h5Lv = e4nS.c4nS(918, 5)
			e4nS.A4nS(4)
			var M5Lv = e4nS.v4nS(7399, 11)
			e4nS.P4nS(19)
			var Y5Lv = e4nS.v4nS(11, 6392, 9)
			e4nS.A4nS(36)
			var J5Lv = e4nS.c4nS(8, 720, 9364, 721, 17)
			e4nS.P4nS(19)
			var U5Lv = e4nS.v4nS(50860, 56500, 10)
			e4nS.A4nS(24)
			var O5Lv = e4nS.c4nS(15, 20, 77842, 9, 83355)
			e4nS.P4nS(4)
			var k5Lv = e4nS.v4nS(122960, 116812)
			e4nS.P4nS(0)
			var L5Lv = e4nS.c4nS(14, 706, 9163)
			e4nS.P4nS(37)
			var u5Lv = e4nS.c4nS(5229, 347, 15, 3486)
			e4nS.A4nS(4)
			var v5Lv = e4nS.c4nS(10, 9)
			e4nS.P4nS(32)
			var s5Lv = e4nS.c4nS(17, 25, 7548, 10)
			e4nS.A4nS(38)
			var N5Lv = e4nS.c4nS(8, 5, 18, 75140, 10816313)
			return (
				'' +
				m4Sz.getUTCFullYear() +
				'-' +
				w4Sz +
				((918.88, h5Lv) < (M5Lv, Y5Lv)
					? '-'
					: (605.75, J5Lv) !== (U5Lv, 869.79)
					? !''
					: (939.63, 'R')) +
				W4Sz +
				'T' +
				c4Sz +
				((350.96, 5577) <= (+'2126', O5Lv)
					? (765.25, 500.51) >= k5Lv
						? !1
						: (L5Lv, +'5.64e+3')
					: ':') +
				f4Sz +
				((u5Lv, 687.1) > '269.47' * v5Lv
					? 690.91 == (737.25, +'6820')
						? (!![], s5Lv)
						: (890.61, N5Lv) <= 4735
						? ':'
						: (222.1, +'1.06e+2')
					: (!!'', !0)) +
				t4Sz +
				((9645, 70.5) < 462 ? 'Z' : 'd')
			)
		}
		K5Sz.mmddhhmm = function(L4Sz) {
			var W3Lv, z4Sz, q4Sz, d4Sz, M4Sz, E8Tv, C8Tv, B8Tv, r4Sz
			W3Lv = '0'
			W3Lv += '0'
			z4Sz = K5Sz.strToDateTime(L4Sz)
			q4Sz = z4Sz.getMonth() + 1
			if (q4Sz < ('10' | 2)) {
				e4nS.P4nS(6)
				q4Sz = e4nS.v4nS('0', q4Sz)
			}
			d4Sz = z4Sz.getDate()
			if (d4Sz < 10) {
				e4nS.A4nS(6)
				d4Sz = e4nS.c4nS(
					1670 != (1512, 6220)
						? (546.43, 2720) !== (4590, 1604)
							? '0'
							: (1250, 9500) === ('9120' & 2147483647)
							? (!1, !!0)
							: 0x1c9c
						: (564.55, 'k'),
					d4Sz,
				)
			}
			M4Sz = z4Sz.getHours()
			if (M4Sz < 10) {
				e4nS.P4nS(6)
				M4Sz = e4nS.c4nS('0', M4Sz)
			}
			E8Tv = -1336786742
			e4nS.P4nS(7)
			C8Tv = e4nS.c4nS(873333010, '881739094')
			B8Tv = 2
			for (
				var X8Tv = 1;
				e4nS.n8Tv(X8Tv.toString(), X8Tv.toString().length, 89467) !== E8Tv;
				X8Tv++
			) {
				r4Sz = z4Sz.getMinutes()
				B8Tv += 2
			}
			if (e4nS.n8Tv(B8Tv.toString(), B8Tv.toString().length, 6018) !== C8Tv) {
				r4Sz = z4Sz.getMinutes()
			}
			r4Sz = z4Sz.getMinutes()
			if (r4Sz < 10) {
				e4nS.A4nS(6)
				r4Sz = e4nS.v4nS('0', r4Sz)
			}
			if (M4Sz == '00' && r4Sz == W3Lv) {
				e4nS.P4nS(39)
				var e5Lv = e4nS.v4nS(15, 71482, 16, 4781, 4)
				e4nS.P4nS(13)
				var P5Lv = e4nS.v4nS(2290, 2287, 9148)
				e4nS.P4nS(4)
				var d5Lv = e4nS.c4nS(1167, 11)
				e4nS.A4nS(8)
				var g5Lv = e4nS.c4nS(466, 5)
				e4nS.P4nS(0)
				var y5Lv = e4nS.c4nS(17, 7, 118)
				e4nS.P4nS(19)
				var c5Lv = e4nS.c4nS(5, 963, 24)
				e4nS.P4nS(0)
				var o5Lv = e4nS.c4nS(20, 3099, 58894)
				return (
					q4Sz +
					((e5Lv, P5Lv) == ('9350' | d5Lv, 172.57)
						? g5Lv > (191.22, '520.66' * y5Lv)
							? 680.11 < +'7310'
								? c5Lv
								: 97.37
							: (o5Lv, !'')
						: '-') +
					d4Sz +
					'-' +
					z4Sz.getFullYear()
				)
			}
			e4nS.P4nS(40)
			return e4nS.c4nS(
				(+'5114', +'7180') !== ('3780' | 1536, 6208)
					? '-'
					: (470.11, 3523) <= 647.79
					? ('P', !'')
					: (4.51e3, 784.16),
				M4Sz,
				r4Sz,
				(8140, 905.08) > 3756 ? (6730 < (1397, 1730) ? 'K' : (0x206, '0xd1e' ^ 0)) : ':',
				' ',
				d4Sz,
				q4Sz,
			)
		}
		K5Sz.getYearDay = function(Q4Sz) {
			var C4Sz, a4Sz, s4Sz, i4Sz, u4Sz
			C4Sz = Q4Sz
			if (!C4Sz) {
				C4Sz = new Date()
			}
			C4Sz.setHours(0, 0, +'0', 0)
			a4Sz = new Date(C4Sz.getFullYear(), 0, 0)
			e4nS.P4nS(4)
			s4Sz = e4nS.v4nS(C4Sz, a4Sz)
			e4nS.P4nS(41)
			i4Sz = e4nS.v4nS(1000, '60', 60, 0, '24')
			e4nS.A4nS(23)
			u4Sz = Math.round(e4nS.v4nS(s4Sz, i4Sz))
			return u4Sz
		}
		K5Sz.isDST = function(o4Sz) {
			var e4Sz, J4Sz, U4Sz
			if (!o4Sz) {
				o4Sz = new Date()
			}
			e4Sz = new Date(o4Sz.getFullYear(), 0, +'1')
			J4Sz = new Date(o4Sz.getFullYear(), 6, 1)
			e4nS.h5Sz()
			U4Sz = Math.max(e4Sz.getTimezoneOffset(), J4Sz.getTimezoneOffset())
			return o4Sz.getTimezoneOffset() != U4Sz
		}
		K5Sz.uniqueID = function() {
			var j4Sz, B4Sz
			e4nS.R5Sz()
			j4Sz = new Date()
			B4Sz = j4Sz.getTime().toString(+'36')
			B4Sz += Math.floor(Math.random() * Math.pow(36, 2)).toString(36)
			return B4Sz.toUpperCase()
		}
		K5Sz.getHostName = function(F4Sz) {
			e4nS.R5Sz()
			try {
				return F4Sz.match(/:\/\/(.[^/]+)/)[1]
			} catch (n4Sz) {
				return ''
			}
		}
		K5Sz.getAjaxServer = function(l4Sz) {
			var G4Sz, P4Sz
			G4Sz = !{}
			P4Sz = !!'1'
			if ((K5Sz.isIE9 || K5Sz.isIE8) && l4Sz) {
				if (K5Sz.getHostName(l4Sz) === '') {
					P4Sz = !1
				}
				if (K5Sz.getHostName(l4Sz) == K5Sz.getHostName(window.location.href)) {
					P4Sz = ![]
				}
			}
			if ((K5Sz.isIE9 || K5Sz.isIE8) && P4Sz) {
				G4Sz = new XDomainRequest()
				return G4Sz
			}
			try {
				G4Sz = new XMLHttpRequest()
			} catch (D4Sz) {
				var K3Lv
				K3Lv = 'ajax not suppor'
				K3Lv += 'ted'
				K3Lv += ' in browser'
				alert(K3Lv)
			}
			return G4Sz
		}
		K5Sz.qs = function(V4Sz) {
			var b4Sz, y4Sz, Z4Sz, N4Sz
			b4Sz = {}
			if (!V4Sz) {
				V4Sz = window.location.search.substring(1)
			}
			y4Sz = V4Sz.split('&')
			for (var k4Sz = 0; k4Sz < y4Sz.length; k4Sz++) {
				Z4Sz = y4Sz[k4Sz].indexOf(
					(65, 4493) === (9060, 6640) ? 0x22db : 707.59 <= (3390, +'7516') ? '=' : 767.69,
				)
				if (Z4Sz > '0' * 1) {
					N4Sz = y4Sz[k4Sz].substring(0, Z4Sz)
					e4nS.A4nS(6)
					b4Sz[N4Sz] = y4Sz[k4Sz].substring(e4nS.c4nS(Z4Sz, 1))
				} else {
					N4Sz = y4Sz[k4Sz]
					b4Sz[N4Sz] = null
				}
			}
			return b4Sz
		}
		K5Sz.postAjax = function(H4Sz, v7Sz, K4Sz, h4Sz, R4Sz) {
			var T4Sz, E4Sz, I4Sz, x4Sz, p4Sz, X4Sz, O4Sz, p8Tv, F8Tv, m8Tv, v2Lv, s2Lv, N2Lv, i9Lv
			if (typeof H4Sz == 'string') {
				H4Sz = {
					url: H4Sz,
					payload: v7Sz,
					cb: K4Sz,
					contentType: h4Sz,
					noEpoch: R4Sz,
					method: null,
					responseHeaders: !!0,
				}
			}
			function Y4Sz(c7Sz) {
				var m7Sz, W7Sz, w7Sz, A7Sz
				m7Sz = {}
				if (!H4Sz.responseHeaders) {
					return
				}
				W7Sz = c7Sz.getAllResponseHeaders()
				w7Sz = W7Sz.split(
					(8600, 443) <= 5987
						? '\n'
						: (6735, 92.42) > (2772, 7040)
						? ('V', 0x1895)
						: (+'357.69', 7989) < '4760' - 0
						? 209.8
						: 0x144c,
				)
				e4nS.h5Sz()
				for (var S7Sz = 0; S7Sz < w7Sz.length; S7Sz++) {
					A7Sz = w7Sz[S7Sz].split(
						(1900, +'7839') != 1228
							? (5371, 4440) != (555.52, +'5075')
								? ':'
								: 571.32 !== (820.08, 48.96)
								? !{}
								: (948.03, 616.59)
							: 392.65,
					)
					while (A7Sz[1] && A7Sz[1].charAt(+'0') == ' ') {
						A7Sz[1] = A7Sz[1].substring(1)
					}
					if (A7Sz[0] !== '') {
						m7Sz[A7Sz.shift()] = A7Sz.join(
							(8919, +'409') > (+'446.61', 340) ? ':' : (![], +'1.10e+3'),
						)
					}
				}
				return m7Sz
			}
			T4Sz = H4Sz.url
			E4Sz = H4Sz.cb
			I4Sz = H4Sz.payload
			x4Sz = K5Sz.getAjaxServer(T4Sz)
			if (!x4Sz) {
				return ![]
			}
			p4Sz = new Date()
			if (!H4Sz.noEpoch) {
				if (T4Sz.indexOf('?') == -+'1') {
					e4nS.P4nS(4)
					var z5Lv = e4nS.v4nS(592, 18)
					e4nS.P4nS(39)
					var S5Lv = e4nS.c4nS(6, 84516, 14, 6508, 2)
					e4nS.P4nS(4)
					var n5Lv = e4nS.v4nS(14, 13)
					T4Sz +=
						((118.26, '603.14' - 0) == (5447, 193.38)
							? z5Lv != S5Lv
								? 61.26 === 9633
									? 396.76
									: ('K', !![])
								: (!![], '763.21' * n5Lv)
							: '?') + p4Sz.getTime()
				} else {
					e4nS.P4nS(4)
					var l5Lv = e4nS.c4nS(64638, 61236)
					e4nS.P4nS(8)
					var T5Lv = e4nS.v4nS(1374, 5)
					e4nS.A4nS(4)
					var Z5Lv = e4nS.c4nS(5997, 5)
					e4nS.A4nS(23)
					var Q5Lv = e4nS.c4nS(7770, 14)
					e4nS.A4nS(42)
					var q5Lv = e4nS.c4nS(14, 262, 782)
					e4nS.A4nS(6)
					var E5Lv = e4nS.c4nS(38, 527)
					e4nS.A4nS(43)
					var C5Lv = e4nS.v4nS(1166219, 19, 58800, 20)
					T4Sz +=
						(723.62 < (+'983', l5Lv)
							? (T5Lv, Z5Lv) === Q5Lv
								? (q5Lv, 'd')
								: (E5Lv, 129.6) === (C5Lv, 539.35)
								? 4.02e3
								: '&'
							: 'J') + p4Sz.getTime()
				}
			}
			X4Sz = H4Sz.method
			O4Sz = H4Sz.headers
			if (!X4Sz) {
				X4Sz = I4Sz ? 'POST' : 'GET'
			}
			e4nS.R5Sz()
			if ((!K5Sz.isIE9 && !K5Sz.isIE8) || x4Sz.constructor == XMLHttpRequest) {
				x4Sz.open(X4Sz, T4Sz, !!{})
				if (!H4Sz.contentType) {
					p8Tv = 1070536500
					e4nS.A4nS(8)
					F8Tv = -e4nS.v4nS(1, '1691521668')
					e4nS.A4nS(9)
					m8Tv = e4nS.v4nS('2', 293511552)
					for (
						var f8Tv = 1;
						e4nS.D8Tv(f8Tv.toString(), f8Tv.toString().length, '23192' ^ 0) !== p8Tv;
						f8Tv++
					) {
						H4Sz.contentType = ''
						m8Tv += 2
					}
					if (e4nS.n8Tv(m8Tv.toString(), m8Tv.toString().length, 13405) !== F8Tv) {
						H4Sz.contentType = 'application/x-www-form-urlencoded'
					}
				}
				if (I4Sz) {
					v2Lv = -+'410384755'
					s2Lv = -262199737
					N2Lv = 2
					for (
						var b2Lv = 1;
						e4nS.D8Tv(b2Lv.toString(), b2Lv.toString().length, 67653) !== v2Lv;
						b2Lv++
					) {
						x4Sz.setRequestHeader('', H4Sz.contentType)
						N2Lv += 2
					}
					if (e4nS.D8Tv(N2Lv.toString(), N2Lv.toString().length, 15462) !== s2Lv) {
						i9Lv = 'Content-'
						i9Lv += 'Type'
						x4Sz.setRequestHeader(i9Lv, H4Sz.contentType)
					}
				}
				if (O4Sz) {
					for (var g4Sz in O4Sz) {
						x4Sz.setRequestHeader(g4Sz, O4Sz[g4Sz])
					}
				}
			} else {
				T4Sz = T4Sz.replace('https:', window.location.protocol)
				x4Sz.open(X4Sz, T4Sz, !!'1')
				x4Sz.onload = function() {
					E4Sz(200, x4Sz.responseText, Y4Sz(x4Sz))
				}
				x4Sz.onerror = function() {
					E4Sz(0, null, {})
				}
				x4Sz.onprogress = function() {}
			}
			x4Sz.onreadystatechange = function() {
				var A2Lv, t2Lv, e2Lv
				if (x4Sz.readyState == 4) {
					if (x4Sz.status != 200) {
						E4Sz(x4Sz.status, x4Sz.responseText, Y4Sz(x4Sz))
					} else {
						A2Lv = -1058636002
						t2Lv = 265109910
						e2Lv = 2
						for (
							var d2Lv = 1;
							e4nS.D8Tv(d2Lv.toString(), d2Lv.toString().length, 42361) !== A2Lv;
							d2Lv++
						) {
							E4Sz(200, x4Sz.responseText, Y4Sz(x4Sz))
							e2Lv += 2
						}
						if (e4nS.n8Tv(e2Lv.toString(), e2Lv.toString().length, 95762) !== t2Lv) {
							E4Sz(118, x4Sz.responseText, Y4Sz(x4Sz))
						}
					}
				}
			}
			try {
				x4Sz.send(I4Sz)
			} catch (f7Sz) {
				E4Sz(0, f7Sz, {})
			}
			return !![]
		}
		K5Sz.generateGUID = function() {
			var I9Lv, t7Sz, z7Sz
			I9Lv = 'xxxxxxxx-xxxx-4xxx-yxxx-'
			I9Lv += 'xxxxxxxxxxxx'
			t7Sz = new Date().getTime()
			if (window.performance && typeof window.performance.now === 'function') {
				t7Sz += performance.now()
			}
			z7Sz = I9Lv.replace(/[xy]/g, function(d7Sz) {
				var q7Sz
				e4nS.A4nS(6)
				var j5Lv = e4nS.v4nS(14, 2)
				e4nS.P4nS(6)
				var X5Lv = e4nS.c4nS(14, 2)
				q7Sz = (t7Sz + Math.random() * j5Lv) % X5Lv | 0
				e4nS.A4nS(23)
				t7Sz = Math.floor(e4nS.v4nS(t7Sz, 16))
				return (d7Sz ==
				((1820, 526.36) < 2619
					? 848 == 948
						? ('U', 2.35e3)
						: 9272 >= ('4220' & 2147483647, 7330)
						? 'x'
						: 'u'
					: !![])
					? q7Sz
					: (q7Sz & 0x3) | 0x8
				).toString(16)
			})
			e4nS.h5Sz()
			return z7Sz
		}
		return A9Sz
	} /* ignore jslint end   */ /* eslint-enable  */ /* jshint ignore:end   */

	_exports = _exports || {}
	__js_core_polyfills_(_exports)
	__js_core_utility_(_exports)
	__js_core_timezone_(_exports)
	__js_core_core_(_exports, _exports)
	__js_core_market_(_exports)
	__js_core_engine_(_exports, _exports, _exports, _exports)
	__js_core_microkernel_(_exports)

	return _exports
})
