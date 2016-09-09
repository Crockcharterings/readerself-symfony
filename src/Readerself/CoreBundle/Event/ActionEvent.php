<?php
namespace Readerself\CoreBundle\Event;

use Readerself\CoreBundle\Entity\Action;
use Symfony\Component\EventDispatcher\Event;

class ActionEvent extends Event
{
    protected $data;

    protected $mode;

    public function __construct(Action $data, $mode)
    {
        $this->data = $data;
        $this->mode = $mode;
    }

    public function getData()
    {
        return $this->data;
    }

    public function getMode()
    {
        return $this->mode;
    }
}
