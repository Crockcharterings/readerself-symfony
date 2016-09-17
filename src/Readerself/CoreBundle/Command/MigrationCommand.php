<?php
namespace Readerself\CoreBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class MigrationCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('readerself:migration')
            ->setDescription('Start migration')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $this->getContainer()->get('readerself_core_manager_migration')->start();
    }
}
