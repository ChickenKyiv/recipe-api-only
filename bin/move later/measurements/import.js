
		$this->insert('{{measurement_systems}}',
		{
			id: 10,
			title: 'Universal',
			atlas: 'Universal'
		}
		[
			'id' => 10,
			'title' => 'Universal',
			'alias' => 'universal',
		]);
		{
			id: 20,
			title: 'Metric',
			atlas: 'Metric'
		}
		$this->insert('{{measurement_systems}}', [
			'id' => 20,
			'title' => 'Metric',
			'alias' => 'metric',
		]);
		{
			id: 30,
			title: 'US Imperial',
			atlas: 'us-imperial'
		}
		$this->insert('{{measurement_systems}}', [
			'id' => 30,
			'title' => 'US Imperial',
			'alias' => 'us-imperial',
		]);

		$this->createTable('{{measurement_units}}', [
			'id' => 'int (11) UNSIGNED PRIMARY KEY',
			'system_id' => 'int (11) UNSIGNED NOT NULL',
			'type' => 'enum ("Weight", "Volume", "Linear", "Cubic") NOT NULL',
			'name' => 'varchar (50) NOT NULL',
			'singular' => 'varchar (50) NOT NULL',
			'plural' => 'varchar (55) NOT NULL',
			'short' => 'varchar (5) NOT NULL',
			'pattern' => 'varchar (255) NOT NULL',
			'error_message' => 'varchar (255) NULL DEFAULT NULL',
		], 'ENGINE=InnoDB DEFAULT CHARSET=utf8');


		$this->createIndex('idx_system_id', '{{measurement_units}}', 'system_id', false);
		$this->createIndex('uniq_name', '{{measurement_units}}', 'name', true);

		$this->addForeignKey('fk_unit_system', '{{measurement_units}}', 'system_id', '{{measurement_systems}}', 'id', 'CASCADE', 'CASCADE');

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 10,
			'system_id' => 20, //Metric
			'type' => 'Weight',
			'name' => 'Milligram',
			'singular' => 'milligram',
			'plural' => 'milligrams',
			'short' => 'mg',
			'pattern' => '[\d]{1,3}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 20,
			'system_id' => 20, //Metric
			'type' => 'Weight',
			'name' => 'Centigram',
			'singular' => 'centigram',
			'plural' => 'centigrams',
			'short' => 'cg',
			'pattern' => '[\d]{1,3}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 30,
			'system_id' => 20, //Metric
			'type' => 'Weight',
			'name' => 'Decigram',
			'singular' => 'decigram',
			'plural' => 'decigrams',
			'short' => 'dg',
			'pattern' => '[\d]{1,3}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 40,
			'system_id' => 20, //Metric
			'type' => 'Weight',
			'name' => 'Gram',
			'singular' => 'gram',
			'plural' => 'grams',
			'short' => 'g',
			'pattern' => '[\d]{1,3}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 50,
			'system_id' => 20, //Metric
			'type' => 'Weight',
			'name' => 'Dekagram',
			'singular' => 'dekagram',
			'plural' => 'dekagrams',
			'short' => 'dag',
			'pattern' => '[\d]{1,3}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 60,
			'system_id' => 20, //Metric
			'type' => 'Weight',
			'name' => 'Hectogram',
			'singular' => 'hectogram',
			'plural' => 'hectograms',
			'short' => 'hg',
			'pattern' => '[\d]{1,3}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 70,
			'system_id' => 20, //Metric
			'type' => 'Weight',
			'name' => 'Kilogram',
			'singular' => 'kilogram',
			'plural' => 'kilograms',
			'short' => 'kg',
			'pattern' => '([\d]+)|([\d]+\.[\d]{1,3})',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 80,
			'system_id' => 20, //Metric
			'type' => 'Volume',
			'name' => 'Milliliter',
			'singular' => 'milliliter',
			'plural' => 'milliliters',
			'short' => 'ml',
			'pattern' => '[\d]{1,3}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 90,
			'system_id' => 20, //Metric
			'type' => 'Volume',
			'name' => 'Centiliter',
			'singular' => 'centiliter',
			'plural' => 'centiliters',
			'short' => 'cl',
			'pattern' => '[\d]{1,3}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 100,
			'system_id' => 20, //Metric
			'type' => 'Volume',
			'name' => 'Deciliter',
			'singular' => 'deciliter',
			'plural' => 'deciliters',
			'short' => 'dl',
			'pattern' => '[\d]{1,3}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 110,
			'system_id' => 20, //Metric
			'type' => 'Volume',
			'name' => 'Liter',
			'singular' => 'liter',
			'plural' => 'liters',
			'short' => 'l',
			'pattern' => '[\d]{1,3}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 120,
			'system_id' => 20, //Metric
			'type' => 'Linear',
			'name' => 'Millimeter',
			'singular' => 'millimeter',
			'plural' => 'millimeters',
			'short' => 'mm',
			'pattern' => '[\d]{1,3}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 130,
			'system_id' => 20, //Metric
			'type' => 'Linear',
			'name' => 'Centimeter',
			'singular' => 'centimeter',
			'plural' => 'centimeters',
			'short' => 'cm',
			'pattern' => '[\d]{1,3}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 140,
			'system_id' => 20, //Metric
			'type' => 'Linear',
			'name' => 'Decimeter',
			'singular' => 'decimeter',
			'plural' => 'decimeters',
			'short' => 'dm',
			'pattern' => '[\d]{1,3}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 150,
			'system_id' => 20, //Metric
			'type' => 'Linear',
			'name' => 'Meter',
			'singular' => 'meter',
			'plural' => 'meters',
			'short' => 'm',
			'pattern' => '[\d]{1,3}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 160,
			'system_id' => 20, //Metric
			'type' => 'Cubic',
			'name' => 'Cubic Millimeter',
			'singular' => 'cubic millimeter',
			'plural' => 'cubic millimeters',
			'short' => 'mm3',
			'pattern' => '([\d]+)|([\d]+\.[\d]{1,3})',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 170,
			'system_id' => 20, //Metric
			'type' => 'Cubic',
			'name' => 'Cubic Centimeter',
			'singular' => 'cubic centimeter',
			'plural' => 'cubic centimeters',
			'short' => 'cm3',
			'pattern' => '([\d]+)|([\d]+\.[\d]{1,3})',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 180,
			'system_id' => 20, //Metric
			'type' => 'Cubic',
			'name' => 'Cubic Decimeter',
			'singular' => 'cubic decimeter',
			'plural' => 'cubic decimeters',
			'short' => 'dm3',
			'pattern' => '([\d]+)|([\d]+\.[\d]{1,3})',
			'error_message' => null,
		]);


		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 1000,
			'system_id' => 30, //US Imperial
			'type' => 'Volume',
			'name' => 'Minim',
			'singular' => 'minim',
			'plural' => 'minim',
			'short' => 'min',
			'pattern' => '[\d]{1,3}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 1010,
			'system_id' => 30, //US Imperial
			'type' => 'Volume',
			'name' => 'Fluid Dram',
			'singular' => 'fluid dram',
			'plural' => 'fluid drams',
			'short' => 'fl dr',
			'pattern' => '[\d]{1,2}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 1020,
			'system_id' => 30, //US Imperial
			'type' => 'Volume',
			'name' => 'Teaspoon',
			'singular' => 'teaspoon',
			'plural' => 'teaspoons',
			'short' => 'tsp',
			'pattern' => '[\d]{1,2}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 1030,
			'system_id' => 30, //US Imperial
			'type' => 'Volume',
			'name' => 'Tablespoon',
			'singular' => 'tablespoon',
			'plural' => 'tablespoons',
			'short' => 'tbsp',
			'pattern' => '[\d]{1,2}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 1040,
			'system_id' => 30, //US Imperial
			'type' => 'Volume',
			'name' => 'Fluid Ounce',
			'singular' => 'fluid ounce',
			'plural' => 'fluid ounces',
			'short' => 'fl oz',
			'pattern' => '[\d]{1,2}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}
		[
			'id' => 1050,
			'system_id' => 30, //US Imperial
			'type' => 'Volume',
			'name' => 'Shot',
			'singular' => 'shot',
			'plural' => 'shots',
			'short' => 'jig',
			'pattern' => '[\d]{1,2}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}

		[
			'id' => 1060,
			'system_id' => 30, //US Imperial
			'type' => 'Volume',
			'name' => 'Gill',
			'singular' => 'gill',
			'plural' => 'gills',
			'short' => 'gi',
			'pattern' => '[\d]{1,2}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',

		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}


		[
			'id' => 1070,
			'system_id' => 30, //US Imperial
			'type' => 'Volume',
			'name' => 'Cup',
			'singular' => 'cup',
			'plural' => 'cups',
			'short' => 'cp',
			'pattern' => '[\d]{1,2}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',

		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}



		[
			'id' => 1080,
			'system_id' => 30, //US Imperial
			'type' => 'Volume',
			'name' => 'Pint',
			'singular' => 'pint',
			'plural' => 'pints',
			'short' => 'pt',
			'pattern' => '[\d]{1,2}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',


		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}


		[
			'id' => 1090,
			'system_id' => 30, //US Imperial
			'type' => 'Volume',
			'name' => 'Quart',
			'singular' => 'quart',
			'plural' => 'quarts',
			'short' => 'qt',
			'pattern' => '[\d]{1,2}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',

		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}


		[
			'id' => 1100,
			'system_id' => 30, //US Imperial
			'type' => 'Volume',
			'name' => 'Gallon',
			'singular' => 'gallon',
			'plural' => 'gallons',
			'short' => 'gal',
			'pattern' => '[\d]{1,2}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',

		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}


		[
			'id' => 1110,
			'system_id' => 30, //US Imperial
			'type' => 'Linear',
			'name' => 'Inch',
			'singular' => 'inch',
			'plural' => 'inches',
			'short' => 'in',
			'pattern' => '[\d]{1,3}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',

		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}



		[
			'id' => 1120,
			'system_id' => 30, //US Imperial
			'type' => 'Linear',
			'name' => 'Foot',
			'singular' => 'foot',
			'plural' => 'feet',
			'short' => 'ft',
			'pattern' => '[\d]{1,2}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',

		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}


		[
			'id' => 1130,
			'system_id' => 30, //US Imperial
			'type' => 'Linear',
			'name' => 'Yard',
			'singular' => 'yard',
			'plural' => 'yards',
			'short' => 'yd',
			'pattern' => '[\d]{1,2}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',


		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}


		[
			'id' => 1140,
			'system_id' => 30, //US Imperial
			'type' => 'Weight',
			'name' => 'Ounce',
			'singular' => 'ounce',
			'plural' => 'ounces',
			'short' => 'oz',
			'pattern' => '[\d]{1,2}',
			'error_message' => null,
		]);

		$this->insert('{{measurement_units}}',

		[
		 'id'
		 'system_id'
		 'type'
		 'name'
		 'singular'
		 'plural'
		 'short'
	 ]
		{
			id: 1150,
			system_id: 30, //US Imperial
			type: 'Weight',
			name: 'Pound',
			singular: 'pound',
			plural: 'pounds',

			short: 'lb'
		}

	);
