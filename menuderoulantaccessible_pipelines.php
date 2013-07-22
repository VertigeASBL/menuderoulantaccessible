<?php
/**
 * Utilisations de pipelines par Menu Déroulant Accessible
 *
 * @plugin     Menu Déroulant Accessible
 * @copyright  2013
 * @author     Vertige ASBL
 * @licence    GNU/GPL
 * @package    SPIP\Menuderoulantaccessible\Pipelines
 */

if (!defined('_ECRIRE_INC_VERSION')) return;

function menuderoulantaccessible_insert_head ($flux) {

  return $flux . '<script type="text/javascript" src="' . find_in_path('jquery.menu.js') . '"></script>';
}

?>
